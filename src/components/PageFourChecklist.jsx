import React from "react";
import Checklist from "./UI/Checklist";

export default function PageFourChecklist() {
  const checklistItems = [
    "Read all instructions",
    "Check model orientation",
    "Review hotspots",
    "Complete learning tasks",
    "Confirm understanding"
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-Pixelmono mb-4">Below is a checlist that definitely works:</h2>
      <Checklist items={checklistItems} />
    </div>
  );
}
