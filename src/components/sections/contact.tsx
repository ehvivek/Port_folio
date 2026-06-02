"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="flex justify-center z-[9999] mx-4">
        <Card className="w-full max-w-2xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl">Get In Touch</CardTitle>
            <CardDescription className="pt-4 text-lg">
              Feel free to reach out to me through any of the platforms below!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6 pb-12">
            <Link href={`mailto:${config.email}`} target="_blank" className="w-full sm:w-2/3">
              <Button className="w-full h-14 text-lg flex gap-3">
                <Mail className="w-6 h-6" /> Email Me
              </Button>
            </Link>
            <Link href={config.social.linkedin} target="_blank" className="w-full sm:w-2/3">
              <Button variant="outline" className="w-full h-14 text-lg flex gap-3">
                <Linkedin className="w-6 h-6" /> LinkedIn
              </Button>
            </Link>
            <Link href={config.social.github} target="_blank" className="w-full sm:w-2/3">
              <Button variant="outline" className="w-full h-14 text-lg flex gap-3">
                <Github className="w-6 h-6" /> GitHub
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
