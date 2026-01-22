'use client';
export default function Ready() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
     
      <div 
        className="w-[100%] absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('/Ready.png')`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="sm:text-[44px] md:text-[54px] lg:text-[64px] font-medium text-white mb-6 sm:mb-8 leading-tight">
          Ready to Transform Your Cloud
          <br />
          Infrastructure?
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-12 max-w-3xl mx-auto font-normal lg:text-[20px]">
          Join leading enterprises leveraging sovereign cloud for secure, scalable operations
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button className="w-full sm:w-auto px-8 py-3 bg-[#0095B6] text-white font-medium rounded-md lg:text-[20px] md:text-[17px]">
            Request a Demo
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3 bg-transparent hover:bg-white/10 text-white font-semibold rounded-md border-2 border-white lg:text-[20px] md:text-[17px]">
            Get in Touch
          </button>
        </div>
      </div>
    
    </section>
  );
}