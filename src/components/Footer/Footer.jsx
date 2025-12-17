import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-10 md:py-16 font-sans mt-auto border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Columna 1: Información */}
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="text-white text-2xl font-serif font-bold mb-4 md:mb-6">Hotel Enricar ★★</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 md:mb-6">
                Un espacio pensado para el descanso familiar en el corazón de Termas de Río Hondo. Calidad y calidez a su servicio.
              </p>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                <span className="text-sm">Chacabuco 232, G4220 Villa Río Hondo, Santiago del Estero</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-500 flex-shrink-0" size={18} />
                <span className="text-sm">03858421415</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-500 flex-shrink-0" size={18} />
                <span className="text-sm"></span>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="pt-4 flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition text-white" aria-label="Facebook">
                <Facebook size={20}/>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition text-white" aria-label="Instagram">
                <Instagram size={20}/>
              </a>
            </div>
          </div>

          {/* Columna 2: MAPA DE GOOGLE (Ubicación real Hotel Enricar) */}
          <div className="h-56 md:h-64 bg-gray-800 rounded-lg overflow-hidden relative w-full shadow-inner border border-gray-700">
            <iframe 
              title="Ubicación Hotel Enricar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.170948209332!2d-64.86397172379094!3d-27.495058517788642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94236e62e23de8e5%3A0xdc39776110cb72aa!2sHotel%20Enricar!5e0!3m2!1ses!2sar!4v1764260693908!5m2!1ses!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition duration-500"
            ></iframe>
          </div>

          {/* Columna 3: Formulario */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4 md:mb-6 font-serif">Contacto Rápido</h3>
            <form className="space-y-3">
              <div className="grid grid-cols-1 gap-3">
                <input 
                  type="text" 
                  placeholder="Nombre Completo" 
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-emerald-500 text-white text-sm transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email de contacto" 
                  className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-emerald-500 text-white text-sm transition-colors"
                />
              </div>
              <textarea 
                rows="3" 
                placeholder="¿En qué podemos ayudarle?" 
                className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-emerald-500 text-white text-sm resize-none transition-colors"
              ></textarea>
              <button className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 rounded transition duration-300 uppercase text-xs tracking-widest hover:shadow-lg hover:shadow-emerald-900/20">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 md:mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-xs text-gray-500">
          <p>© 2025 Hotel Enricar. Todos los derechos reservados.</p>
          <p className="opacity-60">Desarrollado por Alumnos de Análisis de Sistemas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;