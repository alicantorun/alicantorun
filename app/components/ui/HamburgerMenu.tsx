"use client";

import React, { useState } from "react";

export const HamburgerMenu = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="block items-center h-20">
      <label className="cursor-pointer">
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span
          className={`z-50 block w-6 h-1 bg-black dark:bg-white my-1 mx-auto transition-all duration-300 transform ${
            isChecked ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`relative block w-6 h-1 bg-black dark:bg-white my-1 mx-auto transition-all duration-300 transform ${
            isChecked ? "bg-transparent dark:opacity-0" : ""
          }`}
        />
        <span
          className={`z-50 block w-6 h-1 bg-black dark:bg-white my-1 mx-auto transition-all duration-300 transform ${
            isChecked ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </label>
    </div>
  );
};
