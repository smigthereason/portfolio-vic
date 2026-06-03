import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const page = () => {
  const items = portfolioConfig.about.hobbies.map((hobby) => ({ hobby }));

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden px-4 sm:px-6 lg:px-0">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <User2 className="h-4 w-4" />
        About me
      </Badge>

      <div className="flex flex-col gap-5 w-full">
        <Heading>
          {portfolioConfig.title} And Web <br /> Developer, Based In{" "}
          {portfolioConfig.about.personalInfo.nationality}.
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className="font-poppins text-base sm:text-lg md:text-xl w-full text-primary">
            {portfolioConfig.about.bio}
          </p>
        </FramerWrapper>
      </div>

      <FramerWrapper
        className="w-full flex flex-row justify-between max-lg:flex-col gap-6"
        y={100}
        delay={0.3}
      >
        <Aboutfooter />
      </FramerWrapper>

      <FramerWrapper className="block w-full" y={100} delay={0.31}>
        <h1 className="gap-2 text-2xl sm:text-3xl font-poppins text-primary font-semibold flex icon_underline relative items-center">
          <Heart className="h-6 w-6 sm:h-8 sm:w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row flex-wrap justify-between gap-4 max-lg:flex-col max-lg:gap-3">
          {items.map((val, indx) => (
            <div
              key={indx}
              className="flex gap-2 justify-start items-center flex-row text-base sm:text-lg md:text-xl text-primary pt-3"
            >
              <Circle className="h-2 w-2 sm:h-3 sm:w-3" /> {val.hobby}
            </div>
          ))}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
