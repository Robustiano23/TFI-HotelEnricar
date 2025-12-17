import React from 'react';

const AboutUs = () => {
  return (
    <div className="pt-28 pb-20 bg-[#F9F7F2] min-h-screen font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Nuestra Identidad</span>
          <h2 className="text-5xl font-bold text-emerald-800 mt-2 mb-6 font-serif">Hotel Enricar</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Sección Historia */}
        <div className="bg-white p-10 md:p-14 rounded-2xl shadow-sm mb-12 border-l-8 border-emerald-600">
          <h3 className="text-3xl font-serif font-bold text-gray-800 mb-6">Nuestra Historia</h3>
          <div className="prose text-gray-700 leading-relaxed text-lg space-y-4">
            <p>
              [AQUÍ PEGAR TEXTO DE HISTORIA] El Hotel Enricar abrió sus puertas con el sueño de convertirse en un referente de hospitalidad en Termas de Río Hondo. Desde nuestros inicios como un pequeño emprendimiento familiar, hemos trabajado incansablemente para mejorar nuestras instalaciones y servicios.
            </p>
            <p>
              A lo largo de los años, hemos crecido junto a nuestros huéspedes, manteniendo siempre esa atención personalizada que nos caracteriza y que hace que quienes nos visitan, siempre vuelvan.
            </p>
          </div>
        </div>

        {/* Grilla Misión, Visión, Valores */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Misión */}
          <div className="bg-emerald-800 text-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition duration-300 flex flex-col">
            <h3 className="text-2xl font-serif font-bold mb-4 border-b border-emerald-600 pb-2">Misión</h3>
            <p className="text-emerald-100 leading-relaxed flex-grow">
              Proporcionar un servicio de alojamiento de calidad, confortable y accesible, garantizando la satisfacción de nuestros huéspedes a través de una atención cálida, personalizada y eficiente.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-emerald-800 hover:shadow-xl transition duration-300 flex flex-col">
            <h3 className="text-2xl font-serif font-bold text-emerald-800 mb-4 pb-2">Visión</h3>
            <p className="text-gray-700 leading-relaxed flex-grow">
              Ser reconocidos como el hotel de 2 estrellas de referencia en Termas de Río Hondo, destacándonos por nuestra constante innovación, compromiso con la calidad y la excelencia en el trato humano.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-emerald-800 hover:shadow-xl transition duration-300 flex flex-col">
            <h3 className="text-2xl font-serif font-bold text-emerald-800 mb-4 pb-2">Valores</h3>
            <ul className="text-gray-700 space-y-3 list-disc list-inside flex-grow">
              <li>Hospitalidad y servicio</li>
              <li>Honestidad y transparencia</li>
              <li>Compromiso con el cliente</li>
              <li>Limpieza y orden</li>
              <li>Trabajo en equipo</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;