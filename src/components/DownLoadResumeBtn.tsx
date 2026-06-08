import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import HackerBtn from "./animation/HackerBtn";

function DownLoadResumeBtn() {
  const resumeUrl =
    "https://drive.google.com/file/d/1wgMyh92W4Xsl9IxFlwto3QE92n01ewi5/view?usp=drive_link";

  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <HackerBtn label="Download Resume" />
      </a>
    </div>
  );
}

export default DownLoadResumeBtn;
