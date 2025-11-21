import React from 'react';
import { Utensils, Leaf, AlertOctagon, Wine } from 'lucide-react';
import { DISHES, BEACH_BARS, INDIAN_RESTAURANTS } from '../constants';

const Food: React.FC = () => {
  return (
    <section id="food" className="py-20 bg-viet-ivory">
      <div className="container mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* General Food */}
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-8 font-serif flex items-center">
              <Utensils className="mr-3 text-viet-yellow" /> Must-Try Dishes
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {DISHES.filter(d => !d.isVeg).map((dish, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:border-viet-green/20 transition-colors">
                  <h4 className="font-bold text-lg text-slate-800">{dish.name}</h4>
                  <p className="text-slate-500 text-sm mt-1">{dish.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mt-12 mb-6 font-serif flex items-center text-viet-green">
              <Leaf className="mr-2" /> Vegetarian Delights
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {DISHES.filter(d => d.isVeg).map((dish, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-viet-green/20">
                  <h4 className="font-bold text-lg text-viet-green">{dish.name}</h4>
                  <p className="text-slate-500 text-sm mt-1">{dish.description}</p>
                </div>
              ))}
            </div>

             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <Wine className="mr-2 text-viet-yellow" /> Sunset Cocktails & Beach Bars
                </h3>
                <div className="flex flex-wrap gap-2">
                  {BEACH_BARS.map((bar, idx) => (
                    <span key={idx} className="bg-viet-ivory text-slate-700 px-3 py-1 rounded-full text-sm border border-slate-200 font-medium">
                      {bar}
                    </span>
                  ))}
                </div>
             </div>

          </div>

          {/* Veg Guide Survival Kit */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100 lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800 font-serif">Vegetarian Survival Guide</h2>
                <span className="bg-viet-green/10 text-viet-green px-3 py-1 rounded-full text-xs font-bold border border-viet-green/20">For Indian Tourists</span>
              </div>

              <div className="space-y-6">
                <div className="bg-viet-green/5 p-5 rounded-xl border border-viet-green/20">
                  <p className="font-medium text-slate-800 mb-2 text-sm uppercase tracking-wide">The Magic Word</p>
                  <h3 className="text-4xl font-bold text-viet-green">"Chay"</h3>
                  <p className="text-xs text-slate-600 mt-2">Means Vegetarian. Look for "Banh Mi Chay" or "Com Chay".</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-700 mb-3">Save & Show This to Waiters:</h4>
                  <div className="space-y-3">
                    <div className="p-4 border border-slate-200 rounded-lg bg-viet-ivory">
                      <p className="font-bold text-lg text-slate-800">“Tôi không ăn thịt, trứng, cá, hải sản.”</p>
                      <p className="text-xs text-slate-500 italic mt-1">(I don’t eat meat, egg, fish or seafood)</p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-lg bg-viet-ivory">
                      <p className="font-bold text-lg text-slate-800">“Không trứng, không nước mắm.”</p>
                      <p className="text-xs text-slate-500 italic mt-1">(No egg, no fish sauce - <span className="font-bold text-red-500">VERY IMPORTANT</span>)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex items-start">
                    <AlertOctagon size={20} className="mr-3 mt-0.5 text-red-600 flex-shrink-0" />
                    <div className="text-sm text-red-800">
                      <strong>Watch Out:</strong> Even veg-looking dishes might have hidden fish sauce. Always clarify!
                    </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-slate-700 mb-2">Indian Restaurants:</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {INDIAN_RESTAURANTS.join(", ")}.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Food;