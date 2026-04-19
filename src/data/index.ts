import { ExperienceItem, TechItem, NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact me", href: "#contact" },
];

export const experienceItems: ExperienceItem[] = [
  {
    period: "Mar 2025 — Present",
    company: "Spent (SpentNow, Spent Business, Giftas, Boloso)",
    role: "Backend Developer",
    type: "Remote",
    bullets: [
      "Maintain and enhance backend systems powering live fintech platforms serving real users.",
      "Develop and ship features using Laravel, Inertia.js, and Filament.",
      "Optimize transaction-based systems for performance, reliability, and data integrity.",
      "Collaborate in Agile teams to deliver secure production updates.",
      "Support financial workflows across consumer and business-facing products.",
    ],
  },
  {
    period: "Oct 2023 — Dec 2025",
    company: "Aptiw Ltd (Clientforce)",
    role: "Full-Stack Developer",
    type: "Remote",
    bullets: [
      "Built and maintained SaaS applications using Laravel, Express.js, and GraphQL.",
      "Developed frontend interfaces using Next.js and Vue.js.",
      "Designed scalable REST and GraphQL APIs.",
      "Implemented authentication systems and role-based access control.",
      "Architected backend services supporting enterprise clients.",
    ],
  },
  {
    period: "Sept 2023 — Oct 2023",
    company: "HNG Internship",
    role: "Full-Stack Developer",
    type: "Remote",
    bullets: [
      "Designed database schemas and API specifications for collaborative projects.",
      "Built backend features using Laravel.",
      "Worked within an Agile team environment using Linear.",
      "Delivered production-ready features under tight deadlines.",
    ],
  },
  {
    period: "Dec 2022 — Apr 2023",
    company: "Internet Brands (HGM Team – The Car Connection)",
    role: "Full Stack Developer (Contract)",
    type: "USA · Remote",
    bullets: [
      "Developed and maintained enterprise web applications using Zend Framework and JavaScript.",
      "Contributed to production features and technical documentation.",
      "Collaborated with distributed engineering teams in a large-scale organization.",
      "Worked on high-traffic automotive platforms.",
    ],
  },
  {
    period: "Feb 2021 — Sept 2022",
    company: "New Devz",
    role: "Project Manager / Full Stack Developer",
    type: "Nigeria",
    bullets: [
      "Led delivery of 10+ web projects from conception to deployment.",
      "Built fintech applications integrating Paystack and Flutterwave payment systems.",
      "Developed backend microservices using ASP.NET Core.",
      "Mentored developers and managed Agile workflows.",
      "Oversaw architecture decisions and production releases.",
    ],
  },
];

export const techStack: TechItem[] = [
  { line: 1, name: "laravel", color: "#ff4433" },
  { line: 2, name: "react.js", color: "#61dafb" },
  { line: 3, name: "vue />" },
  { line: 4, name: "next.js", color: "#ffffff" },
  { line: 5, name: "node.js", color: "#4ade80" },
  { line: 6, name: "tailwind //", color: "#38bdf8" },
  { line: 7, name: "GraphQL" },
  { line: 8, name: "shadcn/ui" },
  { line: 9, name: "...and many more //" },
  { line: 10, name: "tailwind" },
];