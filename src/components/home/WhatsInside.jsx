import { motion } from "framer-motion";

const internalFeatures = [
  {
    title: "Outer Casing",
    description: "IP65/IP67 rated ABS + aluminium alloy — shockproof, dustproof, water-resistant",
  },
  {
    title: "Grade-A Lithium Cells",
    description: "LiFePO4 / NMC cells from certified suppliers — stable chemistry, 2000–4000+ cycles",
  },
  {
    title: "Smart BMS",
    description: "Cell-level protection: overcharge, over-discharge, overcurrent, thermal runaway prevention",
  },
  {
    title: "Precision Connectors",
    description: "Heavy-duty rated connectors for low resistance, heat-free power transfer",
  },
  {
    title: "Thermal Safety Layer",
    description: "Phase-change material thermal buffer to prevent heat spikes and cell stress",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Custom CSS Grid Background inline style to match the dark green aesthetic
const gridBackgroundStyle = {
  backgroundImage: `
    linear-gradient(rgba(0, 200, 83, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 200, 83, 0.04) 1px, transparent 1px)
  `,
  backgroundSize: "50px 50px",
  backgroundColor: "#030805", // Very deep dark green/black
};

export default function WhatsInside() {
  return (
    <section 
      className="relative w-full py-24 border-y border-primary/10 overflow-hidden"
      style={gridBackgroundStyle}
    >
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] text-primary uppercase">
            Engineering Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-heading mt-4">
            What's Inside Every Battery
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left: Animated CSS Battery Schematic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center py-10"
          >
            {/* Battery Container */}
            <div className="relative w-[280px] h-[360px] flex items-center justify-center">
              
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-[40px] pointer-events-none" />

              {/* BMS Chip Label (Top) */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#030805] border border-primary px-4 py-1 rounded-full z-10">
                <span className="text-[9px] font-bold text-primary tracking-widest">BMS CHIP</span>
              </div>

              {/* Port Label (Bottom) */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#030805] border border-primary px-6 py-1 rounded-full z-10">
                <span className="text-[9px] font-bold text-primary tracking-widest">PORT</span>
              </div>

              {/* Outer Battery Shell */}
              <div className="w-full h-full border-[1.5px] border-primary/40 rounded-[32px] p-2.5 relative">
                {/* Inner Battery Shell */}
                <div className="w-full h-full border border-primary/20 rounded-[24px] p-4 flex flex-col justify-center">
                  
                  {/* 3x3 Cell Grid */}
                  <div className="grid grid-cols-3 grid-rows-3 gap-3 w-full h-full">
                    {[...Array(9)].map((_, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                        viewport={{ once: true }}
                        className="border border-primary/20 rounded-xl flex items-center justify-center relative group overflow-hidden"
                      >
                        {/* Cell core dot */}
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(0,200,83,1)] transition-all duration-300" />
                        {/* Subtle inner hover glow */}
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature Descriptions List */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4"
          >
            {internalFeatures.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-[#07110A] border border-primary/10 rounded-xl p-5 md:p-6 transition-all duration-300 hover:border-primary/30 hover:bg-[#0A1810]"
              >
                <div className="flex gap-4">
                  {/* Neon Green Dot Icon */}
                  <div className="mt-1.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,200,83,0.8)]" />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}