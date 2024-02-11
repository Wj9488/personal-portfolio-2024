import { useEffect, useRef } from "react"
import { motion as a, useInView, useAnimation } from "framer-motion"

const SmallHeader = ({ customLetter, headerText }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControl = useAnimation()

  useEffect(() => {
      if (isInView) {
          mainControl.start("animate")
      }
  }, [isInView])

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
  };

  // Define the animation for each letter in the headerText
  const letterAnimation = {
    initial: (index) => ({
      blur: "3px",
      opacity: 0,
      rotate: -5 + index * (10 / headerText.length),
    }),
    animate: (index) => ({
      blur: "0px",
      opacity: 1,
      rotate: 0,
      transition: {
        ease: [0.87, 0, 0.13, 1],
        duration: 0.75,
        delay: index * 0.05,
      },
    }),
  };

  return (
    <a.h3
      ref={ref}
      initial="initial"
      animate={mainControl}
      className="text-[3.25rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[8rem] leading-[1] my-[2.5rem]"
    >
      <a.span 
        variants={customLetterAnim}
        animate={mainControl}
        initial="initial"
        className="p text-[5rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[10rem]"
      >
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
    </a.h3>
  );
};

export default SmallHeader;
