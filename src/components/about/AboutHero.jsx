import { motion, useReducedMotion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  // Re-creating the intricate battery cell grid background
  const gridRows = 8;
  const gridCols = 12;
  const totalCells = gridRows * gridCols;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: 0.2,
      },
    },
  };

  const cellVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      borderColor: "#4ade80", // brighter green on hover
      boxShadow: "0 0 15px rgba(74, 222, 128, 0.5)",
      transition: { duration: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: customDelay,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center py-20 md:py-32 bg-[#020c02] overflow-hidden text-center px-4 md:px-6">
      {/* Background: Highly visible, detailed battery cell grid */}
      <motion.div
        className="absolute inset-0 z-0 grid gap-1.5 p-2"
        style={{
          gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${gridRows}, minmax(0, 1fr))`,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[...Array(totalCells)].map((_, i) => (
          <motion.div
            key={i}
            className="border-2 border-green-900/60 rounded-md bg-green-950/20 backdrop-blur-[2px] transition-all"
            variants={cellVariants}
            whileHover="hover"
          >
            {/* Inner cell core glow for depth */}
            <div className="w-full h-full rounded-sm bg-[radial-gradient(ellipse_at_center,_#166534_0%,_transparent_70%)] opacity-30" />
          </motion.div>
        ))}
      </motion.div>

      {/* Central energy glow overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_#166534_0%,_transparent_60%)] opacity-70 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center gap-6">
        <motion.span
          className="text-xs md:text-sm uppercase tracking-[0.25em] font-semibold text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]"
          variants={textVariants}
          custom={0.8}
          initial="hidden"
          animate="visible"
        >
          Who We Are
        </motion.span>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg"
          variants={textVariants}
          custom={1.0}
          initial="hidden"
          animate="visible"
        >
          About <span className="text-white">REEDIYON</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-neutral-200 max-w-3xl font-normal leading-relaxed drop-shadow"
          variants={textVariants}
          custom={1.2}
          initial="hidden"
          animate="visible"
        >
          Jaipur's leading lithium-ion battery manufacturer, powering India's
          electric future with cutting-edge energy solutions since 2019.
        </motion.p>

        {/* Breadcrumbs */}
        <motion.div
          className="flex items-center gap-2 text-sm md:text-base mt-4 font-medium"
          variants={textVariants}
          custom={1.4}
          initial="hidden"
          animate="visible"
        >
          <NavLink
            to="/"
            className="text-white/80 hover:text-white transition-colors"
          >
            Home
          </NavLink>
          <span className="text-green-500 font-bold">&gt;</span>
          <span className="text-green-400 font-semibold drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">
            About Us
          </span>
        </motion.div>
      </div>
    </section>
  );
}
