import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  iitb_logo,
  vnit_logo,
  gautam_logo,
  jpmc_logo,
  cfilt_logo,
  earlysalary_logo,
  linuximg,
  pythonimg,
  tensorflowimg,
  pytorchimg,
  coling_2025_logo,
  emnlp_2025_logo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experiences",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "tech",
    title: "Technologies & Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Computer Science Student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Linux",
    icon: linuximg,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Python",
    icon: pythonimg,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },

  {
    name: "PyTorch",
    icon: pytorchimg,
  },
  {
    name: "TensorFlow",
    icon: tensorflowimg,
  },
];

const experiences = [
  {
    title: "Research Student",
    company_name: "CFILT - IIT Bombay",
    icon: cfilt_logo,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Learn and implement the latest technologies in the field of Natural Language Processing and Deep Learning.",
      "Developing and maintaining web applications for NLP Tools at IIT Bombay.",
    ],
  },

  {
    title: "Software Engineer 1",
    company_name: "JP Morgan Chase & Co.",
    icon: jpmc_logo,
    iconBg: "#383E56",
    date: "August 2022 - July 2023",
    points: [
      "Developing and maintaining Big Data applications using hadoop, spark and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Conducting knowledge sharing sessions on Big Data, Hadoop-Spark Ecosystem.",
      "Contributed in Designing and developing a Big Data application.",
      "SEP (Software Engineering Program) Quaterly Award Winner for High performence.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Early Salary",
    icon: earlysalary_logo,
    iconBg: "#E6DEDD",
    date: "May 2021 - July 2021",
    points: [
      "Full stack Developer ( Intern )",
      "Developing and maintaining an internal web application using React.js and Spring Boot.",
      "Collaborating with cross-functional teams including designers and other developers to create the website.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const educations = [
  {
    title: "M.Tech - Computer Science",
    institute_name: "IIT Bombay",
    icon: iitb_logo,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "M.Tech Student in Department Of Computer Science at IIT Bombay.",
      "Expanding my knowledge in the field of Machine Learning, Deep Learning and Natural Language Processing.",
      "Research Student at CFILT - IIT Bombay.",
      "Participatinig in cultural activities and sports at IIT Bombay.",
    ],
  },
  {
    title: "B.Tech - Computer Science",
    institute_name: "VNIT Nagpur",
    icon: vnit_logo,
    iconBg: "#383E56",
    date: "July 2018 - May 2022",
    points: [
      "B.Tech Student in Department Of Computer Science at IIT Bombay.",
      "Gained Knowledge in the field of Computer Science and Engineering.",
      "Gained Knowledge and Experience in CS Fundamentals, Data Structures and Algorithms, Artificial Intelligence.",
      "Learned languages like C, C++, Java, Python, JavaScript, Scala.",
      "Learned and worked on various technologies/framewords like React.js, Node.js, MongoDB, Express.js, etc.",
      "Also learned about various technologies like Git, Docker, Machine Learning, Deep Learning, Natural Language Processing, Blockchain, Cryptocurrency etc.",
    ],
  },
  {
    title: "12th - Science",
    institute_name: "Gautam International Sr. Sec. School",
    icon: gautam_logo,
    iconBg: "#383E56",
    date: "2017",
    points: [
      "Learned about various subjects like Physics, Chemistry, Mathematics.",
      "Got intrested in Mathematics and Computer Science.",
    ],
  },
  {
    title: "10th - Science",
    institute_name: "Gautam International Sr. Sec. School",
    icon: gautam_logo,
    iconBg: "#383E56",
    date: "2015",
    points: [
      "Learned about various subjects like Physics, Chemistry, Mathematics, Biology, English, Hindi, Social Science.",
      "Got intrested in Physics and Mathematics.",
    ],
  },
];


const publications = [
  {
    title: "IndiGEC: Multilingual Grammar Error Correction for Low-Resource Indian Languages",
    venue: "EMNLP 2025",
    abstract: "Grammatical Error Correction (GEC) for low-resource Indic languages faces significant challenges due to the scarcity of annotated data. In this work, we introduce the Mask-Translate&Fill (MTF) framework, a novel approach for generating high-quality synthetic data for GEC using only monolingual corpora. MTF leverages a machine translation system and a pretrained masked language model to introduce synthetic errors and tries to mimic errors made by second-language learners. Our experimental results on English, Hindi, Bengali, Marathi, and Tamil demonstrate that MTF consistently outperforms other monolingual synthetic data generation methods and achieves performance comparable to the Translation Language Modeling (TLM)-based approach, which uses a bilingual corpus, in both independent and multilingual settings. Under multilingual training, MTF yields significant improvements across Indic languages, with particularly notable gains in Bengali and Tamil, achieving +1.6 and +3.14 GLEU over the TLM-based method, respectively. To support further research, we also introduce the IndiGEC Corpus, a high-quality, human-written, manually validated GEC dataset for these four Indic languages, comprising over 8,000 sentence pairs with separate development and test splits.",
    url: "https://aclanthology.org/2025.emnlp-main.1139/",
    author: "Ujjwal Sharma and Pushpak Bhattacharyya",
    booktitle: "Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing",
    logo: emnlp_2025_logo,
    date: "Nov, 2025",
    iconBg: "#383E56",
    place: "Abu Dhabi"
  },
   {
    title: "Hi-GEC: Hindi Grammar Error Correction in Low Resource Scenario",
    venue: "COLING 2025",
    abstract: "Automated Grammatical Error Correction (GEC) has been extensively researched in Natural Language Processing (NLP), primarily focusing on English and other resource-rich languages. This paper shifts the focus to GEC for a scarcely explored low-resource language, specifically Hindi, which presents unique challenges due to its intricate morphology and complex syntax. To address data resource limitations, this work explores various GEC data generation techniques. Our research introduces a carefully extracted and filtered, high-quality dataset, HiWikiEdits, which includes human-edited 8,137 instances sourced from Wikipedia, encompassing 17 diverse grammatical error types, with annotations performed using the ERRANT toolkit. Furthermore, we investigate Round Trip Translation (RTT) using diverse languages for synthetic Hindi GEC data generation, revealing that leveraging high-resource linguistically distant language for error generation outperforms mid-resource linguistically closer languages. Specifically, using English as a pivot language resulted in a 6.25% improvement in GLEU score compared to using Assamese or Marathi. Finally, we also investigate the neural model-based synthetic error-generation technique and show that it achieves comparable performance to other synthetic data generation methods, even in low-resource settings.",
    url: "https://aclanthology.org/2025.coling-main.406/",
    author: "Ujjwal Sharma and Pushpak Bhattacharyya",
    booktitle: "Proceedings of the 31st International Conference on Computational Linguistics",
    logo: coling_2025_logo,
    data: "Jan, 2025",
    iconBg: "#383E56",
    place: "Suzhou, China"
  }

]






const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  educations,
  testimonials,
  projects,
};
