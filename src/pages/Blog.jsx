import React from "react";
import { motion } from "framer-motion";
import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";

export default function Blog() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen bg-[#020c02] flex flex-col w-full overflow-hidden"
    >
      <BlogHero />
      <BlogGrid />
    </motion.main>
  );
}
