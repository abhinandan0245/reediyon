import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  Globe,
  PhoneCall,
  Zap,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

const menus = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Blog", path: "/blog" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const mobileMenuVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const linkVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        boxShadow: isScrolled ? "0 4px 30px rgba(0, 200, 83, 0.15)" : "none",
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full transition-colors duration-300 bg-[#020c02]"
    >
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden lg:block bg-green-600 text-[13px] text-white">
        <div className="container mx-auto px-4 max-w-7xl flex h-9 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 hover:text-green-200 transition-colors cursor-pointer">
              <Phone size={14} />
              <span className="tracking-wide">+91 77425 14313</span>
            </div>
            <span className="opacity-50">|</span>
            <span className="tracking-wide">+91 98873 31153</span>
            <span className="opacity-50">|</span>
            <span className="tracking-wide">+91 78785 89871</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:info@REEDYIONbattery.com"
              className="flex items-center gap-1.5 hover:text-green-200 transition-colors"
            >
              <Mail size={14} />
              <span className="tracking-wide">info@REEDYIONbattery.com</span>
            </a>
            <span className="opacity-50">|</span>
            <div className="flex items-center gap-1.5">
              <Globe size={14} />
              <span className="tracking-wide">www.REEDYIONbattery.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 max-w-7xl flex h-16 lg:h-20 items-center justify-between relative bg-[#020c02]">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-3 lg:gap-4 group z-50"
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.05 }}
            className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-[10px] bg-green-600 shadow-[0_0_15px_rgba(34,197,94,0.5)]"
          >
            <Zap size={20} className="text-white lg:w-6 lg:h-6" />
          </motion.div>
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-lg lg:text-xl font-bold tracking-widest text-white">
              REEDYION
            </h2>
            <p className="text-[8px] lg:text-[8px] font-bold uppercase tracking-[0.35em] text-green-500">
              Smart Lithium Battery
            </p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {menus.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative rounded-[10px] px-4 py-2 text-[13px] font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-white !text-green-700 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    : "text-zinc-300 hover:!text-green-400 hover:bg-white/5"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <motion.a
            href="tel:+917742514313"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors cursor-pointer"
          >
            <PhoneCall size={16} />
            <span className="font-medium text-sm">Call Now</span>
          </motion.a>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="primary"
              size="sm"
              className="shadow-[0_0_15px_rgba(34,197,94,0.4)]"
              onClick={() => navigate("/contact")}
            >
              Get Free Quote
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white z-50 p-2 hover:text-green-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-full left-0 w-full bg-[#070b07]/95 backdrop-blur-xl border-b border-[#163316] lg:hidden overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            <nav className="flex flex-col px-6 py-6 gap-2">
              {menus.map((item) => (
                <motion.div key={item.path} variants={linkVariants}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition-all border border-transparent ${
                        isActive
                          ? "bg-green-600/10 border-green-500/30 !text-green-400 shadow-[inset_0_0_20px_rgba(34,197,94,0.05)]"
                          : "text-zinc-300 hover:bg-white/5 hover:border-white/10"
                      }`
                    }
                  >
                    {item.name}
                    <ChevronRight size={16} className="opacity-50" />
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                variants={linkVariants}
                className="mt-4 flex flex-col gap-3 border-t border-[#163316] pt-6"
              >
                <a
                  href="tel:+917742514313"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 text-green-500 py-3.5 border border-green-900 hover:border-green-500 rounded-xl font-bold transition-all bg-green-950/20"
                >
                  <PhoneCall size={18} />
                  <span>Call Now</span>
                </a>
                <div
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button
                    variant="primary"
                    className="w-full py-3.5 text-base shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                  >
                    Get Free Quote
                  </Button>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
