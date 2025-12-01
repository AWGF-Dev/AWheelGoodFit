import React from "react";
import PageFourChecklist from "./PageFourChecklist";
import { getAssetUrl } from "../utils/getAssetUrl";
import { useEffect, useRef } from "react";

const PageFour = ({ title, activeSubtab, onSubtabClick }) => {
  const subtabs = [
    {
      id: "intro",
      label: "Body Measurements",
      content: (
        <>
          <h2 className="text-gray-700 text-4xl font-Cap">
            What is the importance of a good fit?
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            A properly fitted wheelchair depends on the relationship between three key dimensions:
          </p>
          <ul className="list-decimal ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>The Body:</b> The person's unique physical structure and posture.
            </li>
            <li>
              <b>The Seating Components:</b> The supports required for comfort, posture, and pressure relief.
            </li>
            <li>
              <b>The Wheelchair:</b> The base frame and its components.
            </li>
          </ul>
          <p className="text-gray-700 text-xl font-Rob">
            It is crucial to understand how these dimensions interact. For example, a person's buttock-thigh length (Body) determines the needed cushion depth (Seating Component), which may differ from the seat frame length (Wheelchair) (Waugh et al., 2013).
          </p>
          <p className="text-gray-700 text-xl font-Rob">
            Using consistent terminology for these parts is essential to accurately turn body measurements into equipment recommendations and to ensure the system is set up correctly (International Organization for Standardisation, 2018).
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap">
            Why Body Measurements Are Taken
          </h2>
          <p className="text-gray-700 text-xl font-Rob mt-4">
            This resource does not cover the detailed measuring process (which relates to the earlier "Select" phase), but it will clarify how body measurements relate to seating and wheelchair dimensions.
          </p>
          <p className="text-gray-700 text-xl font-Rob mt-4">
           These objective measurements of a person's seated posture are important to:
          </p>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>Objectively assess postural alignment.</li>
            <li>Help determine the specific features needed in seating products.</li>
            <li>Document postural outcomes before and after an intervention.</li>
            <li>Monitor postural changes over time and set measurable goals.</li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap">
            Terminology
          </h2>
          <p className="text-gray-700 text-xl font-Rob mt-4">
           Labelling terminology for each body segment is depicted in Figure 1
          </p>
          <span className="text-gray-700 text-xl font-Rob">
            This is relevant when referring to or documenting:
          </span>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob mt-4">
            <li>
              Linear or angular measurements of the body (e.g., lower leg length, thigh to trunk angle)
            </li>
            <li>
              The surface or support designed to contact that segment (e.g., thigh support, trunk support)
            </li>
          </ul>
          <div className="mx-auto mt-10 w-200">
            <img
              src={getAssetUrl("/pg4_1.png")}
              alt="Wheelbarrow diagram"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-left text-gray-700 text-xl font-Rob mt-2">
              (Waugh & Crane, 2013)
            </p>
          </div>
        </>
      )
    },
    {
      id: "fit",
      label: "Linear Measurements",
      content: (
        <>
          <h2 className="text-gray-700 text-4xl font-Cap">
            A Guide to Understanding Linear Measurements
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            To ensure consistency and accuracy, linear measurements for seating follow two key principles:
          </p>
          <ol className="list-decimal ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>
              They are taken parallel to the body segment.
            </li>
            <li>
              Or, they are taken along a strict vertical or horizontal line, regardless of the person's posture.
            </li>
          </ol>
          <p className="text-gray-700 text-xl font-Rob">
            Key Characteristics of Linear Measures:
          </p>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>They are straight lines and do not follow body contours.</li>
            <li>They are taken without compressing soft tissue.</li>
            <li>
              <b>Exception:</b> Circumferential measures (e.g., around the head or ankle) are the only ones that follow the body's curve.
            </li>
          </ul>
          <p className="text-gray-700 text-xl font-Rob">
            The specific measurements needed depend on the individual's posture and the complexity of the seating system required.
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            "Effective" Measurements
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Sometimes, measuring a body part in its standard anatomical position isn't clinically helpful, especially when postures are asymmetrical or non-reproducible. In these cases, the addition of "Effective" measurements may be documented.
          </p>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>What:</b> "Effective" measurements record the functional space the body will occupy in the seating system, rather than the true anatomical length.
            </li>
            <li>
              <b>Why:</b> They provide the practical dimensions needed to configure the seating components correctly.
            </li>
          </ul>
          <span className="text-gray-700 text-xl font-Rob">
            Example: Lower Leg vs. Effective Lower Leg Length
          </span>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob mt-7">
            <li>
              <b>Standard Method:</b> Measures the length of the tibia parallel to the bone itself.
            </li>
            <li>
              <b>Effective Method:</b> Measures the horizontal distance from the back of the knee to the heel. 
              This tells you the actual depth needed for the footplate to provide proper support, especially if the legs are angled.
            </li>
          </ul>
          <div className="mx-auto mt-10 w-200">
            <img
              src={getAssetUrl("/pg4_2.png")}
              alt="Wheelbarrow diagram"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-left text-gray-700 text-xl font-Rob mt-2">
              (Waugh & Crane, 2013)
            </p>
          </div>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Common Measurements
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            The necessary body measurements depend on the user's postural symmetry and support needs. Here are commonly taken body measurements and how they inform the specifications for seating components and the wheelchair frame itself (Agency for Clinical Innovation, 2017b): 
          </p>
          <div className="ml-8 space-y-2 text-gray-700 text-xl font-Rob">
            <div><b>Hip Width:</b> Determines overall seat and cushion width for postural support and comfort.</div>
            <div><b>Greater Trochanter Width:</b> Critical for sizing pressure-mapping and offloading cushions.</div>
            <div><b>External Knee Width:</b> Guides seat width adjustment and footplate hanger selection to prevent leg rubbing.</div>
            <div><b>Chest Width:</b> Sets the width between lateral trunk supports and informs backrest size selection.</div>
            <div><b>Shoulder Width:</b> Determines the optimal distance between arm supports for upper limb positioning and function.</div>
            <div><b>Foot Width (with shoes):</b> Defines the minimum required frame width at the base and informs footplate size.</div>
            <div><b>Thigh Depth:</b> Guides ideal seat depth (measurement minus 25–50mm) to avoid popliteal pressure.</div>
            <div><b>Lower Leg Length:</b> Determines the distance from seat to footplate (accounting for cushion and shoe height).</div>
            <div><b>Foot Depth:</b> Selects appropriate footplate size and style to prevent interference with front castors.</div>
            <div><b>Maximum Sitting Height:</b> Ensures adequate backrest height for full postural support.</div>
          </div>
          <div className="mx-auto mt-10 w-200">
            <img
              src={getAssetUrl("/pg4_3.png")}
              alt="Wheelbarrow diagram"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-left text-gray-700 text-xl font-Rob mt-2">
              (Waugh & Crane, 2013)
            </p>
          </div>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Basic Measurements for Symmetrical Sitters
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            For a person who sits symmetrically and has simple seating needs (e.g., a Hands-Free Sitter, see “Types of Sitters’’), the following core measurements are typically sufficient:
          </p>
          <ul className="list-disc ml-12 space-y-4 text-gray-700 text-xl font-Rob">
            <li>
              <b>Width Measurements:</b>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li>Hip Width</li>
                <li>Chest Width</li>
                <li>Shoulder Width</li>
                <li>External Knee Width (if wider than the hips)</li>
              </ul>
            </li>
            <li>
              <b>Depth & Height Measurements:</b>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li>Buttock/Thigh Depth</li>
                <li>Lower Leg Length</li>
                <li>Elbow Height</li>
                <li>Shoulder Height (or Scapula/Axilla Height, to determine backrest height)</li>
                <li>Maximum Sitting Height</li>
              </ul>
            </li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Additional Measurements for Complex Seating Needs
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            For individuals requiring more postural support or who have asymmetries, additional measurements are needed to ensure a proper and accommodating fit.
          </p>
          <span className="text-gray-700 text-xl font-Rob">
            Common additional measures include:
          </span>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob mt-5">
            <li>Trunk Depth</li>
            <li>Ischial Depth</li>
            <li>Foot Depth</li>
            <li>Posterior Superior Iliac Spine (PSIS) Height</li>
            <li>External Thigh or Knee Width</li>
            <li>Internal Knee Width</li>
          </ul>
          <p className="text-gray-700 text-xl font-Rob">
            These measurements ensure the seating system and wheelchair frame accommodate the individual's true sitting posture for optimal support, comfort, and function (Lange & Minkel, 2025; Ward, 1994).
          </p>
        </>
      )
    },
    {
      id: "measure",
      label: "Angular Measurements",
      content: (
        <>
          <h2 className="text-gray-700 text-4xl font-Cap">
            A Guide to Angular Measurements
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Angular measurements describe the orientation of a person's body segments and their corresponding support surfaces in a wheelchair. These angles define the individual's overall seated posture (Waugh et al., 2013).
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            General Principles
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Three foundational concepts are critical for applying angular measures in practice:
          </p>
          <ul className="list-disc ml-12 space-y-4 text-gray-700 text-xl font-Rob">
            <li>
              <b>The Three Body Planes:</b> Measurements are taken within the sagittal, frontal, and transverse planes.
            </li>
            <li>
              <b>Reference Lines:</b> Angles are created by comparing a body segment line (e.g., along the thigh) 
              to a support surface reference plane (e.g., the seat).
            </li>
            <li>
              <b>Types of Angles:</b>
              <ol className="list-decimal ml-12 space-y-2 mt-4">
                <li>
                  <b>Relative Angles:</b> Describe the angle between two adjacent body segments 
                  (e.g., the thigh‑to‑trunk angle).
                </li>
                <li>
                  <b>Absolute Angles:</b> Describe the orientation of a single body segment in space, 
                  relative to a fixed vertical or horizontal line (e.g., the sagittal trunk angle).
                </li>
              </ol>
            </li>
          </ul>
          <span className="text-gray-700 text-xl font-Rob">
            THere are some examples of relative body segment angles:
          </span>
          <div className="ml-12 space-y-2 text-gray-700 text-xl font-Rob mt-5">
            <div><b>Thigh to trunk angle:</b> Informs seat to back support angle</div>
            <div><b>Thigh to lower leg angle:</b> Informs seat to lower leg support angle</div>
            <div><b>Lower leg to foot angle:</b> Informs lower leg support to foot support angle</div>
          </div>
          <div className="mx-auto mt-10 w-250">
            <img
              src={getAssetUrl("/pg4_4.png")}
              alt="Wheelbarrow diagram"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-left text-gray-700 text-xl font-Rob mt-2">
              (Waugh & Crane, 2013)
            </p>
          </div>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            ROM vs. Seating Angles
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            It is crucial to distinguish between joint range of motion (ROM) and functional sitting angles:
          </p>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Passive Range of Motion:</b> Often measured on a mat, this tells us the maximum range a joint can be moved through. 
              It defines the person's potential for movement.
            </li>
            <li>
              <b>Relative Body Segment Angles:</b> Describe the actual angles the person will be supported in within the seating system. 
              The prescribed sitting angles are often different from their full PROM.
            </li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Why Absolute Angles Are Useful
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>Understanding the impact of gravity on a body segment.</li>
            <li>Quantifying posture when complex postural deviations are present.</li>
            <li>Setting measurable goals for improving seated posture.</li>
          </ul>
        </>
      )
    },
    {
      id: "4",
      label: "Types of Sitters",
      content: (
        <>
          <h2 className="text-gray-700 text-5xl font-Cap">
            Understanding Trunk Control
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Clients require different levels of support depending on their sitting balance.
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap">
            Hands-Free Sitter
          </h2>
        </>
      )
    },
    {
      id: "5",
      label: "Postural Support Devices",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Pixelmono">
            Acknowledge the art of toe man
          </p>
          <div className="h-64 bg-gray-200 rounded"></div>
        </>
      )
    },
    {
      id: "6",
      label: "Fitting Checklist: Posture",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Pixelmono">
            Acknowledge the art of toe man
          </p>
          <div className="h-64 bg-gray-200 rounded"></div>
        </>
      )
    },
    {
      id: "7",
      label: "References",
      content: (
        <>
          <PageFourChecklist />
          <p className="text-gray-700 text-xl font-Pixelmono">
            I sure hope this checklist above works!
          </p>
          <div className="h-64 bg-gray-200 rounded"></div>


        </>
      )
    }
  ];

  const currentIndex = subtabs.findIndex(tab => tab.id === activeSubtab);
  const currentSubtab = subtabs[currentIndex];
  const scrollRef = useRef(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSubtabClick(subtabs[currentIndex - 1].id, "page4");
    }
  };

  const handleNext = () => {
    if (currentIndex < subtabs.length - 1) {
     onSubtabClick(subtabs[currentIndex + 1].id, "page4");
    }
  };

      // Reset scroll when activeSubtab changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [activeSubtab]);

  return (
    <div className="w-full h-full flex">
      {/* LEFT SIDEBAR */}
      <div className="w-72 bg-gray-100 border-r border-gray-300 p-6 flex-shrink-0 h-screen flex flex-col transition-opacity duration-300">
        <p className="text-4xl font-mono font-bold mb-6 text-gray-800 tracking-tight">{title}</p>
        <div className="flex flex-col gap-3">
          {subtabs.map(tab => (
            <div
              key={tab.id}
              onClick={() => onSubtabClick(tab.id, "page4")}
              className={`cursor-pointer px-3 py-2 rounded font-Pixelmono text-xl
                ${activeSubtab === tab.id ? "bg-black text-white" : "hover:bg-gray-300 text-black"}`}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div ref={scrollRef} className="flex-1 p-8 overflow-y-auto relative transition-opacity duration-300 bg-white">
        <h2 className="text-6xl font-bold mb-6 font-Cap text-gray-700">
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

export default PageFour;
