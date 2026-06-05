"use client";
import React from "react";
import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon, Code2, Layers, Wrench, BarChart2 } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";

interface SkillItem {
  name: string;
  icon: string;
  img?: any;
  alt?: string;
}

interface SkillLevel {
  name: string;
  level: number;
  label: string;
}

interface SkillPageProps {
  skills: {
    programmingLanguages: SkillItem[];
    frameworks: SkillItem[];
    tools: SkillItem[];
    expertise?: SkillLevel[];
  };
  title?: string;
  showHeading?: boolean;
  className?: string;
}

const defaultExpertise: SkillLevel[] = [
  { name: "React / Next.js", level: 90, label: "Expert" },
  { name: "TypeScript", level: 85, label: "Advanced" },
  { name: "Node.js", level: 80, label: "Advanced" },
  { name: "HTML5 & CSS3", level: 95, label: "Expert" },
  { name: "JavaScript", level: 90, label: "Expert" },
  { name: "Git & Version Control", level: 80, label: "Advanced" },
];

const SectionHeading = ({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="h-7 w-7 rounded-md bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
      <Icon className="h-3.5 w-3.5 text-[#2f7df4]" />
    </div>
    <h2 className="text-lg sm:text-xl md:text-2xl font-poppins text-[#2f7df4] font-semibold text_underline relative">
      {children}
    </h2>
  </div>
);

const SkillPageComponent = ({
  skills,
  title = "My Technical Experience.",
  showHeading = true,
  className = "",
}: SkillPageProps) => {
  const expertise = skills.expertise ?? defaultExpertise;

  return (
    <div
      className={`h-full w-full relative flex flex-col items-start gap-5 overflow-hidden px-4 sm:px-6 lg:px-0 pb-12 ${className}`}
    >
      <h2 className="gap-2.5 text-xl sm:text-2xl font-poppins text-primary font-semibold flex items-center group">
        <LightbulbIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-sky animate-pulse" />
        <span className="relative text-white pb-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:bg-primary-sky transition-all duration-300">
          Technical Experience
        </span>
      </h2>

      <div className="flex flex-col gap-6 w-full">
        {/*
          Strict 2-Column Grid Layout on Desktop:
          - Forces exactly 50/50 horizontal split (lg:grid-cols-2) on large screens.
          - Large gap (gap-12 to gap-16) prevents overlapping.
        */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* LEFT COLUMN — Languages, Frameworks, Tools */}
          <div className="flex flex-col gap-8 w-full">
            {skills.programmingLanguages?.length > 0 && (
              <FramerWrapper y={100} delay={0.3} className="block w-full">
                <SectionHeading icon={Code2}>
                  Programming Languages
                </SectionHeading>
                {/* Fixed column constraints so icons don't bleed out of their half of the screen */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  <SkillsFooter items={skills.programmingLanguages} />
                </div>
              </FramerWrapper>
            )}

            {skills.frameworks?.length > 0 && (
              <FramerWrapper className="block w-full" y={100} delay={0.32}>
                <SectionHeading icon={Layers}>
                  Frameworks & Libraries
                </SectionHeading>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  <SkillsFooter items={skills.frameworks} />
                </div>
              </FramerWrapper>
            )}

            {skills.tools?.length > 0 && (
              <FramerWrapper className="block w-full" y={100} delay={0.34}>
                <SectionHeading icon={Wrench}>
                  Tools & Technologies
                </SectionHeading>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  <SkillsFooter items={skills.tools} />
                </div>
              </FramerWrapper>
            )}
          </div>

          {/* RIGHT COLUMN — Skills & Expertise sliders */}
          {expertise.length > 0 && (
            <FramerWrapper
              className="block w-full lg:sticky lg:top-8"
              y={100}
              delay={0.36}
            >
              <SectionHeading icon={BarChart2}>
                Skills & Expertise
              </SectionHeading>
              <div className="flex flex-col gap-3.5">
                {expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-center border border-white/20 bg-white/10 backdrop-blur-md p-3.5 rounded-lg shadow-sm"
                  >
                    {/* Icon */}
                    <div className="h-8 w-8 rounded-md bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                      <BarChart2 className="h-4 w-4 text-[#2f7df4]" />
                    </div>

                    {/* Name + bar */}
                    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <div className="flex justify-between items-center gap-2">
                        <span className="font-poppins text-sm font-medium text-white truncate">
                          {skill.name}
                        </span>
                        <span className="font-poppins text-xs font-semibold text-white/60 shrink-0">
                          {skill.label}
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#2f7df4] transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FramerWrapper>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillPageComponent;
