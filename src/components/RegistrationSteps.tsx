import React from 'react';
import { MapPin, Truck, ClipboardCheck, Navigation } from 'lucide-react';

const RegistrationSteps = () => {
  const steps = [
    {
      icon: <MapPin className="h-8 w-8 text-orange-500" />,
      title: "Verificar Disponibilidade",
      description: "Verifique se há vagas disponíveis na sua região através do nosso mapa interativo."
    },
    {
      icon: <Truck className="h-8 w-8 text-orange-500" />,
      title: "Informar Veículo e Dados",
      description: "Preencha as informações sobre seu veículo e seus dados pessoais para análise."
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-orange-500" />,
      title: "Finalizar Cadastro",
      description: "Se houver vagas, clique em 'Cadastrar' e conclua seu processo de registro na plataforma."
    },
    {
      icon: <Navigation className="h-8 w-8 text-orange-500" />,
      title: "Começar a Trabalhar",
      description: "Após a aprovação, acesse as rotas disponíveis e comece a trabalhar no seu próprio ritmo."
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como se Cadastrar</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            O cadastro é simples e totalmente online. Siga estes passos para se tornar um Motorista Parceiro Shopee.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-orange-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot - only visible on md and up */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-orange-500 z-10 items-center justify-center">
                    <span className="font-bold text-orange-500">{index + 1}</span>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      {/* Mobile number indicator */}
                      <div className="flex md:hidden items-center mb-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                          <span className="font-bold text-orange-500">{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      
                      {/* Desktop title */}
                      <h3 className="hidden md:block text-xl font-bold mb-3">{step.title}</h3>
                      
                      <p className="text-gray-600">{step.description}</p>
                      
                      <div className={`mt-4 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className="bg-orange-100 p-3 rounded-full">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full font-semibold text-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
            Iniciar Cadastro
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSteps;