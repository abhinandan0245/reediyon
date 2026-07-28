import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timeline = [
  {
    year: "2019",
    title: "Company Founded",
    description:
      "REEDYION was established in Jaipur with a vision to bring advanced lithium technology to India's growing EV and solar markets.",
  },
  {
    year: "2020",
    title: "First Production Line",
    description:
      "Launched our first lithium cell assembly line with capacity of 500 packs per month. Served first 50 customers.",
  },
  {
    year: "2021",
    title: "LiFePO4 Launch",
    description:
      "Expanded our LiFePO4 product lines for residential and commercial solar installations.",
  },
  {
    year: "2022",
    title: "Pan India Distribution",
    description:
      "Established distribution network covering 100+ cities across India. Crossed 5,000 batteries delivered milestone.",
  },
  {
    year: "2023",
    title: "OEM Manufacturing",
    description:
      "Launched dedicated OEM and custom battery pack manufacturing, serving EV brands across EV, medical and industrial sectors.",
  },
];

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 mb-16 md:mb-24 group">
      {/* Mobile-only central line connector */}
      <div className="md:hidden absolute left-[19px] top-10 bottom-[-4rem] w-px bg-zinc-800 z-0" />

      {/* Left Column (Content or Empty) */}
      <div
        className={`pl-12 md:pl-0 md:pr-14 flex justify-end ${!isLeft ? "md:opacity-0 md:pointer-events-none" : ""}`}
      >
        {(isLeft || true) && ( // Render on mobile regardless, hide via CSS on desktop if right-aligned
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
            className={`w-full ${!isLeft ? "md:hidden" : ""}`}
          >
            <div className="relative p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm transition-all duration-300 group-hover:border-green-500/50 group-hover:bg-zinc-900/80 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] text-left md:text-right">
              <span className="inline-block text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-2 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                {item.year}
              </span>
              <h4 className="font-bold text-white text-xl mb-3">
                {item.title}
              </h4>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Center Power Node */}
      <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, backgroundColor: "#18181b" }}
          whileInView={{ scale: 1, backgroundColor: "#22c55e" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-5 w-5 rounded-full border-4 border-zinc-950 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
        />
        {/* Pulsing ring on hover */}
        <div className="absolute h-10 w-10 rounded-full border border-green-500/0 group-hover:border-green-500/50 group-hover:animate-ping transition-all duration-700" />
      </div>

      {/* Right Column (Content or Empty) */}
      <div
        className={`pl-12 md:pl-14 md:pr-0 ${isLeft ? "hidden md:block md:opacity-0 md:pointer-events-none" : ""}`}
      >
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
            className="w-full"
          >
            <div className="relative p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm transition-all duration-300 group-hover:border-green-500/50 group-hover:bg-zinc-900/80 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] text-left">
              <span className="inline-block text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-2 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                {item.year}
              </span>
              <h4 className="font-bold text-white text-xl mb-3">
                {item.title}
              </h4>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function CompanyTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Grow the power line dynamically based on scroll
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      className="relative w-full py-24 bg-zinc-950 overflow-hidden"
      ref={containerRef}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,197,94,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="uppercase tracking-[3px] text-sm font-semibold text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-4">
            Company Timeline
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Static Background Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-zinc-800 -translate-x-1/2 z-0" />

          {/* Animated Glowing Power Line (Desktop) */}
          <motion.div
            style={{ scaleY }}
            className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-green-400 to-emerald-600 -translate-x-1/2 z-10 origin-top shadow-[0_0_15px_rgba(34,197,94,0.6)]"
          />

          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
