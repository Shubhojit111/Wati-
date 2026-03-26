import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import WatiButton from "./WatiButton";

const wordPairs = [
  { top: "WhatsApp", bottom: "growth" },
  { top: "conversational", bottom: "growth" },
  { top: "business", bottom: "messaging" },
];

const Hero = () => {
  const container = useRef(null);
  const h1Ref = useRef(null);
  const [index, setIndex] = React.useState(0);

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      delay: 1.5,
    });

    const boxes = container.current.querySelectorAll(".green-box");

    tl.to(h1Ref.current, {
      scale: 0.9,
      opacity: 0.3,
      duration: 1,
      ease: "power2.inOut",
      delay: 1,
      onComplete: () => {
        setIndex((prev) => (prev + 1) % wordPairs.length);
      }
    })
    .to(boxes, {
      scale: 0.9,
      duration: 1,
      ease: "power2.inOut",
    }, "<")
    .to(h1Ref.current, 
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    )
    .to(boxes, {
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)"
    }, "<");

  }, { scope: container });

  return (
    <section ref={container} className="min-h-screen bg-white flex flex-col justify-center items-center  pt-6 pb-12">
      {/* HERO TEXT */}
      <div className="text-center w-full mx-auto">
        <h1 ref={h1Ref} className="text-[120px] font-bold leading-[1.05] tracking-tight text-[#1a1a1a] mb-12">
          <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
            <span>The #1</span>
            <div className="green-box relative bg-[#00E676]  px-6 py-2 rounded-[20px] rounded-tr-none border-2 -rotate-1 border-black shadow-[8px_8px_0px_black] min-w-[300px] h-[100px] md:h-[130px] flex items-center justify-center">
              <span className="block leading-none">
                {wordPairs[index].top}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap ">
            <div className="green-box relative bg-[#00E676]  px-6 py-2 rounded-[20px] rounded-tl-none  border-2 rotate-1 border-black shadow-[8px_8px_0px_black] min-w-[200px] h-[100px] md:h-[130px] flex items-center justify-center">
              <span className="block leading-none">
                {wordPairs[index].bottom}
              </span>
            </div>
            <span>platform</span>
          </div>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-16 text-gray-700 text-[20px] font-medium  mx-auto leading-relaxed">
          From the first marketing touchpoint through the sales cycle to ongoing
          customer success,<br /> Wati drives faster ROI with an easy-to-use,
          scalable AI-native platform.
        </p>

        {/* TRUST BADGES */}
        <div className="flex justify-center gap-6 mt-4 flex-wrap">
          <div className="px-8 py-4 bg-white rounded-full text-[15px] font-bold text-[#1a1a1a] shadow-lg shadow-[#b4dcff] border border-gray-50 flex items-center gap-2">
             Trusted by 16,000+ businesses worldwide
          </div>
          <div className="px-8 py-4 bg-white rounded-full text-[15px] font-bold text-[#1a1a1a] shadow-lg shadow-[#b4dcff] border border-gray-50 flex items-center gap-2">
             <div className="w-6 h-6 bg-[#FF492C] rounded-full flex items-center justify-center text-white text-[10px] font-bold italic">G</div>
             4.6/5 on G2
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6 mt-14">
          <WatiButton variant="outline">
            Book a Demo
          </WatiButton>

          <WatiButton variant="primary">
            Try for Free <ArrowRight size={22} strokeWidth={3} />
          </WatiButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;