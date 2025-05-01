import React from 'react';
import { CreditCard, Clock, Truck, Navigation, Headset as HeadsetMic } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <CreditCard className="h-10 w-10 text-orange-500" />,
      title: "Pagamento Instantâneo",
      description: "Receba seu pagamento assim que finalizar a rota, sem precisar esperar dias ou semanas."
    },
    {
      icon: <Clock className="h-10 w-10 text-orange-500" />,
      title: "Horários Flexíveis",
      description: "Organize sua agenda e trabalhe quando preferir, conciliando com outras atividades."
    },
    {
      icon: <Truck className="h-10 w-10 text-orange-500" />,
      title: "Diversos Veículos",
      description: "Utilize motos, carros, vans, Fiorino e muito mais para realizar as entregas."
    },
    {
      icon: <Navigation className="h-10 w-10 text-orange-500" />,
      title: "Rotas Otimizadas",
      description: "Sistema inteligente agrupa entregas próximas, maximizando sua produtividade."
    },
    {
      icon: <HeadsetMic className="h-10 w-10 text-orange-500" />,
      title: "Suporte Dedicado",
      description: "Equipe pronta para ajudar sempre que você precisar, disponível todos os dias."
    }
  ];

  return (
    <section id="vantagens" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vantagens de ser um Motorista Parceiro Shopee</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra por que milhares de motoristas já escolheram a Shopee como parceira para sua jornada profissional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-orange-50 p-4 rounded-full inline-flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Tecnologia a seu favor</h3>
              <p className="mb-6">
                Nosso aplicativo foi desenvolvido pensando na experiência do motorista parceiro, 
                com interface intuitiva, mapas detalhados e suporte em tempo real.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="bg-white/20 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Interface simples e intuitiva
                </li>
                <li className="flex items-center">
                  <div className="bg-white/20 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Navegação GPS integrada
                </li>
                <li className="flex items-center">
                  <div className="bg-white/20 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Acompanhamento de ganhos em tempo real
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Aplicativo Shopee Motoristas" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;