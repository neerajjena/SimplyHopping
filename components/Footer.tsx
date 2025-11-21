
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <h2 className="text-white text-2xl font-serif mb-4">SimplyHopping</h2>
        <p className="max-w-md mx-auto text-sm mb-8">
          Information curated specifically for Indian tourists to ensure a hassle-free, memorable experience on Pearl Island.
        </p>
        
        <a 
          href="https://www.instagram.com/simplyhopping/reels/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg mb-8"
        >
          <Instagram size={20} />
          <span>Follow on Instagram</span>
        </a>

        <div className="border-t border-slate-800 pt-8 text-xs w-full">
          &copy; {new Date().getFullYear()} SimplyHopping. All rights reserved. 
          <br className="md:hidden" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
