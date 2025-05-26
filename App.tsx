
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PhaseSection from './components/PhaseSection';
import { PHASES_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-light font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12 mt-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-4">
            Navigate Your AI Journey
          </h1>
          <p className="text-lg md:text-xl text-brand-secondary max-w-3xl mx-auto">
            This framework guides leaders through three critical phases of AI integration: 
            Experimentation, Adoption, and Transformation. Leverage AI insights at each step to accelerate your progress.
          </p>
        </div>

        {PHASES_DATA.map((phase, index) => (
          <PhaseSection key={phase.id} phase={phase} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
    