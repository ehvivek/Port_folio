// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
  CANVA = "canva",
  PICSART = "picsart",
  HYPIC = "hypic",
  DAVINCI_RESOLVE = "davinci_resolve",
  CAPCUT = "capcut",
  FILMORA = "filmora",
  WORLDQUANT_BRAIN = "worldquant_brain",
  ALPHA_RESEARCH = "alpha_research",
  FACTOR_MODELING = "factor_modeling",
  BACKTESTING = "backtesting",
  QUANTITATIVE_FINANCE = "quantitative_finance",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript's overachieving cousin who's always flexing 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad,  still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "the chill pill for your frontend, it hits different! 🟢😌",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes hitting different fr fr 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "making your code not a whole mess, thank u next 🧹✨",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "package manager said 'I gotchu fam', period! 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "your app's ultimate wingman, but watch out, vendor lock-in vibes! 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "the grandpa of CMS, still rocking that cane 🧓👴",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "The best containerization! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "reverse proxy go zoom zoom, sheesh! 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "always extra, making everything more complicated, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "cloud computing but make it Google vibes, living rent free! ☁️🔥",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "exit? In this economy? Ight, imma head out! 🚪🏃",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "The triangle compony, helps you deploy and go touch grass! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.CANVA]: {
    id: 101, name: "canva", label: "Canva", shortDescription: "Graphic design platform",
    color: "#00C4CC", icon: "/canvalogo.webp"
  },
  [SkillNames.PICSART]: {
    id: 102, name: "picsart", label: "PicsArt", shortDescription: "Photo and video editor",
    color: "#181818", icon: "https://cdn.simpleicons.org/picsart"
  },
  [SkillNames.HYPIC]: {
    id: 103, name: "hypic", label: "Hypic", shortDescription: "Creative editing tool",
    color: "#181818", icon: "/hypiclogo.webp"
  },
  [SkillNames.DAVINCI_RESOLVE]: {
    id: 104, name: "davinci_resolve", label: "DaVinci Resolve", shortDescription: "Color correction and non-linear video editing",
    color: "#181818", icon: "https://cdn.simpleicons.org/davinciresolve"
  },
  [SkillNames.CAPCUT]: {
    id: 105, name: "capcut", label: "CapCut", shortDescription: "Video editor by Bytedance",
    color: "#181818", icon: "/capcutlogo.png"
  },
  [SkillNames.FILMORA]: {
    id: 106, name: "filmora", label: "Filmora", shortDescription: "Video editing software",
    color: "#181818", icon: "https://cdn.simpleicons.org/wondershare"
  },
  [SkillNames.WORLDQUANT_BRAIN]: {
    id: 107, name: "worldquant_brain", label: "WorldQuant BRAIN", shortDescription: "Alpha research platform",
    color: "#181818", icon: "/wqlogo.png" 
  },
  [SkillNames.ALPHA_RESEARCH]: {
    id: 108, name: "alpha_research", label: "Alpha Research", shortDescription: "Generating quantitative signals",
    color: "#181818", icon: "https://cdn.simpleicons.org/googleanalytics"
  },
  [SkillNames.FACTOR_MODELING]: {
    id: 109, name: "factor_modeling", label: "Factor Modeling", shortDescription: "Multi-factor financial models",
    color: "#181818", icon: "https://cdn.simpleicons.org/kaggle"
  },
  [SkillNames.BACKTESTING]: {
    id: 110, name: "backtesting", label: "Backtesting", shortDescription: "Testing trading strategies",
    color: "#181818", icon: "https://cdn.simpleicons.org/testinglibrary"
  },
  [SkillNames.QUANTITATIVE_FINANCE]: {
    id: 111, name: "quantitative_finance", label: "Quantitative Finance", shortDescription: "Financial engineering & math",
    color: "#181818", icon: "https://cdn.simpleicons.org/bitcoin"
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2022",
    endDate: "Present",
    title: "Web Developer",
    company: "Independent Projects & Freelance Development",
    description: [
      "Designed and developed modern, responsive web applications using contemporary frameworks and technologies.",
      "Built portfolio websites, dashboards, and custom web solutions with a strong focus on performance and user experience.",
      "Implemented scalable frontend architectures, interactive UI components, and seamless API integrations.",
      "Continuously explored emerging technologies and best practices to deliver high-quality digital products.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.REACT,
      SkillNames.TS,
      SkillNames.TAILWIND,
      SkillNames.NODEJS,
      SkillNames.GITHUB,
    ],
  },
  {
    id: 2,
    startDate: "Jan 2019",
    endDate: "Present",
    title: "Media & Creative Design",
    company: "Creative Media Production & Digital Design",
    description: [
      "Produced engaging video content for social media, personal brands, and digital platforms.",
      "Designed professional graphics, presentations, and visual assets for diverse audiences.",
      "Enhanced and retouched photographs while creating visually compelling digital content.",
      "Developed premium PowerPoint presentations, branding materials, and marketing creatives.",
      "Leveraged modern creative tools to streamline workflows and deliver high-quality visual experiences.",
    ],
    skills: [
      SkillNames.CANVA,
      SkillNames.PICSART,
      SkillNames.HYPIC,
      SkillNames.DAVINCI_RESOLVE,
      SkillNames.CAPCUT,
      SkillNames.FILMORA,
    ],
  },
  {
    id: 3,
    startDate: "April 2026",
    endDate: "Present",
    title: "Quantitative Alpha Research",
    company: "Quantitative Research & Alpha Development (WorldQuant BRAIN)",
    description: [
      "Developed and tested quantitative alpha signals on the WorldQuant BRAIN platform using data-driven research methodologies.",
      "Completed 600+ simulations and 30+ alpha submissions, focusing on signal robustness, performance, and risk-adjusted returns.",
      "Conducted factor analysis and explored market patterns to identify and refine potential alpha opportunities.",
    ],
    skills: [
      SkillNames.WORLDQUANT_BRAIN,
      SkillNames.ALPHA_RESEARCH,
      SkillNames.FACTOR_MODELING,
      SkillNames.QUANTITATIVE_FINANCE,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

