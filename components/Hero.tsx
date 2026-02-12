import React from 'react';
import Button from './Button';
import { HERO_CONTENT } from '../constants';
import { Instagram, MapPin } from 'lucide-react';

const STUDENTS = [
  {
    id: 1,
    name: "Valentine Vallery Haryanto",
    handle: "https://www.instagram.com/valentinevallery?igsh=cDhmMmoyZHpoZGV3",
    image: "/hero/valentine-vallery.jpg",
    location: "Madrid",
    rotate: "-rotate-[6deg] md:-rotate-[10deg] group-hover:-rotate-[15deg] md:group-hover:-rotate-[18deg]",
    translate: "-translate-x-10 sm:-translate-x-14 md:-translate-x-20 lg:-translate-x-24 translate-y-2 group-hover:-translate-x-20 sm:group-hover:-translate-x-28 md:group-hover:-translate-x-36 lg:group-hover:-translate-x-44",
    glow: "group-hover:shadow-glow-yellow",
    zIndex: "z-10",
  },
  {
    id: 2,
    name: "Melina Mauro",
    handle: "https://www.instagram.com/beyondnutritionbymelina?igsh=Y28ybzRycW9yZzh5",
    image: "/hero/melina-mauro.jpg",
    location: "Barcelona",
    rotate: "rotate-[6deg] md:rotate-[10deg] group-hover:rotate-[15deg] md:group-hover:rotate-[18deg]",
    translate: "translate-x-10 sm:translate-x-14 md:translate-x-20 lg:translate-x-24 translate-y-2 group-hover:translate-x-16 sm:group-hover:translate-x-24 md:group-hover:translate-x-32 lg:group-hover:translate-x-40",
    glow: "group-hover:shadow-glow-yellow",
    zIndex: "z-10",
  },
  {
    id: 3,
    name: "Julius Caesar",
    handle: "https://www.instagram.com/ceasarr.julius?igsh=MThrYnhkMmxlcGF6Nw==",
    image: "/hero/julius-caesar.jpg",
    location: "Valencia",
    rotate: "rotate-[6deg] md:rotate-[10deg] group-hover:rotate-[15deg] md:group-hover:rotate-[18deg]",
    translate: "translate-x-10 sm:translate-x-14 md:translate-x-20 lg:translate-x-24 translate-y-2 group-hover:translate-x-16 sm:group-hover:translate-x-24 md:group-hover:translate-x-32 lg:group-hover:translate-x-40",
    glow: "group-hover:shadow-glow-yellow",
    zIndex: "z-10",
  }
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-24 sm:pt-28 sm:pb-28 lg:pt-24 lg:pb-32 overflow-hidden bg-spain-offwhite">
        {/* Subtle Ambient Background Elements */}
        <div className="absolute top-[-5%] right-[5%] w-[40%] h-[40%] bg-spain-yellow opacity-[0.03] blur-[140px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-5%] left-[5%] w-[40%] h-[40%] bg-spain-red opacity-[0.03] blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Text Content Area */}
                <div className="animate-fade-up text-center lg:text-left z-20 order-1">
                    <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.95rem] font-heading font-semibold tracking-tighter text-spain-charcoal leading-[1.0] mb-6 lg:mb-8">
                        The only <br className="hidden xl:block" />
                        <span className="font-serif italic font-normal text-spain-yellow">
                            Study-in-Spain
                        </span> <br />
                        program for <br className="hidden md:block xl:hidden" />
                        {/* Swapped Green for Red as requested */}
                        <span className="text-spain-red">Southeast <br />Asians</span>.
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 mb-6 lg:mb-8 leading-relaxed font-medium font-sans">
                        {HERO_CONTENT.subheading}
                    </p>

                    {/* Minimal Value Pills */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                        {['Visas', 'Housing', 'Careers', 'Community'].map((item, i) => (
                            <span key={item} className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-spain-charcoal/5 text-[11px] font-semibold text-spain-charcoal/80">
                                <span className={`w-1.5 h-1.5 rounded-full mr-2 ${i % 2 === 0 ? 'bg-spain-red' : 'bg-spain-green'}`}></span>
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                        <button className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-base font-bold text-white bg-spain-green rounded-full shadow-lg shadow-spain-green/25 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-spain-green/40 focus:outline-none border-0">
                            {/* Background gradient that slides in */}
                            <div className="absolute inset-0 bg-gradient-to-r from-spain-green via-spain-greenDark to-spain-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            </div>
                            
                            {/* Button content */}
                            <span className="relative z-10 flex items-center text-sm sm:text-base">
                                Start Your Journey
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110">
                                    <path d="M7 7h10v10"></path>
                                    <path d="M7 17 17 7"></path>
                                </svg>
                            </span>
                            
                            {/* Ripple effect */}
                            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
                                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                            </div>
                        </button>
                        
                        <button className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-base font-medium text-spain-charcoal bg-white/80 backdrop-blur-sm border-2 border-spain-charcoal/10 rounded-full shadow-md overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-spain-green/20 hover:border-spain-green hover:text-spain-green focus:outline-none">
                            {/* Background gradient that slides in */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-spain-green/10 to-spain-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-spain-green/30 to-transparent"></div>
                            </div>
                            
                            {/* Button content */}
                            <span className="relative z-10 flex items-center text-sm sm:text-base">
                                Discover Programs
                            </span>
                        </button>
                    </div>
                </div>

                {/* Perfectly Placed Card Stack Area */}
          <div className="h-[450px] md:h-[600px] relative flex items-center justify-center order-2 lg:order-2 group">
            
            {/* Background card hints */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-[240px] h-[340px] md:w-[300px] md:h-[420px]">
                {/* Background card outlines */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-sm"></div>
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/15 bg-white/7 backdrop-blur-sm transform translate-x-4"></div>
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/12 bg-white/5 backdrop-blur-sm transform translate-x-8"></div>
              </div>
            </div>
            
            {/* Perspective Container */}
            <div className="relative w-[240px] h-[340px] md:w-[300px] md:h-[420px] preserve-3d">
              <style dangerouslySetInnerHTML={{ __html: `
                .preserve-3d { transform-style: preserve-3d; }
              `}} />
              {STUDENTS.map((student, index) => (
                <a 
                  key={student.id}
                  href={student.handle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl 
                    transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                    cursor-pointer ring-1 ring-black/5 hover:z-50
                    ${index === 0 ? 'z-10 -rotate-3 scale-85 translate-x-[-30px] group-hover:-rotate-[25deg] group-hover:translate-x-[-60px] md:group-hover:translate-x-[-70px] group-hover:origin-bottom' : 
                     index === 1 ? 'z-30 rotate-0 scale-85 translate-y-[-15px] group-hover:translate-y-[-25px] group-hover:scale-115' : 
                     'z-20 rotate-3 scale-85 translate-x-[30px] group-hover:rotate-[25deg] group-hover:translate-x-[60px] md:group-hover:translate-x-[70px] group-hover:origin-bottom'}
                  `}
                >
                  {/* Image with zoom effect */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src={student.image} 
                      alt={student.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  {/* Card Content - Visible on Hover or for Top Card */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 text-white transition-all duration-500">
                    <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#F1BF00] mb-2">
                      <MapPin size={14} className="text-[#AA151B]" />
                      {student.location}
                    </div>
                    <h3 className="text-xl md:text-3xl font-serif italic mb-4">{student.name}</h3>
                    
                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-xs font-semibold tracking-wider text-white/60">VIEW INSTAGRAM</span>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-[#AA151B] transition-colors">
                        <Instagram size={18} />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Subtle Hint for Interaction */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 group-hover:opacity-0 transition-opacity">
              Hover to fan out
            </div>
          </div>
        </div>
      </div>
      
      {/* Utility Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .preserve-3d { transform-style: preserve-3d; }
      `}} />
    </section>
  );
};

export default Hero;