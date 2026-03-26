import React from "react";

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
    <div className="relative w-[750px] md:w-[1000px] h-[580px] rounded-[48px] overflow-hidden shrink-0 group shadow-lg snap-center cursor-pointer">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* White Content Card */}
      <div className="absolute top-12  left-10 w-full">
        <div className="bg-white rounded-[32px] md:rounded-[40px] p-12 w-[700px] shadow-2xl relative z-10 max-h-[500px] border flex flex-col justify-between">
          <div>
            {/* Logo */}
            <div className="mb-8 h-10 flex items-center">
              <img
                src={logo}
                alt="Company Logo"
                className="h-full object-contain"
              />
            </div>

            {/* Title/Headline */}
            <h3 className="text-[24px] md:text-[30px] font-bold text-[#0f0523] mb-5 leading-tight tracking-tight">
              {title}
            </h3>

            {/* Testimonial Quote */}
            <p className="text-[#4a4a4a] text-[15px] md:text-[16px] leading-[1.6] mb-8 font-normal">
              {quote}
            </p>
          </div>

          {/* User Profile Info */}
          <div className="flex items-center gap-4 mt-auto">
            <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
              {/* Yellow Background Circle */}
              <div className="absolute inset-0 bg-[#FDEB82] rounded-full" />
              {/* Avatar Image */}
              <div className="absolute inset-0 p-1 md:p-1.5 overflow-hidden">
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="font-bold text-[#0f0523] text-[17px] md:text-[18px] leading-tight mb-0.5">
                {name}
              </h4>
              <p className="text-[#6a6a6a] text-[14px] md:text-[15px] font-medium">
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
