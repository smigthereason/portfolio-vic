"use client";

import React from "react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, PackagePlus } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const morePage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-6 overflow-hidden px-4 sm:px-6 lg:px-0">
      {/* Page Badge */}
      <Badge
        variant="secondary"
        className="gap-1.5 py-1 p-2 font-rubik tracking-wider text-xs"
      >
        <PackagePlus className="h-4 w-4 text-[#2f7df4]" />
        More
      </Badge>

      {/* Hero Header */}
      <div className="flex flex-col gap-3">
        <Heading>More</Heading>
        <p className="font-poppins text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed">
          Additional resources, tools, and links related to my work and
          experiments.
        </p>
      </div>

      {/* Content Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 pb-12">
        {portfolioConfig.moreLinks.map((item, index) => (
          <FramerWrapper
            key={index}
            className="w-full"
            y={30}
            delay={index * 0.05}
          >
            <div className="group h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-xl text-white tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-poppins text-sm text-white/70 leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Footer / Link */}
              <div className="pt-6 mt-auto">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#2f7df4] hover:text-white transition-colors group-hover:underline"
                >
                  Visit here
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </FramerWrapper>
        ))}
      </div>
    </div>
  );
};

export default morePage;
