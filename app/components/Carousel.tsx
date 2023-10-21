"use client";

"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setScrollLeft(carouselRef.current!.scrollLeft);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const x = clientX;
    const distance = x - startX;
    carouselRef.current!.scrollLeft = scrollLeft - distance;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const products: any[] = [
    { handle: "1", src: "/ai-chat-app.png", alt: "ai-chat-app" },
    {
      handle: "2",
      src: "/ai-interior-design-app.png",
      alt: "ai-interior-design-app",
    },
    { handle: "3", src: "/blog-app.png", alt: "blog-app" },
    { handle: "4", src: "/pricing-plan-app.png", alt: "pricing-plan-app" },
    { handle: "5", src: "/e-commerce-app-2.png", alt: "e-commerce-app-2" },
    { handle: "6", src: "/e-commerce-app.png", alt: "e-commerce-app" },
  ];

  if (!products.length) return null;

  const carouselProducts = [...products, ...products, ...products]; // Extend product list for carousel loop

  return (
    <div
      className="w-full pb-8 overflow-x-hidden"
      ref={carouselRef}
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseMove={(e) => handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => {
        e.preventDefault();
        handleDragMove(e.touches[0].clientX);
      }}
      onTouchEnd={handleDragEnd}
    >
      <ul className="flex gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square max-h-[400px] w-2/3 max-w-[475px] flex-none"
          >
            <Image
              draggable="false"
              className="relative animate-carousel-fast lg:animate-carousel object-cover h-full w-full rounded-xl border-black border-2 cursor-pointer"
              src={product.src}
              alt={product.alt}
              width="1024"
              height="1024"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
