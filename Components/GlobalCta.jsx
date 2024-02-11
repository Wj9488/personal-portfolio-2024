import Link from "next/link"
import { motion as a, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const GlobalCta = ({ ctaText }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControl = useAnimation()

  useEffect(() => {
    if (isInView) {
        mainControl.start("animate")
    }
  }, [isInView])


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
        <a.button ref={ref} className="cta__border text-xl py-2 px-4 rounded-2xl font-medium hvr"
        initial="initial"
        animate={mainControl}
        variants={animCta}
        >
            {ctaText}
        </a.button>
    </Link>
  )
}

export default GlobalCta