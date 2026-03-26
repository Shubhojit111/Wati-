import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Flame } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ================= MODULAR VISUAL COMPONENTS =================

const InboundAgentVisual = () => {
  const container = useRef(null);

  useGSAP(() => {
    // Select items to animate
    const items = container.current.querySelectorAll(".animate-item");
    const badge = container.current.querySelector(".animate-badge");
    
    // Animate chat bubbles and lead card
    gsap.fromTo(items, 
      { 
        opacity: 0, 
        x: (index) => (index === 0 ? -60 : index === 1 ? 60 : 0),
        y: (index) => (index === 2 ? 80 : 0),
        rotate: 0,
        scale: (index) => (index === 2 ? 0.95 : 1)
      },
      { 
        opacity: 1, 
        x: 0,
        y: 0,
        rotate: (index) => (index === 2 ? 0 : -5),
        scale: 1,
        duration: 2.0,
        ease: "power2.out",
        stagger: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // Animate badge from top
    gsap.fromTo(badge,
      { opacity: 0, y: -80 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 2.0, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: container });

  return (
    <div ref={container} className="relative w-full h-full min-h-[520px] flex flex-col items-center justify-start pt-16">
      {/* 24/7 Big Background Text */}
      <div className="absolute top-12 right-8 text-[140px] font-black text-[#F4EBFF] select-none pointer-events-none italic opacity-60">
        24/7
      </div>

      {/* Top Badge */}
      <div className="animate-badge absolute -top-28  -rotate-3 left-1/2 -translate-x-1/2 z-30 w-[400px]">
        <div className="bg-white/40 backdrop-blur-md p-6 rounded-full border-[6px] border-[#F6D0FF] shadow-[0_10px_30px_rgba(246,208,255,0.4)] flex items-center justify-between">
          <span className="text-[#3A3A3A] text-[20px] leading-[1.1] max-w-[150px]">Qualify & Convert Leads</span>
          <span className="text-[#EBBEFF] font-bold text-6xl pr-4">24/7</span>
        </div>
      </div>

      {/* Chat Bubbles */}
      <div className="w-full space-y-4">
        {/* User Chat */}
        <div className="animate-item bg-[#E4F5FF] border-2 border-[#E0F0FF] py-2.5 px-3 rounded-[20px] rounded-tr-none shadow-xl max-w-[85%]">
          <p className="text-[#1a1a1a] font-medium text-[18px] leading-tight">
            Hey, we're evaluating your product for a 20-member team.
          </p>
        </div>

        {/* Bot Response */}
        <div className="animate-item bg-white border-2 border-[#FFEBFA] py-3 px-4 rounded-[24px] rounded-tl-none shadow-xl max-w-[90%] ml-auto relative">
          <div className="absolute -right-8 -top-3">
             <div className="w-8 h-8 flex items-center justify-center">
                <Sparkles size={16} />
             </div>
          </div>
          <p className="text-[#1a1a1a] font-medium text-[18px] leading-tight">
            Hi there! Thanks for considering our product for your 20-member team. May I ask what key features are most important for your team?
          </p>
        </div>

        {/* Lead Intelligence Card */}
        <div className="animate-item bg-[#E1F3FF] rounded-[24px] p-4 mt-10 shadow-[4px_4px_0px_#B48DFF] border border-white relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-4 items-center">
              <div className="flex items-center justify-center">
                 <Flame size={30} className="text-[#ff3b30] fill-[#ff3b30]" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-[#4A4A4A] text-xl leading-tight">Alex Johnson</h4>
                <p className="text-[#4A4A4A] text-[16px] font-medium leading-tight">NovaTech Inc.</p>
                <p className="text-[#4A4A4A] text-[16px] font-medium leading-tight">Alex@novatech.com</p>
              </div>
            </div>
            
            <div className="flex gap-8">
               <div className="text-right">
                  <div className="text-[14px] text-gray-500 font-medium mb-1">Score</div>
                  <div className="text-xl font-bold text-[#4A4A4A]">92</div>
               </div>
               <div className="text-right">
                  <div className="text-[14px] text-gray-500 font-medium mb-1">Qualification</div>
                  <div className="text-xl font-bold text-[#4A4A4A]">Hot</div>
               </div>
            </div>
          </div>

          <div className="flex gap-1.5 flex-nowrap mb-4">
            {['Intent Detected', 'CRM ready', 'Auto-Routed', 'Demo Scheduled'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-black text-white text-[9px] font-bold rounded-full whitespace-nowrap">{tag}</span>
            ))}
          </div>

          <div className="space-y-1 text-[16px] font-bold text-[#4A4A4A]">
             <p>Status: Qualified Lead (Auto-routed)</p>
             <p>Intent: Purchase this month</p>
             <div className="flex justify-between items-center">
                <p>Source: Website Spotlight</p>
                <p>CRM: HubSpot</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SupportAgentVisual = () => {
  const container = useRef(null);

  useGSAP(() => {
    const items = container.current.querySelectorAll(".animate-item");
    const badge = container.current.querySelector(".animate-badge");
    
    gsap.fromTo(items, 
      { 
        opacity: 0, 
        x: (index) => (index % 2 === 0 ? -60 : 60), 
        y: 20,
        rotate: 0 
      },
      { 
        opacity: 1, 
        x: 0, 
        y: 0, 
        rotate: -5, 
        duration: 2.0, 
        ease: "power2.out", 
        stagger: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // Animate badge from bottom
    gsap.fromTo(badge,
      { opacity: 0, y: 80 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 2.0, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: container });

  return (
    <div ref={container} className="relative w-full h-full min-h-[520px] flex flex-col items-center justify-start pt-16">
      {/* Top Badge */}
      <div className="animate-badge absolute -top-28 -rotate-3 left-1/2 -translate-x-1/2 z-30 w-[380px]">
        <div className="bg-white/40 backdrop-blur-md p-6 rounded-full border-[6px] border-[#93D7FF] shadow-[0_10px_30px_rgba(147,215,255,0.4)] flex items-center justify-between">
          <span className="text-[#60C3FF] font-bold text-6xl">60%</span>
          <span className="text-[#3A3A3A] text-[20px] leading-[1.1] max-w-[400px] text-left">queries <br /> answered instantly!</span>
        </div>
      </div>

      {/* Chat Bubbles */}
      <div className="w-full space-y-4 px-4">
        {/* User Chat 1 */}
        <div className="animate-item bg-[#E7F6EB] py-2.5 px-3 rounded-[20px] rounded-tr-none shadow-xl border border-[#CDEBD8] max-w-[75%]">
          <p className="text-[#1a1a1a] font-medium text-[18px] leading-tight">
            How do I reset my password?
          </p>
        </div>

        {/* Bot Response 1 */}
        <div className="animate-item bg-white border-2 border-[#FFEBFA] py-3 px-4 rounded-[24px] rounded-tl-none shadow-xl max-w-[90%] ml-auto relative">
          <div className="absolute -right-8 -top-3">
             <div className="w-8 h-8 flex items-center justify-center">
                <Sparkles size={16} />
             </div>
          </div>
          <p className="text-[#1a1a1a] font-medium text-[18px] leading-tight">
            To reset your password, click 'Forgot password' on the login page, and I'll walk you through each step.
          </p>
        </div>

        {/* User Chat 2 */}
        <div className="animate-item mt-16 bg-[#E7F6EB] py-2.5 px-3 rounded-[20px] rounded-tr-none shadow-xl border border-[#CDEBD8] max-w-[75%]">
          <p className="text-[#1a1a1a] font-medium text-[18px] leading-tight">
            Thanks! What's your return policy?
          </p>
        </div>

        {/* Bot Response 2 */}
        <div className="animate-item bg-white border-2 border-[#FFEBFA] py-3 px-4 rounded-[24px] rounded-tl-none shadow-xl max-w-[90%] ml-auto relative">
          <div className="absolute -right-8 -top-3">
             <div className="w-8 h-8 flex items-center justify-center">
                <Sparkles size={16} />
             </div>
          </div>
          <p className="text-[#1a1a1a] font-medium text-[18px] leading-tight">
             You can return products within 30 days—would you like instructions on how to start a return?
          </p>
        </div>
      </div>
    </div>
  );
};

// ================= MAIN COMPONENT =================

const AIAgents = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="w-full mx-auto mb-24">
        <p className="text-[#3BA8FF] font-bold text-sm tracking-[0.2em] uppercase mb-4 text-center">AI @ WATI</p>
        <h2 className="text-5xl font-semibold text-[#1a1a1a] leading-tight mb-2 text-center">10X your performance with Wati AI</h2>
        <p className="text-[20px] mx-auto text-center leading-relaxed text-gray-500">
          Let Wati AI handle work for you, so your teams can drive meaningful conversations that build relationships and revenue.
        </p>
      </div>

      <div className="mx-auto px-24 grid md:grid-cols-2 gap-6">
        
        {/* Inbound Agent Card */}
        <div className="bg-[#FFF0F9] border-2 border-[#e8c6da] rounded-[48px] p-8 md:p-14 flex flex-col h-full shadow-sm">
           <div className="flex-1 mb-16">
              <InboundAgentVisual />
           </div>
           
           <div className="text-center border-t border-pink-200/30 pt-8">
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-3">Inbound Intelligence Agent</h3>
              <p className="text-gray-500 text-base font-bold mb-10 leading-relaxed max-w-sm mx-auto">
                 Build agents that qualify leads, uncover intent, and close sales on chat - all in no time.
              </p>
              <button className="mx-auto px-12 py-4 bg-transparent border-2 border-black text-black font-black text-sm rounded-2xl hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_black] active:translate-y-1 active:shadow-none uppercase tracking-widest cursor-pointer">
                 Build Agent
              </button>
           </div>
        </div>

        {/* Support Agent Card */}
        <div className="bg-[#F0F8FF] border-2 border-[#80ccee] rounded-[48px] p-8 md:p-14 flex flex-col h-full shadow-sm">
           <div className="flex-1 mb-16">
              <SupportAgentVisual />
           </div>
           
           <div className="text-center border-t border-blue-200/30 pt-8">
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-3">AI Support Agent</h3>
              <p className="text-gray-500 text-base font-bold mb-10 leading-relaxed max-w-sm mx-auto">
                 Train your AI support agent in minutes, and let it deflect up to 60% of customer queries.
              </p>
              <button className="mx-auto px-12 py-4 bg-transparent border-2 border-black text-black font-black text-sm rounded-2xl hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_black] active:translate-y-1 active:shadow-none uppercase tracking-widest cursor-pointer">
                 Build Agent
              </button>
           </div>
        </div>

      </div>
    </section>
  ); 
};

export default AIAgents;