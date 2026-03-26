import React from 'react';

const WatiButton = ({ children, variant = 'primary', className = '', onClick }) => {
  const isPrimary = variant === 'primary';

  return (
    <div className={`relative group inline-block z-50 ${className}`}>
      {/* The green "shadow" background layer that moves on hover */}
      {isPrimary && (
        <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 w-full h-full bg-[#00E676] rounded-xl group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 z-10" />
      )}
      
      {/* The actual button layer with border and content */}
      <button 
        onClick={onClick}
        className={`relative z-20 px-5 py-2 bg-transparent border-3 border-black rounded-xl font-medium text-[15px] flex items-center justify-center gap-2 transition-all duration-200 
                   ${isPrimary ? 'group-hover:bg-[#00E676] group-active:translate-x-1 group-active:translate-y-1' : 'hover:bg-black hover:text-white'}`}
      >
        {children}
      </button>
    </div>
  );
};

export default WatiButton;
