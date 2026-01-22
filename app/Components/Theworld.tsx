'use client';
import React from 'react';

const Theworld = () => {
  const stats = [
    {
      value: "10K+",
      label: "GPUs Managed. Lorem Ipsum is simply dummy text",
    },
    {
      value: "60%",
      label: "TCO Savings. Lorem Ipsum is simply dummy text",
    },
    {
      value: "50%",
      label: "Faster Deployment. Lorem Ipsum is simply dummy text",
    },
    {
      value: "99.9",
      label: "Uptime SLA. Lorem Ipsum is simply dummy text",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:py-24 md:px-12 lg:px-24 w-full font-Aktiv Grotesk">
      <div className="container mx-auto">

        <div className="text-center mb-12 md:mb-20 w-[100%] h-[100%]">
          <h2 className="text-[34px] md:text-[44px] xl:text-[54px] 2xl:text-[64px] font-medium max-w-4xl mx-auto leading-tight">
            <span className="block">
              The world's #1 AI cloud platform,
            </span>
            <span className="block">
              purpose-built for what's next
            </span>
          </h2>
          
        <div className="flex justify-center mb-16 md:mb-28">
          <img
            src="Theworld.png"
            alt="AI Platform Illustration"
            className="w-full max-w-[600px] h-auto object-contain opacity-80"
          />
        </div>
        </div>




        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col border-t border-[#EAEAEA] pt-6">
              <span
                className="text-[100px] md:text-[110px] lg:text-[118px] 2xl:text-[138px] font-light mb-4"
                style={{
                  background: 'linear-gradient(90deg, #BEDD00 0%, #0095B6 93.14%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {stat.value}
              </span>
              <p className="text-sm md:text-base lg:text-[20px] font-normal text-white leading-[30px] max-w-[220px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Theworld;