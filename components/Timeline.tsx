import React from 'react';
import { Check, ArrowRight, Map } from 'lucide-react';

const TimelineSection = () => {
  const steps = [
    {
      phase: "Pre-Departure Support",
      number: "1",
      title: "Pre-Arrival",
      description: "Laying the groundwork before you even pack.",
      items: [
        "Pre-departure Support",
        "Student visa assistance",
        "Health insurance support",
        "Accommodation arrangements"
      ]
    },
    {
      phase: "Post-Arrival",
      number: "2",
      title: "Post-Arrival",
      description: "Touchdown. We handle the landing logistics.",
      items: [
        "Airport pickup",
        "Orientation (city tour & cultural guidance)",
        "Bank account setup",
        "Mobile data & transport card assistance",
        "Residence permit application"
      ]
    },
    {
      phase: "Academic & Personal Support",
      number: "3",
      title: "During the Program",
      description: "Academic & Personal Support throughout your stay.",
      items: [
        "Emergency contacts",
        "Spanish language course",
        "University admission & academic prep",
        "1-on-1 academic counseling",
        "Career guidance & internship opportunities",
        "Seminars with professors & industry professionals",
        "Food & health advice"
      ]
    },
    {
      phase: "Post Program & Alumni Support",
      number: "4",
      title: "Post-Program & Alumni",
      description: "Your journey doesn't end when classes finish.",
      items: [
        "Continued legal support",
        "Erasmus & study abroad guidance",
        "Alumni network & career support"
      ]
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden bg-[#F5BE0B]">
      {/* Background Texture/Pattern for depth without changing color */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-sm border border-yellow-100 mb-4 sm:mb-6 transform hover:scale-105 transition-transform cursor-default">
            <Map className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
            <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] text-gray-800 uppercase">
              The Path to Excellence
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tighter text-gray-900 leading-none">
            Your Spanish <span className="text-red-700 font-serif italic font-normal">
              Legacy
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-800 font-medium opacity-90">
            From your first application to your graduation ceremony — we are with you every step of the way.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white via-white to-gray-50 rounded-[1.2rem] sm:rounded-[1.5rem] lg:rounded-[2rem] p-3 sm:p-4 md:p-6 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col h-full border border-yellow-100/50 hover:border-red-200"
            >
              {/* Header: Number Badge */}
              <div className="flex justify-end items-start mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base shadow-lg group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                  {step.number}
                </div>
              </div>

              {/* Title & Desc */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-red-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Checklist */}
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <div className="mt-0.5 sm:mt-1 min-w-[14px] sm:min-w-[18px] h-[14px] sm:h-[18px] rounded-full border border-red-200 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center group-hover:border-red-500 group-hover:from-red-600 group-hover:to-red-600 transition-all duration-300">
                      <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-red-600 group-hover:text-white transition-colors duration-300" strokeWidth={4} />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 font-medium leading-tight group-hover:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Bottom Action Area */}
              <div className="pt-3 sm:pt-4 mt-auto border-t border-gray-100 flex justify-between items-center">
                <span className="text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-wider group-hover:text-red-700 transition-colors">
                  Step {step.number}
                </span>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:from-red-50 group-hover:to-red-100 transition-colors">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-red-700 group-hover:translate-x-0.5 sm:group-hover:translate-x-1 transition-all" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;