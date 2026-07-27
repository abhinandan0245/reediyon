import { motion } from "framer-motion";

const facilityImages = [
  {
    src: "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?q=80&w=900&auto=format&fit=crop",
    alt: "Battery pack assembly line",
    span: "lg:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=900&auto=format&fit=crop",
    alt: "Quality inspection team",
    span: "lg:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=700&auto=format&fit=crop",
    alt: "Cleanroom battery handling",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=700&auto=format&fit=crop",
    alt: "PCB and BMS assembly",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?q=80&w=700&auto=format&fit=crop",
    alt: "Precision cell testing",
    span: "",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function OurFacility() {
  return (
    <section className="relative w-full py-24 bg-primary-light/10">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-subtitle">Our Facility</span>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {facilityImages.map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl h-64 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
