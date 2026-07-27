import React from "react";
import { motion } from "framer-motion";
import ProductsHero from "../components/products/ProductsHero";
import ProductsMatrix from "../components/products/ProductsMatrix";
import ProductsCTA from "../components/products/ProductsCTA";

export default function Products() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-[#020c02] flex flex-col w-full overflow-hidden"
    >
      <ProductsHero />
      <ProductsMatrix />
      <ProductsCTA />
    </motion.main>
  );
}
