"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react=icons/si";

{ /* about section */}
const about = {
  title: "About me",
  description:
    "I am a tenacious and hard working developer who is not afraid to take on challenges. With 2 years of experience, I have been constantly learning and bettering myself at coding with each project. Here is my resume for you to see all the details.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abhishek Chouhan"
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 604-779-4947"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+"
    },
    {
      fieldName: "Email",
      fieldValue: "abhishekchouhannk@gmail.com"
    },
    {
      fieldName: "Residency",
      fieldValue: "BC, Canada"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages Spoken",
      fieldValue: "English, Hindi, Punjabi, French (really basic ;)"
    },
  ]
};

{ /* experience data */}
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem Ipsum Dolor Sit Amet",
  items: [
    {
      company: "Intelligent Project Solutions Ltd.",
      position: "Fullstack Developer",
      duration: "Sep 2023 - Dec 2023"
    },
    {
      company: "Data Annotation",
      position: "Contracted Coder/Data Annotator",
      duration: "Feb 2024 - Present"
    },
    {
      company: "PlaceSpeak Inc.",
      position: "Cirriculum Web Developer",
      duration: "May 2024 - June 2024"
    }
  ]
}

const Resume = () => {
  return <div>Resume</div>;
};

export default Resume;
