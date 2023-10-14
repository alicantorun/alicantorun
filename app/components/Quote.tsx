export default function BannerOne() {
  return (
    <div className="text-center max-w-5xl w-full items-center justify-between font-mono mb-12 lg:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="p-4 flex-1 border-black dark:border-white border-2 flex-col justify-center">
          <h3 className="mb-4 text-left text-8xl h-8">”</h3>
          <h3 className="mb-4 text-left font-extrabold text-4xl">
            I believe AI automation should be accessible to everyone
          </h3>
          <h3 className="text-left text-2xl">
            Alican Torun, Founder of Bytehopper.AI
          </h3>
        </div>
        <div className="p-4 text-left flex-1">
          <h3 className="mb-4 font-extrabold text-xl">Totally async</h3>
          <p className="mb-4">
            Don't like meetings? We don't either; so much so that we've outlawed
            them completely.
          </p>
          <h3 className="mb-4 font-extrabold text-xl">Manage with Notion</h3>
          <p className="mb-4">
            Manage your design board using Notion. View active, queued and
            completed tasks with ease.
          </p>
          <h3 className="mb-4 font-extrabold text-xl">
            Invite unlimited team members
          </h3>
          <p className="">
            Invite your entire team, so anyone can submit requests and track
            their progress.
          </p>
        </div>
      </div>
    </div>
  );
}
