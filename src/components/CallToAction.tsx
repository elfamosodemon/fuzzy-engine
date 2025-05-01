import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Torne-se um Motorista Parceiro Shopee Hoje!</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Transforme seu veículo em uma fonte de renda extra com horários flexíveis e pagamentos instantâneos. 
                  Junte-se à comunidade de entregadores que estão revolucionando a logística no Brasil.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button 
                    onClick={() => navigate('/cadastro')}
                    className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full font-semibold flex items-center justify-center group transition-all transform hover:scale-105"
                  >
                    Cadastre-se Agora
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border border-gray-300 bg-transparent text-gray-700 py-3 px-8 rounded-full font-semibold transition-colors hover:bg-gray-50"
                  >
                    Conheça Mais
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Entregador sorrindo" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 to-orange-600/20 mix-blend-multiply"></div>
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-orange-500">Comece agora mesmo!</p>
                <p className="text-sm text-gray-600">Processo 100% online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;