import logo from "../../public/portfolioLogo.png";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="flex items-center justify-center shrink-0">
      <div
        className="
        relative
        w-48 h-48
        sm:w-56 sm:h-56
        md:w-64 md:h-64
        lg:w-[500px] lg:h-[500px]
        rounded-full
        ring-4 ring-[#2f7df4]
        ring-offset-4 ring-offset-white
        shadow-[0_0_24px_4px_rgba(47,125,244,0.3)]
        overflow-hidden
        shrink-0
      "
      >
        <Image
          src={logo}
          alt="Victor Maina"
          fill
          loading="eager"
          priority
          unoptimized
          className="object-cover object-top"
        />
      </div>
    </div>
  );
};

export default HeroImage;
