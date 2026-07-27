import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Cell Sourcing",
    description:
      "Grade A lithium cells sourced from certified, audited manufacturers.",
  },
  {
    number: "02",
    title: "Cell Testing",
    description:
      "Every incoming cell batch is tested for capacity, IR, and cycle performance.",
  },
  {
    number: "03",
    title: "Pack Assembly",
    description:
      "Precision spot-welding and pack assembly carried out in cleanroom conditions.",
  },
  {
    number: "04",
    title: "BMS Integration",
    description:
      "Precision BMS programming and integration with cell-level protection.",
  },
  {
    number: "05",
    title: "Quality Inspection",
    description:
      "100% final inspection with capacity test, BMS check, and thermal scan.",
  },
  {
    number: "06",
    title: "Packaging & Dispatch",
    description:
      "Secure packaging with shock absorption, dispatched pan-India within 5-7 days.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ManufacturingProcess() {
  return (
    <section className="relative w-full py-24 bg-background">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-subtitle">How We Build</span>
          <h2 className="section-title mt-4">Our Manufacturing Process</h2>
          <p className="text-text-muted text-lg mt-4">
            Every REEDIYON battery goes through a rigorous 6-step production
            process to ensure peak performance and safety.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group card p-7 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
            >
              <span className="text-4xl font-bold font-heading text-primary/30 group-hover:text-primary/60 transition-colors duration-300">
                {step.number}
              </span>
              <h4 className="font-bold text-white text-lg mt-3 mb-2 font-heading">
                {step.title}
              </h4>
              <p className="text-sm text-text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
