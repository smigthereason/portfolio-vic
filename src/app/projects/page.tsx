"use client";

import React, { useState } from "react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import {
  Layers,
  ExternalLink,
  GitBranch,
  Activity,
  CheckCircle2,
  Cpu,
  ArrowUpRight,
  Compass,
  Code2,
  Image as ImageIcon,
} from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import Image from "next/image";

const projectsPage = () => {
  // Grab the direct data array from your configuration file
  const { projects } = portfolioConfig;
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden px-4 sm:px-6 lg:px-0">
      {/* Page Badge */}
      <Badge
        variant="secondary"
        className="gap-1.5 py-1 p-2 font-rubik tracking-wider text-xs"
      >
        <Layers className="h-4 w-4 text-[#2f7df4]" />
        Case Studies
      </Badge>

      {/* Hero Header */}
      <div className="flex flex-col gap-3 w-full">
        <Heading>My Projects</Heading>

        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-base sm:text-lg w-full text-white/60 leading-relaxed max-w-4xl">
            I build technical software systems wrapped in clean, high-end design
            structures. Select any entry from the directory block to read the
            technical walkthrough, architectural breakdowns, and problem-solving
            timelines behind each build.
          </p>
        </FramerWrapper>
      </div>

      {/* Main Content Split Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4 pb-12">
        {/* LEFT COLUMN: Project Selector Directory Sidebar (4 Columns) */}
        <div className="lg:col-span-4 flex flex-col gap-3 w-full">
          <div className="text-xs uppercase font-rubik font-semibold tracking-widest text-[#2f7df4] px-1 mb-1">
            Project Directory
          </div>
          {projects.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex flex-col gap-1.5 font-poppins relative overflow-hidden group ${
                activeProject === index
                  ? "bg-[#2f7df4] border-[#2f7df4] shadow-lg shadow-[#2f7df4]/20 translate-x-1"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <span className="font-semibold text-white tracking-wide text-sm sm:text-base">
                  {item.title}
                </span>
                <ArrowUpRight
                  className={`h-4 w-4 transition-transform duration-300 ${
                    activeProject === index
                      ? "text-white rotate-45"
                      : "text-white/40 group-hover:text-white"
                  }`}
                />
              </div>
              <span
                className={`text-xs line-clamp-1 font-light ${
                  activeProject === index ? "text-white/90" : "text-white/50"
                }`}
              >
                {item.subtitle || "Case Study Architecture"}
              </span>
            </button>
          ))}
        </div>

        {/* RIGHT COLUMN: The Immersive Case Study Display (8 Columns) */}
        <div className="lg:col-span-8 w-full">
          <FramerWrapper
            key={activeProject}
            y={20}
            x={0}
            delay={0.15}
            className="w-full"
          >
            <div className="w-full rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md p-6 sm:p-8 flex flex-col gap-8 shadow-2xl relative overflow-hidden">
              {/* Luxury radial backdrop ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2f7df4]/10 rounded-full blur-[100px] pointer-events-none" />

              {/* Case Study Editorial Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6 w-full">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-sm font-medium text-[#2f7df4] mt-1 tracking-wide uppercase font-rubik">
                    {project.subtitle || "Full-Stack System Deployment"}
                  </p>
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all hover:scale-105"
                      title="Source Code Repository"
                    >
                      <GitBranch className="h-4 w-4" />
                    </a>
                  )}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black font-semibold text-sm transition-all hover:bg-white/90 hover:scale-[1.02]"
                    >
                      Live Link <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white/40 font-medium">
                      Private Ecosystem
                    </span>
                  )}
                </div>
              </div>

              {/* Metric Breakdown Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-b border-white/10 pb-6 w-full text-xs sm:text-sm font-poppins">
                <div className="flex flex-col gap-1">
                  <span className="text-white/40 uppercase font-semibold tracking-wider text-[10px] font-rubik">
                    Role / Mandate
                  </span>
                  <span className="text-white font-medium">
                    {project.metrics?.role || "Software Engineer"}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white/40 uppercase font-semibold tracking-wider text-[10px] font-rubik">
                    Timeline
                  </span>
                  <span className="text-white font-medium">
                    {project.metrics?.timeline || "Production"}
                  </span>
                </div>
                <div className="flex flex-col gap-1 col-span-2 sm:col-span-1">
                  <span className="text-white/40 uppercase font-semibold tracking-wider text-[10px] font-rubik">
                    Classification
                  </span>
                  <span className="text-white font-medium">
                    {project.metrics?.category || "System Engineering"}
                  </span>
                </div>
              </div>

              {/* Premium Luxury Minimalist Asset Container */}
              {/* ==================== DYNAMIC IMAGE SECTION ==================== */}
              <div className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 relative overflow-hidden">
                {/* Single Landscape Image (Daima style) */}
                {project.image && !project.images && (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain object-top"
                      unoptimized
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-20" />
                    <p className="absolute bottom-4 left-4 right-4 text-xs text-white/80 tracking-wide line-clamp-1">
                      {project.imagePlaceholderText}
                    </p>
                  </div>
                )}

                {/* Multiple Portrait Images (SubZero style - iOS App) */}
                {project.images && project.images.length > 0 && (
                  <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {project.images.map((imgSrc, index) => (
                        <div
                          key={index}
                          className="relative aspect-[9/16] rounded-xl overflow-hidden"
                        >
                          <Image
                            src={imgSrc}
                            alt={`${project.title} screenshot ${index + 1}`}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-xs text-white/60 mt-4 tracking-wide">
                      {project.imagePlaceholderText || "App Screenshots"}
                    </p>
                  </div>
                )}

                {/* Fallback if no image */}
                {!project.image && !project.images && (
                  <div className="flex flex-col items-center justify-center py-16 text-white/40">
                    <ImageIcon className="h-10 w-10 mb-3" />
                    <p className="text-sm">No preview available</p>
                  </div>
                )}
              </div>

              {/* WALKTHROUGH STORY BLOCK 1: The Mission */}
              <div className="flex flex-col gap-3 font-poppins">
                <h3 className="text-sm uppercase font-rubik font-semibold tracking-wider text-white flex items-center gap-2">
                  <Compass className="h-4 w-4 text-[#2f7df4]" /> The Mission
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed antialiased">
                  {project.walkthrough?.mission || project.description}
                </p>
              </div>

              {/* WALKTHROUGH STORY BLOCK 2: Technical Deep-Dive */}
              {project.walkthrough?.deepDive && (
                <div className="flex flex-col gap-3 font-poppins">
                  <h3 className="text-sm uppercase font-rubik font-semibold tracking-wider text-white flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-[#2f7df4]" /> Architectural
                    Vault Analysis
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed antialiased">
                    {project.walkthrough.deepDive}
                  </p>
                </div>
              )}

              {/* Split Technical Constraint Panels */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full font-poppins">
                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col gap-2.5 hover:bg-white/[0.04] transition-colors">
                  <h4 className="text-xs uppercase font-rubik font-bold tracking-widest text-red-400 flex items-center gap-1.5">
                    <Activity className="h-3.5 w-3.5" /> Structural Obstacle
                  </h4>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    {project.caseStudy?.challenge ||
                      "Balancing complex state engines and ensuring fluid viewport latency scaling parameters."}
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col gap-2.5 hover:bg-white/[0.04] transition-colors">
                  <h4 className="text-xs uppercase font-rubik font-bold tracking-widest text-[#2f7df4] flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Engineering Victory
                  </h4>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    {project.caseStudy?.solution ||
                      "Decoupled nested global store instances and integrated hardware-accelerated transforms to bypass heavy DOM cycles."}
                  </p>
                </div>
              </div>

              {/* Infrastructure Tags Blueprint */}
              <div className="flex flex-col gap-3 font-poppins w-full">
                <h3 className="text-sm uppercase font-rubik font-semibold tracking-wider text-white flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-[#2f7df4]" /> Built Stack
                  Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {(project.caseStudy?.architecture || project.tags).map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-md font-medium border border-white/10 bg-white/5 text-white/90 hover:border-[#2f7df4] transition-colors duration-150"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default projectsPage;
