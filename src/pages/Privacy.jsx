import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Mail } from "lucide-react";

const policySections = [
  {
    id: "collection",
    icon: <Database className="text-green-500" size={24} />,
    title: "1. Information We Collect",
    content:
      "When you interact with REEDYION Smart Lithium Battery (via website inquiries, quotes, or direct contact), we may collect personal information such as your full name, email address, phone number, company name, and location. We also collect non-personal diagnostic data automatically, such as IP addresses and browsing behavior, to improve our website experience.",
  },
  {
    id: "usage",
    icon: <Eye className="text-green-500" size={24} />,
    title: "2. How We Use Your Data",
    content:
      "We use the collected information exclusively to provide accurate bulk pricing quotes, process B2B/OEM orders, deliver technical support, and communicate important updates regarding our lithium-ion products. We do not use your personal data for automated decision-making or profiling.",
  },
  {
    id: "sharing",
    icon: <Shield className="text-green-500" size={24} />,
    title: "3. Data Sharing & Protection",
    content:
      "REEDYION strictly does not sell, rent, or trade your personal information. We may only share necessary details with trusted third-party logistics partners to facilitate the delivery of your battery packs. All data is processed using industry-standard encryption protocols to ensure your competitive business information remains secure.",
  },
  {
    id: "security",
    icon: <Lock className="text-green-500" size={24} />,
    title: "4. Security Measures",
    content:
      "We implement robust physical, electronic, and managerial procedures to safeguard and secure the information we collect online. However, please note that no method of transmission over the internet or electronic storage is 100% secure, though we strive to use commercially acceptable means to protect your personal information.",
  },
  {
    id: "contact",
    icon: <Mail className="text-green-500" size={24} />,
    title: "5. Contact Us Regarding Privacy",
    content:
      "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact our compliance team at info@REEDYIONbattery.com or write to us at our headquarters: S-12/13, Chandra Nagar, Kalwar Road, Jhotwara, Jaipur, Rajasthan - 302012.",
  },
];

export default function Privacy() {
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
            <Shield
              className="text-green-500 mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]"
              size={48}
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]">
              Privacy Policy
            </h1>
            <p className="text-zinc-400 font-medium mb-2">
              Effective Date: July 28, 2026
            </p>
            <p className="text-sm text-zinc-500">
              Your data security is as reliable as our battery systems.
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
                At{" "}
                <span className="text-green-500 font-semibold">
                  REEDYION Smart Lithium Battery
                </span>
                , we are committed to protecting the privacy and security of our
                clients, partners, and website visitors. This Privacy Policy
                outlines the types of information we collect, how it is used,
                and the steps we take to ensure your personal and business data
                remains secure while interacting with our digital platforms.
              </p>
            </motion.div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#163316] to-transparent" />

            {policySections.map((section) => (
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
