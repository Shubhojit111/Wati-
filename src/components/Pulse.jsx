import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  MessageSquare,
  Globe,
  AtSign,
} from "lucide-react";

const FloatingOrbit = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🌊 Subtle pulse rings
      gsap.to(".pulse-ring", {
        scale: 1.08,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });

      // ✨ Floating icons (FIXED)
      gsap.to(".float", {
        yPercent: -15, // ✅ FIX: keeps circular positioning intact
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.15,
          from: "random",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[500px] flex items-center justify-center"
    >
      <div className="relative w-[420px] h-[420px] flex items-center justify-center">

        {/* 🌊 INNER PULSE */}
        <div className="absolute w-[240px] h-[240px] rounded-full bg-green-200/40 pulse-ring"></div>
        <div className="absolute w-[170px] h-[170px] rounded-full bg-green-300/40 pulse-ring"></div>

        {/* 💬 CENTER */}
        <div className="relative z-10 w-[90px] h-[90px] bg-green-400 rounded-full flex items-center justify-center shadow-lg">
          <Phone className="text-white" size={32} />
        </div>

        {/* 🔵 ORBIT BORDER */}
        <div className="absolute w-[340px] h-[340px] rounded-full border border-green-200"></div>

        {/* ================= ICONS (PERFECT CIRCLE) ================= */}

        {[
          { icon: <AtSign size={40} />, angle: -90, color: "text-blue-500" },
          { icon: <MessageCircle size={36} />, angle: -30, color: "text-purple-500" },
          { icon: <Globe size={36} />, angle: 30, color: "text-red-500" },
          { icon: <Instagram size={36} />, angle: 90, color: "text-pink-500" },
          { icon: <MessageSquare size={36} />, angle: 150, color: "text-blue-400" },
          { icon: <Facebook size={36} />, angle: 210, color: "text-blue-600" },
        //   { icon: <Phone size={30} />, angle: 270, color: "text-green-500" },
        ].map((item, i) => {
          const radius = 170;

          const x = radius * Math.cos((item.angle * Math.PI) / 180);
          const y = radius * Math.sin((item.angle * Math.PI) / 180);

          return (
            <div
              key={i}
              className={`float absolute ${item.color}`}
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
            >
              {item.icon}
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default FloatingOrbit;