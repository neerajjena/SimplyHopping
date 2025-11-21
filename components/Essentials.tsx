import React from 'react';
import { Calendar, CreditCard, Smartphone, CheckCircle2, Globe } from 'lucide-react';

const Essentials: React.FC = () => {
  return (
    <section id="essentials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-viet-green mb-4 font-serif">Travel Essentials</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Everything Indian tourists need to know before landing in paradise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Weather */}
          <div className="bg-viet-ivory p-6 rounded-2xl border border-viet-green/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-viet-yellow/20 p-3 rounded-full text-yellow-800 mr-4">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Best Time to Visit</h3>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <p><strong className="text-viet-green">Nov - Apr (Dry Season):</strong> Best time. 25-35°C. Calm waters. March/April are hottest.</p>
              <p><strong className="text-slate-500">May - Oct (Wet Season):</strong> High rainfall, storms possible. Avg 28°C. Humidity 85-90%. Good for cheaper rates.</p>
              <p className="italic text-xs bg-white p-2 rounded border border-slate-100 mt-2">Travel Tip - December to March is especially popular, so book accommodations and activities in advance during this time. If you don’t mind occasional rain and want a quieter, more affordable trip, early May or late October can also be a good choice.</p>
            </div>
          </div>

          {/* Visa */}
          <div className="bg-viet-ivory p-6 rounded-2xl border border-viet-green/10 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-viet-green/10 p-3 rounded-full text-viet-green mr-4">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Visa Policy</h3>
            </div>
            <div className="bg-white p-4 rounded-lg border border-viet-green/20 mb-3">
              <h4 className="font-bold text-viet-green mb-1">Visa Exemption!</h4>
              <p className="text-sm text-slate-700">Indian citizens get <span className="font-bold text-viet-green">30 days Visa-Free</span> if arriving directly at Phu Quoc International Airport from another country (e.g., via Singapore, Bangkok, Kuala Lumpur).</p>
            </div>
            <div className="text-sm text-slate-600 space-y-2">
               <p><strong>Standard E-Visa:</strong> Required if entering via mainland Vietnam (Hanoi/HCMC).</p>
               <a href="https://evisa.gov.vn" target="_blank" rel="noreferrer" className="text-viet-green underline flex items-center gap-1 text-xs">
                 <Globe size={12}/> Apply at evisa.gov.vn (Takes 3-5 days)
               </a>
            </div>
          </div>

          {/* Currency */}
          <div className="bg-viet-ivory p-6 rounded-2xl border border-viet-green/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-viet-yellow/20 p-3 rounded-full text-yellow-800 mr-4">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Currency & Sim</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start"><span className="mr-2 text-viet-green">•</span> Exchange small amount of INR to VND for emergency.</li>
              <li className="flex items-start"><span className="mr-2 text-viet-green">•</span> <strong>Avoid Airport Exchange:</strong> Rates are poor.</li>
              <li className="flex items-start"><span className="mr-2 text-viet-green">•</span> Bring USD for better rates at local Authorized Exchange centers.</li>
              <li className="flex items-start"><span className="mr-2 text-viet-green">•</span> <strong>Sim:</strong> Viettel/Vinaphone. Buy eSIM via Klook before arrival.</li>
            </ul>
          </div>

          {/* Apps */}
          <div className="bg-viet-ivory p-6 rounded-2xl border border-viet-green/10 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-3">
            <div className="flex items-center mb-4">
              <div className="bg-viet-green/10 p-3 rounded-full text-viet-green mr-4">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Must-Have Apps</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-xl border border-slate-100 hover:border-viet-yellow/50 transition-colors">
                <strong className="block text-slate-800 mb-1">Google Translate</strong>
                <p className="text-xs text-slate-500">Essential. <span className="font-semibold text-viet-green">Download the Vietnamese Offline Pack</span> before you fly for menus & signs.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-100 hover:border-viet-yellow/50 transition-colors">
                <strong className="block text-slate-800 mb-1">Grab</strong>
                <p className="text-xs text-slate-500">The "Uber" of SE Asia. Book bikes or cars with fixed prices. Set up account & payment while in India.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-100 hover:border-viet-yellow/50 transition-colors">
                <strong className="block text-slate-800 mb-1">Google Maps</strong>
                <p className="text-xs text-slate-500">Use it to <strong>Pin Key Locations</strong> (Hotel, Night Market) while on Wi-Fi for easy navigation later.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Essentials;