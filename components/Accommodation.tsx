import React from 'react';
import { Bed } from 'lucide-react';
import { ACCOMMODATIONS } from '../constants';

const Accommodation: React.FC = () => {
  return (
    <section id="stay" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif flex justify-center items-center">
             Recommended Stays
          </h2>
          <p className="text-slate-600">Handpicked options for comfort and views in North and South Island.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ACCOMMODATIONS.map((hotel, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-slate-100 flex flex-col group">
              <div className="h-56 w-full overflow-hidden">
                 <img src={hotel.image} alt={hotel.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 flex-grow">
                <span className="text-white bg-viet-green px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">
                  {hotel.location}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{hotel.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{hotel.description}</p>
              </div>
              <div className="px-6 py-4 bg-viet-ivory border-t border-slate-100">
                <div className="flex items-center text-slate-500 text-xs font-medium uppercase tracking-wide">
                  <Bed size={16} className="mr-2 text-viet-yellow" />
                  <span>Recommended Stay</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;