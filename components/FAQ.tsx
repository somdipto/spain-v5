import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Define color schemes for each FAQ item
  const colorSchemes = [
    { bg: 'from-spain-yellow via-spain-yellow/95 to-[#E5B500]', shadow: 'shadow-glow-yellow', number: 'text-spain-charcoal/30' },
    { bg: 'from-spain-green via-spain-green/95 to-[#059669]', shadow: 'shadow-glow-green', number: 'text-spain-charcoal/30' },
    { bg: 'from-spain-red via-spain-red/95 to-[#DC2626]', shadow: 'shadow-glow-red', number: 'text-spain-charcoal/30' },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Enhanced Greenish Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-spain-offwhite via-emerald-50/30 to-green-100/40"></div>
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-bl from-spain-yellow/10 to-transparent blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[60%] h-[30%] bg-gradient-to-tr from-spain-green/5 via-emerald-100/20 to-transparent blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <span className="text-spain-red font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block italic">Knowledge Access</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-spain-charcoal leading-none">
            Frequently Asked <span className="font-serif italic font-normal text-spain-red">Questions</span>
          </h2>
        </div>

        {/* Linear Symmetrical Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isHovered = hoveredIndex === index;
            const colorScheme = colorSchemes[index % colorSchemes.length];

            return (
              <div 
                key={index} 
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  group relative overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                  rounded-[1.5rem] sm:rounded-[2rem] border border-spain-charcoal/5 cursor-pointer transform-gpu
                  ${isHovered 
                    ? `bg-gradient-to-br ${colorScheme.bg} ${colorScheme.shadow} border-transparent -translate-y-1 sm:-translate-y-2 scale-[1.01] sm:scale-[1.02]` 
                    : 'bg-white hover:bg-white/90 shadow-soft'}
                `}
              >
                <div className="p-6 sm:p-8 md:p-10">
                  <div className="flex items-center justify-between gap-4 sm:gap-6">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="
                        text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] transition-all duration-700
                        text-black font-black
                      ">
                        0{index + 1}
                      </span>
                      <h3 className={`
                        text-base sm:text-lg md:text-xl font-semibold tracking-tight leading-tight transition-all duration-900
                        ${isHovered ? 'text-spain-charcoal' : 'text-spain-charcoal/90'}
                      `}>
                        {faq.question}
                      </h3>
                    </div>
                    
                    <div className={`
                      hidden sm:flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border transition-all duration-[1200ms]
                      ${isHovered 
                        ? 'bg-spain-charcoal text-white border-transparent rotate-90 scale-110' 
                        : 'bg-transparent text-spain-charcoal/10 border-spain-charcoal/10'}
                    `}>
                      <span className="text-base sm:text-lg font-bold transition-all duration-500">
                        {isHovered ? '↓' : '→'}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Height Answer Reveal - Ultra Fast & Cool */}
                  <div className={`
                    grid transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isHovered ? 'grid-rows-[1fr] opacity-100 mt-6 sm:mt-8' : 'grid-rows-[0fr] opacity-0'}
                  `}>
                    <div className="overflow-hidden">
                      <div className="pt-4 sm:pt-6 border-t border-spain-charcoal/10 max-w-3xl">
                        <p className={`text-sm sm:text-base md:text-lg font-normal leading-relaxed transform-gpu transition-colors duration-700 ${
                          isHovered ? 'text-white' : 'text-spain-charcoal/80'
                        }`}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Spain Texture Overlay */}
                <div className={`absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grains.vercel.app/grain.png')] transition-all duration-[1200ms] ${isHovered ? 'opacity-[0.08]' : 'opacity-0'}`}></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Action Footer */}
        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 relative">
           {/* Book Consultation Button */}
           <button className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-spain-green via-emerald-600 to-green-700 rounded-full shadow-lg shadow-spain-green/30 overflow-hidden transition-all duration-700 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-spain-green/50 focus:outline-none border-0">
               {/* Animated background waves */}
               <div className="absolute inset-0 bg-gradient-to-r from-spain-green via-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               
               {/* Shimmer wave effect */}
               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out">
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
               </div>
               
               {/* Pulse wave animation */}
               <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-spain-green/20 to-emerald-300/30 animate-pulse"></div>
               </div>
               
               {/* Button content */}
               <span className="relative z-10 flex items-center text-sm sm:text-base">
                   From Here to Spain
                   <span className="ml-2 text-sm sm:text-lg transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                     →
                   </span>
               </span>
               
               {/* Ripple effect */}
               <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
                   <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
               </div>
           </button>
           
           {/* WhatsApp Button */}
           <button className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 rounded-full shadow-lg shadow-green-600/30 overflow-hidden transition-all duration-700 hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-green-600/50 focus:outline-none border-0">
               {/* WhatsApp green gradient overlay */}
               <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               
               {/* Shimmer effect */}
               <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out">
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
               </div>
               
               {/* WhatsApp pulse */}
               <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/30 animate-pulse"></div>
               </div>
               
               {/* Button content */}
               <span className="relative z-10 flex items-center text-sm sm:text-base">
                   Message us
                   <span className="ml-2 text-sm sm:text-lg transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                     →
                   </span>
               </span>
               
               {/* Ripple effect */}
               <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
                   <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
               </div>
           </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;