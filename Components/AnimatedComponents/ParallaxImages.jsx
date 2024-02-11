import P_side1 from "../../public/Images/w__about_s1.jpg";
import P_side2 from "../../public/Images/w__about_s2.jpg";
import P_side3 from "../../public/Images/w__about_s3.jpg";
import P_side4 from "../../public/Images/w__about_s4.jpg";

import SlidingImage from "../Utils/AnimatedImage";

import { useScroll, useTransform, motion as a } from "framer-motion";

export default function ParallaxImages() {
    const { scrollYProgress } = useScroll();

    const imageOneTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const imageTwoTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
    const imageThreeTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
    const imageFourTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    
    const scale = useTransform(scrollYProgress, [0, 1], [1.0, 1.25]);

    const fadeTransition = {
        duration: 0.75,
        ease: [0.87, 0, 0.13, 1]
    };

    return (
        <div className="mt-[15rem] lg:mt-[10rem] margin__setter">
            <div className="flex items-start justify-between">
                <a.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={fadeTransition}
                    style={{ y: imageOneTranslate, scale }}
                >
                    <SlidingImage height="300" width="200" src={P_side1} className="rounded-2xl" />
                </a.div>
                <a.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={fadeTransition}
                    style={{ y: imageTwoTranslate, scale }}
                >
                    <SlidingImage height="600" width="400" src={P_side3} className="lg:ml-[1.25rem] mt-[5rem] ml-[0rem] rounded-2xl lg:w-[400px] lg:h-[600px] h-[auto] w-[350px]" />
                </a.div>
                <a.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={fadeTransition}
                    style={{ y: imageThreeTranslate, scale }}
                >
                    <SlidingImage height="375" width="275" src={P_side4} className="lg:ml-[2rem] ml-[1.25rem] mt-[2.5rem] lg:mt-[15rem] lg:block hidden rounded-2xl" />
                </a.div>
                <a.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={fadeTransition}
                    style={{ y: imageFourTranslate, scale }}
                >
                    <SlidingImage height="400" width="300" src={P_side2} className="lg:ml-[2.5rem] mt-[-10rem] mr-[1.25rem] rounded-2xl" />
                </a.div>
            </div>
        </div>
    );
}
