import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#F9F7F2]/95 backdrop-blur-md shadow-sm z-50 border-b border-emerald-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex flex-col leading-tight group">
          <Link to="/" className="text-2xl font-bold text-emerald-800 tracking-wide font-serif hover:text-emerald-600 transition">
            HOTEL ENRICAR
          </Link>
          <div className="flex gap-1 text-yellow-500 text-sm">
            <span>★</span><span>★</span>
          </div>
        </div>

        {/* MENÚ DE ESCRITORIO */}
        <div className="hidden md:flex gap-8 font-medium text-gray-700 items-center">
          <Link to="/" className="hover:text-emerald-700 transition">Inicio</Link>
          <Link to="/historia" className="hover:text-emerald-700 transition">Historia</Link>
          <Link to="/" className="hover:text-emerald-700 transition">Servicios</Link>
          
          <Link to="/documentacion" className="px-5 py-2 border-2 border-emerald-700 text-emerald-800 rounded-full hover:bg-emerald-700 hover:text-white transition font-semibold text-sm">
            Documentación TFI
          </Link>
        </div>

        {/* BOTÓN MOVIL */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-emerald-800">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENÚ MOVIL */}
      {isOpen && (
        <div className="md:hidden bg-[#F9F7F2] border-t border-emerald-100 py-4 px-6 flex flex-col gap-4 shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800">Inicio</Link>
          <Link to="/historia" onClick={() => setIsOpen(false)} className="block py-2 text-gray-800">Historia</Link>
          <Link to="/documentacion" onClick={() => setIsOpen(false)} className="block py-2 text-emerald-800 font-bold">Documentación</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;