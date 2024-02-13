import Link from "next/link";
import LargeHeader from "./LargeHeader";
import { useScroll, useTransform, motion as a } from "framer-motion";

const FooterCta = () => {
  const { scrollYProgress } = useScroll();
  const transformBorder = useTransform(scrollYProgress, [0.75, 1], ["0px", "30px"]);
  return (
    <a.section className="relative z-[10] px-[2.5%] mb-[1.1rem] pb-[5rem] shadow-lg"
    style={{borderBottomLeftRadius: transformBorder, borderBottomRightRadius: transformBorder}}
    >
      <div className="mt-[10rem] lg:w-[70%] xl:w-[60%] lg:ml-[10rem] ml-[1.25rem] mb-[2.5rem]">
        <LargeHeader customLetter="L" headerText="et's work together." />
      </div>
      <div className="flex items-center gap-4 lg:ml-[20%] ml-[2.5rem]">
        <Link href={"/contact"}>
            <button className="hvr cta__large_border text-2xl lg:text-3xl py-3 px-6 lg:py-6 lg:px-12 rounded-2xl font-medium">
            Get Started
            </button>
        </Link>
        <Link
            href={"https://www.linkedin.com/in/william-jones-450715251/"}
            target="_blank"
        >
            <button className="hvr cta__large_border_l text-2xl lg:text-3xl py-3 px-6 lg:py-6 lg:px-12 rounded-2xl font-medium">
            LinkedIn
            </button>
        </Link>
      </div>
    </a.section>
  );
};

export default FooterCta;
