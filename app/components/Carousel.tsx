"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface Product {
  handle: string;
  src: string;
  alt: string;
  type: string;
}

export function Carousel() {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(true);
  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isLargeScreen) return;
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isLargeScreen) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 3;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isLargeScreen) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !isLargeScreen) return;
    e.preventDefault();
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 3;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
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

  const carouselProducts = [...products, ...products, ...products];

  return (
    <ul
      ref={carouselRef}
      className="flex gap-4 items-center overflow-x-auto w-full cursor-pointer"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
      }}
    >
      {carouselProducts.map((product, index) => (
        <li
          key={index}
          className="flex-shrink-0"
          style={{
            scrollSnapAlign: "center",
          }}
        >
          <h1 className="text-2xl pb-2">{product.type}</h1>
          <ImageCard src={product.src} />
        </li>
      ))}
    </ul>
  );
}

function ImageCard({ src }: { src: string }) {
  return (
    <div className="relative aspect-w-16 aspect-h-9">
      <img
        src={src}
        alt=""
        className="inset-0 w-96 h-96 object-cover rounded-lg"
      />
    </div>
  );
}
