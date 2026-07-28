import React from "react";
import { motion } from "framer-motion";
import { Scale, FileText, Zap, ShieldAlert, CreditCard } from "lucide-react";

const termsSections = [
  {
    id: "agreement",
    icon: <FileText className="text-green-500" size={24} />,
    title: "1. Agreement to Terms",
    content:
      "By accessing this website and purchasing products from REEDYION Smart Lithium Battery, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you disagree with any part of these terms, you are prohibited from using or accessing this site.",
  },
  {
    id: "use-license",
    icon: <Scale className="text-green-500" size={24} />,
    title: "2. Intellectual Property",
    content:
      "All content, logos, battery designs, technical specifications, and software on this website are the intellectual property of REEDYION. You may not modify, copy, reproduce, or distribute any materials without our prior written consent.",
  },
  {
    id: "products",
    icon: <Zap className="text-green-500" size={24} />,
    title: "3. Product Usage & Safety",
    content:
      "Our lithium-ion battery packs must be used, installed, and maintained strictly according to the provided technical manuals. REEDYION is not liable for damages, injuries, or losses resulting from improper installation, unauthorized modifications, or usage beyond specified voltage and capacity limits.",
  },
  {
    id: "pricing",
    icon: <CreditCard className="text-green-500" size={24} />,
    title: "4. Purchasing & B2B Orders",
    content:
      "All bulk and OEM quotes are valid for 30 days unless stated otherwise. We reserve the right to refuse or cancel any order for reasons including but not limited to product availability, errors in the description or price, or suspected fraudulent activity.",
  },
  {
    id: "liability",
    icon: <ShieldAlert className="text-green-500" size={24} />,
    title: "5. Limitation of Liability",
    content:
      "In no event shall REEDYION or its suppliers be liable for any consequential damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our products or website.",
  },
];

export default function Terms() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-[#020c02] flex flex-col w-full overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-16 overflow-hidden bg-[#020c02] border-b border-[#163316]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(22,51,22,0.6)_0%,_#020c02_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 mix-blend-overlay pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <Scale
              className="text-green-500 mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]"
              size={48}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]">
              Terms & Conditions
            </h1>
            <p className="text-zinc-400 font-medium mb-2">
              Last Updated: July 28, 2026
            </p>
            <p className="text-sm text-zinc-500">
              Please read these terms carefully before using our services or
              purchasing our products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 bg-[#020c02]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            className="p-8 md:p-12 bg-[#070b07] border border-[#163316] rounded-3xl shadow-[0_0_40px_rgba(34,197,94,0.05)] space-y-12"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-zinc-300 leading-relaxed text-lg">
                Welcome to{" "}
                <span className="text-green-500 font-semibold">
                  REEDYION Smart Lithium Battery
                </span>
                . These terms and conditions outline the rules and regulations
                for the use of our website and the purchase of our energy
                storage solutions, EV batteries, and custom lithium packs.
              </p>
            </motion.div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#163316] to-transparent" />

            {termsSections.map((section) => (
              <motion.div
                key={section.id}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0a0f0a] border border-[#163316] flex items-center justify-center group-hover:border-green-500/50 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all duration-300 shrink-0">
                    {section.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {section.title}
                  </h2>
                </div>
                <p className="text-zinc-400 leading-relaxed pl-16">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
