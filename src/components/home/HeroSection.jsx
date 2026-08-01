import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import { Zap, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

// Reusable animated counter for the bottom stats bar
function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString(),
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);

  // Enhanced Animation Variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const featureTags = [
    "Made in India",
    "Advanced BMS Technology",
    "Bulk Orders Accepted",
    "OEM Manufacturing",
    "Pan India Delivery",
    "ISO 9001 Certified",
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col bg-background overflow-hidden border-b border-primary/20">
      {/* Background with Parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-[120%] z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/95 via-[#050505]/85 to-[#050505] z-10" />
        <img
          src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop"
          alt="Factory Background"
          className="w-full h-full object-cover object-center opacity-30"
        />
      </motion.div>

      {/* Main Content - Strictly aligned to top */}
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pt-2 pb-6">
        {/* Left: Text & Actions */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-start gap-6 lg:pr-8"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-[0_0_15px_rgba(0,200,83,0.15)]">
              <Zap size={14} className="fill-primary" />
              Jaipur's #1 Lithium Battery Manufacturer
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-[64px] leading-[1.15] font-bold text-white font-heading"
          >
            Powering India's Future with <br className="hidden md:block" />
            <span className="text-primary green-glow drop-shadow-[0_0_25px_rgba(0,200,83,0.4)]">
              Smart Lithium Energy
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed"
          >
            High-performance lithium-ion batteries designed for reliability,
            safety, and long-lasting power. Serving B2B customers across India
            with premium energy solutions.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <Button variant="primary" rightIcon={<ArrowRight size={18} />}>
              Get Free Quote
            </Button>
            <Button
              variant="outline"
              className="!border-white/20 !text-white hover:!bg-white/5 hover:!border-white/40"
              leftIcon={<Phone size={18} />}
            >
              Call Now
            </Button>
            <Button
              variant="ghost"
              className="!text-white/60 hover:!text-white"
            >
              Explore Products
            </Button>
          </motion.div>

          {/* Feature Tags */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap gap-x-6 gap-y-4 mt-6 border-t border-white/10 pt-8 w-full"
          >
            {featureTags.map((tag, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex items-center gap-2 text-sm md:text-base font-medium text-white/80"
              >
                <CheckCircle2
                  size={18}
                  className="text-primary flex-shrink-0 drop-shadow-[0_0_10px_rgba(0,200,83,0.5)]"
                />
                <span>{tag}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Floating Image & Mini Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 h-[400px] lg:h-[520px] z-20"
        >
          {/* Bobbing Container */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group bg-[#0a0d12]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12] via-[#0a0d12]/20 to-transparent z-10 mix-blend-multiply" />
            <img
              src="https://plus.unsplash.com/premium_photo-1683120793196-0797cec08a7d?q=80&w=774&auto=format&fit=crop"
              alt="Lithium Battery Technology"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Image Overlay Stats */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-20 grid grid-cols-3 gap-2 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-[0_0_25px_rgba(0,200,83,0.2)]">
              <div className="flex flex-col items-center justify-center text-center border-r border-white/10">
                <span className="text-primary font-bold text-xl font-heading">
                  5+
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider text-white/80 mt-1">
                  Years
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center border-r border-white/10">
                <span className="text-primary font-bold text-xl font-heading">
                  10K+
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider text-white/80 mt-1">
                  Batteries
                </span>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-primary font-bold text-xl font-heading">
                  500+
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider text-white/80 mt-1">
                  Clients
                </span>
              </div>
            </div>
          </motion.div>

          {/* Ambient Outer Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/15 blur-[120px] pointer-events-none z-[-1]" />
        </motion.div>
      </div>

      {/* Bottom Main Stats Bar (mt-auto forces this to the bottom, leaving top content anchored high) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full bg-primary relative z-20 border-t border-primary-light/30 shadow-[0_-10px_30px_rgba(0,200,83,0.2)] mt-auto"
      >
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
            {[
              { end: 5, suffix: "+", label: "Years of Experience" },
              { end: 10000, suffix: "+", label: "Batteries Delivered" },
              { end: 500, suffix: "+", label: "Satisfied Customers" },
              { end: 100, suffix: "+", label: "Cities Served" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white font-heading mb-2 drop-shadow-md">
                  <AnimatedNumber value={stat.end} />
                  {stat.suffix}
                </h3>
                <p className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
