import React, { useState } from 'react';
import { DESTINATIONS } from '../constants';
import { ArrowUpRight, Sun, CloudSun, Cloud, Wind } from 'lucide-react';

const Destinations: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const weatherIcons = [Sun, CloudSun, Wind, Cloud];
  const temps = ["24°C", "22°C", "26°C", "28°C"];

  const getGridTemplate = () => {
    if (hoveredIndex === null) return "1fr 1fr";
    return hoveredIndex < 2 ? "1.5fr 0.5fr" : "0.5fr 1.5fr";
  };

  const getColTemplate = () => {
    if (hoveredIndex === null) return "1fr 1fr";
    return (hoveredIndex % 2 === 0) ? "1.5fr 0.5fr" : "0.5fr 1.5fr";
  };

  return (
    <section id="destinations" className="py-24 px-6 bg-spain-offwhite">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-spain-red font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">Geographic Selection</span>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-spain-charcoal leading-none">
              Where <span className="font-serif italic font-normal text-spain-red">Next?</span>
            </h2>
          </div>
          <p className="text-gray-400 text-base font-normal max-w-xs md:text-right border-r border-spain-charcoal/10 pr-6 italic">
            A balanced, symmetrical exploration of the Iberian peninsula.
          </p>
        </div>

        {/* Dynamic Balanced Squeezebox */}
        <div 
          className="grid gap-3 h-[600px] md:h-[700px] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] bg-spain-charcoal/5 p-3 rounded-[3rem]"
          style={{ 
            gridTemplateRows: getGridTemplate(),
            gridTemplateColumns: getColTemplate()
          }}
        >
          {DESTINATIONS.slice(0, 4).map((dest, index) => {
            const Icon = weatherIcons[index];
            const isHovered = hoveredIndex === index;

            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-[2.2rem] overflow-hidden cursor-crosshair bg-spain-charcoal"
              >
                <img 
                  src={dest.image} 
                  alt={dest.city} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-60'}`}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-spain-charcoal/95 via-spain-charcoal/30 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-white">
                  <div className="flex items-center gap-4 mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="text-[9px] font-bold uppercase tracking-widest">Region 0{index + 1}</span>
                    <div className="h-px flex-grow bg-white/20"></div>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div className="transition-all duration-700 transform group-hover:translate-y-[-8px]">
                      <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-none mb-2">{dest.city}</h3>
                      <p className="font-serif italic text-white/60 text-lg md:text-2xl leading-none">{dest.tagline}</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-xl p-4 rounded-full border border-white/20 transition-all duration-700 group-hover:bg-spain-red group-hover:rotate-45">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div className={`
                    grid transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${isHovered ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0'}
                  `}>
                    <div className="overflow-hidden">
                      <p className="text-sm text-white/70 font-light leading-relaxed max-w-xl border-t border-white/10 pt-6">
                        {dest.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Destinations;