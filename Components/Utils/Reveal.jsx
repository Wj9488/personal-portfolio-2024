import { useEffect, useRef } from "react"
import {motion as a, useInView, useAnimation } from "framer-motion"

const Reveal = ({ children, width, delay }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControl = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControl.start("visible")
            slideControls.start("visible")
        }
    }, [isInView])
  return (
    <div
    ref={ref} 
    style={{width, overflow: "hidden",}} >
        <a.div
            variants={{
                initial: {opacity: 0},
                visible: {opacity: 1}
            }}
            initial="initial"
            animate={mainControl}
            transition={{ ease: "easeInOut", duration: 1, delay: delay }}
        >
            {children}
        </a.div>
        {/* <a.div 
            variants={{
                hidden: {left:0, borderRadius: "0%"},
                visible: {left:"100%", borderRadius: "10%"}
            }}
            initial="hidden"
            animate={slideControls}
            transition={{duration: 1, ease: "easeIn"}}
            style={{
                position: "absolute",
                top: 2,
                bottom: 2,
                left: 0, 
                right: 0,
                background: "var(--global-bg)",
                zIndex: 20
            }}
        >    
        </a.div> */}
    </div>
  )
}

export default Reveal