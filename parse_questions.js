import fs from 'fs';

function parseQuestions(filename) {
    const lines = fs.readFileSync(filename, 'utf-8').split('\n');
    let questions = [];
    
    let currentNum = null;
    let currentQuestion = '';
    let currentAnswerLines = [];
    
    const saveCurrent = () => {
        if (currentNum !== null && currentQuestion) {
            let answerText = currentAnswerLines.join(' ').trim();
            // remove multiple spaces
            answerText = answerText.replace(/\s+/g, ' ');

            let answer = answerText;
            let explanation = '';

            const dashSplit = answerText.split(/\s+-\s+(.+)/);
            if (dashSplit.length >= 2) {
                const potentialAnswer = dashSplit[0].trim();
                // Check if the answer part is reasonably short
                if (potentialAnswer.length <= 80 && !potentialAnswer.endsWith('.')) {
                    answer = potentialAnswer;
                    explanation = dashSplit[1].trim();
                }
            }
            
            if (!explanation) {
                explanation = "A foundational concept in Hardware & Architecture.";
            }

            // Quick hack for when it doesn't split well
            if (answer.length > 100) {
               // If answer is too long, we can shorten it and put the rest in explanation
               const periodIndex = answer.indexOf('.');
               if (periodIndex !== -1 && periodIndex < 100) {
                   explanation = answer.substring(periodIndex + 1).trim() + " " + explanation;
                   answer = answer.substring(0, periodIndex + 1);
               }
            }
            
            let difficulty = "Difficult";
            let diffCode = "d";
            
            if (currentNum >= 1 && currentNum <= 100) {
                difficulty = "Easy";
                diffCode = "e";
            } else if (currentNum >= 101 && currentNum <= 200) {
                difficulty = "Medium";
                diffCode = "m";
            }
            
            questions.push({
                id: `ha-${diffCode}-new-${currentNum}`,
                topic: "Hardware & Architecture",
                difficulty: difficulty,
                type: "Identification",
                question: currentQuestion,
                answer: answer,
                explanation: explanation
            });
        }
    };
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (!line) continue;
        
        const questionMatch = line.match(/^(\d+)\.\s+(.*)/);
        if (questionMatch) {
            saveCurrent();
            currentNum = parseInt(questionMatch[1], 10);
            currentQuestion = questionMatch[2];
            currentAnswerLines = [];
        } else if (currentNum !== null) {
            // Check if it's not a heading like "EASY LEVEL (Questions 1-100)"
            if (line.match(/^[A-Z]+ LEVEL/)) continue;
            if (line.match(/^[A-Za-z]+ \(\d+-\d+\)/)) continue;
            if (line.match(/^Basic/i) && line.indexOf('1-10') > -1) continue;
            currentAnswerLines.push(line);
        }
    }
    
    // Save last question
    saveCurrent();
    
    console.log(`Parsed ${questions.length} questions.`);
    
    const output = `import { Question } from "../services/quizService";\n\nexport const HARDWARE_NEW_QUESTIONS: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
    fs.writeFileSync('parsed_questions.ts', output, 'utf-8');
}

parseQuestions('questions_raw.txt');
