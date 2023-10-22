export default function MembershipLevels() {
  return (
    <div
      id="membership-levels"
      className="text-center max-w-5xl w-full items-center justify-between mb-12 lg:mb-24"
    >
      <h1 className="mb-4 text-4xl font-extrabold">Memberships levels</h1>
      <h1 className="mb-4 text-xl">Choose a plan that's right for you.</h1>
      <div className="flex flex-col lg:flex-row mb-8">
        <div className="p-8 lg:mb-0 lg:mr-4 flex-1 border-black dark:border-white border-2 flex-col justify-center rounded-2xl">
          <h3 className="text-xl mb-4">Standard</h3>
          <h3 className="text-2xl text-left mb-4">
            One request at a time. Pause or cancel anytime.
          </h3>
          <h1 className="text-4xl">
            €2799 <span className="text-xl">/m</span>
          </h1>
          <h3 className="text-xl mb-4 opacity-50">Pause or cancel anytime</h3>
          <ol>
            <li>One request at a time</li>
            <li>48-hour turnaround time</li>
            <li>Unlimited brands</li>
            <li>Unlimited requests</li>
            <li>Slack updates</li>
            <li>Pause or cancel anytime</li>
            <li>Payments via Stripe</li>
          </ol>
          <button className="border-2 lg:mr-4 text-xl px-8 py-4 rounded-full bg-black text-white">
            Pay for standard
          </button>
        </div>
        <div className="p-8  lg:mb-0 lg:ml-4 flex-1 border-black dark:border-white border-2 flex-col justify-center rounded-2xl">
          <h3 className="text-xl mb-4">Standard</h3>
          <h3 className="text-2xl text-left mb-4">
            One request at a time. Pause or cancel anytime.
          </h3>
          <h1 className="text-4xl">
            €2799 <span className="text-xl">/m</span>
          </h1>
          <h3 className="text-xl mb-4 opacity-50">Pause or cancel anytime</h3>
          <ol>
            <li>One request at a time</li>
            <li>48-hour turnaround time</li>
            <li>Unlimited brands</li>
            <li>Unlimited requests</li>
            <li>Slack updates</li>
            <li>Pause or cancel anytime</li>
            <li>Payments via Stripe</li>
          </ol>
          <button className="border-2 lg:mr-4 text-xl px-8 py-4 rounded-full bg-black text-white">
            Pay for pro
          </button>
        </div>
      </div>
      <div className="p-8 mb-4 lg:mb-0 lg:mr-2 flex-1 border-black dark:border-white border-2 flex-col justify-center rounded-2xl">
        <h3 className="text-xl mb-4">Custom pricing</h3>
        <h3 className="text-2xl text-left mb-4">
          For people that need 1 time support or are not sure about subscription
          model
        </h3>
        <h3 className="text-xl mb-4 opacity-50">Pause or cancel anytime</h3>
        <ol>
          <li>2 revisions</li>
          <li>Custom delivery time</li>
          <li>Fixed Scope</li>
          <li>Async Slack communication&support</li>
        </ol>
        <button className="border-2 lg:mr-4 text-xl px-8 py-4 rounded-full bg-black text-white">
          Schedule a call
        </button>
      </div>
    </div>
  );
}
