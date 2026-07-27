import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { title: "ISO 9001:2015", subtitle: "Quality Management" },
  { title: "BIS Certified", subtitle: "Bureau of Indian Standards" },
  { title: "CE Marking", subtitle: "European Conformity" },
  { title: "IP65 / IP67", subtitle: "Ingress Protection" },
  { title: "UN38.3", subtitle: "Lithium Battery Safety" },
  { title: "Made in India", subtitle: "Atmanirbhar Bharat" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Certifications() {
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
          <span className="section-subtitle">Quality Assurance</span>
          <h2 className="section-title mt-4">Certified &amp; Trusted</h2>
        </motion.div>

        {/* Certification Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group card flex flex-col items-center text-center gap-3 p-6 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,200,83,0.4)]">
                <Award size={26} />
              </div>

              <div>
                <h4 className="font-bold text-white text-sm md:text-base">
                  {cert.title}
                </h4>
                <p className="text-xs text-text-muted mt-1">{cert.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
