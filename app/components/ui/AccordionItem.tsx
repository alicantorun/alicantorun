"use client";

import { FC, Fragment, useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string[];
  isLast?: boolean;
}

const AccordionItem: FC<AccordionItemProps> = ({
  title,
  content,
  isLast = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b ${isLast ? " rounded-b-2xl" : "mb-4"}`}>
      <div
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-bold text-left">{title}</p>
        <div
          className={`transform transition-transform duration-500 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-4">
          {content.map((item, index) => (
            <Fragment key={index}>
              <p className="text-left">{item}</p>
              {index < content.length - 1 && <br />}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
