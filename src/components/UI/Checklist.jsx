import React, { useState } from "react";
import CheckboxB from "./CheckboxB";

const Checklist = ({ id, items }) => {
  const [checkedItems, setCheckedItems] = useState(items.map(() => false));

  const handleCheck = (idx, value) => {
    const newChecked = [...checkedItems];
    newChecked[idx] = value;
    setCheckedItems(newChecked);
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <CheckboxB
            checked={checkedItems[idx]}
            onChange={(val) => handleCheck(idx, val)}
            uniqueId={`${id}-cbx-${idx}`} // include checklist id
          />
          <p
            className={`text-xl font-Rob transition-all duration-300 ${
              checkedItems[idx] ? "text-gray-400 line-through" : "text-gray-700"
            }`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Checklist;
