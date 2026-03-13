import re
import json

def parse_questions(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Normalize line endings
    content = content.replace('\r\n', '\n')
    
    # We are looking for patterns like "1. What is..." followed by lines until the next number
    pattern = re.compile(r'^(\d+)\.\s+(.*?)\n(.*?)(?=^\d+\.\s+|$)', re.MULTILINE | re.DOTALL)
    
    matches = pattern.findall(content)
    
    questions = []
    
    for match in matches:
        num_str = match[0]
        question_text = match[1].strip()
        answer_text = match[2].strip()
        
        # Clean up answer text by joining lines separated by newline
        answer_text = ' '.join(line.strip() for line in answer_text.split('\n') if line.strip())
        
        # Some cleanup for hyphen separated answers
        # e.g., "Central Processing Unit - the primary component..."
        # If there's a hyphen early on, we can split it to answer and explanation
        split_ans = re.split(r'\s+-\s+', answer_text, maxsplit=1)
        if len(split_ans) == 2:
            answer = split_ans[0].strip()
            explanation = split_ans[1].strip()
            # If the answer part is too long, it might just be a regular sentence with a dash.
            if len(answer) > 80:
                answer = answer_text
                explanation = "A foundational concept in Hardware & Architecture."
        else:
            answer = answer_text
            explanation = "A foundational concept in Hardware & Architecture."

        num = int(num_str)
        if 1 <= num <= 100:
            difficulty = "Easy"
            diff_code = "e"
        elif 101 <= num <= 200:
            difficulty = "Medium"
            diff_code = "m"
        else:
            difficulty = "Difficult"
            diff_code = "d"
            
        q_obj = {
            "id": f"ha-{diff_code}-new-{num}",
            "topic": "Hardware & Architecture",
            "difficulty": difficulty,
            "type": "Identification",
            "question": question_text,
            "answer": answer,
            "explanation": explanation
        }
        
        questions.append(q_obj)
        
    print(f"Parsed {len(questions)} questions.")
    
    # Write to a TS file
    with open('parsed_questions.ts', 'w', encoding='utf-8') as f:
        f.write("import { Question } from \"../services/quizService\";\n\n")
        f.write("export const HARDWARE_NEW_QUESTIONS: Question[] = ")
        # Using string replacement to format nicely
        json_str = json.dumps(questions, indent=2)
        f.write(json_str)
        f.write(";\n")

if __name__ == "__main__":
    parse_questions('questions_raw.txt')
