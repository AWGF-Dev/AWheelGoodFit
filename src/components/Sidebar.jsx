import React from "react";

export default function Sidebar({ isOpen, activeHotspot, onSubtabClick, onCloseSidebar }) {
  return (
    <div
      className={`fixed top-20 left-0 h-full w-120 bg-white/55 border-r-3 border-gray-300/80 
                  backdrop-brightness-lg transform transition-transform duration-500 
                  ${isOpen ? "translate-x-0" : "-translate-x-full"} z-30`}
    >

      {/* Hotspot Title */}
      <div className="flex items-center gap-4 m-4">
        <div className="text-black flex-3 text-center tracking-wide text-3xl font-NSansJP tracking-wider font-bold p-4 bg-white border-3 rounded-sm border-black ">
          {activeHotspot?.label || "None selected"}
        </div>

        <div
          onClick={onCloseSidebar}
          className="justify-right flex-1 p-4 text-center bg-black border-2 border-rounded font-Pixelmono text-white text-3xl hover:bg-gray-700"
        >
          Close
        </div>
      </div>


      {/* Hotspot Overview */}
      {activeHotspot ? (
        <div className="text-black text-[22px] tracking-tight font-Rob px-8 mb-4">
          {activeHotspot?.overview || "No overview available"}
        </div>
      ) : (
           <p className="text-black font-Rob tracking-wider text-xl px-8 mb-4">No hotspot is currently selected.</p>
      )}

      {/* Optional buttons */}
      {activeHotspot?.links?.length > 0 && (
        <div className="flex flex-col px-4 space-y-2">
          {activeHotspot.links.map((link) => (
            <div
              key={link.id}
              onClick={() => onSubtabClick(link.id, link.page, true)}
              className="ml-4 px-4 py-2 text-xl w-fit font-Pixelmono text-center text-white bg-blue-400 rounded hover:bg-blue-300 transition-colors cursor-pointer"
            >
              {link.label} &gt;
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
