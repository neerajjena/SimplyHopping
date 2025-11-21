
import React, { useState } from 'react';
import { ATTRACTIONS_DATA } from '../constants';

const Attractions: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState('south');

  const currentRegion = ATTRACTIONS_DATA.find(r => r.id === activeRegion) || ATTRACTIONS_DATA[0];

  return (
    <section id="attractions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-viet-green mb-4 font-serif">Explore the Island</h2>
          <p className="text-slate-600">Discover the magic of South, Central, and North Phu Quoc.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-viet-ivory p-1 rounded-2xl flex flex-wrap justify-center gap-2 border border-slate-100 shadow-inner max-w-full">
            {ATTRACTIONS_DATA.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`px-4 py-2 md:px-6 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeRegion === region.id
                    ? 'bg-viet-green text-white shadow-md'
                    : 'text-slate-500 hover:text-viet-green'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          {currentRegion.attractions.map((spot, idx) => (
            <div key={idx} className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img 
                  src={spot.image} 
                  alt={spot.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white font-serif drop-shadow-md">{spot.name}</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-600 mb-4 leading-relaxed">{spot.description}</p>
                
                {spot.details && spot.details.length > 0 && (
                  <ul className="mb-4 space-y-2 bg-viet-ivory/50 p-3 rounded-lg border border-slate-100">
                    {spot.details.map((detail, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start">
                         <span className="mr-2 text-viet-green font-bold">•</span> 
                         <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-4 border-t border-slate-100">
                   {spot.price ? (
                      <div className="inline-block bg-viet-yellow/20 text-yellow-800 px-3 py-1.5 rounded-md text-xs font-bold border border-viet-yellow/30">
                        {spot.price}
                      </div>
                   ) : (
                      <div className="h-8"></div> 
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

export default Attractions;
