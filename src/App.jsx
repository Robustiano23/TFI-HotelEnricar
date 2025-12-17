import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// IMPORTACIONES
import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Main/Services';
import AboutUs from './components/AboutUs/AboutUs';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      {/* Contenedor principal */}
      <div className="flex flex-col min-h-screen bg-[#F9F7F2] font-sans">
        
        <Navbar />

        <Routes>
          {/* Ruta Inicio */}
          <Route path="/" element={
            <>
              <Hero />
              <Services />
            </>
          } />

          {/* Ruta Historia */}
          <Route path="/historia" element={<AboutUs />} />

          {/* Ruta Documentación */}
          <Route path="/documentacion" element={<Project />} />
        </Routes>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;