import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import WhatsInside from "../components/home/WhatsInside";
import IndustriesWePower from "../components/home/IndustriesWePower";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";
import Certifications from "../components/home/Certifications";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-hidden bg-background">
      <HeroSection />
      <WhyChooseUs />
      <WhatsInside />
      <IndustriesWePower />
      <FeaturedProducts />
      <Testimonials />
      <Certifications/>
      <CallToAction />
    </main>
  );
}
