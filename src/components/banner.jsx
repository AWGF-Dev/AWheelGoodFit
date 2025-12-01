import React, { useRef, useState, useEffect } from "react";
import Volume from "./UI/Volume";
import { getAssetUrl } from "../utils/getAssetUrl";

export default function Banner({ activePage, handlePageSwitch, audioRef }) {
  const pages = ["page1", "page2", "page3", "page4", "page5"];
  const labels = ["Home", "Overview", "The Person", "Seating and Positioning", "The Wheelchair"];
  const navRefs = useRef([]);
  const [activeLeft, setActiveLeft] = useState(0);
  const [activeWidth, setActiveWidth] = useState(0);

  useEffect(() => {
    const index = pages.indexOf(activePage);
    const el = navRefs.current[index];
    if (el) {
      setActiveLeft(el.offsetLeft);
      setActiveWidth(el.offsetWidth);
    }
  }, [activePage]);

  return (
    <header className="w-screen h-20 tracking-widest bg-white shadow flex items-center px-10 justify-between border-b-3 border-gray-300 relative">
    {/* Logo */}
      <div className="z-10">
        <div className="text-4xl text-blue-800 pixel-bold tracking-ti font-Pixelmono">AWheelGoodFit</div>
      </div>

    {/* Right side wrapper */}
    <div className="flex items-center space-x-6">
        {/* Nav items container (relative for active box) */}
        <nav className="relative flex space-x-4">
        {/* Active box */}
        <div
            className="absolute top-0 h-full border-2 border-black bg-black/5  transition-all duration-300 ease-out"
            style={{
            width: activeWidth,
            transform: `translateX(${activeLeft}px)`,
            }}
        />

        {/* Nav items */}
        {labels.map((label, i) => (
            <div
            key={label}
            ref={(el) => (navRefs.current[i] = el)}
            className="relative group px-4 py-2 cursor-pointer select-none z-10"
            onClick={() => handlePageSwitch(pages[i])}
            >
            <div className={`text-black tracking-wide bg-transparent font-YakuHanJP font-bold cursor-pointer 
                            bg-left-bottom bg-gradient-to-r from-black to-black 
                            bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] 
                            transition-all duration-300 ease-out
                            ${activePage === pages[i] 
                            ? "bg-[length:0%_2px]"   // active page: full underline by default
                            : "bg-[length:0%_2px] group-hover:bg-[length:100%_2px]"} 
                        `}>
                {label}
            </div>
            </div>
        ))}
        </nav>

        {/* Volume */}
        <div className="ml-6 z-10">
        <Volume audioRef={audioRef} />
        </div>
    </div>
    </header>

  );
}
