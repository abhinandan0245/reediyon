import React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function TestimonialsCTA() {
  return (
    <section className="w-full py-20 bg-[#070b07] border-t border-[#163316]">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join 500+ Satisfied Customers
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Experience REEDYION quality for yourself. Get a free consultation
            and bulk pricing today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all flex items-center gap-2">
              Get Free Quote <ArrowRight size={18} />
            </button>
            <a
              href="tel:+917742514313"
              className="px-6 py-3 bg-transparent border border-[#163316] hover:border-green-500 text-white font-bold rounded-lg transition-all flex items-center gap-2"
            >
              <Phone size={18} className="text-green-500" /> Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
