import { useState, useEffect, useRef } from 'react'
import React from 'react'
import Banner from './components/banner'
import Sidebar from './components/Sidebar'
import ModelCanvas from './components/3D_Canvas'
import Loading from './components/UI/Loading'
import Loader2 from './components/UI/Loading2'
import Volume from './components/UI/Volume'
import Wheel from './components/UI/Wheel'
import Checkbox from './components/UI/Checkbox'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import PageFour from './components/PageFour'
import PageFive from './components/PageFive'
import PageSix from './components/PageSix'
import PageSeven from './components/PageSeven'


function App() {

  // Prevent right-click
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault()
    document.addEventListener("contextmenu", handleContextMenu)
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [])

  // States
  const audioRef = useRef(null)
  const [cameraTarget, setCameraTarget] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isSidebarClosing, setIsSidebarClosing] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null)
  const [showContent, setShowContent] = useState(false)
  const [fadeOutLoading, setFadeOutLoading] = useState(false)
  const [activePage, setActivePage] = useState("page1")
  const [activeSubtab, setActiveSubtab] = useState("intro"); // current subtab
  const [fadePage, setFadePage] = useState(false)
  const [fadeSubtabFromSidebar, setFadeSubtabFromSidebar] = useState(false);


  
  const hotspots = [
    {
      id: "h1",
      label: "Foot Rest",
      position: [0.5, 0.6, 1.8],
      offset: [1, 0.7, 1],
      distance: "7",
      overview: "This is a brief overview of the wheelchair component.",
      links: [
        { id: "intro", page: "page2", label: "Go to Overview" },
        { id: "fit", page: "page2", label: "Go to Background" }
      ]
    },
    {
      id: "h2",
      label: "Spokes",
      position: [-1.40, 1.45, -1.06],
      offset: [-0.4, 0.1, 0.5],
      distance: "7",
      overview: "Some info about the cheesechair.",
      links: [
        { id: "intro", page: "page3", label: "Go to Resources" },
        { id: "measure", page: "page4", label: "Go to Rear Wheels" }
      ]
    },
    {
      id: "h3",
      label: "Wheelchair Tires",
      position: [1.13, 2.05, -0.17],
      offset: [0.25, 0, 0.7],
      distance: "7",
      overview: "Acai froyo from Rosebuddus is supposedly one of the better ones.",
      links: [
        { id: "intro", page: "page5", label: "linear sepcifficfations" },
        { id: "5", page: "page6", label: "Go to h e a d" }
      ]
    },
    {
      id: "h4",
      label: "Push Handles",
      position: [1, 3.56, -2.02],
      offset: [0.9, 0.3, 2],
      distance: "7",
      overview: "This is a brief overview of push handle rahh.",
      links: [
        { id: "intro", page: "page2", label: "Go to Overview" },
      ]
    },
    {
      id: "h5",
      label: "Backrest",
      position: [-0.05, 2.75, -1],
      offset: [0, 0.3, 2.9],
      distance: "7",
      overview: "This is a brief overview of push handle rahh.",
      links: [
        { id: "intro", page: "page2", label: "Go to Overview" },
      ]
    },
    {
      id: "h6",
      label: "Armrests",
      position: [-1.12, 2.7, 0],
      offset: [1.5, 0, 0],
      distance: "7",
      overview: "This is a brief overview of push handle rahh.",
      links: [
        { id: "5", page: "page4", label: "More on armrests" },
      ]
    },
    {
      id: "h7",
      label: "Push Rim",
      position: [1.28, 1.85, -0.17],
      offset: [0.4, 0, 0.4],
      distance: "7",
      overview: "This is a brief overview of push handle rahh.",
      links: [
        { id: "intro", page: "page2", label: "Go to Overview" },
      ]
    },
    {
      id: "h8",
      label: "Anti-tip Wheels",
      position: [1.05, 0.4, -1.76],
      offset: [0.8, 0.25, -0.4],
      distance: "7",
      overview: "This is a brief overview of push handle rahh.",
      links: [
        { id: "intro", page: "page2", label: "Go to Overview" },
      ]
    },
        {
      id: "h9",
      label: "Brakes",
      position: [-1.1, 1.5, 0.5],
      offset: [-1, -0.2, -0.3],
      distance: "7",
      overview: "This is a brief overview of push handle rahh.",
      links: [
        { id: "intro", page: "page2", label: "Go to Overview" },
      ]
    },
        {
      id: "h10",
      label: "Rear Wheel Hub",
      position: [-1.25, 1.15, -0.75],
      offset: [-0.3, 0.4, 0.8],
      distance: "7",
      overview: "This is a brief overview of push handle rahh.",
      links: [
        { id: "intro", page: "page2", label: "Go to Overview" },
      ]
    },
        {
      id: "h11",
      label: "Release Axel",
      position: [1.35, 1.13, -0.63],
      offset: [0.5, 0, 0],
      distance: "5.5",
      overview: "This is a brief overview of push handle rahh.",
      links: [
        { id: "intro", page: "page2", label: "Go to Overview" },
      ]
    },
        {
      id: "h12",
      label: "Seat Cushion",
      position: [-0.05, 1.7, 0],
      offset: [0, 0.75, 2],
      distance: "7",
      overview: "This is a brief overview of push handle rahh.",
      links: [
        { id: "intro", page: "page2", label: "Go to Overview" },
      ]
    },
        {
      id: "h13",
      label: "Swing-away Foot Rest",
      position: [-1.06, 1.2, 1.60],
      offset: [1.5, 0, 0],
      distance: "7",
      overview: "This is a brief overview of push handle rahh.",
      links: [
        { id: "intro", page: "page2", label: "Go to Overview" },
      ]
    },
        {
      id: "h14",
      label: "Cross Braces",
      position: [-0.075, 1.2, 0.48],
      offset: [0, -0.1, 1.9],
      distance: "7",
      overview: "This is a brief overview of push handle rahh.",
      links: [
        { id: "intro", page: "page2", label: "Go to Overview" },
      ]
    },
        {
      id: "h15",
      label: "Caster Fork",
      position: [-1.22, 0.63, 1.0],
      offset: [-0.75, 0, 0.75],
      distance: "7",
      overview: "This is a brief overview of push handle rahh.",
      links: [
        { id: "intro", page: "page2", label: "Go to Overview" },
      ]
    },
        {
      id: "h16",
      label: "Caster Wheel",
      position: [1.22, 0.35, 1.08],
      offset: [1, 0.5, -1],
      distance: "7",
      overview: "This is a brief overview of push handle rahh.",
      links: [
        { id: "intro", page: "page2", label: "Go to Overview" },
      ]
    },
        {
      id: "h19",
      label: "Heel Loop",
      position: [-0.65, 0.76, 1.55],
      offset: [1, 0.8, 0.5],
      distance: "7",
      overview: "This is a brief overview of push handle rahh.",
      links: [
        { id: "intro", page: "page2", label: "Go to Overview" },
      ]
    },
  ];
  
  const handleHotspotClick = (hotspot) => {
    if (activeHotspot?.id === hotspot.id) {
      setIsOpen(false);
      setActiveHotspot(null);
      setCameraTarget(null);
    } else {
      setActiveHotspot(hotspot);
      setIsOpen(true);
      setCameraTarget(hotspot);
    }
  };


  const handlePageSwitch = (page) => {
    if (page === activePage) return;

    // Close sidebar on page switch
    setIsOpen(false);
    setActiveHotspot(null);
    setCameraTarget(null);

    setFadePage(true);
    setTimeout(() => {
      setActivePage(page);
      setFadePage(false);
      setActiveSubtab("intro");
    }, 300);

  };

  const handleSubtabClick = (subtabId, page, fromSidebar = false) => {
    if (fromSidebar) {
      setFadeSubtabFromSidebar(true);
      setTimeout(() => {
        setActivePage(page);
        setActiveSubtab(subtabId);
        setIsOpen(false);
        setFadeSubtabFromSidebar(false);
      }, 300); // match your transition duration
    } else {
      // normal internal page subtab switch, no fade
      setActivePage(page);
      setActiveSubtab(subtabId);
    }
  };


  // --- NEW: handle start button ---
  const handleStart = () => {
    setFadeOutLoading(true) // start fade out
    setTimeout(() => {
      setShowContent(true)   // show main content after fade
      setActivePage("page1") // optional: default to page1
    }, 1000) // match your transition duration
  }

  const closeSidebar = () => {
  setActiveHotspot(null);
  setIsOpen(false);
  setCameraTarget(null);
};

  return (
    <>
      {showContent ? (
        <div className={`select-none transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>

        {/* Full-page vertical layout */}
        <div className="flex flex-col w-full h-screen overflow-hidden">

          {/* FIXED TOP BANNER */}
          <Banner activePage={activePage} handlePageSwitch={handlePageSwitch} audioRef={audioRef} />

          {/* CONTENT AREA (scrolls independently) */}
          <div className="flex-1 overflow-hidden">
            <div className="flex w-full h-full relative">


            <div className="flex-1">
              <div className={`h-full transition-opacity duration-300 ${fadePage || fadeSubtabFromSidebar ? "opacity-0" : "opacity-100"}`}>
                {activePage === "page1" && <ModelCanvas className="z-10" cameraTarget={cameraTarget} onHotspotClick={handleHotspotClick} hotspots={hotspots} activeHotspot={activeHotspot} activePage={activePage} />}
                {activePage === "page2" && <PageTwo title="Overview" activeSubtab={activeSubtab} onSubtabClick={handleSubtabClick} />}
                {activePage === "page3" && <PageThree title="The Person" activeSubtab={activeSubtab} onSubtabClick={handleSubtabClick}  />}
                {activePage === "page4" && <PageFour title="The Wheelchair" activeSubtab={activeSubtab} onSubtabClick={handleSubtabClick}  />}
                {activePage === "page5" && <PageFive title="Measurements" activeSubtab={activeSubtab} onSubtabClick={handleSubtabClick} />}
              </div>
            </div>

            
                <Sidebar className="relative z-30" isOpen={isOpen} activeHotspot={activeHotspot} onSubtabClick={handleSubtabClick} onCloseSidebar={closeSidebar} />
            

              
              <div id="overlay-root" className="fixed inset-0 pointer-events-none z-20" />
            </div>
          </div>
        </div>

  <audio ref={audioRef} className="hidden" src="miimusic.mp3" controls autoPlay loop />
</div>

      ) : (
        // --- Loading Screen ---
        <div className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-1000 ${fadeOutLoading ? "opacity-0" : "opacity-100"}`}>
          <div className="flex flex-col items-center scale-150">

            <Loading />

            <div className="mt-5 flex flex-col items-center justify-between h-25 w-60 bg-white border-black border-5 font-mono p-3 text-black text-xs">
              <div className="text-left font-bold">
                <div>A Wheel Good Fit: Stinky 2025</div>
                <div className="inline-block">
                  Press start to begin<span className="blinking-cursor">_</span>
                </div>
              </div>

              <div className="nothing for now">
                <div
                  onClick={handleStart}
                  className="m-3 p-1 border-2 border-black bg-white text-black font-mono font-bold cursor-pointer hover:bg-black hover:text-white"
                >
                  START
                </div>
              </div>
            </div>

            <div className="pt-20 hidden">
              <Loader2 />
            </div>
            <div className="pt-5 hidden">
              <Checkbox />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
