import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import toast from "react-hot-toast";


// --- DETAILS MODAL COMPONENT ---
export const ProductDetailsModal = ({
  product,
  isOpen,
  onClose,
  onOpenInquiry,
}) => {
  const [activeImg, setActiveImg] = useState(0);

  // Safely exit before accessing product properties, but after React hooks
  if (!product) return null;

  const extendedData = {
    dimensions: product.specs?.dimensions || "650x350x250 mm",
    weight: product.specs?.weight || "55 kg",
    chargeCycles: product.specs?.chargeCycles || "3000+",
    features: product.features || [
      "High Current Discharge (200A peak)",
      "Industrial Grade IP67 Enclosure",
      "Forklift Connector Compatible",
      "Real-Time Cell Balancing",
      "Drop & Vibration Resistant Design",
    ],
    applications: product.applications || [
      "Forklifts",
      "Pallet Trucks",
      "Industrial AGVs",
      "Material Handling Equipment",
    ],
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#070b07] border border-[#163316] rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.1)] custom-scrollbar"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#070b07]/95 backdrop-blur border-b border-[#163316]">
              <h2 className="text-xl font-bold text-white">{product.title}</h2>
              <button
                onClick={onClose}
                className="p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div className="space-y-3">
                <div className="w-full aspect-[16/9] bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-600 text-sm">
                    Image {activeImg + 1}
                  </span>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                  {product.images?.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImg(idx)}
                      className={`relative flex-shrink-0 w-16 h-12 rounded-lg border-2 overflow-hidden bg-zinc-900 transition-all ${
                        activeImg === idx
                          ? "border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                          : "border-transparent hover:border-zinc-600"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider rounded-full border border-green-500/30 mb-4">
                  {product.category}
                </span>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {product.description} Heavy-duty lithium iron phosphate pack
                  for forklifts and industrial machinery.
                </p>
              </div>

              <div>
                <h3 className="text-green-500 text-xs font-bold uppercase tracking-widest mb-4">
                  Technical Specifications
                </h3>
                <div className="bg-[#0a0f0a] border border-[#163316] rounded-xl overflow-hidden">
                  <div className="grid grid-cols-2 p-3 border-b border-[#163316] hover:bg-zinc-900/50 transition-colors">
                    <span className="text-zinc-400 text-sm">Voltage</span>
                    <span className="text-white text-sm font-semibold">
                      {product.specs.voltage}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 p-3 border-b border-[#163316] hover:bg-zinc-900/50 transition-colors">
                    <span className="text-zinc-400 text-sm">Capacity</span>
                    <span className="text-white text-sm font-semibold">
                      {product.specs.capacity}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 p-3 border-b border-[#163316] hover:bg-zinc-900/50 transition-colors">
                    <span className="text-zinc-400 text-sm">Chemistry</span>
                    <span className="text-white text-sm font-semibold">
                      {product.specs.chemistry}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 p-3 border-b border-[#163316] hover:bg-zinc-900/50 transition-colors">
                    <span className="text-zinc-400 text-sm">Dimensions</span>
                    <span className="text-white text-sm font-semibold">
                      {extendedData.dimensions}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 p-3 border-b border-[#163316] hover:bg-zinc-900/50 transition-colors">
                    <span className="text-zinc-400 text-sm">Weight</span>
                    <span className="text-white text-sm font-semibold">
                      {extendedData.weight}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 p-3 border-b border-[#163316] hover:bg-zinc-900/50 transition-colors">
                    <span className="text-zinc-400 text-sm">Charge Cycles</span>
                    <span className="text-white text-sm font-semibold">
                      {extendedData.chargeCycles}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 p-3 hover:bg-zinc-900/50 transition-colors">
                    <span className="text-zinc-400 text-sm">Warranty</span>
                    <span className="text-white text-sm font-semibold">
                      {product.specs.warranty}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-green-500 text-xs font-bold uppercase tracking-widest mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {extendedData.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-zinc-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0 shadow-[0_0_5px_rgba(34,197,94,0.8)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-green-500 text-xs font-bold uppercase tracking-widest mb-4">
                  Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {extendedData.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-green-500/10 text-green-300 text-xs font-medium rounded-full border border-green-500/20"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 z-10 flex gap-4 px-6 py-4 bg-[#070b07]/95 backdrop-blur border-t border-[#163316]">
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry();
                }}
                className="flex-1 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all"
              >
                Send Inquiry
              </button>
              <a
                href="tel:+917742514313"
                className="flex-1 py-3 flex justify-center items-center bg-transparent border-2 border-green-900 hover:border-green-500 text-green-500 font-bold rounded-lg transition-all"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- INQUIRY MODAL COMPONENT ---
// --- INQUIRY MODAL COMPONENT ---
export const InquiryModal = ({ product, isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", company: "", quantity: "", city: "", message: "",
  });

  if (!product) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    
    if (!accessKey) {
      toast.error("VITE_WEB3FORMS_KEY is missing from .env file.", {
        style: { background: "#0a0f0a", color: "#ef4444", border: "1px solid #7f1d1d" }
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Inquiry for: ${product.title}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Inquiry sent successfully! We will contact you soon.", {
          style: { background: "#0a0f0a", color: "#2ecc71", border: "1px solid #163316" }
        });
        setFormData({ name: "", phone: "", email: "", company: "", quantity: "", city: "", message: "" });
        onClose();
      } else {
        // Throw the exact error message returned by Web3Forms
        throw new Error(result.message || "Failed to submit the form.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      // Display the actual error message in the toast
      toast.error(`Error: ${error.message}`, {
        style: { background: "#0a0f0a", color: "#ef4444", border: "1px solid #7f1d1d" }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={!isSubmitting ? onClose : undefined}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#070b07] border border-[#163316] rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.15)] custom-scrollbar"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#163316] sticky top-0 bg-[#070b07]/95 backdrop-blur z-10">
              <h2 className="text-lg font-bold text-white">Inquiry: {product.title}</h2>
              <button onClick={onClose} disabled={isSubmitting} className="text-zinc-400 hover:text-white disabled:opacity-50">
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 p-3 mb-6 bg-green-950/20 border border-green-900/50 rounded-xl">
                <div className="w-16 h-16 bg-zinc-900 rounded-lg border border-zinc-800" />
                <div>
                  <h4 className="text-white text-sm font-bold">{product.title}</h4>
                  <p className="text-zinc-400 text-xs mt-1">
                    {product.specs.voltage} • {product.specs.capacity} • {product.specs.chemistry}
                  </p>
                  <p className="text-green-500 text-xs font-semibold mt-1">Warranty: {product.specs.warranty}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">Full Name *</label>
                    <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Rajesh Sharma" className="w-full bg-[#0a0f0a] border border-[#163316] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all disabled:opacity-50" disabled={isSubmitting} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">Phone Number *</label>
                    <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 98765 43210" className="w-full bg-[#0a0f0a] border border-[#163316] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all disabled:opacity-50" disabled={isSubmitting} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Email Address *</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="you@company.com" className="w-full bg-[#0a0f0a] border border-[#163316] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all disabled:opacity-50" disabled={isSubmitting} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">Company / Organization</label>
                    <input name="company" value={formData.company} onChange={handleChange} type="text" placeholder="Your Company Ltd." className="w-full bg-[#0a0f0a] border border-[#163316] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all disabled:opacity-50" disabled={isSubmitting} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">Required Quantity *</label>
                    <input required name="quantity" value={formData.quantity} onChange={handleChange} type="text" placeholder="e.g. 50 units" className="w-full bg-[#0a0f0a] border border-[#163316] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all disabled:opacity-50" disabled={isSubmitting} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">City / State</label>
                  <input name="city" value={formData.city} onChange={handleChange} type="text" placeholder="Jaipur, Rajasthan" className="w-full bg-[#0a0f0a] border border-[#163316] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all disabled:opacity-50" disabled={isSubmitting} />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Message / Special Requirements</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Describe any custom specifications..." className="w-full bg-[#0a0f0a] border border-[#163316] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none disabled:opacity-50" disabled={isSubmitting} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 mt-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all disabled:bg-green-800 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={18} /> Send Inquiry</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};