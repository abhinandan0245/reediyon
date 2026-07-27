import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import Button from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CallToAction() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden  bg-primary/40 px-6 py-16 md:px-16 md:py-20 text-center shadow-[0_20px_50px_rgba(0,200,83,0.3)]"
        >
          {/* Grid texture overlay */}
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

          {/* Energy/Battery Inner Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-60 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold text-white font-heading mb-4 leading-tight"
            >
              Need Lithium Battery Solutions?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl"
            >
              Get expert consultation and bulk pricing today. Our team responds
              within 2 hours.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto !bg-white !text-primary hover:!bg-gray-100 !border-none shadow-xl"
                rightIcon={<ArrowRight size={20} />}
              >
                Get Free Consultation
              </Button>

              <Button
                variant="secondary"
                size="lg"
                shape="pill"
                className="w-full sm:w-auto !border-white !text-white hover:!bg-white/10"
                leftIcon={<PhoneCall size={20} />}
              >
                +91 77425 14313
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
