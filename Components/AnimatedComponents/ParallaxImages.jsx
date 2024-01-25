
import P_side1 from "../../public/Images/w__about_s1.jpg";
import P_side2 from "../../public/Images/w__about_s2.jpg";
import P_side3 from "../../public/Images/w__about_s3.jpg";
import P_side4 from "../../public/Images/w__about_s4.jpg";

import Image from "next/image"
import { useScroll, useTransform, motion as a } from "framer-motion"

export default function ParallaxImages() {

    const { scrollYProgress } = useScroll()

    const imageOneTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const imageTwoTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
    const imageThreeTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
    const imageFourTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <div className="mt-[15rem] lg:mt-[10rem] margin__setter">
            <div className="flex items-start justify-between">
            <a.div
                style={{ y: imageOneTranslate  }}
            >
                <Image 
                    src={P_side1}
                    width={200}
                    height={300}
                    alt="Will Jones"
                    className="rounded-2xl"
                />
            </a.div>
            <a.div
                style={{ y: imageTwoTranslate }}
            >
                <Image 
                    src={P_side3}
                    width={400}
                    height={600}
                    alt="Will Jones"
                    className="lg:ml-[1.25rem] mt-[5rem] ml-[.75rem] rounded-2xl"
                />
            </a.div >
            <a.div
                style={{ y: imageThreeTranslate }}
            >
                <Image 
                    src={P_side4}
                    width={275}
                    height={375}
                    alt="Will Jones"
                    className="lg:ml-[2rem] ml-[1.25rem] mt-[2.5rem] lg:mt-[15rem] lg:block hidden rounded-2xl"
                />
            </a.div>
            <a.div
                style={{ y: imageFourTranslate }}
            >
                <Image 
                    src={P_side2}
                    width={300}
                    height={400}
                    alt="Will Jones"
                    className="lg:ml-[2.5rem] mt-[-10rem] mr-[1.25rem] rounded-2xl"
                />
            </a.div>
            </div>
        </div>
    );
}