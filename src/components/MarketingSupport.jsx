import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function MarketingSupport({ data }) {
  const { badgeText, title, features, stats, buttonText } = data;

  const TagBadge = ({ text, bgColor }) => {
    return (
      <div
        className={`
        px-5 py-2 
        rounded-lg 
        border-2 border-black 
        font-semibold 
        uppercase 
        tracking-widest 
        text-xs
        shadow-[3px_3px_0px_black]
        inline-block
      `}
        style={{ backgroundColor: bgColor }}
      >
        {text}
      </div>
    );
  };

  return (
    <div className="bg-[#FFFDF2] rounded-[40px]  p-12 flex flex-col lg:flex-row gap-12 w-full max-w-[1240px] mx-auto overflow-hidden">

      {/* LEFT SIDE: Text Content */}
      <div className="flex-1 flex flex-col justify-start items-start w-1/2 ">
        <p className="text-gray-800 text-lg tracking-wide font-medium mb-6 uppercase">
          {badgeText}
        </p>
        <h2 className="text-[40px] leading-[1.15] tracking-normal font-bold text-[#1a1a1a] mb-8">
          {title}
        </h2>

        {/* Features List */}
        <div className="flex flex-col max-w-[95%] gap-5 mb-10">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-4 items-start">
              <CheckCircle2 className="text-[#FDEB82] w-6 h-6 mt-1 shrink-0" />
              <p className="text-[#1a1a1a] font-medium leading-[1.6]">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex gap-6 items-center mb-10">
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col">
                <span className="text-[65px]  text-[#FDEB82] leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-[14px] font-semibold tracking-wider text-black">
                  {stat.label.toUpperCase()}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="w-[2px] h-[80px] bg-[#FDEB82]/30" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Button */}
        <div>
          <button className="relative px-6 py-3 font-bold text-black bg-white rounded-xl border-2 border-black group transition-all duration-200">
            {/* Shadow background */}
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#FDEB82] rounded-xl -z-10 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0" />
            <span className="relative z-10">{buttonText}</span>
          </button>
        </div>
      </div>

      {/* RIGHT SIDE: Custom Graphic (Demo based on type) */}
      <div className="flex-1 relative flex items-center min-h-[500px]">
        <div className="relative w-full flex flex-col items-center justify-start gap-10">

          {/* Top Pills */}
          <div className="flex items-center gap-2">
            {['ENGAGE', 'QUALIFY', 'ASSIGN', 'WIN'].map((lbl, i) => (
              <React.Fragment key={i}>
                <div className="bg-[#F0A8F8] text-white text-[12px] font-bold px-4 py-1.5 rounded-full tracking-wide">
                  {lbl}
                </div>
                {i < 3 && <ArrowRight className="w-4 h-4 text-[#F0A8F8]" />}
              </React.Fragment>
            ))}
          </div>


          {/* Ripple Circles Graphic */}
          <div className="w-full h-fit flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] flex items-center justify-center">

              {/* Outer Ring */}
              <div className="absolute w-[300px] h-[300px] rounded-full bg-[#f4cbfa]"></div>

              {/* Second Ring */}
              <div className="absolute w-[250px] h-[250px] rounded-full bg-[#eaaef9]"></div>

              {/* Third Ring */}
              <div className="absolute w-[200px] h-[200px] rounded-full bg-[#df8bf9]"></div>

              {/* Center */}
              <div className="absolute w-[150px] h-[150px] rounded-full bg-[#d361f9]"></div>

              <div className="absolute top-5 -left-10 w-[400px]">
                <img src="https://www.wati.io/wp-content/uploads/2025/08/wati-for-sales-animate-text1.webp" alt="" />
              </div>

              <div className="absolute top-20 left-0 w-[400px]">
                <img src="https://www.wati.io/wp-content/uploads/2025/08/wati-for-sales-animate-text2.webp" alt="" />
              </div>

              <div className="absolute top-46 left-0 w-[400px]">
                <img src="https://www.wati.io/wp-content/uploads/2025/08/wati-for-sales-animate-text2.webp" alt="" />
              </div>

            </div>
          </div>


          <div className="flex gap-6 p-6">
            <TagBadge text="Multilingual" bgColor="#6FD3FF" />
            <TagBadge text="Contextual" bgColor="#FFE66D" />
            <TagBadge text="Empathetic" bgColor="#E8A1E6" />
          </div>

        </div>
      </div>
    </div>
  );
}
