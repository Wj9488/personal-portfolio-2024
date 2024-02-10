// Import motion from framer-motion at the top of your file
import { motion as a } from 'framer-motion';
import Image from "next/image"

export default function SlidingImage({ src, height, width, className }) {
    // Define your animation variants
    const variants = {
        initial: { opacity: 0},
        animate: { opacity: 1},
    };

    return (
        // Use the motion.div component to wrap your Image component
        <a.div 
            className=""
            initial="initial" 
            animate="animate" 
            variants={variants} 
            transition={{ ease:"easeInOut", duration: 1 }}
        >
            <Image 
                src={src}
                alt="image"
                placeholder='blur'
                width={width}
                height={height}
                className={className} 
            />
        </a.div>
    );
}
