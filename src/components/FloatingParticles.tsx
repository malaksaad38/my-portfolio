import {motion} from "motion/react";

export const FloatingParticles = ({color}: any) => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        // backgroundColor: color,
                        // boxShadow: `0 0 10px ${color}`,
                        backgroundColor: ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 5)],
                        boxShadow: `0 0 10px ${['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 5)]}`,
                        width: `${2 + Math.random() * 4}px`,
                        height: `${2 + Math.random() * 4}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [Math.random() * 10, Math.random() * -10, Math.random() * 10],
                        x: [Math.random() * 10, Math.random() * -10, Math.random() * 10],
                        opacity: [0.4, 1, 0.4]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};
