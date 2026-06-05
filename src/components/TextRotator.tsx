import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";

function TextRotator() {
  return (
    <div className="py-4 rounded-md flex justify-center items-center overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl text-white flex flex-row items-center flex-wrap justify-center sm:justify-start gap-x-2">
        {/* Static text - kept on one line */}
        <span className="whitespace-nowrap">
          I am a {portfolioConfig.title} &
        </span>

        {/* Rotating text - clipped window */}
        <span
          className="inline-flex overflow-hidden"
          style={{ height: "1.5em" }}
        >
          <ul
            className="flex flex-col font-rubik text-lg sm:text-2xl font-medium animate-text-slide"
            style={{ lineHeight: "1.5em" }}
          >
            {/* Duplicate the list for seamless loop */}
            {[
              ...portfolioConfig.skills.roles,
              portfolioConfig.skills.roles[0],
            ].map((role, index) => (
              <li
                key={index}
                className="text-[#2f7df4] whitespace-nowrap flex items-center"
                style={{ height: "1.5em" }}
              >
                {role}
              </li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
}

export default TextRotator;
