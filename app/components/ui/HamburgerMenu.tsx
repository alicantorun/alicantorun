import React from "react";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export const HamburgerMenu: React.FC<Props> = ({ onClick, isOpen }) => {
  return (
    <div className="cursor-pointer absolute -top-1 right-6" onClick={onClick}>
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={isOpen}
        onChange={onClick}
      />
      <span
        className={`z-50 block w-6 h-1 bg-black dark:bg-white my-1 transition-all duration-300 transform ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`relative block w-6 h-1 bg-black dark:bg-white my-1 transition-all duration-300 transform ${
          isOpen ? "bg-transparent dark:opacity-0" : ""
        }`}
      />
      <span
        className={`z-50 block w-6 h-1 bg-black dark:bg-white my-1 transition-all duration-300 transform ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </div>
  );
};
