
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { SECTIONS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: 'Essentials', id: SECTIONS.ESSENTIALS },
    { label: 'Getting There', id: SECTIONS.TRANSPORT },
    { label: 'Attractions', id: SECTIONS.ATTRACTIONS },
    { label: 'Shows', id: SECTIONS.SHOWS },
    { label: 'Food & Veg', id: SECTIONS.FOOD },
    { label: 'Stay', id: SECTIONS.STAY },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-viet-ivory/95 backdrop-blur-md shadow-md py-3 border-b border-viet-green/10' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={`text-xl font-bold font-serif ${scrolled ? 'text-viet-green' : 'text-white'}`}>SimplyHopping</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-medium hover:text-viet-yellow transition-colors ${scrolled ? 'text-slate-700 hover:text-viet-green' : 'text-white/90'}`}
            >
              {link.label}
            </button>
          ))}
          <a 
            href="https://www.instagram.com/simplyhopping" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md ${
              scrolled 
                ? 'bg-viet-green text-white hover:bg-[#008a44]' 
                : 'bg-white text-viet-green hover:bg-viet-ivory'
            }`}
          >
            <Instagram size={16} />
            <span>Follow</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-viet-green' : 'text-white'} /> : <Menu className={scrolled ? 'text-viet-green' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-viet-ivory shadow-lg py-4 px-4 flex flex-col space-y-4 border-t border-viet-green/10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-slate-800 font-medium py-2 border-b border-slate-200 hover:text-viet-green"
            >
              {link.label}
            </button>
          ))}
          <a 
            href="https://www.instagram.com/simplyhopping" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-left text-viet-green font-bold py-2 flex items-center gap-2"
          >
            <Instagram size={18} />
            Follow us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
