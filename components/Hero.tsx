import React from 'react';
import Button from './Button';
import { HERO_CONTENT } from '../constants';
import { Instagram, MapPin } from 'lucide-react';

const STUDENTS = [
  {
    id: 1,
    name: "Elena Rodriguez",
    handle: "@elena.in.madrid",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2787&auto=format&fit=crop",
    location: "Madrid",
    rotate: "-rotate-[6deg] md:-rotate-[10deg] group-hover:-rotate-[15deg] md:group-hover:-rotate-[18deg]",
    translate: "-translate-x-10 sm:-translate-x-14 md:-translate-x-20 lg:-translate-x-24 translate-y-2 group-hover:-translate-x-20 sm:group-hover:-translate-x-28 md:group-hover:-translate-x-36 lg:group-hover:-translate-x-44",
    glow: "group-hover:shadow-glow-yellow",
    zIndex: "z-10",
  },
  {
    id: 2,
    name: "Marco Silva",
    handle: "@marco.vlc",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop",
    location: "Valencia",
    rotate: "rotate-[6deg] md:rotate-[10deg] group-hover:rotate-[15deg] md:group-hover:rotate-[18deg]",
    translate: "translate-x-10 sm:translate-x-14 md:translate-x-20 lg:translate-x-24 translate-y-2 group-hover:translate-x-16 sm:group-hover:translate-x-24 md:group-hover:translate-x-32 lg:group-hover:translate-x-40",
    glow: "group-hover:shadow-glow-yellow",
    zIndex: "z-10",
  },
  {
    id: 3,
    name: "Sarah Chen",
    handle: "@sarah.travels",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop",
    location: "Barcelona",
    rotate: "rotate-0",
    translate: "group-hover:-translate-y-10",
    glow: "group-hover:shadow-glow-red",
    zIndex: "z-20",
  }
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 sm:pt-28 lg:pt-24 lg:pb-0 overflow-hidden bg-spain-offwhite">
        {/* Subtle Ambient Background Elements */}
        <div className="absolute top-[-5%] right-[5%] w-[40%] h-[40%] bg-spain-yellow opacity-[0.03] blur-[140px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-5%] left-[5%] w-[40%] h-[40%] bg-spain-red opacity-[0.03] blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Text Content Area */}
                <div className="lg:col-span-6 xl:col-span-7 animate-fade-up text-center lg:text-left z-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] font-heading font-semibold tracking-tighter text-spain-charcoal leading-[0.9] mb-6 lg:mb-8">
                        The only <br className="hidden xl:block" />
                        <span className="font-serif italic font-normal text-spain-yellow">
                            Study-in-Spain
                        </span> <br />
                        program for <br className="hidden md:block xl:hidden" />
                        {/* Swapped Green for Red as requested */}
                        <span className="text-spain-red">Southeastern Asians</span>.
                    </h1>
                    
                    <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 mb-6 lg:mb-8 leading-relaxed font-light font-sans">
                        {HERO_CONTENT.subheading}
                    </p>

                    {/* Value Statement */}
                    <p className="text-xs text-spain-green font-medium mb-6 max-w-md mx-auto lg:mx-0">
                        Visas · Admissions · Housing · Culture · Careers · Community
                    </p>

                    {/* Social Proof */}
                    <p className="text-xs text-gray-400 mb-6 italic">
                        Guided by alumni living in Spain — real answers, real timelines.
                    </p>

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

                {/* Adaptive Card Stack Area */}
                <div className="lg:col-span-6 xl:col-span-5 relative h-[250px] sm:h-[320px] lg:h-[580px] flex items-center justify-center perspective-2000 group mt-6 lg:mt-0">
                    <div className="relative w-[120px] sm:w-[160px] lg:w-[300px] h-[180px] sm:h-[240px] lg:h-[420px]">
                        {STUDENTS.map((student) => (
                            <div 
                                key={student.id}
                                className={`
                                    absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] glass p-1.5 shadow-premium
                                    transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom
                                    ${student.zIndex}
                                    ${student.rotate}
                                    ${student.translate}
                                    ${student.glow}
                                `}
                            >
                                <div className="relative w-full h-full rounded-[1.4rem] lg:rounded-[2.1rem] overflow-hidden bg-gray-100">
                                    <img 
                                        src={student.image} 
                                        alt={student.name} 
                                        className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-spain-charcoal/95 via-spain-charcoal/20 to-transparent"></div>
                                    
                                    <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 text-white">
                                        <div className="flex items-center space-x-2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150 transform translate-y-3 group-hover:translate-y-0">
                                            <Instagram size={12} className="text-spain-yellow" />
                                            <span className="text-[8px] font-black tracking-[0.2em] uppercase text-white/90">
                                                {student.handle}
                                            </span>
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-serif italic leading-tight mb-1">{student.name}</h3>
                                        <div className="flex items-center text-[8px] font-bold uppercase tracking-[0.3em] text-white/60">
                                            <MapPin size={10} className="mr-2 text-spain-red" />
                                            {student.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;