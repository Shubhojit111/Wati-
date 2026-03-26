import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import TrustedBy from "./components/TrustedBy";
import CoreFeatures from "./components/CoreFeatures";
import AIAgents from "./components/AIAgents";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SolutionsSection from "./components/SolutionsSection";
import StateSection from "./components/StateSection";
import TestimonialSection from "./components/TestimonialSection";
import PricingSection from "./components/Pricing";
import Integrations from "./components/Integrations";
import ReviewSection from "./components/ReviewSection";

const App = () => {
  return (
    <div className="min-h-screen px-34 font-['Inter',sans-serif] text-black bg-white">
      <Navbar />
      {/* <Hero /> */}
      {/* <Features /> */}
      {/* <TrustedBy /> */}
      {/* <CoreFeatures /> */}
      <AIAgents />
      <SolutionsSection />
      <StateSection />
      <TestimonialSection />
      <PricingSection />
      <Integrations />
      <ReviewSection />
    </div>
  );
};

export default App;
