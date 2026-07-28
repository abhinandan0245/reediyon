import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  Package,
  ShieldAlert,
  Phone,
  ArrowRight,
  Info
} from "lucide-react";
import { Link } from "react-router-dom";

// Animation Variants
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

export default function ReturnsPolicy() {
  return (
    <div className="min-h-screen bg-[#020c02] text-zinc-300 font-sans selection:bg-emerald-500/30">
      {/* Page Header (Hero) */}
      <section className="relative w-full py-20 lg:py-28 bg-gradient-to-b from-[#0a1f0a] to-[#020c02] border-b border-emerald-900/30 overflow-hidden">
        {/* Subtle Grid Background */}
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
            Return & Replacement Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8"
          >
            We are committed to your complete satisfaction. Review our return and
            replacement terms below.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-sm text-zinc-500"
          >
            <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-emerald-500">Return Policy</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 max-w-4xl py-16 lg:py-24 space-y-16">
        
        {/* Notice Alert */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="flex gap-4 p-6 rounded-2xl bg-emerald-950/30 border border-emerald-900/50 shadow-[0_0_30px_rgba(16,185,129,0.05)]"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <Package className="text-white" size={24} />
          </div>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            Returns and replacement requests must be raised within <strong className="text-white">7 days of delivery</strong>. Claims raised after this period will not be eligible for return — they may however qualify for warranty service if a manufacturing defect is present.
          </p>
        </motion.div>

        {/* Return Eligibility */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-6"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white">
            Return Eligibility
          </motion.h2>
          
          <div className="space-y-3">
            {/* Eligible Items */}
            {[
              "Product received in damaged condition (transit damage)",
              "Wrong product delivered (different model or specification than ordered)",
              "Dead on arrival — product does not power on or function",
              "Manufacturing defect identified within 7 days of delivery",
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex items-center gap-4 p-4 rounded-xl bg-[#081408] border border-emerald-500/20">
                <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                <span className="text-emerald-100/90 text-sm md:text-base">{item}</span>
              </motion.div>
            ))}

            {/* Ineligible Items */}
            {[
              "Product has been installed, used, or altered",
              "Original packaging has been discarded or damaged",
              "Claim raised after 7 days of delivery",
              "Damage caused by misuse, improper installation, or incompatible chargers",
              "Custom-manufactured OEM battery packs (unless manufacturing defect)",
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex items-center gap-4 p-4 rounded-xl bg-[#140808] border border-red-500/10">
                <XCircle className="text-red-500/80 flex-shrink-0" size={20} />
                <span className="text-red-100/70 text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Return & Replacement Process */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white">
            Return & Replacement Process
          </motion.h2>

          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-7 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-900/50 before:to-transparent">
            {[
              { num: "01", title: "Raise a Claim", desc: "Contact us within 7 days of delivery via phone or email. Provide your order number, photos of the issue, and product condition." },
              { num: "02", title: "Claim Review", desc: "Our team reviews your claim within 1-2 business days and confirms eligibility based on the conditions above." },
              { num: "03", title: "Return Pickup / Drop-off", desc: "For approved claims, we arrange a pickup (where available) or provide our Jaipur address for self-dispatch. Product must be in original packaging." },
              { num: "04", title: "Inspection", desc: "Returned products are inspected within 2-4 business days of receipt at our facility." },
              { num: "05", title: "Replacement Dispatch", desc: "Approved replacements are dispatched within 2 business days of inspection completion. Refunds (if applicable) are processed within 7-10 business days." },
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Timeline Marker */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-[#020c02] bg-emerald-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(16,185,129,0.3)] z-10">
                  {step.num}
                </div>
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-2xl bg-[#060e06] border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <h3 className="font-bold text-white mb-2 text-lg">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Shipping Guidelines */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-white">Shipping Guidelines for Returns</h2>
          <ul className="space-y-3 list-none">
            {[
              "Pack the product securely in its original packaging with all accessories and documentation.",
              "Lithium batteries must be shipped via surface transport only — not by air. Comply with all applicable transport regulations.",
              "Do not ship a damaged or swollen battery without first consulting our team for safe packaging instructions.",
              "Clearly label the package with \"RETURN / LITHIUM BATTERY\" and your order number.",
              "Inward shipping cost for returns is borne by the customer unless the return is due to our error (wrong or damaged product).",
              "REEDIYON is not responsible for products lost or damaged during return transit. Use a reliable courier with tracking.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0 shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
                <span className="text-zinc-300 text-sm md:text-base leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Customer Responsibilities Warning */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="p-6 rounded-2xl bg-orange-950/20 border border-orange-900/50"
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="text-orange-500" size={24} />
            <h3 className="text-lg font-bold text-orange-400">Customer Responsibilities</h3>
          </div>
          <ul className="space-y-2 list-none">
            {[
              "Inspect the product at the time of delivery for visible transit damage before signing.",
              "Report any damage or discrepancy to the delivery agent and to REEDIYON within 24 hours of receipt.",
              "Do not attempt to install or use a visually damaged product — this may void the return claim.",
              "Keep all original packaging until you are satisfied the product is correct and working.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 mt-2 shrink-0" />
                <span className="text-orange-200/80 text-sm md:text-base">{text}</span>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need to Return a Product?</h2>
          <p className="text-zinc-400 max-w-lg mb-8">
            Contact our support team within 7 days of delivery. We'll guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:+917742514313"
              className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              <Phone size={18} />
              +91 77425 14313
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 hover:border-emerald-500 hover:text-emerald-400 text-white font-semibold rounded-full transition-all group"
            >
              Contact Support
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </section>
    </div>
  );
}