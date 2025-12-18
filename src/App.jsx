import React from 'react';
// CAMBIO CLAVE: Usamos HashRouter en lugar de BrowserRouter
import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Main/Services';
import AboutUs from './components/AboutUs/AboutUs';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';

function App() {
  return (
    // CAMBIO CLAVE: HashRouter aquí
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-[#F9F7F2] font-sans">
        
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
            </>
          } />

          <Route path="/historia" element={<AboutUs />} />
          <Route path="/documentacion" element={<Project />} />
        </Routes>

        <Footer />
        
      </div>
    </HashRouter>
  );
}

export default App;