import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

// React Icons
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaExternalLinkAlt,
} from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      name: "LinkedIn",
      link: portfolioConfig.socialLinks?.linkedin,
      icon: <FaLinkedin className="h-5 w-5" />,
    },
    {
      name: "GitHub",
      link: portfolioConfig.socialLinks?.github,
      icon: <FaGithub className="h-5 w-5" />,
    },
    {
      name: "Facebook",
      link: portfolioConfig.socialLinks?.facebook,
      icon: <FaFacebook className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      link: portfolioConfig.socialLinks?.twitter,
      icon: <FaTwitter className="h-5 w-5" />,
    },
    {
      name: "External",
      link: portfolioConfig.socialLinks?.external,
      icon: <FaExternalLinkAlt className="h-5 w-5" />,
    },
  ];

  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        const safeLink =
          itm.link && typeof itm.link === "string" && itm.link.trim() !== ""
            ? itm.link.trim()
            : "#";

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target={safeLink === "#" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              href={safeLink}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "text-[#2f7df4]",
              )}
              aria-label={itm.name}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
