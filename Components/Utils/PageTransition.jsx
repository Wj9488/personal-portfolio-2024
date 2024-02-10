
import { motion } from 'framer-motion';
import { slide, opacity, perspective } from './transitionAnim';
import Nav from '../Nav';

const anim = (variants) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

export default function PageTransition({children}) {
    return (
        <div className='accent__color_bg'>
            <motion.div className='h-[100vh] w-full fixed left-0 top-0 mt-0 bg-[#EDEDE9] z-[999]' {...anim(slide)}/>
            <motion.div className='bg-[#EDEDE9] min-h-[100vh]' {...anim(perspective)}>
                <motion.div className='mt-[-10px]' {...anim(opacity)}>
                    <Nav />
                    {
                        children
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}