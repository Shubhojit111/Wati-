import WatiButton from './WatiButton';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import React, { useRef } from 'react';
import Assets from '../assets/Assets';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MarketingGraphic({ data }) {
  const { badgeText, title, features, stats, buttonText, type } = data;
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);

  useGSAP(
    () => {
      const images = gsap.utils.toArray('.graphic-image');
      images.forEach((img, i) => {
        gsap.fromTo(
          img,
          {
            x: i % 2 === 0 ? -100 : 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            onComplete: () => {
              gsap.to(img, {
                y: 5,
                duration: 1.8,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
              });
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="bg-linear-to-b from-[#f1faff] via-[#f1faff] to-[#ffffff] rounded-[40px]  p-12 flex flex-col lg:flex-row gap-12 w-full max-w-[1240px] mx-auto overflow-hidden">

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
              <CheckCircle2 className="text-[#3DB9F5] w-6 h-6 mt-1 shrink-0" />
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
                <span className="text-[65px]  text-[#3DB9F5] leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-[14px] font-semibold tracking-wider text-black">
                  {stat.label.toUpperCase()}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div className="w-[2px] h-[80px] bg-[#3DB9F5]/30" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Button */}
        <div>
          <WatiButton text={buttonText} bgColor="#5CC8F7" />
        </div>
      </div>

      {/* RIGHT SIDE: Custom Graphic (Demo based on type) */}
      <div className="flex-1 relative flex items-center min-h-[500px]">
        <div className="relative w-full flex flex-col items-center justify-start gap-10">

      {/* Top Pills */}
      <div className="flex items-center gap-2">
        {['AD', 'CHAT', 'CHAT', 'CONVERT'].map((lbl, i) => (
          <React.Fragment key={i}>
            <div className="bg-[#28b6f3] text-white text-[12px] font-bold px-4 py-1.5 rounded-full tracking-wide">
              {lbl}
            </div>
            {i < 3 && <ArrowRight className="w-4 h-4 text-[#28b6f3]" />}
          </React.Fragment>
        ))}
      </div>

      {/* Main Ad Card Container */}
      <div className="">
        <img src={Assets.WatiForMarketing} alt="" className='w-[350px] h-[350px] object-cover' />
      </div>

      {/* Ripple Circles Graphic */}
      <div ref={imageContainerRef} className="w-full h-fit flex items-center justify-center">
        <div className="relative w-[300px] h-[300px] flex items-center justify-center">

          {/* Outer Ring */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#cfedfc]"></div>

          {/* Second Ring */}
          <div className="absolute w-[250px] h-[250px] rounded-full bg-[#a3daf6]"></div>

          {/* Third Ring */}
          <div className="absolute w-[200px] h-[200px] rounded-full bg-[#7acff9]"></div>

          {/* Center */}
          <div className="absolute w-[150px] h-[150px] rounded-full bg-[#46b8f6]"></div>


          <div className="absolute top-16 -left-10 w-[400px]">
            <img src="https://www.wati.io/wp-content/uploads/2025/08/wati-for-marketing-animate-text1.webp" alt="" className="graphic-image opacity-0" />
          </div>

          <div className="absolute top-34 left-0 w-[400px]">
            <img src="https://www.wati.io/wp-content/uploads/2025/08/wati-for-marketing-animate-text2.webp" alt="" className="graphic-image opacity-0" />
          </div>

        </div>
      </div>

    </div>
      </div>
    </div>
  );
}
