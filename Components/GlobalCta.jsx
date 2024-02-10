import Link from "next/link"
import { motion as a } from "framer-motion"

const GlobalCta = ({ ctaText }) => {

  const animCta = {
    initial: {opacity: 0},
    animate: {
      opacity: 1, 
      transition: {
        duration: 1,
        ease: "linear", 
        delay: .5, 
      }
    }
  }

  return (
    <Link href={"/contact"}>
        <a.button className="cta__border text-xl py-2 px-4 rounded-2xl font-medium hvr"
        initial="initial"
        animate="animate"
        variants={animCta}
        >
            {ctaText}
        </a.button>
    </Link>
  )
}

export default GlobalCta