export default function Hero() {
  return (
    <div className="text-center max-w-5xl w-full items-center justify-between font-mono mb-12 lg:mb-24">
      <h1 className="mb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-black">
        AI Consultancy & Automation Agency
      </h1>
      <h3 className="mb-4 text-xl">
        Development subscriptions to scale your business.
      </h3>
      <div className="mb-4">
        <a
          className="border-2 text-xl p-2 border-black"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          See plans
        </a>
      </div>
      <h3 className="">
        Software you'll <span className="text-2xl text-red-600">❤️</span>,
        guaranteed.
      </h3>
    </div>
  );
}
