import React, { useState, useEffect } from "react";
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
  ArrowRight
} from "lucide-react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { STUDY_GUIDE_DATA } from "./data/studyGuide";
import { generateQuestions, Question } from "./services/quizService";
import { PRELOADED_QUESTIONS } from "./data/preloadedQuestions";

type View = "dashboard" | "study" | "quiz-setup" | "quiz" | "results" | "master-bank" | "game-mode";

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
        // Merge with preloaded to ensure we have the latest static ones
        const combined = [...PRELOADED_QUESTIONS, ...parsed];
        const unique = Array.from(new Map(combined.map(q => [q.question, q])).values());
        return unique;
      } catch (e) {
        return PRELOADED_QUESTIONS;
      }
    }
    return PRELOADED_QUESTIONS;
  });

  useEffect(() => {
    localStorage.setItem("ict_master_questions", JSON.stringify(masterQuestions));
  }, [masterQuestions]);

  // Background pre-fetching
  useEffect(() => {
    if (view === "game-mode" && selectedTopic) {
      const difficulties = ["Easy", "Medium", "Difficult"];
      difficulties.forEach(async (diff) => {
        const filtered = masterQuestions.filter(q => q.topic === selectedTopic && q.difficulty === diff);
        // If we have less than 20 questions (2 sets), pre-fetch more
        if (filtered.length < 20) {
          try {
            const generated = await generateQuestions(selectedTopic, diff);
            if (generated.length > 0) {
              setMasterQuestions(prev => {
                const combined = [...prev, ...generated];
                const unique = Array.from(new Map(combined.map(q => [q.question, q])).values());
                return unique;
              });
            }
          } catch (e) {
            console.error("Pre-fetch failed", e);
          }
        }
      });
    }
  }, [view, selectedTopic]);
  const [isGeneratingBank, setIsGeneratingBank] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [theme, setTheme] = useState<'classic' | 'midnight' | 'sunset' | 'forest' | 'brutalist'>('classic');

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('ict_quiz_theme') as any;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem('ict_quiz_theme', theme);
    // Apply theme class to body for global consistency
    document.body.className = theme === 'classic' ? '' : `theme-${theme}`;
  }, [theme]);

  const topics = [
    { id: "Hardware & Architecture", icon: <Cpu className="w-6 h-6" />, color: "bg-blue-500" },
    { id: "Networking & Protocols", icon: <Globe className="w-6 h-6" />, color: "bg-emerald-500" },
    { id: "Cybersecurity Concepts", icon: <ShieldAlert className="w-6 h-6" />, color: "bg-red-500" },
    { id: "Kali Linux & Tools", icon: <Settings className="w-6 h-6" />, color: "bg-stone-700" },
    { id: "Web & Software Development", icon: <FileText className="w-6 h-6" />, color: "bg-amber-500" },
    { id: "Cloud & Enterprise", icon: <CloudLightning className="w-6 h-6" />, color: "bg-indigo-500" },
    { id: "Emerging Technologies", icon: <Brain className="w-6 h-6" />, color: "bg-purple-500" },
    { id: "Acronyms Master List", icon: <BookOpen className="w-6 h-6" />, color: "bg-pink-500" },
    { id: "Risk Management & Business Continuity", icon: <ShieldAlert className="w-6 h-6" />, color: "bg-orange-500" },
    { id: "Applied Cryptography", icon: <Settings className="w-6 h-6" />, color: "bg-cyan-500" },
    { id: "Access Control & Network Defenses", icon: <ShieldAlert className="w-6 h-6" />, color: "bg-rose-500" },
    { id: "General ICT", icon: <FileText className="w-6 h-6" />, color: "bg-slate-500" },
    { id: "Hardware & Components", icon: <Cpu className="w-6 h-6" />, color: "bg-sky-500" },
    { id: "Networking & Internet", icon: <Globe className="w-6 h-6" />, color: "bg-teal-500" },
    { id: "Cybersecurity & Threats", icon: <ShieldAlert className="w-6 h-6" />, color: "bg-red-600" },
    { id: "Operating Systems & Software", icon: <Settings className="w-6 h-6" />, color: "bg-zinc-500" },
    { id: "Cloud Computing & Virtualization", icon: <CloudLightning className="w-6 h-6" />, color: "bg-blue-600" },
  ];

  const startQuiz = async (topic: string, difficulty: string, setNum?: number) => {
    setIsLoading(true);
    let quizQuestions: Question[] = [];
    
    if (setNum) {
      setSelectedSet(setNum);
      // Game Mode: Filter from preloaded questions
      const filtered = masterQuestions.filter(
        q => q.topic === topic && q.difficulty === difficulty
      );
      // Each set has 10 questions
      const startIndex = (setNum - 1) * 10;
      quizQuestions = filtered.slice(startIndex, startIndex + 10);
      
      // If we don't have enough preloaded questions for this set, generate them
      if (quizQuestions.length < 10) {
        const needed = 10 - quizQuestions.length;
        const generated = await generateQuestions(topic, difficulty);
        const newBatch = generated.slice(0, needed);
        quizQuestions = [...quizQuestions, ...newBatch];
        
        // Add all generated to master bank for future use
        setMasterQuestions(prev => {
          const combined = [...prev, ...generated];
          const unique = Array.from(new Map(combined.map(q => [q.question, q])).values());
          return unique;
        });
      }
    } else {
      setSelectedSet(0);
      // Standard Mode: Generate new questions
      const generated = await generateQuestions(topic, difficulty);
      quizQuestions = generated;
      
      // Add to master bank
      setMasterQuestions(prev => {
        const combined = [...prev, ...generated];
        const unique = Array.from(new Map(combined.map(q => [q.question, q])).values());
        return unique;
      });
    }

    setQuestions(quizQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setIsLoading(false);
    setView("quiz");
  };

  const handleAnswer = (answer: string) => {
    setUserAnswers({ ...userAnswers, [questions[currentQuestionIndex].id]: answer });
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

  const calculateScore = () => {
    let s = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase().trim()) {
        s++;
      }
    });
    setScore(s);
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

  return (
    <div className="min-h-screen bg-bg text-ink font-sans selection:bg-accent/20 transition-colors duration-500">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-bg/80 backdrop-blur-md border-b border-ink/10 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => setView("dashboard")}
            >
              <div className="bg-ink p-2 rounded-xl group-hover:rotate-6 transition-transform">
                <Brain className="w-7 h-7 text-bg" />
              </div>
              <div>
                <h1 className="font-display font-bold text-xl leading-none tracking-tight">ICT QUIZ BEE</h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40 font-bold">Cagayan State University</p>
              </div>
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
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowSettings(true)}
                className="p-2 hover:bg-ink/5 rounded-full transition-colors"
              >
                <Settings className="w-6 h-6 text-ink/40 hover:text-ink" />
              </button>
            </div>
          </div>
        </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {view === "dashboard" && (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="space-y-6 mb-16">
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-7xl md:text-9xl font-display font-black tracking-tighter leading-[0.8] uppercase"
                >
                  Master the <br />
                  <span className="text-accent italic font-serif lowercase tracking-normal">ICT Domain</span>
                </motion.h2>
                <p className="text-ink/60 max-w-2xl text-xl font-medium leading-relaxed text-balance">
                  Select a topic to begin your training. Our AI generates unique questions for every session to ensure complete mastery of the digital landscape.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topics.map((topic, idx) => (
                  <motion.button
                    key={topic.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => {
                      setSelectedTopic(topic.id);
                      setView("game-mode");
                    }}
                    className="group relative bg-bg border border-ink/10 p-10 rounded-[2.5rem] hover:border-accent hover:shadow-2xl transition-all text-left overflow-hidden min-h-[280px] flex flex-col justify-between"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 group-hover:scale-150 transition-all">
                      {topic.icon}
                    </div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 ${topic.color} text-white shadow-lg`}>
                        {topic.icon}
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors leading-tight">{topic.id}</h3>
                      <p className="text-sm text-ink/40 font-medium leading-snug">Practice easy, medium, and difficult questions across multiple formats.</p>
                      
                      <div className="mt-10 flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 text-accent">
                        Explore Topic <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
                
                <button
                  onClick={() => setView("master-bank")}
                  className="group relative bg-stone-900 p-8 rounded-[2rem] border border-stone-800 hover:border-brand-500 transition-all text-left flex flex-col justify-between min-h-[240px] hover:shadow-2xl hover:-translate-y-1"
                >
                  <div>
                    <div className="bg-brand-500 w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform shadow-lg">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3 leading-tight uppercase tracking-tight text-white">Question Bank</h3>
                    <p className="text-sm text-stone-500 font-medium leading-snug">Browse and generate a comprehensive list of all questions and answers.</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-brand-400 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Bank <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </div>

              <div className="bg-stone-100 border border-stone-200 p-10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
                <div className="space-y-3">
                  <h3 className="text-3xl font-display font-bold uppercase tracking-tight">Study Guide</h3>
                  <p className="text-stone-500 font-medium">Download the complete ICT Quiz Bee study guide compiled from all sections.</p>
                </div>
                <button 
                  onClick={() => exportToPDF("study")}
                  className="bg-stone-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-brand-600 transition-all whitespace-nowrap shadow-xl"
                >
                  <Download className="w-5 h-5" /> DOWNLOAD PDF
                </button>
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
                  className="relative bg-bg border border-ink/10 w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden"
                >
                  <div className="p-8 border-b border-ink/5 flex items-center justify-between">
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight">Settings</h3>
                    <button 
                      onClick={() => setShowSettings(false)}
                      className="p-2 hover:bg-ink/5 rounded-full transition-colors"
                    >
                      <XCircle className="w-6 h-6 text-ink/40" />
                    </button>
                  </div>
                  
                  <div className="p-8 space-y-8">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-ink/40 mb-6">Color Palette</h4>
                      <div className="grid grid-cols-5 gap-3">
                        {[
                          { id: 'classic', icon: Palette, label: 'Classic', color: 'bg-[#FBFBFA] border-stone-200' },
                          { id: 'midnight', icon: Moon, label: 'Midnight', color: 'bg-[#0A0A0B] border-stone-800' },
                          { id: 'sunset', icon: Sun, label: 'Sunset', color: 'bg-[#FFF7ED] border-orange-200' },
                          { id: 'forest', icon: Trees, label: 'Forest', color: 'bg-[#F0F4F0] border-emerald-200' },
                          { id: 'brutalist', icon: Zap, label: 'Brutal', color: 'bg-white border-black' },
                        ].map((p) => (
                          <button
                            key={p.id}
                            onClick={() => setTheme(p.id as any)}
                            className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                              theme === p.id ? 'border-accent bg-accent/5' : 'border-transparent hover:bg-ink/5'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-full border ${p.color} flex items-center justify-center shadow-sm`}>
                              <p.icon className={`w-5 h-5 ${theme === p.id ? 'text-accent' : 'text-ink/40'}`} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-tighter">{p.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-ink/5"></div>

                    <div className="flex items-center justify-between p-6 bg-accent/5 rounded-[2rem] border border-accent/10">
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
                          if (confirm('Are you sure you want to clear the master bank? This will delete all cached questions.')) {
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
                    <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                  </button>
                  <h2 className="text-5xl font-display font-black uppercase tracking-tighter leading-none">Study <br /><span className="text-accent">Guide</span></h2>
                  <p className="text-ink/60 font-medium">Master the core concepts of Information & Communication Technology.</p>
                </div>
                <button 
                  onClick={() => exportToPDF("study")}
                  className="bg-ink text-bg px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-accent transition-all shadow-xl"
                >
                  <Download className="w-5 h-5" /> DOWNLOAD PDF
                </button>
              </div>

              <div className="space-y-20">
                {STUDY_GUIDE_DATA.map((section, idx) => (
                  <div key={idx} className="space-y-8">
                    <div className="flex items-center gap-4">
                      <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{section.section}</h3>
                      <div className="h-px bg-ink/10 flex-1"></div>
                      <span className="text-[10px] font-black text-ink/20 uppercase tracking-widest">Section {idx + 1}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.items.map((item, i) => (
                        <div key={i} className="bg-bg p-8 rounded-3xl border border-ink/5 shadow-sm hover:shadow-xl transition-all group">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-3 block group-hover:translate-x-1 transition-transform">{item.term}</span>
                          <p className="text-ink/60 leading-relaxed font-medium">{item.definition}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
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
                    <ArrowLeft className="w-4 h-4" /> Back to Topics
                  </button>
                  <h2 className="text-5xl font-display font-black uppercase tracking-tighter leading-none">{selectedTopic.split(' ')[0]} <br /><span className="text-accent">Training</span></h2>
                  <p className="text-ink/60 font-medium">Select a training set to begin. Each set contains 10 curated questions.</p>
                </div>
                <button 
                  onClick={() => setView("quiz-setup")}
                  className="bg-ink/5 text-ink px-6 py-3 rounded-xl font-bold text-sm hover:bg-ink/10 transition-all border border-ink/10 uppercase tracking-widest"
                >
                  Custom Mode
                </button>
              </div>

              <div className="space-y-16">
                {["Easy", "Medium", "Difficult"].map((diff) => (
                  <div key={diff} className="space-y-8">
                    <div className="flex items-center gap-4">
                      <h3 className={`text-xs font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full ${
                        diff === "Easy" ? "bg-emerald-500/10 text-emerald-500" :
                        diff === "Medium" ? "bg-amber-500/10 text-amber-500" :
                        "bg-rose-500/10 text-rose-500"
                      }`}>
                        {diff} Levels
                      </h3>
                      <div className="h-px bg-ink/10 flex-1"></div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((set) => {
                        const filtered = masterQuestions.filter(q => q.topic === selectedTopic && q.difficulty === diff);
                        const isReady = filtered.length >= set * 10;
                        
                        return (
                          <button
                            key={set}
                            onClick={() => {
                              setSelectedDifficulty(diff);
                              setSelectedSet(set);
                              startQuiz(selectedTopic, diff, set);
                            }}
                            className="group bg-bg border border-ink/10 p-6 rounded-2xl hover:border-accent hover:shadow-xl transition-all text-center relative overflow-hidden"
                          >
                            <span className="relative z-10 text-2xl font-display font-bold group-hover:scale-110 transition-transform block">SET {set}</span>
                            {isReady && (
                              <div className="absolute top-2 right-2 z-20">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                              </div>
                            )}
                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {view === "quiz-setup" && (
            <motion.div 
              key="setup"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto bg-bg p-12 rounded-[3.5rem] border border-ink/10 shadow-2xl space-y-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Brain className="w-32 h-32" />
              </div>

              <div className="text-center space-y-4 relative z-10">
                <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                  Configuration
                </span>
                <h3 className="text-5xl font-display font-black tracking-tighter uppercase leading-none">Custom <br /><span className="text-accent">Challenge</span></h3>
                <p className="text-ink/40 font-mono text-xs uppercase tracking-widest">{selectedTopic}</p>
              </div>

              <div className="space-y-8 relative z-10">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-ink/30 text-center">Select Difficulty</label>
                <div className="grid grid-cols-2 gap-4">
                  {["Easy", "Medium", "Difficult", "Mixed"].map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedDifficulty(level)}
                      className={`py-6 rounded-2xl font-bold transition-all border-2 ${
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

              <div className="pt-6 relative z-10">
                <button
                  onClick={() => startQuiz(selectedTopic, selectedDifficulty)}
                  disabled={isLoading}
                  className="w-full bg-ink text-bg py-7 rounded-[2rem] font-bold text-lg flex items-center justify-center gap-3 hover:bg-accent transition-all disabled:opacity-50 shadow-2xl group"
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
                  onClick={() => setView("dashboard")}
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
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="bg-ink text-bg px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                      Question {currentQuestionIndex + 1}/{questions.length}
                    </span>
                    {selectedSet > 0 && (
                      <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                        SET {selectedSet}
                      </span>
                    )}
                  </div>
                  <h3 className="text-ink/40 font-bold text-xs uppercase tracking-widest mt-2">
                    {selectedTopic} • {selectedDifficulty}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-ink/40 uppercase tracking-widest block">Accuracy</span>
                  <span className="text-2xl font-display font-bold">{Math.round((score / questions.length) * 100)}%</span>
                </div>
              </div>

              <div className="bg-bg p-12 rounded-[3.5rem] border border-ink/10 shadow-2xl space-y-10">
                <div className="space-y-4">
                  <span className="text-accent font-black text-[10px] uppercase tracking-[0.4em]">
                    {questions[currentQuestionIndex].type}
                  </span>
                  <h2 className="text-4xl font-display font-bold leading-tight tracking-tight">
                    {questions[currentQuestionIndex].question}
                  </h2>
                </div>

                <div className="space-y-4">
                  {questions[currentQuestionIndex].type === "Multiple Choice" ? (
                    <div className="grid grid-cols-1 gap-4">
                      {questions[currentQuestionIndex].options?.map((option, idx) => {
                        const isSelected = userAnswers[questions[currentQuestionIndex].id] === option;
                        const isCorrect = option === questions[currentQuestionIndex].answer;
                        
                        return (
                          <button
                            key={idx}
                            disabled={showExplanation}
                            onClick={() => handleAnswer(option)}
                            className={`p-7 rounded-2xl text-left font-bold transition-all border-2 flex items-center justify-between group ${
                              showExplanation
                                ? isCorrect
                                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-500"
                                  : isSelected
                                    ? "bg-rose-500/10 border-rose-500 text-rose-500"
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
                        className="w-full p-7 rounded-2xl bg-ink/5 border-2 border-transparent focus:border-accent outline-none font-bold text-2xl transition-all"
                      />
                      {showExplanation && (
                        <div className={`p-6 rounded-2xl flex items-center gap-4 border-2 ${
                          userAnswers[questions[currentQuestionIndex].id]?.toLowerCase().trim() === questions[currentQuestionIndex].answer.toLowerCase().trim()
                            ? "bg-emerald-50 border-emerald-500 text-emerald-900"
                            : "bg-rose-50 border-rose-500 text-rose-900"
                        }`}>
                          {userAnswers[questions[currentQuestionIndex].id]?.toLowerCase().trim() === questions[currentQuestionIndex].answer.toLowerCase().trim() ? (
                            <CheckCircle2 className="w-6 h-6" />
                          ) : (
                            <XCircle className="w-6 h-6" />
                          )}
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Correct Answer</p>
                            <p className="text-xl font-display font-bold">{questions[currentQuestionIndex].answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {showExplanation && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-brand-50 p-8 rounded-[2rem] border border-brand-100 space-y-3"
                  >
                    <div className="flex items-center gap-2 text-brand-700 font-black text-xs uppercase tracking-widest">
                      <AlertCircle className="w-4 h-4" /> Explanation
                    </div>
                    <p className="text-brand-900 font-medium leading-relaxed">
                      {questions[currentQuestionIndex].explanation || "No explanation provided for this question."}
                    </p>
                  </motion.div>
                )}
              </div>

              {showExplanation && (
                <button
                  onClick={nextQuestion}
                  className="w-full bg-stone-900 text-white py-6 rounded-[2rem] font-bold text-lg hover:bg-brand-600 transition-all shadow-2xl flex items-center justify-center gap-3 group"
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
                    <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                  </button>
                  <h2 className="text-5xl font-display font-black uppercase tracking-tighter leading-none">Question <br /><span className="text-accent">Bank</span></h2>
                  <p className="text-ink/60 font-medium">Browse and generate a comprehensive list of all questions and answers.</p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => exportToPDF("quiz", masterQuestions)} 
                    disabled={masterQuestions.length === 0}
                    className="flex items-center gap-2 bg-ink text-bg px-8 py-4 rounded-2xl font-bold hover:bg-accent transition-all disabled:opacity-50 shadow-xl"
                  >
                    <Download className="w-5 h-5" /> EXPORT BANK
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-bg p-10 rounded-[2.5rem] border border-ink/10 shadow-xl space-y-8 sticky top-24">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-ink/30">Select Topic</label>
                        <select 
                          value={selectedTopic}
                          onChange={(e) => setSelectedTopic(e.target.value)}
                          className="w-full p-4 rounded-xl bg-ink/5 border-2 border-transparent focus:border-accent outline-none font-bold transition-all"
                        >
                          <option value="">Choose a topic...</option>
                          {topics.map(t => <option key={t.id} value={t.id}>{t.id}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-ink/30">Difficulty</label>
                        <div className="grid grid-cols-2 gap-2">
                          {["Easy", "Medium", "Difficult", "Mixed"].map(d => (
                            <button
                              key={d}
                              onClick={() => setSelectedDifficulty(d)}
                              className={`py-3 rounded-xl text-xs font-bold transition-all border-2 ${
                                selectedDifficulty === d 
                                  ? "bg-accent border-accent text-white" 
                                  : "bg-ink/5 border-transparent text-ink/40 hover:border-ink/10"
                              }`}
                            >
                              {d}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={async () => {
                        if (!selectedTopic) return;
                        setIsGeneratingBank(true);
                        const newQuestions = await generateQuestions(selectedTopic, selectedDifficulty);
                        setMasterQuestions(prev => {
                          const combined = [...prev, ...newQuestions];
                          const unique = Array.from(new Map(combined.map(q => [q.question, q])).values());
                          return unique;
                        });
                        setIsGeneratingBank(false);
                      }}
                      disabled={isGeneratingBank || !selectedTopic}
                      className="w-full bg-accent text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all disabled:opacity-50 shadow-lg"
                    >
                      {isGeneratingBank ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
                      GENERATE 10 QUESTIONS
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  {masterQuestions.length === 0 ? (
                    <div className="bg-ink/5 border-2 border-dashed border-ink/10 rounded-[3rem] p-20 text-center space-y-6">
                      <div className="bg-bg w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <FileText className="w-10 h-10 text-ink/20" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-2xl font-display font-bold uppercase tracking-tight">Your bank is empty</p>
                        <p className="text-ink/40 font-medium max-w-xs mx-auto">Generate questions to build your master study resource.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between px-4">
                        <span className="text-[10px] font-black text-ink/30 uppercase tracking-widest">{masterQuestions.length} Questions Total</span>
                        <span className="text-[10px] font-black text-ink/30 uppercase tracking-widest">Sorted by Newest</span>
                      </div>
                      {masterQuestions.map((q, idx) => (
                        <div key={idx} className="bg-bg p-10 rounded-[2.5rem] border border-ink/10 shadow-sm space-y-8 hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="bg-ink text-bg px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">#{idx + 1}</span>
                              <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                                q.difficulty === "Easy" ? "bg-emerald-500/10 text-emerald-500" :
                                q.difficulty === "Medium" ? "bg-amber-500/10 text-amber-500" :
                                "bg-rose-500/10 text-rose-500"
                              }`}>
                                {q.difficulty}
                              </span>
                            </div>
                            <span className="text-[10px] font-black text-ink/20 uppercase tracking-widest">{q.topic}</span>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-xl font-display font-bold leading-tight">{q.question}</h4>
                            <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                              <p className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-1">Correct Answer</p>
                              <p className="font-bold text-emerald-700">{q.answer}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {view === "results" && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl mx-auto text-center space-y-12"
            >
              <div className="bg-white p-16 rounded-[4rem] border border-stone-200 shadow-2xl space-y-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-500"></div>
                
                <div className="w-28 h-28 bg-brand-500 rounded-full flex items-center justify-center mx-auto shadow-2xl rotate-12">
                  <Trophy className="w-14 h-14 text-white" />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-6xl font-display font-black tracking-tighter uppercase leading-none">
                    Challenge <br />
                    <span className="text-brand-600">Complete</span>
                  </h2>
                  <p className="text-stone-500 font-medium text-lg">
                    You've completed the {selectedTopic} assessment{selectedSet > 0 ? ` (Set ${selectedSet})` : ""}.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-8 py-8 border-y border-stone-100">
                  <div className="space-y-1">
                    <p className="text-5xl font-display font-black text-brand-600">{score}</p>
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Score</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-5xl font-display font-black text-stone-900">{questions.length}</p>
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Total</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-5xl font-display font-black text-stone-900">{Math.round((score / questions.length) * 100)}%</p>
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Accuracy</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      if (selectedSet > 0) {
                        setView("game-mode");
                      } else {
                        setView("dashboard");
                      }
                    }}
                    className="p-6 rounded-3xl bg-stone-100 font-bold hover:bg-stone-200 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
                  >
                    <RefreshCw className="w-5 h-5" /> {selectedSet > 0 ? "Back to Sets" : "Retry"}
                  </button>
                  <button
                    onClick={() => exportToPDF("quiz")}
                    className="p-6 rounded-3xl bg-stone-900 text-white font-bold hover:bg-brand-600 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs shadow-xl"
                  >
                    <Download className="w-5 h-5" /> Export PDF
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-16 border-t border-ink/10">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-ink font-display font-black text-2xl tracking-tighter uppercase">
            <div className="bg-accent text-white p-1 rounded">ICT</div> QUIZ BEE
          </div>
          <p className="text-ink/30 text-[10px] font-black uppercase tracking-[0.5em]">
            &copy; 2026 • CAGAYAN STATE UNIVERSITY • PROFESSIONAL ASSESSMENT
          </p>
          <div className="flex justify-center gap-8 pt-4">
            <Settings 
              onClick={() => setShowSettings(true)}
              className="w-5 h-5 text-ink/20 cursor-pointer hover:text-accent transition-colors" 
            />
            <FileText 
              onClick={() => setView("master-bank")}
              className="w-5 h-5 text-ink/20 cursor-pointer hover:text-accent transition-colors" 
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
