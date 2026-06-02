"use client";

import React, { useEffect, useState } from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import bgImgDark from "../../bgnew.png";
import bgImgLight from "../../lightmodebg.png";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import { useTheme } from "@/components/theme-provider";

function MainPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const currentBgUrl = mounted && currentTheme === "light" ? bgImgLight.src : bgImgDark.src;

  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main 
        className={cn("bg-slate-100 dark:bg-transparent min-h-screen canvas-overlay-mode")}
        style={{
          backgroundImage: `url(${currentBgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
