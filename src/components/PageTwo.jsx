import React from "react";
import { getAssetUrl } from "../utils/getAssetUrl";

const PageTwo = ({ title, activeSubtab, onSubtabClick }) => {
  const subtabs = [
    {
      id: "intro",
      label: "Overview",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Pixelmono">
            The earliest records of wheeled furniture are an inscription found on a stone slate in China and a child's bed depicted in a frieze on a Greek vase, both dating between the 6th and 5th century BC.[4][5][6][7]
          </p>
          <div className="flex items-start gap-4 mb-6">
            <p className="text-gray-700 text-xl font-Pixelmono flex-1">
              The Chinese used early wheelbarrows to move people as well as heavy objects.
            </p>
            <img
              src={getAssetUrl("/cat test.jpg")}
              alt="Wheelbarrow diagram"
              className="w-100 h-auto rounded-lg shadow"
            />
          </div>
          <p className="text-gray-700 text-xl font-Pixelmono">
            This is a fat test for <span className="pixel-bold">bold BOLD 1234</span> text!!!
          </p>
          <p className="text-gray-700 text-xl font-Pixelmono">
            This is a fat test for <span className="pixel-italic">italic ITALIC 1234</span> text!!!
          </p>
          <p className="text-gray-700 text-xl font-Pixelmono">
            This is a fat test for <span className="text-blue-500">blue</span>, <span className="text-green-500">green</span>, <span className="text-red-500">red</span>  text!!!
          </p>
        </>
      )
    },
    {
      id: "fit",
      label: "Background",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Pixelmono">
            Although Europeans eventually developed a similar design, this method of transportation did not exist until 1595[8] when an unknown inventor from Spain built one for King Phillip II.
          </p>
          <p className="text-gray-700 text-xl font-Pixelmono">
            The design still had shortcomings since it did not feature an efficient propulsion mechanism and thus required assistance to propel it.
          </p>
          <div className="h-64 bg-gray-300 rounded"></div>
        </>
      )
    },
    {
      id: "measure",
      label: "Further Resources",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Pixelmono">
            Additional studies and references can be found in medical journals and historical archives.
          </p>
          <div className="h-64 bg-gray-200 rounded"></div>
        </>
      )
    },
    {
      id: "4",
      label: "References",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Pixelmono">
            I have no references guh
          </p>
          <div className="h-64 bg-gray-200 rounded"></div>
        </>
      )
    },
    {
      id: "5",
      label: "Acknowledgements",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Pixelmono">
            Acknowledge the art of toe man
          </p>
          <div className="h-64 bg-gray-200 rounded"></div>
        </>
      )
    }
  ];

  const currentIndex = subtabs.findIndex(tab => tab.id === activeSubtab);
  const currentSubtab = subtabs[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) onSubtabClick(subtabs[currentIndex - 1].id, "page2");
  };

  const handleNext = () => {
    if (currentIndex < subtabs.length - 1) onSubtabClick(subtabs[currentIndex + 1].id, "page2");
  };

  return (
    <div className="w-full h-full flex">
      {/* LEFT SIDEBAR */}
      <div className="w-72 bg-gray-100 border-r border-gray-300 p-6 flex-shrink-0 h-screen flex flex-col transition-opacity duration-300">
        <p className="text-4xl font-mono font-bold mb-6">{title}</p>
        <div className="flex flex-col gap-3">
          {subtabs.map(tab => (
            <div
              key={tab.id}
              onClick={() => onSubtabClick(tab.id, "page2")}
              className={`cursor-pointer px-3 py-2 rounded font-Pixelmono text-xl
                ${activeSubtab === tab.id ? "bg-black text-white" : "hover:bg-gray-300"}`}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 p-8 overflow-y-auto relative transition-opacity duration-300">
        <h2 className="text-6xl font-bold mb-6 font-Cap">
          {currentSubtab?.label}
        </h2>

        <div className="space-y-6">
          {currentSubtab?.content}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <div
            onClick={handlePrev}
            className={`px-6 py-2 font-Pixelmono text-2xl font-bold rounded
                        ${currentIndex === 0 ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800 hover:cursor-pointer"}`}
          >
            &lt; Previous
          </div>

          <div
            onClick={handleNext}
            className={`px-6 py-2 font-Pixelmono text-2xl font-bold rounded
                        ${currentIndex === subtabs.length - 1 ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800 hover:cursor-pointer"}`}
          >
            Next &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
