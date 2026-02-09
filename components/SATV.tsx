import React from 'react';
import { Play, Headphones, ArrowUpRight, Clock } from 'lucide-react';

const SATV: React.FC = () => {
  const videos = [
    { title: "First 30 Days in Spain", duration: "12:34", views: "2.4K" },
    { title: "Visa Process Explained", duration: "8:45", views: "1.8K" },
    { title: "Student Stories: Melina", duration: "15:20", views: "3.1K" }
  ];

  return (
    <section id="satv" className="py-24 px-6 bg-spain-charcoal relative overflow-hidden">
      {/* Large Background Coming Soon Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="relative">
          <span className="text-[12vw] md:text-[8vw] font-black tracking-[0.2em] text-white/[0.03] uppercase whitespace-nowrap">
            Coming Soon
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-spain-red/20 to-transparent blur-3xl"></div>
        </div>
      </div>

      {/* Animated pulse rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full border border-spain-yellow/10 animate-ping absolute"></div>
        <div className="w-[300px] h-[300px] rounded-full border border-spain-red/10 animate-ping absolute delay-300"></div>
        <div className="w-[200px] h-[200px] rounded-full border border-spain-green/10 animate-ping absolute delay-500"></div>
      </div>
      
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-spain-red/10 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-spain-yellow font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Watch & Listen</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-none mb-6">
            SA.TV & <span className="font-serif italic font-normal text-spain-red">Podcast</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Empowering Southeast Asian voices — student journeys, practical guides, and culture stories.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {videos.map((video, index) => (
            <div key={index} className="group relative aspect-video bg-spain-charcoal/50 rounded-[2rem] overflow-hidden border border-white/10 hover:border-spain-yellow/30 transition-all duration-500 cursor-pointer opacity-40">
              <div className="absolute inset-0 bg-gradient-to-t from-spain-charcoal via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full bg-spain-red/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Play size={24} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{video.duration}</span>
                  <span>{video.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
          <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-spain-charcoal rounded-full shadow-lg hover:scale-105 transition-all duration-300 opacity-50 cursor-not-allowed" disabled>
            <Play size={20} className="mr-2" />
            Watch on YouTube
            <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-transparent border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 opacity-50 cursor-not-allowed" disabled>
            <Headphones size={20} className="mr-2" />
            Listen to Podcast
          </button>
        </div>
      </div>
    </section>
  );
};

export default SATV;
