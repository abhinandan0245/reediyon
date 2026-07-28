import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Pan India B2B Supply",
  "OEM Manufacturing",
  "Custom Battery Packs",
  "Bulk Order Pricing",
];

export default function OurStory() {
  return (
    <section className="relative w-full py-24 bg-background">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">Our Story</span>
            <h2 className="section-title mt-4 !text-3xl md:!text-4xl lg:!text-5xl">
              Building the Future of Energy Storage in India
            </h2>

            <p className="text-text-light leading-relaxed mt-6">
              REEDYION Smart Lithium Battery was founded in 2019 in Jaipur,
              Rajasthan, with a clear mission: to make high-quality, affordable
              lithium-ion battery technology accessible to Indian businesses and
              consumers.
            </p>

            <p className="text-text-light leading-relaxed mt-4">
              As India's EV and renewable energy revolution accelerates, we
              position ourselves as a trusted manufacturing and supply partner —
              delivering batteries that are rigorously tested, reliably built,
              and competitively priced for the Indian market.
            </p>

            <p className="text-text-light leading-relaxed mt-4">
              From our 5,000 sq ft production facility in Jhotwara, Jaipur, we
              serve OEM manufacturers, solar installers, EV builders, industrial
              enterprises and individual consumers across all 28 states of
              India.
            </p>

            {/* Feature checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-primary flex-shrink-0"
                  />
                  <span className="text-text-light text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image + floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src="https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?q=80&w=1000&auto=format&fit=crop"
                alt="REEDYION manufacturing facility"
                className="w-full h-[380px] object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-8 bg-primary rounded-2xl px-6 py-5 shadow-[0_15px_40px_rgba(0,200,83,0.35)] text-center">
              <h3 className="text-3xl font-bold text-white font-heading">5+</h3>
              <p className="text-xs font-medium text-white/90 mt-1 leading-tight max-w-[110px]">
                Years Manufacturing Excellence
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
