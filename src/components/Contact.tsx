import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-32 px-6 md:px-12 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-teal-300 font-mono mb-4">What's Next?</h2>
        <h3 className="text-4xl font-bold text-gray-200 mb-6">Get In Touch</h3>
        <p className="text-gray-400 mb-12">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href="mailto:aryankumar27082@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 border border-teal-300 text-teal-300 rounded 
                   hover:bg-teal-300/10 transition-colors font-mono"
        >
          <Mail size={20} />
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;