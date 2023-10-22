import React from "react";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export const HamburgerMenu: React.FC<Props> = ({ onClick, isOpen }) => {
  return (
    <div
      className="cursor-pointer flex flex-col items-center justify-center"
      onClick={onClick}
    >
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={isOpen}
        onChange={onClick}
      />
      <span
        className={`z-50 mb-1 block w-6 h-1 bg-black dark:bg-white transition-all duration-300 transform ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`relative mb-1 block w-6 h-1 bg-black dark:bg-white transition-all duration-300 transform ${
          isOpen ? "bg-transparent dark:opacity-0" : ""
        }`}
      />
      <span
        className={`z-50 block w-6 h-1 bg-black dark:bg-white transition-all duration-300 transform ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </div>
  );
};
