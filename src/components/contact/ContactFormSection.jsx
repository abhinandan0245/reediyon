import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, MessageCircle, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const inquiryTypes = [
  "General Inquiry",
  "Product Inquiry",
  "Bulk/B2B Order",
  "OEM Manufacturing",
  "Technical Support",
  "Dealer Partnership",
];

export default function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeType, setActiveType] = useState("General Inquiry");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    city: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey)
      return toast.error("Configuration Error: Missing Web3Forms Key.");

    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Contact Page: ${activeType}`,
          type: activeType,
          ...formData,
        }),
      });
      if ((await res.json()).success) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          city: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-20 bg-[#020c02]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-500 text-xs font-bold uppercase tracking-widest mb-2 block">
              Quick Inquiry
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rajesh Sharma"
                    className="w-full bg-[#070b07] border border-[#163316] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">
                    Phone Number *
                  </label>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#070b07] border border-[#163316] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-2">
                  Email Address *
                </label>
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-[#070b07] border border-[#163316] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">
                    Company
                  </label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    className="w-full bg-[#070b07] border border-[#163316] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">
                    City / State
                  </label>
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Jaipur, Rajasthan"
                    className="w-full bg-[#070b07] border border-[#163316] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-3">
                  Inquiry Type
                </label>
                <div className="flex flex-wrap gap-3">
                  {inquiryTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setActiveType(type)}
                      className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${activeType === type ? "bg-green-600 border-green-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.3)]" : "bg-[#070b07] border-[#163316] text-zinc-400 hover:border-green-500/50"}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your battery requirements..."
                  className="w-full bg-[#070b07] border border-[#163316] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-green-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all flex justify-center items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Location & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <span className="text-green-500 text-xs font-bold uppercase tracking-widest mb-2 block">
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Our Location
            </h2>

            <div className="w-full h-72 rounded-2xl overflow-hidden border border-[#163316] bg-zinc-900 mb-6 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.629394143438!2d75.753303!3d26.9421869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3edb5768fb3%3A0x6b772c67b2d56a73!2sJhotwara%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#070b07] border border-[#163316] mb-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">
                  REEDYION Smart Lithium Battery
                </h4>
                <p className="text-zinc-400 text-sm">
                  S-12/13, Chandra Nagar, Kalwar Road, Jhotwara, Jaipur,
                  Rajasthan - 302012
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/917742514313"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-[#070b07] border border-[#163316] hover:border-green-500/50 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Chat on WhatsApp</h4>
                <p className="text-zinc-400 text-sm">
                  Quick response — usually within 1 hour
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
