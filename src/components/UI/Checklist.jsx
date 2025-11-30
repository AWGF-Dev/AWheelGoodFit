import React, { useState } from "react";
import CheckboxB from "./CheckboxB";

const Checklist = ({ items }) => {
  // Track all items' checked state
  const [checkedItems, setCheckedItems] = useState(
    items.map(() => false)
  );

  const handleCheck = (idx, value) => {
    const newChecked = [...checkedItems];
    newChecked[idx] = value;
    setCheckedItems(newChecked);
  };

  const allCompleted = checkedItems.every((c) => c);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
            <CheckboxB
            checked={checkedItems[idx]}
            onChange={(val) => handleCheck(idx, val)}
            uniqueId={`cbx-${idx}`} // unique per item
            />
          <p
            className={`text-xl font-Rob transition-all duration-300 ${
              checkedItems[idx]
                ? "text-gray-400 line-through"
                : "text-gray-700"
            }`}
          >
            {item}
          </p>
        </div>
      ))}

      {allCompleted && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 font-bold rounded">
            All items completed YEAHHHHH!
        </div>
      )}
    </div>
  );
};

export default Checklist;
