import React from "react";
import Assets from "../assets/Assets";

const TestimonialCard = ({
  logo,
  title,
  quote,
  avatar,
  name,
  role,
  bgImage,
}) => {
  return (
    <div className="relative w-[750px] md:w-[900px] h-[580px] rounded-[48px] overflow-hidden shrink-0 group shadow-lg snap-center cursor-pointer">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105">
        <img src={bgImage} alt="" className="h-full w-full bg-cover"/>
      </div>

      {/* White Content Card */}
      <div className="absolute top-12  left-10 w-full">
        <div className="bg-white rounded-[32px] md:rounded-[40px] p-12 w-[700px] shadow-2xl relative z-10 max-h-[500px]  flex flex-col justify-between">
          <div>
            {/* Logo */}
            <div className=" h-12 flex items-center mb-4 w-fit">
              <img
                src={logo}
                alt="Company Logo"
                className="h-full object-contain"
              />
            </div>

            {/* Title/Headline */}
            <h3 className="text-[24px] md:text-[30px] font-bold text-[#0f0523]  leading-tight tracking-tight mb-4">
              {title}
            </h3>

            {/* Testimonial Quote */}
            <p className="text-[#4a4a4a] text-[15px] md:text-[16px] leading-[1.6]  font-normal mb-8">
              {quote}
            </p>
          </div>

          {/* User Profile Info */}
          <div className="flex items-center gap-4 mt-auto">
            <div className="relative w-24 h-24  shrink-0">

              {/* Avatar Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-[#0f0523] text-[14px] md:text-[16px] leading-tight mb-0.5">
                {name}
              </h4>
              <p className="text-[#6a6a6a] text-[14px] md:text-[14px] font-medium">
                {role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
