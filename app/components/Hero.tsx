export default function Hero() {
  return (
    <div className="text-center max-w-5xl w-full items-center justify-between mt-12 mb-24">
      <h1 className="text-left text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-black dark:from-purple-600 dark:to-white">
        Software & AI Automation,
      </h1>
      <h1 className="mb-4 text-left text-5xl lg:text-6xl font-extrabold  bg-clip-text bg-gradient-to-r text-black dark:text-white">
        as a Service
      </h1>
      <h3 className="text-left text-xl font-bold">
        A monthly subscription. Done-for-you software and AI automation
        solutions that enhance efficiency. For companies utilizing +$10,000/mo
        in software tools.
      </h3>
      <h3 className="text-left mb-16 text-xl">
        By people who built & sold SaaS companies, through SEO.
      </h3>
      <div className="mb-8 flex flex-col lg:block">
        <a
          className="border-2 lg:mr-4 text-xl px-8 py-4 rounded-xl bg-black text-white"
          href="https://calendly.com/alicantorun/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule a call 📅
        </a>
        <a
          className="border-2 text-xl px-8 py-4 rounded-xl bg-black text-white"
          href="#membership-levels"
        >
          See plans 🏷️
        </a>
      </div>
      <h3 className="">
        Software you'll <span className="text-2xl text-red-600">❤️</span>,
        guaranteed.
      </h3>
    </div>
  );
}
