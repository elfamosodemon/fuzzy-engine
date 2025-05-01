import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import EarningsSection from './components/EarningsSection';
import RegistrationSteps from './components/RegistrationSteps';
import AvailablePositions from './components/AvailablePositions';
import Benefits from './components/Benefits';
import Faq from './components/Faq';
import CallToAction from './components/CallToAction';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
import RegistrationFlow from './components/registration/RegistrationFlow';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <EarningsSection />
        <RegistrationSteps />
        <AvailablePositions />
        <Benefits />
        <Faq />
        <Statistics />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro/*" element={<RegistrationFlow />} />
        <Route path="/avaiblepositions/*" element={<AvailablePositions />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;