export default function Hero() {
  return (
    <div className="text-center max-w-5xl w-full items-center justify-between mt-12 mb-24">
      <h1 className="mb-8 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-black dark:from-purple-600 dark:to-white">
        A digital agency with a twist
      </h1>
      <h3 className="mb-8 text-xl">
        Software & AI development subscriptions to scale your business.
      </h3>
      <div className="mb-8">
        <a
          className="border-2 text-xl px-4 py-2 dark:border-white border-black"
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
