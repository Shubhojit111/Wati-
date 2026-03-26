import React from 'react'
import { ShieldCheck, Lock, CheckCircle } from 'lucide-react';

const states = [
  { value: '10B', label: 'Messages Processed' },
  { value: '99.9%', label: 'Historical Uptime' },
  { isCompliance: true, label: 'Compliant' },
  { value: '100+', label: 'Countries' }
];

export default function StatsSection() {
  return (
    <div className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Rounded Container */}
        <div className="bg-[#FCF5FF] rounded-[48px] px-10 py-20 text-center relative overflow-hidden">
          
          {/* Heading */}
          <h2 className="text-[55px] leading-[1.1] font-bold text-[#0f0523] max-w-4xl mx-auto mb-20">
            Empowering global leaders <br />
            with world-class <br />
            conversation infrastructure
          </h2>

          {/* Stats Row */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto">
            {states.map((stat, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-start text-left px-8 py-4 w-full md:w-auto min-w-[200px]">
                  {stat.isCompliance ? (
                    <div className="flex items-center gap-2 mb-4 h-[60px]">
                      <div className="bg-[#4135BF] rounded-full p-2 text-white">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div className="bg-[#3DB9F5] rounded-full p-2 text-white">
                        <Lock className="w-6 h-6" />
                      </div>
                      <div className="bg-[#ECA0FE] rounded-full p-2 text-white">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                    </div>
                  ) : (
                    <span className="text-[56px] font-bold text-[#1a1a1a] leading-none mb-4">
                      {stat.value}
                    </span>
                  )}
                  <span className="text-[14px] font-medium text-[#ECA0FE] tracking-wide">
                    {stat.label}
                  </span>
                </div>
                {i < states.length - 1 && (
                  <div className="hidden md:block w-px h-24 bg-[#ECA0FE]/90" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}