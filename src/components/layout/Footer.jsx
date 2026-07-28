import { motion } from "framer-motion";
import { Zap, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const footerLinks = {
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
    { name: "Return-policy", path: "/return-policy" },
    { name: "Warranty-policy", path: "/warranty-policy" },
    { name: "FAQ", path: "/faq" },
  ],
  products: [
    { name: "E-Rickshaw Battery", path: "/products" },
    { name: "Solar Storage", path: "/products" },
    { name: "E-Bike PowerPack", path: "/products" },
    { name: "Home Inverter", path: "/products" },
    { name: "UPS Systems", path: "/products" },
    { name: "Industrial Lithium", path: "/products" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0d12] pt-20 pb-6 border-t border-white/10 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Column 1: Brand */}
          <motion.div variants={columnVariants} className="flex flex-col gap-6">
            <NavLink
              to="/"
              className="flex items-center gap-3 group inline-flex w-fit"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-[0_0_15px_rgba(0,200,83,0.3)] transition-transform group-hover:scale-105">
                <Zap size={20} fill="white" className="text-white" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-2xl tracking-widest text-white">
                  REEDYION
                </h2>
                <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-primary">
                  Smart Lithium Battery
                </p>
              </div>
            </NavLink>

            <p className="text-text-muted text-sm leading-relaxed">
              Powering the future with high-performance, smart lithium-ion
              battery solutions for mobility, solar, and industrial applications
              across India.
            </p>

            <div className="flex items-center gap-3 mt-2">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="h-10 w-10 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-text-light hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,200,83,0.4)] hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                ),
              )}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={columnVariants}>
            <h3 className="text-white font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" /> Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.quickLinks.map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link.path}
                    className="group flex items-center gap-2 text-text-muted text-sm hover:text-primary transition-colors"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Products */}
          <motion.div variants={columnVariants}>
            <h3 className="text-white font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" /> Our Products
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.products.map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link.path}
                    className="group flex items-center gap-2 text-text-muted text-sm hover:text-primary transition-colors"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div variants={columnVariants}>
            <h3 className="text-white font-heading font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" /> Contact Us
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 text-text-muted text-sm group">
                <MapPin
                  size={18}
                  className="text-primary mt-1 flex-shrink-0 group-hover:animate-bounce"
                />
                <span>
                  123 Energy Park, Industrial Area Phase 2, New Delhi, 110020,
                  India
                </span>
              </li>
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <Phone
                  size={18}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+917742514313"
                    className="hover:text-primary transition-colors"
                  >
                    +91 77425 14313
                  </a>
                  <a
                    href="tel:+919887331153"
                    className="hover:text-primary transition-colors"
                  >
                    +91 98873 31153
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-text-muted text-sm">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@REEDYIONbattery.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  info@REEDYIONbattery.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} REEDYION Battery. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
