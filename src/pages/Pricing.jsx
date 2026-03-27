import React, { useState, useRef } from "react";
import { Info } from "lucide-react";
import WatiButton from "../components/WatiButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const pricingData = [
  {
    title: "Growth",
    description:
      "Send WhatsApp messages to thousands of users in one click to improve reach",
    price: "2199",
    users: {
      include: "3 Users included",
      extra: "No additional users",
    },
    themeColor: "blue",
    features: [
      {
        text: "Zero-fee WhatsApp setup: Get Official WhatsApp API, Blue Tick Verification help",
      },
      {
        text: "Omnichannel inbox: WhatsApp Messages, WhatsApp Business Calling, FB, Instagram, QR code, widget, wa.me",
      },
      {
        text: "Standard promotions: Run multi-media campaigns, view open & read rates",
      },
      { text: "Acquire leads: Launch CTWA ads and capture leads on WhatsApp" },
      {
        text: "Team inbox staples: Assign, track, automate, follow ups, tag & report",
      },
      {
        text: "E-Commerce tools: WhatsApp Catalog, Shopify abandon cart & order templates",
      },
      {
        text: "24x5 Email Support: in English and Portuguese, with basic SLA coverage",
      },
    ],
    usage: [
      { text: "15k Broadcasts/month, Standard rates", info: true },
      { text: "1,000 Free Automation triggers/month" },
      { text: "2 select Commerce/CRM integrations" },
      { text: "10k API calls/mon, No Webhooks" },
      { text: "250 Free AI Co-pilot credits/mon" },
    ],
  },
  {
    title: "Pro",
    description:
      "Set up automations, integrations and get powerful analytics to boost conversion",
    price: "4899",
    highlight: true,
    badgeText: "Best Value",
    users: {
      include: "5 Users Included",
      extra: "Additional Users @ ₹1299/user/month",
    },
    themeColor: "green",
    features: [
      {
        text: "Auto-qualify leads: Advanced chatbots, forms, integrations & IG automation",
      },
      {
        text: "Boost conversion: Smart retargeting, Carousel template & Catalog pay options",
      },
      {
        text: "Optimize Campaigns: CTWA source tags, click tracking & engagement insights",
      },
      {
        text: "AI Automation: Answer queries, collect information, send reminders & more",
        highlight: true,
        highlightColor: "bg-[#dcfce7]",
      },
      {
        text: "Advanced team inbox: Teams, auto routing, and operator reports",
      },
      {
        text: "Drive Shopify sales: Campaign based on buyer data, Shopify/Gokwik checkout",
      },
      {
        text: "24x7 Email & Chat Support: Standard SLAs to support your operations",
      },
    ],
    usage: [
      { text: "Unlimited Broadcasts, Standard rates", info: true },
      { text: "2,000 Free Automation triggers/month" },
      { text: "5 integrations incl. HubSpot" },
      { text: "200k API calls/mon, Limited Webhooks" },
      { text: "500 Free AI Co-pilot credits/mon" },
    ],
  },
  {
    title: "Business",
    description:
      "Unlock the full potential of WhatsApp with advanced workflows and expert support",
    price: "14799",
    users: {
      include: "5 Users Included",
      extra: "Additional Users @ ₹2199/user/month",
    },
    themeColor: "purple",
    features: [
      {
        text: "Scale effortlessly: Send 4k messages/min, get volume discounts & SMS fallback",
        badge: "Beta",
      },
      {
        text: "G Official Google Partner: Asia's only Google Ads to WhatsApp Provider",
        highlight: true,
        highlightColor: "bg-[#f3e8ff]",
      },
      {
        text: "Best-in-class ROI: Optimize CTWA ads, track conversion, use WhatsApp Pay API",
      },
      {
        text: "Run teams smoothly: Multiple WhatsApp numbers & round-robin chat assignment",
      },
      {
        text: "Dedicated Customer Success Manager for strategic recommendations",
      },
      {
        text: "Enhance privacy & compliance: Phone number masking, Roles & IP Whitelisting",
      },
      {
        text: "Priority 24x7 Email & Chat support, with access to paid TAM services",
      },
    ],
    usage: [
      { text: "Unlimited Broadcasts, Volume discounts", info: true },
      { text: "5,000 Free Automation triggers/month" },
      { text: "Unlimited integrations incl. Salesforce" },
      { text: "20M API calls/mon, Extensive Webhooks" },
      { text: "1500 Free AI Co-pilot credits/mon" },
      { text: "Blitz add-on: Send 12k messages/min" },
    ],
  },
];

const PricingCard = ({ plan, billing }) => {
  const {
    title,
    description,
    price,
    users,
    themeColor,
    highlight,
    badgeText,
    features,
    usage,
  } = plan;

  const cardBorderColor =
    themeColor === "blue"
      ? "border-[#3ba2f3]"
      : themeColor === "green"
        ? "border-[#00e676]"
        : "border-[#f06292]";
  const customBgColor =
    themeColor === "blue"
      ? "#3ba2f3"
      : themeColor === "green"
        ? "#00e676"
        : "#f06292";
  const cardBgColor =
    themeColor === "blue"
      ? "bg-[#f0f9ff]"
      : themeColor === "green"
        ? "bg-[#f0fff4]"
        : "bg-[#fff5f8]";

  return (
    <div
      className={`pricing-card opacity-0 relative flex flex-col w-full rounded-[24px] border-2 bg-white p-6 md:p-8 transition-all duration-300 hover:shadow-xl ${cardBorderColor} ${cardBgColor}`}
    >
      {highlight && (
        <div className="absolute top-0 right-0 bg-[#f8ff00] text-[#0f0523] text-[12px] font-bold px-4 py-1.5 rounded-bl-[16px] rounded-tr-[22px] border-l border-b border-[#00e676] z-10">
          {badgeText}
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-[24px] md:text-[28px] font-bold text-[#0f0523] mb-2">
          {title}
        </h3>
        <p className="text-[#4a4a4a] text-[14px] md:text-[15px] leading-snug mb-6 min-h-[40px]">
          {description}
        </p>

        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-[32px] md:text-[40px] font-bold text-[#0f0523]">
            ₹{price}
          </span>
          <div className="flex flex-col">
            <span className="text-[#f06292] font-bold text-[14px] leading-none">
              /month
            </span>
            <span className="text-[#999] text-[11px]">billed annually</span>
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <div className="text-[14px] text-[#0f0523] font-bold">
            {users.include}
          </div>
          <div className="text-[13px] text-[#666]">{users.extra}</div>
          <div className="flex items-center gap-1.5 text-[13px] text-[#0f0523] font-medium pt-1">
            Additional charges apply for messages{" "}
            <Info className="w-3.5 h-3.5 text-[#999]" />
          </div>
        </div>
      </div>

      {/* Top Button */}
      <div className="mb-10">
        <WatiButton
          text="Select Plan"
          bgColor={customBgColor}
          className="w-full"
        />
      </div>

      {/* Features List */}
      <div className="flex-1">
        <h4 className="text-[16px] font-bold text-[#0f0523] mb-5">
          {title === "Growth"
            ? "Key features"
            : `Everything in ${title === "Pro" ? "Growth" : "Pro"}, plus:`}
        </h4>
        <ul className="space-y-4 mb-8">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className={`flex items-start gap-3 text-[14px] text-[#0f0523] leading-snug ${feature.highlight ? `p-2 rounded-lg ${feature.highlightColor} border border-dashed border-gray-300` : ""}`}
            >
              <div className="mt-1 shrink-0 text-[#0f0523] text-[18px] leading-none">
                •
              </div>
              <span>
                {feature.text}
                {feature.badge && (
                  <span className="ml-1.5 px-1.5 py-0.5 bg-[#f3e8ff] text-[#9333ea] text-[10px] font-bold rounded uppercase">
                    {feature.badge}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>

        {/* Usage Section */}
        <div className="pt-8 border-t border-gray-200 mb-8">
          <h4 className="text-[14px] font-bold text-[#0f0523] mb-4 uppercase tracking-wider">
            Usage
          </h4>
          <ul className="space-y-3">
            {usage.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[14px] text-[#4a4a4a]"
              >
                <div className="mt-1 shrink-0">•</div>
                <span className="flex items-center gap-1.5">
                  {item.text}
                  {item.info && (
                    <Info className="w-3.5 h-3.5 text-[#ccc] cursor-pointer" />
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Button */}
      <WatiButton
        text="Select Plan"
        bgColor={customBgColor}
        className="w-full"
      />
    </div>
  );
};

export default function PricingSection() {
  const [billing, setBilling] = useState("annual");
  const sectionRef = useRef(null);
  const toggleRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.pricing-card', 
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.15, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%"
        }
      }
    );
  }, { scope: sectionRef });

  useGSAP(() => {
    gsap.to(toggleRef.current, {
      x: billing === "annual" ? 0 : 105,
      duration: 0.4,
      ease: "power2.out"
    });
  }, { dependencies: [billing] });

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4 md:px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-20 hidden md:block">
            {/* Simple spark/wave elements similar to image */}
            <svg width="100" height="40" viewBox="0 0 100 40">
              <path
                d="M10 30 Q 30 10 50 30 T 90 30"
                fill="none"
                stroke="#00e676"
                strokeWidth="4"
              />
            </svg>
          </div>

          <h2 className="text-[32px] md:text-[44px] font-bold text-[#0f0523] leading-tight mb-3">
            Get great features at a price that makes sense
          </h2>
          <p className="text-[20px] md:text-[28px] text-[#4a4a4a] mb-8 font-medium">
            Affordable pricing with zero setup fees
          </p>

          <div className="flex flex-col items-center gap-4">
            <p className="text-[13px] md:text-[14px] text-[#4a4a4a] font-medium">
              Up to ~25% off &{" "}
              <span className="underline decoration-2 underline-offset-4 decoration-[#00e676]">
                free dedicated onboarding
              </span>{" "}
              with annual subscription
            </p>

            {/* Toggle */}
            <div className="bg-[#dcfce7] rounded-full p-1.5 flex items-center relative w-[220px]">
              <div
                ref={toggleRef}
                className="absolute bg-[#00e676] rounded-full h-[calc(100%-12px)] top-[6px] w-[105px]"
              />
              <button
                onClick={() => setBilling("annual")}
                className={`relative z-10 flex-1 py-1.5 text-[14px] font-bold transition-colors ${billing === "annual" ? "text-white" : "text-[#4a4a4a]"}`}
              >
                Annual
              </button>
              <button
                onClick={() => setBilling("monthly")}
                className={`relative z-10 flex-1 py-1.5 text-[14px] font-bold transition-colors ${billing === "monthly" ? "text-white" : "text-[#4a4a4a]"}`}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-6">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} plan={plan} billing={billing} />
          ))}
        </div>
      </div>
    </section>
  );
}
