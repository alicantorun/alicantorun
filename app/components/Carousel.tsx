"use client";

import Image from "next/image";
import { useRef, useState } from "react";

// import { GridTileImage } from "./grid/tile";

export function Carousel() {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const lastTouchMove = useRef<number>(Date.now());

  const carouselRef = useRef<HTMLDivElement>(null);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setScrollLeft(carouselRef.current!.scrollLeft);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    if (Date.now() - lastTouchMove.current < 20) return; // Throttle to 20ms
    lastTouchMove.current = Date.now();

    const x = clientX;
    const distance = x - startX;
    const speedMultiplier = window.innerWidth < 640 ? 6 : 3; // Faster scroll on smaller screens
    carouselRef.current!.scrollLeft = scrollLeft - distance * speedMultiplier;
  };

  const handleEnd = () => {
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

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div
      className=" w-full pb-8 overflow-x-hidden "
      ref={carouselRef}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => {
        e.preventDefault();
        handleMove(e.touches[0].clientX);
      }}
      onTouchEnd={handleEnd}
    >
      <ul className="flex animate-carousel gap-4 ">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square max-h-[400px] w-2/3 max-w-[475px] flex-none "
          >
            <Image
              draggable="false"
              className=" relative object-cover h-full w-full rounded-xl border-black border-2 cursor-pointer"
              src={product.src}
              alt={product.alt}
              width="1024"
              height="1024"
            >
              {/* <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              /> */}
            </Image>
          </li>
        ))}
      </ul>
    </div>
  );
}
