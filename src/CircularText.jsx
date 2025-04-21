"use client";

import React from "react";

const CircularText = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-60 h-60">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="
                M 150,150
                m -100,0
                a 100,100 0 1,1 200,0
                a 100,100 0 1,1 -200,0
              "
            />
          </defs>
          <g className="animate-spin-slow origin-center">
            <text className="fill-black text-[14px]  uppercase leading-loose tracking-[3.7px]">
              <textPath href="#circlePath">
                THIRTYSIXSTUDIO — FOR ALL THINGS DIGITAL PRODUCTION —
              </textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CircularText;
