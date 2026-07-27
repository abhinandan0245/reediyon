import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { categories, productsData } from "./productsData"; // Adjust path if needed
import { ProductDetailsModal, InquiryModal } from "./ProductModals"; // Adjust path to your modals file

// --- PRODUCT CARD COMPONENT ---
const ProductCard = ({ product, onOpenDetails, onOpenInquiry }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col rounded-2xl bg-[#070b07] border border-[#163316] overflow-hidden hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300"
    >
      <div className="relative w-full aspect-[4/3] bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 text-xs">
          Image {currentImage + 1}
        </div>
        <div className="absolute top-3 left-3 px-2 py-1 bg-green-500/20 backdrop-blur-md rounded text-[10px] font-bold text-green-400 uppercase border border-green-500/30">
          {product.category}
        </div>
        <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-md rounded text-[10px] font-medium text-white">
          {currentImage + 1}/{product.images.length}
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {product.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentImage === idx
                  ? "w-4 bg-green-500"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-sm text-zinc-400 mb-6 line-clamp-2 min-h-[40px]">
          {product.description}
        </p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6 mt-auto">
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">
              Voltage
            </p>
            <p className="text-sm font-semibold text-zinc-200">
              {product.specs.voltage}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">
              Capacity
            </p>
            <p className="text-sm font-semibold text-zinc-200">
              {product.specs.capacity}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">
              Chemistry
            </p>
            <p className="text-sm font-semibold text-zinc-200">
              {product.specs.chemistry}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider">
              Warranty
            </p>
            <p className="text-sm font-semibold text-zinc-200">
              {product.specs.warranty}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-auto">
          <button
            onClick={() => onOpenDetails(product)}
            className="py-2.5 rounded-lg border border-[#163316] text-green-500 text-sm font-semibold hover:bg-green-500/10 transition-colors"
          >
            Details
          </button>
          <button
            onClick={() => onOpenInquiry(product)}
            className="py-2.5 rounded-lg bg-green-600 text-white text-sm font-semibold hover:bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-all"
          >
            Inquire
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN MATRIX COMPONENT ---
export default function ProductsMatrix() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Modal States
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const filteredProducts = productsData.filter((product) => {
    const matchesFilter =
      activeFilter === "All" || product.category === activeFilter;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="w-full py-12 bg-[#020c02] min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Toolbar */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-[#163316]">
          <div className="relative w-full xl:w-72">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#070b07] border border-[#163316] rounded-full py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2 w-full xl:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-green-600 text-white shadow-[0_0_10px_rgba(34,197,94,0.4)] border border-green-500"
                    : "bg-[#070b07] text-zinc-400 border border-[#163316] hover:border-green-500/30 hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="w-full xl:w-auto text-center xl:text-right text-sm text-zinc-500">
            <span className="font-semibold text-green-500">
              {filteredProducts.length}
            </span>{" "}
            products
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={(p) => {
                  setSelectedProduct(p);
                  setIsDetailsOpen(true);
                }}
                onOpenInquiry={(p) => {
                  setSelectedProduct(p);
                  setIsInquiryOpen(true);
                }}
              />
            ))}
          </AnimatePresence>
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-20 text-center text-zinc-500">
              No products found matching your criteria.
            </div>
          )}
        </motion.div>
      </div>

      {/* IMPORTED MODALS */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        onOpenInquiry={() => {
          setIsDetailsOpen(false);
          setIsInquiryOpen(true);
        }}
      />

      <InquiryModal
        product={selectedProduct}
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </section>
  );
}
