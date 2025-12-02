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
      id: "h2",
      label: "Rear Wheels",
      position: [-1.40, 1.15, -1.06],
      offset: [-2.3, 0.5, 1.2],
      distance: "7",
      overview: "The rear wheel, including its tire and rim, is the primary contact point with the ground. The choice of tire (e.g., pneumatic tires for shock absorption or solid tires for zero maintenance) and wheel camber (angle for stability vs. width) can significantly influence rolling resistance, propulsion efficiency, maneuverability, and overall user comfort.",
      links: [
        { id: "measure", page: "page5", label: "More Info on Rear Wheels" }
      ]
    },
    {
      id: "h4",
      label: "Push Handles",
      position: [1, 3.56, -2.02],
      offset: [0.9, 0.3, 2],
      distance: "7",
      overview: "Push handles are extensions to the top of the backrest frame that project backwards from the wheelchair and permit an aid to help propel the chair from behind.",
      links: [

      ]
    },
    {
      id: "h5",
      label: "Back Support",
      position: [-0.05, 2.75, -1],
      offset: [0, 0.3, 2.9],
      distance: "7",
      overview: "The back support provides the surface against which the user rests their back and pelvis. Its height and contour are clinically selected based on the user's trunk control and postural needs. A lower back support accommodates active trunk movement and allows for upper extremity propulsion, while a higher, more contoured support is necessary for users requiring significant postural support.",
      links: [

      ]
    },
    {
      id: "h6",
      label: "Arm Rests",
      position: [-1.12, 2.55, 0],
      offset: [2.2, -0.3, 1],
      distance: "7",
      overview: (
        <>
          <p>Arm rests primarily serve to provide good resting posture for the arms. They are also used as a point of stability and leverage during transfers, weight shifting and reaching. Features such as removable designs, adjustable height, and integrated accessories (e.g., cup holders) can promote the user's function and independence.</p>
          <p className="mt-5">Skirt guards protect clothing from the wheel and keep debris off the user. Specialised arm troughs may be used to provide secure positioning and support for users with residual limbs.</p>
        </>
      ),
      links: [
        { id: "6", page: "page5", label: "More Info on Armrests" },
      ]
    },
    {
      id: "h7",
      label: "Push Rim",
      position: [1.28, 1.85, -0.17],
      offset: [0.4, 0, 0.4],
      distance: "7",
      overview: "The push rim is the outer ring on the wheel that the user grips to propel the chair. Its design directly impacts propulsion biomechanics and upper limb health. Push rims can be coated for improved grip (reducing force per push) and contoured for users with limited hand function, both aimed at decreasing the risk of repetitive strain injuries. Standard handrims are a single round tube with about ¾ inch diameter.",
      links: [
        { id: "measure", page: "page5", label: "Go to 'Rear Wheels' for More Info" },
      ]
    },
    {
      id: "h8",
      label: "Anti-tip Wheels",
      position: [1.05, 0.4, -1.76],
      offset: [0.8, 0.25, -0.4],
      distance: "7",
      overview: "Anti-tip wheels are small auxiliary wheels attached to the rear of the frame to prevent the wheelchair from tipping over backwards. They ensuring a smoother and more confident mobility experience for users.",
      links: [

      ]
    },
        {
      id: "h9",
      label: "Wheel Locks",
      position: [-1.1, 1.5, 0.5],
      offset: [-1, -0.2, -0.3],
      distance: "7",
      overview: "Wheel locks are safety devices that prevent the wheelchair from rolling when stationary and help facilitate safe transfers. The type (e.g., standard scissor vs. easy-reach lever) and placement should ensure the user can engage and disengage them effectively without compromising their posture or safety.",
      links: [
        { id: "7", page: "page5", label: "Go to 'Footrests' for More Info" },
      ]
    },
        {
      id: "h10",
      label: "Rear Wheel Hub",
      position: [-1.25, 1.15, -0.75],
      offset: [-0.3, 0.4, 0.8],
      distance: "7",
      overview: "The hub is the center component of the wheel to which the spokes connect. The hub also houses the axle.",
      links: [

      ]
    },
        {
      id: "h11",
      label: "Release Axle",
      position: [1.35, 1.13, -0.63],
      offset: [0.5, 0, 0],
      distance: "5.5",
      overview: "This mechanism allows for the rapid removal of the rear wheels without tools. It allows for easy transportation—such as placing the chair in a car—and maintenance.",
      links: [

      ]
    },
        {
      id: "h12",
      label: "Seat Cushion",
      position: [-0.05, 1.7, 0],
      offset: [0, 0.75, 2],
      distance: "7",
      overview: "Seat cushions are placed inferior to the buttocks and thighs. Their primary functions include redistributing pressure to prevent pressure injuries, providing postural support and stability for the pelvis and spine, and enhance sitting comfort. Seat cushion are often categorised by their design intent—focusing on comfort, pressure relief, or postural control.",
      links: [

      ]
    },
        {
      id: "h13",
      label: "Foot Rest",
      position: [-0.9, 0.83, 1.80],
      offset: [1.4, 0.5, 1.4],
      distance: "7",
      overview: "Foot rests support the feet to maintain proper lower limb alignment, which is critical for posture, circulation, and comfort. Features such as flip-up or swing-away designs clear space anterior to the chair, facilitating safe and independent transfers. Heel loops, often made of nylon, help maintain foot positioning, especially for users with limited lower extremity control or sensation.",
      links: [
        { id: "7", page: "page5", label: "Go to 'Footrests' for More Info" },
      ]
    },
        {
      id: "h14",
      label: "Cross Braces",
      position: [-0.075, 1.2, 0.48],
      offset: [0, -0.1, 1.9],
      distance: "7",
      overview: (
        <>
          <p>The X-brace is the hinged, folding mechanism that connects the two sides of the wheelchair frame. Its primary purpose is to allow the chair to collapse for transportation and storage. It also introduces a degree of flexibility compared to a rigid frame, which can affect propulsion efficiency and the solidity of the ride for very active users.</p>
          <p className="mt-5">The wheelchair frame is the rigid, tubular structure that supports the seat and the wheels.</p>
        </>
      ),
      links: [
        { id: "fit", page: "page5", label: "More Info on Frames" },
      ]
    },
        {
      id: "h15",
      label: "Castor Fork",
      position: [-1.22, 0.63, 1.0],
      offset: [-0.75, 0, 0.75],
      distance: "7",
      overview: "The castor fork is the connecting component that attaches the front castor wheel to the wheelchair frame via the castor housing. Its design and durability are essential for maintaining proper front-end alignment, which directly affects steering responsiveness, tracking, and the overall stability of the wheelchair during turns and over uneven surfaces.",
      links: [
        { id: "5", page: "page5", label: "More Info on Castors" },
      ]
    },
        {
      id: "h16",
      label: "Castor Wheel",
      position: [1.22, 0.35, 1.08],
      offset: [1, 0.5, -1],
      distance: "7",
      overview: "The castor tire is the front wheel's point of contact with the ground and greatly influences maneuverability and ride comfort. The smaller the castor the greater the mobility, the larger the castor the greater the stability. The firmer the material the greater the maneuverability, the softer the material the more cushioned the ride.",
      links: [
        { id: "5", page: "page5", label: "More Info on Castors" },
      ]
    }
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
                {activePage === "page4" && <PageFour title="Seating and Positioning" activeSubtab={activeSubtab} onSubtabClick={handleSubtabClick}  />}
                {activePage === "page5" && <PageFive title="The Wheelchair" activeSubtab={activeSubtab} onSubtabClick={handleSubtabClick} />}
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

            <div className="mt-5 flex flex-col items-center justify-between h-25 w-65 bg-white border-black border-5 font-mono p-3 text-black text-xs">
              <div className="text-left font-bold">
                <div>A Wheel Good Fit: PEEK Project</div>
                <div className="text-center">
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
