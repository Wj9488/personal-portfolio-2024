import Link from "next/link";
import LargeHeader from "./LargeHeader";

const FooterCta = () => {
  return (
    <div className="margin__setter">
      <div className="mt-[10rem] lg:w-[70%] xl:w-[60%] lg:ml-[10rem] ml-[1.25rem] mb-[2.5rem]">
        <LargeHeader customLetter="L" headerText="et's work together." />
      </div>
      <div className="flex items-center gap-4 lg:ml-[20%] ml-[2.5rem]">
        <Link href={"/contact"}>
            <button className="cta__large_border text-2xl lg:text-3xl py-3 px-6 lg:py-6 lg:px-12 rounded-2xl font-medium">
            Get Started
            </button>
        </Link>
        <Link
            href={"https://www.linkedin.com/in/william-jones-450715251/"}
            target="_blank"
        >
            <button className="cta__large_border_l text-2xl lg:text-3xl py-3 px-6 lg:py-6 lg:px-12 rounded-2xl font-medium">
            LinkedIn
            </button>
        </Link>
      </div>
    </div>
  );
};

export default FooterCta;
