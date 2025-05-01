import React from 'react';
import { Truck, Clock, MapPin } from 'lucide-react';

const Introduction = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que é o Programa Motoristas Parceiros Shopee?</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Truck className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Diversos Veículos</h3>
            <p className="text-gray-600">
              Aceitamos diferentes tipos de veículos como motos, carros, vans e muito mais para realizar as entregas.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Horários Flexíveis</h3>
            <p className="text-gray-600">
              Tenha liberdade para organizar sua agenda e escolher quando e quanto tempo deseja trabalhar.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <MapPin className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Escolha Onde Trabalhar</h3>
            <p className="text-gray-600">
              Selecione regiões próximas à sua casa ou locais de sua preferência para realizar as entregas.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-8 rounded-xl">
          <div className="md:w-1/2">
            
            
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">A Shopee oferece uma oportunidade única</h3>
            <p className="text-gray-600 mb-4">
              Com horários flexíveis e liberdade para organizar sua agenda, você pode escolher quando e onde trabalhar. 
              Nosso programa é ideal para quem busca uma fonte de renda adicional ou deseja ter autonomia no trabalho.
            </p>
            <p className="text-gray-600">
              Seja com moto, carro ou van, há espaço para você no nosso time de entregadores parceiros. 
              Junte-se a milhares de motoristas que já fazem parte desta comunidade crescente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;