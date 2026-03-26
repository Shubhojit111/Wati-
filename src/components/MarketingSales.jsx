import WatiButton from './WatiButton';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import React from 'react';
import { BadgePercent, CalendarDays, BookOpen, Star, Calendar } from 'lucide-react';

export default function MarketingSales({ data }) {
  const { badgeText, title, features, stats, buttonText } = data;

  return (
    <div className="bg-[#FCF5FF] rounded-[40px] p-12 flex flex-col lg:flex-row gap-12 w-full max-w-[1240px] mx-auto overflow-hidden">

      {/* LEFT SIDE: Custom Graphic (Demo based on type) */}
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


            <div className="flex flex-col gap-3 mt-4 w-full items-center">

            {/* Upper Three (Animated) */}
            <div className="flex flex-wrap items-center justify-center gap-2">

              <div className="flex items-center gap-2 border-[1.5px] border-[#F0A8F8] bg-white rounded-full px-4 py-1.5 shadow-sm">
                <span className="text-[14px] font-medium text-black">See Offer</span>
                <div className="flex items-center justify-center bg-black text-white w-5 h-5 rounded-[4px]">
                  <BadgePercent className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
              </div>


              <div className="flex items-center gap-2 border-[1.5px] border-[#F0A8F8] bg-white rounded-full px-4 py-1.5 shadow-sm">
                <span className="text-[14px] font-medium text-black">Follow-up scheduled</span>
                <div className="flex items-center justify-center bg-black text-white w-5 h-5 rounded-[4px]">
                  <CalendarDays className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
              </div>


              <div className="flex items-center gap-2 border-[1.5px] border-[#F0A8F8] bg-white rounded-full px-4 py-1.5 shadow-sm">
                <span className="text-[14px] font-medium text-black">View Catalog</span>
                <div className="flex items-center justify-center bg-black text-white w-5 h-5 rounded-[4px]">
                  <BookOpen className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
              </div>




              <div className="flex items-center gap-2 border-[1.5px] border-[#F0A8F8] bg-white rounded-full px-4 py-1.5 shadow-sm">
                <span className="text-[14px] font-medium text-black">Rate Us</span>
                <div className="flex items-center justify-center bg-black text-white w-5 h-5 rounded-[4px]">
                  <Star fill="white" className="w-3.5 h-3.5" strokeWidth={1.5} />
                </div>
              </div>

              <div className="flex items-center gap-2 border-[1.5px] border-[#F0A8F8] bg-white rounded-full px-4 py-1.5 shadow-sm">
                <span className="text-[14px] font-medium text-black">Book Appointment</span>
                <div className="flex items-center justify-center bg-black text-white w-5 h-5 rounded-[4px]">
                  <Calendar className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
              </div>
            </div>

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

          {/* Bottom Pills Section */}
          

        </div>
      </div>

      {/* RIGHT SIDE: Text Content */}
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
              <CheckCircle2 className="text-[#ECA0FE] w-6 h-6 mt-1 shrink-0" />
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
                <span className="text-[65px] text-[#ECA0FE] leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-[14px] font-semibold tracking-wider text-black">
                  {stat.label.toUpperCase()}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="w-[2px] h-[80px] bg-[#ECA0FE]/30" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Button */}
        <div>
          <WatiButton text={buttonText} bgColor="#ECA0FE" />
        </div>
      </div>
    </div>
  );
}
