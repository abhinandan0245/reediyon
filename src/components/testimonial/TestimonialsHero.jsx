import React from "react";
import { motion } from "framer-motion";

export default function TestimonialsHero() {
  return (
    <section className="relative w-full pt-32 pb-20 overflow-hidden bg-[#020c02] border-b border-[#163316]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(22,51,22,0.8)_0%,_#020c02_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <span className="text-green-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Customer Stories
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            What Our Clients Say
          </h1>
          <p className="text-base md:text-lg text-zinc-400 mb-8 font-medium max-w-2xl">
            Real experiences from businesses across India who trust REEDYION for
            their battery needs.
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="hover:text-green-400 cursor-pointer transition-colors">
              Home
            </span>
            <span>/</span>
            <span className="text-green-500">Testimonials</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
