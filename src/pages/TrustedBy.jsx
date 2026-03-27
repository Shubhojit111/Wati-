import React from 'react';

const TrustedBy = () => {
  const logos = [
    { name: 'amazon', className: 'text-[#FF9900] font-bold text-2xl tracking-tighter' },
    { name: 'Vedanta', className: 'text-[#E31E24] font-serif text-2xl font-bold' },
    { name: 'WELSPUN', className: 'text-[#0054A6] font-sans font-black tracking-widest text-xl' },
    { name: 'Heritage', className: 'text-[#008244] font-serif italic font-bold border-2 border-[#008244] px-2 rounded-full' },
    { name: 'Habuild', className: 'text-[#2D3142] font-sans font-semibold text-2xl flex items-center gap-1' },
  ];

  return (
    <section className="py-40 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-[55px] font-bold text-[#1a1a1a] mb-12 leading-[1.2]">
          Loved and trusted by 
          <br/>
          <span className="text-[#1a1a1a]">16,000+ businesses, across the globe</span>
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-36">
          {/* Amazon-like */}
          <div className="flex items-center">
            <img src="https://www.wati.io/wp-content/uploads/2025/09/client-logo-1-en.png" alt="" className='h-10' />
          </div>

          {/* Vedantu-like */}
          <div className="flex items-center">
            <img src="https://www.wati.io/wp-content/uploads/2025/09/client-logo-2-en.png" alt="" className='h-10' />
          </div>

          {/* Welspun-like */}
          <div className="flex items-center">
            <img src="https://www.wati.io/wp-content/uploads/2025/09/client-logo-3-en.png" alt="" className='h-10' />
          </div>

          {/* Heritage-like */}
          <div className="flex items-center">
            <img src="https://www.wati.io/wp-content/uploads/2025/09/client-logo-4-en.png" alt="" className='h-10' />
          </div>

          {/* Habuild-like */}
          <div className="flex items-center">
            <img src="https://www.wati.io/wp-content/uploads/2025/09/client-logo-5-en.png" alt="" className='h-10' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
