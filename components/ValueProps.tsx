import React, { useEffect, useRef, useState } from 'react';
import { FEATURES } from '../constants';
import { Feature } from '../types';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const ValueProps: React.FC = () => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 768) setScreenSize('mobile');
      else if (window.innerWidth < 1024) setScreenSize('tablet');
      else setScreenSize('desktop');
    };
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

    // Smart algorithm: Calculate optimal height based on content
  const calculateOptimalHeight = (feature: Feature) => {
    const items = feature.items;
    const totalChars = items.reduce((sum, item) => sum + item.length, 0);
    const avgCharsPerItem = totalChars / items.length;
    const itemCount = items.length;
    
    // Special handling for The Boosters (index 0) - make it bigger
    if (feature.title === 'The Boosters') {
      const baseHeight = 200; // Increased base height
      const heightPerChar = 0.5; // Increased char height
      const heightPerItem = 25; // Increased item height
      const calculatedHeight = baseHeight + (totalChars * heightPerChar) + (itemCount * heightPerItem);
      const minHeight = 300; // Increased min height
      const maxHeight = 450; // Increased max height
      return Math.max(minHeight, Math.min(maxHeight, calculatedHeight));
    }
    
    // Normal calculation for other cards
    const baseHeight = 160; // Reduced from 200
    const heightPerChar = 0.4; // Reduced from 0.4
    const heightPerItem = 15; // Reduced from 15
    
    const calculatedHeight = baseHeight + (totalChars * heightPerChar) + (itemCount * heightPerItem);
    const minHeight = 220; // Reduced from 220
    const maxHeight = 350; // Reduced from 350
    
    return Math.max(minHeight, Math.min(maxHeight, calculatedHeight));
  };

  // Smart algorithm: Calculate optimal grid based on content and screen size
  const getOptimalGrid = () => {
    const heights = FEATURES.map(f => calculateOptimalHeight(f));
    const maxHeight = Math.max(...heights);
    
    if (screenSize === 'mobile') {
      return {
        cols: 'grid-cols-1',
        rows: `auto-rows-[${maxHeight}px]`,
        gap: 'gap-3'
      };
    }
    
    if (screenSize === 'tablet') {
      return {
        cols: 'grid-cols-2',
        rows: `auto-rows-[${maxHeight}px]`,
        gap: 'gap-3'
      };
    }
    
    // Desktop: Smart 4-column layout with smaller heights
    return {
      cols: 'grid-cols-4',
      rows: `auto-rows-[${maxHeight}px]`,
      gap: 'gap-3'
    };
  };

  const optimalGrid = getOptimalGrid();
  return (
    <section id="offer" className="py-24 px-6 bg-spain-offwhite relative overflow-hidden">
      {/* Background Deep Blurs */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-spain-red opacity-[0.03] blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
            <span className="text-spain-green font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Your Study in Spain starter pack</span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-spain-charcoal mb-6 leading-none">
              What We <span className="font-serif italic font-normal text-spain-yellow">Offer</span>
            </h2>
            <div className="text-gray-500 text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto mb-6">
              <p className="mb-4">Spain Academy is your all-in-one onboarding kit for life in Spain. From visas and university admissions to cultural immersion and community support, we make sure you arrive prepared, feel at home, and have everything you need to thrive.</p>
            </div>
            
            {/* Visual Service Icons */}
            <div className="flex flex-wrap justify-center items-center gap-8 max-w-3xl mx-auto mb-8">
              <div className="flex flex-col items-center group">
                <svg className="w-5 h-5 text-gray-400 mb-2 group-hover:text-spain-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-xs text-gray-500 font-medium">Visas</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <svg className="w-5 h-5 text-gray-400 mb-2 group-hover:text-spain-yellow transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                <span className="text-xs text-gray-500 font-medium">Admissions</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <svg className="w-5 h-5 text-gray-400 mb-2 group-hover:text-spain-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-xs text-gray-500 font-medium">Housing</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <svg className="w-5 h-5 text-gray-400 mb-2 group-hover:text-spain-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-xs text-gray-500 font-medium">Culture</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <svg className="w-5 h-5 text-gray-400 mb-2 group-hover:text-spain-yellow transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6m0 0v6a2 2 0 01-2 2h-4a2 2 0 01-2-2V6" />
                </svg>
                <span className="text-xs text-gray-500 font-medium">Careers</span>
              </div>
              
              <div className="flex flex-col items-center group">
                <svg className="w-5 h-5 text-gray-400 mb-2 group-hover:text-spain-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-xs text-gray-500 font-medium">Community</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs font-sans font-light leading-relaxed max-w-lg mx-auto mt-3 italic opacity-70">
              You don't have to figure this out at 2AM on your own.
            </p>
        </div>

        {/* Dynamic Height Grid Layout */}
        <div className={`grid ${optimalGrid.cols} ${optimalGrid.rows} ${optimalGrid.gap}`}>
          {FEATURES.map((feature, index) => (
             <FlipCard key={index} feature={feature} index={index} screenSize={screenSize} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Separated Component for Flip Logic
interface FlipCardProps {
    feature: Feature;
    index: number;
    screenSize: 'mobile' | 'tablet' | 'desktop';
}

const FlipCard: React.FC<FlipCardProps> = ({ feature, index, screenSize }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    // Smart Responsive Grid: Adapts to content and screen size
    const getGridClass = (idx: number, screen: 'mobile' | 'tablet' | 'desktop') => {
        const contentLength = FEATURES[idx].items.length;
        const contentChars = FEATURES[idx].items.reduce((sum, item) => sum + item.length, 0);
        
        if (screen === 'mobile') {
            return 'col-span-1 row-span-1'; // All cards same size on mobile
        }
        
        if (screen === 'tablet') {
            // Tablet: 2-column layout
            if (contentLength >= 5) return 'col-span-2 row-span-1'; // The Boosters - wide
            if (contentLength >= 4) return 'col-span-2 row-span-1'; // Future Tools - wide
            return 'col-span-1 row-span-1'; // Others - standard
        }
        
        // Desktop: 4-column layout with smart sizing
        if (contentLength >= 5) return 'col-span-2 row-span-1'; // The Boosters - wide
        if (contentLength >= 4) return 'col-span-2 row-span-1'; // Future Tools - wide
        if (idx === 4) return 'col-span-2 row-span-1'; // Your Circle - make wider to fill space
        return 'col-span-1 row-span-1'; // Others - standard
    };

    // Calculate optimal text size based on content length
    const getOptimalTextSize = (contentChars: number) => {
        if (contentChars > 500) return 'text-sm'; // Very long content
        if (contentChars > 300) return 'text-xs'; // Long content
        return 'text-xs'; // Standard
    };
    
    // Original Theme Logic: Red(0,3), Yellow(1), Green(2,4)
    const getTheme = (idx: number) => {
        if (idx === 0 || idx === 3) return 'red';
        if (idx === 1) return 'yellow';
        return 'green';
    };
    
    const gridClass = getGridClass(index, screenSize);
    const theme = getTheme(index);
    const contentChars = feature.items.reduce((sum, item) => sum + item.length, 0);
    const optimalTextSize = getOptimalTextSize(contentChars);

    // Scroll Observer: Flips card when it enters the center of the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsFlipped(true);
                } else {
                    setIsFlipped(false);
                }
            },
            {
                threshold: 0.6,
                rootMargin: "-10% 0px -10% 0px" 
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
        };
    }, []);

    const gradients = {
        red: 'bg-gradient-to-br from-[#AA151B] via-[#8B1015] to-[#630B0F] text-white shadow-glow-red',
        yellow: 'bg-gradient-to-br from-[#F1BF00] via-[#D9A300] to-[#B38600] text-spain-charcoal shadow-glow-yellow',
        green: 'bg-gradient-to-br from-[#00A859] via-[#008542] to-[#005C2E] text-white shadow-glow-green',
    };

    const iconStyles = {
        red: 'text-white border-white/20',
        yellow: 'text-spain-charcoal border-spain-charcoal/10',
        green: 'text-white border-white/20',
    };

    const textColors = {
        red: 'text-white',
        yellow: 'text-spain-charcoal',
        green: 'text-white',
    };
    
    const backBorderColors = {
        red: 'border-spain-red/10',
        yellow: 'border-spain-yellow/20',
        green: 'border-spain-green/10',
    };
    
    const backIconColors = {
        red: 'bg-spain-red/10 text-spain-red',
        yellow: 'bg-spain-yellow/20 text-spain-charcoal',
        green: 'bg-spain-green/10 text-spain-green',
    };
    
    const buttonStyles = {
        red: 'bg-spain-red text-white hover:bg-spain-charcoal',
        yellow: 'bg-spain-yellow text-spain-charcoal hover:bg-spain-charcoal hover:text-white',
        green: 'bg-spain-green text-white hover:bg-spain-charcoal',
    };

    return (
        <div 
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group perspective-1000 cursor-pointer ${gridClass} relative`}
        >
            {/* Background themed shadow */}
            <div className={`absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] transition-all duration-1000 ease-in-out ${
                theme === 'red' ? 'bg-red-500/20 blur-xl' :
                theme === 'yellow' ? 'bg-yellow-500/20 blur-xl' :
                'bg-green-500/20 blur-xl'
            } -z-10 ${
                isHovered ? 'scale-105 opacity-30' : 'scale-100 opacity-20'
            }`}></div>
            <div className={`
                relative w-full h-full transition-all duration-1000 transform-style-3d
                ${isHovered ? '' : (isFlipped ? 'rotate-y-180' : '')}
            `}>
                
                {/* --- FRONT OF CARD --- */}
                <div className={`
                    absolute inset-0 backface-hidden rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 flex flex-col justify-between
                    ${gradients[theme]}
                `}>
                    <div className="flex justify-between items-start">
                        <div className={`
                            w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-[1rem] sm:rounded-[1.2rem] lg:rounded-[1.5rem] flex items-center justify-center glass
                            ${iconStyles[theme]}
                        `}>
                            <feature.icon size={24} strokeWidth={1.5} />
                        </div>
                        <span className={`text-[6rem] sm:text-[7rem] lg:text-[8rem] font-serif italic font-black absolute -top-12 sm:-top-14 lg:-top-16 -right-4 sm:-right-5 lg:-right-6 opacity-[0.08] select-none`}>
                            {index + 1}
                        </span>
                    </div>

                    <div className="mt-auto">
                         <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 tracking-tighter leading-tight">
                            {feature.title}
                        </h3>
                        <p className={`text-[10px] sm:text-xs uppercase tracking-widest font-bold opacity-60 mt-4 flex items-center gap-2
                             ${textColors[theme]}
                        `}>
                            Hover to reveal <ArrowUpRight size={12} />
                        </p>
                    </div>

                     {/* Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50"></div>
                </div>

                {/* --- BACK OF CARD --- */}
                <div className={`
                    absolute inset-0 backface-hidden rotate-y-180 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-6 lg:p-8 flex flex-col items-start text-left
                    bg-white border-2
                    ${backBorderColors[theme]}
                    shadow-xl overflow-hidden
                `}>
                     <div className="flex items-center gap-4 mb-6 w-full border-b border-gray-100 pb-4">
                        <div className={`
                            w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center
                            ${backIconColors[theme]}
                        `}>
                            <feature.icon size={16} strokeWidth={2} />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-spain-charcoal tracking-tight">
                            {feature.title}
                        </h3>
                     </div>

                    <ul className="space-y-3 mb-4 w-full">
                        {feature.items?.map((item: string, i: number) => (
                            <li key={i} className={`flex items-start font-medium leading-relaxed ${optimalTextSize} text-spain-charcoal/80`}>
                                <CheckCircle2 size={12} className={`mr-2 sm:mr-3 mt-0.5 shrink-0 ${theme === 'green' ? 'text-spain-green' : theme === 'yellow' ? 'text-spain-yellow' : 'text-spain-red'}`} />
                                <span className="leading-snug">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Bottom decorative line */}
                    <div className="h-px bg-spain-charcoal/20 mt-4"></div>
                    
                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grains.vercel.app/grain.png')] pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

export default ValueProps;