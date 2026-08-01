import React from "react";
import { motion } from "framer-motion";

export default function ProductsCTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-r from-green-700/40 via-green-600/70 to-emerald-600">
      {/* Background Energy Lines */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.2)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md"
          >
            Need Bulk Orders or Custom Specifications?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-green-50 mb-10 font-medium drop-shadow-sm max-w-2xl"
          >
            We manufacture batteries to your exact specifications. Competitive
            pricing for bulk B2B orders across India.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-green-700 font-bold text-sm md:text-base shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300">
              Request Custom Quote
            </button>
           
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
