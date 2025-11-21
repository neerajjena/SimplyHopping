
import React from 'react';
import { Ticket, Clock, MapPin, Lightbulb, Calendar } from 'lucide-react';
import { SHOWS_LIST } from '../constants';

const Shows: React.FC = () => {
  return (
    <section id="shows" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-viet-yellow mb-4 font-serif">Spectacular Shows & Musicals</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Experience world-class entertainment in Phu Quoc. From multimedia extravaganzas to cultural masterpieces.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SHOWS_LIST.map((show, idx) => (
            <div key={idx} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl flex flex-col group hover:border-viet-yellow/50 transition-all">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                 <img 
                   src={show.image} 
                   alt={show.name} 
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                 <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white font-serif drop-shadow-md">{show.name}</h3>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-300 mb-6 leading-relaxed">{show.description}</p>
                
                <div className="space-y-4 mt-auto">
                  {show.details && show.details.map((detail, i) => {
                    // Simple heuristic to choose icon based on text
                    let Icon = Lightbulb;
                    if (detail.toLowerCase().includes('duration')) Icon = Clock;
                    if (detail.toLowerCase().includes('schedule') || detail.toLowerCase().includes('monday')) Icon = Calendar;
                    if (detail.toLowerCase().includes('location')) Icon = MapPin;

                    return (
                      <div key={i} className={`flex items-start gap-3 text-sm ${detail.includes('Tip:') ? 'bg-viet-green/10 p-3 rounded-lg border border-viet-green/20' : ''}`}>
                        <Icon size={18} className={`mt-0.5 flex-shrink-0 ${detail.includes('Tip:') ? 'text-viet-green' : 'text-viet-yellow'}`} />
                        <span className={detail.includes('Tip:') ? 'text-viet-ivory italic' : 'text-slate-300'}>
                           {detail.replace('Tip:', '').trim()}
                        </span>
                      </div>
                    );
                  })}

                  {/* Price */}
                  {show.price && (
                    <div className="pt-4 border-t border-slate-700 flex items-center text-viet-yellow font-bold">
                      <Ticket size={18} className="mr-2" />
                      <span>{show.price}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shows;
