import React from 'react';
import { GraduationCap, Globe, Briefcase, Plane, Sun, Wallet } from 'lucide-react';

const WhySpain: React.FC = () => {
  return (
    <section id="why-spain" className="py-24 px-6 bg-spain-offwhite relative">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-spain-yellow/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-spain-red/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-spain-green font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Why Spain?</span>
          <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-spain-charcoal leading-none mb-6">
            <span className="text-spain-red font-heading">World-Class</span> <span className="font-heading">Education</span> <br />
            <span className="font-serif italic font-normal text-spain-yellow">Starting from €700 a Year</span>
          </h2>
          <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Internationally recognized degrees, 99% tuition waiver in Andalusia, and mobility programs that open doors across Europe.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Education */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-soft hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-spain-yellow/20">
            <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-spain-yellow to-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <GraduationCap size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-spain-charcoal mb-4 tracking-tight">Education Excellence</h3>
            <ul className="space-y-3 text-gray-500 text-sm font-medium">
              <li className="flex items-start gap-3">
                <span className="text-spain-green mt-1">✓</span>
                <span>Internationally recognized degrees across Europe</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-spain-green mt-1">✓</span>
                <span>99% tuition waiver in Andalusia</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-spain-green mt-1">✓</span>
                <span>Erasmus+ and SICUE mobility programs</span>
              </li>
            </ul>
          </div>

          {/* Career */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-soft hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-spain-red/20">
            <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-spain-red to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Briefcase size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-spain-charcoal mb-4 tracking-tight">Real Life & Career</h3>
            <ul className="space-y-3 text-gray-500 text-sm font-medium">
              <li className="flex items-start gap-3">
                <span className="text-spain-green mt-1">✓</span>
                <span>Part-time work during studies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-spain-green mt-1">✓</span>
                <span>Post-study work visa routes available</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-spain-green mt-1">✓</span>
                <span>Startup hubs and EU innovation programs</span>
              </li>
            </ul>
          </div>

          {/* Lifestyle */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-soft hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-spain-green/20">
            <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-spain-green to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Sun size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-spain-charcoal mb-4 tracking-tight">Lifestyle & Culture</h3>
            <ul className="space-y-3 text-gray-500 text-sm font-medium">
              <li className="flex items-start gap-3">
                <span className="text-spain-green mt-1">✓</span>
                <span>Mediterranean climate & excellent healthcare</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-spain-green mt-1">✓</span>
                <span>Affordable living vs other EU capitals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-spain-green mt-1">✓</span>
                <span>Travel to 20+ EU countries easily</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Note Section */}
        <div className="text-center mt-12 px-6">
          <p className="text-sm text-gray-400 italic max-w-2xl mx-auto">
            Note: Fees, waivers, and work rules can change; we'll guide you with the latest info for your case.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySpain;
