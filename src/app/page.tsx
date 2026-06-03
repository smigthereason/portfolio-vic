import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 px-4 sm:px-6 lg:px-0">
      {/* LEFT SIDE - Text, Social, Resume */}
      <FramerWrapper
        className="w-full lg:w-auto flex-1 flex flex-col justify-center items-center lg:items-start gap-4 text-center lg:text-left"
        y={0}
        x={-100}
      >
        <HeroTexts />
        <div className="h-fit w-full flex justify-center lg:justify-start gap-4">
          <SocialLinks />
        </div>
        <div className="flex justify-center lg:justify-start">
          <DownLoadResumeBtn />
        </div>
      </FramerWrapper>

      {/* RIGHT SIDE - Image (visible on all screen sizes) */}
      <FramerWrapper
        className="w-full lg:w-[47%] flex justify-center items-center mt-6 lg:mt-0"
        y={0}
        x={100}
      >
        <HeroImage />
      </FramerWrapper>

      {/* GitHub button remains fixed */}
      <GithubBtn />
    </div>
  );
}
