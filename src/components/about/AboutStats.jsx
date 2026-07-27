import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Factory, Users, Globe2, Award } from "lucide-react";

const stats = [
  {
    icon: Factory,
    value: 5000,
    suffix: " sq ft",
    label: "Manufacturing Facility",
  },
  {
    icon: Users,
    value: 30,
    suffix: "+",
    label: "Expert Technicians",
  },
  {
    icon: Globe2,
    value: 100,
    suffix: "+",
    label: "Cities Served",
  },
  {
    icon: Award,
    value: null,
    display: "ISO 9001",
    label: "Quality Certified",
  },
];

function Counter({ end, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, end, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (value) => setDisplay(Math.floor(value)),
    });
    return () => controls.stop();
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function AboutStats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-20 bg-slate-50 border-y border-slate-200 overflow-hidden">
      {/* Subtle light-theme energy gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-300/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col items-center text-center gap-4"
              >
                {/* Neumorphic/Glowing Icon Container */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-green-100 shadow-[0_8px_30px_-4px_rgba(34,197,94,0.15)] text-green-600 transition-transform duration-300 hover:scale-110 hover:shadow-[0_8px_30px_-4px_rgba(34,197,94,0.3)]">
                  <Icon size={28} strokeWidth={2} />
                </div>

                <div className="space-y-1">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {stat.display ? (
                      stat.display
                    ) : (
                      <Counter end={stat.value} suffix={stat.suffix} />
                    )}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-slate-600">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
