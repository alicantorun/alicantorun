"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export function Carousel() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 3; // scroll-fast
    carouselRef.current.scrollLeft = scrollLeft - walk;
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
    <ul
      ref={carouselRef}
      className="flex gap-4 items-center overflow-x-auto w-full cursor-pointer"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {carouselProducts.map((src, index) => (
        <li key={index} className="flex-shrink-0">
          <h1 className="text-2xl pb-2">{src.type}</h1>
          <ImageCard src={src.src} />
        </li>
      ))}
    </ul>
  );
}

function ImageCard({ src }: { src: any }) {
  return (
    <div className="relative aspect-w-16 aspect-h-9">
      <img
        src={src}
        alt=""
        className=" inset-0 w-96 h-96 object-cover rounded-lg"
      />
    </div>
  );
}
