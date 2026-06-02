import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVercel,
  SiHtml5,
  SiCss3,
  SiStreamlit,
  SiYoutube,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  vercel: {
    title: "Vercel",
    bg: "black",
    fg: "white",
    icon: <SiVercel />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },
  ibm_granite: {
    title: "IBM Granite 3.1",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold text-xs flex items-center justify-center">IG</span>,
  },
  ibm_docling: {
    title: "IBM Docling",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold text-xs flex items-center justify-center">ID</span>,
  },
  ibm_bee: {
    title: "IBM Bee Agent Framework",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold text-xs flex items-center justify-center">IB</span>,
  },
  langflow: {
    title: "Langflow",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold text-xs flex items-center justify-center">LF</span>,
  },
  kling_ai: {
    title: "Kling AI",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold text-xs flex items-center justify-center">KA</span>,
  },
  suno_ai: {
    title: "Suno AI",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold text-xs flex items-center justify-center">SA</span>,
  },
  davinci_resolve: {
    title: "DaVinci Resolve",
    bg: "black",
    fg: "white",
    icon: <span className="font-bold text-xs flex items-center justify-center">DR</span>,
  },
  youtube: {
    title: "YouTube",
    bg: "black",
    fg: "white",
    icon: <SiYoutube />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "eventhub",
    category: "WEB APPLICATION",
    title: "EventHub",
    src: "/eventhub.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.vercel,
      ],
    },
    live: "https://event-hub-gamma-black.vercel.app/",
    github: "https://github.com/ehvivek/EventHub",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center font-semibold">
            Events made easy
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            EventHub is a modern event management platform that simplifies event creation, RSVP tracking, guest management, and event discovery through an intuitive and responsive user experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 mb-8 font-mono space-y-2">
            <li>Create and manage public or private events from a centralized dashboard.</li>
            <li>Track RSVPs and manage guest participation in real time.</li>
            <li>Send custom event invitations and discover upcoming events.</li>
            <li>Fully responsive design optimized for desktop and mobile devices.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "anime-portfolio",
    category: "PERSONAL PORTFOLIO WEBSITE",
    title: "Anime Style Portfolio",
    src: "/AnimeStyledPortfolio.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [
        PROJECT_SKILLS.vercel,
      ],
    },
    live: "https://portfolio-beige-xi-28.vercel.app/",
    github: "https://github.com/ehvivek/Portfolio",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center font-semibold">
            Showcasing creativity through an anime-inspired digital experience
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            Anime Portfolio is a modern personal portfolio website featuring an immersive anime-inspired design, interactive UI elements, smooth animations, and a responsive user experience. The platform highlights projects, skills, experience, and professional achievements through a visually engaging interface.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 mb-8 font-mono space-y-2">
            <li>Anime-inspired hero section with immersive visuals and interactive elements.</li>
            <li>Showcases projects, technical skills, experience, and professional journey.</li>
            <li>Fully responsive design with smooth animations and modern UI/UX principles.</li>
            <li>Optimized for performance and accessibility across devices.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "vegaiq",
    category: "AI-POWERED FORMULA 1 ANALYTICS PLATFORM",
    title: "VEGAIQ",
    src: "/VEGAIQ.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.streamlit,
        PROJECT_SKILLS.ibm_granite,
      ],
      backend: [
        PROJECT_SKILLS.ibm_docling,
        PROJECT_SKILLS.ibm_bee,
        PROJECT_SKILLS.langflow,
      ],
    },
    live: "https://vegaiq.streamlit.app/",
    github: "https://github.com/ehvivek/VEGAIQ",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center font-semibold">
            Decoding the psychology behind every lap
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            VEGAIQ is an AI-powered Formula 1 analytics platform that combines race telemetry, team radio communications, synthetic biometric modeling, and IBM AI technologies to uncover the psychological story of a race. By transforming raw racing data into actionable insights, VEGAIQ enables fans to understand how stress, fatigue, decision-making, and race events influence driver performance.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 mb-8 font-mono space-y-2">
            <li>Analyze driver stress levels, mental fatigue, and decision quality throughout an entire race.</li>
            <li>Visualize psychological performance using telemetry data, race events, and team radio communications.</li>
            <li>Explore AI-generated race reports and insights powered by IBM Granite models.</li>
            <li>Understand how critical events such as Safety Cars, radio traffic, and race pressure impact driver performance.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "dust-of-snow",
    category: "2D ANIMATED POEM VISUALIZATION",
    title: "Dust of Snow",
    src: "/DUSTOFSNOW.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.kling_ai,
        PROJECT_SKILLS.suno_ai,
      ],
      backend: [
        PROJECT_SKILLS.davinci_resolve,
        PROJECT_SKILLS.youtube,
      ],
    },
    live: "https://www.youtube.com/watch?v=5jTjynCetgw",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-xl text-center font-semibold">
            Bringing Robert Frost’s classic poem to life through animation
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            Dust of Snow is a 2D animated adaptation of Robert Frost’s renowned poem, transforming literature into an engaging visual storytelling experience. The project combines AI-generated visuals, music, and professional video editing techniques to create an immersive short film that enhances the poem’s emotional impact.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6 mb-8 font-mono space-y-2">
            <li>Created a cinematic 2D animated interpretation of Dust of Snow using AI-assisted visual generation.</li>
            <li>Integrated AI-generated music and storytelling elements to create an engaging viewing experience.</li>
            <li>Applied professional video editing techniques to synchronize visuals, transitions, and audio seamlessly.</li>
          </ul>
        </div>
      );
    },
  }
];
export default projects;
