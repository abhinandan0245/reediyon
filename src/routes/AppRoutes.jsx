import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "../components/layout/Loader";
import MainLayout from "../components/layout/MainLayout";
import Terms from "../pages/Terms";
import ReturnsPolicy from "../pages/ReturnsPolicy";
import WarrantyPolicy from "../pages/WarrantyPolicy";
import FAQ from "../pages/FAQ";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Blog = lazy(() => import("../pages/Blog"));
const Testimonials = lazy(() => import("../pages/Testimonials"));
const Contact = lazy(() => import("../pages/Contact"));
const Privacy = lazy(() => import("../pages/Privacy"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/products" element={<Products />} />

          <Route path="/products/:slug" element={<ProductDetails />} />

          <Route path="/blog" element={<Blog />} />

          <Route path="/testimonials" element={<Testimonials />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/return-policy" element={<ReturnsPolicy />} />
          <Route path="/warranty-policy" element={<WarrantyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
