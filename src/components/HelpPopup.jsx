import { useEffect, useState } from "react";

export default function HelpPopup({ onClose, closing }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div
      className={`
        bg-black/55 text-white p-4 rounded-xl shadow-lg w-64
        select-none backdrop-blur-sm
        transition-all duration-300
        ${closing ? "opacity-0 scale-95" : mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">Controls</h2>
        <div
          onClick={onClose}
          className="transition-transform duration-150 hover:scale-125 active:scale-95"
        >
          ✕
        </div>
      </div>
      <ul className="text-sm space-y-1">
        <li><strong>Left-click:</strong> Orbit</li>
        <li><strong>Right-click:</strong> Pan</li>
        <li><strong>Scroll:</strong> Zoom</li>
        <li><strong><u>Click</u></strong> on a hotspot for more info</li>
      </ul>
    </div>
  );
}
