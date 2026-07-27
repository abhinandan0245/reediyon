import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full pt-32 pb-24 overflow-hidden bg-[#020c02]">
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
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-zinc-400 font-medium max-w-2xl">
            Have a question or need a bulk quote? Our team is ready to help you
            find the perfect battery solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
