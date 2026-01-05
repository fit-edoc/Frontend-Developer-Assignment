import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import UpperBirds from './components/UpperBirds';
import LowerBirds from './components/LowerBirds';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-white to-[#d2e4ff] via-[#E0F0FF] relative overflow-hidden font-sans selection:bg-brand-blue selection:text-white">
      <Navbar />
      <Hero />
      <UpperBirds/>
      <LowerBirds/>
      <Background />
    </div>
  );
}

export default App;
