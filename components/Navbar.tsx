import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';
import ComingSoonRibbon from './ComingSoonRibbon';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-3 sm:top-4 left-0 w-full z-50 px-4 sm:px-6 md:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
            {/* Logo Group */}
            <div 
                className="flex items-center justify-center cursor-pointer group glass px-3 sm:px-4 py-2 rounded-full" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <img 
                    src="/logo.png" 
                    alt="Spain Academy Logo" 
                    className="h-12 sm:h-14 lg:h-16 w-auto"
                />
            </div>

            {/* Nav Pill */}
            <nav className={`
                hidden lg:flex items-center space-x-1 glass rounded-full px-2 py-1.5 transition-all duration-500
                ${isScrolled ? 'shadow-premium px-4' : ''}
            `}>
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="relative">
            <a 
              href={`#${item.href}`}
              className="px-4 sm:px-6 pr-8 pt-2.5 pb-3 rounded-full text-[11px] sm:text-[13px] font-bold text-gray-700 hover:text-spain-charcoal hover:bg-white/50 transition-all uppercase tracking-widest"
            >
              {item.label}
            </a>
            {/* show a small bottom-right badge for blog and content without overlapping text */}
            {(item.href === 'blog' || item.href === 'content') && (
              <ComingSoonRibbon size="small" rotateDeg={25} className="translate-x-2 -translate-y-3" />
            )}
          </div>
        ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
                <a href="https://cal.eu/spain-academy/fc" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 text-xs font-bold text-white bg-spain-green rounded-full shadow-lg shadow-spain-green/25 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-spain-green/40 focus:outline-none border-0">
                    {/* Background gradient that slides in */}
                    <div className="absolute inset-0 bg-gradient-to-r from-spain-green via-spain-greenDark to-spain-green opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                    
                    {/* Button content */}
                    <span className="relative z-10 flex items-center text-xs sm:text-xs">
                        Book Consultation
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110">
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                        </svg>
                    </span>
                    
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
                        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                    </div>
                </a>
            </div>

            {/* Mobile Button */}
            <div className="lg:hidden">
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-spain-charcoal hover:bg-gray-50 transition-all"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[45] glass flex flex-col items-center justify-center px-4 sm:px-6">
          <div className="flex flex-col space-y-6 sm:space-y-8 text-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={`#${item.href}`}
                onClick={() => setIsOpen(false)}
                className="text-4xl sm:text-5xl font-serif italic text-spain-charcoal hover:text-spain-red transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-8 sm:pt-12">
              <Button fullWidth variant="green" size="lg" onClick={() => setIsOpen(false)}>
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;