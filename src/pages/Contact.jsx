import React from "react";
import { motion } from "framer-motion";
import ContactHero from "../components/contact/ContactHero";
import ContactInfoCards from "../components/contact/ContactInfoCards";
import ContactFormSection from "../components/contact/ContactFormSection";

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-[#020c02] flex flex-col w-full overflow-hidden"
    >
      <ContactHero />
      <ContactInfoCards />
      <ContactFormSection />
    </motion.main>
  );
}
