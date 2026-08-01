import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function ProductsHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#020c02] overflow-hidden flex flex-col justify-center items-center text-center px-4">
      {/* Background Ambience & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#166534_0%,_transparent_60%)] opacity-40 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none z-0" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.span
          variants={itemVariants}
          className="uppercase tracking-[4px] text-xs md:text-sm font-semibold text-green-500 mb-4 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
        >
          Premium Lithium Solutions
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg"
        >
          Advanced Battery Solutions
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-zinc-300 max-w-3xl font-light leading-relaxed mb-8"
        >
          High-performance lithium-ion batteries for electric vehicles, solar
          energy systems, and industrial power storage. Specializing in custom
          OEM manufacturing with pan-India bulk supply.
        </motion.p>

        {/* Breadcrumbs */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-sm font-medium text-zinc-400"
        >
          <NavLink to="/" className="hover:text-white transition-colors">
            Home
          </NavLink>
          <ChevronRight size={14} className="text-zinc-600" />
          <span className="text-green-500 drop-shadow-[0_0_5px_rgba(34,197,94,0.4)]">
            Products
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
