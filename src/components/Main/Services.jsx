import React from 'react';
import { Wifi, Utensils, Gamepad2, BedDouble, Car, Coffee } from 'lucide-react'; 

const Services = () => {
  const servicesList = [
    { 
      icon: <BedDouble size={32} />, 
      title: 'Habitaciones', 
      desc: 'Espacios pensados para tu descanso con sommiers de alta densidad y ropa de cama premium.' 
    },
    { 
      icon: <Wifi size={32} />, 
      title: 'Wi-Fi Gratuito', 
      desc: 'Conexión de alta velocidad disponible en habitaciones y áreas comunes para que sigas conectado.' 
    },
    { 
      icon: <Utensils size={32} />, 
      title: 'Gastronomía', 
      desc: 'Disfruta de sabores regionales en nuestro comedor con menú variado.' 
    },
    { 
      icon: <Gamepad2 size={32} />, 
      title: 'Sala de Juegos', 
      desc: 'Espacio recreativo para grandes y chicos con mesa de pool y juegos de mesa.' 
    },
    { 
      icon: <Coffee size={32} />, 
      title: 'Desayuno', 
      desc: 'Comienza la mañana con un desayuno completo e infusiones calientes.' 
    },
    { 
      icon: <Car size={32} />, 
      title: 'Estacionamiento', 
      desc: 'Seguridad para tu vehículo (sujeto a disponibilidad).' 
    },
  ];

  return (
    <section className="py-24 bg-[#F9F7F2] font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-800 mb-4 font-serif">Nuestros Servicios</h2>
          <p className="text-gray-900 max-w-xl mx-auto text-lg">
            Pensamos en cada detalle para que tu estadía sea inolvidable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 group border-b-2 border-transparent hover:border-emerald-600 hover:-translate-y-1">
              <div className="text-emerald-700 mb-6 bg-emerald-50 w-16 h-16 flex items-center justify-center rounded-full transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;