import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });  // Rolar suavemente para a seção
    }
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Como Funciona o Programa Motoristas Parceiros da Shopee?
          </h1>
          <p className="text-lg md:text-xl mb-8 text-orange-50">
            Ganhe uma renda extra realizando coletas, transferências ou entregas de pacotes. 
            Flexibilidade total no seu horário e na sua escolha de local de trabalho.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => handleScrollToSection('avaible-positions')} // Navegar até a seção AvailablePositions
              className="bg-white text-orange-600 py-3 px-6 rounded-full font-semibold flex items-center justify-center group transition-all hover:bg-orange-50"
            >
              Cadastre-se Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => handleScrollToSection('earning-section')} // Navegar até a seção Introduction
              className="border-2 border-white bg-transparent py-3 px-6 rounded-full font-semibold transition-colors hover:bg-white/10"
            >
              Saiba Mais
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img 
            src="https://i.ibb.co/prf2GtQT/Sem-nome-Story-1.webp" 
            alt="Motorista parceiro Shopee" 
            className="rounded-lg shadow-xl max-w-full h-auto transform -rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
