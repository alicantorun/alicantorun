"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 bg-[#FAFAFA]
                        w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12
                        sm:top-4 sm:rounded-full
                        ${isScrolled ? "sm:top-2" : ""}
                        ${
                            isScrolled
                                ? "bg-white/80 backdrop-blur-md shadow-lg"
                                : "bg-white"
                        }`}
        >
            <div className="px-4 sm:px-6 py-3 flex justify-between items-center">
                <span className="text-lg sm:text-xl font-bold">
                    Bolt ⚡ Studio
                </span>

                <button
                    className="sm:hidden w-8 h-8 flex flex-col justify-center items-center"
                    onClick={toggleMenu}
                >
                    <span
                        className={`bg-black block transition-all duration-300 ease-out 
                            h-0.5 w-5 rounded-sm ${
                                isOpen
                                    ? "rotate-45 translate-y-1"
                                    : "-translate-y-0.5"
                            }`}
                    ></span>
                    <span
                        className={`bg-black block transition-all duration-300 ease-out 
                            h-0.5 w-5 rounded-sm my-0.5 ${
                                isOpen ? "opacity-0" : "opacity-100"
                            }`}
                    ></span>
                    <span
                        className={`bg-black block transition-all duration-300 ease-out 
                            h-0.5 w-5 rounded-sm ${
                                isOpen
                                    ? "-rotate-45 -translate-y-1"
                                    : "translate-y-0.5"
                            }`}
                    ></span>
                </button>

                <nav className="hidden sm:flex items-center space-x-4">
                    <Link href="#work" className="text-sm hover:underline">
                        Work
                    </Link>
                    <Link href="#about" className="text-sm hover:underline">
                        About
                    </Link>
                    <Link href="#contact" className="text-sm hover:underline">
                        Contact
                    </Link>
                    <Button variant="default" size="sm">
                        Start
                    </Button>
                </nav>
            </div>

            <div
                className={`sm:hidden ${
                    isOpen ? "max-h-60" : "max-h-0"
                } overflow-hidden transition-all duration-300 ease-in-out`}
            >
                <nav className="flex flex-col items-center space-y-3 py-3">
                    <Link href="#work" className="text-sm hover:underline">
                        Work
                    </Link>
                    <Link href="#about" className="text-sm hover:underline">
                        About
                    </Link>
                    <Link href="#contact" className="text-sm hover:underline">
                        Contact
                    </Link>
                    <Button variant="default" size="sm">
                        Start a project
                    </Button>
                </nav>
            </div>
        </header>
    );
};
