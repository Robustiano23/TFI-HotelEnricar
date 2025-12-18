import React from 'react';
import { FileText, Database, Code, CheckCircle } from 'lucide-react';

const Project = () => {

  const etapas = [
    { 
      id: 1, 
      titulo: "Etapa 1: La Empresa", 
      desc: "Definición del perfil empresarial, misión, visión, organigrama y modelado de procesos de negocio (BPD).", 
      icon: <FileText size={24} />, 
      link: "/TFI-HotelEnricar/docs/etapa1.pdf" 
    },
    { 
      id: 2, 
      titulo: "Etapa 2: Requerimientos", 
      desc: "Especificación de requisitos, reglas de dominio, análisis de stakeholders y visión general del producto.", 
      icon: <Database size={24} />, 
      link: "/TFI-HotelEnricar/docs/etapa2.pdf" 
    },
    { 
      id: 3, 
      titulo: "Etapa 3: Análisis y Diseño", 
      desc: "Desarrollo de casos de uso, prototipos de interfaz, diagramas de secuencia y modelo de dominio.", 
      icon: <Code size={24} />, 
      link: "/TFI-HotelEnricar/docs/etapa3.pdf" 
    },
    { 
      id: 4, 
      titulo: "Etapa 4: Gestión e Implementación", 
      desc: "Glosario técnico, informe de viabilidad (técnica, económica y operativa), gestión del proyecto y conclusiones.", 
      icon: <CheckCircle size={24} />, 
      link: "/TFI-HotelEnricar/docs/etapa4.pdf" 
    },
  ];

  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-20 min-h-screen bg-[#F9F7F2]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-10 md:mb-16">
          <span className="bg-emerald-100 text-emerald-800 text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            TFI Análisis de Sistemas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 font-serif mt-4 mb-4 md:mb-6">Documentación del Sistema</h2>
          <p className="text-gray-900 max-w-2xl mx-auto text-base md:text-lg">
            Repositorio digital del Trabajo Final Integrador.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {etapas.map((etapa) => (
            <div key={etapa.id} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-600 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="flex items-center gap-3 mb-4 text-emerald-700">
                {etapa.icon}
                <h3 className="font-bold text-gray-900 font-serif text-lg">{etapa.titulo}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">{etapa.desc}</p>
              
              <a 
                href={etapa.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-2 rounded border border-emerald-600 text-emerald-700 font-bold hover:bg-emerald-600 hover:text-white transition-colors text-center text-xs uppercase tracking-wider"
              >
                Ver PDF
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm mb-2">Proyecto alojado en GitHub</p>
            <a href="https://github.com" target="_blank" className="text-emerald-700 font-bold hover:underline">
                Ver Repositorio de Código
            </a>
        </div>
      </div>
    </div>
  );
};

export default Project;