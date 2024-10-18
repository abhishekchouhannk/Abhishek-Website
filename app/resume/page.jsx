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
  title: "About Me",
  desktopDescription: "I am a tenacious and hard working developer who is not afraid to take on challenges. With 2 years of experience, I have been constantly learning and bettering myself at coding with each project. Click through the sections on the left to see all the details. 👈",
  mobileDescription: "I am a tenacious and hard working developer who is not afraid to take on challenges. With 2 years of experience, I have been constantly learning and bettering myself at coding with each project. Click through the sections above to view all the details. ☝️",
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
      fieldValue: "2+ Years",
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
      fieldValue: `English, Hindi, Punjabi, French- learning :)`,
    },
  ],
};

{
  /* experience data */
}
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
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
  title: "My Education",
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
  title: "My Skills",
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
    { icon: <i className="devicon-typescript-plain"></i>, name: "TypeScript" },
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
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    { icon: <i className="devicon-c-plain"></i>, name: "C" },
    { icon: <i className="devicon-cplusplus-plain"></i>, name: "C++" },
    { icon: <i className="devicon-kotlin-plain"></i>, name: "Kotlin" },
    { icon: <i className="devicon-express-original"></i>, name: "Express" },
    { icon: <i className="devicon-bootstrap-plain"></i>, name: "Bootstrap" },
    { icon: <i className="devicon-mysql-plain"></i>, name: "MySQL" },
    { icon: <i className="devicon-postgresql-plain"></i>, name: "PostgreSQL" },
    { icon: <i className="devicon-firebase-plain"></i>, name: "Firebase" },
    { icon: <i className="devicon-mongodb-plain"></i>, name: "MongoDB" },
    { icon: <i className="devicon-django-plain"></i>, name: "Django" },
    { icon: <i className="devicon-git-plain"></i>, name: "Git" },
    { icon: <i className="devicon-github-plain"></i>, name: "GitHub" },

    { icon: <i className="devicon-rust-plain"></i>, name: "Rust" },
    { icon: <i className="devicon-elixir-plain"></i>, name: "Elixir" },
    { icon: <i className="devicon-ocaml-plain"></i>, name: "OCaml" },
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
import { Scroll } from "lucide-react";

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
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:max-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience content */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** Education content */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">
                            {item.institution}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.duration}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** Skills content */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ScrollArea className="h-[400px] mt-8">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-200">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/** about content */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p> */}
                <p className="block xl:hidden max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.mobileDescription}</p>
                <p className="hidden xl:block max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.desktopDescription}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

