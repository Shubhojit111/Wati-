import React, { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Assets from '../assets/Assets';

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const leftIcons = [
//   { name: 'PayTabs', logo: 'https://www.paytabs.com/wp-content/uploads/2021/05/logo.png', y: 0 },
//   { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg', y: 60 },
//   { name: 'Ai Trillion', logo: 'https://www.aitrillion.com/wp-content/uploads/2019/12/logo-dark-1.png', y: 120 },
//   { name: 'Zoho', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Zoho_logo.svg', y: 180 },
//   { name: 'LeadSquared', logo: 'https://webassets.leadsquared.com/wp-content/uploads/2023/04/LeadSquared-Logo-2.png', y: 300 },
//   { name: 'Woo', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg', y: 360 },
//   { name: 'Pabbly', logo: 'https://www.pabbly.com/wp-content/uploads/2019/08/pabbly-logo.png', y: 420 },
//   { name: 'KPay', logo: 'https://kpay.com/wp-content/uploads/2022/02/KPay-Logo-Dark.png', y: 480 },
// ];

// const rightIcons = [
//   { name: 'Yotpo', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Yotpo_logo.svg/1200px-Yotpo_logo.svg.png', y: 0 },
//   { name: 'HubSpot', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg', y: 60 },
//   { name: 'Make', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Make_logo.svg', y: 120 },
//   { name: 'Zapier', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Zapier_logo.svg', y: 180 },
//   { name: 'Klaviyo', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Klaviyo_Logo.svg', y: 300 },
//   { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg', y: 360 },
//   { name: 'Twilio', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg', y: 420 },
//   { name: 'Google Ads', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg', y: 480 },
// ];

// const AnimatedLine = ({ isLeft, y }) => {
//   const startX = isLeft ? 102 : 898;
//   const endX = isLeft ? 450 : 550;
//   const centerY = 250;
  
//   const midX = isLeft ? 300 : 700;

//   const path = `M ${startX} ${y} C ${midX} ${y}, ${midX} ${centerY}, ${endX} ${centerY}`;

//   return (
//     <path
//       className="integration-line"
//       d={path}
//       fill="none"
//       stroke="url(#lineGradient)"
//       strokeWidth="4"
//       strokeLinecap="round"
//       opacity="0.8"
//     />
//   );
// };

export default function Integrations() {
  const sectionRef = useRef(null);

  // useGSAP(() => {
  //   // SVG lines
  //   gsap.fromTo('.integration-line',
  //     { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 },
  //     {
  //       strokeDashoffset: 0,
  //       opacity: 0.8,
  //       duration: 2,
  //       ease: "power1.inOut",
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 60%",
  //       }
  //     }
  //   );

  //   // Center icon
  //   gsap.fromTo('.center-icon',
  //     { scale: 0 },
  //     {
  //       scale: 1,
  //       duration: 0.8,
  //       ease: "back.out(1.5)",
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 60%",
  //       }
  //     }
  //   );

  //   // Left icons
  //   gsap.fromTo('.left-icon',
  //     { opacity: 0, x: -30 },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       duration: 0.5,
  //       stagger: 0.1,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 60%",
  //       }
  //     }
  //   );

  //   // Right icons
  //   gsap.fromTo('.right-icon',
  //     { opacity: 0, x: 30 },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       duration: 0.5,
  //       stagger: 0.1,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 60%",
  //       }
  //     }
  //   );
  // }, { scope: sectionRef });

  return (
    <section 
    // ref={sectionRef} 
    className="border-b border-[#e8bfec] bg-white overflow-hidden">
      <div className=" mx-auto px-6">
        {/* Header content fixed */}
        <div className="text-center mb-16 max-w-[700px] mx-auto">
          <h2 className="text-[44px] md:text-[52px] font-bold text-[#0f0523]  tracking-tight leading-tight mb-6">
            Connect Wati with your team's existing stack
          </h2>
          <p className="text-[#4a4a4a] text-[18px] md:text-[20px] max-w-[850px] mx-auto ">
            Connect your tools, connect your teams. With over 100 apps already available in 
            our directory, your team's favourite tools are just a click away.
          </p>
        </div>

        {/* Animation Container - Unified Coordinate System */}
        {/* <div className="relative h-[600px] w-full max-w-[1000px] mx-auto mt-20">
          0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            {leftIcons.map((icon, idx) => (
              <AnimatedLine key={`left-line-${idx}`} isLeft={true} y={icon.y} />
            ))}
            {rightIcons.map((icon, idx) => (
              <AnimatedLine key={`right-line-${idx}`} isLeft={false} y={icon.y} />
            ))}
          </svg>

        
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div 
              className="relative w-36 h-28 center-icon"
            >
               <svg viewBox="0 0 120 100" className="w-full h-full drop-shadow-2xl">
                  <path 
                    d="M10 5 H110 Q115 5 115 10 V70 Q115 75 110 75 H50 L35 90 V75 H10 Q5 75 5 70 V10 Q5 5 10 5 Z" 
                    fill="#00e676" 
                    stroke="#0f0523" 
                    strokeWidth="5"
                  />
                  <path d="M25 25 H95" stroke="#0f0523" strokeWidth="5" strokeLinecap="round" />
                  <path d="M25 45 H75" stroke="#0f0523" strokeWidth="5" strokeLinecap="round" />
               </svg>
            </div>
          </div>

          {leftIcons.map((icon, idx) => (
            <div
              key={`icon-left-${idx}`}
              className="absolute h-[50px] w-[100px] flex items-center justify-end pr-2 left-icon opacity-0"
              style={{ 
                top: `${(icon.y / 500) * 100}%`, 
                left: '0%', 
                transform: 'translateY(-50%)' 
              }}
            >
              <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-lg">
                <img src={icon.logo} alt={icon.name} className="h-6 w-auto object-contain" />
              </div>
            </div>
          ))}

          {rightIcons.map((icon, idx) => (
            <div
              key={`icon-right-${idx}`}
              className="absolute h-[50px] w-[100px] flex items-center justify-start pl-2 right-icon opacity-0"
              style={{ 
                top: `${(icon.y / 500) * 100}%`, 
                right: '0%', 
                transform: 'translateY(-50%)' 
              }}
            >
              <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-lg">
                <img src={icon.logo} alt={icon.name} className="h-6 w-auto object-contain" />
              </div>
            </div>
          ))}
        </div> */}
        <div className="h-full w-full pb-12">
          <img src={Assets.IntegrationImage} alt="" />
        </div>
      </div>
    </section>
  );
}
