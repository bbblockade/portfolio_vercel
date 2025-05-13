import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Jiqiang Chen",
  initials: "JC",
  url: "https://bbblockade.io",
  location: "Melbourne, Australia",
  locationLink: "https://www.google.com/maps/place/Melbourne",
  description:
    "Engineer, problem-solver, and curious mind. I build end-to-end systems—from theoretical models to fully deployed applications.",
  summary:
  "I specialize in machine learning with a strong foundation in data science and mathematics. I’ve applied ML to real-world challenges, with extensive experience in both classical machine learning and deep learning. Beyond designing models, I’m also deeply interested and experienced in the engineering side—from backend and frontend development to CI/CD and deployment. I don’t just build models—I enjoy delivering end-to-end products.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Linux",
    "Git",
    "PyTorch",
    "PySpark",
    "Pandas",
    "Scikit-learn",
    "SQL",
    "MLflow",
    "FastAPI",
    "Docker",
    "CI/CD",
    "Azure",
    "Next.js"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chenjiqiang0305@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bbblockade",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jiqiang-chen-47583a28a/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:chenjiqiang0305@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "University of Melbourne",
      href: "https://unimelb.edu.au",
      badges: [],
      location: "Parkville, Melbourne, Australia",
      title: "Teaching Assistant",
      logoUrl: "/unimelb.svg",
      start: "Feb 2025",
      end: "Now",
      description: "Assisting in teaching undergraduate mathematics and data science subjects, including explaining concepts, supporting students, and facilitating tutorials."
    },
    {
      company: "Agriculture Victoria Research",
      href: "https://agriculture.vic.gov.au",
      location: "Boroondara, Melbourne, Australia",
      title: "AI/ML Intern",
      logoUrl: "/avr.png",
      start: "Jan 2025",
      end: "April 2025",
      description: "Built and deployed ML-based anomaly detection for smart hives using multimodal data, created dashboards for beekeepers, and delivered validated solutions in collaboration with Mildura Smart Farm."
    },
  
      

      
   ],
  education: [
    {
      school: "University of Melbourne",
      href: "https://unimelb.edu.au",
      degree: "Master of Data Science",
      logoUrl: "/unimelb.svg",
      start: "2023",
      end: "2025",
      description: "Grade: H1(80.9), Computer vision reserach student with Dr. Mingming Gong"
    },
    {
      school: "University of Melbourne",
      href: "https://unimelb.edu.au",
      degree: "Bachelor of Science, Data Science",
      logoUrl: "/unimelb.svg",
      start: "2020",
      end: "2022",
      description: "Grade: H1(80.7), Focused on mathematics, statistics, and programming."
    },
    {
      school: "Univerity high school",
      href: "https://unihigh.vic.edu.au",
      degree: "VCE",
      logoUrl: "/Unihighlogo.jpg",
      start: "2017",
      end: "2019",
      description: "ATAR: 97.3"
    },

  
  ],
  projects: [
    {
      title: "Fraud Detection",
      href: "https://github.com/bbblockade/Fraud-detection--deep-learning",
      dates: "Apr 2024 - May 2024",
      active: true,
      description:
        "Led a team of three to build a deep learning model for fraud detection, achieving state-of-the-art accuracy on a large dataset. Ranked first out of 300+ students in the course project.",
      technologies: [
        "PyTorch",
        "Scikit-learn",
        "LightGBM",
        "LSTM",
        "CNN",
        "Domain Adaptation",
        "Classification",
        "Deep Learning"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/bbblockade/Fraud-detection--deep-learning",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project/kaggle_fraud.png", 
    }
    

  ],
  hackathons: [

  ],

  
} as const;
