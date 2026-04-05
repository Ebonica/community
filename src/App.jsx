import React from 'react';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import Series from './components/Series';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-white relative">
      <Background />
      <main className="w-full">
        <Hero />
        <About />
        <WhatWeDo />
        <Series />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
