export default function MembershipLevels() {
  return (
    <div
      id="membership-levels"
      className="text-center max-w-5xl w-full items-center justify-between mb-12 lg:mb-24 p-4 pb-0"
    >
      <h1 className="mb-4 text-4xl font-extrabold">Memberships levels</h1>
      <h1 className="mb-4 text-xl">Choose a plan that's right for you.</h1>
      <div className="flex flex-col lg:flex-row mb-8">
        <div className="p-8 mb-8 lg:mb-0 lg:mr-4 flex-1 border-black dark:border-white  flex-col justify-center rounded-2xl bg-white shadow-lg">
          <h3 className="text-start  text-4xl mb-4 font-bold">Standard</h3>
          <h1 className="text-start font-extrabold text-4xl mb-2">
            €2799 <span className="text-xl opacity-60">/m</span>
          </h1>
          <h3 className="text-xl text-left mb-4 opacity-60">
            One request at a time. Pause or cancel anytime.
          </h3>
          <ol className="text-lg text-left">
            <li className="mb-2 flex">
              <img className="mr-2" width={24} src="/checkmark.svg" />
              One request at a time
            </li>
            <li className="mb-2 flex">
              <img className="mr-2" width={24} src="/checkmark.svg" />
              48-hour turnaround time
            </li>
            <li className="mb-2 flex">
              <img className="mr-2" width={24} src="/checkmark.svg" />
              Unlimited brands
            </li>
            <li className="mb-2 flex">
              <img className="mr-2" width={24} src="/checkmark.svg" />
              Unlimited requests
            </li>
            <li className="mb-2 flex">
              <img className="mr-2" width={24} src="/checkmark.svg" />
              Slack updates
            </li>
            <li className="mb-2 flex">
              <img className="mr-2" width={24} src="/checkmark.svg" />
              Pause or cancel anytime
            </li>
            <li className="mb-8 flex">
              <img className="mr-2" width={24} src="/checkmark.svg" />
              Payments via Stripe
            </li>
          </ol>
          <a
            href={"https://buy.stripe.com/test_3cs8x09eecTmdc4288"}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:mr-4 text-xl px-8 py-4 rounded-full bg-black text-white shadow-lg hover:bg-slate-700"
          >
            Pay for standard
          </a>
        </div>
        <div className="p-8  lg:mb-0 lg:ml-4 flex-1 border-black dark:border-white  flex-col justify-center rounded-2xl bg-white shadow-lg">
          <h3 className="text-start text-4xl mb-4 font-bold">Pro</h3>
          <h1 className="text-start text-4xl font-extrabold  mb-2">
            €4799 <span className="text-xl opacity-60">/m</span>
          </h1>
          <h3 className="text-xl text-left mb-4 opacity-60">
            One request at a time. Pause or cancel anytime.
          </h3>
          <ol className="text-lg text-left">
            <li className="mb-2 flex">
              <img className="mr-2" width={24} src="/checkmark.svg" />
              One request at a time
            </li>
            <li className="mb-2 flex">
              <img className="mr-2" width={24} src="/checkmark.svg" />
              48-hour turnaround time
            </li>
            <li className="mb-2 flex">
              <img className="mr-2" width={24} src="/checkmark.svg" />
              Unlimited brands
            </li>
            <li className="mb-2 flex">
              <img className="mr-2" width={24} src="/checkmark.svg" />
              Unlimited requests
            </li>
            <li className="mb-2 flex">
              <img className="mr-2" width={24} src="/checkmark.svg" />
              Slack updates
            </li>
            <li className="mb-2 flex">
              <img className="mr-2" width={24} src="/checkmark.svg" />
              Pause or cancel anytime
            </li>
            <li className="mb-8 flex">
              <img className="mr-2" width={24} src="/checkmark.svg" />
              Payments via Stripe
            </li>
          </ol>
          <a
            href={"https://buy.stripe.com/test_28o28Ccqqg5y5JC3cd"}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:mr-4 text-xl px-8 py-4 rounded-full bg-black text-white shadow-lg hover:bg-slate-700"
          >
            Pay for pro
          </a>
        </div>
      </div>
      <div className="p-8 flex-1 border-black dark:border-white  flex-col justify-center rounded-2xl bg-white shadow-lg">
        <h3 className="text-start  text-4xl mb-4 font-bold">Custom pricing</h3>
        <h3 className="text-xl text-left mb-4 opacity-60">
          For people that need 1 time support or are not sure about subscription
          model
        </h3>
        <ol>
          <li className="mb-2 flex">
            <img className="mr-2" width={24} src="/checkmark.svg" />2 revisions
          </li>
          <li className="mb-2 flex">
            <img className="mr-2" width={24} src="/checkmark.svg" />
            Custom delivery time
          </li>
          <li className="mb-2 flex">
            <img className="mr-2" width={24} src="/checkmark.svg" />
            Fixed Scope
          </li>
          <li className="mb-8 flex">
            <img className="mr-2" width={24} src="/checkmark.svg" />
            Async Slack communication&support
          </li>
        </ol>
        <button className=" lg:mr-4 text-xl px-8 py-4 rounded-full bg-black text-white shadow-lg hover:bg-slate-700">
          Schedule a call
        </button>
      </div>
    </div>
  );
}
