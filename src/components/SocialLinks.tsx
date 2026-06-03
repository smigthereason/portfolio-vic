import { cn } from "@/lib/utils";
import {
  Facebook,
  Linkedin,
  Twitter,
  ExternalLink,
  Github,
} from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const SocialLinks = () => {
  const links = [
    {
      name: "LinkedIn",
      link: portfolioConfig.socialLinks?.linkedin,
      icon: <Linkedin />,
    },
    {
      name: "GitHub",
      link: portfolioConfig.socialLinks?.github,
      icon: <Github />,
    },
    {
      name: "Facebook",
      link: portfolioConfig.socialLinks?.facebook,
      icon: <Facebook />,
    },
    {
      name: "Twitter",
      link: portfolioConfig.socialLinks?.twitter,
      icon: <Twitter />,
    },
    {
      name: "External",
      link: portfolioConfig.socialLinks?.external,
      icon: <ExternalLink />,
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
              )}
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
