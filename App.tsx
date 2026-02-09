import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Timeline from './components/Timeline';
import Destinations from './components/Destinations';
import WhySpain from './components/WhySpain';
import SATV from './components/SATV';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-spain-charcoal bg-spain-offwhite min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ValueProps />
        <Timeline />
        <Destinations />
        <WhySpain />
        <SATV />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;