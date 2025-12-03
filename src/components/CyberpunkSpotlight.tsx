"use client";

import React from "react";
import {motion} from "framer-motion";
import {ScrollArea} from "@/components/ui/scroll-area";

interface CyberpunkSpotlightProps {
    cornerBracketColor?: string;
    children?: React.ReactNode;
}

const CyberpunkSpotlight = ({
                                cornerBracketColor = "border-cyan-500",
                                children,
                            }: CyberpunkSpotlightProps) => {

    const cornerVariants = {
        initial: {height: "0%"},
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
        initial: {width: "0%"},
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
            className={`relative w-full h-full bg-gradient-to-br from-background overflow-x-hidden`}
        >
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