import React from "react";
import Assets from "../assets/Assets";


export default function ReviewSection() {
  const g2Badges = [
    Assets.ReviewLogo1,
    Assets.ReviewLogo2,
    Assets.ReviewLogo3,
    Assets.ReviewLogo4,
  ];

  const reviews = [
    Assets.RatingLogo1,
    Assets.RatingLogo2,
    Assets.RatingLogo3,
    Assets.RatingLogo4,
    Assets.RatingLogo5,
  ];

  return (
    <section className="mb-10 rounded-4xl px-4 md:px-6 bg-linear-to-b from-[#ffffff] via-[#FFF6DA] to-[#FFF6DA]">
      <div className="max-w-[1440px] mx-auto rounded-[48px] p-12 md:p-20 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-[36px] md:text-[52px] font-bold text-[#0f0523] text-center mb-16 tracking-tight">
          Loved by Customers, Backed by Experts
        </h2>

        {/* G2 Badges Row */}
        <div className="flex flex-wrap justify-center mb-12">
          {g2Badges.map((badge, idx) => (
            <img src={badge} alt="" key={idx} className="h-44"/>
          ))}
        </div>

        {/* Review Cards Grid */}
        <div className="flex flex-row w-full items-center justify-center">
          {reviews.map((review, idx) => (
            <img src={review} alt="" key={idx} className="h-56"/>
          ))}
        </div>
      </div>
    </section>
  );
}
