import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const projectsPage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden px-4 sm:px-6 lg:px-0">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>

      <div className="flex flex-col gap-3 w-full">
        <Heading>My Projects</Heading>

        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-base sm:text-lg w-full text-primary">
            I love to Build Cool Projects. Here, you&apos;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className="w-full flex flex-row flex-wrap gap-4 md:gap-3 max-lg:flex-col">
        {portfolioConfig.projects.map((val, indx) => (
          <ProjectCards key={indx} value={val} num={indx} />
        ))}
      </div>
    </div>
  );
};

export default projectsPage;
