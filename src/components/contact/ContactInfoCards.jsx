import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const infoData = [
  {
    icon: <Phone size={20} />,
    title: "Call Us",
    details: ["+91 77425 14313", "+91 86873 31153", "+91 78765 89871"],
    action: "Call Now",
    link: "tel:+917742514313",
  },
  {
    icon: <Mail size={20} />,
    title: "Email Us",
    details: ["info@reediyonbattery.com", "www.reediyonbattery.com"],
    action: "Send Email",
    link: "mailto:info@reediyonbattery.com",
  },
  {
    icon: <MapPin size={20} />,
    title: "Visit Us",
    details: [
      "S-12/13, Chandra Nagar",
      "Kalwar Road, Jhotwara",
      "Jaipur, Rajasthan - 302012",
    ],
    action: "Get Directions",
    link: "https://maps.google.com/?q=Jaipur",
  },
  {
    icon: <Clock size={20} />,
    title: "Business Hours",
    details: ["Monday - Saturday", "9:00 AM - 7:00 PM", "Sunday: Closed"],
    action: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

export default function ContactInfoCards() {
  return (
    <section className="relative w-full bg-[#e8f7ec] py-16">
      <div className="container mx-auto px-4 max-w-7xl -mt-32 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {infoData.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex flex-col p-8 rounded-3xl bg-[#070b07] border border-[#163316] hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-950 rounded-full flex items-center justify-center text-green-500 mb-6 border border-green-900/50">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {card.title}
              </h3>
              <div className="flex flex-col gap-1 mb-8 flex-grow">
                {card.details.map((line, i) => (
                  <p key={i} className="text-sm text-zinc-400">
                    {line}
                  </p>
                ))}
              </div>
              {card.action && (
                <a
                  href={card.link}
                  className="w-full text-center py-2.5 rounded-lg border border-[#163316] text-green-500 text-sm font-semibold hover:bg-green-500 hover:text-white transition-all"
                >
                  {card.action}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
