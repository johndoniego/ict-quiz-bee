import fs from 'fs';

const inputFile = './questions_raw_acronyms.txt';
const outputFile = './src/data/acronymsQuestionsNew.ts';

const rawText = fs.readFileSync(inputFile, 'utf-8');
const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);

const questions = [];
let currentDiff = 'Easy';
let i = 0;

while (i < lines.length) {
    const line = lines[i];

    if (line.includes('EASY LEVEL')) {
        currentDiff = 'Easy';
        i++;
        continue;
    } else if (line.includes('MEDIUM LEVEL')) {
        currentDiff = 'Medium';
        i++;
        continue;
    } else if (line.includes('DIFFICULT LEVEL')) {
        currentDiff = 'Difficult';
        i++;
        continue;
    }

    // Match "1. CPU" or "101. OSPF"
    const match = line.match(/^(\d+)\.\s+(.*)$/);
    if (match) {
        const questionNum = match[1];
        const acronym = match[2].replace(/\*\*$/, '').trim();
        i++;
        
        let answerText = '';
        while (i < lines.length && !lines[i].match(/^\d+\.\s+/) && !lines[i].includes('LEVEL (')) {
            // Ignore Study Tips header and PDF artifact references [1], [2], etc.
            if (lines[i] === 'Study Tips' || lines[i].startsWith('•') || lines[i].startsWith('Document') || lines[i].startsWith('Master ICT') || lines[i].match(/^\[\d+\]$/)) {
                i++;
                continue;
            }
            if (lines[i] === '⁂' || lines[i] === '.' || lines[i].startsWith('http')) {
                i++;
                continue;
            }
            // Strip trailing ** from difficult questions
            let lineText = lines[i].replace(/\*\*$/, '');
            answerText += (answerText ? ' ' : '') + lineText;
            i++;
        }
        
        // Define standard question format for acronyms
        const fullQuestionText = `What does the acronym ${acronym} stand for?`;

        let answer = '';
        let explanation = '';
        if (answerText.includes(' - ')) {
            const parts = answerText.split(' - ');
            answer = parts[0].trim();
            // The whole text is a good explanation
            explanation = answerText.trim();
        } else if (answerText.includes(' – ')) {
            const parts = answerText.split(' – ');
            answer = parts[0].trim();
            explanation = answerText.trim();
        } else {
            // e.g "Security Orchestration, Automation, Response."
            answer = answerText;
            explanation = answerText; 
        }

        const cleanStr = (s) => {
            return s.replace(/  /g, ' ')
                    .replace(/\*\*/g, '')
                    .trim();
        };

        const shortDiff = currentDiff === 'Easy' ? 'e' : (currentDiff === 'Medium' ? 'm' : 'd');
        const id = `acronyms-new-${shortDiff}-${questionNum}`;

        questions.push({
            id,
            topic: "ICT Acronyms Master List",
            difficulty: currentDiff,
            type: "Identification",
            question: cleanStr(fullQuestionText),
            answer: cleanStr(answer), 
            explanation: cleanStr(explanation)
        });
        
        continue;
    }
    
    i++;
}

let tsContent = `import { Question } from '../services/quizService';\n\n`;
tsContent += `export const ACRONYMS_NEW_QUESTIONS: Question[] = [\n`;
questions.forEach((q, idx) => {
    tsContent += `  {\n`;
    tsContent += `    id: "${q.id}",\n`;
    tsContent += `    topic: "${q.topic}",\n`;
    tsContent += `    difficulty: "${q.difficulty}",\n`;
    tsContent += `    type: "${q.type}",\n`;
    tsContent += `    question: ${JSON.stringify(q.question)},\n`;
    tsContent += `    answer: ${JSON.stringify(q.answer)},\n`;
    tsContent += `    explanation: ${JSON.stringify(q.explanation)}\n`;
    tsContent += `  }${idx < questions.length - 1 ? ',' : ''}\n`;
});
tsContent += `];\n`;

fs.writeFileSync(outputFile, tsContent, 'utf-8');
console.log(`Parsed ${questions.length} questions into ${outputFile}`);
