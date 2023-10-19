import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BannerOne from "./components/BannerOne";
import BannerTwo from "./components/BannerTwo";
import BannerThree from "./components/BannerThree";
import BannerFour from "./components/BannerFour";
import Quote from "./components/Quote";
import Membership from "./components/Membership";
import Services from "./components/Services";
import MembershipLevels from "./components/MembershipLevels";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-6 p-6 lg:p-24 transition-colors duration-500  dark:bg-black dark:text-white">
      <Header />
      <Hero />
      <BannerOne />
      <BannerTwo />
      <BannerThree />
      <Quote />
      <Membership />
      <BannerFour />
      <Services />
      <MembershipLevels />
      <FAQs />
      <Footer />
    </main>
  );
}
