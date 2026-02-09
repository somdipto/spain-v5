import React, { useEffect, useRef, useState } from 'react';
import { FEATURES } from '../constants';
import { Feature } from '../types';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const ValueProps: React.FC = () => {
  return (
    <section id="offer" className="py-24 px-6 bg-spain-offwhite relative overflow-hidden">
      {/* Background Deep Blurs */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-spain-red opacity-[0.03] blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
            <span className="text-spain-green font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Exquisite Support</span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-spain-charcoal mb-6 leading-none">
              What We <span className="font-serif italic font-normal text-spain-yellow">Offer</span>
            </h2>
            <p className="text-gray-500 text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto">
              Our comprehensive suite of services is designed to handle the intricate complexities of European relocation.
            </p>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[280px] sm:auto-rows-[300px] md:auto-rows-[320px]">
          {FEATURES.map((feature, index) => (
             <FlipCard key={index} feature={feature} index={index} />
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
}

const FlipCard: React.FC<FlipCardProps> = ({ feature, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    // Asymmetric grid spans: 0 (wide), 1 (std), 2 (std), 3 (wide), 4 (std)
    const getGridClass = (idx: number) => {
        if (idx === 0) return 'sm:col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1';
        if (idx === 1) return 'sm:col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-2';
        if (idx === 2) return 'sm:col-span-1 md:col-span-1 lg:col-span-1';
        if (idx === 3) return 'sm:col-span-1 md:col-span-1 lg:col-span-2';
        return 'sm:col-span-1 md:col-span-1 lg:col-span-1';
    };
    
    // Theme Logic: Red (0, 3), Yellow (1), Green (2, 4)
    const getTheme = (idx: number) => {
        if (idx === 1) return 'yellow';
        if (idx === 2 || idx === 4) return 'green';
        return 'red';
    };
    
    const theme = getTheme(index);

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
            className={`group perspective-1000 cursor-pointer min-h-[280px] sm:min-h-[300px] md:min-h-[320px] ${getGridClass(index)}`}
        >
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
                            Tap to reveal <ArrowUpRight size={12} />
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

                    <ul className="space-y-3 mb-8 w-full">
                        {feature.items?.map((item: string, i: number) => (
                            <li key={i} className="flex items-start text-xs sm:text-sm font-medium text-spain-charcoal/80">
                                <CheckCircle2 size={14} className={`mr-2 sm:mr-3 mt-0.5 shrink-0 ${theme === 'green' ? 'text-spain-green' : theme === 'yellow' ? 'text-spain-yellow' : 'text-spain-red'}`} />
                                <span className="leading-snug">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <button className={`
                        mt-auto w-full py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-all
                        ${buttonStyles[theme]}
                    `}>
                        More Info
                    </button>
                    
                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grains.vercel.app/grain.png')] pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

export default ValueProps;