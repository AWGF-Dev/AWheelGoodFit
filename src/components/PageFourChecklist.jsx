import React from "react";
import Checklist from "./UI/Checklist";

export default function PageFourChecklist() {
  const checklistItemsOne = [
    "Is their pelvis upright and level (or as close to this as is comfortable for the user)?",
    "Is the trunk upright and symmetrical (or as close to this as is comfortable for the user)?",
    "Is the head balanced and upright (as much as possible)?",
    "Are the legs and feet supported as close to neutral as possible?",
  ];
    const checklistItemsTwo = [
    "Backrest height, recline and contours",
    "Tilt in space",
    "Pelvis side pads and trunk side pads",
    "Outside and inside thigh wedges, outside thigh pads and lower leg supports"
  ];
    const checklistItemsThree = [
    "hips fit comfortably between armrests or pelvis side pads;",
    "trunk fits comfortably between the wheelchair frame backrest tubes or trunk side pads;",
    "thighs fit comfortably between the armrests, mud/skirt guards or pelvis side pads and are not pushed together."
  ];
      const checklistItemsFour = [
    "Place your finger between the wheelchair user's body and each postural support including pads and straps. Does the postural support make even contact with the body? Is the pressure safe?"
  ];
  const checklistItemsFive = [
    "the headrest should usually support the wheelchair user's head at the base of the skull;",
    "supports the head in a balanced and upright posture.",
  ];
    const checklistItemsSix = [
    "there is no high pressure on caused by the outside thigh pads or knee separator pad;",
    "knee separator pad 40—60 mm away from the groin area for children and 60—100mm for adults.",
  ];
      const checklistItemsSeven = [
    "thighs are fully supported on the cushion with no gaps. Feet are fully supported on the footrests with no gaps;",
    "foot straps can be done up firmly without pinching;",
    "calf strap and behind the heel foot straps supporting calf and feet.",
  ];

  return (
    <>
      <h2 className="text-gray-700 text-4xl font-Cap">
        Check posture 
      </h2>
      <p className="text-gray-700 text-xl font-Rob">
        Check from the front and side to see whether the wheelchair user is
        sitting as close to neutral sitting posture as is comfortable for them:
      </p>
      <div className="ml-6">
        <Checklist id="1" items={checklistItemsOne}/>
      </div>
      <p className="text-gray-700 text-xl font-Rob">
        Check that all PSDs are providing support as intended. In particular
        check (if provided):
      </p>
      <div className="ml-6">
        <Checklist id="2" items={checklistItemsTwo}/>
      </div>
      <p className="text-gray-700 text-xl font-Rob">
        Check posture again after 15 minutes to see if there has been any change.
      </p>

      <h2 className="text-gray-700 text-4xl font-Cap mt-10">
        Check pressure 
      </h2>
      <p className="text-gray-700 text-xl font-Rob">
        Check pressure under both seat bones.
      </p>
      <div className="ml-6">
         <Checklist id="4" items={["Is the pressure safe on both sides?"]} />
      </div>
     
      <div className="ml-6 space-y-3 text-gray-700 text-xl font-Rob border-2 p-2 w-185">
        <p>
          <b>Level I = safe:</b> Fingertips can wriggle up and down 5 mm or more.
        </p>
        <p>
          <b>Level 2 = warning:</b> Fingertips cannot wriggle, but can easily slide out.
        </p>
        <p>
          <b>Level 3 = unsafe:</b> Fingertips are squeezed firmly. It is difficult to slide fingers out.
        </p>
      </div>
      <div className="ml-6">
         <Checklist id="5" items={checklistItemsFour} />
      </div>
      <p className="text-gray-700 text-xl font-Rob">
       If the wheelchair user has any particularly bony prominences, bulges or bumps —
        check there is no pressure on these areas.
      </p>
      <h2 className="text-gray-700 text-4xl font-Cap mt-10">
        Check Wheelchair and PSDs Fit 
      </h2>
      <span className="text-gray-700 text-xl font-Rob font-bold">
        Wheelchair width:
      </span>
      <div className="ml-6 mt-4">
         <Checklist id="6" items={checklistItemsThree} />
      </div>
      <span className="text-gray-700 text-xl font-Rob font-bold">
       Headrest:
      </span>
      <div className="ml-6 mt-4">
         <Checklist id="7" items={checklistItemsFive} />
      </div>
      <span className="text-gray-700 text-xl font-Rob font-bold">
       Thighs:
      </span>
      <div className="ml-6 mt-4">
         <Checklist id="8" items={checklistItemsSix} />
      </div>
      <span className="text-gray-700 text-xl font-Rob font-bold">
       Footrest height:
      </span>
      <div className="ml-6 mt-4">
         <Checklist id="9" items={checklistItemsSeven} />
      </div>


      
      
      
    </>

    
  );
}
