import { motion as a } from "framer-motion";

const LargeHeader = ({ customLetter, headerText }) => {
  const letterAnimation = {
    initial: (index) => ({
      blur: "3px",
      opacity: 0,
      rotate: -5 + index * (10 / headerText.length), // Slightly rotate each letter differently
    }),
    animate: (index) => ({
      blur: "0px",
      opacity: 1,
      rotate: 0,
      transition: {
        ease: [0.87, 0, 0.13, 1],
        duration: 0.75,
        delay: index * 0.05, // Stagger the animation of each letter
      },
    }),
  };

  const customLetterAnim = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        ease: [0.87, 0, 0.13, 1],
        duration: 0.5,
      }
    }
  }

  return (
    <a.h1
      initial="initial"
      animate="animate"
      className="text-[5rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] leading-[.8]"
    >
      <a.span 
      variants={customLetterAnim}
      animate="animate"
      initial="initial"
      className="p leading-[.6] lg:leading-[.8] text-[7rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem]">
        {customLetter}
      </a.span>
      {/* Map over each letter for individual animation */}
      {headerText.split("").map((letter, index) => (
        <a.span
          key={index}
          variants={letterAnimation}
          custom={index} // Pass the index as a custom prop for individual delays
        >
          {letter}
        </a.span>
      ))}
    </a.h1>
  );
};

export default LargeHeader;
