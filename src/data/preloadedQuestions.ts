import { Question } from "../services/quizService";

export const PRELOADED_QUESTIONS: Question[] = [
  // HARDWARE & ARCHITECTURE - EASY
  {
    id: "ha-e-1",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which component is known as the 'brain' of the computer?",
    options: ["RAM", "CPU", "Hard Drive", "Motherboard"],
    answer: "CPU",
    explanation: "The Central Processing Unit (CPU) performs most of the processing inside the computer."
  },
  {
    id: "ha-e-2",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Identification",
    question: "What does RAM stand for?",
    answer: "Random Access Memory",
    explanation: "RAM is the short-term memory where data is stored as the processor needs it."
  },
  {
    id: "ha-e-3",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of the following is a permanent storage device?",
    options: ["RAM", "Cache", "SSD", "Registers"],
    answer: "SSD",
    explanation: "Solid State Drives (SSD) retain data even when the power is turned off."
  },
  {
    id: "ha-e-4",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the main circuit board of a computer called?",
    answer: "Motherboard",
    explanation: "The motherboard connects all the components of the computer together."
  },
  {
    id: "ha-e-5",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which port is commonly used to connect a mouse or keyboard?",
    options: ["HDMI", "VGA", "USB", "Ethernet"],
    answer: "USB",
    explanation: "Universal Serial Bus (USB) is the standard for connecting peripherals."
  },
  {
    id: "ha-e-6",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Identification",
    question: "What type of memory is used to store the BIOS?",
    answer: "ROM",
    explanation: "Read-Only Memory (ROM) is used for firmware like the BIOS."
  },
  {
    id: "ha-e-7",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What does GPU stand for?",
    options: ["General Processing Unit", "Graphics Processing Unit", "Global Power Unit", "Gaming Processing Unit"],
    answer: "Graphics Processing Unit",
    explanation: "The GPU handles rendering images, video, and animations."
  },
  {
    id: "ha-e-8",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Identification",
    question: "Which unit inside the CPU performs mathematical calculations?",
    answer: "ALU",
    explanation: "The Arithmetic Logic Unit (ALU) handles all arithmetic and logical operations."
  },
  {
    id: "ha-e-9",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of these is an input device?",
    options: ["Monitor", "Printer", "Scanner", "Speaker"],
    answer: "Scanner",
    explanation: "A scanner takes physical documents and converts them into digital data."
  },
  {
    id: "ha-e-10",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Solving",
    question: "If a computer has 8GB of RAM, how many Megabytes (MB) is that? (Use 1024 conversion)",
    answer: "8192",
    explanation: "8 * 1024 = 8192 MB."
  },
  {
    id: "ha-e-11",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which component provides power to all other components in a computer?",
    options: ["CPU", "PSU", "GPU", "RAM"],
    answer: "PSU",
    explanation: "The Power Supply Unit (PSU) converts mains AC to low-voltage regulated DC power for the internal components."
  },
  {
    id: "ha-e-12",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Identification",
    question: "What does PSU stand for?",
    answer: "Power Supply Unit",
    explanation: "PSU is the component that supplies power to a computer."
  },
  {
    id: "ha-e-13",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of the following is used to prevent a computer from shutting down during a power outage?",
    options: ["PSU", "UPS", "CPU", "GPU"],
    answer: "UPS",
    explanation: "An Uninterruptible Power Supply (UPS) provides emergency power when the input power source fails."
  },
  {
    id: "ha-e-14",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Identification",
    question: "What does UPS stand for?",
    answer: "Uninterruptible Power Supply",
    explanation: "UPS provides battery backup when the electrical power fails."
  },
  {
    id: "ha-e-15",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which component is used to cool the CPU?",
    options: ["Hard Drive", "Heat Sink", "Sound Card", "Network Card"],
    answer: "Heat Sink",
    explanation: "A heat sink is a passive heat exchanger that transfers the heat generated by an electronic device to a cooling medium."
  },
  {
    id: "ha-e-16",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the substance applied between the CPU and the heat sink to improve heat transfer?",
    answer: "Thermal Paste",
    explanation: "Thermal paste fills in the microscopic gaps between the CPU and the heat sink."
  },
  {
    id: "ha-e-17",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of the following is an output device?",
    options: ["Keyboard", "Mouse", "Monitor", "Microphone"],
    answer: "Monitor",
    explanation: "A monitor displays information in visual form."
  },
  {
    id: "ha-e-18",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the standard layout for most computer keyboards?",
    answer: "QWERTY",
    explanation: "QWERTY is the most common keyboard layout for Latin-script alphabets."
  },
  {
    id: "ha-e-19",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which port is used to connect a monitor to a computer?",
    options: ["USB", "HDMI", "Ethernet", "SATA"],
    answer: "HDMI",
    explanation: "High-Definition Multimedia Interface (HDMI) is a proprietary audio/video interface for transmitting uncompressed video data."
  },
  {
    id: "ha-e-20",
    topic: "Hardware & Architecture",
    difficulty: "Easy",
    type: "Solving",
    question: "If a hard drive has a capacity of 2TB, how many Gigabytes (GB) is that? (Use 1000 conversion for marketing capacity)",
    answer: "2000",
    explanation: "2 * 1000 = 2000 GB."
  },

  // HARDWARE & ARCHITECTURE - MEDIUM
  {
    id: "ha-m-1",
    topic: "Hardware & Architecture",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which level of cache memory is typically the fastest and smallest?",
    options: ["L1", "L2", "L3", "L4"],
    answer: "L1",
    explanation: "L1 cache is built directly into the CPU core and operates at the same speed as the processor."
  },
  {
    id: "ha-m-2",
    topic: "Hardware & Architecture",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the process of increasing a component's clock rate beyond its factory setting?",
    answer: "Overclocking",
    explanation: "Overclocking increases performance but generates more heat."
  },
  {
    id: "ha-m-3",
    topic: "Hardware & Architecture",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which RAID level provides striping without parity or mirroring?",
    options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
    answer: "RAID 0",
    explanation: "RAID 0 splits data across drives for speed but offers no redundancy."
  },
  {
    id: "ha-m-4",
    topic: "Hardware & Architecture",
    difficulty: "Medium",
    type: "Solving",
    question: "A system uses a 32-bit address bus. How much memory can it theoretically address in GB?",
    answer: "4",
    explanation: "2^32 = 4,294,967,296 bytes = 4 GB."
  },
  {
    id: "ha-m-5",
    topic: "Hardware & Architecture",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the small amount of memory on the motherboard that stores BIOS settings and is powered by a battery?",
    answer: "CMOS",
    explanation: "Complementary Metal-Oxide Semiconductor (CMOS) memory stores settings like date and time."
  },
  {
    id: "ha-m-6",
    topic: "Hardware & Architecture",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which type of RAM must be periodically refreshed to maintain data?",
    options: ["SRAM", "DRAM", "ROM", "Flash"],
    answer: "DRAM",
    explanation: "Dynamic RAM (DRAM) uses capacitors that leak charge and need refreshing."
  },
  {
    id: "ha-m-7",
    topic: "Hardware & Architecture",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the diagnostic testing sequence that a computer's BIOS runs when it first powers up?",
    answer: "POST",
    explanation: "Power-On Self-Test (POST) checks if hardware is functioning correctly."
  },
  {
    id: "ha-m-8",
    topic: "Hardware & Architecture",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which interface is commonly used for internal SSDs and HDDs in modern PCs?",
    options: ["IDE", "SATA", "SCSI", "PATA"],
    answer: "SATA",
    explanation: "Serial ATA (SATA) is the standard interface for storage devices."
  },
  {
    id: "ha-m-9",
    topic: "Hardware & Architecture",
    difficulty: "Medium",
    type: "Solving",
    question: "If a CPU has a clock speed of 3.5 GHz, how many clock cycles does it perform per second?",
    answer: "3,500,000,000",
    explanation: "Giga means billion, so 3.5 billion cycles."
  },
  {
    id: "ha-m-10",
    topic: "Hardware & Architecture",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for a CPU feature that allows it to execute multiple instructions simultaneously in different stages?",
    answer: "Pipelining",
    explanation: "Pipelining improves instruction throughput by overlapping execution stages."
  },

  // HARDWARE & ARCHITECTURE - DIFFICULT
  {
    id: "ha-d-1",
    topic: "Hardware & Architecture",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "In computer architecture, what does 'Thrashing' refer to?",
    options: ["CPU overheating", "Excessive paging/swapping", "Hard drive failure", "Network congestion"],
    answer: "Excessive paging/swapping",
    explanation: "Thrashing occurs when the OS spends more time swapping data between RAM and disk than executing instructions."
  },
  {
    id: "ha-d-2",
    topic: "Hardware & Architecture",
    difficulty: "Difficult",
    type: "Identification",
    question: "What type of memory can detect and fix common kinds of internal data corruption?",
    answer: "ECC RAM",
    explanation: "Error Correction Code (ECC) RAM is used in servers to prevent data errors."
  },
  {
    id: "ha-d-3",
    topic: "Hardware & Architecture",
    difficulty: "Difficult",
    type: "Solving",
    question: "Calculate the total usable capacity of a RAID 5 array consisting of four 2TB drives.",
    answer: "6TB",
    explanation: "In RAID 5, capacity is (n-1) * size. (4-1) * 2TB = 6TB."
  },
  {
    id: "ha-d-4",
    topic: "Hardware & Architecture",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which architecture uses a single bus to connect the CPU, memory, and I/O devices?",
    options: ["Harvard Architecture", "Von Neumann Architecture", "RISC", "CISC"],
    answer: "Von Neumann Architecture",
    explanation: "Von Neumann uses a shared bus for data and instructions."
  },
  {
    id: "ha-d-5",
    topic: "Hardware & Architecture",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for the physical design and layout of a motherboard?",
    answer: "Form Factor",
    explanation: "Examples include ATX, Micro-ATX, and ITX."
  },
  {
    id: "ha-d-6",
    topic: "Hardware & Architecture",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the purpose of a Northbridge chipset in older motherboard designs?",
    options: ["Managing slow I/O", "Connecting CPU to high-speed RAM/GPU", "Handling BIOS settings", "Power management"],
    answer: "Connecting CPU to high-speed RAM/GPU",
    explanation: "The Northbridge handled high-speed communication; Southbridge handled slower I/O."
  },
  {
    id: "ha-d-7",
    topic: "Hardware & Architecture",
    difficulty: "Difficult",
    type: "Solving",
    question: "If a memory module is rated as PC4-25600, what is its peak data transfer rate in MB/s?",
    answer: "3200",
    explanation: "PC4-25600 means 25600 Mbps. Divide by 8 to get 3200 MB/s."
  },
  {
    id: "ha-d-8",
    topic: "Hardware & Architecture",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the technology that allows a single physical CPU core to appear as two logical processors to the OS?",
    answer: "Hyper-Threading",
    explanation: "Intel's Hyper-Threading (or SMT) improves multi-threaded performance."
  },
  {
    id: "ha-d-9",
    topic: "Hardware & Architecture",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which of the following is a non-volatile memory that can be erased and reprogrammed byte-by-byte?",
    options: ["EPROM", "EEPROM", "SRAM", "DRAM"],
    answer: "EEPROM",
    explanation: "Electrically Erasable Programmable ROM (EEPROM) allows byte-level updates."
  },
  {
    id: "ha-d-10",
    topic: "Hardware & Architecture",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for the delay between a request for data from memory and the data being available?",
    answer: "Latency",
    explanation: "Memory latency is often measured in clock cycles (CAS latency)."
  },

  // NETWORKING & PROTOCOLS - EASY
  {
    id: "np-e-1",
    topic: "Networking & Protocols",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What does IP stand for in networking?",
    options: ["Internal Protocol", "Internet Protocol", "Inter-Process", "Instant Packet"],
    answer: "Internet Protocol",
    explanation: "IP is the principal communications protocol in the Internet protocol suite."
  },
  {
    id: "np-e-2",
    topic: "Networking & Protocols",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the unique hardware address assigned to a Network Interface Card?",
    answer: "MAC Address",
    explanation: "Media Access Control (MAC) addresses are permanent physical addresses."
  },
  {
    id: "np-e-3",
    topic: "Networking & Protocols",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which device is used to connect multiple networks and direct traffic between them?",
    options: ["Switch", "Hub", "Router", "Modem"],
    answer: "Router",
    explanation: "Routers operate at Layer 3 and route packets between different networks."
  },
  {
    id: "np-e-4",
    topic: "Networking & Protocols",
    difficulty: "Easy",
    type: "Identification",
    question: "What protocol is used to browse the web securely?",
    answer: "HTTPS",
    explanation: "HyperText Transfer Protocol Secure (HTTPS) uses SSL/TLS for encryption."
  },
  {
    id: "np-e-5",
    topic: "Networking & Protocols",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the maximum number of bits in an IPv4 address?",
    options: ["32", "64", "128", "256"],
    answer: "32",
    explanation: "IPv4 addresses are 32-bit numbers, usually expressed in dotted-decimal notation."
  },
  {
    id: "np-e-6",
    topic: "Networking & Protocols",
    difficulty: "Easy",
    type: "Identification",
    question: "What does DNS stand for?",
    answer: "Domain Name System",
    explanation: "DNS translates human-readable domain names (like google.com) into IP addresses."
  },
  {
    id: "np-e-7",
    topic: "Networking & Protocols",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which topology connects all devices to a central hub or switch?",
    options: ["Bus", "Ring", "Star", "Mesh"],
    answer: "Star",
    explanation: "In a star topology, all nodes are connected to a central point."
  },
  {
    id: "np-e-8",
    topic: "Networking & Protocols",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for the amount of data that can be transmitted over a network in a given time?",
    answer: "Bandwidth",
    explanation: "Bandwidth is typically measured in bits per second (bps)."
  },
  {
    id: "np-e-9",
    topic: "Networking & Protocols",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of the following is a private IP address range?",
    options: ["8.8.8.8", "192.168.1.1", "172.217.0.1", "1.1.1.1"],
    answer: "192.168.1.1",
    explanation: "192.168.x.x is a common private IP range for home networks."
  },
  {
    id: "np-e-10",
    topic: "Networking & Protocols",
    difficulty: "Easy",
    type: "Identification",
    question: "What protocol is used to automatically assign IP addresses to devices on a network?",
    answer: "DHCP",
    explanation: "Dynamic Host Configuration Protocol (DHCP) automates IP assignment."
  },

  // NETWORKING & PROTOCOLS - MEDIUM
  {
    id: "np-m-1",
    topic: "Networking & Protocols",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which layer of the OSI model is responsible for routing and logical addressing?",
    options: ["Data Link", "Network", "Transport", "Session"],
    answer: "Network",
    explanation: "The Network Layer (Layer 3) handles routing and IP addressing."
  },
  {
    id: "np-m-2",
    topic: "Networking & Protocols",
    difficulty: "Medium",
    type: "Identification",
    question: "What protocol is used to resolve an IP address to a MAC address?",
    answer: "ARP",
    explanation: "Address Resolution Protocol (ARP) finds the hardware address for a known IP."
  },
  {
    id: "np-m-3",
    topic: "Networking & Protocols",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which transport protocol is connectionless and does not guarantee delivery?",
    options: ["TCP", "UDP", "HTTP", "FTP"],
    answer: "UDP",
    explanation: "User Datagram Protocol (UDP) is fast but unreliable (no handshake)."
  },
  {
    id: "np-m-4",
    topic: "Networking & Protocols",
    difficulty: "Medium",
    type: "Solving",
    question: "How many usable host IP addresses are in a /24 subnet?",
    answer: "254",
    explanation: "2^8 - 2 = 256 - 2 = 254 (subtracting network and broadcast addresses)."
  },
  {
    id: "np-m-5",
    topic: "Networking & Protocols",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for a network that spans a city or a large campus?",
    answer: "MAN",
    explanation: "Metropolitan Area Network (MAN) covers a larger area than a LAN but smaller than a WAN."
  },
  {
    id: "np-m-6",
    topic: "Networking & Protocols",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which port number is standard for the SSH protocol?",
    options: ["21", "22", "23", "80"],
    answer: "22",
    explanation: "SSH uses port 22; FTP uses 21; Telnet uses 23."
  },
  {
    id: "np-m-7",
    topic: "Networking & Protocols",
    difficulty: "Medium",
    type: "Identification",
    question: "What technology allows multiple devices on a private network to share a single public IP address?",
    answer: "NAT",
    explanation: "Network Address Translation (NAT) maps private IPs to a public IP."
  },
  {
    id: "np-m-8",
    topic: "Networking & Protocols",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which OSI layer handles encryption and data formatting?",
    options: ["Application", "Presentation", "Session", "Transport"],
    answer: "Presentation",
    explanation: "The Presentation Layer (Layer 6) ensures data is in a readable format."
  },
  {
    id: "np-m-9",
    topic: "Networking & Protocols",
    difficulty: "Medium",
    type: "Solving",
    question: "Convert the binary IP 11000000.10101000.00000001.00000001 to dotted-decimal.",
    answer: "192.168.1.1",
    explanation: "11000000=192, 10101000=168, 00000001=1."
  },
  {
    id: "np-m-10",
    topic: "Networking & Protocols",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for the delay it takes for a packet to travel from source to destination?",
    answer: "Latency",
    explanation: "Latency is often measured in milliseconds (ms)."
  },

  // NETWORKING & PROTOCOLS - DIFFICULT
  {
    id: "np-d-1",
    topic: "Networking & Protocols",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which routing protocol is primarily used for routing between different Autonomous Systems (AS) on the Internet?",
    options: ["OSPF", "RIP", "BGP", "EIGRP"],
    answer: "BGP",
    explanation: "Border Gateway Protocol (BGP) is the protocol that makes the internet work by routing between AS."
  },
  {
    id: "np-d-2",
    topic: "Networking & Protocols",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the 128-bit address used in the latest version of the Internet Protocol?",
    answer: "IPv6",
    explanation: "IPv6 provides a vastly larger address space than IPv4."
  },
  {
    id: "np-d-3",
    topic: "Networking & Protocols",
    difficulty: "Difficult",
    type: "Solving",
    question: "What is the subnet mask for a /27 network in dotted-decimal format?",
    answer: "255.255.255.224",
    explanation: "/27 means 27 ones. 11111111.11111111.11111111.11100000 = 255.255.255.224."
  },
  {
    id: "np-d-4",
    topic: "Networking & Protocols",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "In the TCP 3-way handshake, what is the correct sequence of flags?",
    options: ["SYN, ACK, SYN-ACK", "SYN, SYN-ACK, ACK", "ACK, SYN, SYN-ACK", "SYN-ACK, SYN, ACK"],
    answer: "SYN, SYN-ACK, ACK",
    explanation: "Client sends SYN, Server responds SYN-ACK, Client sends ACK."
  },
  {
    id: "np-d-5",
    topic: "Networking & Protocols",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for a logical subnetwork within a physical network that groups devices regardless of their physical location?",
    answer: "VLAN",
    explanation: "Virtual Local Area Networks (VLANs) improve security and reduce broadcast traffic."
  },
  {
    id: "np-d-6",
    topic: "Networking & Protocols",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which ICMP message type is used by the 'traceroute' command to discover routers along a path?",
    options: ["Echo Request", "Destination Unreachable", "Time Exceeded", "Source Quench"],
    answer: "Time Exceeded",
    explanation: "Traceroute increments TTL; when TTL reaches 0, routers return 'Time Exceeded'."
  },
  {
    id: "np-d-7",
    topic: "Networking & Protocols",
    difficulty: "Difficult",
    type: "Solving",
    question: "If a network link has a bandwidth of 100 Mbps and a latency of 50 ms, what is the Bandwidth-Delay Product in bits?",
    answer: "5,000,000",
    explanation: "100,000,000 bps * 0.050 s = 5,000,000 bits."
  },
  {
    id: "np-d-8",
    topic: "Networking & Protocols",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the protocol used for managing and monitoring network devices like routers and switches?",
    answer: "SNMP",
    explanation: "Simple Network Management Protocol (SNMP) collects data from managed devices."
  },
  {
    id: "np-d-9",
    topic: "Networking & Protocols",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which of the following is a Link-State routing protocol?",
    options: ["RIP", "BGP", "OSPF", "EIGRP"],
    answer: "OSPF",
    explanation: "Open Shortest Path First (OSPF) uses the Dijkstra algorithm to find the best path."
  },
  {
    id: "np-d-10",
    topic: "Networking & Protocols",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for the maximum size of a packet that can be transmitted over a network link?",
    answer: "MTU",
    explanation: "Maximum Transmission Unit (MTU) is typically 1500 bytes for Ethernet."
  },

  // CYBERSECURITY CONCEPTS - EASY
  {
    id: "cc-e-1",
    topic: "Cybersecurity Concepts",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the general term for software designed to cause damage or gain unauthorized access?",
    options: ["Adware", "Malware", "Firmware", "Shareware"],
    answer: "Malware",
    explanation: "Malware is a portmanteau of 'malicious software'."
  },
  {
    id: "cc-e-2",
    topic: "Cybersecurity Concepts",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the practice of sending fraudulent emails to trick people into revealing sensitive information?",
    answer: "Phishing",
    explanation: "Phishing often uses fake websites that look like legitimate ones."
  },
  {
    id: "cc-e-3",
    topic: "Cybersecurity Concepts",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of the following is a strong password practice?",
    options: ["Using your birthday", "Using 'password123'", "Using a mix of letters, numbers, and symbols", "Using the same password for all sites"],
    answer: "Using a mix of letters, numbers, and symbols",
    explanation: "Complexity makes passwords harder to crack via brute force."
  },
  {
    id: "cc-e-4",
    topic: "Cybersecurity Concepts",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 2FA stand for?",
    answer: "Two-Factor Authentication",
    explanation: "2FA adds an extra layer of security beyond just a password."
  },
  {
    id: "cc-e-5",
    topic: "Cybersecurity Concepts",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What type of malware encrypts a user's files and demands payment for the decryption key?",
    options: ["Virus", "Worm", "Ransomware", "Spyware"],
    answer: "Ransomware",
    explanation: "Ransomware like WannaCry has caused massive global damage."
  },
  {
    id: "cc-e-6",
    topic: "Cybersecurity Concepts",
    difficulty: "Easy",
    type: "Identification",
    question: "What is a hardware or software system that monitors and controls incoming and outgoing network traffic?",
    answer: "Firewall",
    explanation: "Firewalls act as a barrier between trusted and untrusted networks."
  },
  {
    id: "cc-e-7",
    topic: "Cybersecurity Concepts",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of these is a social engineering attack?",
    options: ["SQL Injection", "Baiting", "DDoS", "Buffer Overflow"],
    answer: "Baiting",
    explanation: "Baiting uses physical media (like a USB drive) to trick someone into installing malware."
  },
  {
    id: "cc-e-8",
    topic: "Cybersecurity Concepts",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for a hacker who uses their skills for ethical purposes?",
    answer: "White Hat",
    explanation: "White hat hackers help organizations find and fix vulnerabilities."
  },
  {
    id: "cc-e-9",
    topic: "Cybersecurity Concepts",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the purpose of a CAPTCHA?",
    options: ["To speed up login", "To tell humans and bots apart", "To encrypt data", "To block ads"],
    answer: "To tell humans and bots apart",
    explanation: "CAPTCHA prevents automated scripts from abusing web services."
  },
  {
    id: "cc-e-10",
    topic: "Cybersecurity Concepts",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for a secret way to bypass normal authentication in a system?",
    answer: "Backdoor",
    explanation: "Backdoors can be installed by attackers or left by developers."
  },

  // CYBERSECURITY CONCEPTS - MEDIUM
  {
    id: "cc-m-1",
    topic: "Cybersecurity Concepts",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which type of encryption uses the same key for both encryption and decryption?",
    options: ["Asymmetric", "Symmetric", "Hashing", "Public Key"],
    answer: "Symmetric",
    explanation: "Symmetric encryption (like AES) is fast but requires secure key exchange."
  },
  {
    id: "cc-m-2",
    topic: "Cybersecurity Concepts",
    difficulty: "Medium",
    type: "Identification",
    question: "What is an attack that attempts to make a server or network resource unavailable by flooding it with traffic?",
    answer: "DDoS",
    explanation: "Distributed Denial of Service (DDoS) uses multiple compromised systems."
  },
  {
    id: "cc-m-3",
    topic: "Cybersecurity Concepts",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "In cryptography, what is a one-way function that turns data into a fixed-length string?",
    options: ["Encryption", "Decryption", "Hashing", "Salting"],
    answer: "Hashing",
    explanation: "Hashing is used for password storage and data integrity checks."
  },
  {
    id: "cc-m-4",
    topic: "Cybersecurity Concepts",
    difficulty: "Medium",
    type: "Solving",
    question: "If a password has 8 characters and uses only lowercase letters (26 options), how many total combinations are possible?",
    answer: "208,827,064,576",
    explanation: "26^8 = 208,827,064,576."
  },
  {
    id: "cc-m-5",
    topic: "Cybersecurity Concepts",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for a vulnerability that is exploited before the developer is even aware of it?",
    answer: "Zero-Day",
    explanation: "Zero-day attacks are highly dangerous because no patch exists yet."
  },
  {
    id: "cc-m-6",
    topic: "Cybersecurity Concepts",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which of the following is an example of asymmetric encryption?",
    options: ["AES", "DES", "RSA", "Blowfish"],
    answer: "RSA",
    explanation: "RSA uses a public key for encryption and a private key for decryption."
  },
  {
    id: "cc-m-7",
    topic: "Cybersecurity Concepts",
    difficulty: "Medium",
    type: "Identification",
    question: "What is a decoy system designed to lure and study attackers?",
    answer: "Honeypot",
    explanation: "Honeypots help security teams understand attacker methods."
  },
  {
    id: "cc-m-8",
    topic: "Cybersecurity Concepts",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is 'Salting' in the context of password security?",
    options: ["Adding random data to a password before hashing", "Encrypting the hash", "Changing the password frequently", "Using special characters"],
    answer: "Adding random data to a password before hashing",
    explanation: "Salting prevents pre-computed attacks like rainbow tables."
  },
  {
    id: "cc-m-9",
    topic: "Cybersecurity Concepts",
    difficulty: "Medium",
    type: "Solving",
    question: "A Caesar Cipher uses a shift of 3. What does the word 'CAT' become?",
    answer: "FDW",
    explanation: "C+3=F, A+3=D, T+3=W."
  },
  {
    id: "cc-m-10",
    topic: "Cybersecurity Concepts",
    difficulty: "Medium",
    type: "Identification",
    question: "What security model assumes that every user and device, both inside and outside the network, is a potential threat?",
    answer: "Zero Trust",
    explanation: "Zero Trust requires continuous verification of all users."
  },

  // CYBERSECURITY CONCEPTS - DIFFICULT
  {
    id: "cc-d-1",
    topic: "Cybersecurity Concepts",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which of the following is a side-channel attack that exploits speculative execution in modern CPUs?",
    options: ["Spectre", "Heartbleed", "BlueKeep", "EternalBlue"],
    answer: "Spectre",
    explanation: "Spectre and Meltdown are hardware-level vulnerabilities."
  },
  {
    id: "cc-d-2",
    topic: "Cybersecurity Concepts",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for the mathematical process of proving that a message was sent by a specific person and has not been altered?",
    answer: "Digital Signature",
    explanation: "Digital signatures provide authenticity, integrity, and non-repudiation."
  },
  {
    id: "cc-d-3",
    topic: "Cybersecurity Concepts",
    difficulty: "Difficult",
    type: "Solving",
    question: "In RSA, if p=3 and q=11, what is the modulus n?",
    answer: "33",
    explanation: "n = p * q = 3 * 11 = 33."
  },
  {
    id: "cc-d-4",
    topic: "Cybersecurity Concepts",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is a 'Man-in-the-Middle' (MitM) attack?",
    options: ["Stealing a physical server", "Intercepting communication between two parties", "Guessing a password", "Crashing a website"],
    answer: "Intercepting communication between two parties",
    explanation: "MitM attacks allow the attacker to read or modify messages."
  },
  {
    id: "cc-d-5",
    topic: "Cybersecurity Concepts",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the security framework that uses centralized logging to detect and respond to threats in real-time?",
    answer: "SIEM",
    explanation: "Security Information and Event Management (SIEM) aggregates data from across the network."
  },
  {
    id: "cc-d-6",
    topic: "Cybersecurity Concepts",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which hashing algorithm is currently considered insecure for cryptographic purposes due to collision vulnerabilities?",
    options: ["SHA-256", "SHA-3", "MD5", "bcrypt"],
    answer: "MD5",
    explanation: "MD5 is fast but easily broken; SHA-256 is the current standard."
  },
  {
    id: "cc-d-7",
    topic: "Cybersecurity Concepts",
    difficulty: "Difficult",
    type: "Solving",
    question: "How many bits are in a single SHA-256 hash output?",
    answer: "256",
    explanation: "The name SHA-256 indicates the bit length."
  },
  {
    id: "cc-d-8",
    topic: "Cybersecurity Concepts",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for an attack that exploits a system's memory management to execute malicious code?",
    answer: "Buffer Overflow",
    explanation: "Buffer overflows overwrite adjacent memory to hijack execution."
  },
  {
    id: "cc-d-9",
    topic: "Cybersecurity Concepts",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the primary purpose of an IDS (Intrusion Detection System)?",
    options: ["To block all traffic", "To alert administrators of suspicious activity", "To encrypt the database", "To backup files"],
    answer: "To alert administrators of suspicious activity",
    explanation: "IDS monitors; IPS (Intrusion Prevention System) can actively block."
  },
  {
    id: "cc-d-10",
    topic: "Cybersecurity Concepts",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for a set of software tools that an attacker uses to mask their presence and maintain administrative access to a computer?",
    answer: "Rootkit",
    explanation: "Rootkits are often invisible to standard antivirus software."
  },

  // KALI LINUX & TOOLS - EASY
  {
    id: "kl-e-1",
    topic: "Kali Linux & Tools",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which tool in Kali Linux is used for network scanning and host discovery?",
    options: ["Wireshark", "Nmap", "Metasploit", "sqlmap"],
    answer: "Nmap",
    explanation: "Nmap (Network Mapper) is the industry standard for port scanning."
  },
  {
    id: "kl-e-2",
    topic: "Kali Linux & Tools",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the default username for older versions of Kali Linux?",
    answer: "root",
    explanation: "Modern versions now use 'kali' as the default user."
  },
  {
    id: "kl-e-3",
    topic: "Kali Linux & Tools",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which tool is a graphical network protocol analyzer?",
    options: ["Netcat", "Wireshark", "Hydra", "John"],
    answer: "Wireshark",
    explanation: "Wireshark lets you see what's happening on your network at a microscopic level."
  },
  {
    id: "kl-e-4",
    topic: "Kali Linux & Tools",
    difficulty: "Easy",
    type: "Identification",
    question: "What command is used in Linux to change the current directory?",
    answer: "cd",
    explanation: "cd stands for 'change directory'."
  },
  {
    id: "kl-e-5",
    topic: "Kali Linux & Tools",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which Kali tool is used specifically for automated SQL injection?",
    options: ["Nmap", "sqlmap", "Burp Suite", "Nikto"],
    answer: "sqlmap",
    explanation: "sqlmap automates the process of detecting and exploiting SQL injection flaws."
  },
  {
    id: "kl-e-6",
    topic: "Kali Linux & Tools",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the Linux command to list files in a directory?",
    answer: "ls",
    explanation: "ls stands for 'list'."
  },
  {
    id: "kl-e-7",
    topic: "Kali Linux & Tools",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which tool is used for cracking Wi-Fi passwords?",
    options: ["Aircrack-ng", "Metasploit", "Maltego", "BeEF"],
    answer: "Aircrack-ng",
    explanation: "Aircrack-ng is a complete suite of tools to assess WiFi network security."
  },
  {
    id: "kl-e-8",
    topic: "Kali Linux & Tools",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for a collection of pre-made exploits and payloads in Kali?",
    answer: "Metasploit",
    explanation: "The Metasploit Framework is used for penetration testing."
  },
  {
    id: "kl-e-9",
    topic: "Kali Linux & Tools",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which command gives you administrative (root) privileges for a single command?",
    options: ["admin", "root", "sudo", "runas"],
    answer: "sudo",
    explanation: "sudo stands for 'superuser do'."
  },
  {
    id: "kl-e-10",
    topic: "Kali Linux & Tools",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the Kali tool used for fast password cracking using wordlists?",
    answer: "John the Ripper",
    explanation: "John the Ripper is a popular password cracking tool."
  },

  // KALI LINUX & TOOLS - MEDIUM
  {
    id: "kl-m-1",
    topic: "Kali Linux & Tools",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which Burp Suite component is used to intercept and modify HTTP requests?",
    options: ["Repeater", "Intruder", "Proxy", "Sequencer"],
    answer: "Proxy",
    explanation: "The Proxy sits between the browser and the server to intercept traffic."
  },
  {
    id: "kl-m-2",
    topic: "Kali Linux & Tools",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the Nmap flag used to perform a service version detection scan?",
    answer: "-sV",
    explanation: "The -sV flag probes open ports to determine service/version info."
  },
  {
    id: "kl-m-3",
    topic: "Kali Linux & Tools",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which tool is used for fast, parallelized network login cracking (brute forcing)?",
    options: ["Hydra", "John", "Hashcat", "Nikto"],
    answer: "Hydra",
    explanation: "Hydra supports numerous protocols like SSH, FTP, and HTTP."
  },
  {
    id: "kl-m-4",
    topic: "Kali Linux & Tools",
    difficulty: "Medium",
    type: "Solving",
    question: "What is the Nmap command to scan the top 100 most common ports of 192.168.1.1?",
    answer: "nmap --top-ports 100 192.168.1.1",
    explanation: "The --top-ports flag limits the scan to the most common ports."
  },
  {
    id: "kl-m-5",
    topic: "Kali Linux & Tools",
    difficulty: "Medium",
    type: "Identification",
    question: "What tool is used for information gathering and data mining via open-source intelligence (OSINT)?",
    answer: "Maltego",
    explanation: "Maltego visualizes relationships between people, companies, and websites."
  },
  {
    id: "kl-m-6",
    topic: "Kali Linux & Tools",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which Kali tool is a 'Swiss Army Knife' for networking, used for reading and writing data across connections?",
    options: ["Netcat", "Nmap", "Hydra", "Nikto"],
    answer: "Netcat",
    explanation: "Netcat (nc) can be used for port scanning, file transfers, and backdoors."
  },
  {
    id: "kl-m-7",
    topic: "Kali Linux & Tools",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the tool used for attacking web browsers via the Browser Exploitation Framework?",
    answer: "BeEF",
    explanation: "BeEF hooks browsers to perform client-side attacks."
  },
  {
    id: "kl-m-8",
    topic: "Kali Linux & Tools",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which Nmap scan type is known as a 'Half-Open' scan because it never completes the TCP handshake?",
    options: ["-sT", "-sU", "-sS", "-sA"],
    answer: "-sS",
    explanation: "The -sS (SYN scan) is stealthier than a full connect scan (-sT)."
  },
  {
    id: "kl-m-9",
    topic: "Kali Linux & Tools",
    difficulty: "Medium",
    type: "Solving",
    question: "Write the command to list all running processes in Linux.",
    answer: "ps aux",
    explanation: "ps aux (or top) shows current system processes."
  },
  {
    id: "kl-m-10",
    topic: "Kali Linux & Tools",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the tool used for automated web server vulnerability scanning?",
    answer: "Nikto",
    explanation: "Nikto checks for dangerous files, outdated software, and other problems."
  },

  // KALI LINUX & TOOLS - DIFFICULT
  {
    id: "kl-d-1",
    topic: "Kali Linux & Tools",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "In Metasploit, what is the difference between a 'Staged' and a 'Non-Staged' payload?",
    options: ["Staged is faster", "Non-staged is sent in one piece", "Staged is more stealthy", "There is no difference"],
    answer: "Non-staged is sent in one piece",
    explanation: "Staged payloads send a small 'stager' first, which then downloads the rest of the payload."
  },
  {
    id: "kl-d-2",
    topic: "Kali Linux & Tools",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for a rogue Wi-Fi access point that appears to be a legitimate one to trick users into connecting?",
    answer: "Evil Twin",
    explanation: "Evil Twin attacks are used to steal credentials or perform MitM."
  },
  {
    id: "kl-d-3",
    topic: "Kali Linux & Tools",
    difficulty: "Difficult",
    type: "Solving",
    question: "What is the Nmap command to perform an OS detection, version detection, script scanning, and traceroute all at once?",
    answer: "nmap -A",
    explanation: "The -A flag enables aggressive scanning options."
  },
  {
    id: "kl-d-4",
    topic: "Kali Linux & Tools",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which tool is used for advanced password cracking using the power of GPUs?",
    options: ["John", "Hydra", "Hashcat", "Medusa"],
    answer: "Hashcat",
    explanation: "Hashcat is the world's fastest password cracker."
  },
  {
    id: "kl-d-5",
    topic: "Kali Linux & Tools",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the tool used for performing Man-in-the-Middle attacks on local networks via ARP poisoning?",
    answer: "Ettercap",
    explanation: "Ettercap (or Bettercap) is used for sniffing and MitM."
  },
  {
    id: "kl-d-6",
    topic: "Kali Linux & Tools",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "In Burp Suite, which tool is used to automate customized attacks against web applications, such as brute forcing parameters?",
    options: ["Repeater", "Intruder", "Decoder", "Comparer"],
    answer: "Intruder",
    explanation: "Intruder is highly configurable for fuzzing and brute forcing."
  },
  {
    id: "kl-d-7",
    topic: "Kali Linux & Tools",
    difficulty: "Difficult",
    type: "Solving",
    question: "What is the command to change the MAC address of the 'eth0' interface to '00:11:22:33:44:55' using macchanger?",
    answer: "macchanger -m 00:11:22:33:44:55 eth0",
    explanation: "The -m flag specifies the new MAC address."
  },
  {
    id: "kl-d-8",
    topic: "Kali Linux & Tools",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the open-source vulnerability scanner that was branched from Nessus?",
    answer: "OpenVAS",
    explanation: "OpenVAS is now part of Greenbone Vulnerability Management."
  },
  {
    id: "kl-d-9",
    topic: "Kali Linux & Tools",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which Metasploit module type is used to perform actions like port scanning or service identification without exploiting a vulnerability?",
    options: ["Exploit", "Payload", "Auxiliary", "Post"],
    answer: "Auxiliary",
    explanation: "Auxiliary modules are for scanning, fuzzing, and DoS."
  },
  {
    id: "kl-d-10",
    topic: "Kali Linux & Tools",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the tool used for digital forensics and disk image analysis in Kali?",
    answer: "Autopsy",
    explanation: "Autopsy (and Sleuth Kit) is used for investigating hard drives and smartphones."
  },

  // WEB & SOFTWARE DEVELOPMENT - EASY
  {
    id: "ws-e-1",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HighTech Modern Language", "Hyperlink Text Management", "Home Tool Markup Language"],
    answer: "HyperText Markup Language",
    explanation: "HTML is the standard markup language for creating web pages."
  },
  {
    id: "ws-e-2",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Identification",
    question: "Which language is used to style web pages?",
    answer: "CSS",
    explanation: "Cascading Style Sheets (CSS) describe how HTML elements are to be displayed."
  },
  {
    id: "ws-e-3",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of the following is a programming language used for client-side web behavior?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: "JavaScript",
    explanation: "JavaScript allows for interactive and dynamic content on websites."
  },
  {
    id: "ws-e-4",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Identification",
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    explanation: "SQL is used for managing and manipulating relational databases."
  },
  {
    id: "ws-e-5",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the purpose of an Operating System (OS)?",
    options: ["To browse the web", "To manage hardware and software resources", "To create documents", "To edit photos"],
    answer: "To manage hardware and software resources",
    explanation: "The OS acts as an intermediary between users and the computer hardware."
  },
  {
    id: "ws-e-6",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for software whose source code is freely available for anyone to inspect, modify, and enhance?",
    answer: "Open Source",
    explanation: "Examples include Linux, Firefox, and Android."
  },
  {
    id: "ws-e-7",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of these is a database management system?",
    options: ["Photoshop", "MySQL", "Excel", "Visual Studio"],
    answer: "MySQL",
    explanation: "MySQL is a popular open-source relational database."
  },
  {
    id: "ws-e-8",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for a software application that provides comprehensive facilities to computer programmers for software development?",
    answer: "IDE",
    explanation: "Integrated Development Environment (IDE) examples include VS Code and IntelliJ."
  },
  {
    id: "ws-e-9",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What does URL stand for?",
    options: ["Universal Resource Locator", "Uniform Resource Locator", "United Resource Link", "User Response Link"],
    answer: "Uniform Resource Locator",
    explanation: "A URL is the address of a unique resource on the web."
  },
  {
    id: "ws-e-10",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for the process of finding and fixing errors in software code?",
    answer: "Debugging",
    explanation: "Debugging is a critical part of the development lifecycle."
  },

  // WEB & SOFTWARE DEVELOPMENT - MEDIUM
  {
    id: "ws-m-1",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is the difference between a Compiler and an Interpreter?",
    options: ["Compiler is faster", "Interpreter translates line-by-line", "Compiler is only for C++", "Interpreter is only for Python"],
    answer: "Interpreter translates line-by-line",
    explanation: "Compilers translate the whole program at once; interpreters do it on the fly."
  },
  {
    id: "ws-m-2",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for the set of rules that defines how a user interacts with a computer system through graphical icons and visual indicators?",
    answer: "GUI",
    explanation: "Graphical User Interface (GUI) replaced text-based command lines for most users."
  },
  {
    id: "ws-m-3",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which HTTP status code indicates that a resource was not found?",
    options: ["200", "301", "404", "500"],
    answer: "404",
    explanation: "404 Not Found is the standard error code for missing pages."
  },
  {
    id: "ws-m-4",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Solving",
    question: "In a database, if a table has 5 columns and 100 rows, how many total data cells are there?",
    answer: "500",
    explanation: "5 * 100 = 500."
  },
  {
    id: "ws-m-5",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate?",
    answer: "JSON",
    explanation: "JavaScript Object Notation (JSON) is widely used in APIs."
  },
  {
    id: "ws-m-6",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What does the 'CRUD' acronym stand for in database operations?",
    options: ["Create, Read, Update, Delete", "Copy, Run, Undo, Done", "Create, Restore, Use, Deploy", "Cancel, Retry, Update, Discard"],
    answer: "Create, Read, Update, Delete",
    explanation: "These are the four basic functions of persistent storage."
  },
  {
    id: "ws-m-7",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for a self-contained unit of code that performs a specific task and can be reused?",
    answer: "Function",
    explanation: "Functions (or methods) help organize and modularize code."
  },
  {
    id: "ws-m-8",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which of the following is a version control system?",
    options: ["Docker", "Git", "Kubernetes", "Jenkins"],
    answer: "Git",
    explanation: "Git is the most widely used distributed version control system."
  },
  {
    id: "ws-m-9",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Solving",
    question: "If an algorithm has a time complexity of O(n) and n=1000, roughly how many operations will it perform?",
    answer: "1000",
    explanation: "Linear time complexity means operations scale directly with n."
  },
  {
    id: "ws-m-10",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for the legal agreement between a software producer and a user?",
    answer: "EULA",
    explanation: "End-User License Agreement (EULA) specifies the terms of use."
  },

  // WEB & SOFTWARE DEVELOPMENT - DIFFICULT
  {
    id: "ws-d-1",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the 'DOM' in web development?",
    options: ["A type of server", "A programming language", "A programming interface for web documents", "A database model"],
    answer: "A programming interface for web documents",
    explanation: "The Document Object Model (DOM) represents the page so that programs can change the document structure, style, and content."
  },
  {
    id: "ws-d-2",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the architectural style for providing standards between computer systems on the web, typically using HTTP and JSON?",
    answer: "REST",
    explanation: "Representational State Transfer (REST) is the standard for modern web APIs."
  },
  {
    id: "ws-d-3",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Solving",
    question: "In a relational database, if you have a 'Users' table and a 'Posts' table, what type of relationship usually exists between them?",
    answer: "One-to-Many",
    explanation: "One user can have many posts."
  },
  {
    id: "ws-d-4",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is a 'Closure' in JavaScript?",
    options: ["Closing a browser tab", "A function that has access to its outer scope", "Ending a loop", "A private variable"],
    answer: "A function that has access to its outer scope",
    explanation: "Closures allow functions to 'remember' the environment in which they were created."
  },
  {
    id: "ws-d-5",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for a software design pattern where a class has only one instance and provides a global point of access to it?",
    answer: "Singleton",
    explanation: "The Singleton pattern is used for things like database connections or loggers."
  },
  {
    id: "ws-d-6",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which of the following is a CSS preprocessor?",
    options: ["React", "Sass", "Vue", "Angular"],
    answer: "Sass",
    explanation: "Sass (Syntactically Awesome Style Sheets) adds features like variables and nesting to CSS."
  },
  {
    id: "ws-d-7",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Solving",
    question: "What is the result of the JavaScript expression: '5' + 3?",
    answer: "53",
    explanation: "JavaScript performs string concatenation when one operand is a string."
  },
  {
    id: "ws-d-8",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for the practice of merging all developers' working copies to a shared mainline several times a day?",
    answer: "Continuous Integration",
    explanation: "CI helps catch bugs early by frequently integrating code."
  },
  {
    id: "ws-d-9",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the purpose of a 'Web Worker' in JavaScript?",
    options: ["To style the page", "To run scripts in background threads", "To connect to a database", "To handle user clicks"],
    answer: "To run scripts in background threads",
    explanation: "Web Workers allow for heavy computation without blocking the main UI thread."
  },
  {
    id: "ws-d-10",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for a security mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served?",
    answer: "CORS",
    explanation: "Cross-Origin Resource Sharing (CORS) is a browser security feature."
  },

  // CLOUD & ENTERPRISE - EASY
  {
    id: "ce-e-1",
    topic: "Cloud & Enterprise",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What does 'Cloud Computing' primarily mean?",
    options: ["Storing data on your hard drive", "Using the internet to access remote servers", "Using a computer in an airplane", "Weather forecasting"],
    answer: "Using the internet to access remote servers",
    explanation: "Cloud computing provides on-demand IT resources over the internet."
  },
  {
    id: "ce-e-2",
    topic: "Cloud & Enterprise",
    difficulty: "Easy",
    type: "Identification",
    question: "What does SaaS stand for?",
    answer: "Software as a Service",
    explanation: "SaaS examples include Google Workspace, Salesforce, and Slack."
  },
  {
    id: "ce-e-3",
    topic: "Cloud & Enterprise",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of the following is a major cloud service provider?",
    options: ["Adobe", "AWS", "Nvidia", "Intel"],
    answer: "AWS",
    explanation: "Amazon Web Services (AWS) is the leading cloud platform."
  },
  {
    id: "ce-e-4",
    topic: "Cloud & Enterprise",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for a virtualized computer environment that acts like a physical computer?",
    answer: "Virtual Machine",
    explanation: "VMs allow multiple operating systems to run on a single physical server."
  },
  {
    id: "ce-e-5",
    topic: "Cloud & Enterprise",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the main benefit of cloud scalability?",
    options: ["Cheaper hardware", "Ability to increase or decrease resources as needed", "Better graphics", "Faster internet"],
    answer: "Ability to increase or decrease resources as needed",
    explanation: "Scalability allows businesses to handle traffic spikes without over-provisioning."
  },
  {
    id: "ce-e-6",
    topic: "Cloud & Enterprise",
    difficulty: "Easy",
    type: "Identification",
    question: "What does CRM stand for in a business context?",
    answer: "Customer Relationship Management",
    explanation: "CRM systems help manage interactions with current and potential customers."
  },
  {
    id: "ce-e-7",
    topic: "Cloud & Enterprise",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which cloud model is used by a single organization?",
    options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    answer: "Private Cloud",
    explanation: "Private clouds offer more control and security for sensitive data."
  },
  {
    id: "ce-e-8",
    topic: "Cloud & Enterprise",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for a contract between a service provider and a customer that defines the level of service expected?",
    answer: "SLA",
    explanation: "Service Level Agreement (SLA) often includes uptime guarantees."
  },
  {
    id: "ce-e-9",
    topic: "Cloud & Enterprise",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is 'Google Drive' an example of?",
    options: ["IaaS", "PaaS", "SaaS", "BaaS"],
    answer: "SaaS",
    explanation: "It's a software application delivered over the web."
  },
  {
    id: "ce-e-10",
    topic: "Cloud & Enterprise",
    difficulty: "Easy",
    type: "Identification",
    question: "What does ERP stand for?",
    answer: "Enterprise Resource Planning",
    explanation: "ERP software integrates core business processes like finance, HR, and supply chain."
  },

  // CLOUD & ENTERPRISE - MEDIUM
  {
    id: "ce-m-1",
    topic: "Cloud & Enterprise",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is the difference between IaaS and PaaS?",
    options: ["IaaS is only for storage", "PaaS provides a platform for developers to build apps", "IaaS is cheaper", "PaaS is only for databases"],
    answer: "PaaS provides a platform for developers to build apps",
    explanation: "IaaS provides raw infrastructure (VMs, networking); PaaS adds development tools and middleware."
  },
  {
    id: "ce-m-2",
    topic: "Cloud & Enterprise",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for a cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources?",
    answer: "Serverless",
    explanation: "Serverless (like AWS Lambda) allows developers to run code without managing servers."
  },
  {
    id: "ce-m-3",
    topic: "Cloud & Enterprise",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which of the following is a containerization platform?",
    options: ["Kubernetes", "Docker", "VMware", "OpenStack"],
    answer: "Docker",
    explanation: "Docker packages applications into containers for consistent deployment."
  },
  {
    id: "ce-m-4",
    topic: "Cloud & Enterprise",
    difficulty: "Medium",
    type: "Solving",
    question: "If a cloud provider guarantees 99.9% uptime, how many hours of downtime are allowed per year (approx)?",
    answer: "8.76",
    explanation: "0.001 * 365 * 24 = 8.76 hours."
  },
  {
    id: "ce-m-5",
    topic: "Cloud & Enterprise",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for a private, isolated section of a public cloud where you can launch resources in a virtual network?",
    answer: "VPC",
    explanation: "Virtual Private Cloud (VPC) provides network isolation within a public cloud."
  },
  {
    id: "ce-m-6",
    topic: "Cloud & Enterprise",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is 'Hybrid Cloud'?",
    options: ["Using two different PCs", "A mix of public and private cloud", "Using cloud and local storage", "A cloud that uses solar power"],
    answer: "A mix of public and private cloud",
    explanation: "Hybrid clouds allow data and apps to be shared between them."
  },
  {
    id: "ce-m-7",
    topic: "Cloud & Enterprise",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the technology that allows multiple virtual desktops to be hosted on a centralized server?",
    answer: "VDI",
    explanation: "Virtual Desktop Infrastructure (VDI) allows users to access their desktop from any device."
  },
  {
    id: "ce-m-8",
    topic: "Cloud & Enterprise",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which of the following is a cloud-native database?",
    options: ["Oracle DB", "Amazon Aurora", "Microsoft Access", "SQLite"],
    answer: "Amazon Aurora",
    explanation: "Aurora is built specifically for the cloud to be highly available and scalable."
  },
  {
    id: "ce-m-9",
    topic: "Cloud & Enterprise",
    difficulty: "Medium",
    type: "Solving",
    question: "If a company moves from on-premise (CapEx) to cloud (OpEx), what does 'OpEx' stand for?",
    answer: "Operational Expenditure",
    explanation: "Cloud is a pay-as-you-go operational expense."
  },
  {
    id: "ce-m-10",
    topic: "Cloud & Enterprise",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for the process of moving data, applications, or other business elements to a cloud computing environment?",
    answer: "Cloud Migration",
    explanation: "Migration can be 'lift-and-shift' or involve re-architecting."
  },

  // CLOUD & ENTERPRISE - DIFFICULT
  {
    id: "ce-d-1",
    topic: "Cloud & Enterprise",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is 'Edge Computing'?",
    options: ["Computing at the center of the cloud", "Processing data near the source of data generation", "Using the edge of a hard drive", "A new type of browser"],
    answer: "Processing data near the source of data generation",
    explanation: "Edge computing reduces latency by processing data closer to IoT devices or users."
  },
  {
    id: "ce-d-2",
    topic: "Cloud & Enterprise",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the open-source system for automating deployment, scaling, and management of containerized applications?",
    answer: "Kubernetes",
    explanation: "Kubernetes (K8s) is the industry standard for container orchestration."
  },
  {
    id: "ce-d-3",
    topic: "Cloud & Enterprise",
    difficulty: "Difficult",
    type: "Solving",
    question: "In cloud pricing, if a reserved instance costs $100/month and an on-demand instance costs $0.20/hour, how many hours must you use the instance per month for the reserved one to be cheaper?",
    answer: "500",
    explanation: "100 / 0.20 = 500 hours."
  },
  {
    id: "ce-d-4",
    topic: "Cloud & Enterprise",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the 'Shared Responsibility Model' in cloud security?",
    options: ["The provider is responsible for everything", "The customer is responsible for everything", "Provider secures the cloud, customer secures data in the cloud", "Everyone shares the same password"],
    answer: "Provider secures the cloud, customer secures data in the cloud",
    explanation: "Security is a partnership between the provider and the user."
  },
  {
    id: "ce-d-5",
    topic: "Cloud & Enterprise",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for the practice of using multiple cloud computing services from different providers in a single heterogeneous architecture?",
    answer: "Multi-Cloud",
    explanation: "Multi-cloud prevents vendor lock-in and improves reliability."
  },
  {
    id: "ce-d-6",
    topic: "Cloud & Enterprise",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is 'Infrastructure as Code' (IaC)?",
    options: ["Writing code on a server", "Managing infrastructure through machine-readable definition files", "A new programming language", "Building a PC manually"],
    answer: "Managing infrastructure through machine-readable definition files",
    explanation: "IaC (like Terraform or CloudFormation) allows for automated and consistent environment setup."
  },
  {
    id: "ce-d-7",
    topic: "Cloud & Enterprise",
    difficulty: "Difficult",
    type: "Solving",
    question: "If a system has 'Five Nines' availability, what is the maximum allowed downtime per year?",
    answer: "5.26 minutes",
    explanation: "99.999% uptime allows only ~5.26 minutes of downtime."
  },
  {
    id: "ce-d-8",
    topic: "Cloud & Enterprise",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for a software architecture where an application is composed of small, independent services that communicate over a network?",
    answer: "Microservices",
    explanation: "Microservices improve scalability and allow for independent deployment of components."
  },
  {
    id: "ce-d-9",
    topic: "Cloud & Enterprise",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the purpose of a 'Content Delivery Network' (CDN)?",
    options: ["To create content", "To deliver content to users with high availability and high performance", "To backup the website", "To host the database"],
    answer: "To deliver content to users with high availability and high performance",
    explanation: "CDNs cache content in multiple locations globally to reduce latency."
  },
  {
    id: "ce-d-10",
    topic: "Cloud & Enterprise",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for the phenomenon where a cloud customer becomes dependent on a single provider and cannot easily move to another?",
    answer: "Vendor Lock-in",
    explanation: "Using proprietary services can make migration difficult and expensive."
  },

  // EMERGING TECHNOLOGIES - EASY
  {
    id: "et-e-1",
    topic: "Emerging Technologies",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What does AI stand for?",
    options: ["Actual Intelligence", "Artificial Intelligence", "Automated Information", "Advanced Integration"],
    answer: "Artificial Intelligence",
    explanation: "AI is the simulation of human intelligence by machines."
  },
  {
    id: "et-e-2",
    topic: "Emerging Technologies",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for the network of physical objects embedded with sensors and software to connect and exchange data?",
    answer: "IoT",
    explanation: "Internet of Things (IoT) includes smart home devices, industrial sensors, etc."
  },
  {
    id: "et-e-3",
    topic: "Emerging Technologies",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which technology uses a decentralized, distributed ledger to record transactions?",
    options: ["Cloud", "Blockchain", "AI", "VR"],
    answer: "Blockchain",
    explanation: "Blockchain is the underlying technology for cryptocurrencies."
  },
  {
    id: "et-e-4",
    topic: "Emerging Technologies",
    difficulty: "Easy",
    type: "Identification",
    question: "What does VR stand for?",
    answer: "Virtual Reality",
    explanation: "VR creates a fully immersive digital environment."
  },
  {
    id: "et-e-5",
    topic: "Emerging Technologies",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is 'Machine Learning'?",
    options: ["Building a physical robot", "A subset of AI that allows systems to learn from data", "A new type of engine", "A way to fix computers"],
    answer: "A subset of AI that allows systems to learn from data",
    explanation: "ML uses algorithms to find patterns in data and make predictions."
  },
  {
    id: "et-e-6",
    topic: "Emerging Technologies",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for a digital version of a physical object, process, or service?",
    answer: "Digital Twin",
    explanation: "Digital twins are used for simulation and monitoring."
  },
  {
    id: "et-e-7",
    topic: "Emerging Technologies",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of these is a popular AI chatbot?",
    options: ["Photoshop", "ChatGPT", "Excel", "Windows"],
    answer: "ChatGPT",
    explanation: "ChatGPT is a large language model developed by OpenAI."
  },
  {
    id: "et-e-8",
    topic: "Emerging Technologies",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for the technology that overlays digital information onto the real world?",
    answer: "Augmented Reality",
    explanation: "AR examples include Pokemon Go and IKEA Place."
  },
  {
    id: "et-e-9",
    topic: "Emerging Technologies",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the 'Metaverse' generally described as?",
    options: ["A new social media app", "A collective virtual shared space", "A type of crypto", "A faster internet"],
    answer: "A collective virtual shared space",
    explanation: "The metaverse combines VR, AR, and the internet."
  },
  {
    id: "et-e-10",
    topic: "Emerging Technologies",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 5G stand for?",
    answer: "Fifth Generation",
    explanation: "5G is the latest standard for mobile networks, offering higher speeds and lower latency."
  },

  // EMERGING TECHNOLOGIES - MEDIUM
  {
    id: "et-m-1",
    topic: "Emerging Technologies",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is a 'Large Language Model' (LLM)?",
    options: ["A very big dictionary", "An AI trained on massive amounts of text to generate human-like responses", "A new programming language", "A type of database"],
    answer: "An AI trained on massive amounts of text to generate human-like responses",
    explanation: "LLMs like GPT-4 can write code, essays, and hold conversations."
  },
  {
    id: "et-m-2",
    topic: "Emerging Technologies",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for a self-executing contract with the terms directly written into code on a blockchain?",
    answer: "Smart Contract",
    explanation: "Smart contracts automate transactions without intermediaries."
  },
  {
    id: "et-m-3",
    topic: "Emerging Technologies",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is 'Deep Learning'?",
    options: ["Studying very hard", "A subset of ML based on artificial neural networks", "A way to store data deep in the ocean", "A new search engine"],
    answer: "A subset of ML based on artificial neural networks",
    explanation: "Deep learning is inspired by the structure of the human brain."
  },
  {
    id: "et-m-4",
    topic: "Emerging Technologies",
    difficulty: "Medium",
    type: "Solving",
    question: "If an AI model has 175 billion parameters, how many Gigabytes of memory would it take to store if each parameter is a 16-bit float? (approx)",
    answer: "350",
    explanation: "175B * 2 bytes = 350 GB."
  },
  {
    id: "et-m-5",
    topic: "Emerging Technologies",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for the technology that uses light instead of radio waves to transmit data?",
    answer: "Li-Fi",
    explanation: "Li-Fi (Light Fidelity) can potentially offer much higher speeds than Wi-Fi."
  },
  {
    id: "et-m-6",
    topic: "Emerging Technologies",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is a 'Non-Fungible Token' (NFT)?",
    options: ["A type of digital currency", "A unique digital asset representing ownership of an item", "A new file format", "A secure password"],
    answer: "A unique digital asset representing ownership of an item",
    explanation: "NFTs are stored on a blockchain and cannot be replicated."
  },
  {
    id: "et-m-7",
    topic: "Emerging Technologies",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the field of AI that focuses on enabling computers to understand and interpret visual information from the world?",
    answer: "Computer Vision",
    explanation: "Computer vision is used in self-driving cars and facial recognition."
  },
  {
    id: "et-m-8",
    topic: "Emerging Technologies",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is 'Quantum Supremacy'?",
    options: ["A very fast computer", "The point where a quantum computer can solve a problem that a classical computer cannot", "A new type of internet", "Total control over data"],
    answer: "The point where a quantum computer can solve a problem that a classical computer cannot",
    explanation: "It's a milestone in quantum computing development."
  },
  {
    id: "et-m-9",
    topic: "Emerging Technologies",
    difficulty: "Medium",
    type: "Solving",
    question: "In a blockchain, if each block has a 256-bit hash, how many hex characters are in the hash string?",
    answer: "64",
    explanation: "256 bits / 4 bits per hex char = 64 characters."
  },
  {
    id: "et-m-10",
    topic: "Emerging Technologies",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for the integration of technology into the human body to enhance or restore functions?",
    answer: "Bio-hacking",
    explanation: "Examples include RFID implants and neural interfaces."
  },

  // EMERGING TECHNOLOGIES - DIFFICULT
  {
    id: "et-d-1",
    topic: "Emerging Technologies",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is a 'Generative Adversarial Network' (GAN)?",
    options: ["A network that blocks ads", "Two neural networks competing to generate realistic data", "A way to speed up the internet", "A type of blockchain"],
    answer: "Two neural networks competing to generate realistic data",
    explanation: "GANs consist of a Generator and a Discriminator; they are used for deepfakes and image generation."
  },
  {
    id: "et-d-2",
    topic: "Emerging Technologies",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the basic unit of information in quantum computing?",
    answer: "Qubit",
    explanation: "Qubits can exist in a superposition of states (0 and 1 simultaneously)."
  },
  {
    id: "et-d-3",
    topic: "Emerging Technologies",
    difficulty: "Difficult",
    type: "Solving",
    question: "If a quantum computer has 50 qubits, how many states can it represent simultaneously?",
    answer: "1,125,899,906,842,624",
    explanation: "2^50 states."
  },
  {
    id: "et-d-4",
    topic: "Emerging Technologies",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is 'Natural Language Processing' (NLP)?",
    options: ["Speaking clearly", "The ability of a computer to understand human language as it is spoken and written", "A new way to code", "A type of database"],
    answer: "The ability of a computer to understand human language as it is spoken and written",
    explanation: "NLP is used in translation, sentiment analysis, and chatbots."
  },
  {
    id: "et-d-5",
    topic: "Emerging Technologies",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for the hypothetical point in time at which technological growth becomes uncontrollable and irreversible, resulting in unfathomable changes to human civilization?",
    answer: "Singularity",
    explanation: "The technological singularity is often associated with the advent of superintelligent AI."
  },
  {
    id: "et-d-6",
    topic: "Emerging Technologies",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the 'Byzantine Generals Problem' in distributed systems?",
    options: ["A history lesson", "The challenge of reaching consensus in a network with potentially malicious nodes", "A way to encrypt data", "A network failure"],
    answer: "The challenge of reaching consensus in a network with potentially malicious nodes",
    explanation: "Blockchain solves this through consensus algorithms like Proof of Work."
  },
  {
    id: "et-d-7",
    topic: "Emerging Technologies",
    difficulty: "Difficult",
    type: "Solving",
    question: "In a Proof of Work system, if the difficulty requires a hash to start with 10 zeros, what is the probability of a random hash meeting this criteria? (approx)",
    answer: "1 in 1,099,511,627,776",
    explanation: "1 in 16^10 (since hex is base 16)."
  },
  {
    id: "et-d-8",
    topic: "Emerging Technologies",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for an AI system that can perform any intellectual task that a human can?",
    answer: "AGI",
    explanation: "Artificial General Intelligence (AGI) is the ultimate goal of many AI researchers."
  },
  {
    id: "et-d-9",
    topic: "Emerging Technologies",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is 'Neuromorphic Computing'?",
    options: ["Computing with nerves", "Hardware designed to mimic the neural structure of the human brain", "A new type of VR", "A way to fix computers"],
    answer: "Hardware designed to mimic the neural structure of the human brain",
    explanation: "Neuromorphic chips are highly efficient for AI tasks."
  },
  {
    id: "et-d-10",
    topic: "Emerging Technologies",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for the practice of using AI to generate realistic but fake audio or video of a person?",
    answer: "Deepfake",
    explanation: "Deepfakes use GANs to swap faces or synthesize voices."
  },

  // ACRONYMS MASTER LIST - EASY
  {
    id: "ac-e-1",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does CPU stand for?",
    answer: "Central Processing Unit"
  },
  {
    id: "ac-e-2",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What does RAM stand for?",
    options: ["Read Access Memory", "Random Access Memory", "Real Access Memory", "Rapid Access Memory"],
    answer: "Random Access Memory"
  },
  {
    id: "ac-e-3",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language"
  },
  {
    id: "ac-e-4",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What does USB stand for?",
    options: ["Universal Serial Bus", "United Serial Bus", "Universal System Bus", "User Serial Bus"],
    answer: "Universal Serial Bus"
  },
  {
    id: "ac-e-5",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does Wi-Fi stand for?",
    answer: "Wireless Fidelity"
  },
  {
    id: "ac-e-6",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What does IP stand for?",
    options: ["Internal Protocol", "Internet Protocol", "Inter-Process", "Instant Packet"],
    answer: "Internet Protocol"
  },
  {
    id: "ac-e-7",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does DNS stand for?",
    answer: "Domain Name System"
  },
  {
    id: "ac-e-8",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What does OS stand for?",
    options: ["Open System", "Operating System", "Optical System", "Output System"],
    answer: "Operating System"
  },
  {
    id: "ac-e-9",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does URL stand for?",
    answer: "Uniform Resource Locator"
  },
  {
    id: "ac-e-10",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What does PDF stand for?",
    options: ["Portable Document Format", "Personal Document File", "Printable Document Format", "Portable Data File"],
    answer: "Portable Document Format"
  },

  // ACRONYMS MASTER LIST - MEDIUM
  {
    id: "ac-m-1",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does BIOS stand for?",
    answer: "Basic Input/Output System"
  },
  {
    id: "ac-m-2",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What does RAID stand for?",
    options: ["Redundant Array of Independent Disks", "Rapid Array of Inexpensive Drives", "Redundant Access to Internal Data", "Real-time Array of Independent Disks"],
    answer: "Redundant Array of Independent Disks"
  },
  {
    id: "ac-m-3",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does HTTP stand for?",
    answer: "HyperText Transfer Protocol"
  },
  {
    id: "ac-m-4",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What does DHCP stand for?",
    options: ["Dynamic Host Configuration Protocol", "Digital Host Connection Protocol", "Data Handling Control Protocol", "Direct Host Communication Protocol"],
    answer: "Dynamic Host Configuration Protocol"
  },
  {
    id: "ac-m-5",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does ICMP stand for?",
    answer: "Internet Control Message Protocol"
  },
  {
    id: "ac-m-6",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What does SaaS stand for?",
    options: ["Software as a Service", "System as a Service", "Storage as a Service", "Security as a Service"],
    answer: "Software as a Service"
  },
  {
    id: "ac-m-7",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does SQL stand for?",
    answer: "Structured Query Language"
  },
  {
    id: "ac-m-8",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What does VPN stand for?",
    options: ["Virtual Private Network", "Virtual Public Network", "Verified Private Network", "Visual Private Network"],
    answer: "Virtual Private Network"
  },
  {
    id: "ac-m-9",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does ASCII stand for?",
    answer: "American Standard Code for Information Interchange"
  },
  {
    id: "ac-m-10",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What does CMOS stand for?",
    options: ["Complementary Metal-Oxide Semiconductor", "Central Memory Operating System", "Common Media Operating Standard", "Computer Management Operating System"],
    answer: "Complementary Metal-Oxide Semiconductor"
  },

  // ACRONYMS MASTER LIST - DIFFICULT
  {
    id: "ac-d-1",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does UEFI stand for?",
    answer: "Unified Extensible Firmware Interface"
  },
  {
    id: "ac-d-2",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What does CAPTCHA stand for?",
    options: ["Completely Automated Public Turing test to tell Computers and Humans Apart", "Computerized Automated Public Test for Checking Humans and Aliens", "Centralized Automated Protocol for Testing Computer and Human Authenticity", "Completely Automated Private Turing test for Checking Humans and Apps"],
    answer: "Completely Automated Public Turing test to tell Computers and Humans Apart"
  },
  {
    id: "ac-d-3",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does SDRAM stand for?",
    answer: "Synchronous Dynamic Random Access Memory"
  },
  {
    id: "ac-d-4",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What does BGP stand for?",
    options: ["Border Gateway Protocol", "Binary Gateway Protocol", "Basic Gateway Protocol", "Broadband Gateway Protocol"],
    answer: "Border Gateway Protocol"
  },
  {
    id: "ac-d-5",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does MQTT stand for?",
    answer: "Message Queuing Telemetry Transport"
  },
  {
    id: "ac-d-6",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What does SAML stand for?",
    options: ["Security Assertion Markup Language", "Secure Authentication Management Language", "Standard Authorization Markup Language", "System Authentication Markup Language"],
    answer: "Security Assertion Markup Language"
  },
  {
    id: "ac-d-7",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does LLM stand for in AI?",
    answer: "Large Language Model"
  },
  {
    id: "ac-d-8",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What does CI/CD stand for?",
    options: ["Continuous Integration/Continuous Deployment", "Computer Integration/Computer Deployment", "Cloud Integration/Cloud Deployment", "Continuous Interaction/Continuous Delivery"],
    answer: "Continuous Integration/Continuous Deployment"
  },
  {
    id: "ac-d-9",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does NPU stand for?",
    answer: "Neural Processing Unit"
  },
  {
    id: "ac-d-10",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What does VDI stand for?",
    options: ["Virtual Desktop Infrastructure", "Virtual Data Interface", "Visual Desktop Integration", "Virtual Device Infrastructure"],
    answer: "Virtual Desktop Infrastructure"
  },
  // Risk Management & Business Continuity - Easy
  {
    id: "risk-1",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the basic formula for calculating Risk?",
    options: ["Threat x Vulnerability", "Asset + Threat", "Impact / Likelihood", "Cost x Time"],
    answer: "Threat x Vulnerability",
    explanation: "Risk is generally defined as the product of a threat and a vulnerability."
  },
  {
    id: "risk-2",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which risk response involves stopping the risky activity entirely?",
    options: ["Avoidance", "Mitigation", "Transfer", "Acceptance"],
    answer: "Avoidance",
    explanation: "Risk avoidance means eliminating the risk by stopping the activity that causes it."
  },
  {
    id: "risk-3",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Buying cybersecurity insurance is an example of which risk response?",
    options: ["Transfer", "Avoidance", "Mitigation", "Acceptance"],
    answer: "Transfer",
    explanation: "Risk transfer involves shifting the financial burden of a risk to another party, such as an insurance company."
  },
  {
    id: "risk-4",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Identification",
    question: "What does BCP stand for?",
    answer: "Business Continuity Plan",
    explanation: "BCP is a plan to ensure that business operations can continue during and after a disaster."
  },
  {
    id: "risk-5",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Identification",
    question: "What does DRP stand for?",
    answer: "Disaster Recovery Plan",
    explanation: "DRP is a set of procedures for restoring IT systems and data after a disaster."
  },
  {
    id: "risk-6",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which type of risk assessment uses intuition and experience rather than hard numbers?",
    options: ["Qualitative", "Quantitative", "Statistical", "Financial"],
    answer: "Qualitative",
    explanation: "Qualitative risk assessment relies on subjective judgment and experience."
  },
  {
    id: "risk-7",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the first step in the Risk Management Lifecycle?",
    options: ["Asset Identification", "Risk Assessment", "Risk Mitigation", "Monitoring"],
    answer: "Asset Identification",
    explanation: "You must first identify what you are trying to protect before you can assess the risks to it."
  },
  {
    id: "risk-8",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for acknowledging a risk but doing nothing because the cost of fixing it is too high?",
    answer: "Risk Acceptance",
    explanation: "Risk acceptance is a conscious decision to live with a risk."
  },
  {
    id: "risk-9",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which plan focuses on how the business keeps making money during a disaster?",
    options: ["BCP", "DRP", "SLA", "VPC"],
    answer: "BCP",
    explanation: "The Business Continuity Plan focuses on maintaining operations during a crisis."
  },
  {
    id: "risk-10",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Installing a firewall to reduce the risk of a breach is an example of:",
    options: ["Mitigation", "Avoidance", "Transfer", "Acceptance"],
    answer: "Mitigation",
    explanation: "Mitigation involves taking steps to reduce the likelihood or impact of a risk."
  },
  // Risk Management & Business Continuity - Medium
  {
    id: "risk-11",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Solving",
    question: "If a server crash costs $50,000 (SLE) and happens twice a year (ARO), what is the ALE?",
    answer: "100000",
    explanation: "ALE = SLE x ARO. $50,000 x 2 = $100,000."
  },
  {
    id: "risk-12",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "In a Risk Matrix, if Likelihood is 4 and Impact is 5, what is the Risk Score?",
    options: ["20", "9", "1", "0.8"],
    answer: "20",
    explanation: "Risk Score = Likelihood x Impact. 4 x 5 = 20."
  },
  {
    id: "risk-13",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Identification",
    question: "What quantitative metric represents the expected yearly cost of a specific risk?",
    answer: "ALE",
    explanation: "ALE stands for Annualized Loss Expectancy."
  },
  {
    id: "risk-14",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which of the following is a 'Qualitative' risk assessment tool?",
    options: ["Risk Matrix", "ALE Formula", "Statistical Analysis", "Cost-Benefit Analysis"],
    answer: "Risk Matrix",
    explanation: "A Risk Matrix is a common tool for qualitative assessment, mapping likelihood against impact."
  },
  {
    id: "risk-15",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Identification",
    question: "What does SLE stand for in quantitative risk assessment?",
    answer: "Single Loss Expectancy",
    explanation: "SLE is the cost associated with a single occurrence of a risk event."
  },
  {
    id: "risk-16",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Outsourcing your server management to AWS to shift technical risks is an example of:",
    options: ["Risk Transfer", "Risk Avoidance", "Risk Mitigation", "Risk Acceptance"],
    answer: "Risk Transfer",
    explanation: "Outsourcing can transfer certain operational and technical risks to the service provider."
  },
  {
    id: "risk-17",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Solving",
    question: "A laptop theft costs $2,000. It is estimated to happen 5 times a year. Calculate the ALE.",
    answer: "10000",
    explanation: "ALE = $2,000 x 5 = $10,000."
  },
  {
    id: "risk-18",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which plan is more focused on the technical 'step-by-step' guide to fixing servers after a disaster?",
    options: ["DRP", "BCP", "SLA", "MFA"],
    answer: "DRP",
    explanation: "The Disaster Recovery Plan provides the technical procedures for restoration."
  },
  {
    id: "risk-19",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Identification",
    question: "What does ARO stand for?",
    answer: "Annual Rate of Occurrence",
    explanation: "ARO is the estimated frequency of a risk occurring within a year."
  },
  {
    id: "risk-20",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Disabling a legacy web portal because it is too vulnerable is an example of:",
    options: ["Risk Avoidance", "Risk Mitigation", "Risk Transfer", "Risk Acceptance"],
    answer: "Risk Avoidance",
    explanation: "By removing the portal, you avoid the risk associated with its vulnerabilities."
  },
  // Risk Management & Business Continuity - Difficult
  {
    id: "risk-21",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Solving",
    question: "If the SLE is $10,000 and the ALE is $5,000, what is the ARO?",
    answer: "0.5",
    explanation: "ARO = ALE / SLE. $5,000 / $10,000 = 0.5 (once every two years)."
  },
  {
    id: "risk-22",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which of the following best describes the relationship between BCP and DRP?",
    options: ["DRP is a subset of BCP", "BCP is a subset of DRP", "They are identical", "They are unrelated"],
    answer: "DRP is a subset of BCP",
    explanation: "BCP is the broader plan for business continuity, while DRP focuses specifically on IT restoration."
  },
  {
    id: "risk-23",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for the remaining risk after security controls have been applied?",
    answer: "Residual Risk",
    explanation: "Residual risk is what's left over after you've tried to mitigate, transfer, or avoid it."
  },
  {
    id: "risk-24",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "A company decides that a $500 potential loss is not worth a $2,000 security control. This is:",
    options: ["Risk Acceptance", "Risk Mitigation", "Risk Avoidance", "Risk Transfer"],
    answer: "Risk Acceptance",
    explanation: "When the cost of mitigation exceeds the potential loss, acceptance is often the logical choice."
  },
  {
    id: "risk-25",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Solving",
    question: "An asset is worth $100,000. An incident has an Exposure Factor of 20%. What is the SLE?",
    answer: "20000",
    explanation: "SLE = Asset Value x Exposure Factor. $100,000 x 0.20 = $20,000."
  },
  {
    id: "risk-26",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which risk response is most appropriate for a high-impact, low-likelihood event like a natural disaster?",
    options: ["Transfer", "Avoidance", "Mitigation", "Acceptance"],
    answer: "Transfer",
    explanation: "Insurance (Transfer) is often the best way to handle rare but catastrophic events."
  },
  {
    id: "risk-27",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Identification",
    question: "In BCP, what does MTD stand for?",
    answer: "Maximum Tolerable Downtime",
    explanation: "MTD is the maximum time a business process can be down before causing irreversible damage."
  },
  {
    id: "risk-28",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which document defines the roles and responsibilities during a crisis to ensure operations continue?",
    options: ["BCP", "DRP", "SLA", "AUP"],
    answer: "BCP",
    explanation: "BCP covers the organizational and operational aspects of continuity."
  },
  {
    id: "risk-29",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Solving",
    question: "If ALE is $12,000 and ARO is 3, what is the SLE?",
    answer: "4000",
    explanation: "SLE = ALE / ARO. $12,000 / 3 = $4,000."
  },
  {
    id: "risk-30",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for the process of identifying, analyzing, and evaluating risks?",
    answer: "Risk Assessment",
    explanation: "Risk assessment is the core analytical phase of risk management."
  },
  // Applied Cryptography - Easy
  {
    id: "crypto-1",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the original, readable message called before it is encrypted?",
    options: ["Plaintext", "Ciphertext", "Hash", "Key"],
    answer: "Plaintext",
    explanation: "Plaintext is the data in its original, human-readable form."
  },
  {
    id: "crypto-2",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the scrambled, unreadable output of an encryption process called?",
    options: ["Ciphertext", "Plaintext", "Digest", "Algorithm"],
    answer: "Ciphertext",
    explanation: "Ciphertext is the encrypted version of the plaintext."
  },
  {
    id: "crypto-3",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which type of encryption uses the same key for both encryption and decryption?",
    options: ["Symmetric", "Asymmetric", "Hashing", "Digital Signature"],
    answer: "Symmetric",
    explanation: "Symmetric encryption relies on a single shared secret key."
  },
  {
    id: "crypto-4",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which type of encryption uses a pair of keys (Public and Private)?",
    options: ["Asymmetric", "Symmetric", "Block Cipher", "Stream Cipher"],
    answer: "Asymmetric",
    explanation: "Asymmetric encryption (Public Key Cryptography) uses two mathematically related keys."
  },
  {
    id: "crypto-5",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the process of converting ciphertext back into plaintext?",
    answer: "Decryption",
    explanation: "Decryption is the reverse of encryption."
  },
  {
    id: "crypto-6",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of these is a primary goal of Hashing?",
    options: ["Integrity", "Confidentiality", "Availability", "Speed"],
    answer: "Integrity",
    explanation: "Hashing is used to verify that data has not been altered."
  },
  {
    id: "crypto-7",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Is Hashing a reversible process?",
    options: ["No, it is one-way", "Yes, using a key", "Yes, using the same algorithm", "Only for small files"],
    answer: "No, it is one-way",
    explanation: "Hashing is a one-way function; you cannot derive the original data from the hash value."
  },
  {
    id: "crypto-8",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for the secret value used by an algorithm to lock or unlock data?",
    answer: "Key",
    explanation: "The key is the variable component that makes the encryption unique."
  },
  {
    id: "crypto-9",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which encryption type is generally faster and better for bulk data?",
    options: ["Symmetric", "Asymmetric", "Hashing", "Steganography"],
    answer: "Symmetric",
    explanation: "Symmetric algorithms are computationally less intensive than asymmetric ones."
  },
  {
    id: "crypto-10",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Identification",
    question: "What does AES stand for?",
    answer: "Advanced Encryption Standard",
    explanation: "AES is the most widely used symmetric encryption algorithm today."
  },
  // Applied Cryptography - Medium
  {
    id: "crypto-11",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which problem does Asymmetric encryption solve that Symmetric encryption struggles with?",
    options: ["Key Distribution", "Processing Speed", "Algorithm Complexity", "Data Integrity"],
    answer: "Key Distribution",
    explanation: "Asymmetric encryption allows secure communication without needing to share a secret key beforehand."
  },
  {
    id: "crypto-12",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for proving exactly who sent a message, so they cannot deny it later?",
    answer: "Non-Repudiation",
    explanation: "Non-repudiation is often achieved through digital signatures."
  },
  {
    id: "crypto-13",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "In a digital signature, the sender encrypts the hash of the message with their:",
    options: ["Private Key", "Public Key", "Shared Key", "Session Key"],
    answer: "Private Key",
    explanation: "Encrypting with the private key ensures that only the owner of that key could have created the signature."
  },
  {
    id: "crypto-14",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "To verify a digital signature, the receiver uses the sender's:",
    options: ["Public Key", "Private Key", "Shared Key", "MAC Address"],
    answer: "Public Key",
    explanation: "The public key is used to decrypt the signature and verify the hash."
  },
  {
    id: "crypto-15",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Identification",
    question: "Which hashing algorithm is currently considered more secure than MD5?",
    answer: "SHA-256",
    explanation: "SHA-256 (part of SHA-2) is much more resistant to collisions than the older MD5."
  },
  {
    id: "crypto-16",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What happens to a hash value if even a single comma is changed in a 100-page document?",
    options: ["The entire hash changes completely", "Only one character in the hash changes", "The hash stays the same", "The hash becomes shorter"],
    answer: "The entire hash changes completely",
    explanation: "This is known as the 'avalanche effect' in hashing."
  },
  {
    id: "crypto-17",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Identification",
    question: "What does RSA stand for in cryptography?",
    answer: "Rivest-Shamir-Adleman",
    explanation: "RSA is one of the first and most famous asymmetric algorithms."
  },
  {
    id: "crypto-18",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which of these is an example of an Asymmetric algorithm?",
    options: ["ECC", "AES", "DES", "Blowfish"],
    answer: "ECC",
    explanation: "ECC (Elliptic Curve Cryptography) is a modern asymmetric algorithm."
  },
  {
    id: "crypto-19",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "HTTPS uses Asymmetric encryption for which part of the connection?",
    options: ["The Handshake", "The Data Transfer", "The Entire Session", "The DNS Lookup"],
    answer: "The Handshake",
    explanation: "Asymmetric encryption is used to securely exchange a symmetric session key."
  },
  {
    id: "crypto-20",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for a fixed-length string of characters produced by a hashing function?",
    answer: "Hash Value",
    explanation: "Also known as a message digest or fingerprint."
  },
  // Applied Cryptography - Difficult
  {
    id: "crypto-21",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which of the following is a 'collision' in hashing?",
    options: ["Two different inputs producing the same hash", "An input producing two different hashes", "A hash being reversed to plaintext", "A key being intercepted"],
    answer: "Two different inputs producing the same hash",
    explanation: "Collisions are a major security vulnerability in hashing algorithms."
  },
  {
    id: "crypto-22",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for adding random data to a password before hashing it to prevent rainbow table attacks?",
    answer: "Salting",
    explanation: "Salting ensures that identical passwords have different hash values."
  },
  {
    id: "crypto-23",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which asymmetric algorithm is based on the difficulty of factoring large prime numbers?",
    options: ["RSA", "ECC", "Diffie-Hellman", "AES"],
    answer: "RSA",
    explanation: "RSA's security relies on the mathematical challenge of prime factorization."
  },
  {
    id: "crypto-24",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which algorithm provides better security with smaller key sizes, making it ideal for mobile devices?",
    options: ["ECC", "RSA", "DES", "3DES"],
    answer: "ECC",
    explanation: "Elliptic Curve Cryptography is highly efficient compared to RSA."
  },
  {
    id: "crypto-25",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for the science of breaking cryptographic systems?",
    answer: "Cryptanalysis",
    explanation: "Cryptanalysis is the counterpart to cryptography (the science of making them)."
  },
  {
    id: "crypto-26",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "In the context of HTTPS, why do we switch from Asymmetric to Symmetric encryption after the handshake?",
    options: ["Symmetric is much faster for data transfer", "Symmetric is more secure", "Asymmetric keys expire quickly", "Symmetric keys are public"],
    answer: "Symmetric is much faster for data transfer",
    explanation: "Asymmetric encryption is too slow for large amounts of data."
  },
  {
    id: "crypto-27",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for a cryptographic system that uses both symmetric and asymmetric encryption?",
    answer: "Hybrid Cryptosystem",
    explanation: "HTTPS/TLS is a classic example of a hybrid cryptosystem."
  },
  {
    id: "crypto-28",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which of these is a 'Stream Cipher'?",
    options: ["RC4", "AES", "DES", "RSA"],
    answer: "RC4",
    explanation: "RC4 encrypts data one bit or byte at a time, unlike block ciphers."
  },
  {
    id: "crypto-29",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is 'Perfect Forward Secrecy' (PFS)?",
    options: ["Compromise of one key does not compromise past keys", "Encryption that cannot be broken by quantum computers", "A key that never expires", "A hash that cannot have collisions"],
    answer: "Compromise of one key does not compromise past keys",
    explanation: "PFS ensures that session keys are not derived from a single long-term private key."
  },
  {
    id: "crypto-30",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Identification",
    question: "Which organization established AES as the standard for encryption?",
    answer: "NIST",
    explanation: "The National Institute of Standards and Technology (NIST) selected the Rijndael algorithm as AES."
  },
  // Access Control & Network Defenses - Easy
  {
    id: "access-1",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which part of the AAA model involves verifying who a user is?",
    options: ["Authentication", "Authorization", "Accounting", "Access"],
    answer: "Authentication",
    explanation: "Authentication is the process of proving identity (e.g., passwords, biometrics)."
  },
  {
    id: "access-2",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which part of the AAA model determines what a user is allowed to do?",
    options: ["Authorization", "Authentication", "Accounting", "Auditing"],
    answer: "Authorization",
    explanation: "Authorization defines the permissions and rights of a user."
  },
  {
    id: "access-3",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which part of the AAA model involves tracking user activities?",
    options: ["Accounting", "Authentication", "Authorization", "Allocation"],
    answer: "Accounting",
    explanation: "Accounting (or Auditing) keeps logs of what users did on the system."
  },
  {
    id: "access-4",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "In which access control model does the owner of a file decide who gets access?",
    options: ["DAC", "MAC", "RBAC", "ABAC"],
    answer: "DAC",
    explanation: "DAC stands for Discretionary Access Control."
  },
  {
    id: "access-5",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which model assigns access based on a user's job role (e.g., 'Doctor' or 'Manager')?",
    options: ["RBAC", "DAC", "MAC", "Rule-BAC"],
    answer: "RBAC",
    explanation: "RBAC stands for Role-Based Access Control."
  },
  {
    id: "access-6",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which network defense acts as a 'digital security guard' at the border of a network?",
    options: ["Firewall", "VPN", "IDS", "Switch"],
    answer: "Firewall",
    explanation: "Firewalls inspect traffic and block unauthorized packets based on rules."
  },
  {
    id: "access-7",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What does VPN stand for?",
    options: ["Virtual Private Network", "Very Private Network", "Verified Public Network", "Virtual Protected Node"],
    answer: "Virtual Private Network",
    explanation: "A VPN creates a secure, encrypted tunnel over the internet."
  },
  {
    id: "access-8",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which system acts like a 'burglar alarm' by detecting and alerting on suspicious activity?",
    options: ["IDS", "IPS", "Firewall", "Proxy"],
    answer: "IDS",
    explanation: "IDS (Intrusion Detection System) monitors and alerts but does not stop attacks."
  },
  {
    id: "access-9",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which system acts like an 'automated guard dog' by actively stopping attacks in real-time?",
    options: ["IPS", "IDS", "Firewall", "VPN"],
    answer: "IPS",
    explanation: "IPS (Intrusion Prevention System) can actively block malicious traffic."
  },
  {
    id: "access-10",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for the rules used by a firewall to allow or deny traffic?",
    answer: "ACL",
    explanation: "ACL stands for Access Control List."
  },
  // Access Control & Network Defenses - Medium
  {
    id: "access-11",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which access control model is the most strict and often used in military settings?",
    options: ["MAC", "DAC", "RBAC", "ABAC"],
    answer: "MAC",
    explanation: "MAC (Mandatory Access Control) uses security labels and clearance levels."
  },
  {
    id: "access-12",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is the primary difference between IDS and IPS?",
    options: ["IPS can actively stop attacks, IDS only alerts", "IDS is hardware, IPS is software", "IDS is faster", "IPS is for internal networks only"],
    answer: "IPS can actively stop attacks, IDS only alerts",
    explanation: "IPS is proactive, while IDS is reactive."
  },
  {
    id: "access-13",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for a password, ID badge, or biometric used for authentication?",
    answer: "Authentication Factor",
    explanation: "These are categorized as 'something you know', 'something you have', or 'something you are'."
  },
  {
    id: "access-14",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which model is best for large businesses where employees frequently change positions?",
    options: ["RBAC", "DAC", "MAC", "Static-AC"],
    answer: "RBAC",
    explanation: "RBAC allows you to assign permissions to roles rather than individuals."
  },
  {
    id: "access-15",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "A firewall that keeps track of the state of active connections is called a:",
    options: ["Stateful Inspection Firewall", "Packet Filtering Firewall", "Proxy Firewall", "Next-Gen Firewall"],
    answer: "Stateful Inspection Firewall",
    explanation: "Stateful firewalls are more secure than simple packet filters."
  },
  {
    id: "access-16",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for a secure, encrypted 'tunnel' created by a VPN?",
    answer: "VPN Tunnel",
    explanation: "The tunnel protects data from being intercepted on the public internet."
  },
  {
    id: "access-17",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which of these is an example of 'something you have' in MFA?",
    options: ["A hardware security key", "A password", "A fingerprint", "A secret question"],
    answer: "A hardware security key",
    explanation: "A physical token or key is something the user possesses."
  },
  {
    id: "access-18",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which model is the most flexible but also the least secure?",
    options: ["DAC", "MAC", "RBAC", "ABAC"],
    answer: "DAC",
    explanation: "DAC gives users too much control over permissions, leading to potential leaks."
  },
  {
    id: "access-19",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the term for a network segment that is accessible to the public but isolated from the private network?",
    answer: "DMZ",
    explanation: "DMZ stands for Demilitarized Zone."
  },
  {
    id: "access-20",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which system would alert an admin if a user tries to access a restricted file 50 times in a minute?",
    options: ["IDS", "Firewall", "VPN", "Switch"],
    answer: "IDS",
    explanation: "IDS is designed to detect such suspicious patterns."
  },
  // Access Control & Network Defenses - Difficult
  {
    id: "access-21",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which access control model uses attributes like 'time of day' or 'location' to grant access?",
    options: ["ABAC", "RBAC", "MAC", "DAC"],
    answer: "ABAC",
    explanation: "ABAC (Attribute-Based Access Control) is the most granular and complex model."
  },
  {
    id: "access-22",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for the principle that a user should only have the minimum access necessary for their job?",
    answer: "Principle of Least Privilege",
    explanation: "POLP is a fundamental security concept."
  },
  {
    id: "access-23",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which type of IDS looks for specific patterns or 'fingerprints' of known attacks?",
    options: ["Signature-based IDS", "Anomaly-based IDS", "Heuristic IDS", "Host-based IDS"],
    answer: "Signature-based IDS",
    explanation: "Signature-based detection is effective against known threats but fails against zero-days."
  },
  {
    id: "access-24",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which type of IDS alerts when network traffic deviates from a 'normal' baseline?",
    options: ["Anomaly-based IDS", "Signature-based IDS", "Network-based IDS", "Inline IDS"],
    answer: "Anomaly-based IDS",
    explanation: "Anomaly-based detection can identify new, unknown attacks."
  },
  {
    id: "access-25",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for a firewall that operates at the Application Layer (Layer 7)?",
    answer: "WAF",
    explanation: "WAF stands for Web Application Firewall."
  },
  {
    id: "access-26",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "In MAC, what happens if a user's clearance is 'Secret' but the document label is 'Top Secret'?",
    options: ["Access is denied", "Access is granted with a warning", "The user is automatically upgraded", "The document is downgraded"],
    answer: "Access is denied",
    explanation: "In MAC, the clearance must meet or exceed the document's classification."
  },
  {
    id: "access-27",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for a VPN that connects two entire networks together (e.g., two office branches)?",
    answer: "Site-to-Site VPN",
    explanation: "This differs from a Remote Access VPN, which connects individual users."
  },
  {
    id: "access-28",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which of these is a 'False Positive' in IDS?",
    options: ["Legitimate traffic flagged as an attack", "An actual attack that was missed", "A user logging in correctly", "A system update"],
    answer: "Legitimate traffic flagged as an attack",
    explanation: "False positives can lead to 'alert fatigue' for security teams."
  },
  {
    id: "access-29",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is 'Split Tunneling' in a VPN?",
    options: ["Only some traffic goes through the VPN", "The VPN connection is shared by two users", "The VPN uses two different encryption keys", "The VPN connects to two servers at once"],
    answer: "Only some traffic goes through the VPN",
    explanation: "Split tunneling allows local traffic to stay off the VPN for better performance."
  },
  {
    id: "access-30",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the term for the process of ensuring that a user is who they claim to be using multiple factors?",
    answer: "MFA",
    explanation: "Multi-Factor Authentication is a core security requirement today."
  },
  // --- BATCH 2: 110 NEW EASY QUESTIONS (11-20 PER TOPIC) ---
  {
    id: "gen-ict-e-11",
    topic: "General ICT",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the primary function of an input device?",
    options: ["To provide data to the computer", "To display information", "To store data permanently", "To process instructions"],
    answer: "To provide data to the computer"
  },
  {
    id: "gen-ict-e-12",
    topic: "General ICT",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of these is a secondary storage device?",
    options: ["Hard Disk Drive", "RAM", "CPU Cache", "Registers"],
    answer: "Hard Disk Drive"
  },
  {
    id: "gen-ict-e-13",
    topic: "General ICT",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'GUI' stand for?",
    answer: "Graphical User Interface"
  },
  {
    id: "gen-ict-e-14",
    topic: "General ICT",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the smallest unit of data in a computer?",
    options: ["Bit", "Byte", "Nibble", "Word"],
    answer: "Bit"
  },
  {
    id: "gen-ict-e-15",
    topic: "General ICT",
    difficulty: "Easy",
    type: "Identification",
    question: "Which component is responsible for cooling the CPU?",
    answer: "Heat Sink"
  },
  {
    id: "gen-ict-e-16",
    topic: "General ICT",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the name of the software that manages computer hardware?",
    options: ["Operating System", "Application Software", "Utility Software", "Firmware"],
    answer: "Operating System"
  },
  {
    id: "gen-ict-e-17",
    topic: "General ICT",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'USB' stand for?",
    answer: "Universal Serial Bus"
  },
  {
    id: "gen-ict-e-18",
    topic: "General ICT",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which device is used to produce hard copies of documents?",
    options: ["Printer", "Monitor", "Scanner", "Projector"],
    answer: "Printer"
  },
  {
    id: "gen-ict-e-19",
    topic: "General ICT",
    difficulty: "Easy",
    type: "Identification",
    question: "What is a single point in a graphic image called?",
    answer: "Pixel"
  },
  {
    id: "gen-ict-e-20",
    topic: "General ICT",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the purpose of a 'BIOS'?",
    answer: "Hardware Initialization"
  },
  {
    id: "hard-e-11",
    topic: "Hardware & Components",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the primary purpose of a GPU?",
    options: ["Graphics processing", "Data storage", "Network connectivity", "Audio output"],
    answer: "Graphics processing"
  },
  {
    id: "hard-e-12",
    topic: "Hardware & Components",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which type of memory is non-volatile?",
    options: ["ROM", "RAM", "Cache", "L1 Cache"],
    answer: "ROM"
  },
  {
    id: "hard-e-13",
    topic: "Hardware & Components",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'SSD' stand for?",
    answer: "Solid State Drive"
  },
  {
    id: "hard-e-14",
    topic: "Hardware & Components",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which port is commonly used for high-definition video and audio?",
    options: ["HDMI", "VGA", "Serial", "Parallel"],
    answer: "HDMI"
  },
  {
    id: "hard-e-15",
    topic: "Hardware & Components",
    difficulty: "Easy",
    type: "Identification",
    question: "What component converts AC power from a wall outlet to DC power?",
    answer: "Power Supply Unit"
  },
  {
    id: "hard-e-16",
    topic: "Hardware & Components",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which type of RAM is typically used in laptops?",
    options: ["SO-DIMM", "DIMM", "SIMM", "RIMM"],
    answer: "SO-DIMM"
  },
  {
    id: "hard-e-17",
    topic: "Hardware & Components",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the term for increasing a component's clock speed beyond its rating?",
    answer: "Overclocking"
  },
  {
    id: "hard-e-18",
    topic: "Hardware & Components",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the name of the socket where the CPU is installed?",
    answer: "CPU Socket"
  },
  {
    id: "hard-e-19",
    topic: "Hardware & Components",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is high-speed memory located very close to the CPU called?",
    options: ["Cache", "Virtual Memory", "Flash Memory", "Main Memory"],
    answer: "Cache"
  },
  {
    id: "hard-e-20",
    topic: "Hardware & Components",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of these is an example of an optical drive?",
    options: ["Blu-ray Drive", "Hard Drive", "Thumb Drive", "Floppy Drive"],
    answer: "Blu-ray Drive"
  },
  {
    id: "net-e-11",
    topic: "Networking & Internet",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'LAN' stand for?",
    answer: "Local Area Network"
  },
  {
    id: "net-e-12",
    topic: "Networking & Internet",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which device is used to connect multiple different networks?",
    options: ["Router", "Switch", "Hub", "Bridge"],
    answer: "Router"
  },
  {
    id: "net-e-13",
    topic: "Networking & Internet",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is a unique numerical label assigned to each device on a network?",
    options: ["IP Address", "MAC Address", "Home Address", "Port Number"],
    answer: "IP Address"
  },
  {
    id: "net-e-14",
    topic: "Networking & Internet",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'HTTP' stand for?",
    answer: "Hypertext Transfer Protocol"
  },
  {
    id: "net-e-15",
    topic: "Networking & Internet",
    difficulty: "Easy",
    type: "Identification",
    question: "What device converts digital signals to analog and vice versa?",
    answer: "Modem"
  },
  {
    id: "net-e-16",
    topic: "Networking & Internet",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the common name for wireless networking technology?",
    options: ["Wi-Fi", "Ethernet", "Bluetooth", "NFC"],
    answer: "Wi-Fi"
  },
  {
    id: "net-e-17",
    topic: "Networking & Internet",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which device connects multiple devices within a single LAN?",
    options: ["Switch", "Router", "Gateway", "Modem"],
    answer: "Switch"
  },
  {
    id: "net-e-18",
    topic: "Networking & Internet",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the global network of interconnected computer networks?",
    options: ["The Internet", "Intranet", "Extranet", "Ethernet"],
    answer: "The Internet"
  },
  {
    id: "net-e-19",
    topic: "Networking & Internet",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'URL' stand for?",
    answer: "Uniform Resource Locator"
  },
  {
    id: "net-e-20",
    topic: "Networking & Internet",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What term describes the maximum data transfer rate of a network?",
    options: ["Bandwidth", "Latency", "Throughput", "Jitter"],
    answer: "Bandwidth"
  },
  {
    id: "cyber-e-11",
    topic: "Cybersecurity & Threats",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What acts as a barrier between a trusted and an untrusted network?",
    options: ["Firewall", "Router", "Switch", "Proxy"],
    answer: "Firewall"
  },
  {
    id: "cyber-e-12",
    topic: "Cybersecurity & Threats",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is a fraudulent attempt to obtain sensitive info by disguising as a trustworthy entity?",
    options: ["Phishing", "Spamming", "Hacking", "Cracking"],
    answer: "Phishing"
  },
  {
    id: "cyber-e-13",
    topic: "Cybersecurity & Threats",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the general term for malicious software?",
    answer: "Malware"
  },
  {
    id: "cyber-e-14",
    topic: "Cybersecurity & Threats",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of these is a characteristic of a strong password?",
    options: ["Includes symbols and numbers", "Is your birthday", "Is 'password123'", "Is your pet's name"],
    answer: "Includes symbols and numbers"
  },
  {
    id: "cyber-e-15",
    topic: "Cybersecurity & Threats",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What software is designed to detect and remove malicious programs?",
    options: ["Antivirus", "Adware", "Spyware", "Ransomware"],
    answer: "Antivirus"
  },
  {
    id: "cyber-e-16",
    topic: "Cybersecurity & Threats",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the process of encoding information to prevent unauthorized access?",
    answer: "Encryption"
  },
  {
    id: "cyber-e-17",
    topic: "Cybersecurity & Threats",
    difficulty: "Easy",
    type: "Identification",
    question: "What does '2FA' stand for?",
    answer: "Two-Factor Authentication"
  },
  {
    id: "cyber-e-18",
    topic: "Cybersecurity & Threats",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is a person who uses computers to gain unauthorized access to data?",
    options: ["Hacker", "Programmer", "Analyst", "Admin"],
    answer: "Hacker"
  },
  {
    id: "cyber-e-19",
    topic: "Cybersecurity & Threats",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What type of malware gathers information about a user without their consent?",
    options: ["Spyware", "Virus", "Worm", "Trojan"],
    answer: "Spyware"
  },
  {
    id: "cyber-e-20",
    topic: "Cybersecurity & Threats",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the term for manipulating people into giving up confidential information?",
    options: ["Social Engineering", "Phishing", "Vishing", "Smishing"],
    answer: "Social Engineering"
  },
  {
    id: "os-e-11",
    topic: "Operating Systems & Software",
    difficulty: "Easy",
    type: "Identification",
    question: "Which operating system is developed by Microsoft?",
    answer: "Windows"
  },
  {
    id: "os-e-12",
    topic: "Operating Systems & Software",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which of these is an open-source operating system kernel?",
    options: ["Linux", "Windows", "macOS", "iOS"],
    answer: "Linux"
  },
  {
    id: "os-e-13",
    topic: "Operating Systems & Software",
    difficulty: "Easy",
    type: "Identification",
    question: "Which operating system is developed by Apple for its computers?",
    answer: "macOS"
  },
  {
    id: "os-e-14",
    topic: "Operating Systems & Software",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the method used by an OS to store and organize files on a disk?",
    options: ["File System", "Database", "Registry", "Kernel"],
    answer: "File System"
  },
  {
    id: "os-e-15",
    topic: "Operating Systems & Software",
    difficulty: "Easy",
    type: "Identification",
    question: "What is the ability of an OS to run multiple applications at once called?",
    answer: "Multitasking"
  },
  {
    id: "os-e-16",
    topic: "Operating Systems & Software",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the core part of an operating system that manages hardware?",
    options: ["Kernel", "Shell", "Desktop", "Utility"],
    answer: "Kernel"
  },
  {
    id: "os-e-17",
    topic: "Operating Systems & Software",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What software allows the OS to communicate with a specific hardware device?",
    options: ["Device Driver", "Application", "Firmware", "BIOS"],
    answer: "Device Driver"
  },
  {
    id: "os-e-18",
    topic: "Operating Systems & Software",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the use of disk space to simulate additional RAM called?",
    options: ["Virtual Memory", "Flash Memory", "Cache", "Buffer"],
    answer: "Virtual Memory"
  },
  {
    id: "os-e-19",
    topic: "Operating Systems & Software",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Software whose source code is freely available for modification is called:",
    options: ["Open Source", "Proprietary", "Freeware", "Shareware"],
    answer: "Open Source"
  },
  {
    id: "os-e-20",
    topic: "Operating Systems & Software",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'CLI' stand for?",
    answer: "Command Line Interface"
  },
  {
    id: "cloud-e-11",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the term for servers accessed over the internet?",
    options: ["The Cloud", "The Grid", "The Web", "The Net"],
    answer: "The Cloud"
  },
  {
    id: "cloud-e-12",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'SaaS' stand for?",
    answer: "Software as a Service"
  },
  {
    id: "cloud-e-13",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'PaaS' stand for?",
    answer: "Platform as a Service"
  },
  {
    id: "cloud-e-14",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'IaaS' stand for?",
    answer: "Infrastructure as a Service"
  },
  {
    id: "cloud-e-15",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'AWS' stand for?",
    answer: "Amazon Web Services"
  },
  {
    id: "cloud-e-16",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Easy",
    type: "Identification",
    question: "What is Microsoft's cloud computing platform called?",
    answer: "Azure"
  },
  {
    id: "cloud-e-17",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'GCP' stand for?",
    answer: "Google Cloud Platform"
  },
  {
    id: "cloud-e-18",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the process of creating virtual versions of physical resources?",
    options: ["Virtualization", "Simulation", "Emulation", "Abstraction"],
    answer: "Virtualization"
  },
  {
    id: "cloud-e-19",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Cloud services offered over the public internet are part of a:",
    options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    answer: "Public Cloud"
  },
  {
    id: "cloud-e-20",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Cloud services used exclusively by a single organization are part of a:",
    options: ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Multi-Cloud"],
    answer: "Private Cloud"
  },
  {
    id: "web-e-11",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'HTML' stand for?",
    answer: "Hypertext Markup Language"
  },
  {
    id: "web-e-12",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'CSS' stand for?",
    answer: "Cascading Style Sheets"
  },
  {
    id: "web-e-13",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Which programming language is primarily used for web interactivity?",
    options: ["JavaScript", "HTML", "CSS", "SQL"],
    answer: "JavaScript"
  },
  {
    id: "web-e-14",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What application is used to access and view websites?",
    options: ["Web Browser", "Web Server", "Search Engine", "Email Client"],
    answer: "Web Browser"
  },
  {
    id: "web-e-15",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What computer provides data and resources to other computers on a network?",
    options: ["Server", "Client", "Workstation", "Terminal"],
    answer: "Server"
  },
  {
    id: "web-e-16",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the human-readable address of a website called?",
    options: ["Domain Name", "IP Address", "MAC Address", "Port Number"],
    answer: "Domain Name"
  },
  {
    id: "web-e-17",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Web design that adapts to different screen sizes is called:",
    options: ["Responsive Design", "Static Design", "Adaptive Design", "Fluid Design"],
    answer: "Responsive Design"
  },
  {
    id: "web-e-18",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "The part of a website that users interact with directly is the:",
    options: ["Front-end", "Back-end", "Database", "Server"],
    answer: "Front-end"
  },
  {
    id: "web-e-19",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "The server-side part of a website that handles data is the:",
    options: ["Back-end", "Front-end", "UI", "UX"],
    answer: "Back-end"
  },
  {
    id: "web-e-20",
    topic: "Web & Software Development",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'SQL' stand for?",
    answer: "Structured Query Language"
  },
  {
    id: "acronym-e-11",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'RAM' stand for?",
    answer: "Random Access Memory"
  },
  {
    id: "acronym-e-12",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'ROM' stand for?",
    answer: "Read-Only Memory"
  },
  {
    id: "acronym-e-13",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'CPU' stand for?",
    answer: "Central Processing Unit"
  },
  {
    id: "acronym-e-14",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'GPU' stand for?",
    answer: "Graphics Processing Unit"
  },
  {
    id: "acronym-e-15",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'USB' stand for?",
    answer: "Universal Serial Bus"
  },
  {
    id: "acronym-e-16",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'LAN' stand for?",
    answer: "Local Area Network"
  },
  {
    id: "acronym-e-17",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'WAN' stand for?",
    answer: "Wide Area Network"
  },
  {
    id: "acronym-e-18",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'IP' stand for?",
    answer: "Internet Protocol"
  },
  {
    id: "acronym-e-19",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'URL' stand for?",
    answer: "Uniform Resource Locator"
  },
  {
    id: "acronym-e-20",
    topic: "Acronyms Master List",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'OS' stand for?",
    answer: "Operating System"
  },
  {
    id: "risk-e-11",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is a potential cause of an unwanted incident?",
    options: ["Threat", "Vulnerability", "Impact", "Asset"],
    answer: "Threat"
  },
  {
    id: "risk-e-12",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is a weakness in an asset or control?",
    options: ["Vulnerability", "Threat", "Risk", "Impact"],
    answer: "Vulnerability"
  },
  {
    id: "risk-e-13",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the consequence of a risk occurring?",
    options: ["Impact", "Likelihood", "Control", "Threat"],
    answer: "Impact"
  },
  {
    id: "risk-e-14",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the probability of a risk occurring?",
    options: ["Likelihood", "Impact", "Severity", "Exposure"],
    answer: "Likelihood"
  },
  {
    id: "risk-e-15",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is a measure taken to manage or reduce risk?",
    options: ["Control", "Threat", "Vulnerability", "Incident"],
    answer: "Control"
  },
  {
    id: "risk-e-16",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "The process of selecting and implementing controls is called:",
    options: ["Risk Treatment", "Risk Assessment", "Risk Identification", "Risk Monitoring"],
    answer: "Risk Treatment"
  },
  {
    id: "risk-e-17",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Identification",
    question: "What does 'BIA' stand for?",
    answer: "Business Impact Analysis"
  },
  {
    id: "risk-e-18",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Anything of value to an organization is called an:",
    options: ["Asset", "Entity", "Object", "Resource"],
    answer: "Asset"
  },
  {
    id: "risk-e-19",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "The amount of risk an organization is willing to accept is its:",
    options: ["Risk Appetite", "Risk Tolerance", "Risk Threshold", "Risk Capacity"],
    answer: "Risk Appetite"
  },
  {
    id: "risk-e-20",
    topic: "Risk Management & Business Continuity",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Meeting legal and regulatory requirements is called:",
    options: ["Compliance", "Governance", "Auditing", "Assurance"],
    answer: "Compliance"
  },
  {
    id: "crypto-e-11",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the practice of secure communication?",
    options: ["Cryptography", "Stenography", "Typography", "Holography"],
    answer: "Cryptography"
  },
  {
    id: "crypto-e-12",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is an algorithm for encryption or decryption?",
    options: ["Cipher", "Key", "Hash", "Salt"],
    answer: "Cipher"
  },
  {
    id: "crypto-e-13",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the practice of hiding information within other information?",
    options: ["Steganography", "Cryptography", "Obfuscation", "Masking"],
    answer: "Steganography"
  },
  {
    id: "crypto-e-14",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the science of breaking codes and ciphers?",
    options: ["Cryptanalysis", "Cryptography", "Cryptology", "Cryptography"],
    answer: "Cryptanalysis"
  },
  {
    id: "crypto-e-15",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "The process of handling cryptographic keys is called:",
    options: ["Key Management", "Key Exchange", "Key Generation", "Key Storage"],
    answer: "Key Management"
  },
  {
    id: "crypto-e-16",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "A key that can be shared with anyone is a:",
    options: ["Public Key", "Private Key", "Shared Key", "Secret Key"],
    answer: "Public Key"
  },
  {
    id: "crypto-e-17",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "A key that must be kept secret is a:",
    options: ["Private Key", "Public Key", "Common Key", "Open Key"],
    answer: "Private Key"
  },
  {
    id: "crypto-e-18",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Encryption using a single key for both locking and unlocking is:",
    options: ["Symmetric", "Asymmetric", "Hybrid", "One-way"],
    answer: "Symmetric"
  },
  {
    id: "crypto-e-19",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Encryption using a pair of keys is:",
    options: ["Asymmetric", "Symmetric", "Block", "Stream"],
    answer: "Asymmetric"
  },
  {
    id: "crypto-e-20",
    topic: "Applied Cryptography",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Creating a fixed-length string from data for integrity is:",
    options: ["Hashing", "Encrypting", "Salting", "Padding"],
    answer: "Hashing"
  },
  {
    id: "access-e-11",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Regulating who can view or use resources is:",
    options: ["Access Control", "Network Security", "Data Privacy", "Identity Management"],
    answer: "Access Control"
  },
  {
    id: "access-e-12",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the process of claiming an identity?",
    options: ["Identification", "Authentication", "Authorization", "Accounting"],
    answer: "Identification"
  },
  {
    id: "access-e-13",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the process of proving an identity?",
    options: ["Authentication", "Identification", "Authorization", "Accounting"],
    answer: "Authentication"
  },
  {
    id: "access-e-14",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the process of granting permissions?",
    options: ["Authorization", "Authentication", "Identification", "Accounting"],
    answer: "Authorization"
  },
  {
    id: "access-e-15",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "What is the process of recording user actions?",
    options: ["Accounting", "Authorization", "Authentication", "Identification"],
    answer: "Accounting"
  },
  {
    id: "access-e-16",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Using physical traits for identification is called:",
    options: ["Biometrics", "Genetics", "Anatomy", "Physiology"],
    answer: "Biometrics"
  },
  {
    id: "access-e-17",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "A physical card with a chip used for identification is a:",
    options: ["Smart Card", "Credit Card", "Debit Card", "ID Card"],
    answer: "Smart Card"
  },
  {
    id: "access-e-18",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Using one login for multiple systems is called:",
    options: ["Single Sign-On", "Multi-Factor Auth", "Federated Identity", "Centralized Auth"],
    answer: "Single Sign-On"
  },
  {
    id: "access-e-19",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Using multiple methods to prove identity is:",
    options: ["Multi-Factor Authentication", "Single Sign-On", "Biometrics", "Authorization"],
    answer: "Multi-Factor Authentication"
  },
  {
    id: "access-e-20",
    topic: "Access Control & Network Defenses",
    difficulty: "Easy",
    type: "Multiple Choice",
    question: "Giving users only the access they need is the principle of:",
    options: ["Least Privilege", "Need to Know", "Separation of Duties", "Implicit Deny"],
    answer: "Least Privilege"
  },
  // --- BATCH 3: 110 NEW MEDIUM QUESTIONS (11-20 PER TOPIC) ---
  {
    id: "gen-ict-m-11",
    topic: "General ICT",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which bus connects the CPU to the main memory?",
    options: ["System Bus", "Expansion Bus", "I/O Bus", "Address Bus"],
    answer: "System Bus"
  },
  {
    id: "gen-ict-m-12",
    topic: "General ICT",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is the difference between a cold boot and a warm boot?",
    options: ["Cold boot starts from power off; warm boot is a restart", "Cold boot is faster", "Warm boot clears RAM completely", "There is no difference"],
    answer: "Cold boot starts from power off; warm boot is a restart"
  },
  {
    id: "gen-ict-m-13",
    topic: "General ICT",
    difficulty: "Medium",
    type: "Identification",
    question: "What is permanent software programmed into a read-only memory chip called?",
    answer: "Firmware"
  },
  {
    id: "gen-ict-m-14",
    topic: "General ICT",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is 'Pipelining' in CPU architecture?",
    options: ["Executing multiple instructions in stages", "Connecting multiple CPUs", "Increasing clock speed", "Reducing power consumption"],
    answer: "Executing multiple instructions in stages"
  },
  {
    id: "gen-ict-m-15",
    topic: "General ICT",
    difficulty: "Medium",
    type: "Identification",
    question: "What hardware feature allows devices to access memory without involving the CPU?",
    answer: "Direct Memory Access"
  },
  {
    id: "gen-ict-m-16",
    topic: "General ICT",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is the CMOS battery used for?",
    options: ["To power the BIOS chip and keep time", "To power the CPU", "To charge the laptop battery", "To store user files"],
    answer: "To power the BIOS chip and keep time"
  },
  {
    id: "gen-ict-m-17",
    topic: "General ICT",
    difficulty: "Medium",
    type: "Identification",
    question: "What does 'RAID' stand for?",
    answer: "Redundant Array of Independent Disks"
  },
  {
    id: "gen-ict-m-18",
    topic: "General ICT",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is the purpose of a 'Parity Bit'?",
    options: ["Error detection", "Data compression", "Encryption", "Routing"],
    answer: "Error detection"
  },
  {
    id: "gen-ict-m-19",
    topic: "General ICT",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the set of basic commands a CPU can execute called?",
    answer: "Instruction Set"
  },
  {
    id: "gen-ict-m-20",
    topic: "General ICT",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What term describes the frequency at which a CPU executes instructions?",
    options: ["Clock Speed", "Bandwidth", "Latency", "Throughput"],
    answer: "Clock Speed"
  },
  {
    id: "hard-m-11",
    topic: "Hardware & Components",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which RAM generation introduced lower voltage and higher speeds than DDR4?",
    options: ["DDR5", "DDR3", "SDRAM", "LPDDR3"],
    answer: "DDR5"
  },
  {
    id: "hard-m-12",
    topic: "Hardware & Components",
    difficulty: "Medium",
    type: "Identification",
    question: "What protocol allows SSDs to communicate directly with the CPU via PCIe?",
    answer: "NVMe"
  },
  {
    id: "hard-m-13",
    topic: "Hardware & Components",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is 'Thermal Throttling'?",
    options: ["Reducing CPU speed to prevent overheating", "Increasing fan speed", "Shutting down the PC", "Increasing voltage"],
    answer: "Reducing CPU speed to prevent overheating"
  },
  {
    id: "hard-m-14",
    topic: "Hardware & Components",
    difficulty: "Medium",
    type: "Identification",
    question: "What type of RAM can detect and fix single-bit data corruption?",
    answer: "ECC RAM"
  },
  {
    id: "hard-m-15",
    topic: "Hardware & Components",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is the term for using multiple GPUs from the same manufacturer together?",
    options: ["SLI / Crossfire", "RAID", "Hyper-threading", "Dual Channel"],
    answer: "SLI / Crossfire"
  },
  {
    id: "hard-m-16",
    topic: "Hardware & Components",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is 'CAS Latency' in RAM?",
    options: ["Delay between request and data delivery", "Total RAM capacity", "RAM voltage", "RAM physical size"],
    answer: "Delay between request and data delivery"
  },
  {
    id: "hard-m-17",
    topic: "Hardware & Components",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which motherboard form factor is the most common for standard desktop PCs?",
    options: ["ATX", "Micro-ATX", "Mini-ITX", "E-ATX"],
    answer: "ATX"
  },
  {
    id: "hard-m-18",
    topic: "Hardware & Components",
    difficulty: "Medium",
    type: "Identification",
    question: "What does 'TDP' stand for in relation to CPU cooling?",
    answer: "Thermal Design Power"
  },
  {
    id: "hard-m-19",
    topic: "Hardware & Components",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "A GPU that is built directly into the CPU package is called:",
    options: ["Integrated Graphics", "Discrete Graphics", "External GPU", "Virtual GPU"],
    answer: "Integrated Graphics"
  },
  {
    id: "hard-m-20",
    topic: "Hardware & Components",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which video interface supports both high-resolution video and high-speed data (like USB)?",
    options: ["DisplayPort", "VGA", "DVI", "S-Video"],
    answer: "DisplayPort"
  },
  {
    id: "net-m-11",
    topic: "Networking & Internet",
    difficulty: "Medium",
    type: "Identification",
    question: "What 7-layer model describes how different network protocols interact?",
    answer: "OSI Model"
  },
  {
    id: "net-m-12",
    topic: "Networking & Internet",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which protocol suite is the foundation of the modern internet?",
    options: ["TCP/IP", "IPX/SPX", "NetBEUI", "AppleTalk"],
    answer: "TCP/IP"
  },
  {
    id: "net-m-13",
    topic: "Networking & Internet",
    difficulty: "Medium",
    type: "Identification",
    question: "What system translates domain names (like google.com) into IP addresses?",
    answer: "DNS"
  },
  {
    id: "net-m-14",
    topic: "Networking & Internet",
    difficulty: "Medium",
    type: "Identification",
    question: "What protocol automatically assigns IP addresses to devices on a network?",
    answer: "DHCP"
  },
  {
    id: "net-m-15",
    topic: "Networking & Internet",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What technology allows multiple devices on a private network to share one public IP?",
    options: ["NAT", "DNS", "DHCP", "VLAN"],
    answer: "NAT"
  },
  {
    id: "net-m-16",
    topic: "Networking & Internet",
    difficulty: "Medium",
    type: "Identification",
    question: "What is a logical subnetwork within a physical network called?",
    answer: "VLAN"
  },
  {
    id: "net-m-17",
    topic: "Networking & Internet",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is the process of dividing a large network into smaller, manageable pieces?",
    options: ["Subnetting", "Routing", "Switching", "Bridging"],
    answer: "Subnetting"
  },
  {
    id: "net-m-18",
    topic: "Networking & Internet",
    difficulty: "Medium",
    type: "Identification",
    question: "What protocol is used by the 'ping' command to check connectivity?",
    answer: "ICMP"
  },
  {
    id: "net-m-19",
    topic: "Networking & Internet",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which protocol is responsible for routing traffic between different ISPs on the internet?",
    options: ["BGP", "OSPF", "RIP", "EIGRP"],
    answer: "BGP"
  },
  {
    id: "net-m-20",
    topic: "Networking & Internet",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the unique hardware identifier assigned to a Network Interface Card?",
    answer: "MAC Address"
  },
  {
    id: "cyber-m-11",
    topic: "Cybersecurity & Threats",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What type of malware encrypts a user's files and demands payment for the key?",
    options: ["Ransomware", "Spyware", "Adware", "Rootkit"],
    answer: "Ransomware"
  },
  {
    id: "cyber-m-12",
    topic: "Cybersecurity & Threats",
    difficulty: "Medium",
    type: "Identification",
    question: "What does 'DDoS' stand for?",
    answer: "Distributed Denial of Service"
  },
  {
    id: "cyber-m-13",
    topic: "Cybersecurity & Threats",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What attack involves injecting malicious code into a database via a web form?",
    options: ["SQL Injection", "XSS", "CSRF", "Buffer Overflow"],
    answer: "SQL Injection"
  },
  {
    id: "cyber-m-14",
    topic: "Cybersecurity & Threats",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What attack involves injecting malicious scripts into a trusted website?",
    options: ["Cross-Site Scripting (XSS)", "SQL Injection", "Phishing", "Man-in-the-Middle"],
    answer: "Cross-Site Scripting (XSS)"
  },
  {
    id: "cyber-m-15",
    topic: "Cybersecurity & Threats",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is an attack that tries every possible combination of characters to find a password?",
    options: ["Brute Force", "Dictionary Attack", "Rainbow Table", "Social Engineering"],
    answer: "Brute Force"
  },
  {
    id: "cyber-m-16",
    topic: "Cybersecurity & Threats",
    difficulty: "Medium",
    type: "Identification",
    question: "What is an attack that exploits a vulnerability before a patch is available?",
    answer: "Zero-Day Exploit"
  },
  {
    id: "cyber-m-17",
    topic: "Cybersecurity & Threats",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What creates a secure, encrypted tunnel over a public network?",
    options: ["VPN", "VLAN", "Proxy", "Firewall"],
    answer: "VPN"
  },
  {
    id: "cyber-m-18",
    topic: "Cybersecurity & Threats",
    difficulty: "Medium",
    type: "Identification",
    question: "What are the standard protocols for securing web traffic (HTTPS)?",
    answer: "SSL/TLS"
  },
  {
    id: "cyber-m-19",
    topic: "Cybersecurity & Threats",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which system monitors network traffic for suspicious activity and alerts admins?",
    options: ["IDS", "IPS", "Firewall", "Antivirus"],
    answer: "IDS"
  },
  {
    id: "cyber-m-20",
    topic: "Cybersecurity & Threats",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which system actively blocks or prevents detected network attacks?",
    options: ["IPS", "IDS", "Proxy", "Gateway"],
    answer: "IPS"
  },
  {
    id: "os-m-11",
    topic: "Operating Systems & Software",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What OS task involves managing running applications and their resources?",
    options: ["Process Management", "File Management", "Memory Management", "Device Management"],
    answer: "Process Management"
  },
  {
    id: "os-m-12",
    topic: "Operating Systems & Software",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What OS task involves allocating and deallocating RAM for processes?",
    options: ["Memory Management", "Process Management", "Storage Management", "Network Management"],
    answer: "Memory Management"
  },
  {
    id: "os-m-13",
    topic: "Operating Systems & Software",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is a situation where two processes wait for each other to release resources forever?",
    options: ["Deadlock", "Livelock", "Race Condition", "Starvation"],
    answer: "Deadlock"
  },
  {
    id: "os-m-14",
    topic: "Operating Systems & Software",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "How does the OS decide which process runs next on the CPU?",
    options: ["Scheduling", "Paging", "Interrupting", "Swapping"],
    answer: "Scheduling"
  },
  {
    id: "os-m-15",
    topic: "Operating Systems & Software",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the memory management scheme that divides memory into fixed-size blocks?",
    answer: "Paging"
  },
  {
    id: "os-m-16",
    topic: "Operating Systems & Software",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the memory management scheme that divides memory into variable-size blocks?",
    answer: "Segmentation"
  },
  {
    id: "os-m-17",
    topic: "Operating Systems & Software",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is a signal to the CPU that an event needs immediate attention?",
    options: ["Interrupt", "System Call", "Trap", "Signal"],
    answer: "Interrupt"
  },
  {
    id: "os-m-18",
    topic: "Operating Systems & Software",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is a request from an application to the OS for a service?",
    options: ["System Call", "Interrupt", "API Call", "Kernel Call"],
    answer: "System Call"
  },
  {
    id: "os-m-19",
    topic: "Operating Systems & Software",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the hierarchical database of OS and application settings in Windows?",
    answer: "Registry"
  },
  {
    id: "os-m-20",
    topic: "Operating Systems & Software",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the most common command-line shell used in Linux?",
    answer: "Bash"
  },
  {
    id: "cloud-m-11",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is running code in response to events without managing servers called?",
    options: ["Serverless Computing", "Grid Computing", "Edge Computing", "Utility Computing"],
    answer: "Serverless Computing"
  },
  {
    id: "cloud-m-12",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is packaging an application with all its dependencies into a single unit?",
    options: ["Containerization", "Virtualization", "Abstraction", "Encapsulation"],
    answer: "Containerization"
  },
  {
    id: "cloud-m-13",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the most popular open-source container orchestration platform?",
    answer: "Kubernetes"
  },
  {
    id: "cloud-m-14",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "A mix of public cloud and on-premises private cloud is called:",
    options: ["Hybrid Cloud", "Multi-Cloud", "Community Cloud", "Distributed Cloud"],
    answer: "Hybrid Cloud"
  },
  {
    id: "cloud-m-15",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Using cloud services from multiple different providers (e.g., AWS and Azure) is:",
    options: ["Multi-Cloud", "Hybrid Cloud", "Omni-Cloud", "Poly-Cloud"],
    answer: "Multi-Cloud"
  },
  {
    id: "cloud-m-16",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Storing data on remote servers that are replicated for durability is:",
    options: ["Cloud Storage", "Local Storage", "NAS", "SAN"],
    answer: "Cloud Storage"
  },
  {
    id: "cloud-m-17",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "The ability to scale resources up or down automatically based on demand is:",
    options: ["Elasticity", "Scalability", "Agility", "Availability"],
    answer: "Elasticity"
  },
  {
    id: "cloud-m-18",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "The ability of a system to handle increased load by adding resources is:",
    options: ["Scalability", "Elasticity", "Reliability", "Durability"],
    answer: "Scalability"
  },
  {
    id: "cloud-m-19",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Processing data closer to where it is generated (e.g., on IoT devices) is:",
    options: ["Edge Computing", "Fog Computing", "Cloud Computing", "Grid Computing"],
    answer: "Edge Computing"
  },
  {
    id: "cloud-m-20",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "An architecture where an application is built as a set of small, independent services is:",
    options: ["Microservices", "Monolithic", "SOA", "Serverless"],
    answer: "Microservices"
  },
  {
    id: "web-m-11",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the programming interface for HTML and XML documents?",
    answer: "DOM"
  },
  {
    id: "web-m-12",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Identification",
    question: "What does 'AJAX' stand for?",
    answer: "Asynchronous JavaScript and XML"
  },
  {
    id: "web-m-13",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the lightweight data-interchange format based on JavaScript?",
    answer: "JSON"
  },
  {
    id: "web-m-14",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What architectural style uses standard HTTP methods for web services?",
    options: ["REST", "SOAP", "GraphQL", "gRPC"],
    answer: "REST"
  },
  {
    id: "web-m-15",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the query language for APIs developed by Facebook?",
    answer: "GraphQL"
  },
  {
    id: "web-m-16",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which JavaScript library is used for building user interfaces with components?",
    options: ["React", "Angular", "Vue", "jQuery"],
    answer: "React"
  },
  {
    id: "web-m-17",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is the JavaScript runtime that allows running JS on the server?",
    options: ["Node.js", "V8", "Deno", "Bun"],
    answer: "Node.js"
  },
  {
    id: "web-m-18",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which language is a typed superset of JavaScript?",
    options: ["TypeScript", "CoffeeScript", "Dart", "Swift"],
    answer: "TypeScript"
  },
  {
    id: "web-m-19",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the most popular distributed version control system?",
    answer: "Git"
  },
  {
    id: "web-m-20",
    topic: "Web & Software Development",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the platform for developing, shipping, and running applications in containers?",
    answer: "Docker"
  },
  {
    id: "acronym-m-11",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does 'BIOS' stand for?",
    answer: "Basic Input/Output System"
  },
  {
    id: "acronym-m-12",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does 'POST' stand for in computer startup?",
    answer: "Power-On Self-Test"
  },
  {
    id: "acronym-m-13",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does 'SATA' stand for?",
    answer: "Serial AT Attachment"
  },
  {
    id: "acronym-m-14",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does 'NVMe' stand for?",
    answer: "Non-Volatile Memory Express"
  },
  {
    id: "acronym-m-15",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does 'DHCP' stand for?",
    answer: "Dynamic Host Configuration Protocol"
  },
  {
    id: "acronym-m-16",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does 'DNS' stand for?",
    answer: "Domain Name System"
  },
  {
    id: "acronym-m-17",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does 'NAT' stand for?",
    answer: "Network Address Translation"
  },
  {
    id: "acronym-m-18",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does 'VPN' stand for?",
    answer: "Virtual Private Network"
  },
  {
    id: "acronym-m-19",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does 'SQL' stand for?",
    answer: "Structured Query Language"
  },
  {
    id: "acronym-m-20",
    topic: "Acronyms Master List",
    difficulty: "Medium",
    type: "Identification",
    question: "What does 'API' stand for?",
    answer: "Application Programming Interface"
  },
  {
    id: "risk-m-11",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What risk treatment strategy involves reducing the likelihood or impact?",
    options: ["Mitigation", "Transfer", "Avoidance", "Acceptance"],
    answer: "Mitigation"
  },
  {
    id: "risk-m-12",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What risk treatment strategy involves moving the risk to a third party (e.g., insurance)?",
    options: ["Transfer", "Mitigation", "Avoidance", "Acceptance"],
    answer: "Transfer"
  },
  {
    id: "risk-m-13",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What risk treatment strategy involves stopping the activity that causes the risk?",
    options: ["Avoidance", "Mitigation", "Transfer", "Acceptance"],
    answer: "Avoidance"
  },
  {
    id: "risk-m-14",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What risk treatment strategy involves deciding to live with the risk as-is?",
    options: ["Acceptance", "Avoidance", "Mitigation", "Transfer"],
    answer: "Acceptance"
  },
  {
    id: "risk-m-15",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which risk assessment uses subjective scales like 'High', 'Medium', 'Low'?",
    options: ["Qualitative", "Quantitative", "Statistical", "Deterministic"],
    answer: "Qualitative"
  },
  {
    id: "risk-m-16",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which risk assessment uses numerical values and calculations?",
    options: ["Quantitative", "Qualitative", "Subjective", "Heuristic"],
    answer: "Quantitative"
  },
  {
    id: "risk-m-17",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the expected yearly loss from a specific risk called?",
    answer: "ALE"
  },
  {
    id: "risk-m-18",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the monetary loss from a single occurrence of a risk called?",
    answer: "SLE"
  },
  {
    id: "risk-m-19",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the estimated frequency of a risk event occurring per year?",
    answer: "ARO"
  },
  {
    id: "risk-m-20",
    topic: "Risk Management & Business Continuity",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "The risk that remains after all controls have been implemented is:",
    options: ["Residual Risk", "Inherent Risk", "Total Risk", "Secondary Risk"],
    answer: "Residual Risk"
  },
  {
    id: "crypto-m-11",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which encryption type uses the same key for both encryption and decryption?",
    options: ["Symmetric", "Asymmetric", "Public Key", "Hashing"],
    answer: "Symmetric"
  },
  {
    id: "crypto-m-12",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which encryption type uses a public key to encrypt and a private key to decrypt?",
    options: ["Asymmetric", "Symmetric", "Block", "Stream"],
    answer: "Asymmetric"
  },
  {
    id: "crypto-m-13",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is used to prove the authenticity and integrity of a digital message?",
    options: ["Digital Signature", "Digital Certificate", "Hash Function", "Ciphertext"],
    answer: "Digital Signature"
  },
  {
    id: "crypto-m-14",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the system of roles and policies used to manage digital certificates?",
    answer: "PKI"
  },
  {
    id: "crypto-m-15",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Identification",
    question: "What trusted entity issues and signs digital certificates?",
    answer: "Certificate Authority"
  },
  {
    id: "crypto-m-16",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which protocols are used to secure communication over the web (HTTPS)?",
    options: ["SSL/TLS", "SSH", "SFTP", "IPsec"],
    answer: "SSL/TLS"
  },
  {
    id: "crypto-m-17",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which algorithm allows two parties to securely exchange a secret key over a public channel?",
    options: ["Diffie-Hellman", "RSA", "AES", "SHA-256"],
    answer: "Diffie-Hellman"
  },
  {
    id: "crypto-m-18",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which asymmetric encryption is based on the algebraic structure of curves?",
    options: ["ECC", "RSA", "DSA", "ElGamal"],
    answer: "ECC"
  },
  {
    id: "crypto-m-19",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Identification",
    question: "What is random data added to a password before hashing to prevent rainbow table attacks?",
    answer: "Salt"
  },
  {
    id: "crypto-m-20",
    topic: "Applied Cryptography",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "What is a precomputed table for reversing cryptographic hash functions?",
    options: ["Rainbow Table", "Hash Table", "Lookup Table", "Truth Table"],
    answer: "Rainbow Table"
  },
  {
    id: "access-m-11",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which access control model grants permissions based on a user's job function?",
    options: ["RBAC", "DAC", "MAC", "ABAC"],
    answer: "RBAC"
  },
  {
    id: "access-m-12",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which model allows the owner of a resource to decide who has access?",
    options: ["DAC", "MAC", "RBAC", "Rule-BAC"],
    answer: "DAC"
  },
  {
    id: "access-m-13",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which model uses security labels (e.g., Top Secret) to enforce access?",
    options: ["MAC", "DAC", "RBAC", "ABAC"],
    answer: "MAC"
  },
  {
    id: "access-m-14",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Multiple Choice",
    question: "Which model grants access based on user, resource, and environmental attributes?",
    options: ["ABAC", "RBAC", "DAC", "MAC"],
    answer: "ABAC"
  },
  {
    id: "access-m-15",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Identification",
    question: "What is the network authentication protocol that uses 'tickets' to prove identity?",
    answer: "Kerberos"
  },
  {
    id: "access-m-16",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Identification",
    question: "What protocol is used to access and maintain distributed directory information services?",
    answer: "LDAP"
  },
  {
    id: "access-m-17",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Identification",
    question: "What is Microsoft's directory service for Windows domain networks?",
    answer: "Active Directory"
  },
  {
    id: "access-m-18",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Identification",
    question: "What protocol provides centralized Authentication, Authorization, and Accounting (AAA)?",
    answer: "RADIUS"
  },
  {
    id: "access-m-19",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Identification",
    question: "What Cisco-developed protocol is an alternative to RADIUS for AAA?",
    answer: "TACACS+"
  },
  {
    id: "access-m-20",
    topic: "Access Control & Network Defenses",
    difficulty: "Medium",
    type: "Identification",
    question: "What open standard is used for access delegation (allowing apps to access data)?",
    answer: "OAuth"
  },
  // --- BATCH 4: 110 NEW DIFFICULT QUESTIONS (11-20 PER TOPIC) ---
  {
    id: "gen-ict-d-11",
    topic: "General ICT",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which computer architecture is based on the stored-program concept where data and instructions share the same memory?",
    options: ["Von Neumann Architecture", "Harvard Architecture", "RISC Architecture", "CISC Architecture"],
    answer: "Von Neumann Architecture"
  },
  {
    id: "gen-ict-d-12",
    topic: "General ICT",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the observation that the number of transistors on a microchip doubles approximately every two years?",
    options: ["Moore's Law", "Metcalfe's Law", "Amdahl's Law", "Bell's Law"],
    answer: "Moore's Law"
  },
  {
    id: "gen-ict-d-13",
    topic: "General ICT",
    difficulty: "Difficult",
    type: "Identification",
    question: "What type of computing uses qubits and exploits superposition and entanglement?",
    answer: "Quantum Computing"
  },
  {
    id: "gen-ict-d-14",
    topic: "General ICT",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which AI model is inspired by the structure and function of the human brain?",
    options: ["Neural Network", "Decision Tree", "Support Vector Machine", "Genetic Algorithm"],
    answer: "Neural Network"
  },
  {
    id: "gen-ict-d-15",
    topic: "General ICT",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the practice of processing data near the source of data generation rather than in a centralized cloud?",
    options: ["Edge Computing", "Fog Computing", "Grid Computing", "Utility Computing"],
    answer: "Edge Computing"
  },
  {
    id: "gen-ict-d-16",
    topic: "General ICT",
    difficulty: "Difficult",
    type: "Identification",
    question: "What term describes extremely large datasets that may be analyzed computationally to reveal patterns?",
    answer: "Big Data"
  },
  {
    id: "gen-ict-d-17",
    topic: "General ICT",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'IoT' stand for?",
    answer: "Internet of Things"
  },
  {
    id: "gen-ict-d-18",
    topic: "General ICT",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is a decentralized, distributed, and oftentimes public, digital ledger?",
    options: ["Blockchain", "Database", "Registry", "Repository"],
    answer: "Blockchain"
  },
  {
    id: "gen-ict-d-19",
    topic: "General ICT",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which field of AI focuses on building systems that learn from data and improve over time?",
    options: ["Machine Learning", "Expert Systems", "Robotics", "Computer Vision"],
    answer: "Machine Learning"
  },
  {
    id: "gen-ict-d-20",
    topic: "General ICT",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'NLP' stand for in the context of AI?",
    answer: "Natural Language Processing"
  },
  {
    id: "hard-d-11",
    topic: "Hardware & Components",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the process of using light to print circuit patterns onto silicon wafers?",
    answer: "Photolithography"
  },
  {
    id: "hard-d-12",
    topic: "Hardware & Components",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the abstract model of a computer that defines its instructions and registers?",
    options: ["Instruction Set Architecture (ISA)", "Microarchitecture", "System Architecture", "Logic Design"],
    answer: "Instruction Set Architecture (ISA)"
  },
  {
    id: "hard-d-13",
    topic: "Hardware & Components",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which CPU design philosophy focuses on a small set of simple, fast instructions?",
    options: ["RISC", "CISC", "VLIW", "EPIC"],
    answer: "RISC"
  },
  {
    id: "hard-d-14",
    topic: "Hardware & Components",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is Intel's proprietary technology for creating two logical cores from one physical core?",
    answer: "Hyper-threading"
  },
  {
    id: "hard-d-15",
    topic: "Hardware & Components",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What term describes the number of bits that can be sent over a bus simultaneously?",
    options: ["Bus Width", "Bus Speed", "Bus Latency", "Bus Protocol"],
    answer: "Bus Width"
  },
  {
    id: "hard-d-16",
    topic: "Hardware & Components",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "In older chipsets, which component handled high-speed tasks like CPU and RAM communication?",
    options: ["Northbridge", "Southbridge", "Super I/O", "BIOS"],
    answer: "Northbridge"
  },
  {
    id: "hard-d-17",
    topic: "Hardware & Components",
    difficulty: "Difficult",
    type: "Identification",
    question: "What are the individual data paths in a PCIe slot called?",
    answer: "Lanes"
  },
  {
    id: "hard-d-18",
    topic: "Hardware & Components",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the process of increasing CPU voltage to achieve higher stable clock speeds?",
    options: ["Overvolting", "Overclocking", "Throttling", "Undervolting"],
    answer: "Overvolting"
  },
  {
    id: "hard-d-19",
    topic: "Hardware & Components",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the informal term for the variance in manufacturing quality between individual CPUs?",
    answer: "Silicon Lottery"
  },
  {
    id: "hard-d-20",
    topic: "Hardware & Components",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'SoC' stand for?",
    answer: "System on a Chip"
  },
  {
    id: "net-d-11",
    topic: "Networking & Internet",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which IP version uses 128-bit addresses and was designed to replace IPv4?",
    options: ["IPv6", "IPv5", "IPv4.1", "IPv8"],
    answer: "IPv6"
  },
  {
    id: "net-d-12",
    topic: "Networking & Internet",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which routing method sends traffic to the 'nearest' of multiple nodes sharing the same IP?",
    options: ["Anycast", "Unicast", "Multicast", "Broadcast"],
    answer: "Anycast"
  },
  {
    id: "net-d-13",
    topic: "Networking & Internet",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which routing method sends traffic to a specific group of interested nodes?",
    options: ["Multicast", "Anycast", "Unicast", "Broadcast"],
    answer: "Multicast"
  },
  {
    id: "net-d-14",
    topic: "Networking & Internet",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the approach to network management that enables dynamic, programmatically efficient network configuration?",
    answer: "Software Defined Networking"
  },
  {
    id: "net-d-15",
    topic: "Networking & Internet",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'MPLS' stand for?",
    answer: "Multi-Protocol Label Switching"
  },
  {
    id: "net-d-16",
    topic: "Networking & Internet",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What mechanism prioritizes certain types of network traffic (e.g., VoIP) over others?",
    options: ["QoS", "NAT", "DNS", "DHCP"],
    answer: "QoS"
  },
  {
    id: "net-d-17",
    topic: "Networking & Internet",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the process of distributing network traffic across multiple servers to ensure availability?",
    options: ["Load Balancing", "Failover", "Redundancy", "Clustering"],
    answer: "Load Balancing"
  },
  {
    id: "net-d-18",
    topic: "Networking & Internet",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What term describes the variation in the delay of received packets?",
    options: ["Jitter", "Latency", "Lag", "Ping"],
    answer: "Jitter"
  },
  {
    id: "net-d-19",
    topic: "Networking & Internet",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What occurs when data packets fail to reach their destination across a network?",
    options: ["Packet Loss", "Packet Delay", "Packet Corruption", "Packet Reordering"],
    answer: "Packet Loss"
  },
  {
    id: "net-d-20",
    topic: "Networking & Internet",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the actual amount of data successfully transferred over a network in a given time?",
    answer: "Throughput"
  },
  {
    id: "cyber-d-11",
    topic: "Cybersecurity & Threats",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is a stealthy, continuous computer hacking process, often orchestrated by a state-sponsored group?",
    options: ["Advanced Persistent Threat (APT)", "Zero-Day Attack", "DDoS Attack", "Ransomware Campaign"],
    answer: "Advanced Persistent Threat (APT)"
  },
  {
    id: "cyber-d-12",
    topic: "Cybersecurity & Threats",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the psychological manipulation of people into performing actions or divulging confidential info?",
    options: ["Social Engineering", "Phishing", "Vishing", "Pretexting"],
    answer: "Social Engineering"
  },
  {
    id: "cyber-d-13",
    topic: "Cybersecurity & Threats",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is an authorized simulated cyberattack on a computer system, performed to evaluate security?",
    options: ["Penetration Testing", "Vulnerability Scanning", "Security Auditing", "Risk Assessment"],
    answer: "Penetration Testing"
  },
  {
    id: "cyber-d-14",
    topic: "Cybersecurity & Threats",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the branch of forensic science encompassing the recovery and investigation of material found in digital devices?",
    answer: "Digital Forensics"
  },
  {
    id: "cyber-d-15",
    topic: "Cybersecurity & Threats",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the organized approach to addressing and managing the aftermath of a security breach?",
    options: ["Incident Response", "Disaster Recovery", "Business Continuity", "Crisis Management"],
    answer: "Incident Response"
  },
  {
    id: "cyber-d-16",
    topic: "Cybersecurity & Threats",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'SIEM' stand for?",
    answer: "Security Information and Event Management"
  },
  {
    id: "cyber-d-17",
    topic: "Cybersecurity & Threats",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'DLP' stand for in the context of data security?",
    answer: "Data Loss Prevention"
  },
  {
    id: "cyber-d-18",
    topic: "Cybersecurity & Threats",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'EDR' stand for in endpoint security?",
    answer: "Endpoint Detection and Response"
  },
  {
    id: "cyber-d-19",
    topic: "Cybersecurity & Threats",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which security model assumes that threats exist both inside and outside the network and requires strict verification for everyone?",
    options: ["Zero Trust", "Defense in Depth", "Perimeter Security", "Least Privilege"],
    answer: "Zero Trust"
  },
  {
    id: "cyber-d-20",
    topic: "Cybersecurity & Threats",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is evidence-based knowledge about an existing or emerging menace or hazard to assets?",
    answer: "Threat Intelligence"
  },
  {
    id: "os-d-11",
    topic: "Operating Systems & Software",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which kernel architecture keeps the core OS as small as possible and moves most services to user space?",
    options: ["Microkernel", "Monolithic Kernel", "Hybrid Kernel", "Exokernel"],
    answer: "Microkernel"
  },
  {
    id: "os-d-12",
    topic: "Operating Systems & Software",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the process of storing the state of a process so it can be restored and resume execution later?",
    options: ["Context Switching", "Process Swapping", "Paging", "Interrupt Handling"],
    answer: "Context Switching"
  },
  {
    id: "os-d-13",
    topic: "Operating Systems & Software",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What situation occurs when a computer's virtual memory resources are overused, leading to constant paging?",
    options: ["Thrashing", "Deadlock", "Fragmentation", "Starvation"],
    answer: "Thrashing"
  },
  {
    id: "os-d-14",
    topic: "Operating Systems & Software",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is a bug that occurs when the output of a process is unexpectedly dependent on the timing of other events?",
    options: ["Race Condition", "Deadlock", "Heisenbug", "Buffer Overflow"],
    answer: "Race Condition"
  },
  {
    id: "os-d-15",
    topic: "Operating Systems & Software",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which synchronization primitive is used to provide mutual exclusion for a shared resource?",
    options: ["Mutex", "Semaphore", "Monitor", "Spinlock"],
    answer: "Mutex"
  },
  {
    id: "os-d-16",
    topic: "Operating Systems & Software",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What feature of a file system keeps a log of changes to be made to prevent corruption after a crash?",
    options: ["Journaling", "Mirroring", "Versioning", "Shadowing"],
    answer: "Journaling"
  },
  {
    id: "os-d-17",
    topic: "Operating Systems & Software",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the program that loads the operating system into memory when the computer starts?",
    answer: "Bootloader"
  },
  {
    id: "os-d-18",
    topic: "Operating Systems & Software",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the practice of writing programs to be executed by a command-line interpreter?",
    answer: "Shell Scripting"
  },
  {
    id: "os-d-19",
    topic: "Operating Systems & Software",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "In which mode does the OS kernel run, providing unrestricted access to hardware?",
    options: ["Kernel Mode", "User Mode", "Protected Mode", "Real Mode"],
    answer: "Kernel Mode"
  },
  {
    id: "os-d-20",
    topic: "Operating Systems & Software",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the software that creates and runs virtual machines?",
    answer: "Hypervisor"
  },
  {
    id: "cloud-d-11",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the approach to building and running applications that exploits the advantages of the cloud computing model?",
    options: ["Cloud Native", "Cloud First", "Cloud Ready", "Cloud Optimized"],
    answer: "Cloud Native"
  },
  {
    id: "cloud-d-12",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the practice of managing and provisioning infrastructure through machine-readable definition files?",
    answer: "Infrastructure as Code"
  },
  {
    id: "cloud-d-13",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the set of practices that combines software development and IT operations?",
    answer: "DevOps"
  },
  {
    id: "cloud-d-14",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'CI/CD' stand for?",
    answer: "Continuous Integration / Continuous Deployment"
  },
  {
    id: "cloud-d-15",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the measure of how well internal states of a system can be inferred from knowledge of its external outputs?",
    options: ["Observability", "Monitoring", "Tracing", "Logging"],
    answer: "Observability"
  },
  {
    id: "cloud-d-16",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the set of rules, policies, and controls implemented to manage cloud usage?",
    options: ["Cloud Governance", "Cloud Compliance", "Cloud Auditing", "Cloud Strategy"],
    answer: "Cloud Governance"
  },
  {
    id: "cloud-d-17",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the practice of bringing financial accountability to the variable spend model of cloud?",
    answer: "FinOps"
  },
  {
    id: "cloud-d-18",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the process of restoring IT infrastructure and operations after a major failure in the cloud?",
    options: ["Disaster Recovery", "Business Continuity", "High Availability", "Fault Tolerance"],
    answer: "Disaster Recovery"
  },
  {
    id: "cloud-d-19",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What term describes a system that is designed to be operational and accessible for a high percentage of time?",
    options: ["High Availability", "Fault Tolerance", "Scalability", "Reliability"],
    answer: "High Availability"
  },
  {
    id: "cloud-d-20",
    topic: "Cloud Computing & Virtualization",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the feature that automatically adjusts the number of active server instances based on load?",
    answer: "Auto-scaling"
  },
  {
    id: "web-d-11",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which binary instruction format allows running high-performance code in web browsers?",
    options: ["WebAssembly (Wasm)", "ActiveX", "Java Applets", "Flash"],
    answer: "WebAssembly (Wasm)"
  },
  {
    id: "web-d-12",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What type of web application uses modern web capabilities to deliver an app-like experience to users?",
    options: ["Progressive Web App (PWA)", "Single Page App (SPA)", "Multi-Page App (MPA)", "Static Site"],
    answer: "Progressive Web App (PWA)"
  },
  {
    id: "web-d-13",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the technique of rendering a client-side application on the server and sending the HTML to the client?",
    options: ["Server-Side Rendering (SSR)", "Static Site Generation (SSG)", "Client-Side Rendering (CSR)", "Incremental Static Regeneration (ISR)"],
    answer: "Server-Side Rendering (SSR)"
  },
  {
    id: "web-d-14",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the process of generating a website's pages at build time rather than on each request?",
    options: ["Static Site Generation (SSG)", "Server-Side Rendering (SSR)", "Dynamic Rendering", "Just-in-Time Rendering"],
    answer: "Static Site Generation (SSG)"
  },
  {
    id: "web-d-15",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the process in React where event listeners are attached to server-rendered HTML?",
    answer: "Hydration"
  },
  {
    id: "web-d-16",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is a geographically distributed group of servers that work together to provide fast delivery of internet content?",
    options: ["Content Delivery Network (CDN)", "Load Balancer", "Proxy Server", "Gateway"],
    answer: "Content Delivery Network (CDN)"
  },
  {
    id: "web-d-17",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which technology provides full-duplex communication channels over a single TCP connection?",
    options: ["WebSockets", "HTTP/2", "gRPC", "WebRTC"],
    answer: "WebSockets"
  },
  {
    id: "web-d-18",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which standard is used for authorization, allowing users to share their private resources with other sites?",
    options: ["OAuth 2.0", "SAML", "OpenID Connect", "JWT"],
    answer: "OAuth 2.0"
  },
  {
    id: "web-d-19",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'JWT' stand for?",
    answer: "JSON Web Token"
  },
  {
    id: "web-d-20",
    topic: "Web & Software Development",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What security feature allows restricted resources on a web page to be requested from another domain?",
    options: ["CORS", "CSP", "HSTS", "XSS Protection"],
    answer: "CORS"
  },
  {
    id: "acronym-d-11",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'RAID' stand for?",
    answer: "Redundant Array of Independent Disks"
  },
  {
    id: "acronym-d-12",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'SCSI' stand for?",
    answer: "Small Computer System Interface"
  },
  {
    id: "acronym-d-13",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'VLAN' stand for?",
    answer: "Virtual Local Area Network"
  },
  {
    id: "acronym-d-14",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'BGP' stand for?",
    answer: "Border Gateway Protocol"
  },
  {
    id: "acronym-d-15",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'SIEM' stand for?",
    answer: "Security Information and Event Management"
  },
  {
    id: "acronym-d-16",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'EDR' stand for?",
    answer: "Endpoint Detection and Response"
  },
  {
    id: "acronym-d-17",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'SaaS' stand for?",
    answer: "Software as a Service"
  },
  {
    id: "acronym-d-18",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'PaaS' stand for?",
    answer: "Platform as a Service"
  },
  {
    id: "acronym-d-19",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'IaaS' stand for?",
    answer: "Infrastructure as a Service"
  },
  {
    id: "acronym-d-20",
    topic: "Acronyms Master List",
    difficulty: "Difficult",
    type: "Identification",
    question: "What does 'REST' stand for?",
    answer: "Representational State Transfer"
  },
  {
    id: "risk-d-11",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the international standard for risk management?",
    answer: "ISO 31000"
  },
  {
    id: "risk-d-12",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the NIST framework for managing information security risk?",
    answer: "Risk Management Framework"
  },
  {
    id: "risk-d-13",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the framework for IT governance and management developed by ISACA?",
    answer: "COBIT"
  },
  {
    id: "risk-d-14",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the set of detailed practices for IT service management (ITSM)?",
    answer: "ITIL"
  },
  {
    id: "risk-d-15",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What term describes the level of an organization's risk management processes?",
    options: ["Risk Maturity", "Risk Appetite", "Risk Tolerance", "Risk Capacity"],
    answer: "Risk Maturity"
  },
  {
    id: "risk-d-16",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What term describes the shared values and behaviors that shape risk decisions?",
    options: ["Risk Culture", "Risk Strategy", "Risk Policy", "Risk Governance"],
    answer: "Risk Culture"
  },
  {
    id: "risk-d-17",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the process of evaluating potential future events by considering alternative outcomes?",
    options: ["Scenario Analysis", "Sensitivity Analysis", "Trend Analysis", "Gap Analysis"],
    answer: "Scenario Analysis"
  },
  {
    id: "risk-d-18",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which statistical method is used to model the probability of different outcomes in a process?",
    options: ["Monte Carlo Simulation", "Linear Regression", "Decision Tree", "Bayesian Network"],
    answer: "Monte Carlo Simulation"
  },
  {
    id: "risk-d-19",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is a metric used to provide an early signal of increasing risk exposure?",
    answer: "Key Risk Indicator"
  },
  {
    id: "risk-d-20",
    topic: "Risk Management & Business Continuity",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the risk of loss resulting from inadequate or failed internal processes, people, and systems?",
    options: ["Operational Risk", "Strategic Risk", "Financial Risk", "Compliance Risk"],
    answer: "Operational Risk"
  },
  {
    id: "crypto-d-11",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which field of cryptography uses quantum mechanics to secure communication?",
    options: ["Quantum Cryptography", "Post-Quantum Cryptography", "Lattice-Based Cryptography", "Homomorphic Encryption"],
    answer: "Quantum Cryptography"
  },
  {
    id: "crypto-d-12",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which form of encryption allows computations to be performed on ciphertext?",
    options: ["Homomorphic Encryption", "Functional Encryption", "Searchable Encryption", "Attribute-Based Encryption"],
    answer: "Homomorphic Encryption"
  },
  {
    id: "crypto-d-13",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which cryptographic method allows one party to prove they know a value without revealing the value itself?",
    options: ["Zero-Knowledge Proof", "Blind Signature", "Ring Signature", "Threshold Cryptography"],
    answer: "Zero-Knowledge Proof"
  },
  {
    id: "crypto-d-14",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which cryptographic algorithms are thought to be secure against an attack by a quantum computer?",
    options: ["Post-Quantum Cryptography", "RSA", "ECC", "Diffie-Hellman"],
    answer: "Post-Quantum Cryptography"
  },
  {
    id: "crypto-d-15",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is an attack based on information gained from the physical implementation of a cryptosystem?",
    options: ["Side-Channel Attack", "Brute Force Attack", "Man-in-the-Middle Attack", "Replay Attack"],
    answer: "Side-Channel Attack"
  },
  {
    id: "crypto-d-16",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is an attack where the attacker secretly relays and possibly alters the communication between two parties?",
    options: ["Man-in-the-Middle (MITM)", "Denial of Service (DoS)", "SQL Injection", "Cross-Site Scripting"],
    answer: "Man-in-the-Middle (MITM)"
  },
  {
    id: "crypto-d-17",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which cryptographic attack exploits the mathematics behind the probability of collisions in hash functions?",
    options: ["Birthday Attack", "Dictionary Attack", "Rainbow Table Attack", "Meet-in-the-middle Attack"],
    answer: "Birthday Attack"
  },
  {
    id: "crypto-d-18",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What feature of key agreement protocols ensures that a compromise of long-term keys does not compromise past session keys?",
    options: ["Perfect Forward Secrecy (PFS)", "Key Escrow", "Key Derivation", "Key Stretching"],
    answer: "Perfect Forward Secrecy (PFS)"
  },
  {
    id: "crypto-d-19",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which technology uses cryptographic hashes and digital signatures to maintain a tamper-evident ledger?",
    options: ["Blockchain", "Distributed Database", "Cloud Storage", "Virtual Machine"],
    answer: "Blockchain"
  },
  {
    id: "crypto-d-20",
    topic: "Applied Cryptography",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is a physical computing device that safeguards and manages digital keys?",
    answer: "Hardware Security Module"
  },
  {
    id: "access-d-11",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the practice of managing and auditing high-level access to critical systems?",
    options: ["Privileged Access Management (PAM)", "Identity Management (IdM)", "Access Review", "Role Mining"],
    answer: "Privileged Access Management (PAM)"
  },
  {
    id: "access-d-12",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the framework of policies and technologies for ensuring that the proper people in an enterprise have the appropriate access?",
    answer: "Identity and Access Management"
  },
  {
    id: "access-d-13",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the arrangement that allows a single identity to be used across multiple IT systems or organizations?",
    options: ["Federated Identity", "Single Sign-On", "Centralized Identity", "Distributed Identity"],
    answer: "Federated Identity"
  },
  {
    id: "access-d-14",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the XML-based standard for exchanging authentication and authorization data?",
    answer: "SAML"
  },
  {
    id: "access-d-15",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Identification",
    question: "What is the authentication layer on top of the OAuth 2.0 protocol?",
    answer: "OpenID Connect"
  },
  {
    id: "access-d-16",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the act of presenting a fake biometric sample to a scanner to gain unauthorized access?",
    options: ["Biometric Spoofing", "Biometric Replay", "Biometric Mimicry", "Biometric Bypass"],
    answer: "Biometric Spoofing"
  },
  {
    id: "access-d-17",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the periodic process of auditing user permissions to ensure they are still appropriate?",
    options: ["Access Review", "Access Certification", "Access Recertification", "All of the above"],
    answer: "All of the above"
  },
  {
    id: "access-d-18",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the concept of having more than one person required to complete a sensitive task?",
    options: ["Segregation of Duties (SoD)", "Dual Control", "Two-Person Rule", "All of the above"],
    answer: "All of the above"
  },
  {
    id: "access-d-19",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "What is the practice of granting users access to resources only for a limited time and when needed?",
    options: ["Just-in-Time (JIT) access", "Least Privilege", "Need to Know", "Time-Based Access"],
    answer: "Just-in-Time (JIT) access"
  },
  {
    id: "access-d-20",
    topic: "Access Control & Network Defenses",
    difficulty: "Difficult",
    type: "Multiple Choice",
    question: "Which security framework requires every request to be verified as if it originated from an untrusted network?",
    options: ["Zero Trust", "Defense in Depth", "Perimeter Security", "Least Privilege"],
    answer: "Zero Trust"
  }
];

