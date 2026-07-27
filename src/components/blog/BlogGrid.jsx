import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Clock, Calendar } from "lucide-react";

const categories = [
  "All",
  "Battery Technology",
  "Battery Maintenance",
  "EV Solutions",
  "Solar Energy",
  "Industry News",
];

const blogData = [
  {
    id: 1,
    title: "LiFePO4 vs NMC: Which Lithium Battery Chemistry is Right for You?",
    excerpt:
      "Understand the key differences between LiFePO4 and NMC chemistries — safety, energy density, cycle life, and ideal applications for each.",
    category: "Battery Technology",
    date: "September 18, 2024",
    readTime: "8 min read",
    author: "Reediyon Technical Team",
    image: "/placeholder-1.jpg", // Replace with actual image path
    tags: ["LiFePO4", "NMC", "Battery Chemistry", "Tech Guide"],
    isFeatured: true,
  },
  {
    id: 2,
    title: "How to Maximize Your EV Battery Range: 10 Proven Tips",
    excerpt:
      "From charging habits to temperature management — practical strategies to extend battery range and lifespan for electric two and three-wheelers.",
    category: "EV Solutions",
    date: "September 12, 2024",
    readTime: "5 min read",
    image: "/placeholder-2.jpg",
    tags: ["EV", "Range Optimization"],
    isFeatured: false,
  },
  {
    id: 3,
    title: "How to Size a Solar Battery Bank for Your Home or Business",
    excerpt:
      "A step-by-step guide to calculating the exact battery capacity for your solar installation — with real-world examples and a sizing formula.",
    category: "Solar Energy",
    date: "September 10, 2024",
    readTime: "7 min read",
    image: "/placeholder-3.jpg",
    tags: ["Solar", "Battery Sizing"],
    isFeatured: false,
  },
  {
    id: 4,
    title: "Battery Management System (BMS) Explained: Why It's Critical",
    excerpt:
      "What is a BMS, how does it protect your battery, and what should you look for when buying a lithium battery pack? Everything you need to know.",
    category: "Battery Technology",
    date: "September 5, 2024",
    readTime: "6 min read",
    image: "/placeholder-4.jpg",
    tags: ["BMS", "System Safety"],
    isFeatured: false,
  },
];

export default function BlogGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogData.filter((post) => {
    const matchesFilter =
      activeFilter === "All" || post.category === activeFilter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredPost = filteredPosts.find((post) => post.isFeatured);
  const regularPosts = filteredPosts.filter(
    (post) => !post.isFeatured || featuredPost?.id !== post.id,
  );

  return (
    <section className="w-full py-12 bg-[#020c02] min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Toolbar: Search & Filters */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6 mb-12 p-4 bg-[#070b07] border border-[#163316] rounded-2xl">
          <div className="relative w-full xl:w-80">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0f0a] border border-[#163316] rounded-full py-2.5 pl-11 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 w-full xl:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-green-600 text-white shadow-[0_0_10px_rgba(34,197,94,0.4)] border border-green-500"
                    : "bg-transparent text-zinc-400 border border-transparent hover:border-[#163316] hover:bg-[#0a0f0a] hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <AnimatePresence mode="wait">
          {featuredPost && activeFilter === "All" && searchQuery === "" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#070b07] border border-[#163316] rounded-3xl overflow-hidden mb-12 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-500"
            >
              <div className="relative h-64 lg:h-full overflow-hidden bg-zinc-900">
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="px-3 py-1 bg-green-500 text-black text-[10px] font-bold uppercase rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-black/60 backdrop-blur text-green-400 border border-green-500/30 text-[10px] font-bold uppercase rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                {/* Mock Image Placeholder */}
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600 group-hover:scale-105 transition-transform duration-700">
                  Featured Image
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-zinc-400 mb-8 line-clamp-3 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#0a0f0a] border border-[#163316] text-zinc-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="self-start px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-bold rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all flex items-center gap-2">
                  Read Article <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Regular Posts Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {regularPosts.map((post) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={post.id}
                className="group flex flex-col bg-[#070b07] border border-[#163316] rounded-2xl overflow-hidden hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-zinc-900">
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/60 backdrop-blur text-green-400 border border-green-500/30 text-[10px] font-bold uppercase rounded-full">
                    {post.category}
                  </div>
                  {/* Mock Image Placeholder */}
                  <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600 group-hover:scale-105 transition-transform duration-700">
                    Image {post.id}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-green-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[#0a0f0a] border border-[#163316] text-zinc-400 text-[10px] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-green-500 text-sm font-bold flex items-center gap-1 hover:text-green-400 transition-colors">
                      Read{" "}
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="w-full py-20 text-center text-zinc-500">
            No articles found matching your criteria.
          </div>
        )}

        {/* Newsletter CTA Block */}
        <div className="mt-20 p-10 bg-[#070b07] border border-[#163316] rounded-3xl text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">
            Stay Updated with Battery Insights
          </h3>
          <p className="text-zinc-400 mb-6 text-sm">
            Get the latest articles, guides, and industry news delivered to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[#0a0f0a] border border-[#163316] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-green-500 transition-colors"
            />
            <button className="px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-bold rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
