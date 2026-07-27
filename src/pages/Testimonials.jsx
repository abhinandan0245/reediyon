import React from "react";
import { motion } from "framer-motion";
import TestimonialsHero from "../components/testimonial/TestimonialsHero";
import TestimonialsStats from "../components/testimonial/TestimonialsStats";
import TestimonialsGrid from "../components/testimonial/TestimonialsGrid";
import TestimonialsCTA from "../components/testimonial/TestimonialsCTA";

export default function Testimonials() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-[#020c02] flex flex-col w-full overflow-hidden"
    >
      <TestimonialsHero />
      <TestimonialsStats />
      <TestimonialsGrid />
      <TestimonialsCTA />
    </motion.main>
  );
}
