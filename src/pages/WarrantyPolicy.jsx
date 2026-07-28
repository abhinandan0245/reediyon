import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  ShieldAlert,
  Phone,
  ArrowRight,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WarrantyPolicy() {
  const durations = [
    {
      name: "EV Battery Packs (Standard)",
      duration: "1 Year",
      condition: "from date of purchase",
    },
    {
      name: "Solar Storage Batteries",
      duration: "3 Years",
      condition: "from date of installation",
    },
    {
      name: "Industrial LiFePO4 Packs",
      duration: "3 Years",
      condition: "from date of purchase",
    },
    {
      name: "UPS / Inverter Batteries",
      duration: "3 Years",
      condition: "from date of purchase",
    },
    {
      name: "Energy Storage Systems (ESS)",
      duration: "5 Years",
      condition: "from date of commissioning",
    },
    {
      name: "Custom OEM Battery Packs",
      duration: "As per agreement",
      condition: "stated in purchase order",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020c02] text-zinc-300 font-sans selection:bg-emerald-500/30">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-28 bg-gradient-to-b from-[#0a1f0a] to-[#020c02] border-b border-emerald-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#163316_1px,transparent_1px),linear-gradient(to_bottom,#163316_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Legal Policy
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Warranty Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8"
          >
            REEDIYON stands behind every battery we manufacture. Read our
            complete warranty terms and claim procedure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-sm text-zinc-500"
          >
            <Link to="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-emerald-500">Warranty Policy</span>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-4xl py-16 lg:py-24 space-y-16">
        {/* Warranty Duration Table */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold text-white"
          >
            Warranty Duration
          </motion.h2>
          <motion.p variants={fadeUp} className="text-zinc-400 text-sm">
            Warranty periods vary by product category.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/10 overflow-hidden bg-[#060e06]"
          >
            {durations.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors gap-2"
              >
                <span className="text-white font-medium w-full sm:w-1/2">
                  {item.name}
                </span>
                <span className="text-emerald-400 font-bold w-full sm:w-1/4">
                  {item.duration}
                </span>
                <span className="text-zinc-500 text-sm w-full sm:w-1/4 sm:text-right">
                  {item.condition}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Coverage Limits */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold text-white"
          >
            What is Covered & Not Covered
          </motion.h2>
          <div className="space-y-3">
            {[
              "Manufacturing defects in materials or workmanship",
              "BMS hardware failure under normal operating conditions",
              "Cell capacity loss beyond normal degradation (below 70% within warranty period)",
              "Failure due to factory-origin defects discovered after installation",
            ].map((item, idx) => (
              <motion.div
                key={`cov-${idx}`}
                variants={fadeUp}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#081408] border border-emerald-500/20"
              >
                <CheckCircle2
                  className="text-emerald-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-emerald-100/90 text-sm md:text-base">
                  {item}
                </span>
              </motion.div>
            ))}
            {[
              "Physical damage (drops, cracks, punctures, crushing)",
              "Water damage beyond rated IP rating",
              "Damage from incompatible or non-approved chargers",
              "Modifications or tampering by unauthorized persons",
              "Use outside specified voltage, temperature, or current range",
              "Normal wear and capacity fade within rated cycles",
            ].map((item, idx) => (
              <motion.div
                key={`ncov-${idx}`}
                variants={fadeUp}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#140808] border border-red-500/10"
              >
                <XCircle className="text-red-500/80 flex-shrink-0" size={20} />
                <span className="text-red-100/70 text-sm md:text-base">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Claim Process */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl font-bold text-white"
          >
            How to Make a Warranty Claim
          </motion.h2>
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-7 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-900/50 before:to-transparent">
            {[
              {
                num: "01",
                title: "Contact Us",
                desc: "Call or email our support team with your order number, purchase date, product model, and a description of the issue.",
              },
              {
                num: "02",
                title: "Initial Assessment",
                desc: "Our technical team will assess your description within 2 business days and advise if the issue is covered under warranty.",
              },
              {
                num: "03",
                title: "Send for Inspection",
                desc: "If required, send the battery to our Jaipur facility. We will share the courier address. Inward shipping cost is borne by the customer.",
              },
              {
                num: "04",
                title: "Technical Inspection",
                desc: "Our engineers inspect the battery within 5-7 business days and determine if it is a manufacturing defect.",
              },
              {
                num: "05",
                title: "Resolution",
                desc: "If covered, the battery is repaired or replaced at no charge. Replacement unit dispatched within 3 business days of approval.",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-[#020c02] bg-emerald-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(16,185,129,0.3)] z-10">
                  {step.num}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-2xl bg-[#060e06] border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <h3 className="font-bold text-white mb-2 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="p-6 rounded-2xl bg-orange-950/20 border border-orange-900/50"
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="text-orange-500" size={24} />
            <h3 className="text-lg font-bold text-orange-400">
              Important Notes
            </h3>
          </div>
          <ul className="space-y-2 list-none">
            {[
              "Proof of purchase (invoice or receipt) is required for all warranty claims.",
              "Warranty is non-transferable and applies to the original purchaser only.",
              "REEDIYON reserves the right to repair or replace at its discretion.",
              "Replacement units carry the remaining warranty period of the original unit.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 mt-2 shrink-0" />
                <span className="text-orange-200/80 text-sm md:text-base">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#060e06] to-[#020c02] border border-white/5 text-center flex flex-col items-center shadow-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need to Make a Claim?
          </h2>
          <p className="text-zinc-400 max-w-lg mb-8">
            Contact our warranty support team — we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:+917742514313"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              <Phone size={18} /> +91 77425 14313
            </a>
            <a
              href="mailto:info@reediyonbattery.com"
              className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 hover:border-emerald-500 hover:text-emerald-400 text-white font-semibold rounded-full transition-all group"
            >
              Email Support{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
