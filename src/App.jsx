import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Series from './components/Series';
import Community from './components/Community';
import Testimonials from './components/Testimonials';
import FreeResource from './components/FreeResource';
import TechStack from './components/TechStack';
import Demographics from './components/Demographics';
import Footer from './components/Footer';
import FloatingJoinButton from './components/FloatingJoinButton';

function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-white relative">
      <Navbar />
      <Background />
      <main className="w-full">
        <Hero />
        <About />
        <WhatWeDo />
        <Series />
        <TechStack />
        <Demographics />
        <FreeResource />
        <Testimonials />
        <Community />
      </main>
      <Footer />
      <FloatingJoinButton />
    </div>
  );
}

export default App;
