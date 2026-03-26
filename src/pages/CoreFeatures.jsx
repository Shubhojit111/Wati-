import React from "react";
import {
  MessageCircle,
  Facebook,
  Instagram,
  MessageSquare,
  Send,
} from "lucide-react";
import FloatingOrbit from "../components/Pulse";

const CoreFeatures = () => {
  return (
    <section className="py-8 bg-white overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 min-w-[60%]  text-center md:text-left">
          <h2 className="text-[55px] font-bold text-[#1a1a1a] leading-[1.1] mb-4">
            WhatsApp at the core. <br />
            Conversations everywhere.
          </h2>
          <p className="text-xl text-gray-600  leading-relaxed">
            Start with WhatsApp and naturally extend to every channel your
            customers love. Manage website chat, Instagram, Facebook, SMS, calls
            and other social channels from one unified inbox.
          </p>
        </div>

        <div className="flex-1 h-full w-[40%] relative flex items-center justify-center ">
          <FloatingOrbit />
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
