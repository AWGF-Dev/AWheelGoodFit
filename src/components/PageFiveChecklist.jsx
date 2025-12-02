import React from "react";
import Checklist from "./UI/Checklist";

export default function PageFiveChecklist() {
  const checklistItemsOne = [
    "There are no sharp edges",
    "PSDs are well padded and tightly fixed",
    "No parts are damaged or scratched",
    "The wheelchair travels in a straight line",
  ];
    const checklistItemsTwo = [
    "Spin freely",
    "Spin without touching the fork",
    "Bolts are tight",
  ];
    const checklistItemsThree = [
    "Castor fork spins freely",
  ];
      const checklistItemsFour = [
    "Spin freely",
    "Axle bolts are tight",
    "Tyres inflated conectly (with thumb pressure, wheel can be depressed less than 5mm)",
    "Push rims are secure",
  ];
        const checklistItems5 = [
    "Function properly",
  ];
        const checklistItems6 = [
    "Footrests are securely attached",
  ];
        const checklistItems7 = [
    "For a cross-folding wheelchair — the wheelchair folds and unfolds easily",
    "For a wheelchair with fold-down backrest — the backrest folds and unfolds easily",
  ];
        const checklistItems8 = [
    "The cushion is in the cover correctly",
    "The cushion is sitting on the wheelchair correctly",
    "The cushion cover fabric is tight but not too tight",
    "If the wheelchair has a solid seat: the cushion fully covers the solid seat",
  ];
        const checklistItems9 = [
    "Has the wheelchair been checked to make sure it is safe and ready to use and all parts are working?",
  ];
        const checklistItems10 = [
    "Does the backrest allow the wheelchair user freedom to move their shoulders to push?",
    "Does movement of the wheelchair or the action of pushing cause the wheelchair user to change their posture or feel uncomfortable or unstable in any way?",
    "Hand propelling: Is the rear wheel position correct for the wheelchair user to push as well as he/she can?",
    "Foot propelling Is the seat height and depth correct for the user to push with their leg/s?",
    "Do the posture supports allow for unrestricted and safe wheelchair mobility?",
  ];
        const checklistItems11 = [
    "Is there any further action necessary? Write any actions in the wheelchair user's file.",
  ];

  return (
    <>  
            <div className="flex justify-left">
            <div className="p-4 border-2 border-blue-500 w-200">
                <span className="text-gray-700 text-xl font-Rob font-bold">
                Whole wheelchair including PSDs
            </span>
            <div className="ml-6 my-4">
                <Checklist id="1" items={checklistItemsOne} />
            </div>
            <span className="text-gray-700 text-xl font-Rob font-bold">
            Front castor wheels
            </span>
            <div className="ml-6 my-4">
                <Checklist id="2" items={checklistItemsTwo} />
            </div>
            <span className="text-gray-700 text-xl font-Rob font-bold">
            Front castor barrels
            </span>
            <div className="ml-6 my-4">
                <Checklist id="3" items={checklistItemsThree} />
            </div>
            <span className="text-gray-700 text-xl font-Rob font-bold">
            Rear wheels
            </span>
            <div className="ml-6 my-4">
                <Checklist id="4" items={checklistItemsFour} />
            </div>
            <span className="text-gray-700 text-xl font-Rob font-bold">
            Brakes
            </span>
            <div className="ml-6 my-4">
                <Checklist id="5" items={checklistItems5} />
            </div>
            <span className="text-gray-700 text-xl font-Rob font-bold">
            Footrests
            </span>
            <div className="ml-6 my-4">
                <Checklist id="6" items={checklistItems6} />
            </div>
            <span className="text-gray-700 text-xl font-Rob font-bold">
            Frame
            </span>
            <div className="ml-6 my-4">
                <Checklist id="7" items={checklistItems7} />
            </div>
            <span className="text-gray-700 text-xl font-Rob font-bold">
            Cushion
            </span>
            <div className="ml-6 my-4">
                <Checklist id="8" items={checklistItems8} />
            </div>
            <span className="text-gray-700 text-xl font-Rob font-bold">
            Is the Wheelchair Ready?
            </span>
            <div className="ml-6 my-4">
                <Checklist id="9" items={checklistItems9} />
            </div>
            <span className="text-gray-700 text-xl font-Rob font-bold">
            Check fit while the wheelchair is moving FINAL
            </span>
            <div className="ml-6 my-4">
                <Checklist id="10" items={checklistItems10} />
            </div>
            <span className="text-gray-700 text-xl font-Rob font-bold">
            Decide if any further action is required
            </span>
            <div className="ml-6 my-4">
                <Checklist id="11" items={checklistItems11} />
            </div>
            </div>
            </div>
        
    </>

    
  );
}
