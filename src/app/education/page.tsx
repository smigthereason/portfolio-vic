import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

export default function EducationPage() {
  // Fixed component name (PascalCase)
  const { education } = portfolioConfig;

  if (!education || education.length === 0) {
    return (
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
        <Badge variant="secondary" className="gap-1.5 py-1">
          <Briefcase className="h-4 w-4" />
          Education
        </Badge>
        <p>No education entries found.</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <Briefcase className="h-4 w-4" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
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
              className="sm:w-1/4 font-rubik flex items-start justify-start sm:justify-evenly text-lg max-sm:text-base"
            >
              <span className="bg-primary/10 px-3 py-1 rounded-full text-sm font-medium">
                {edu.period}
              </span>
            </FramerWrapper>
            <FramerWrapper
              y={0}
              x={100}
              delay={0.35 + index * 0.1}
              className="relative sm:w-3/4 border-l-4 border-l-primary pl-6 pb-6 sm:pb-0"
            >
              <div className="text-2xl font-rubik max-sm:text-xl">
                {edu.degree}
              </div>
              <div className="text-lg text-muted-foreground mb-2">
                {edu.institution} • {edu.location}
              </div>
              <p className="font-poppins text-base w-full text-primary/80 max-sm:text-sm">
                {edu.description}
              </p>
            </FramerWrapper>
          </div>
        ))}
      </div>
    </div>
  );
}
