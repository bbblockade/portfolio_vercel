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
    "PyTorch",
    "Scikit-learn",
    "SQL",
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [

  ],

  
} as const;
