import React from "react";

const WatiButton = ({
  children,
  text,
  variant = "primary",
  bgColor = "#00E676",
  className = "",
  onClick,
}) => {
  const isPrimary = variant === "primary";
  const displayContent = text || children;
  const isFullWidth = className.includes("w-full");

  return (
    <div className={`relative group ${isFullWidth ? "flex w-full" : "inline-block"} z-40 ${className}`}>
      {/* The dynamic color "shadow" background layer */}
      {isPrimary && (
        <div 
          className="absolute inset-0 translate-x-1.5 translate-y-1.5 w-full h-full rounded-xl group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 z-10"
          style={{ backgroundColor: bgColor }}
        />
      )}
      
      {/* The actual button layer */}
      <button 
        onClick={onClick}
        className={`relative z-20 px-6 py-2.5 bg-transparent border-3 border-black rounded-xl font-bold text-[16px] flex items-center justify-center gap-2 transition-all duration-200 
                   ${isFullWidth ? "w-full" : ""}
                   ${isPrimary ? "group-active:translate-x-1 group-active:translate-y-1" : "hover:bg-black hover:text-white"}`}
        onMouseEnter={(e) => isPrimary ? e.currentTarget.style.backgroundColor = bgColor : null}
        onMouseLeave={(e) => isPrimary ? e.currentTarget.style.backgroundColor = "transparent" : null}
      >
        {displayContent}
      </button>
    </div>
  );
};

export default WatiButton;
