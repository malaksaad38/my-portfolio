"use client";

import React, {useRef, useState} from "react";
import {motion} from "framer-motion";
import {ScrollArea} from "@/components/ui/scroll-area";
interface CyberpunkSpotlightProps {
    circuitColor?: string;          // Tailwind gradient color (e.g., "to-cyan-500/20")
    cornerBracketColor?: string;    // Border color (Tailwind OR raw HEX)
    children?: React.ReactNode;
}
const CyberpunkSpotlight = ({
                              circuitColor = "to-cyan-500/20",
                              cornerBracketColor = "border-cyan-500",
                              children,
                            }: CyberpunkSpotlightProps) => {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Update mouse position relative to container
  const handleMouseMove = (e:any) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const cornerVariants = {
    initial: { height: "0%" },
    animate: {
      height: "10rem",
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
    const horizontalCornerVariants = {
        initial: { width: "0%" },
        animate: {
            width: "10rem",
            transition: {
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
            },
        },
    };



    return (
    <div
      ref={containerRef}
      className={`relative w-full h-full bg-gradient-to-br from-background overflow-x-hidden`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* Dynamic spotlight effect */}
      {/*<motion.div*/}
      {/*  className={`absolute bg-gradient-to-r ${spotlightColor} ${secondaryColor} opacity-20 rounded-full blur-2xl pointer-events-none`}*/}
      {/*  animate={{*/}
      {/*    x: mousePosition.x - 150,*/}
      {/*    y: mousePosition.y - 150,*/}
      {/*    scale: isHovered ? 1 : 0.5,*/}
      {/*    opacity: isHovered ? 0.3 : 0.1,*/}
      {/*  }}*/}
      {/*  transition={{type: "spring", stiffness: 150, damping: 20}}*/}
      {/*  style={{width: "300px", height: "300px"}}*/}
      {/*/>*/}


      {/* Circuit patterns */}
      {/*<div className="absolute bottom-4 left-0 w-full h-16 flex justify-between px-4 opacity-30">*/}
      {/*  {[1,2,3,4,5,6,7,8,9,10].map((i) => (*/}
      {/*    <motion.div*/}
      {/*      key={i}*/}
      {/*      className={`h-full w-0.5 bg-${circuitColor}`}*/}
      {/*      animate={{*/}
      {/*        height: ["60%", "100%", "80%", "90%", "60%"],*/}
      {/*        opacity: [0.5, 1, 0.7, 1, 0.5],*/}
      {/*      }}*/}
      {/*      transition={{*/}
      {/*        duration: 2 + i * 0.5,*/}
      {/*        repeat: Infinity,*/}
      {/*        ease: "easeInOut",*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</div>*/}

      <ScrollArea className="w-full h-full">
        {children}
      </ScrollArea>

      {/* Corner brackets */}
      <motion.div
        className={`absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 ${cornerBracketColor} opacity-70`}
        variants={horizontalCornerVariants}
        initial="initial"
        animate="animate"
      />

      {/* Top-right corner */}
      <motion.div
        className={`absolute top-2 right-2 w-6 border-t-2 border-r-2 ${cornerBracketColor} opacity-70`}
        variants={cornerVariants}
        initial="initial"
        animate="animate"
      />

      {/* Bottom-left corner */}
      <motion.div
        className={`absolute bottom-2 left-2 w-6 border-b-2 border-l-2 ${cornerBracketColor} opacity-70`}
        variants={cornerVariants}
        initial="initial"
        animate="animate"
      />

      {/* Bottom-right corner */}
      <motion.div
        className={`absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 ${cornerBracketColor} opacity-70`}
        variants={horizontalCornerVariants}
        initial="initial"
        animate="animate"
      />
    </div>
  );
};

export default CyberpunkSpotlight;