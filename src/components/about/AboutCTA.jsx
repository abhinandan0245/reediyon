import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutCTA() {
  return (
    <section className="w-full py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative overflow-hidden bg-primary/50 px-6 py-16 md:py-20 text-center"
      >
        {/* Grid texture overlay */}
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-white font-heading mb-4 leading-tight"
          >
            Ready to Partner with REEDYION?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/90 text-lg md:text-xl mb-10 max-w-xl"
          >
            Explore our products or reach out to discuss your battery
            requirements.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <NavLink to="/products" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto !bg-white !text-primary hover:!bg-gray-100 !border-none shadow-xl"
                rightIcon={<ArrowRight size={20} />}
              >
                View Products
              </Button>
            </NavLink>

            <NavLink to="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline-light"
                size="lg"
                className="w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </NavLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}