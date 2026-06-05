"use client";

import { cn } from "@/lib/utils";
import { FolderGit2, HomeIcon, Mail, MoreHorizontal, User } from "lucide-react";
import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/animation/DockAnimation";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const data = [
    { title: "Home", icon: <HomeIcon className="h-full w-full" />, href: "/" },
    {
      title: "Projects",
      icon: <FolderGit2 className="h-full w-full" />,
      href: "/projects",
    },
    {
      title: "About",
      icon: <User className="h-full w-full" />,
      href: "/about",
    },
    {
      title: "Contact Me",
      icon: <Mail className="h-full w-full" />,
      href: "/contact",
    },
    {
      title: "More",
      icon: <MoreHorizontal className="h-full w-full" />,
      href: "/more",
    },
  ];

  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Force visibility if at or near the very top (handles iOS/iPad rubber-banding bounce)
      if (currentScrollY <= 10) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // 2. Check direction: Hide on scroll down, show immediately on scroll up
      if (currentScrollY > lastScrollY.current) {
        setVisible(false); // Scrolling down
      } else {
        setVisible(true); // Scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "fixed bottom-5 right-0 left-0 px-0 sm:px-5 m-auto w-full sm:w-fit bg-transparent z-[+9999999] transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-10 pointer-events-none",
      )}
    >
      <Dock className="items-end pb-3 bg-[#6c6e70]/50 backdrop-blur-sm rounded-full">
        {data.map((item, idx) => (
          <Link href={item.href || "/"} key={idx}>
            <DockItem
              className={cn(
                "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",
                pathname === item.href &&
                  "bg-gray-100 !border !border-primary-sky",
              )}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon
                className={cn(pathname === item.href && "text-[#2f7df4]")}
              >
                {item.icon}
              </DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
};

export default Navbar;
// "use client";

// import { cn } from "@/lib/utils";
// import { FolderGit2, HomeIcon, Mail, MoreHorizontal, User } from "lucide-react";
// import {
//   Dock,
//   DockIcon,
//   DockItem,
//   DockLabel,
// } from "@/components/animation/DockAnimation";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//   const data = [
//     { title: "Home", icon: <HomeIcon className="h-full w-full" />, href: "/" },
//     {
//       title: "Projects",
//       icon: <FolderGit2 className="h-full w-full" />,
//       href: "/projects",
//     },
//     {
//       title: "About",
//       icon: <User className="h-full w-full" />,
//       href: "/about",
//     },
//     {
//       title: "Contact Me",
//       icon: <Mail className="h-full w-full" />,
//       href: "/contact",
//     },
//     {
//       title: "More",
//       icon: <MoreHorizontal className="h-full w-full" />,
//       href: "/more",
//     },
//   ];

//   const [visible, setVisible] = useState(true);
//   const [mounted, setMounted] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     setMounted(true);

//     // Only apply scroll hide/show behavior on mobile (< 768px)
//     const handleScroll = () => {
//       if (window.innerWidth >= 768) {
//         setVisible(true); // Always show on tablet and desktop
//         return;
//       }

//       const currentScrollY = window.scrollY;

//       if (currentScrollY <= 30) {
//         setVisible(true);
//         return;
//       }

//       // Hide only when scrolling down on mobile
//       if (currentScrollY > 80) {
//         setVisible(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     window.addEventListener("resize", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleScroll);
//     };
//   }, []);

//   if (!mounted) return null;

//   return (
//     <div
//       className={cn(
//         "fixed z-[999999] transition-all duration-300",
//         // Better bottom spacing for iPad + safe area
//         "bottom-6 sm:bottom-5 md:bottom-6",
//         "left-1/2 -translate-x-1/2",
//         "px-4",
//         // Always visible on iPad Pro and desktop
//         visible
//           ? "opacity-100 translate-y-0 pointer-events-auto"
//           : "opacity-0 translate-y-8 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto",
//       )}
//     >
//       <Dock className="items-end pb-3 bg-[#6c6e70]/60 backdrop-blur-md rounded-full border border-white/10">
//         {data.map((item, idx) => (
//           <Link href={item.href} key={idx}>
//             <DockItem
//               className={cn(
//                 "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800",
//                 pathname === item.href &&
//                   "bg-white !border !border-[#2f7df4] shadow-md",
//               )}
//             >
//               <DockLabel>{item.title}</DockLabel>
//               <DockIcon
//                 className={cn(pathname === item.href && "text-[#2f7df4]")}
//               >
//                 {item.icon}
//               </DockIcon>
//             </DockItem>
//           </Link>
//         ))}
//       </Dock>
//     </div>
//   );
// };

// export default Navbar;
