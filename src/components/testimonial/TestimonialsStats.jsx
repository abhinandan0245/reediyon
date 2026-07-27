import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "100%", label: "Would Recommend" },
  { value: "2+ yrs", label: "Avg. Partnership" },
];

export default function TestimonialsStats() {
  return (
    <section className="w-full bg-[#00a859] py-12 border-y border-[#00c968]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-green-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
