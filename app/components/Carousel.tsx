import Link from "next/link";
import Image from "next/image";

// import { GridTileImage } from "./grid/tile";

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  // const products = await getCollectionProducts({
  //   collection: "hidden-homepage-carousel",
  // });

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
    <div className=" w-full pb-8 overflow-x-hidden">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Image
              className="relative h-full w-full rounded-xl"
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
