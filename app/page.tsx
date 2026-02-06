"use client";
import { useEffect, useState } from "react";
import Hero from "./components/ui/hero";
import ProblemSection from "./components/ui/problemSection";
import Features from "./components/ui/features";
import Setup from "./components/ui/setUp";
import Testimonial from "./components/ui/testimonial";
import FAQ from "./components/ui/faq";
import CTA from "./components/ui/cta";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";
import Preloader from "./components/preloader";


export default function Home() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     const timer = setTimeout(() => setLoading(false), 2000); // 2s preloader
     return () => clearTimeout(timer);
   }, []);
  return (
    <>
      {loading && <Preloader />}
      <Navbar />
      <Hero />
      <ProblemSection />
      <Features />
      <Setup />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
