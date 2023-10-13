export default function BannerTwo() {
  return (
    <div className="text-center max-w-5xl w-full items-center justify-between font-mono mb-12 lg:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="p-4 m-2 flex-1">
          <h3 className="mb-4 font-extrabold text-2xl">Feature board</h3>
          <h3 className="mb-4 text-xl">
            Add as many feature requests to your board as you'd like.
          </h3>
        </div>
        <div className="p-4 m-2 flex-1">
          <h3 className="mb-4 font-extrabold text-2xl">
            Lightning fast delivery
          </h3>
          <h3 className="mb-4 text-xl">
            Get your features one at a time in just a few days on average.
          </h3>
        </div>
        <div className=" p-4 m-2 flex-1">
          <h3 className="mb-4 font-extrabold text-2xl">Fixed monthly rate</h3>
          <h3 className="mb-4 text-xl">
            No surprises here! Pay the same fixed price each month.
          </h3>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="p-4 m-2 flex-1">
          <h3 className="mb-4 font-extrabold text-2xl">
            Flexible and scalable
          </h3>
          <h3 className="mb-4 text-xl">
            Scale up or down as needed, and pause or cancel at anytime.
          </h3>
        </div>
        <div className="p-4 m-2 flex-1">
          <h3 className="mb-4 font-extrabold text-2xl">Top-notch quality</h3>
          <h3 className="mb-4 text-xl">
            Superior code quality at your fingertips whenever you need it.
          </h3>
        </div>
        <div className=" p-4 m-2 flex-1">
          <h3 className="mb-4 font-extrabold text-2xl">Unique and all yours</h3>
          <h3 className="mb-4 text-xl">
            Each of your features is made especially for you and is 100% yours.
          </h3>
        </div>
      </div>
    </div>
  );
}
