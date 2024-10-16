"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

{
  /* about section */
}
const about = {
  title: "About me",
  description:
    "I am a tenacious and hard working developer who is not afraid to take on challenges. With 2 years of experience, I have been constantly learning and bettering myself at coding with each project. Here is my resume for you to see all the details.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abhishek Chouhan",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 604-779-4947",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+",
    },
    {
      fieldName: "Email",
      fieldValue: "abhishekchouhannk@gmail.com",
    },
    {
      fieldName: "Residency",
      fieldValue: "BC, Canada",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages Spoken",
      fieldValue: "English, Hindi, Punjabi, French (really basic ;)",
    },
  ],
};

{
  /* experience data */
}
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem Ipsum Dolor Sit Amet",
  items: [
    {
      company: "Intelligent Project Solutions Ltd.",
      position: "Fullstack Developer",
      duration: "Sep 2023 - Dec 2023",
    },
    {
      company: "Data Annotation",
      position: "Contracted Coder/Data Annotator",
      duration: "Feb 2024 - Present",
    },
    {
      company: "PlaceSpeak Inc.",
      position: "Cirriculum Web Developer",
      duration: "May 2024 - June 2024",
    },
  ],
};

{
  /* Education Data */
}
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem Ipsum Dolor Sit Amet",
  items: [
    {
      institution: "British Columbia Institute of Technology",
      degree: "Computer Systems Tech Diploma",
      duration: "2022-2024",
    },
    {
      institution: "St. Peter's Academy",
      degree: "High School Diploma",
      duration: "2007-2021",
    },
  ],
};

{
  /* Skills */
}
const skills = {
  title: "My skills",
  description: "Lorem Ipsum Dolor Sit Amet",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:max-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          { /* content */}
          <div className="min-h-[70vh] w-full">
            { /* experience */}
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>

          </div>
        </Tabs>
      </div>

    </motion.div>
  );
};

export default Resume;
