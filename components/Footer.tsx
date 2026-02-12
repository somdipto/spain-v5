import React from 'react';
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-spain-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <img 
                src="https://drive.google.com/thumbnail?id=17bFr0BSoDeExdJp4Cwrf1ndQB3iJNyHQ&sz=w200" 
                alt="Spain Academy Dark Logo" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-6 font-light">
              Your Study-in-Spain Starter Kit. We don't just move students; we build futures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-spain-green transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-spain-green transition-all duration-300">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-spain-green transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-spain-green transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Links grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-spain-green uppercase tracking-wider text-xs">Essentials</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Visa Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Housing</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Boosters</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Future-Proof Tools</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-spain-green uppercase tracking-wider text-xs">Content</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Real Life in Spain</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">SA.TV</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-spain-green uppercase tracking-wider text-xs">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors duration-300 text-white font-medium">WhatsApp +34 624 80 20 81</a></li>
                <li><a href="mailto:team@thespainacademy.es" className="hover:text-white transition-colors duration-300">team@thespainacademy.es</a></li>
                <li className="pt-2 text-xs opacity-60">Spain Academy S.L.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2024 Spain Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;