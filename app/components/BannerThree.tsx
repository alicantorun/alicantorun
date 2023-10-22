"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function BannerThree() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleAutoScroll = () => {
      if (carouselRef.current) {
        const scrollFactor = 0.3;
        carouselRef.current.scrollLeft = window.pageYOffset * scrollFactor;
      }
    };

    window.addEventListener("scroll", handleAutoScroll);
    return () => window.removeEventListener("scroll", handleAutoScroll);
  }, []);

  const products: any[] = [
    { handle: "1", text: "Software Development •" },
    { handle: "2", text: "AI Automation •" },
    { handle: "3", text: "No Code-Low Code •" },
    { handle: "4", text: "Full Stack •" },
  ];

  if (!products.length) return null;

  const carouselProducts = [...products, ...products, ...products];

  return (
    <div
      className="w-full overflow-x-hidden  shadow-md bg-white mb-8 lg:mb-24"
      ref={carouselRef}
    >
      <ul className="flex gap-4 justify-center align-middle p-8">
        {carouselProducts.map((product, i) => (
          <li key={`${product.handle}${i}`} className="relative flex-none">
            <h1 className="text-4xl font-semibold">{product.text}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
