import React from "react";

interface LaurelProps {
  children: React.ReactNode;
}

export const Laurel: React.FC<LaurelProps> = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center h-24">
      <img className="absolute h-24 w-auto" src="/laurel.svg" />
      <div className="relative flex flex-col items-center justify-center h-24">
        <span className="z-10 mb-2">{children}</span>
        <div className="flex">
          <img className="h-6 pr-1" src="/star.svg" />
          <img className="h-6 pr-1" src="/star.svg" />
          <img className="h-6 pr-1" src="/star.svg" />
          <img className="h-6 pr-1" src="/star.svg" />
          <img className="h-6 " src="/star.svg" />
        </div>
      </div>
    </div>
  );
};
