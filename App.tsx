
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InstagramGallery from './components/InstagramGallery';
import Essentials from './components/Essentials';
import Transport from './components/Transport';
import Attractions from './components/Attractions';
import Shows from './components/Shows';
import Food from './components/Food';
import Accommodation from './components/Accommodation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-viet-ivory selection:bg-viet-yellow selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <InstagramGallery />
        <Essentials />
        <Transport />
        <Attractions />
        <Shows />
        <Food />
        <Accommodation />
      </main>
      <Footer />
    </div>
  );
}

export default App;