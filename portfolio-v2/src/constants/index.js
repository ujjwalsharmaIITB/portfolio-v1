// ─── NAV LINKS ────────────────────────────────────────────────────────────────
export const navLinks = [
  { id: "about",       title: "About" },
  { id: "education",   title: "Education" },
  { id: "publication", title: "Publications" },
  { id: "experience",  title: "Experience" },
  { id: "tech",        title: "Tech" },
  { id: "contact",     title: "Contact" },
];

export const blogLinks = [
    {
    title: "Neural Machine Translation: From Theory to Implementation",
    description: "From theory to code: a practical guide to understanding and building Neural Machine Translation systems. Walks through key concepts and implements a real-world Transformer-based translation pipeline",
    url: "https://medium.com/@ujjwal.sharma.cs/neural-machine-translation-from-theory-to-implementation-4cf4623524b9",
    tag: "NMT",
    readTime: "~20 min read"

  },
  {
    title: "LLM Training Pipeline",
    description: "A deep dive into training large language models from scratch — infra, data, and lessons learned.",
    url: "/llm-training",
    tag: "Infrastructure",
    readTime: "~20 min read",
  },
  {
    title: "SLURM for ML Researchers",
    description: "Practical SLURM instructions for running ML jobs on HPC clusters, with recipes and tips.",
    url: "/slurm-instructions",
    tag: "HPC",
    readTime: "~15 min read",
  },
];

// ─── SERVICES / IDENTITY CARDS ────────────────────────────────────────────────
export const services = [
  { title: "Avid NLP Researcher", subtitle: "(In Training) ❤️",        emoji: "🔬" },
  { title: "Occasional Software Dev", subtitle: "💻",                  emoji: "💻" },
  { title: "AI/ML Engineer",     subtitle: "(Sorta, But Not Really!!)", emoji: "🤖" },
  { title: "Full-Time CS Student", subtitle: "📚",                      emoji: "📚" },
];




// ─── TECHNOLOGIES ─────────────────────────────────────────────────────────────
export const technologies = [
  { name: "Python",      category: "Language",   color: "#3b82f6" },
  { name: "PyTorch",     category: "Framework",  color: "#ef4444" },
  { name: "TensorFlow",  category: "Framework",  color: "#f97316" },
  { name: "HuggingFace", category: "Framework",  color: "#f59e0b" },
  { name: "Linux",       category: "System",     color: "#84cc16" },
  { name: "SLURM",       category: "HPC",        color: "#10b981" },
  { name: "Docker",      category: "DevOps",     color: "#06b6d4" },
  { name: "Git",         category: "VCS",        color: "#f43f5e" },
  { name: "React",       category: "Frontend",   color: "#38bdf8" },
  { name: "Node.js",     category: "Backend",    color: "#4ade80" },
  { name: "MongoDB",     category: "Database",   color: "#86efac" },
  { name: "Spark",       category: "Big Data",   color: "#fb923c" },
  { name: "JavaScript",  category: "Language",   color: "#facc15" },
  { name: "TypeScript",  category: "Language",   color: "#60a5fa" },
];

// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const educations = [
  {
    degree: "M.Tech — Computer Science & Engineering",
    institute: "IIT Bombay",
    period: "July 2023 – Present",
    location: "Mumbai, India",
    logoInitials: "IITB",
    logoColor: "#1e3a8a",
    points: [
      "Research student at CFILT (Centre for Indian Language Technology).",
      "Focus: Multilingual NLP, GEC, Machine Translation, and LLMs.",
      "Active participant in cultural and academic events.",
    ],
  },
  {
    degree: "B.Tech — Computer Science & Engineering",
    institute: "VNIT Nagpur",
    period: "July 2018 – May 2022",
    location: "Nagpur, India",
    logoInitials: "VNIT",
    logoColor: "#7c3aed",
    points: [
      "Grounding in CS fundamentals, DSA, AI, and software engineering.",
      "Proficiency in C, C++, Java, Python, JavaScript, Scala.",
      "Projects spanning web dev, ML, blockchain, and NLP.",
    ],
  },
];

// ─── EXPERIENCES ──────────────────────────────────────────────────────────────
export const experiences = [
  {
    title: "Research Student",
    company: "CFILT — IIT Bombay",
    period: "July 2023 – Present",
    logoInitials: "CFILT",
    logoColor: "#7c3aed",
    points: [
      "Researching Multilingual GEC, Machine Translation, and LLMs.",
      "Built and deployed domain-adapted MT models for Indian languages under Mission Bhashini.",
      "First-author publications at top-tier NLP conferences (EMNLP, COLING).",
      "Contributing to NLP tools and web applications at IIT Bombay.",
    ],
  },
  {
    title: "Software Engineer I",
    company: "JP Morgan Chase & Co.",
    period: "August 2022 – July 2023",
    logoInitials: "JPMC",
    logoColor: "#1e3a8a",
    points: [
      "Developed Big Data applications using Hadoop and Spark.",
      "Collaborated with cross-functional teams on high-quality products.",
      "Led knowledge-sharing sessions on the Hadoop-Spark ecosystem.",
      "SEP Quarterly Award winner for high performance.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "EarlySalary",
    period: "May 2021 – July 2021",
    logoInitials: "ES",
    logoColor: "#059669",
    points: [
      "Full-stack intern building internal web apps with React.js & Spring Boot.",
      "Collaborated on design and code reviews with cross-functional teams.",
    ],
  },
];

// ─── PUBLICATIONS ─────────────────────────────────────────────────────────────
export const publications = [
  {
    title: "IndiGEC: Multilingual Grammar Error Correction for Low-Resource Indian Languages",
    venue: "EMNLP 2025",
    venueColor: "#7c3aed",
    place: "Suzhou, China",
    date: "November 2025",
    authors: "Ujjwal Sharma and Pushpak Bhattacharyya",
    booktitle: "Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing",
    abstract: "Grammatical Error Correction (GEC) for low-resource Indic languages faces significant challenges due to the scarcity of annotated data. In this work, we introduce the Mask-Translate&Fill (MTF) framework, a novel approach for generating high-quality synthetic data for GEC using only monolingual corpora. MTF leverages a machine translation system and a pretrained masked language model to introduce synthetic errors and tries to mimic errors made by second-language learners. Our experimental results on English, Hindi, Bengali, Marathi, and Tamil demonstrate that MTF consistently outperforms other monolingual synthetic data generation methods and achieves performance comparable to the Translation Language Modeling (TLM)-based approach, which uses a bilingual corpus, in both independent and multilingual settings. Under multilingual training, MTF yields significant improvements across Indic languages, with particularly notable gains in Bengali and Tamil, achieving +1.6 and +3.14 GLEU over the TLM-based method, respectively. To support further research, we also introduce the IndiGEC Corpus, a high-quality, human-written, manually validated GEC dataset for these four Indic languages, comprising over 8,000 sentence pairs with separate development and test splits.",
    paperUrl: "https://aclanthology.org/2025.emnlp-main.1139/",
    slidesUrl: "https://docs.google.com/presentation/d/1VbJU0n7PuGW3dGOei19dEH_gWbM_Yv57/edit?usp=sharing&ouid=115783687881154092892&rtpof=true&sd=true",
    tags: ["GEC", "Multilingual NLP", "Synthetic Data", "Low-Resource"],
  },
  {
    title: "Hi-GEC: Hindi Grammar Error Correction in Low Resource Scenario",
    venue: "COLING 2025",
    venueColor: "#0891b2",
    place: "Abu Dhabi",
    date: "January 2025",
    authors: "Ujjwal Sharma and Pushpak Bhattacharyya",
    booktitle: "Proceedings of the 31st International Conference on Computational Linguistics",
    abstract: "Automated Grammatical Error Correction (GEC) has been extensively researched in Natural Language Processing (NLP), primarily focusing on English and other resource-rich languages. This paper shifts the focus to GEC for a scarcely explored low-resource language, specifically Hindi, which presents unique challenges due to its intricate morphology and complex syntax. To address data resource limitations, this work explores various GEC data generation techniques. Our research introduces a carefully extracted and filtered, high-quality dataset, HiWikiEdits, which includes human-edited 8,137 instances sourced from Wikipedia, encompassing 17 diverse grammatical error types, with annotations performed using the ERRANT toolkit. Furthermore, we investigate Round Trip Translation (RTT) using diverse languages for synthetic Hindi GEC data generation, revealing that leveraging high-resource linguistically distant language for error generation outperforms mid-resource linguistically closer languages. Specifically, using English as a pivot language resulted in a 6.25% improvement in GLEU score compared to using Assamese or Marathi.",
    paperUrl: "https://aclanthology.org/2025.coling-main.406/",
    slidesUrl: "https://docs.google.com/presentation/d/1ZgaQL6C6N1yJTAw5Qal4Ecza7atn7oY8/edit?usp=sharing&ouid=115783687881154092892&rtpof=true&sd=true",
    tags: ["GEC", "Hindi NLP", "Low-Resource", "Dataset"],
  },
];
