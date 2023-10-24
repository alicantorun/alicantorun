import React from "react";

const FreeConsultation = () => {
  return (
    <div className="flex flex-col text-center max-w-5xl mx-4 items-center justify-between mb-12 lg:mb-24 bg-[#F5F5F7] p-16 w-full rounded-xl ">
      <h1 className="text-4xl font-semibold mb-4">
        Get started by yourself, for free
      </h1>
      <h3 className="mb-4">
        A free consultation session to delve into software development and AI
        automation for your needs, today!
      </h3>
      <div className="mt-4">
        <a
          className="text-xl px-8 py-4 rounded-xl bg-black hover:bg-slate-700 text-white box-border shadow-lg"
          href="https://calendly.com/alicantorun/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule a call 📅
        </a>
      </div>
    </div>
  );
};

export { FreeConsultation };
