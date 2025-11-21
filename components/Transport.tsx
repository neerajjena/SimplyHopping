import React from 'react';
import { Plane, Bike, Car, MapPin } from 'lucide-react';
import { TRANSPORT_OPTS } from '../constants';

const Transport: React.FC = () => {
  return (
    <section id="transport" className="py-20 bg-viet-ivory relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-viet-yellow/10 rounded-full -mr-32 -mt-32 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-viet-green/5 rounded-full -ml-48 -mb-48 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Getting There */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 font-serif flex items-center">
              <Plane className="mr-3 text-viet-green" /> Getting to Phu Quoc
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="relative border-l-2 border-viet-green/30 ml-3 pl-8 space-y-8">
                <div className="relative">
                  <span className="absolute -left-[41px] bg-viet-green h-6 w-6 rounded-full border-4 border-white shadow-sm"></span>
                  <h4 className="font-bold text-slate-800">Depart India</h4>
                  <p className="text-sm text-slate-500">Direct flights from Delhi, Mumbai, Bangalore, Chennai to major Vietnam hubs.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[41px] bg-viet-green h-6 w-6 rounded-full border-4 border-white shadow-sm"></span>
                  <h4 className="font-bold text-slate-800">Transit Hubs</h4>
                  <p className="text-sm text-slate-500">Ho Chi Minh City (SGN) or Hanoi (HAN).</p>
                  <div className="mt-2 inline-block bg-viet-ivory px-3 py-1 rounded text-xs font-medium text-slate-600 border border-slate-100">
                    Connecting Flight: approx 1 - 1.5 hours
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute -left-[41px] bg-viet-green h-6 w-6 rounded-full border-4 border-white shadow-sm"></span>
                  <h4 className="font-bold text-slate-800">Arrival (PQC)</h4>
                  <p className="text-sm text-slate-500">Phu Quoc International Airport. Pick a hotel with free airport pickup!</p>
                </div>
              </div>
              <div className="mt-8 bg-viet-ivory p-5 rounded-xl border border-viet-yellow/30">
                <p className="text-sm font-bold text-slate-700 mb-1">Operating Airlines:</p>
                <p className="text-sm text-slate-600">VietJet Air, Vietnam Airlines, Indigo, AirAsia.</p>
              </div>
            </div>
          </div>

          {/* Getting Around */}
          <div className="lg:w-1/2">
             <h2 className="text-3xl font-bold text-slate-800 mb-6 font-serif flex items-center">
              <MapPin className="mr-3 text-viet-yellow" /> Getting Around
            </h2>
            <div className="grid gap-4">
              {TRANSPORT_OPTS.map((opt, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between group hover:shadow-md transition-all border border-slate-100 hover:border-viet-green/30">
                  <div className="flex items-center">
                    <div className="bg-viet-ivory p-3 rounded-full mr-4 group-hover:bg-viet-green/10 transition-colors">
                      {opt.mode.includes('Bike') || opt.mode.includes('Bicycle') ? <Bike size={20} className="text-slate-700 group-hover:text-viet-green" /> : <Car size={20} className="text-slate-700 group-hover:text-viet-green" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{opt.mode}</h4>
                      <p className="text-xs text-slate-500 max-w-xs mt-1 leading-snug">{opt.description}</p>
                    </div>
                  </div>
                  <div className="text-right min-w-[100px]">
                    {opt.costVND && <p className="text-sm font-bold text-viet-green">{opt.costVND}</p>}
                    {opt.costINR && <p className="text-xs text-slate-400">{opt.costINR}</p>}
                    {opt.details && <span className="inline-block px-2 py-1 bg-viet-yellow/20 text-yellow-800 text-[10px] font-bold uppercase rounded-md">{opt.details}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transport;