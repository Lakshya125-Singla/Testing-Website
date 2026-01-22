'use client'
import React from 'react';

const ComputingSection = () => {
  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Horizontal Divider */}
        <div className="w-full h-px bg-[#ffffff]/40 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          
          {/* Left Side: Content */}
          <div className="lg:pr-16 pb-12 lg:pb-0">
            <span className="text-white text-[18px] md:text-[20px] lg:text-[24px] font-medium mb-4 leading-[34px]">
              By Industry
            </span>
            
            <h2 className="text-[45px] md:text-[50px] lg:text-[56px] leading-[66px] font-semibold  mb-6">
              Edge Computing
            </h2>
            
            <p className="text-white font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] mb-8 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>

            {/* Custom Arrow Image Button */}
          <button className="group flex items-center gap-2 transition-opacity duration-300 hover:opacity-100">
  <img 
    src="/soluarrow.png" 
    alt="Navigate"
    className="w-8 h-8 object-contain group-hover:translate-x-2 transition-transform duration-300" 
  />
</button>
          </div>

          {/* Right Side: Image with Vertical Divider */}
          <div className="relative lg:pl-16 flex items-center justify-center lg:justify-end">
            {/* Vertical Divider (Only visible on Desktop) */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-[#ffffff]/40" />
            
            <div className="relative w-full">
              <img 
                src="/Solutions.png" 
                alt="Edge Computing Visualization" 
                className="w-full h-auto object-cover"
              />
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ComputingSection;