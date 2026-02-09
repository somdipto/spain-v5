import React from 'react';
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-spain-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="Spain Academy Logo" 
                className="h-12 sm:h-14 w-auto"
              />
            </div>
            <p className="text-gray-400 text-base max-w-sm leading-relaxed mb-6 font-light">
              Your Study-in-Spain Starter Kit. We don't just move students; we build futures.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-spain-green transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-spain-green transition-all">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-spain-green transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-spain-green transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-spain-green uppercase tracking-wider text-xs">Essentials</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Visa Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Housing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Boosters</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Future-Proof Tools</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-spain-green uppercase tracking-wider text-xs">Content</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Real Life in Spain</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SA.TV</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold mb-4 text-spain-green uppercase tracking-wider text-xs">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors text-white">WhatsApp +34 624 80 20 81</a></li>
                <li><a href="mailto:team@thespainacademy.es" className="hover:text-white transition-colors">team@thespainacademy.es</a></li>
                <li className="pt-2 text-xs opacity-60">Spain Academy S.L.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; 2024 Spain Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;