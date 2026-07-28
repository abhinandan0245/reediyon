import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  BatteryCharging,
  Leaf,
  Settings,
  Clock,
  Thermometer,
  Box,
} from "lucide-react";

const features = [
  {
    icon: <Zap size={24} />,
    title: "High Energy Density",
    description:
      "Maximum power output in a compact size, ensuring longer runtimes for all your applications.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Advanced BMS",
    description:
      "Built-in Battery Management System protects against overcharging, short circuits, and thermal runaway.",
  },
  {
    icon: <BatteryCharging size={24} />,
    title: "Fast Charging Support",
    description:
      "Rapid recharge capabilities minimize downtime, getting your devices and vehicles back in action quickly.",
  },
  {
    icon: <Clock size={24} />,
    title: "Long Cycle Life",
    description:
      "Engineered for thousands of charge cycles, significantly outlasting traditional lead-acid alternatives.",
  },
  {
    icon: <Leaf size={24} />,
    title: "Eco-Friendly",
    description:
      "100% recyclable components with zero toxic heavy metals, reducing your environmental footprint.",
  },
  {
    icon: <Settings size={24} />,
    title: "Maintenance Free",
    description:
      "No water top-ups or active maintenance required throughout the entire lifespan of the battery.",
  },
  {
    icon: <Box size={24} />,
    title: "Lightweight Design",
    description:
      "Up to 70% lighter than conventional batteries, improving efficiency in mobile and EV applications.",
  },
  {
    icon: <Thermometer size={24} />,
    title: "Thermal Stability",
    description:
      "Reliable performance across extreme temperature ranges, ensuring safety in harsh conditions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-24 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-subtitle">
            Premium Quality, Lasting Power
          </span>
          <h2 className="section-title mt-4 mb-4">
            Why Choose <span className="text-primary">REEDYION?</span>
          </h2>
          <p className="text-text-muted text-lg">
            Our smart lithium batteries are engineered with cutting-edge
            technology to deliver unmatched performance, safety, and
            reliability.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group card p-8 transition-all duration-300 hover:border-primary/50 hover:bg-[#1A212A]"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,200,83,0.4)]">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-white font-heading">
                {feature.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
