import {motion} from "motion/react";
import {useState} from "react";

export const CyberpunkGrid = ({color}: any) => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    return (<motion.div
        className="absolute inset-0 z-0 opacity-15"
        initial={{opacity: 0}}
        animate={{opacity: 0.15}}
        transition={{duration: 1}}
    >
        <div className="w-full h-full bg-grid-pattern"
             style={{
                 backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
                 backgroundSize: '40px 40px',
                 backgroundPosition: `${mousePosition.x * 0.02}px ${mousePosition.y * 0.02}px`
             }}
        />
    </motion.div>)
}


