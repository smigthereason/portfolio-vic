import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const GithubBtn = () => {
  return (
    <Link
      href={"https://github.com/smigthereason"}
      target="blank"
      className=" animate-pulse absolute left-0 bottom-16 sm:bottom-5 flex rounded-r-full justify-center items-center gap-2 z-50 w-fit h-fit p-2 shadow-md  border-y border-r  border-black hover:bg-primary hover:text-white hover:animate-none "
    >
      <FaGithub />
      <span className="font-rubik text-2xl max-sm:text-xl">Github</span>
    </Link>
  );
};

export default GithubBtn;
