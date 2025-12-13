import React from "react";
import clsx from "clsx";

type CyberButtonProps = {
    label?: string;
    onClick?: () => void;
    className?: string;
    size?: "sm" | "md" | "lg";
    primaryColor?: string;
    accentColor?: string;
};

const sizes = {
    sm: "w-[9em] h-[3.2em] text-[12px]",
    md: "w-[11em] h-[4em] text-[13px]",
    lg: "w-[13em] h-[4.8em] text-[14px]",
};

const CyberButton: React.FC<CyberButtonProps> = ({
                                                     label = "PLAY",
                                                     onClick,
                                                     className,
                                                     size = "md",
                                                     primaryColor = "#2761c3",
                                                     accentColor = "#27c39f",
                                                 }) => {
    return (
        <div className={clsx("relative inline-block", className)}>
            {/* Dynamic animations */}
            <style>{`
        @keyframes leftArrow {
          from { transform: translateX(0); }
          to { transform: translateX(10px); }
        }

        @keyframes rightArrow {
          from { transform: translateX(0); }
          to { transform: translateX(-10px); }
        }

        @keyframes greenLight {
          to { box-shadow: inset 0 0 32px ${accentColor}; }
        }

        @keyframes changeColor {
          to { background-color: ${accentColor}; }
        }

        @keyframes lightEffect {
          to { box-shadow: 0 0 6px ${accentColor}; }
        }
      `}</style>

            <button
                onClick={onClick}
                className={clsx(
                    "group relative uppercase tracking-wide w-full px-8 text-blue-300 bg-transparent border-none font-cyber  outline-none",
                    sizes[size]
                )}
            >
                {label}

                {/* Border Clip */}
                <div
                    className="absolute inset-0 overflow-hidden border-[5px] border-double shadow-[inset_0_0_15px]"
                    style={{
                        borderColor: primaryColor,
                        boxShadow: `inset 0 0 15px ${primaryColor}`,
                        clipPath:
                            "polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)",
                    }}
                >
                    {/* Corners */}
                    {[
                        "-top-[1.9em] -left-[3em]",
                        "-top-[2em] left-[91%]",
                        "top-[2.1em] -left-[2.1em]",
                        "top-[45%] left-[88%]",
                    ].map((pos, i) => (
                        <span
                            key={i}
                            className={clsx(
                                "absolute w-[4em] h-[4em] rotate-45 transition-all duration-200 group-hover:scale-125",
                                pos
                            )}
                            style={{
                                backgroundColor: primaryColor,
                                boxShadow: `inset 1px 1px 8px ${primaryColor}`,
                                animation:
                                    "changeColor 0.1s ease-in-out forwards, lightEffect 0.2s linear 0.4s forwards",
                            }}
                        />
                    ))}
                </div>

                {/* Left Arrow */}
                <span
                    className="absolute top-[35%] h-[30%] w-[11%] transition-all duration-200
                     left-[-13.5%] group-hover:left-[103%]"
                    style={{
                        backgroundColor: primaryColor,
                        clipPath: "polygon(100% 0,100% 100%,0 50%)",
                        animation: "leftArrow 0.6s ease-in-out infinite alternate",
                    }}
                />

                {/* Right Arrow */}
                <span
                    className="absolute top-[35%] h-[30%] w-[11%] transition-all duration-200
                     left-[102%] group-hover:left-[-15%]"
                    style={{
                        backgroundColor: primaryColor,
                        clipPath: "polygon(100% 50%,0 0,0 100%)",
                        animation: "rightArrow 0.6s ease-in-out infinite alternate",
                    }}
                />
            </button>
        </div>
    );
};

export default CyberButton;
