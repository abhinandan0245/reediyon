import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "Battery Life & Performance",
    question: "How long do REEDIYON lithium batteries last?",
    answer:
      "Our LiFePO4 batteries are designed to last over 3,000 to 5,000 charge cycles, which typically translates to a lifespan of 7 to 10 years depending on depth of discharge and operating conditions.",
  },
  {
    category: "Battery Life & Performance",
    question: "What affects battery life the most?",
    answer:
      "Extreme temperatures, deep discharging below recommended levels, and using non-optimized chargers are the primary factors that degrade lithium battery lifespan.",
  },
  {
    category: "Battery Life & Performance",
    question: "How do I know when my battery needs replacing?",
    answer:
      "When the battery can no longer hold more than 70% of its original rated capacity, or if you notice significant drops in runtime under normal loads, it is time to consider a replacement.",
  },
  {
    category: "Charging",
    question: "Can I use any charger with REEDIYON batteries?",
    answer:
      "No. You must use a charger specifically designed with a Lithium or LiFePO4 charging profile. Using lead-acid chargers can damage the BMS or overcharge the cells.",
  },
  {
    category: "Charging",
    question: "How long does it take to charge a REEDIYON battery?",
    answer:
      "Charging time depends on your charger's amp output and battery capacity. A 100Ah battery with a 20A charger will take approximately 5 hours from completely empty to full.",
  },
  {
    category: "Charging",
    question: "Is it safe to leave the battery on charge overnight?",
    answer:
      "Yes, our advanced built-in Battery Management System (BMS) automatically stops drawing current once the battery is fully charged, preventing overcharging.",
  },
  {
    category: "Warranty & Returns",
    question: "What warranty do REEDIYON batteries come with?",
    answer:
      "We offer warranties ranging from 1 to 5 years depending on the specific product category. Please refer to our Warranty Policy page for detailed breakdown.",
  },
  {
    category: "Warranty & Returns",
    question: "How do I make a warranty claim?",
    answer:
      "Contact our support team with your purchase invoice and a description of the issue. Our technical team will guide you through the assessment process.",
  },
  {
    category: "Bulk Orders & B2B",
    question: "What is the minimum order quantity for bulk pricing?",
    answer:
      "Our standard MOQ for wholesale pricing begins at 10 units for standard packs, but we can negotiate based on project scope and custom OEM requirements.",
  },
  {
    category: "Bulk Orders & B2B",
    question: "Do you offer dealer or distributor partnerships?",
    answer:
      "Yes! We are actively expanding our pan-India network. Contact our sales team via email or phone to discuss dealership margins and requirements.",
  },
  {
    category: "Customization & OEM",
    question: "Can you manufacture batteries to our custom specifications?",
    answer:
      "Absolutely. We specialize in OEM manufacturing and can design battery packs with custom dimensions, voltages, capacities, and specialized BMS configurations.",
  },
  {
    category: "Technical Support",
    question: "My battery BMS is tripping frequently. What should I do?",
    answer:
      "Frequent tripping usually indicates that your load is drawing a higher peak current than the BMS is rated for, or there is a short circuit. Check your load requirements against the battery specifications.",
  },
];

const categories = [
  "All",
  "Battery Life & Performance",
  "Charging",
  "Warranty & Returns",
  "Bulk Orders & B2B",
  "Customization & OEM",
  "Technical Support",
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqs.filter(
    (faq) =>
      (activeCategory === "All" || faq.category === activeCategory) &&
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#020c02] text-zinc-300 font-sans selection:bg-emerald-500/30 pb-20">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-24 bg-gradient-to-b from-[#0a1f0a] to-[#020c02] border-b border-emerald-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#163316_1px,transparent_1px),linear-gradient(to_bottom,#163316_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Help Centre
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8"
          >
            Find quick answers about our batteries, warranty, bulk orders, and
            technical support.
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
            <span className="text-emerald-500">FAQ</span>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-5xl py-12">
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12 border-b border-white/5 pb-8">
          {/* Search Box - Fixed Width on Desktop */}
          <div className="relative w-full lg:w-80 flex-shrink-0">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#060e06] border border-white/10 rounded-full py-3 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>

          {/* Filter Container - Robust Scroll Handling */}
          <div
            className="flex-1 w-full overflow-x-auto pb-2 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* w-max forces all items in a single non-wrapping row without cutting the start */}
            <div className="flex flex-nowrap items-center justify-start gap-2 w-max pr-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 ${
                    activeCategory === cat
                      ? "bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] border border-emerald-500"
                      : "bg-[#060e06] text-zinc-400 hover:text-white border border-white/10 hover:border-emerald-500/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-[#081408] border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.05)]" : "bg-[#060e06] border-white/5 hover:border-white/10"}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-white text-base md:text-lg pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`flex-shrink-0 text-emerald-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      size={20}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-zinc-400 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-12 text-zinc-500">
              No questions found matching your search.
            </div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto bg-emerald-700 rounded-3xl p-8 md:p-12 text-center shadow-[0_20px_40px_rgba(16,185,129,0.2)] border border-emerald-500/50"
        >
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Still Have Questions?
          </h2>
          <p className="text-emerald-100 mb-8 max-w-md mx-auto">
            Our team is available Mon-Sat, 9AM - 7PM. We typically respond
            within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+917742514313"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white !text-emerald-950 font-bold rounded-full hover:bg-emerald-50 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 w-full sm:w-auto active:scale-95"
            >
              <Phone size={18} className="!text-emerald-950" />
              <span className="!text-emerald-950">Call +91 77425 14313</span>
            </a>
            <a
              href="https://wa.me/917742514313"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}