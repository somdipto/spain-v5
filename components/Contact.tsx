import React from 'react';
import ContactForm from './ContactForm';
import { MessageCircle, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-spain-offwhite relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-spain-green/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Empty */}
          <div></div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
