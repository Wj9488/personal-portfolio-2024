export const perspective = {
    initial: {
        scale: 1,
        rotateX: 0,
        y: 0,
    },
    enter: {
        scale: 1,
        rotateX: 0,
        y: 0,
    },
    exit: {
        scale: 0.9,
        rotateX: -20,
        // y: -0,
        opacity: 0.75,
        transition: {
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
            staggerChildren: 0.1 
        }
    }
}


export const slide = {
    initial: {
        y: "120vh",
        skewY: 10,
    },
    enter: {
        y: "120vh",
        skewY: 10,
    },
    exit: {
        y: 0,
        skewY: 0,
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}


export const opacity = {
    initial: {
        opacity: 0,
        scale: 0.99
    },
    enter: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 1,
        scale: 1
    }
}
