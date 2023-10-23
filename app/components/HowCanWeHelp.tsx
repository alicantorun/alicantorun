import {
  IconUserScan,
  IconCode,
  IconCalendarEvent,
  IconBrush,
} from "@tabler/icons-react";

export default function HowCanWeHelp() {
  return (
    <div className="text-left  max-w-5xl w-full items-center justify-between mb-42 lg:mb-24">
      <h3 className="text-center font-extrabold text-4xl">How can we help?</h3>
      <div className="flex flex-col lg:flex-row ">
        <div className="p-8 flex flex-1 bg-white text-black m-4 rounded-xl shadow-lg ">
          <div className="mr-2">
            {/* <IconUserScan className="" color="red" size={48} /> */}
            <span className="text-4xl">🤖</span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">AI automation</h3>
            <h3 className="text-xl font-light mb-4">
              Our team can assist you in developing advanced AI automation
              solutions for your digital systems, resolving concrete challenges
              and improving crucial business indicators with intelligent
              workflows.
            </h3>
            <h3 className="text-md">AI AUTOMATION</h3>
          </div>
        </div>

        <div className="p-8 flex flex-1 bg-white text-black m-4 rounded-xl shadow-lg ">
          <div className="mr-2">
            {/* <IconCode className="" color="blue" size={48} /> */}
            <span className="text-4xl">👨‍💻</span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Full stack development
            </h3>
            <h3 className="text-xl font-light mb-4">
              Our team can assist you in building comprehensive full-stack
              solutions for your digital platforms, tackling specific challenges
              and boosting vital business metrics with seamless integration and
              functionality.
            </h3>
            <h3 className="text-md">SOFTWARE DEVELOPMENT</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="p-8 flex flex-1 bg-white text-black m-4 rounded-xl shadow-lg ">
          <div className="mr-2">
            {/* <IconCalendarEvent className="" color="orange" size={48} /> */}
            <span className="text-4xl">🗓️</span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Consultation</h3>
            <h3 className="text-xl font-light mb-4">
              We can assist you in fulfilling business needs using your
              resources, while addressing questions, optimizing resources,
              providing a UX roadmap, and offering design insights.
            </h3>
            <h3 className="text-lg">RESEARCH</h3>
          </div>
        </div>

        <div className="p-8 flex flex-1 bg-white text-black m-4 rounded-xl shadow-lg ">
          <div className="mr-2">
            {/* <IconBrush className="" color="green" size={48} /> */}
            <span className="text-4xl">🎨</span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Product design</h3>
            <h3 className="text-xl font-light mb-4">
              Our team can help you create exceptional user experiences for your
              digital products, addressing tangible issues and enhancing
              essential business metrics with captivating interfaces.
            </h3>
            <h3 className="text-lg">DESIGN</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
