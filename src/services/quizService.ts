import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export interface Question {
  id: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Difficult";
  type: "Multiple Choice" | "Identification" | "Solving";
  question: string;
  options?: string[];
  answer: string;
  explanation?: string;
}

const STUDY_GUIDE_CONTEXT = `
Topics:
1. Hardware & Architecture: CPU, ALU, CU, RAM, ROM, EEPROM, Cache, Virtual Memory, Thrashing, HDD, SSD, RAID, SATA, IDE, SCSI, NAS, SAN, Bus, Motherboard, Chipsets, Form Factor, NIC, PSU, UPS, BIOS/UEFI, CMOS, POST, Overclocking, Pipelining, ECC, SDRAM/DDR.
2. Networking & Protocols: IP Address, MAC, Packet, Bandwidth, Latency, Router, Switch, Modem, Gateway, Firewall, Proxy, Topologies, OSI Model, TCP, UDP, ICMP, ARP, DHCP, DNS, BGP, OSPF, SNMP, HTTP/S, FTP, SMTP, POP3/IMAP, VPN, VOIP, Subnetting, VLAN, NAT, Loopback, Port Forwarding, Multicasting, QoS, TTL/MTU/MSS.
3. Cybersecurity Concepts: Malware (Virus, Worm, Trojan, Spyware, Ransomware), Phishing, Brute Force, Social Engineering, Backdoor, Zero-Day, Honey Pot, Zero-Trust, Cryptography (Symmetric, Asymmetric, Hashing, TLS/SSL, IPSEC), 2FA/MFA, Biometrics, CAPTCHA, IDS/IPS, SIEM.
4. Kali Linux & Tools: Nmap, Metasploit, Burp Suite, Wireshark, sqlmap, Netcat, Aircrack-ng, Hashcat, John the Ripper, Hydra, Maltego, BeEF, SET, OpenVAS, Responder, Nikto, WiFi-Pumpkin, Macchanger, Autopsy, WPS Attacks, Evil Twin, Privilege Escalation.
5. Web & Software Development: OS, Open Source, Firmware, Compiler, Debugging, EULA, DBMS/RDBMS, IDE, HTML, CSS, JS, XML, JSON, YAML, REST, SOAP, UDDI, WSDL, AJAX, CRUD, JWT, CORS, DOM, Framework vs Library, Responsive Design, HTTP Status Codes.
6. Cloud & Enterprise: SaaS, PaaS, IaaS, FaaS, XaaS, BaaS, Serverless, VM, VDI, VPC, AWS/GCP, CI/CD, CRM, ERP, CMS, SLA.
7. Emerging Technologies: AI/ML/DL/NLP, LLM, Computer Vision, GAN, IoT, VR/AR/MR, Blockchain, Smart Contracts, 5G, Quantum Computing, Digital Twin, Big Data, Edge Computing, NFT, Bio-hacking, Li-Fi.
8. Acronyms Master List: AI, API, ASCII, BIOS, BPM, BYOD, CLI, CMOS, CMS, CPU, CRUD, CSS, CSV, DBMS, DDoS, DHCP, DNS, DOM, DOS, DSL, EULA, FAT, FTP, GB, GHz, GIF, GPU, GUI, HDD, HDMI, HTML, HTTP, HTTPS, IaaS, ICMP, ICT, IDE, IMAP, IoT, IP, IPSEC, ISP, IT, JPEG, JSON, JWT, LAN, LCD, LED, MAC, MAN, MFA, ML, NAT, NIC, NFC, NoSQL, NTFS, OS, OSI, OSINT, PaaS, PAN, PDF, PHP, PNG, POST, PSU, QoS, RAID, RAM, REST, ROM, SaaS, SATA, SDK, SEO, SHA, SLA, SMTP, SQL, SSD, SSH, SSL, TCP, TLS, UDP, URL, USB, VGA, VM, VLAN, VPN, WAN, WWW, WEP, WPA, WPS, AES, DES, RSA, MD5, LLM, CV, GAN, MQTT, OAuth, SAML, CAPTCHA, UEFI, NAS, SAN, WMAN, WWAN, POP3, PAT, TTL, MTU, MSS, DVI, DP, PCIe, AGP, NPU, TPU, SDRAM, DDR, UTF, AWS, GCP, VPC, CI/CD, CRM, ERP, VDI, FaaS, XaaS, LORA, VOIP, K8s.
`;

export async function generateQuestions(topic: string, difficulty: string): Promise<Question[]> {
  const difficultyPrompt = difficulty === "Mixed" 
    ? "a random mix of Easy, Medium, and Difficult questions" 
    : `difficulty level "${difficulty}"`;

  const prompt = `
    Generate 10 high-quality ICT quiz questions for the topic "${topic}" with ${difficultyPrompt}.

    If the topic is "Acronyms Master List", focus on full forms, meanings, and use cases of the acronyms. For this topic, ONLY generate "Multiple Choice" or "Identification" question types.
    
    For all other topics, include a mix of:
    - Multiple Choice (4 options)
    - Identification (Short answer)
    - Solving (Math or logic based, e.g., subnetting, storage conversion, RAID capacity, binary/hex conversion, logic gates, or performance calculations)

    Return the result as a JSON array of objects with the following structure:
    {
      "id": "unique_string",
      "topic": "${topic}",
      "difficulty": "Easy" | "Medium" | "Difficult",
      "type": "Multiple Choice" | "Identification" | "Solving",
      "question": "string",
      "options": ["string", "string", "string", "string"] (only for Multiple Choice),
      "answer": "string",
      "explanation": "string"
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        systemInstruction: `You are an expert ICT educator. Use the following context to generate high-quality, accurate quiz questions: ${STUDY_GUIDE_CONTEXT}`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              topic: { type: Type.STRING },
              difficulty: { type: Type.STRING },
              type: { type: Type.STRING },
              question: { type: Type.STRING },
              options: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              answer: { type: Type.STRING },
              explanation: { type: Type.STRING }
            },
            required: ["id", "topic", "difficulty", "type", "question", "answer"]
          }
        }
      }
    });

    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Error generating questions:", error);
    return [];
  }
}
