import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "REEDYION's smart lithium batteries completely transformed our EV fleet's efficiency. The fast charging capabilities and long cycle life have significantly reduced our operational downtime and maintenance costs.",
    name: "Ramesh Sharma",
    role: "Fleet Manager, EcoRide India",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Switching to REEDYION for our solar storage setup was the best decision. The advanced BMS ensures safety, and the power output is incredibly consistent even during peak load hours. Highly recommended!",
    name: "Vikram Mehta",
    role: "Operations Head, SolarTech Solutions",
    rating: 5,
  },
];

const partners = [
  "Brand One",
  "Partner Co",
  "Tech Power",
  "Solaris",
  "EV Corp",
  "Energy Inc",
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const testimonial = testimonials[index];

  return (
    <section className="relative w-full py-24 bg-background overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-subtitle">Trusted by Industry Leaders</span>
          <h2 className="section-title mt-4">What Our Clients Say</h2>
        </motion.div>

        {/* Single Testimonial Slider */}
        <div
          className="max-w-5xl mx-auto mb-24"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative min-h-[340px] md:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative card p-8 md:p-10 transition-all duration-300 hover:border-primary/50 hover:bg-[#1A212A]"
              >
                {/* Background decorative quote icon */}
                <Quote className="absolute top-6 right-6 w-24 h-24 text-white/5 -rotate-12 pointer-events-none transition-transform group-hover:scale-110 duration-500" />

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="var(--color-primary)"
                      className="text-primary"
                    />
                  ))}
                </div>

                <p className="text-lg text-text-light leading-relaxed mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl border border-primary/30 group-hover:shadow-[0_0_15px_rgba(0,200,83,0.3)] transition-shadow">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-heading">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-text-muted">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="border-t border-white/10 pt-16"
        >
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-60">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="text-xl font-heading font-bold text-white grayscale hover:grayscale-0 hover:text-primary transition-all duration-300 cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
