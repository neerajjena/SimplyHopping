
import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramGallery: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-viet-green/10">
      <div className="container mx-auto px-4">
        <div className="bg-viet-ivory rounded-2xl p-8 md:p-12 border border-viet-green/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-800 font-serif mb-3 flex items-center justify-center md:justify-start gap-3">
              <Instagram className="text-viet-green" size={32} />
              @simplyhopping
            </h2>
            <p className="text-slate-600 text-lg">
              Join our community! Follow our journey through Phu Quoc for daily inspiration, travel tips, and a closer look at the island's hidden gems.
            </p>
          </div>
          <a 
            href="https://www.instagram.com/simplyhopping/reels/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-viet-green text-white px-8 py-4 rounded-full font-bold hover:bg-[#007a3d] transition-all transform hover:scale-105 shadow-lg"
          >
            <span>Visit Instagram Profile</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
