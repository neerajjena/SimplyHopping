
import React from 'react';
import { ChevronDown, Instagram } from 'lucide-react';
import { SECTIONS } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1693294603830-f44c9511d643?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white z-10">
        <span className="text-viet-yellow font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up bg-black/20 px-4 py-1 rounded-full backdrop-blur-sm">Ultimate Travel Guide for Indian Tourists by SimplyHopping</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up delay-100 font-serif">
          Phu Quoc, Vietnam
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl text-white/95 mb-8 animate-fade-in-up delay-200 font-light drop-shadow-md">
          The ultimate tropical getaway. Remarkable nature, pristine beaches, and dedicated cultural legacy. Truly "Heaven on Earth".
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-300">
          <button 
            onClick={() => document.getElementById(SECTIONS.ESSENTIALS)?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-viet-green hover:bg-[#007a3d] text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2 border-2 border-transparent hover:border-viet-yellow"
          >
            <span>Explore the Guide</span>
            <ChevronDown size={18} />
          </button>

          <a 
            href="https://www.instagram.com/simplyhopping/reels/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl flex items-center space-x-2 border-2 border-white/30 hover:border-white"
          >
            <Instagram size={18} />
            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
