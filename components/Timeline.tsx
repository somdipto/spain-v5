import React from 'react';
import { TIMELINE_STEPS } from '../constants';
import { CheckCircle2, Map, ChevronRight } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-spain-yellow overflow-hidden" id="journey">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 text-spain-charcoal mb-4 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <Map size={16} className="text-spain-red" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">The Path to Excellence</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-spain-charcoal leading-none">
            Your Spanish <span className="font-serif italic font-normal text-spain-red">Legacy</span>
          </h2>
        </div>

        {/* Horizontal Cards - Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {TIMELINE_STEPS.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100 flex flex-col h-full
                hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Phase Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-gray-100 text-gray-600">
                  {step.phase}
                </span>
                <span className="w-8 h-8 bg-spain-charcoal text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-spain-charcoal mb-2 tracking-tight leading-tight">
                {step.title}
              </h3>
              
              <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Items List */}
              <ul className="space-y-2 flex-grow">
                {step.items.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start text-xs font-medium text-spain-charcoal/80">
                    <CheckCircle2 size={14} className="mr-2 flex-shrink-0 mt-0.5 text-spain-red" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom */}
              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>Phase {index + 1}</span>
                <ChevronRight size={16} className="text-spain-red" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;