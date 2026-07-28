import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Lightbulb, Users, Leaf } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "Every cell, every weld, every BMS parameter is verified before leaving our facility.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Continuous R&D to stay ahead of battery technology trends and customer needs.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "We build long-term partnerships, not just one-time transactions.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Committed to eco-friendly manufacturing and responsible battery disposal programs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function MissionVisionValues() {
  return (
    <section className="relative w-full py-24 bg-zinc-950 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,197,94,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="uppercase tracking-[3px] text-sm font-semibold text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
            Our Direction
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Mission, Vision &amp; Values
          </h2>
        </motion.div>

        {/* Mission & Vision Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
        >
          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 p-8 md:p-10 transition-colors hover:border-green-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10 text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                To empower India's energy transition by manufacturing safe,
                reliable, and affordable lithium-ion batteries — making advanced
                energy storage accessible to every business and household across
                the country.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 p-8 md:p-10 transition-colors hover:border-green-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500/10 text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-zinc-400 leading-relaxed">
                To become India's most trusted lithium battery brand —
                synonymous with quality, innovation, and the electric
                revolution. We envision a future where every EV, solar system,
                and energy storage application runs on a REEDYION battery.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group rounded-xl bg-zinc-900/50 border border-zinc-800/80 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_10px_30px_-10px_rgba(34,197,94,0.15)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-green-500 mb-5 transition-colors duration-300 group-hover:bg-green-500 group-hover:text-zinc-950 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                  <Icon size={22} />
                </div>
                <h4 className="font-bold text-white text-lg mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
