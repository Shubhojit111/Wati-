import { useState } from "react";
import Assets from "../assets/Assets";

const tabs = [
  {
    id: "marketing",
    label: "Marketing",
    video: Assets.marketingVideo,
  },
  {
    id: "sales",
    label: "Sales",
    video: Assets.salesVideo,
  },
  {
    id: "support",
    label: "Support",
    video: Assets.supportVideo,
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("marketing");

  const activeVideo = tabs.find((t) => t.id === activeTab)?.video;

  return (
    <div className="bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Tabs */}
        <div className="flex justify-center gap-28 text-[20px] font-bold pb-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-2 transition-all  ${
                activeTab === tab.id
                  ? "text-black"
                  : "text-gray-500"
              }`}
            >
              {tab.label}

              {/* Active underline */}
              {activeTab === tab.id && (
                <span className="absolute left-0 -bottom-[2px] w-full h-[2px] bg-black"></span>
              )}
            </button>
          ))}
        </div>

   
        <div className="flex justify-center">
          <div className="relative rounded-2xl overflow-hidden ">
            <video key={activeVideo} src={activeVideo} autoPlay loop muted playsInline className=" w-full h-full object-cover transition-opacity duration-500 ease-in-out"></video>

            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-black/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}