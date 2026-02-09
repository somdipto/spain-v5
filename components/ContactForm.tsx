import React from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="text-center">
      <p className="text-gray-500 mb-8">Contact form coming soon.</p>
      <div className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-spain-charcoal rounded-full shadow-lg hover:scale-105 transition-all duration-300 opacity-50 cursor-not-allowed" disabled>
        <Send size={18} className="mr-2" />
        Notify When Available
      </div>
    </div>
  );
};

export default ContactForm;
