import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Background from './components/Background';
import UpperBirds from './components/UpperBirds';
import LowerBirds from './components/LowerBirds';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-[#d2e4ff] to-[#E0F0FF] relative overflow-hidden font-sans selection:bg-brand-blue selection:text-white">
      <Navbar />
      <Hero />
      <UpperBirds/>
      <LowerBirds/>
      <Background />
    </div>
  );
}

export default App;
