import {motion} from "motion/react";

export const LightBeam = ({color}: any) => {
    return (
        <motion.div
            className="absolute top-0 right-12 w-1 rotate-45 opacity-60 blur-sm z-0 pointer-events-none"
            style={{backgroundColor: color}}
            animate={{
                opacity: [0.3, 0.7, 0.3],
                height: ['30vh', '50vh', '30vh'],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    );
};
