import React from "react";
import { getAssetUrl } from "../utils/getAssetUrl";

const PageThree = ({ title, activeSubtab, onSubtabClick }) => {
  const subtabs = [
    {
      id: "intro",
      label: "Client Profile",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Pixelmono">
            The earliest records of wheeled furniture are an inscription found on a stone slate in China and a child's bed depicted in a frieze on a Greek vase, both dating between the 6th and 5th century BC.[4][5][6][7]
          </p>
          <p className="text-gray-700 text-xl font-Pixelmono">
            The first records of wheeled seats being used for transporting disabled people date to three centuries later in China; the Chinese used early wheelbarrows to move people as well as heavy objects.
          </p>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </>
      )
    },
    {
      id: "fit",
      label: "WHO-ICF",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Pixelmono">
            Although Europeans eventually developed a similar design, this method of transportation did not exist until 1595[8] when an unknown inventor from Spain built one for King Phillip II.
          </p>
          <p className="text-gray-700 text-xl font-Pixelmono">
            The design still had shortcomings since it did not feature an efficient propulsion mechanism and thus required assistance to propel it.
          </p>
          <div className="h-64 bg-gray-300 rounded"></div>
          <div className="h-64 bg-gray-300 rounded"></div>
        </>
      )
    }
  ];

  const handleNext = () => {
    const currentIndex = subtabs.findIndex(tab => tab.id === activeSubtab);
    if (currentIndex < subtabs.length - 1) {
      onSubtabClick(subtabs[currentIndex + 1].id, "page3");
    }
  };

  const handlePrev = () => {
    const currentIndex = subtabs.findIndex(tab => tab.id === activeSubtab);
    if (currentIndex > 0) {
      onSubtabClick(subtabs[currentIndex - 1].id, "page3");
    }
  };

  return (
    <div className="w-full h-full flex">
      {/* LEFT SIDEBAR */}
      <div className="w-72 bg-gray-100 border-r border-gray-300 p-6 flex-shrink-0 h-screen flex flex-col">
        <p className="text-4xl font-mono font-bold text-gray-800 mb-6">{title}</p>
        <div className="flex flex-col gap-3">
          {subtabs.map(tab => (
            <div
              key={tab.id}
              onClick={() => onSubtabClick(tab.id, "page3")}
              className={`cursor-pointer px-3 py-2 rounded font-Pixelmono text-xl
                ${activeSubtab === tab.id ? "bg-black text-white" : "hover:bg-gray-300 text-black"}`}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 p-8 overflow-y-auto relative bg-white">
        <h2 className="text-6xl font-bold text-gray-700 mb-6 font-Cap">
          {subtabs.find(tab => tab.id === activeSubtab)?.label}
        </h2>

        <div className="space-y-6">
          {subtabs.find(tab => tab.id === activeSubtab)?.content}
        </div>

        {/* Navigation Buttons — appear after all content */}
        <div className="flex justify-between mt-8">
          <div
            onClick={handlePrev}
            className={`px-6 py-2 font-Pixelmono text-2xl font-bold rounded 
                      ${activeSubtab === subtabs[0].id ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800 hover:cursor-pointer"}`}
          >
            &lt; Previous
          </div>

          <div
            onClick={handleNext}
            className={`px-6 py-2 font-Pixelmono text-2xl font-bold rounded 
                      ${activeSubtab === subtabs[subtabs.length - 1].id ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800 hover:cursor-pointer"}`}
          >
            Next &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
