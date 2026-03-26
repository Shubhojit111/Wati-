import React from "react";
import { Star } from "lucide-react";

const G2Badge = ({ title, subTitle, accentColor }) => {
  return (
    <div className="relative w-[180px] md:w-[200px] flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1">
      {/* Header Bar */}
      <div
        className={`w-full h-8 ${accentColor} rounded-t-lg flex items-center justify-between px-3 relative overflow-hidden`}
      >
        <span className="text-[10px] font-bold text-white uppercase tracking-tighter">
          {subTitle}
        </span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/G2_Logo.svg/1024px-G2_Logo.svg.png"
          alt="G2"
          className="h-4 w-4 brightness-0 invert"
        />
      </div>

      {/* Badge Body */}
      <div className="w-full bg-white border-x border-gray-100 py-6 px-4 flex-1 flex items-center justify-center text-center shadow-lg">
        <h4 className="text-[20px] md:text-[24px] font-extrabold text-[#0f0523] leading-none mb-1">
          {title}
        </h4>
        {title.includes("Regional") && (
          <div className="text-[10px] uppercase font-bold text-gray-400 mt-2">
            Mid-Market
          </div>
        )}
      </div>

      {/* V-Shape Bottom */}
      <div className="w-full relative h-10 overflow-hidden">
        <div
          className={`absolute top-[-30px] left-0 right-0 h-20 bg-white border-x border-gray-100 rotate-45 transform origin-center scale-[1.3] shadow-lg`}
        />
        {/* Border accents */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-2 ${accentColor}`}
        />
        <div className="absolute inset-x-0 bottom-2 bg-yellow-400 h-1" />
      </div>
    </div>
  );
};

const ReviewCard = ({
  rating,
  stars,
  platform,
  platformLogo,
  reviewsCount,
}) => {
  return (
    <div className="bg-white rounded-[32px] p-8 flex flex-col items-center justify-between min-w-[200px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-50 h-full">
      <div className="text-center">
        <div className="text-[24px] font-extrabold text-[#0f0523] mb-2">
          {rating}
          <span className="text-[14px] text-gray-400 font-bold ml-0.5">/5</span>
        </div>
        <div className="flex gap-0.5 mb-6 justify-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(stars) ? "fill-[#00e676] text-[#00e676]" : i < stars ? "fill-[#00e676] opacity-50 text-[#00e676]" : "text-gray-200"}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 w-full">
        <div className="h-6 flex items-center justify-center">
          <img
            src={platformLogo}
            alt={platform}
            className="h-full object-contain"
          />
          <span className="ml-2 font-bold text-[#0f0523] text-[15px]">
            {platform}
          </span>
        </div>
        <div className="text-center mt-4">
          <div className="text-[11px] font-bold text-gray-400 uppercase leading-none">
            Out of
          </div>
          <div className="text-[12px] font-bold text-[#0f0523] mt-1">
            {reviewsCount} reviews
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ReviewSection() {
  const g2Badges = [
    { title: "Leader", subTitle: "Fall 2025", accentColor: "bg-[#ff4d60]" }, // Red-Pink
    {
      title: "Regional Leader",
      subTitle: "Fall 2025 India",
      accentColor: "bg-[#f06292]",
    }, // Pink
    {
      title: "Best Usability",
      subTitle: "Fall 2025",
      accentColor: "bg-[#ffb300]",
    }, // Orange-Yellow
    {
      title: "Best Support",
      subTitle: "Fall 2025",
      accentColor: "bg-[#2dd4bf]",
    }, // Teal
  ];

  const reviews = [
    {
      platform: "Product Hunt",
      rating: "4.8",
      stars: 5,
      platformLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Product_Hunt_Logo.svg",
      reviewsCount: "100+",
    },
    {
      platform: "Capterra",
      rating: "4.6",
      stars: 4.5,
      platformLogo:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/Capterra_logo.svg",
      reviewsCount: "170+",
    },
    {
      platform: "G2",
      rating: "4.7",
      stars: 4.5,
      platformLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/G2_Logo.svg/1024px-G2_Logo.svg.png",
      reviewsCount: "350+",
    },
    {
      platform: "Shopify",
      rating: "4.3",
      stars: 4.5,
      platformLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      reviewsCount: "125+",
    },
    {
      platform: "Trustpilot",
      rating: "4.1",
      stars: 4,
      platformLogo:
        "https://upload.wikimedia.org/wikipedia/commons/7/73/Trustpilot_logo.svg",
      reviewsCount: "150+",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-6 bg-white">
      <div className="max-w-[1440px] mx-auto bg-[#fffbeb] rounded-[48px] p-12 md:p-20 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-[36px] md:text-[52px] font-bold text-[#0f0523] text-center mb-16 tracking-tight">
          Loved by Customers, Backed by Experts
        </h2>

        {/* G2 Badges Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-24">
          {g2Badges.map((badge, idx) => (
            <G2Badge key={idx} {...badge} />
          ))}
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
