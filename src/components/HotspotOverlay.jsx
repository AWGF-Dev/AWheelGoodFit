import React from 'react';
import { Html } from '@react-three/drei';

export default function HotspotOverlay({ hotspots, onHotspotClick, activeHotspot, showAllLabels }) {
  const portal = document.getElementById('overlay-root');

  return (
    <>
      {hotspots.map((hotspot) => {
        const isActive = activeHotspot?.id === hotspot.id;
        const anyActive = !!activeHotspot;
        const distance = hotspot.distance;
        
          // Decide opacity based on active state
        let circleOpacity = 1;
        if (anyActive) {
          circleOpacity = isActive ? 0.2 : 0.2; // active vs others
        }

        return (
          <Html
            key={hotspot.id}
            position={hotspot.position}
            distanceFactor={distance}
            portal={portal}
            wrapperClass="drei-html-container"
            className="drei-html-content"
          >
            <div className="relative flex flex-col items-center group">

              {/* Label above hotspot */}
              <div
                className={`
                  absolute bottom-full mb-2
                  font-NSansJP text-black shadow-lg
                  pointer-events-none whitespace-nowrap text-center
                  ${
                    showAllLabels
                      ? "opacity-90" // always visible if toggle is on
                      : isActive
                      ? "opacity-0" // hide when active
                      : "opacity-0 group-hover:opacity-90" // default hover behavior
                  }
                  transition-all duration-400
                  text-[14px] px-2 py-1 bg-white tracking-widest rounded
                `}
              >
                {hotspot.label}
              </div>

              {/* Hotspot circle */}
              <div
                onClick={() => onHotspotClick(hotspot)}   // <– no more toggle/close
                className={`
                  w-6 h-6 bg-blue-400 rounded-full 
                  border-2 border-white shadow-lg cursor-pointer
                  hover:scale-125
                  hover:bg-orange-400
                  transition-all duration-300
                  ${isActive ? "bg-orange-500" : "bg-blue-500"}
                `}
                style={{
                  opacity: circleOpacity
                }}
              >
              </div>
            </div>
          </Html>
        );
      })}
    </>
  );
}
