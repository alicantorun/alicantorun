import React from "react";

export default function BannerOne() {
  return (
    <div className="text-center max-w-5xl w-full mb-12 lg:mb-24 px-4">
      <h1 className="mb-4 text-4xl font-extrabold w-full">References</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
        <ReferenceLink
          href="https://klepierre.com"
          imgSrc="/klepierre.png"
          alt=""
        />
        <ReferenceLink
          href="https://cirplus.com"
          imgSrc="/cirplus.svg"
          alt=""
        />
        <ReferenceLink href="https://parloa.com" imgSrc="/parloa.webp" alt="" />
        <ReferenceLink href="https://antler.co" imgSrc="/antler.png" alt="" />
      </div>
    </div>
  );
}

interface ReferenceLinkProps {
  href: string;
  imgSrc: string;
  alt: string;
}

const ReferenceLink: React.FC<ReferenceLinkProps> = ({ href, imgSrc, alt }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-24 p-4 w-full flex items-center justify-center"
    >
      <img
        src={imgSrc}
        alt={alt}
        className="rounded-lg object-contain h-full w-full"
      />
    </a>
  );
};
