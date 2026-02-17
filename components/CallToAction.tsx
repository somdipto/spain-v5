import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-6 relative overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-spain-yellow/5 via-white to-spain-red/5"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          
          {/* Clean header */}
          <div className="mb-8 sm:mb-12">
            <span className="inline-block bg-spain-red text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.5em] mb-6 shadow-lg">Final Call</span>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-spain-charcoal tracking-tighter mb-6 leading-[0.9]">
              From Here to <span className="font-serif italic font-normal text-spain-yellow">Your Future</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the pinnacle of Spanish student relocation. Your future self will thank you.
            </p>
          </div>

          {/* Clean buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8">
            {/* Primary Button */}
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-spain-green rounded-full shadow-lg shadow-spain-green/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-spain-green/50 focus:outline-none">
              <span className="flex items-center">
                From Here to Your Future
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </button>
            
            {/* Secondary Button */}
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-spain-charcoal bg-white rounded-full shadow-lg shadow-gray-900/10 border border-gray-200 transition-all duration-500 hover:scale-105 hover:shadow-xl focus:outline-none">
              <span className="flex items-center">
                <span className="mr-2">✓</span>
                WhatsApp
              </span>
            </button>
          </div>

          {/* Clean contact info */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Prefer email? <a href="mailto:team@thespainacademy.es" className="text-spain-green hover:underline transition-colors">team@thespainacademy.es</a>
            </p>
            <p className="text-gray-400 text-xs mt-2 opacity-60">No pushy sales — just honest answers and a plan you can trust.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;