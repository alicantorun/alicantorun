import ThemeToggleButton from "@/app/components/ui/ThemeToggleButton";

export default function Header() {
  return (
    <div className="max-w-5xl w-full items-center justify-between font-mono lg:flex mb-12 lg:mb-24">
      <p className="">Bytehopper.AI</p>
      <div className=" justify-center items-center hidden lg:flex">
        <a className="mr-8" href="" target="_blank" rel="noopener noreferrer">
          How we work
        </a>
        <a className="mr-8" href="" target="_blank" rel="noopener noreferrer">
          Our work
        </a>
        <a className="mr-8" href="" target="_blank" rel="noopener noreferrer">
          Pricing
        </a>
        <a
          className="border-2 p-2 border-black"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact us
        </a>
        <ThemeToggleButton />
      </div>
    </div>
  );
}
