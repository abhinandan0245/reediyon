import { motion } from "framer-motion";
import {
  Car,
  Bike,
  Sun,
  Home,
  Zap,
  Phone,
  HeartPulse,
  Truck,
} from "lucide-react";

const industries = [
  { name: "E-Rickshaw", icon: <Car size={28} /> },
  { name: "E-Bikes", icon: <Bike size={28} /> },
  { name: "Solar", icon: <Sun size={28} /> },
  { name: "Home Inverter", icon: <Home size={28} /> },
  { name: "UPS System", icon: <Zap size={28} /> },
  { name: "Telecom", icon: <Phone size={28} /> },
  { name: "Medical", icon: <HeartPulse size={28} /> },
  { name: "Fork Lifts", icon: <Truck size={28} /> },
];

// Duplicate the array to create a seamless infinite loop
const duplicatedIndustries = [...industries, ...industries];

export default function IndustriesWePower() {
  return (
    <section className="relative w-full py-24 bg-background overflow-hidden border-b border-white/5">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-subtitle">Versatile Applications</span>
          <h2 className="section-title mt-4 mb-4">Industries We Power</h2>
          <p className="text-text-muted text-lg">
            Providing reliable and scalable smart lithium battery solutions
            tailored for a diverse range of high-demand sectors.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        {/* Left/Right Gradient Masks for smooth fading at the edges */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // Adjust for scroll speed
          }}
          className="flex w-max items-center gap-8 px-4"
        >
          {duplicatedIndustries.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 group/icon cursor-pointer min-w-[120px]"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-surface border border-white/10 text-white transition-all duration-300 group-hover/icon:border-primary group-hover/icon:text-primary group-hover/icon:shadow-[0_0_25px_rgba(0,200,83,0.3)] group-hover/icon:-translate-y-2">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-text-light group-hover/icon:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
