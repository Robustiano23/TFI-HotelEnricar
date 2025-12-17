import React from 'react';

import heroImg from '../../assets/hero_hotel.png'; 

const Hero = () => {
  return (
    <section className="relative h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden font-sans">
      {/* Fondo */}
      <div className="absolute inset-0 z-0 bg-slate-900">
       
        <img 
          src={heroImg} 
          alt="Fachada Principal Hotel Enricar" 
          className="w-full h-full object-cover opacity-60 transition-transform duration-[20s] hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
      </div>
      
      {/* Contenido Responsivo */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl mx-auto mt-12 md:mt-16 animate-fade-in-up">
        <span className="block text-yellow-400 text-lg md:text-xl font-serif tracking-[0.2em] mb-3 md:mb-4">
          ★ ★
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 drop-shadow-2xl leading-tight font-serif">
          Hotel Enricar
        </h1>
        
        <div className="w-16 md:w-24 h-1 bg-emerald-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
        
        <p className="text-lg sm:text-xl md:text-3xl text-gray-100 font-light drop-shadow-lg italic max-w-xs sm:max-w-xl md:max-w-3xl mx-auto">
          "Donde la calidez de Termas de Río Hondo se siente como en casa"
        </p>
      </div>
    </section>
  );
};

export default Hero;