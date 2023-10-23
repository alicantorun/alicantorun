export default function BannerOne() {
  return (
    <div className="text-center max-w-5xl w-full mb-12 lg:mb-24 px-4">
      <h1 className="mb-4 text-4xl font-extrabold w-full">References</h1>
      <div className="flex items-center justify-between">
        <a
          href="https://klepierre.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "20%", height: "100px" }}
        >
          <img
            src="/klepierre.png"
            alt=""
            className="rounded-lg flex-none mx-1 object-contain"
            style={{ width: "100%", height: "100px" }}
          />
        </a>
        <a
          href="https://cirplus.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "20%", height: "100px" }}
        >
          <img
            src="/cirplus.svg"
            alt=""
            className="rounded-lg flex-none mx-1 object-contain"
            style={{ width: "100%", height: "100px" }}
          />
        </a>
        <a
          href="https://parloa.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "20%", height: "100px" }}
        >
          <img
            src="/parloa.webp"
            alt=""
            className="rounded-lg flex-none mx-1 object-contain"
            style={{ width: "100%", height: "100px" }}
          />
        </a>
        <a
          href="https://antler.co"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "20%", height: "100px" }}
        >
          <img
            src="/antler.png"
            alt=""
            className="rounded-lg flex-none mx-1 object-contain"
            style={{ width: "100%", height: "100px" }}
          />
        </a>
      </div>
    </div>
  );
}
