import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function EnergyGridBackground({
  gridRows = 8,
  gridCols = 12,
  className = "",
}) {
  const shouldReduceMotion = useReducedMotion();
  const totalCells = gridRows * gridCols;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: 0.1,
      },
    },
  };

  const cellVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      borderColor: "#4ade80",
      boxShadow: "0 0 15px rgba(74, 222, 128, 0.4)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-auto ${className}`}
    >
      {/* Base Grid Layer */}
      <motion.div
        className="absolute inset-0 w-full h-full grid gap-1.5 p-2"
        style={{
          gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${gridRows}, minmax(0, 1fr))`,
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {[...Array(totalCells)].map((_, i) => (
          <motion.div
            key={i}
            className="border-2 border-green-900/40 rounded-md bg-green-950/10 backdrop-blur-[2px] transition-all relative overflow-hidden"
            variants={cellVariants}
            whileHover="hover"
          >
            {/* Inner cell core glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#166534_0%,_transparent_70%)] opacity-20 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>

      {/* Global Vignette/Glow overlay to blend edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#020c02_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#166534_0%,_transparent_60%)] opacity-40 pointer-events-none mix-blend-screen" />
    </div>
  );
}
