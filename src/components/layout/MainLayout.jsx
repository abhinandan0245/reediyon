import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "../common/WhatsAppButton";
import ScrollToTop from "../common/ScrollToTop";

export default function MainLayout() {
  const { pathname } = useLocation();

  // Reset scroll position to top instantly on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    // Removed `overflow-hidden` - CSS `sticky` will not work if any parent has overflow: hidden
    <div className="relative min-h-screen bg-[#020c02] text-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      {/* Global Floating Actions */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
