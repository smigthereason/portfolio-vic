"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

// Simple Badge component
const Badge = ({ children, variant = "secondary", className = "" }: any) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
};

// Simple Heading component
const Heading = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-3xl font-bold">{children}</h1>;
};

// Animation wrapper component
const FramerWrapper = ({
  children,
  y = 0,
  x = 0,
  delay = 0,
  className = "",
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Education interface for type safety
interface Education {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
}

interface EducationComponentProps {
  education: Education[];
  title?: string;
  showHeading?: boolean;
  className?: string;
}

export default function EducationComponent({
  education,
  title = "My Education",
  showHeading = true,
  className = "",
}: EducationComponentProps) {
  if (!education || education.length === 0) {
    return (
      <div
        className={`h-full w-full relative flex flex-col items-start gap-5 overflow-hidden ${className}`}
      >
        <Badge variant="secondary" className="gap-1.5 py-1">
          <Briefcase className="h-4 w-4" />
          Education
        </Badge>
        <p>No education entries found.</p>
      </div>
    );
  }

  return (
    <div
      className={`h-full w-full relative flex flex-col items-start gap-5 overflow-hidden text-white ${className}`}
    >
      <h2 className="gap-2.5 text-xl sm:text-2xl font-poppins text-primary font-semibold flex items-center group">
        <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary-sky animate-pulse" />
        <span className="relative text-white pb-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:bg-primary-sky transition-all duration-300">
          Education
        </span>
      </h2>
      <div className="w-full h-fit flex flex-col gap-6">
        {education.map((edu, index) => (
          <div
            className="w-full h-fit flex flex-col sm:flex-row gap-4 sm:gap-0"
            key={index}
          >
            <FramerWrapper
              y={0}
              x={-100}
              delay={0.35 + index * 0.1}
              className="sm:w-1/6 font-rubik flex items-start justify-start sm:justify-left text-lg max-sm:text-base"
            >
              <span className="bg-primary/10 px-3 py-1 rounded-full text-sm font-medium">
                {edu.period}
              </span>
            </FramerWrapper>
            <FramerWrapper
              y={0}
              x={100}
              delay={0.35 + index * 0.1}
              className="relative sm:w-3/4 border-l-4 border-l-[#2f7df4] pl-6 pb-6 sm:pb-0"
            >
              <div className="text-2xl font-rubik max-sm:text-xl">
                {edu.degree}
              </div>
              <div className="text-lg text-[#2f7df4] mb-2">
                {edu.institution} • {edu.location}
              </div>
              <p className="font-poppins text-base w-full text-white/80 max-sm:text-sm">
                {edu.description}
              </p>
            </FramerWrapper>
          </div>
        ))}
      </div>
    </div>
  );
}
