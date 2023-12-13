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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
