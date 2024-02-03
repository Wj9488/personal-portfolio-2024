import { motion as a } from "framer-motion"



const LargeHeader = ({ customLetter, headerText }) => {

  const headerAnimation = {
    initial: {
      // y: 20,
      opacity: 0,
      // rotate: "1deg"
    },
    animate: {
      // y: 0,
      opacity: 1, 
      // rotate: "0deg",
      transition: {
        ease: [0.87, 0, 0.13, 1],
        duration: 0.75,
      }
    }
  }

  return (
    <a.h1 
    className="text-[5rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] leading-[.8]">
      <span className="p leading-[.6] lg:leading-[.8] text-[7rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem]">
        {customLetter}
      </span>
      {headerText}
    </a.h1>
  );
};

export default LargeHeader;
