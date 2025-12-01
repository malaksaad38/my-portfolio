import { motion } from "motion/react";

export const SmokeEffect = ({color}: any) => {
    const smokeVariants = {
        initial: {opacity: 0, scale: 0.6},
        animate: {
            opacity: [0, 0.5, 0],
            scale: [0.2, 1, 1.5],
            y: [0, -100],
            x: [0, Math.random() * 50 - 25]
        }
    };

    return (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden h-52 pt-10 z-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full blur-xl"
                    style={{
                        backgroundColor: color,
                        width: `${40 + Math.random() * 40}px`,
                        height: `${40 + Math.random() * 40}px`,
                        bottom: `-20px`,
                        left: `${(i * 20) + Math.random() * 80}%`,
                    }}
                    variants={smokeVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 2,
                        ease: "easeOut"
                    }}
                />
            ))}
        </div>
    );
};
