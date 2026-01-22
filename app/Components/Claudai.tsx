// 'use client';
// import React from 'react';

// const Claudai = () => {
//    const partners = [

//     { name: 'Cisco', logo: '/cisco.png' },
//     { name: 'Dell', logo: '/dell.png' },
//     { name: 'Google', logo: '/google.png' },
//     { name: 'Qualcomm', logo: '/qualcomm.png' },
//     { name: 'Broadcom', logo: '/broadcom.png' },
//     { name: 'Maerifa', logo: '/maerif.png' },
//   ];
//   return (
//     <>
//     <section 
//       className="max-w-full relative bg-black overflow-hidden items-center
//                   h-[600px] md:h-[700px] 2xl:h-[850px] 2xl:w-[full] mx-auto"
//       style={{

//         backgroundImage: 'url("/claud.png")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >

//      <div className="absolute w-[100%] h-[100%]  flex flex-col px-40  t-0 z-10 items-center justify-center px-6">
//       <div className="container mx-auto text-center">

//         {/* Main Heading */}
//         <h1 className="text-[#ffffff] font-semibold leading-[74px]
//                        md:text-[44px] xl:text-[54px] 2xl:text-[64px]">
//           Sovereign Cloud & AI Infrastructure <br className="hidden sm:block" /> For The Modern Enterprise
//         </h1>

//         {/* Subheading */}
//         <p className="text-[#ffffff] max-w-[850px] leading-[30px]
//                       md:text-[16px] 2xl:text-[20px] font-normal text center mx-auto">
//           Deploy secure, scalable, and compliant cloud infrastructure with full data sovereignty. 
//           From GPU-powered AI workloads to edge computing—all orchestrated from a single platform.
//         </p>

//         {/* Buttons Group */}
//         <div className="flex flex-col sm:flex-row items-center gap-4 2xl:mt-4 justify-center">
//           <button className="w-[227px] h-[48px] 2xl:h-[56px] px-8 bg-[#0095B6] text-white rounded-md  transition-all text-sm 2xl:text-base font-medium text-[20px]">
//             Discover Products
//           </button>
//           <button className="w-[222px] h-[48px] 2xl:h-[56px] px-8 border border-[#0095B6] text-white rounded-md font-medium  transition-all text-sm 2xl:text-base font-medium text-[20px]">
//             Request a Demo
//           </button>
//         </div>
//       </div>

//       </div>




// <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-items-center">
//           {partners.map((partner, index) => (
//             <div key={index} className="w-full flex justify-center">
//               <img
//                 src={partner.logo} 
//                 alt={partner.name}
//                 className="h-10 md:h-12 object-contain"
//               />
//             </div>
//           ))}
//         </div>


//     </section>



// </>
//   );
// };


// export default Claudai;

'use client';
import React from 'react';

const Claudai = () => {
  const partners = [
    { name: 'Cisco', logo: '/cisco.png' },
    { name: 'Dell', logo: '/dell.png' },
    { name: 'Google', logo: '/google.png' },
    { name: 'Qualcomm', logo: '/qualcomm.png' },
    { name: 'Broadcom', logo: '/broadcom.png' },
    { name: 'Maerifa', logo: '/maerif.png' },
  ];

  return (
    <section
      className="relative bg-black overflow-hidden w-full h-[600px] md:h-[700px] 2xl:h-[850px]"
      style={{
        backgroundImage: 'url("/claud.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Main Content Container */}
      <div className="absolute inset-0 flex flex-col">

        {/* Hero Content - Takes up most of the space */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20">
          <div className="container mx-auto text-center">

            {/* Main Heading */}
            <h1 className="text-white font-semibold text-3xl md:text-[44px] xl:text-[54px] 2xl:text-[64px] leading-tight mb-6">
              Sovereign Cloud & AI Infrastructure
              <br className="hidden sm:block" />
              For The Modern Enterprise
            </h1>

            {/* Subheading */}
            <p className="text-white max-w-[850px] mx-auto text-base md:text-[16px] 2xl:text-[20px] font-normal leading-relaxed mb-8">
              Deploy secure, scalable, and compliant cloud infrastructure with full data sovereignty.
              From GPU-powered AI workloads to edge computing—all orchestrated from a single platform.
            </p>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <button className="w-[227px] h-[48px] 2xl:h-[56px] px-8 bg-[#0095B6] text-white rounded-md hover:bg-[#007a94] transition-all text-sm 2xl:text-base font-medium">
                Discover Products
              </button>
              <button className="w-[222px] h-[48px] 2xl:h-[56px] px-8 border border-[#0095B6] text-white rounded-md hover:bg-[#0095B6]/10 transition-all text-sm 2xl:text-base font-medium">
                Request a Demo
              </button>
            </div>
          </div>
        </div>

        {/* Partner Logos - Fixed at bottom */}
        <div className="w-full py-8 md:py-12 px-6 md:px-12 lg:px-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              {partners.map((partner, index) => (
                <div key={index} className="w-full flex justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-8 md:h-10 lg:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Claudai;