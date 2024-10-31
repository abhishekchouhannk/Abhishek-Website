"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Project Progress Tracking Tool",
    description: "Developed a custom web app for Intelligent Project Solutions Ltd. to streamline project tracking by replacing Excel-based methods. This tool provides employees with an efficient way to monitor progress, leveraging a PostgreSQL database with a NextJS/React frontend.",
    stack: [
      { name: "Html" },
      { name: "TailwindCSS" },
      { name: "Typescript" },
      { name: "React" },
      { name: "NextJS" },
      { name: "PostgreSQL"},
      { name: "Tremor Graphing Library"}
    ],
    image: "/assets/work/thumb1.png",
    live: "https://3800-ips-project.vercel.app/projects",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Gamified UI Revamp for PlaceSpeak",
    description: "Enhanced user engagement for PlaceSpeak with a complete UI revamp and gamification features. Integrated badge awarding logic within a new Django REST API, created a SQL database, and debugged backend issues to provide seamless updates for the NextJS/React frontend.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind CSS" },
      { name: "Typescript" },
      { name: "React" },
      { name: "NextJS" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://placespeak.towaquimbayo.com/login",
    github: "",
  },
  {
    num: "03",
    category: "AI-Enhanced Web App",
    title: "ŌRA- AI ToDo List",
    description: "Award-winning web app built during QDS-Hacks '24 at BCIT to help students manage coursework efficiently. Led the AI development by creating an API powered by OpenAI’s GPT-3.5, ensuring seamless integration of intelligent features that enhance user experience.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "NextJS" },
      { name: "OpenAI API" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://qds-hacks-2024.onrender.com/",
    github: "https://github.com/abhishekchouhannk/ORA-qds_hacks_2024",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get Current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/** outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 captialize">
                {project.title}
              </h2>
              {/** project description */}
              <p className="text-white/60">{project.description}</p>
              {/** project stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* don't add the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/** border */}
              <div className="border border-white/20"></div>
              {/** buttons */}
              <div className="flex items-center gap-4 justify-between">
                {/** live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/** github project button */}
                <Link href={project.github || "#"} passHref>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className={`w-[70px] h-[70px] rounded-full flex justify-center items-center group ${
                          project.github
                            ? "bg-white/5 text-white"
                            : "bg-gray-400 cursor-not-allowed text-gray-300"
                        }`}
                        disabled={!project.github}
                      >
                        <BsGithub
                          className={`text-3xl ${
                            project.github ? "group-hover:text-accent" : ""
                          }`}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {project.github
                            ? "Github Repository"
                            : "No github access."}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPreview={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/** overlay */}
                      <div></div>
                      {/** Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="project image here"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/** slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
