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
    {
      handle: "1",
      src: "/ai-chat-app.png",
      alt: "ai-chat-app",
      type: "Chatbots",
    },
    {
      handle: "2",
      src: "/ai-interior-design-app.png",
      alt: "ai-interior-design-app",
      type: "AI apps",
    },
    { handle: "3", src: "/blog-app.png", alt: "blog-app", type: "Blogs" },
    {
      handle: "4",
      src: "/pricing-plan-app.png",
      alt: "pricing-plan-app",
      type: "Payment integrations",
    },
    {
      handle: "5",
      src: "/e-commerce-app-2.png",
      alt: "e-commerce-app-2",
      type: "Ecommerce apps",
    },
    {
      handle: "6",
      src: "/e-commerce-app.png",
      alt: "e-commerce-app",
      type: "Ecommerce apps",
    },
  ];

  if (!products.length) return null;

  const carouselProducts = [...products, ...products, ...products]; // Extend product list for carousel loop

  return (
    <div
      className="w-full mb-16 overflow-x-hidden"
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
      <ul className="flex animate-carousel-fast lg:animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square max-h-[400px] max-w-[475px] w-2/3  flex-none"
          >
            <h1 className="text-2xl pb-2">{product.type}</h1>
            <Image
              draggable="false"
              className="relative object-cover h-full w-full rounded-xl shadow-lg cursor-pointer"
              src={product.src}
              alt={product.alt}
              width="1920"
              height="1080"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
