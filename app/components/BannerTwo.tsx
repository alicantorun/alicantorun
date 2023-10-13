import Lottie from "lottie-react";
import mail from "@/app/components/animations/mail.json";
import calendar from "@/app/components/animations/calendar.json";

export default function BannerTwo() {
  return (
    <div className="text-center max-w-5xl w-full items-center justify-between font-mono mb-12 lg:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="p-4 m-2 flex-1">
          {/* <Lottie animationData={mail} loop={true} />
          <Lottie animationData={calendar} loop={true} /> */}
          <h3 className="mb-4 text-xl">
            Develop as you know it is out the door. Develop as you want it just
            arrived.
          </h3>
        </div>
        <div className="p-4 m-2 flex-1">
          <h3 className="mb-4 text-xl">
            Receive your code within a few business days on average, Monday to
            Friday.
          </h3>
        </div>
        <div className=" p-4 m-2 flex-1">
          <h3 className="mb-4 text-xl">
            We'll revise the code until you're 100% satisfied.
          </h3>
        </div>
      </div>
    </div>
  );
}