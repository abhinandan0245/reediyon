import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    tag: "EV Manufacturer",
    text: "REEDIYON has been our trusted battery supplier for over 2 years. Their lithium packs are reliable, well-tested, and come with excellent after-sales support. We've never faced a quality issue and the bulk pricing is very competitive. Highly recommended for EV manufacturers.",
    author: "Rajesh Sharma",
    role: "Director, GreenWheels EV",
    location: "Delhi",
    avatar: "/avatars/rajesh.jpg",
  },
  {
    id: 2,
    tag: "Solar Installer",
    text: "We switched to REEDIYON's solar batteries for all our residential installations last year and the performance has been outstanding. Their technical team helped us choose the right capacity for each project and delivery was always on time, even for large orders.",
    author: "Priya Mehta",
    role: "Operations Manager, SolarTech Solutions",
    location: "Mumbai",
    avatar: "/avatars/priya.jpg",
  },
  {
    id: 3,
    tag: "Industrial B2B",
    text: "The OEM manufacturing quality is top-notch. REEDIYON delivered 500 custom battery packs with perfect spec compliance — on schedule and within budget. The BMS programming was exactly as we specified. A professional, trustworthy partner.",
    author: "Anil Gupta",
    role: "Purchase Head, PowerGrid Industries",
    location: "Pune",
    avatar: "/avatars/anil.jpg",
  },
  {
    id: 4,
    tag: "EV Fleet",
    text: "We run a fleet of 80 electric cabs in Jaipur and every single one runs on REEDIYON batteries. The range consistency across the fleet is impressive. They gave us a great fleet pricing deal and the warranty support has been hassle-free.",
    author: "Sunil Verma",
    role: "Founder, EcoCabs",
    location: "Jaipur",
    avatar: "/avatars/sunil.jpg",
  },
  {
    id: 5,
    tag: "Solar Developer",
    text: "Outstanding product quality and service. I was initially skeptical about switching from a national brand to REEDIYON, but after one project I was convinced. The batteries have performed flawlessly and the local Jaipur presence means fast support.",
    author: "Kavita Singh",
    role: "CEO, BrightHome Solar",
    location: "Ahmedabad",
    avatar: "/avatars/kavita.jpg",
  },
  {
    id: 6,
    tag: "Robotics / Custom",
    text: "We needed a very specific custom battery pack for our AGV robots — unusual voltage, tight dimensions, and a precise BMS. REEDIYON's engineering team handled it perfectly. Delivery was on schedule and all 30 units passed our QA tests first time.",
    author: "Manoj Patel",
    role: "Technical Director, Precision Robotics",
    location: "Surat",
    avatar: "/avatars/manoj.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

export default function TestimonialsGrid() {
  return (
    <section className="w-full py-20 bg-[#020c02]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="group flex flex-col p-8 rounded-3xl bg-[#070b07] border border-[#163316] hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Tag & Stars */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-white text-[#020c02] text-[10px] font-bold uppercase tracking-wider rounded-full mb-4">
                  {testimonial.tag}
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-green-500 text-green-500"
                    />
                  ))}
                </div>
              </div>

              {/* Quote Icon & Text */}
              <Quote
                size={40}
                className="text-[#163316] absolute top-20 right-8 -z-10 group-hover:text-green-900/40 transition-colors"
              />
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-zinc-800 overflow-hidden border border-[#163316]">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://ui-avatars.com/api/?name=" +
                        testimonial.author +
                        "&background=0D8ABC&color=fff";
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">
                    {testimonial.author}
                  </h4>
                  <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                  <p className="text-green-500 text-xs font-semibold">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
