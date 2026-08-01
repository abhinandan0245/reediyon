import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ContactHero() {
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
    <section className="relative w-full pt-32 pb-24 overflow-hidden bg-[#020c02] border-b border-[#163316]">
      {/* Background Energy Glow & Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(22,51,22,0.8)_0%,_#020c02_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.span
            variants={itemVariants}
            className="text-green-500 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]"
          >
            Your Trusted Lithium Battery Partner
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]"
          >
            Contact Us
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-zinc-400 mb-8 font-light max-w-3xl leading-relaxed"
          >
            Have questions about EV batteries, solar batteries, or energy
            storage solutions? Reach out to our team for quick assistance,
            competitive pricing, and customized battery solutions delivered
            across India.
          </motion.p>

          {/* Breadcrumbs */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-sm text-zinc-500 font-medium"
          >
            <NavLink to="/" className="hover:text-white transition-colors">
              Home
            </NavLink>
            <ChevronRight size={14} className="text-zinc-600" />
            <span className="text-green-500 drop-shadow-[0_0_5px_rgba(34,197,94,0.4)]">
              Contact
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
