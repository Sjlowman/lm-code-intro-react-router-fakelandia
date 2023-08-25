import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const Dropdown = ({ placeHolder, options }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeHolder;
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };

  return (
    <div className="text-left border rounded w-1/4">
      <div
        onClick={handleInputClick}
        className="p-1 flex object-center justify-between select-none"
      >
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
        {showMenu && (
          <div className="absolute w-auto border rounded overflow-auto max-h-36 bg-white">
            {options.map((option) => (
              <div
                onClick={() => onItemClick(option)}
                key={option.value}
                className={` ${isSelected(option) && "bg-gray-400"}`}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
