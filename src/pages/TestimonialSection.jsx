import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "../components/TestimonialCard";
import Assets from "../assets/Assets";

const testimonialData = [
  {
    logo: "https://www.wati.io/wp-content/uploads/2025/09/client-logo-5-en.png",
    title: "90% of Habuild's new users come from workflows",
    quote:
      "Wati gave us the personalised connection we were missing, enabling us to foster a more engaged and trusting community. The platform’s flexibility, automations, and customisation helped us enhance user engagement, stay connected with our customers, and build trust. The switch to Wati resulted in noticeable revenue growth.",
    avatar: Assets.TestimonialPerson1,
    name: "Anshul Agrawal",
    role: "Co-founder",
    bgImage:
      Assets.TestimonialBg1,
  },
  {
    logo: "https://www.wati.io/wp-content/uploads/2025/09/client-logo-4-en.png",
    title: "Automated 100% student lifecycle",
    quote:
      "Transitioning to Wati was a seamless experience, thanks to the excellent customer support. Wati's automations & chatbots have made us extremely dependable on them to streamline so many different processes throughout our students' learning journey. What began with one account has now expanded to six accounts to meet different team requirements.",
    avatar: Assets.TestimonialPerson2,
    name: "Ashwani Agarwal",
    role: "Chief of Staff",
    bgImage: Assets.TestimonialBg2,
  },
  {
    logo: "https://www.wati.io/wp-content/uploads/2025/09/client-logo-2-en.png",
    title: "Increased booking conversions by 15%",
    quote:
      "We’ve transformed how we reach and retain customers. Wati helped us build a WhatsApp-first experience that’s fast, scalable, and incredibly convenient for our users.",
    avatar: Assets.TestimonialPerson3,
    name: "Ritesh Agarwal",
    role: "Founder & CEO",
    bgImage: Assets.TestimonialBg3,
  },

];

export default function TestimonialSection() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth < 1024 ? 750 : 1000;
      const gap = window.innerWidth < 1024 ? 24 : 32;
      const scrollAmount = cardWidth + gap;

      scrollContainerRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <h2 className="text-[40px] md:text-[55px] text-center leading-[1.15] font-bold text-[#0f0523] mb-12 md:mb-16 tracking-tight">
          High-growth teams rely on Wati to build lasting customer relationships
        </h2>

        <div className="relative group/section">
          {/* Slider Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-pointer pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonialData.map((data, index) => (
              <TestimonialCard key={index} {...data} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 md:mt-12 justify-center md:justify-start">
            <button
              onClick={() => scroll("prev")}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0f0523] hover:text-white transition-all duration-300 shadow-sm bg-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={() => scroll("next")}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0f0523] hover:text-white transition-all duration-300 shadow-sm bg-white"
              aria-label="Next slide"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
