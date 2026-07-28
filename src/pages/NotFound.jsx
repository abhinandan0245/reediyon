import React from "react";
import { motion } from "framer-motion";
import { ZapOff, Home, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#020c02] overflow-hidden selection:bg-emerald-500/30 font-sans px-4 py-20">
      {/* Background Grid & Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#163316_1px,transparent_1px),linear-gradient(to_bottom,#163316_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto"
      >
        {/* Floating Icon */}
        <motion.div
          variants={fadeUp}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 relative flex items-center justify-center w-32 h-32 rounded-full bg-[#060e06] border border-emerald-900 shadow-[0_0_50px_rgba(16,185,129,0.15)]"
        >
          <div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-ping opacity-20" />
          <ZapOff
            size={56}
            className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          />
        </motion.div>

        {/* 404 Glitch Text Area */}
        <motion.div variants={fadeUp} className="relative mb-4">
          <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 drop-shadow-[0_10px_30px_rgba(16,185,129,0.2)] tracking-tighter">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-emerald-500/20 blur-sm -rotate-2" />
        </motion.div>

        {/* Messaging */}
        <motion.h2
          variants={fadeUp}
          className="text-2xl md:text-3xl font-bold text-white mb-4"
        >
          Circuit Broken. Power Lost.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-zinc-400 text-lg mb-10 max-w-md"
        >
          The page you are looking for has been depleted or relocated. Let's get
          you plugged back into the grid.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 hover:border-emerald-500 text-white font-semibold rounded-full transition-all group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Go Back
          </button>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] group"
          >
            <Home size={18} />
            Return Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
