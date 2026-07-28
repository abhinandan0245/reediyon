import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";

const products = [
  {
    id: 1,
    title: "E-Bike Lithium Battery",
    badge: "EV",
    description: "High-performance lithium pack for electric two-wheelers.",
    image:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=800&auto=format&fit=crop",
    capacity: "48V / 20Ah",
    useCase: "Electric Bicycles, Light EVs",
  },
  {
    id: 2,
    title: "Solar Storage Battery",
    badge: "SOLAR",
    description: "Deep-cycle LiFePO4 optimized for solar storage.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
    capacity: "24V / 100Ah",
    useCase: "Solar Systems, Off-grid",
  },
  {
    id: 3,
    title: "Industrial LiFePO4 Pack",
    badge: "INDUSTRIAL",
    description: "Robust iron phosphate battery for heavy-duty industrial use.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    capacity: "72V / 100Ah",
    useCase: "Forklifts, Machinery",
  },
  {
    id: 4,
    title: "Custom OEM Battery Pack",
    badge: "CUSTOM",
    description:
      "Fully customizable packs designed to your exact specifications.",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?q=80&w=800&auto=format&fit=crop",
    capacity: "As per requirement",
    useCase: "OEM, Custom Projects",
  },
  {
    id: 5,
    title: "Custom OEM Battery Pack",
    badge: "CUSTOM",
    description:
      "Fully customizable packs designed to your exact specifications.",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?q=80&w=800&auto=format&fit=crop",
    capacity: "As per requirement",
    useCase: "OEM, Custom Projects",
  },
  {
    id: 6,
    title: "Custom OEM Battery Pack",
    badge: "CUSTOM",
    description:
      "Fully customizable packs designed to your exact specifications.",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?q=80&w=800&auto=format&fit=crop",
    capacity: "As per requirement",
    useCase: "OEM, Custom Projects",
  },
];

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1280) setSlidesPerView(4);
      else if (w >= 1024) setSlidesPerView(3);
      else if (w >= 640) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return slidesPerView;
}

export default function FeaturedProducts() {
  const navigate = useNavigate();
  const slidesPerView = useSlidesPerView();
  const maxIndex = Math.max(0, products.length - slidesPerView);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [maxIndex, isHovered]);

  const goNext = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const goPrev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="relative w-full py-24 bg-surface border-y border-white/5">
      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="section-subtitle">High Performance</span>
            <h2 className="section-title mt-4">Featured Products</h2>
            <p className="text-text-muted text-lg mt-4">
              Explore our premium range of smart lithium batteries designed for
              maximum efficiency and longevity across all applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="outline"
              rightIcon={<ArrowRight size={18} />}
              onClick={() => navigate("/products")}
            >
              View All Products
            </Button>
          </motion.div>
        </div>

        {/* Custom Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${index * (100 / slidesPerView)}%` }}
              transition={{
                type: "tween",
                duration: 0.6,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  style={{
                    flex: `0 0 ${100 / slidesPerView}%`,
                    boxSizing: "border-box",
                  }}
                  className="px-3"
                >
                  <Card
                    image={product.image}
                    badge={product.badge}
                    title={product.title}
                    description={product.description}
                  >
                    <div className="mt-4 mb-4 flex flex-col gap-2 rounded-xl bg-[#0a100d] border border-white/5 p-3 text-sm shadow-inner">
                      <div className="flex items-center justify-between">
                        <span className="text-text-muted">Capacity</span>
                        <span className="font-semibold text-primary">
                          {product.capacity}
                        </span>
                      </div>
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-text-muted flex-shrink-0">
                          Use Case
                        </span>
                        <span className="font-medium text-white text-right leading-tight">
                          {product.useCase}
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      fullWidth
                      shape="rectangle"
                      size="md"
                      onClick={() => navigate("/contact")}
                      className="relative z-50 cursor-pointer"
                    >
                      Send Inquiry
                    </Button>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Prev / Next Buttons */}
          <button
            onClick={goPrev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-lg transition hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-lg transition hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
