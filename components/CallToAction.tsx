import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-12 px-6 relative overflow-hidden mb-12">
      {/* Beautiful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-[#F5E6D3] to-[#F8E4C8]"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-8 md:p-14 text-center relative overflow-hidden shadow-premium border border-white/20">
          
          {/* Elegant header */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-block bg-spain-red text-white px-3 sm:px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.5em] mb-4 shadow-lg">Final Call</span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-spain-charcoal tracking-tighter mb-4 leading-[0.9]">
              From Here to Spain
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto font-light leading-relaxed">
              Experience the pinnacle of Spanish student relocation. Your future self will thank you.
            </p>
          </div>

          {/* Elegant buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            {/* Book Consultation Button */}
            <button className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-spain-green via-emerald-600 to-green-700 rounded-full shadow-lg shadow-spain-green/30 overflow-hidden transition-all duration-700 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-spain-green/50 focus:outline-none border-0">
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-spain-green via-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center text-sm sm:text-base">
                From Here to Spain
                <span className="ml-2 text-sm sm:text-lg transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                  →
                </span>
              </span>
            </button>
            
            {/* WhatsApp Button */}
            <button className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base font-bold text-black bg-white rounded-full shadow-lg shadow-gray-900/20 border-2 border-gray-900/20 overflow-hidden transition-all duration-700 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-gray-900/40 focus:outline-none">
              
              {/* Subtle white gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center text-sm sm:text-base">
                <span className="mr-2 text-sm sm:text-lg transition-all duration-500 group-hover:scale-110">
                  ✓
                </span>
                Message us on WhatsApp
              </span>
            </button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-1 text-xs sm:text-sm text-gray-500">
            <p>Prefer email? <span className="text-spain-green hover:underline cursor-pointer transition-colors duration-300">team@thespainacademy.es</span></p>
            <p className="opacity-60">No pushy sales — just honest answers and a plan you can trust.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;