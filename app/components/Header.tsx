"use client";

import ThemeToggleButton from "@/app/components/ui/ThemeToggleButton";
import { HamburgerMenu } from "@/app/components/ui/HamburgerMenu";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="z-50 max-w-5xl w-full items-center justify-between flex mb-12 lg:mb-24">
        <p className="">Bytehopper.AI</p>
        <div className=" justify-center items-center hidden lg:flex">
          <a className="mr-8" href="" target="_blank" rel="noopener noreferrer">
            How we work
          </a>
          <a className="mr-8" href="" target="_blank" rel="noopener noreferrer">
            Our work
          </a>
          <a className="mr-8" href="" target="_blank" rel="noopener noreferrer">
            Pricing
          </a>
          <a
            className="border-2 p-2 border-black"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </a>
          <ThemeToggleButton />
        </div>
        <div className="lg:hidden z-50">
          <HamburgerMenu onClick={handleSetIsOpen} isOpen={isOpen} />
        </div>
      </div>
      <div
        className={`absolute top-24 w-full left-0 transform transition-transform duration-300 ease-in-out overflow-hidden  ${
          isOpen ? "translate-y-0 max-h-[300px]" : "-translate-y-full max-h-0"
        }`}
      >
        <div className="dark:bg-black bg-white justify-center items-center flex flex-col opacity-90 pb-4 transition-colors duration-500">
          <a className="mb-4" href="" target="_blank" rel="noopener noreferrer">
            How we work
          </a>
          <a className="mb-4" href="" target="_blank" rel="noopener noreferrer">
            Our work
          </a>
          <a className="mb-4" href="" target="_blank" rel="noopener noreferrer">
            Pricing
          </a>
          <a
            className="mb-4 border-2 p-2 dark:border-white border-black"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us
          </a>
          <ThemeToggleButton />
        </div>
      </div>
    </>
  );
}
