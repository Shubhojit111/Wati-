import React from "react";
import TrustedBy from "./pages/TrustedBy";
import CoreFeatures from "./pages/CoreFeatures";
import AIAgents from "./pages/AIAgents";

import Hero from "./pages/Hero";
import Features from "./pages/Features";
import SolutionsSection from "./pages/SolutionsSection";
import StateSection from "./pages/StateSection";
import TestimonialSection from "./pages/TestimonialSection";
import PricingSection from "./pages/Pricing";
import Integrations from "./pages/Integrations";
import ReviewSection from "./pages/ReviewSection";

import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="min-h-screen px-34 font-['Inter',sans-serif] text-black bg-white">
      <Navbar />
      <Hero />
      <Features />
      <TrustedBy />
      <CoreFeatures />
      <AIAgents />
      <SolutionsSection />
      <Integrations />
      <StateSection />
      <TestimonialSection />
      <PricingSection />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default App;
