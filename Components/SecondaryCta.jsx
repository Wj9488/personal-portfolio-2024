import Link from "next/link"
import { motion as a, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const SecondaryCta = ({ ctaText }) => {
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
        delay: .75, 
      }
    }
  }

  return (
    <Link href={"https://www.linkedin.com/in/william-jones-450715251/"} target="_blank">
        <a.button ref={ref} className="hvr secondary__cta_border text-xl py-2 px-4 rounded-2xl font-medium"
          animate={mainControl}
          initial="initial"
          variants={animCta}
        >
            {ctaText}
        </a.button>
    </Link>
  )
}

export default SecondaryCta