import {motion} from "motion/react";

export const GlitchText = ({text, textColor}: any) => {
    return (
        <div className="relative">
            <motion.div
                className={`${textColor} relative z-10`}
                animate={{x: [0, -2, 3, 0], y: [0, -1, 2, 0], opacity: [1, 0.85, 1]}}
                transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 5 + 3
                }}
            >
                {text}
            </motion.div>
            <motion.div
                className={`absolute top-0 left-0 ${textColor} opacity-70 z-0`}
                animate={{x: [0, 3, -2, 0], y: [0, 2, -1, 0], opacity: [0.7, 0.5, 0.7]}}
                transition={{
                    duration: 0.1,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 5 + 4
                }}
            >
                {text}
            </motion.div>
        </div>
    );
};
