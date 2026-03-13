import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Trophy, 
  FileText, 
  Settings, 
  ChevronRight, 
  Download, 
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  Brain,
  Cpu,
  Globe,
  ShieldAlert,
  CloudLightning,
  Loader2,
  ArrowLeft,
  RefreshCw,
  Plus,
  Palette,
  Moon,
  Sun,
  Trees,
  Zap,
  Database,
  Trash2,
  ArrowRight,
  Sparkles,
  Waves,
  Heart,
  Shuffle,
  Dices,
  Terminal,
  Ghost,
  Wind,
  Flower2,
  Coffee,
  Tv,
  Leaf,
  Crown,
  Clock,
  Eye,
  Timer,
  LayoutGrid,
  List,
  Menu,
  X
} from "lucide-react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { STUDY_GUIDE_DATA } from "./data/studyGuide";
import { generateQuestions, Question } from "./services/quizService";
import { HARDWARE_NEW_QUESTIONS } from "./data/hardwareQuestions";
import { NETWORKING_NEW_QUESTIONS } from "./data/networkingQuestions";
import { CYBERSECURITY_NEW_QUESTIONS } from "./data/cybersecurityQuestionsNew";
import { KALI_NEW_QUESTIONS } from "./data/kaliQuestionsNew";
import { WEB_NEW_QUESTIONS } from "./data/webQuestionsNew";
import { CLOUD_NEW_QUESTIONS } from "./data/cloudQuestionsNew";
import { EMERGING_NEW_QUESTIONS } from "./data/emergingQuestionsNew";
import { ACRONYMS_NEW_QUESTIONS } from "./data/acronymsQuestionsNew";
import { RISK_NEW_QUESTIONS } from "./data/riskQuestionsNew";
import { CRYPTO_NEW_QUESTIONS } from "./data/cryptoQuestionsNew";
import { ACCESS_NEW_QUESTIONS } from "./data/accessQuestionsNew";
import { GENERAL_NEW_QUESTIONS } from "./data/generalQuestionsNew";

const PRELOADED_QUESTIONS: Question[] = [
  ...HARDWARE_NEW_QUESTIONS,
  ...NETWORKING_NEW_QUESTIONS,
  ...CYBERSECURITY_NEW_QUESTIONS,
  ...KALI_NEW_QUESTIONS,
  ...WEB_NEW_QUESTIONS,
  ...CLOUD_NEW_QUESTIONS,
  ...EMERGING_NEW_QUESTIONS,
  ...ACRONYMS_NEW_QUESTIONS,
  ...RISK_NEW_QUESTIONS,
  ...CRYPTO_NEW_QUESTIONS,
  ...ACCESS_NEW_QUESTIONS,
  ...GENERAL_NEW_QUESTIONS,
];

type View = "dashboard" | "study" | "quiz-setup" | "quiz" | "results" | "master-bank" | "game-mode" | "random-setup";

export default function App() {
  const [view, setView] = useState<View>("dashboard");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("Easy");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedSet, setSelectedSet] = useState<number>(1);
  const [masterQuestions, setMasterQuestions] = useState<Question[]>(() => {
    const saved = localStorage.getItem("ict_master_questions");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const combined = [...PRELOADED_QUESTIONS, ...parsed];
        const unique = Array.from(new Map(combined.map(q => [q.question, q])).values());
        return unique;
      } catch (e) {
        return PRELOADED_QUESTIONS;
      }
    }
    return PRELOADED_QUESTIONS;
  });
  
  const [completedSets, setCompletedSets] = useState<Record<string, number[]>>(() => {
    const saved = localStorage.getItem("ict_completed_sets");
    return saved ? JSON.parse(saved) : {};
  });

  const [pendingSets, setPendingSets] = useState<Record<string, number[]>>(() => {
    const saved = localStorage.getItem("ict_pending_sets");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("ict_master_questions", JSON.stringify(masterQuestions));
  }, [masterQuestions]);

  useEffect(() => {
    localStorage.setItem("ict_completed_sets", JSON.stringify(completedSets));
  }, [completedSets]);

  useEffect(() => {
    localStorage.setItem("ict_pending_sets", JSON.stringify(pendingSets));
  }, [pendingSets]);

  const [studyLayout, setStudyLayout] = useState<"grid" | "list">(() => (localStorage.getItem("ict_study_layout") as "grid" | "list") || "grid");
  const [bankTopic, setBankTopic] = useState("");
  const [bankDiff, setBankDiff] = useState("All");
  const [bankPage, setBankPage] = useState(1);

  useEffect(() => { setBankPage(1); }, [bankTopic, bankDiff]);

  const [isGeneratingBank, setIsGeneratingBank] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [theme, setTheme] = useState<'classic' | 'midnight' | 'sunset' | 'forest' | 'brutalist' | 'neon' | 'ocean' | 'rose' | 'cyberpunk' | 'dracula' | 'nord' | 'lavender' | 'retro' | 'coffee' | 'mint' | 'velvet'>('classic');

  // Timer state
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(30);
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('ict_quiz_theme') as any;
    if (saved) setTheme(saved);
    const savedTimer = localStorage.getItem('ict_timer_enabled');
    if (savedTimer) setTimerEnabled(savedTimer === 'true');
    const savedTimerSec = localStorage.getItem('ict_timer_seconds');
    if (savedTimerSec) setTimerSeconds(parseInt(savedTimerSec));
  }, []);

  useEffect(() => {
    localStorage.setItem('ict_quiz_theme', theme);
    document.body.className = theme === 'classic' ? '' : `theme-${theme}`;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('ict_timer_enabled', String(timerEnabled));
  }, [timerEnabled]);

  useEffect(() => {
    localStorage.setItem('ict_timer_seconds', String(timerSeconds));
  }, [timerSeconds]);

  // Timer logic
  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    if (!timerEnabled) return;
    setTimeLeft(timerSeconds);
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          stopTimer();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [timerEnabled, timerSeconds, stopTimer]);

  useEffect(() => {
    if (timeLeft === 0 && timerEnabled && view === "quiz" && !showExplanation && questions.length > 0) {
      handleRevealAnswer();
    }
  }, [timeLeft]);

  useEffect(() => {
    if (view === "quiz" && !showExplanation && questions.length > 0) {
      startTimer();
    }
    return stopTimer;
  }, [currentQuestionIndex, view]);

  useEffect(() => {
    if (showExplanation) stopTimer();
  }, [showExplanation, stopTimer]);

  const topics = [
    { id: "Hardware & Architecture", icon: <Cpu className="w-6 h-6" />, color: "bg-blue-500" },
    { id: "Networking & Protocols", icon: <Globe className="w-6 h-6" />, color: "bg-emerald-500" },
    { id: "Cybersecurity Concepts", icon: <ShieldAlert className="w-6 h-6" />, color: "bg-red-500" },
    { id: "Kali Linux & Tools", icon: <Terminal className="w-6 h-6" />, color: "bg-stone-700" },
    { id: "Web & Software Development", icon: <FileText className="w-6 h-6" />, color: "bg-amber-500" },
    { id: "Cloud & Enterprise Computing", icon: <CloudLightning className="w-6 h-6" />, color: "bg-indigo-500" },
    { id: "Emerging Technologies", icon: <Brain className="w-6 h-6" />, color: "bg-purple-500" },
    { id: "ICT Acronyms Master List", icon: <BookOpen className="w-6 h-6" />, color: "bg-pink-500" },
    { id: "Risk Management & Business Continuity", icon: <ShieldAlert className="w-6 h-6" />, color: "bg-orange-500" },
    { id: "Applied Cryptography", icon: <Settings className="w-6 h-6" />, color: "bg-cyan-500" },
    { id: "Access Control & Network Defenses", icon: <ShieldAlert className="w-6 h-6" />, color: "bg-rose-500" },
    { id: "General ICT", icon: <FileText className="w-6 h-6" />, color: "bg-slate-500" },
  ];

  const shuffleArray = <T,>(arr: T[]): T[] => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const markSetPending = (topic: string, diff: string, setNum: number) => {
    const key = `${topic}-${diff}`;
    setPendingSets(prev => {
      const arr = prev[key] || [];
      if (!arr.includes(setNum)) return { ...prev, [key]: [...arr, setNum] };
      return prev;
    });
  };

  const markSetCompleted = (topic: string, diff: string, setNum: number) => {
    const key = `${topic}-${diff}`;
    setCompletedSets(prev => {
      const arr = prev[key] || [];
      if (!arr.includes(setNum)) return { ...prev, [key]: [...arr, setNum] };
      return prev;
    });
    setPendingSets(prev => {
      const arr = prev[key] || [];
      return { ...prev, [key]: arr.filter(s => s !== setNum) };
    });
  };

  const startQuiz = async (topic: string, difficulty: string, setNum?: number) => {
    setIsLoading(true);
    let quizQuestions: Question[] = [];
    
    if (setNum) {
      setSelectedSet(setNum);
      const filtered = PRELOADED_QUESTIONS.filter(
        q => q.topic === topic && q.difficulty === difficulty
      );
      const startIndex = (setNum - 1) * 10;
      quizQuestions = filtered.slice(startIndex, startIndex + 10);
      
      if (quizQuestions.length < 10) {
        const needed = 10 - quizQuestions.length;
        const generated = await generateQuestions(topic, difficulty);
        const newBatch = generated.slice(0, needed);
        quizQuestions = [...quizQuestions, ...newBatch];
        setMasterQuestions(prev => {
          const combined = [...prev, ...generated];
          const unique = Array.from(new Map(combined.map(q => [q.question, q])).values());
          return unique;
        });
      }

      markSetPending(topic, difficulty, setNum);
    } else {
      setSelectedSet(0);
      const diffFilter = difficulty === "Mixed" ? undefined : difficulty;
      const filtered = PRELOADED_QUESTIONS.filter(
        q => q.topic === topic && (diffFilter ? q.difficulty === diffFilter : true)
      );
      
      if (filtered.length >= 10) {
        quizQuestions = shuffleArray<Question>(filtered).slice(0, 10);
      } else if (filtered.length > 0) {
        quizQuestions = shuffleArray<Question>(filtered);
      } else {
        const generated = await generateQuestions(topic, difficulty);
        quizQuestions = generated;
        setMasterQuestions(prev => {
          const combined = [...prev, ...generated];
          const unique = Array.from(new Map(combined.map(q => [q.question, q])).values());
          return unique;
        });
      }
    }

    setQuestions(quizQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setShowExplanation(false);
    setIsLoading(false);
    setView("quiz");
  };

  // Random quiz config state
  const [randomMode, setRandomMode] = useState<"quick" | "custom">("quick");
  const [quickCount, setQuickCount] = useState(10);
  const [customCounts, setCustomCounts] = useState({ Easy: 5, Medium: 3, Difficult: 2 });
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [customInput, setCustomInput] = useState("");

  const startRandomQuiz = (count: number, topicFilter?: string[], diffFilter?: string) => {
    const pool = PRELOADED_QUESTIONS.filter(q => {
      const topicOk = !topicFilter || topicFilter.length === 0 || topicFilter.includes(q.topic);
      const diffOk = !diffFilter || diffFilter === "Mixed" || q.difficulty === diffFilter;
      return topicOk && diffOk;
    });
    const shuffled = shuffleArray(pool).slice(0, Math.min(count, pool.length));
    if (shuffled.length === 0) return;
    
    setSelectedTopic(topicFilter && topicFilter.length === 1 ? topicFilter[0] : "Random Mix");
    setSelectedDifficulty(diffFilter || "Mixed");
    setSelectedSet(0);
    setQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setShowExplanation(false);
    setView("quiz");
  };

  const startCustomDiffQuiz = () => {
    const topicFilter = selectedTopics.length > 0 ? selectedTopics : undefined;
    let pool: Question[] = [];
    (["Easy", "Medium", "Difficult"] as const).forEach(diff => {
      const count = customCounts[diff];
      if (count <= 0) return;
      const available = PRELOADED_QUESTIONS.filter(q => {
        const topicOk = !topicFilter || topicFilter.includes(q.topic);
        return topicOk && q.difficulty === diff;
      });
      pool = [...pool, ...shuffleArray(available).slice(0, count)];
    });
    if (pool.length === 0) return;

    setSelectedTopic(selectedTopics.length === 1 ? selectedTopics[0] : "Custom Mix");
    setSelectedDifficulty("Mixed");
    setSelectedSet(0);
    setQuestions(shuffleArray(pool));
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setShowExplanation(false);
    setView("quiz");
  };

  const startFullRandom = () => {
    const count = Math.floor(Math.random() * 46) + 5;
    startRandomQuiz(count);
  };

  const handleAnswer = (answer: string) => {
    setUserAnswers({ ...userAnswers, [questions[currentQuestionIndex].id]: answer });
    setShowExplanation(true);
  };

  const handleRevealAnswer = () => {
    setUserAnswers(prev => ({ ...prev, [questions[currentQuestionIndex].id]: "__skipped__" }));
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore();
      setView("results");
    }
  };

  const exitQuiz = () => {
    stopTimer();
    if (selectedSet > 0) {
      setView("game-mode");
    } else {
      setView("dashboard");
    }
  };

  const calculateScore = () => {
    let s = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase().trim()) {
        s++;
      }
    });
    setScore(s);

    if (selectedSet > 0) {
      markSetCompleted(selectedTopic, selectedDifficulty, selectedSet);
    }
  };

  const exportToPDF = (type: "study" | "quiz", customQuestions?: Question[]) => {
    const doc = new jsPDF();
    const timestamp = new Date().toLocaleString();
    const questionsToExport = customQuestions || questions;

    if (type === "study") {
      doc.setFontSize(22);
      doc.text("ICT Quiz Bee - Comprehensive Study Guide", 14, 20);
      doc.setFontSize(10);
      doc.text(`Generated on: ${timestamp}`, 14, 28);

      let yPos = 40;
      STUDY_GUIDE_DATA.forEach((section) => {
        if (yPos > 250) {
          doc.addPage();
          yPos = 20;
        }
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 255);
        doc.text(section.section, 14, yPos);
        yPos += 10;

        autoTable(doc, {
          startY: yPos,
          head: [["Term", "Definition"]],
          body: section.items.map(item => [item.term, item.definition]),
          theme: 'striped',
          styles: { fontSize: 9 },
          margin: { top: 10 }
        });
        
        yPos = (doc as any).lastAutoTable.finalY + 15;
      });
    } else {
      doc.setFontSize(22);
      doc.text(customQuestions ? "Master Question Bank" : `Quiz: ${selectedTopic} (${selectedDifficulty})`, 14, 20);
      doc.setFontSize(12);
      doc.text(`Questions & Answers Master List`, 14, 30);

      autoTable(doc, {
        startY: 40,
        head: [["#", "Topic", "Difficulty", "Question", "Answer"]],
        body: questionsToExport.map((q, i) => [i + 1, q.topic, q.difficulty, q.question, q.answer]),
        theme: 'grid',
        styles: { fontSize: 8 },
        columnStyles: {
          3: { cellWidth: 80 },
          4: { cellWidth: 40 },
        }
      });
    }

    doc.save(`ICT_Quiz_Bee_${type}_${Date.now()}.pdf`);
  };

  const timerPercent = timerEnabled && timerSeconds > 0 ? (timeLeft / timerSeconds) * 100 : 0;

  return (
    <div className="min-h-screen bg-bg text-ink font-sans selection:bg-accent/20 transition-colors duration-500">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] animate-blob-delay"></div>
        <div className="absolute top-[30%] right-[20%] w-[25%] h-[25%] bg-accent/3 rounded-full blur-[100px] animate-blob"></div>
      </div>

      <div className="relative z-10">
        <header className="bg-bg/80 backdrop-blur-md border-b border-ink/10 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
            <div 
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group" 
              onClick={() => setView("dashboard")}
            >
              <div className="bg-ink p-1.5 sm:p-2 rounded-lg sm:rounded-xl group-hover:rotate-6 transition-transform">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-bg" />
              </div>
              <h1 className="font-display font-bold text-base sm:text-lg leading-none tracking-tight">ICT QUIZ BEE</h1>
            </div>
            <div className="hidden md:flex gap-8">
              <button 
                onClick={() => setView("study")}
                className={`text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2 ${view === 'study' ? 'text-accent' : 'text-ink/40 hover:text-ink'}`}
              >
                <BookOpen className="w-4 h-4" /> Study
              </button>
              <button 
                onClick={() => setView("master-bank")}
                className={`text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2 ${view === 'master-bank' ? 'text-accent' : 'text-ink/40 hover:text-ink'}`}
              >
                <FileText className="w-4 h-4" /> Bank
              </button>
              <button 
                onClick={() => setView("dashboard")}
                className={`text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2 ${view === 'dashboard' ? 'text-accent' : 'text-ink/40 hover:text-ink'}`}
              >
                <Trophy className="w-4 h-4" /> Quiz
              </button>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setShowSettings(true)}
                className="p-2 hover:bg-ink/5 rounded-full transition-colors"
              >
                <Settings className="w-5 h-5 text-ink/40 hover:text-ink" />
              </button>
            </div>
          </div>
        </header>

        {view !== "quiz" && (
          <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-t border-ink/10 safe-area-bottom">
            <div className="flex items-center justify-around h-14">
              <button onClick={() => setView("dashboard")} className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-colors ${view === "dashboard" || view === "game-mode" || view === "quiz-setup" ? "text-accent" : "text-ink/40"}`}>
                <Trophy className="w-5 h-5" />
                <span className="text-[10px] font-bold">Quiz</span>
              </button>
              <button onClick={() => setView("study")} className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-colors ${view === "study" ? "text-accent" : "text-ink/40"}`}>
                <BookOpen className="w-5 h-5" />
                <span className="text-[10px] font-bold">Study</span>
              </button>
              <button onClick={() => setView("master-bank")} className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-colors ${view === "master-bank" ? "text-accent" : "text-ink/40"}`}>
                <FileText className="w-5 h-5" />
                <span className="text-[10px] font-bold">Bank</span>
              </button>
              <button onClick={() => setShowSettings(true)} className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl transition-colors ${showSettings ? "text-accent" : "text-ink/40"}`}>
                <Settings className="w-5 h-5" />
                <span className="text-[10px] font-bold">Settings</span>
              </button>
            </div>
          </nav>
        )}

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-12 pb-20 md:pb-12">
        <AnimatePresence mode="wait">
          {view === "dashboard" && (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-16">
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.85] uppercase"
                >
                  Master the <br />
                  <span className="gradient-text italic font-serif lowercase tracking-normal">ICT Domain</span>
                </motion.h2>
                <p className="text-ink/60 max-w-2xl text-sm sm:text-base md:text-xl font-medium leading-relaxed text-balance">
                  Select a topic to begin your training. Or hit <strong>Random Quiz</strong> for a surprise challenge across all topics.
                </p>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => setView("random-setup")}
                className="group w-full relative bg-accent/5 border-2 border-accent/20 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] hover:border-accent hover:shadow-2xl hover:shadow-accent/10 transition-all text-left overflow-hidden pulse-ring mb-4"
              >
                <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-10 group-hover:opacity-30 group-hover:scale-150 transition-all">
                  <Dices className="w-16 sm:w-24 h-16 sm:h-24" />
                </div>
                <div className="flex items-center gap-4 sm:gap-6 relative z-10">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-accent flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform shrink-0">
                    <Shuffle className="w-6 h-6 sm:w-9 sm:h-9" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-display font-black uppercase tracking-tight group-hover:text-accent transition-colors">Random Quiz</h3>
                    <p className="text-xs sm:text-sm text-ink/40 font-medium mt-1 truncate sm:whitespace-normal">Quick mix &bull; Custom mode &bull; Full random</p>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.button>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                {topics.map((topic, idx) => {
                  const topicQs = PRELOADED_QUESTIONS.filter(q => q.topic === topic.id);
                  const easyCount = Math.floor(topicQs.filter(q => q.difficulty === "Easy").length / 10);
                  const medCount = Math.floor(topicQs.filter(q => q.difficulty === "Medium").length / 10);
                  const hardCount = Math.floor(topicQs.filter(q => q.difficulty === "Difficult").length / 10);
                  const totalSets = easyCount + medCount + hardCount;

                  return (
                    <motion.button
                      key={topic.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      onClick={() => {
                        setSelectedTopic(topic.id);
                        setView("game-mode");
                      }}
                      className="group relative bg-bg border border-ink/10 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl hover:border-accent hover:shadow-2xl transition-all text-left overflow-hidden"
                    >
                      <div className="relative z-10 space-y-3 sm:space-y-5">
                        <div className="flex items-start justify-between">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 bg-accent/10 text-accent">
                            {topic.icon}
                          </div>
                          <ArrowRight className="w-4 h-4 text-ink/15 group-hover:text-accent group-hover:translate-x-1 transition-all hidden sm:block" />
                        </div>
                        <h3 className="text-sm sm:text-lg font-display font-bold group-hover:text-accent transition-colors leading-tight">{topic.id}</h3>
                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                          <span className="text-[10px] font-bold text-ink/30">{totalSets} sets</span>
                          <div className="flex gap-1.5">
                            {easyCount > 0 && <span className="text-[9px] font-bold bg-success/10 text-success px-2 py-0.5 rounded-md">{easyCount}E</span>}
                            {medCount > 0 && <span className="text-[9px] font-bold bg-warning/10 text-warning px-2 py-0.5 rounded-md">{medCount}M</span>}
                            {hardCount > 0 && <span className="text-[9px] font-bold bg-error/10 text-error px-2 py-0.5 rounded-md">{hardCount}D</span>}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

            </motion.div>
          )}

          {/* Settings Modal */}
          <AnimatePresence>
            {showSettings && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowSettings(false)}
                  className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="relative bg-bg border border-ink/10 w-full max-w-md rounded-2xl sm:rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                  <div className="p-5 sm:p-8 border-b border-ink/5 flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight">Settings</h3>
                    <button 
                      onClick={() => setShowSettings(false)}
                      className="p-2 hover:bg-ink/5 rounded-full transition-colors"
                    >
                      <XCircle className="w-6 h-6 text-ink/40" />
                    </button>
                  </div>
                  
                  <div className="p-5 sm:p-8 space-y-6 sm:space-y-8">
                    {/* Timer Settings */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-ink/40">Quiz Timer</h4>
                      <div className="flex items-center justify-between p-4 bg-ink/5 rounded-2xl">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-accent" />
                          <span className="font-bold text-sm">Enable Timer</span>
                        </div>
                        <button
                          onClick={() => setTimerEnabled(!timerEnabled)}
                          className={`w-12 h-7 rounded-full transition-all relative ${timerEnabled ? 'bg-accent' : 'bg-ink/20'}`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all shadow ${timerEnabled ? 'left-6' : 'left-1'}`} />
                        </button>
                      </div>
                      {timerEnabled && (
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 px-4">
                          <span className="text-xs font-bold text-ink/40">Seconds per question:</span>
                          <div className="flex flex-wrap items-center gap-2">
                            {[15, 30, 45, 60, 90].map(s => (
                              <button
                                key={s}
                                onClick={() => setTimerSeconds(s)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                  timerSeconds === s ? 'bg-accent text-white' : 'bg-ink/5 text-ink/40 hover:bg-ink/10'
                                }`}
                              >
                                {s}s
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="h-px bg-ink/5"></div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-ink/40 mb-6">Color Palette</h4>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
                        {[
                          { id: 'classic', icon: Palette, label: 'Classic', bg: '#FBFBFA', accent: '#0ea5e9', ink: '#1C1917' },
                          { id: 'midnight', icon: Moon, label: 'Midnight', bg: '#0A0A0B', accent: '#EAB308', ink: '#F5F5F4' },
                          { id: 'sunset', icon: Sun, label: 'Sunset', bg: '#FFF7ED', accent: '#F97316', ink: '#431407' },
                          { id: 'forest', icon: Trees, label: 'Forest', bg: '#F0F4F0', accent: '#10B981', ink: '#064E3B' },
                          { id: 'brutalist', icon: Zap, label: 'Brutal', bg: '#FFFFFF', accent: '#00FF00', ink: '#000000' },
                          { id: 'neon', icon: Sparkles, label: 'Neon', bg: '#0D0D1A', accent: '#A855F7', ink: '#E8E8FF' },
                          { id: 'ocean', icon: Waves, label: 'Ocean', bg: '#0C1929', accent: '#06B6D4', ink: '#E0F2FE' },
                          { id: 'rose', icon: Heart, label: 'Rosé', bg: '#FFF1F2', accent: '#F43F5E', ink: '#4C0519' },
                          { id: 'cyberpunk', icon: Terminal, label: 'Cyberpunk', bg: '#0F0F1A', accent: '#00FF9D', ink: '#E0E0FF' },
                          { id: 'dracula', icon: Ghost, label: 'Dracula', bg: '#282A36', accent: '#FF79C6', ink: '#F8F8F2' },
                          { id: 'nord', icon: Wind, label: 'Nord', bg: '#2E3440', accent: '#88C0D0', ink: '#ECEFF4' },
                          { id: 'lavender', icon: Flower2, label: 'Lavender', bg: '#F3E8FF', accent: '#9333EA', ink: '#3B0764' },
                          { id: 'retro', icon: Tv, label: 'Retro', bg: '#F4EBD0', accent: '#D6AD60', ink: '#122620' },
                          { id: 'coffee', icon: Coffee, label: 'Coffee', bg: '#EAE0D5', accent: '#C6AC8F', ink: '#220901' },
                          { id: 'mint', icon: Leaf, label: 'Mint', bg: '#E0F7FA', accent: '#00BFA5', ink: '#004D40' },
                          { id: 'velvet', icon: Crown, label: 'Velvet', bg: '#1A0B2E', accent: '#D946EF', ink: '#F3E8FF' },
                        ].map((p) => (
                          <button
                            key={p.id}
                            onClick={() => setTheme(p.id as any)}
                            className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                              theme === p.id ? 'border-accent bg-accent/5 scale-105 shadow-lg' : 'border-transparent hover:bg-ink/5'
                            }`}
                          >
                            <div 
                              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-transform"
                              style={{ backgroundColor: p.bg, border: `2px solid ${p.accent}` }}
                            >
                              <p.icon className="w-5 h-5" style={{ color: p.accent }} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-tighter">{p.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-ink/5"></div>

                    <div className="flex items-center justify-between p-4 sm:p-6 bg-accent/5 rounded-2xl sm:rounded-[2rem] border border-accent/10">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent/10 rounded-2xl">
                          <Database className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-bold uppercase tracking-tight">Master Bank</p>
                          <p className="text-xs text-ink/60 font-mono">{masterQuestions.length} items</p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          if (confirm('Clear the master bank? This deletes all cached questions.')) {
                            setMasterQuestions([]);
                            localStorage.removeItem('ict_master_questions');
                          }
                        }}
                        className="p-3 hover:bg-red-50 text-red-500 rounded-2xl transition-colors"
                        title="Clear Bank"
                      >
                        <Trash2 className="w-6 h-6" />
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        if (confirm('Reset all progress? This clears completed and pending sets.')) {
                          setCompletedSets({});
                          setPendingSets({});
                          localStorage.removeItem('ict_completed_sets');
                          localStorage.removeItem('ict_pending_sets');
                        }
                      }}
                      className="w-full p-4 text-center text-red-500 text-xs font-bold uppercase tracking-widest hover:bg-red-50 rounded-2xl transition-colors"
                    >
                      Reset All Progress
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {view === "study" && (
            <motion.div 
              key="study"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-4">
                  <button onClick={() => setView("dashboard")} className="flex items-center gap-2 text-ink/40 hover:text-ink font-bold text-xs uppercase tracking-widest transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tighter leading-none">Study <br /><span className="text-accent">Guide</span></h2>
                  <p className="text-ink/60 font-medium text-sm sm:text-base">{STUDY_GUIDE_DATA.length} sections covering all ICT domains.</p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex bg-ink/5 rounded-xl p-1">
                    <button
                      onClick={() => { setStudyLayout("grid"); localStorage.setItem("ict_study_layout", "grid"); }}
                      className={`p-2 sm:p-2.5 rounded-lg transition-all ${studyLayout === "grid" ? "bg-accent text-white shadow-md" : "text-ink/30 hover:text-ink/60"}`}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => { setStudyLayout("list"); localStorage.setItem("ict_study_layout", "list"); }}
                      className={`p-2 sm:p-2.5 rounded-lg transition-all ${studyLayout === "list" ? "bg-accent text-white shadow-md" : "text-ink/30 hover:text-ink/60"}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                  <button 
                    onClick={() => exportToPDF("study")}
                    className="bg-ink text-bg px-4 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold flex items-center gap-2 sm:gap-3 hover:bg-accent transition-all shadow-xl text-sm sm:text-base"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" /> <span className="hidden sm:inline">DOWNLOAD</span> PDF
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {STUDY_GUIDE_DATA.map((section, idx) => (
                  <details key={idx} className="group bg-bg border border-ink/8 rounded-2xl overflow-hidden hover:border-ink/15 transition-all" open={idx === 0}>
                    <summary className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 cursor-pointer select-none">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <span className="text-accent font-display font-black text-xs sm:text-sm">{idx + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-lg font-display font-bold uppercase tracking-tight truncate">{section.section}</h3>
                        <p className="text-[10px] font-bold text-ink/30 uppercase tracking-widest">{section.items.length} terms</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-ink/20 group-open:rotate-90 transition-transform shrink-0" />
                    </summary>
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-0">
                      {studyLayout === "grid" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {section.items.map((item, i) => (
                            <div key={i} className="bg-ink/3 p-5 rounded-xl border border-ink/5 hover:border-accent/20 transition-all">
                              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-accent mb-2 block">{item.term}</span>
                              <p className="text-ink/55 leading-relaxed text-sm">{item.definition}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="divide-y divide-ink/5">
                          {section.items.map((item, i) => (
                            <div key={i} className="flex flex-col sm:flex-row gap-1.5 sm:gap-6 py-3 sm:py-3.5 hover:bg-ink/3 -mx-3 px-3 rounded-lg transition-colors">
                              <span className="text-xs font-black text-accent sm:w-48 shrink-0 pt-0.5 uppercase tracking-wide">{item.term}</span>
                              <p className="text-ink/55 text-sm leading-relaxed">{item.definition}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </motion.div>
          )}

          {view === "random-setup" && (
            <motion.div
              key="random-setup"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto space-y-10"
            >
              <div className="space-y-4">
                <button onClick={() => setView("dashboard")} className="flex items-center gap-2 text-ink/40 hover:text-ink font-bold text-xs uppercase tracking-widest transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tighter leading-none">Random <br /><span className="text-accent">Quiz</span></h2>
              </div>

              {/* Mode tabs */}
              <div className="flex gap-2">
                <button onClick={() => setRandomMode("quick")} className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm transition-all ${randomMode === "quick" ? "bg-accent text-white" : "bg-ink/5 text-ink/40 hover:bg-ink/10"}`}>
                  Quick Mix
                </button>
                <button onClick={() => setRandomMode("custom")} className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm transition-all ${randomMode === "custom" ? "bg-accent text-white" : "bg-ink/5 text-ink/40 hover:bg-ink/10"}`}>
                  Custom Mode
                </button>
              </div>

              {randomMode === "quick" && (
                <div className="space-y-8">
                  <div className="bg-bg border border-ink/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 sm:space-y-6">
                    <h3 className="text-base sm:text-lg font-display font-bold uppercase tracking-tight">How many questions?</h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {[10, 20, 30, 50].map(n => (
                        <button
                          key={n}
                          onClick={() => { setQuickCount(n); setCustomInput(""); }}
                          className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg transition-all border-2 min-w-[60px] sm:min-w-[80px] ${
                            quickCount === n && !customInput ? "bg-accent/10 border-accent text-accent" : "bg-ink/5 border-transparent text-ink/40 hover:border-ink/10"
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                      <div className="relative">
                        <input
                          type="number"
                          min="1"
                          max="500"
                          placeholder="Custom"
                          value={customInput}
                          onChange={(e) => {
                            setCustomInput(e.target.value);
                            const v = parseInt(e.target.value);
                            if (v > 0) setQuickCount(v);
                          }}
                          className={`w-24 sm:w-28 px-3 sm:px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg text-center transition-all border-2 outline-none ${
                            customInput ? "bg-accent/10 border-accent text-accent" : "bg-ink/5 border-transparent text-ink/40 focus:border-accent"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-ink/30 uppercase tracking-widest">Filter by topics (optional)</h4>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setSelectedTopics([])}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                            selectedTopics.length === 0 ? "bg-accent text-white border-accent" : "bg-ink/5 border-ink/10 text-ink/40"
                          }`}
                        >
                          All
                        </button>
                        {topics.map(t => (
                          <button
                            key={t.id}
                            onClick={() => setSelectedTopics(prev =>
                              prev.includes(t.id) ? prev.filter(x => x !== t.id) : [...prev, t.id]
                            )}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                              selectedTopics.includes(t.id) ? "bg-accent text-white border-accent" : "bg-ink/5 border-ink/10 text-ink/40"
                            }`}
                          >
                            {t.id.split(' ').slice(0, 2).join(' ')}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => startRandomQuiz(quickCount, selectedTopics.length > 0 ? selectedTopics : undefined)}
                    className="w-full bg-ink text-bg py-4 sm:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-accent transition-all shadow-2xl flex items-center justify-center gap-3 group"
                  >
                    START ({quickCount} Qs) <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

              {randomMode === "custom" && (
                <div className="space-y-8">
                  <div className="bg-bg border border-ink/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 sm:space-y-6">
                    <h3 className="text-base sm:text-lg font-display font-bold uppercase tracking-tight">Questions per difficulty</h3>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                      {(["Easy", "Medium", "Difficult"] as const).map(diff => (
                        <div key={diff} className="space-y-2">
                          <label className={`text-[10px] sm:text-xs font-black uppercase tracking-widest ${
                            diff === "Easy" ? "text-success" : diff === "Medium" ? "text-warning" : "text-error"
                          }`}>{diff}</label>
                          <input
                            type="number"
                            min="0"
                            max="200"
                            value={customCounts[diff]}
                            onChange={e => setCustomCounts(prev => ({ ...prev, [diff]: Math.max(0, parseInt(e.target.value) || 0) }))}
                            className={`w-full px-3 sm:px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-xl text-center border-2 outline-none transition-all ${
                              diff === "Easy" ? "border-success/20 focus:border-success bg-success/5" :
                              diff === "Medium" ? "border-warning/20 focus:border-warning bg-warning/5" :
                              "border-error/20 focus:border-error bg-error/5"
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-ink/30 text-center font-bold">
                      Total: {customCounts.Easy + customCounts.Medium + customCounts.Difficult} questions
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-ink/30 uppercase tracking-widest">Filter by topics (optional)</h4>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setSelectedTopics([])}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                            selectedTopics.length === 0 ? "bg-accent text-white border-accent" : "bg-ink/5 border-ink/10 text-ink/40"
                          }`}
                        >
                          All
                        </button>
                        {topics.map(t => (
                          <button
                            key={t.id}
                            onClick={() => setSelectedTopics(prev =>
                              prev.includes(t.id) ? prev.filter(x => x !== t.id) : [...prev, t.id]
                            )}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                              selectedTopics.includes(t.id) ? "bg-accent text-white border-accent" : "bg-ink/5 border-ink/10 text-ink/40"
                            }`}
                          >
                            {t.id.split(' ').slice(0, 2).join(' ')}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={startCustomDiffQuiz}
                    disabled={customCounts.Easy + customCounts.Medium + customCounts.Difficult === 0}
                    className="w-full bg-ink text-bg py-4 sm:py-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-accent transition-all shadow-2xl flex items-center justify-center gap-3 group disabled:opacity-40"
                  >
                    START CUSTOM QUIZ <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

              {/* Quick-launch section */}
              <div className="bg-ink/5 border border-ink/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-4">
                <h3 className="text-sm font-display font-bold uppercase tracking-tight text-ink/40">One-tap start</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={startFullRandom}
                    className="p-5 rounded-2xl bg-bg border-2 border-accent/20 hover:border-accent hover:shadow-lg transition-all text-left group relative overflow-hidden"
                  >
                    <div className="absolute top-2 right-2 bg-accent/10 text-accent text-[9px] font-black px-2 py-0.5 rounded-md uppercase">?? Qs</div>
                    <div className="space-y-2">
                      <Dices className="w-7 h-7 text-accent" />
                      <p className="font-black text-sm group-hover:text-accent transition-colors">I'm Feeling Lucky</p>
                      <p className="text-[10px] text-ink/30 font-bold leading-snug">Random number of questions (5-50), all topics, all difficulties. Total chaos.</p>
                    </div>
                  </button>
                  <button
                    onClick={() => startRandomQuiz(10, undefined, "Easy")}
                    className="p-5 rounded-2xl bg-bg border-2 border-success/20 hover:border-success hover:shadow-lg transition-all text-left group relative overflow-hidden"
                  >
                    <div className="absolute top-2 right-2 bg-success/10 text-success text-[9px] font-black px-2 py-0.5 rounded-md uppercase">10 Qs</div>
                    <div className="space-y-2">
                      <Leaf className="w-7 h-7 text-success" />
                      <p className="font-black text-sm group-hover:text-success transition-colors">Easy Warm-up</p>
                      <p className="text-[10px] text-ink/30 font-bold leading-snug">10 easy questions from all topics. Great for a quick review session.</p>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      const pool = PRELOADED_QUESTIONS.filter(q => q.difficulty === "Difficult");
                      const shuffled = shuffleArray(pool).slice(0, 30);
                      if (shuffled.length === 0) return;
                      setSelectedTopic("Gauntlet");
                      setSelectedDifficulty("Difficult");
                      setSelectedSet(0);
                      setQuestions(shuffled);
                      setCurrentQuestionIndex(0);
                      setUserAnswers({});
                      setScore(0);
                      setShowExplanation(false);
                      setView("quiz");
                    }}
                    className="p-5 rounded-2xl bg-bg border-2 border-error/20 hover:border-error hover:shadow-lg transition-all text-left group relative overflow-hidden"
                  >
                    <div className="absolute top-2 right-2 bg-error/10 text-error text-[9px] font-black px-2 py-0.5 rounded-md uppercase">30 Qs</div>
                    <div className="space-y-2">
                      <Zap className="w-7 h-7 text-error" />
                      <p className="font-black text-sm group-hover:text-error transition-colors">Hard Gauntlet</p>
                      <p className="text-[10px] text-ink/30 font-bold leading-snug">30 difficult questions from every topic. Only for the brave.</p>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {view === "game-mode" && (
            <motion.div 
              key="game-mode"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-4">
                  <button onClick={() => setView("dashboard")} className="flex items-center gap-2 text-ink/40 hover:text-ink font-bold text-xs uppercase tracking-widest transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tighter leading-none">{selectedTopic.split(' ')[0]} <br /><span className="text-accent">Training</span></h2>
                  <p className="text-ink/60 font-medium text-sm sm:text-base">Each set contains 10 curated questions.</p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex bg-ink/5 rounded-xl p-1">
                    <button
                      onClick={() => { setStudyLayout("grid"); localStorage.setItem("ict_study_layout", "grid"); }}
                      className={`p-2 sm:p-2.5 rounded-lg transition-all ${studyLayout === "grid" ? "bg-accent text-white shadow-md" : "text-ink/30 hover:text-ink/60"}`}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => { setStudyLayout("list"); localStorage.setItem("ict_study_layout", "list"); }}
                      className={`p-2 sm:p-2.5 rounded-lg transition-all ${studyLayout === "list" ? "bg-accent text-white shadow-md" : "text-ink/30 hover:text-ink/60"}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                  <button 
                    onClick={() => setView("quiz-setup")}
                    className="bg-ink/5 text-ink px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-ink/10 transition-all border border-ink/10 uppercase tracking-widest"
                  >
                    Custom
                  </button>
                </div>
              </div>

              <div className="space-y-16">
                {["Easy", "Medium", "Difficult"].map((diff) => {
                  const filtered = PRELOADED_QUESTIONS.filter(q => q.topic === selectedTopic && q.difficulty === diff);
                  const totalCompleteSets = Math.floor(filtered.length / 10);
                  if (totalCompleteSets === 0) return null;
                  const completedArr = completedSets[`${selectedTopic}-${diff}`] || [];
                  const pendingArr = pendingSets[`${selectedTopic}-${diff}`] || [];

                  return (
                    <div key={diff} className="space-y-6">
                      <div className="flex items-center gap-4">
                        <h3 className={`text-xs font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full ${
                          diff === "Easy" ? "bg-success/10 text-success" :
                          diff === "Medium" ? "bg-warning/10 text-warning" :
                          "bg-error/10 text-error"
                        }`}>
                          {diff}
                        </h3>
                        <div className="h-px bg-ink/10 flex-1"></div>
                        <span className="text-[10px] font-bold text-ink/30 uppercase tracking-widest">
                          {completedArr.length}/{totalCompleteSets} done
                        </span>
                      </div>
                      {studyLayout === "grid" ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                          {Array.from({ length: totalCompleteSets }, (_, i) => i + 1).map((set) => {
                            const isCompleted = completedArr.includes(set);
                            const isPending = !isCompleted && pendingArr.includes(set);

                            return (
                              <motion.button
                                key={set}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: set * 0.02 }}
                                onClick={() => {
                                  setSelectedDifficulty(diff);
                                  setSelectedSet(set);
                                  startQuiz(selectedTopic, diff, set);
                                }}
                                className={`group relative bg-bg border p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all text-center min-h-[80px] sm:min-h-[100px] flex flex-col items-center justify-center gap-1 hover:shadow-xl hover:-translate-y-1 ${
                                  isCompleted
                                    ? diff === "Easy" ? "border-success/30 bg-success/5"
                                      : diff === "Medium" ? "border-warning/30 bg-warning/5"
                                      : "border-error/30 bg-error/5"
                                    : isPending
                                      ? "border-accent/30 bg-accent/5"
                                      : "border-ink/10 hover:border-accent"
                                }`}
                              >
                                {isCompleted && (
                                  <div className="absolute top-2.5 right-2.5">
                                    <CheckCircle2 className={`w-4 h-4 ${
                                      diff === "Easy" ? "text-success" : diff === "Medium" ? "text-warning" : "text-error"
                                    }`} />
                                  </div>
                                )}
                                {isPending && (
                                  <div className="absolute top-2.5 right-2.5">
                                    <Clock className="w-4 h-4 text-accent" />
                                  </div>
                                )}
                                <span className="text-base sm:text-xl font-display font-black tracking-tight group-hover:text-accent transition-colors">SET {set}</span>
                                <span className="text-[9px] font-bold text-ink/30 uppercase tracking-widest">10 Qs</span>
                              </motion.button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {Array.from({ length: totalCompleteSets }, (_, i) => i + 1).map((set) => {
                            const isCompleted = completedArr.includes(set);
                            const isPending = !isCompleted && pendingArr.includes(set);

                            return (
                              <motion.button
                                key={set}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: set * 0.015 }}
                                onClick={() => {
                                  setSelectedDifficulty(diff);
                                  setSelectedSet(set);
                                  startQuiz(selectedTopic, diff, set);
                                }}
                                className={`group w-full flex items-center gap-4 px-5 py-3.5 rounded-xl border transition-all hover:shadow-md ${
                                  isCompleted
                                    ? diff === "Easy" ? "border-success/30 bg-success/5"
                                      : diff === "Medium" ? "border-warning/30 bg-warning/5"
                                      : "border-error/30 bg-error/5"
                                    : isPending
                                      ? "border-accent/30 bg-accent/5"
                                      : "border-ink/10 bg-bg hover:border-accent"
                                }`}
                              >
                                <span className="text-sm font-display font-black tracking-tight group-hover:text-accent transition-colors w-20">SET {set}</span>
                                <span className="text-[10px] font-bold text-ink/30 uppercase tracking-widest">10 Questions</span>
                                <div className="flex-1" />
                                {isCompleted && (
                                  <CheckCircle2 className={`w-4 h-4 ${
                                    diff === "Easy" ? "text-success" : diff === "Medium" ? "text-warning" : "text-error"
                                  }`} />
                                )}
                                {isPending && <Clock className="w-4 h-4 text-accent" />}
                                <ChevronRight className="w-4 h-4 text-ink/20 group-hover:text-accent transition-colors" />
                              </motion.button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {view === "quiz-setup" && (
            <motion.div 
              key="setup"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto bg-bg p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3.5rem] border border-ink/10 shadow-2xl space-y-8 sm:space-y-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 sm:p-12 opacity-5">
                <Brain className="w-20 sm:w-32 h-20 sm:h-32" />
              </div>

              <div className="text-center space-y-3 sm:space-y-4 relative z-10">
                <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                  Configuration
                </span>
                <h3 className="text-3xl sm:text-5xl font-display font-black tracking-tighter uppercase leading-none">Custom <br /><span className="text-accent">Challenge</span></h3>
                <p className="text-ink/40 font-mono text-xs uppercase tracking-widest">{selectedTopic}</p>
              </div>

              <div className="space-y-6 sm:space-y-8 relative z-10">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-ink/30 text-center">Select Difficulty</label>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {["Easy", "Medium", "Difficult", "Mixed"].map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedDifficulty(level)}
                      className={`py-4 sm:py-6 rounded-xl sm:rounded-2xl font-bold transition-all border-2 text-sm sm:text-base ${
                        selectedDifficulty === level 
                          ? "bg-accent/5 border-accent text-accent shadow-xl shadow-accent/10" 
                          : "bg-ink/5 border-transparent text-ink/40 hover:border-ink/10"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 sm:pt-6 relative z-10">
                <button
                  onClick={() => startQuiz(selectedTopic, selectedDifficulty)}
                  disabled={isLoading}
                  className="w-full bg-ink text-bg py-5 sm:py-7 rounded-xl sm:rounded-[2rem] font-bold text-base sm:text-lg flex items-center justify-center gap-3 hover:bg-accent transition-all disabled:opacity-50 shadow-2xl group"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" /> GENERATING...
                    </>
                  ) : (
                    <>
                      START ASSESSMENT <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <button 
                  onClick={() => setView("game-mode")}
                  className="w-full mt-4 text-ink/40 font-bold text-xs uppercase tracking-widest hover:text-ink transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}

          {view === "quiz" && questions.length > 0 && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl mx-auto space-y-8"
            >
              {/* Quiz header with back + timer */}
              <div className="flex items-center justify-between gap-2">
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <button onClick={exitQuiz} className="flex items-center gap-1.5 text-ink/40 hover:text-ink text-xs font-bold uppercase tracking-widest transition-colors">
                      <ArrowLeft className="w-4 h-4" /> Exit
                    </button>
                    <span className="bg-ink text-bg px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                      {currentQuestionIndex + 1}/{questions.length}
                    </span>
                    {selectedSet > 0 && (
                      <span className="bg-accent/10 text-accent px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                        SET {selectedSet}
                      </span>
                    )}
                  </div>
                  <h3 className="text-ink/40 font-bold text-[10px] sm:text-xs uppercase tracking-widest mt-2 truncate">
                    {selectedTopic} &bull; {selectedDifficulty}
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  {timerEnabled && !showExplanation && (
                    <div className="flex items-center gap-2">
                      <div className="relative w-10 h-10">
                        <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                          <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="3" className="text-ink/10" />
                          <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="3" 
                            className={timeLeft <= 5 ? "text-error" : "text-accent"}
                            strokeDasharray={`${2 * Math.PI * 17}`} 
                            strokeDashoffset={`${2 * Math.PI * 17 * (1 - timerPercent / 100)}`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className={`absolute inset-0 flex items-center justify-center text-xs font-black ${timeLeft <= 5 ? "text-error" : "text-ink/60"}`}>
                          {timeLeft}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-bg p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3.5rem] border border-ink/10 shadow-2xl space-y-6 sm:space-y-10">
                <div className="space-y-3 sm:space-y-4">
                  <span className="text-accent font-black text-[10px] uppercase tracking-[0.4em]">
                    {questions[currentQuestionIndex].type}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-bold leading-tight tracking-tight">
                    {questions[currentQuestionIndex].question}
                  </h2>
                </div>

                <div className="space-y-4">
                  {questions[currentQuestionIndex].type === "Multiple Choice" ? (
                    <div className="grid grid-cols-1 gap-4">
                      {questions[currentQuestionIndex].options?.map((option, idx) => {
                        const isSelected = userAnswers[questions[currentQuestionIndex].id] === option;
                        const isCorrect = option === questions[currentQuestionIndex].answer;
                        const wasSkipped = userAnswers[questions[currentQuestionIndex].id] === "__skipped__";
                        
                        return (
                          <button
                            key={idx}
                            disabled={showExplanation}
                            onClick={() => handleAnswer(option)}
                            className={`p-4 sm:p-5 md:p-7 rounded-xl sm:rounded-2xl text-left font-bold transition-all border-2 flex items-center justify-between group text-sm sm:text-base ${
                              showExplanation
                                ? isCorrect
                                  ? "bg-success/10 border-success text-success"
                                  : isSelected
                                    ? "bg-error/10 border-error text-error"
                                    : "bg-ink/5 border-ink/5 text-ink/20"
                                : isSelected
                                  ? "bg-accent/5 border-accent text-accent"
                                  : "bg-ink/5 border-transparent hover:border-ink/20 text-ink/60"
                            }`}
                          >
                            <span>{option}</span>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                              isSelected
                                ? "bg-current border-transparent"
                                : "border-ink/10 group-hover:border-ink/40"
                            }`}>
                              {isSelected && (
                                <div className="w-2 h-2 bg-bg rounded-full"></div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Type your answer here..."
                        disabled={showExplanation}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleAnswer(e.currentTarget.value);
                        }}
                        className="w-full p-4 sm:p-5 md:p-7 rounded-xl sm:rounded-2xl bg-ink/5 border-2 border-transparent focus:border-accent outline-none font-bold text-base sm:text-xl md:text-2xl transition-all"
                      />
                      {showExplanation && (
                        <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-4 border-2 ${
                          userAnswers[questions[currentQuestionIndex].id] !== "__skipped__" &&
                          userAnswers[questions[currentQuestionIndex].id]?.toLowerCase().trim() === questions[currentQuestionIndex].answer.toLowerCase().trim()
                            ? "bg-success/10 border-success text-success"
                            : "bg-error/10 border-error text-error"
                        }`}>
                          {userAnswers[questions[currentQuestionIndex].id] !== "__skipped__" &&
                          userAnswers[questions[currentQuestionIndex].id]?.toLowerCase().trim() === questions[currentQuestionIndex].answer.toLowerCase().trim() ? (
                            <CheckCircle2 className="w-6 h-6" />
                          ) : (
                            <XCircle className="w-6 h-6" />
                          )}
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Correct Answer</p>
                            <p className="text-base sm:text-xl font-display font-bold">{questions[currentQuestionIndex].answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Reveal Answer button */}
                {!showExplanation && (
                  <button
                    onClick={handleRevealAnswer}
                    className="flex items-center gap-2 text-ink/30 hover:text-accent text-xs font-bold uppercase tracking-widest transition-colors mx-auto"
                  >
                    <Eye className="w-4 h-4" /> Reveal Answer &amp; Skip
                  </button>
                )}

                {showExplanation && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-accent/5 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-[2rem] border border-accent/10 space-y-3"
                  >
                    <div className="flex items-center gap-2 text-accent font-black text-xs uppercase tracking-widest">
                      <AlertCircle className="w-4 h-4" /> Explanation
                    </div>
                    <p className="text-ink/80 font-medium leading-relaxed">
                      {questions[currentQuestionIndex].explanation || "No explanation provided for this question."}
                    </p>
                  </motion.div>
                )}
              </div>

              {showExplanation && (
                <button
                  onClick={nextQuestion}
                  className="w-full bg-ink text-bg py-4 sm:py-6 rounded-xl sm:rounded-[2rem] font-bold text-base sm:text-lg hover:bg-accent transition-all shadow-2xl flex items-center justify-center gap-3 group"
                >
                  {currentQuestionIndex === questions.length - 1 ? "FINISH ASSESSMENT" : "NEXT QUESTION"}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </motion.div>
          )}

          {view === "master-bank" && (
            <motion.div 
              key="master-bank"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-4">
                  <button onClick={() => setView("dashboard")} className="flex items-center gap-2 text-ink/40 hover:text-ink font-bold text-xs uppercase tracking-widest transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tighter leading-none">Question <br /><span className="text-accent">Bank</span></h2>
                  <p className="text-ink/60 font-medium text-sm sm:text-base">{masterQuestions.length.toLocaleString()} questions across {topics.length} topics.</p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex bg-ink/5 rounded-xl p-1">
                    <button
                      onClick={() => { setStudyLayout("grid"); localStorage.setItem("ict_study_layout", "grid"); }}
                      className={`p-2 sm:p-2.5 rounded-lg transition-all ${studyLayout === "grid" ? "bg-accent text-white shadow-md" : "text-ink/30 hover:text-ink/60"}`}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => { setStudyLayout("list"); localStorage.setItem("ict_study_layout", "list"); }}
                      className={`p-2 sm:p-2.5 rounded-lg transition-all ${studyLayout === "list" ? "bg-accent text-white shadow-md" : "text-ink/30 hover:text-ink/60"}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                  <button 
                    onClick={() => exportToPDF("quiz", masterQuestions)} 
                    disabled={masterQuestions.length === 0}
                    className="flex items-center gap-2 bg-ink text-bg px-4 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:bg-accent transition-all disabled:opacity-50 shadow-xl text-sm sm:text-base"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" /> <span className="hidden sm:inline">EXPORT</span> PDF
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setBankTopic("")}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                      bankTopic === "" ? "bg-accent text-white border-accent" : "bg-ink/5 border-ink/10 text-ink/50 hover:border-ink/20"
                    }`}
                  >
                    All Topics
                  </button>
                  {topics.map(t => {
                    const count = masterQuestions.filter(q => q.topic === t.id).length;
                    if (count === 0) return null;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setBankTopic(t.id)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                          bankTopic === t.id ? "bg-accent text-white border-accent" : "bg-ink/5 border-ink/10 text-ink/50 hover:border-ink/20"
                        }`}
                      >
                        {t.id} <span className="opacity-60">({count})</span>
                      </button>
                    );
                  })}
                </div>
                <div className="flex gap-2">
                  {["All", "Easy", "Medium", "Difficult"].map(d => (
                    <button
                      key={d}
                      onClick={() => setBankDiff(d)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                        bankDiff === d ? "bg-ink text-bg border-ink" : "bg-ink/5 border-ink/10 text-ink/50 hover:border-ink/20"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {(() => {
                const filtered = masterQuestions.filter(q => {
                  const topicMatch = bankTopic === "" || q.topic === bankTopic;
                  const diffMatch = bankDiff === "All" || q.difficulty === bankDiff;
                  return topicMatch && diffMatch;
                });
                const pageSize = 20;
                const totalPages = Math.ceil(filtered.length / pageSize);
                const paged = filtered.slice((bankPage - 1) * pageSize, bankPage * pageSize);

                return (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between px-2">
                      <span className="text-[10px] font-black text-ink/30 uppercase tracking-widest">{filtered.length} results</span>
                      {totalPages > 1 && (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setBankPage(p => Math.max(1, p - 1))}
                            disabled={bankPage <= 1}
                            className="p-2 rounded-lg hover:bg-ink/5 disabled:opacity-30 transition-all"
                          >
                            <ArrowLeft className="w-4 h-4" />
                          </button>
                          <span className="text-xs font-bold text-ink/40">{bankPage} / {totalPages}</span>
                          <button
                            onClick={() => setBankPage(p => Math.min(totalPages, p + 1))}
                            disabled={bankPage >= totalPages}
                            className="p-2 rounded-lg hover:bg-ink/5 disabled:opacity-30 transition-all"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    {paged.length === 0 ? (
                      <div className="bg-ink/5 border-2 border-dashed border-ink/10 rounded-3xl p-16 text-center space-y-4">
                        <FileText className="w-10 h-10 text-ink/15 mx-auto" />
                        <p className="text-lg font-display font-bold text-ink/30">No questions match this filter</p>
                      </div>
                    ) : studyLayout === "list" ? (
                      <div className="space-y-3">
                        {paged.map((q, idx) => (
                          <details key={q.id || idx} className="group bg-bg border border-ink/8 rounded-xl sm:rounded-2xl hover:border-ink/15 transition-all overflow-hidden">
                            <summary className="flex items-center gap-2 sm:gap-4 p-3 sm:p-5 cursor-pointer select-none">
                              <span className="bg-ink/8 text-ink/40 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold shrink-0">
                                {(bankPage - 1) * pageSize + idx + 1}
                              </span>
                              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md shrink-0 hidden sm:inline-block ${
                                q.difficulty === "Easy" ? "bg-success/10 text-success" :
                                q.difficulty === "Medium" ? "bg-warning/10 text-warning" :
                                "bg-error/10 text-error"
                              }`}>
                                {q.difficulty}
                              </span>
                              <span className="font-semibold text-xs sm:text-sm flex-1 truncate">{q.question}</span>
                              <ChevronRight className="w-4 h-4 text-ink/20 group-open:rotate-90 transition-transform shrink-0" />
                            </summary>
                            <div className="px-3 pb-3 sm:px-5 sm:pb-5 pt-0 space-y-3 border-t border-ink/5">
                              <div className="flex items-center gap-2 pt-3">
                                <span className="text-[9px] font-bold text-ink/30 uppercase tracking-widest">{q.topic}</span>
                                <span className="text-ink/10">&bull;</span>
                                <span className="text-[9px] font-bold text-ink/30 uppercase tracking-widest">{q.type}</span>
                              </div>
                              <div className="p-4 bg-success/5 border border-success/10 rounded-xl">
                                <p className="text-[10px] font-black text-success uppercase tracking-widest mb-1">Answer</p>
                                <p className="font-bold text-success text-sm">{q.answer}</p>
                              </div>
                              {q.explanation && q.explanation !== q.answer && (
                                <p className="text-xs text-ink/50 leading-relaxed">{q.explanation}</p>
                              )}
                            </div>
                          </details>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {paged.map((q, idx) => (
                          <div key={q.id || idx} className="bg-bg border border-ink/8 rounded-2xl p-5 hover:border-accent/30 hover:shadow-lg transition-all flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                              <span className="bg-ink/8 text-ink/40 px-2 py-0.5 rounded text-[10px] font-mono font-bold">
                                {(bankPage - 1) * pageSize + idx + 1}
                              </span>
                              <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                                q.difficulty === "Easy" ? "bg-success/10 text-success" :
                                q.difficulty === "Medium" ? "bg-warning/10 text-warning" :
                                "bg-error/10 text-error"
                              }`}>
                                {q.difficulty}
                              </span>
                              <span className="text-[9px] font-bold text-ink/20 uppercase tracking-widest ml-auto">{q.type}</span>
                            </div>
                            <p className="font-semibold text-sm leading-snug flex-1">{q.question}</p>
                            <div className="p-3 bg-success/5 border border-success/10 rounded-xl mt-auto">
                              <p className="text-[9px] font-black text-success uppercase tracking-widest mb-0.5">Answer</p>
                              <p className="font-bold text-success text-xs">{q.answer}</p>
                            </div>
                            {q.explanation && q.explanation !== q.answer && (
                              <p className="text-[11px] text-ink/40 leading-relaxed line-clamp-2">{q.explanation}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {totalPages > 1 && (
                      <div className="flex justify-center gap-2 pt-4">
                        <button
                          onClick={() => setBankPage(p => Math.max(1, p - 1))}
                          disabled={bankPage <= 1}
                          className="px-5 py-3 rounded-xl bg-ink/5 font-bold text-xs hover:bg-ink/10 disabled:opacity-30 transition-all"
                        >
                          Previous
                        </button>
                        <button
                          onClick={() => setBankPage(p => Math.min(totalPages, p + 1))}
                          disabled={bankPage >= totalPages}
                          className="px-5 py-3 rounded-xl bg-ink/5 font-bold text-xs hover:bg-ink/10 disabled:opacity-30 transition-all"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </div>
                );
              })()}
            </motion.div>
          )}

          {view === "results" && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl mx-auto text-center space-y-8 sm:space-y-12"
            >
              <div className="bg-bg p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-[3rem] md:rounded-[4rem] border border-ink/10 shadow-2xl space-y-6 sm:space-y-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
                
                <div className="w-20 h-20 sm:w-28 sm:h-28 bg-accent rounded-full flex items-center justify-center mx-auto shadow-2xl rotate-12">
                  <Trophy className="w-10 h-10 sm:w-14 sm:h-14 text-bg" />
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tighter uppercase leading-none">
                    Challenge <br />
                    <span className="text-accent">Complete</span>
                  </h2>
                  <p className="text-ink/60 font-medium text-sm sm:text-lg">
                    You've completed the {selectedTopic} assessment{selectedSet > 0 ? ` (Set ${selectedSet})` : ""}.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-3 sm:gap-8 py-4 sm:py-8 border-y border-ink/10">
                  <div className="space-y-1">
                    <p className="text-3xl sm:text-5xl font-display font-black text-accent">{score}</p>
                    <p className="text-[10px] font-black text-ink/40 uppercase tracking-widest">Score</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl sm:text-5xl font-display font-black text-ink">{questions.length}</p>
                    <p className="text-[10px] font-black text-ink/40 uppercase tracking-widest">Total</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl sm:text-5xl font-display font-black text-ink">{Math.round((score / questions.length) * 100)}%</p>
                    <p className="text-[10px] font-black text-ink/40 uppercase tracking-widest">Accuracy</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <button
                    onClick={() => {
                      if (selectedSet > 0) {
                        setView("game-mode");
                      } else {
                        setView("dashboard");
                      }
                    }}
                    className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-ink/5 font-bold hover:bg-ink/10 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
                  >
                    <ArrowLeft className="w-5 h-5" /> {selectedSet > 0 ? "Back to Sets" : "Dashboard"}
                  </button>
                  <button
                    onClick={() => exportToPDF("quiz")}
                    className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-ink text-bg font-bold hover:bg-accent transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs shadow-xl"
                  >
                    <Download className="w-5 h-5" /> Export PDF
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
    </div>
  );
}
