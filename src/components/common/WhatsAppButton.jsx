import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({
  phoneNumber = "917742514313",
  message = "Hello REEDYION Team! I have an inquiry regarding lithium batteries.",
}) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-600 text-white rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-emerald-400/40 group cursor-pointer"
      aria-label="Contact on WhatsApp"
    >
      {/* Animated Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 pointer-events-none" />

      {/* WhatsApp Icon */}
      <MessageCircle
        size={28}
        className="relative z-10 fill-white text-emerald-600"
      />

      {/* Hover Tooltip */}
      <span className="absolute left-16 px-3 py-1.5 bg-[#070b07] text-emerald-400 text-xs font-bold rounded-lg border border-[#163316] shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with Us
      </span>
    </motion.a>
  );
}
