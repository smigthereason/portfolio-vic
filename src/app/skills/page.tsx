import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const skillPage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden px-4 sm:px-6 lg:px-0">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>

      <div className="flex flex-col gap-3 w-full">
        <Heading>My Technical Experience/Skills.</Heading>

        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-base sm:text-lg md:text-xl w-full text-primary">
            Currently I am a fresher and I have a solid understanding of HTML5,
            CSS3, JS, TS and React, including responsive design principles. I
            specialize in building web applications and sites using JavaScript,
            TypeScript, React, Next.js & Node.
          </p>
        </FramerWrapper>

        {/* Programming Languages */}
        <FramerWrapper y={100} delay={0.3} className="block w-full">
          <h1 className="gap-2 text-xl sm:text-2xl font-poppins text-primary font-semibold flex text_underline relative mb-4">
            Programming Languages
          </h1>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
          </div>
        </FramerWrapper>

        {/* Frameworks/Libraries */}
        <FramerWrapper className="block w-full" y={100} delay={0.32}>
          <h1 className="gap-2 text-xl sm:text-2xl font-poppins text-primary font-semibold flex text_underline relative mb-4">
            Frameworks & Libraries
          </h1>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <SkillsFooter items={portfolioConfig.skills.frameworks} />
          </div>
        </FramerWrapper>

        {/* Tools & Technologies */}
        <FramerWrapper className="block w-full" y={100} delay={0.34}>
          <h1 className="gap-2 text-xl sm:text-2xl font-poppins text-primary font-semibold flex text_underline relative mb-4">
            Tools & Technologies
          </h1>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <SkillsFooter items={portfolioConfig.skills.tools} />
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default skillPage;
