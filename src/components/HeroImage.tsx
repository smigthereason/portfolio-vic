// import logo from "../../public/portfolioLogo.png";
// import Image from "next/image";

// const HeroImage = () => {
//   return (
//     <div className="flex items-center justify-center shrink-0">
//       <div
//         className="
//         relative
//         w-48 h-48
//         sm:w-56 sm:h-56
//         md:w-64 md:h-64
//         lg:w-[500px] lg:h-[500px]
//         rounded-full
//         ring-4 ring-[#2f7df4]
//         shadow-[0_0_24px_4px_rgba(47,125,244,0.3)]
//         overflow-hidden
//         shrink-0
//       "
//       >
//         <Image
//           src={logo}
//           alt="Victor Maina"
//           fill
//           loading="eager"
//           priority
//           unoptimized
//           className="object-cover object-top grayscale"
//         />
//       </div>
//     </div>
//   );
// };

// export default HeroImage;
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
          md:w-72 md:h-72
          lg:w-80 lg:h-80
          xl:w-[420px] xl:h-[420px]
          2xl:w-[480px] 2xl:h-[480px]
          rounded-full
          ring-4 ring-[#2f7df4]
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
          className="object-cover object-top grayscale"
        />
      </div>
    </div>
  );
};

export default HeroImage;
