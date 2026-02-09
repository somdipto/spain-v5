import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  // Duplicate testimonials for seamless infinite loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center">
          <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Social Proof</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-spain-charcoal">
            Voices from <span className="font-serif italic font-normal text-spain-red">Spain</span>
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex animate-marquee hover:pause">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[320px] sm:w-[360px] md:w-[400px] mx-2 sm:mx-4 bg-spain-offwhite p-6 sm:p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-gray-100"
            >
              <div className="mb-4 sm:mb-6 text-gray-300 group-hover:text-spain-yellow transition-colors">
                <Quote size={28} fill="currentColor" />
              </div>
              
              <p className="text-sm sm:text-base font-medium text-spain-charcoal mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full mr-2 sm:mr-3 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-spain-charcoal">{testimonial.name}</h4>
                  <p className="text-[10px] sm:text-xs text-gray-500">{testimonial.role} — {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;