import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import EducationComponent from "@/components/EducationComponent";
import SkillPageComponent from "@/components/SkillPageComponent";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  User2,
  Sparkles,
  Code2,
  Disc,
  GraduationCap,
  Briefcase,
  Music,
} from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const AboutPage = () => {
  const hobbies = portfolioConfig.about.hobbies;
  const { education } = portfolioConfig;
  const { skills } = portfolioConfig; // Pull raw structured objects directly

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-8 overflow-hidden px-4 sm:px-6 xl:px-8 py-2">
      {/* Page Badge */}
      <Badge
        variant="secondary"
        className="gap-1.5 py-1 text-xs tracking-wider font-rubik p-2"
      >
        <User2 className="h-3.5 w-3.5 text-primary-sky" />
        About me
      </Badge>

      {/* Hero Header */}
      <div className="flex flex-col gap-4 w-full">
        <Heading>
          {portfolioConfig.title} & UI/UX <br />
          <span className="text-transparent bg-clip-text bg-[#2f7df4]">
            Designer, Based In {portfolioConfig.about.personalInfo.nationality}
          </span>
        </Heading>
      </div>

      {/* Main Content Split Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pb-8">
        {/* Deep Narrative Bio Column */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <FramerWrapper y={0} x={-30} delay={0.1}>
            <div className="relative pl-4 border-l-2 border-primary-sky/40 text-base sm:text-lg leading-relaxed text-white/80 antialiased font-poppins flex flex-col gap-4">
              <p>
                I am a passionate{" "}
                <span className="text-[#2f7df4] font-medium">
                  Full-Stack Software Developer
                </span>{" "}
                and{" "}
                <span className="text-[#2f7df4] font-medium">
                  UI/UX Designer
                </span>{" "}
                dedicated to engineering immersive, high-end digital
                experiences. Bridging technical rigor with a deep eye for
                premium aesthetics, I focus on building applications that
                balance pixel-perfect alignment with powerful backend
                architecture.
              </p>
              <p>
                My engineering journey accelerated through an intensive software
                engineering program at{" "}
                <span className="text-[#2f7df4] font-medium">
                  Moringa School
                </span>
                , where I mastered full-stack systems, agile team workflows, and
                robust database models. Beyond clean application code, my
                creative instincts drive me as a professional music producer —
                crafting compositions and dynamic audio designs in FL Studio.
                This intersection of sound, structural logic, and clean
                interface systems forms the blueprint of everything I create.
              </p>
            </div>
          </FramerWrapper>
        </div>

        {/* Fast Facts Card */}
        <FramerWrapper y={30} x={0} delay={0.2} className="w-full">
          <div className="w-full rounded-xl p-5 border border-white/20 bg-white/10 backdrop-blur-md shadow-xl flex flex-col gap-4">
            <h3 className="text-sm uppercase font-rubik font-semibold tracking-wider text-white flex items-center gap-2">
              <Code2 className="h-4 w-4 text-[#2f7df4]" /> Fast Facts
            </h3>
            <div className="flex flex-col gap-3 text-sm font-poppins">
              <div className="flex justify-between items-center py-1.5 border-b border-border/10">
                <span className="text-white flex items-center gap-2">
                  <GraduationCap className="h-3.5 w-3.5 text-[#2f7df4]" />{" "}
                  Education
                </span>
                <span className="text-white/60 font-medium text-right">
                  Moringa School
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-border/10">
                <span className="text-white flex items-center gap-2">
                  <Briefcase className="h-3.5 w-3.5 text-[#2f7df4]" />{" "}
                  Frameworks
                </span>
                <span className="text-white/60 font-medium text-right">
                  Next.js, React Native, Swift
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-border/10">
                <span className="text-white flex items-center gap-2">
                  <Disc className="h-3.5 w-3.5 text-[#2f7df4]" /> Audio
                  Production
                </span>
                <span className="text-white/60 font-medium text-right">
                  FL Studio
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 ">
                <span className="text-white flex items-center gap-2">
                  <Music className="h-3.5 w-3.5 text-[#2f7df4]" /> Music
                </span>
                <span className="text-white/60 font-medium text-right">
                  Professional Producer
                </span>
              </div>
            </div>
          </div>
        </FramerWrapper>
      </div>

      {/* Hobbies / Interests Section */}
      <FramerWrapper className="block w-full mt-2" y={40} delay={0.3}>
        <div className="flex flex-col gap-6">
          <h2 className="gap-2.5 text-xl sm:text-2xl font-poppins text-primary font-semibold flex items-center group">
            <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary-sky animate-pulse" />
            <span className="relative text-white pb-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-12 after:bg-primary-sky transition-all duration-300">
              Personal Interests
            </span>
          </h2>

          {/* Hobbies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full pt-2">
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="flex gap-3 justify-start items-center flex-row text-sm sm:text-base border border-white/20 bg-white/10 backdrop-blur-md hover:bg-[#2f7df4] hover:border-[#2f7df4] p-3.5 rounded-lg transition-all duration-200 shadow-sm group"
              >
                <div className="h-6 w-6 rounded-md bg-white/10 flex items-center justify-center border border-white/20 group-hover:border-white/30 transition-colors">
                  <Sparkles className="h-3 w-3 text-[#2f7df4] group-hover:text-white transition-colors" />
                </div>
                <span className="font-poppins font-medium text-white/70 group-hover:text-white tracking-wide transition-colors">
                  {hobby}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FramerWrapper>

      {/* Education Section */}
      <FramerWrapper className="w-full mt-2" y={0} x={-100}>
        <EducationComponent education={education} />
      </FramerWrapper>

      {/* Skills Section — Passing the raw configuration structure cleanly */}
      <FramerWrapper className="w-full mt-2" y={0} x={-100}>
        <SkillPageComponent skills={skills} />
      </FramerWrapper>
    </div>
  );
};

export default AboutPage;
