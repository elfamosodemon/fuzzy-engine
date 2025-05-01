import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AvailablePositions = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  const states = [
    { name: "Acre", vacancies: 4 },
    { name: "Alagoas", vacancies: 8 },
    { name: "Amapá", vacancies: 3 },
    { name: "Amazonas", vacancies: 12 },
    { name: "Bahia", vacancies: 18 },
    { name: "Ceará", vacancies: 15 },
    { name: "Distrito Federal", vacancies: 20 },
    { name: "Espírito Santo", vacancies: 10 },
    { name: "Goiás", vacancies: 14 },
    { name: "Maranhão", vacancies: 9 },
    { name: "Mato Grosso", vacancies: 11 },
    { name: "Mato Grosso do Sul", vacancies: 7 },
    { name: "Minas Gerais", vacancies: 22 },
    { name: "Pará", vacancies: 13 },
    { name: "Paraíba", vacancies: 8 },
    { name: "Paraná", vacancies: 19 },
    { name: "Pernambuco", vacancies: 16 },
    { name: "Piauí", vacancies: 6 },
    { name: "Rio de Janeiro", vacancies: 25 },
    { name: "Rio Grande do Norte", vacancies: 9 },
    { name: "Rio Grande do Sul", vacancies: 21 },
    { name: "Rondônia", vacancies: 5 },
    { name: "Roraima", vacancies: 3 },
    { name: "Santa Catarina", vacancies: 17 },
    { name: "São Paulo", vacancies: 30 },
    { name: "Sergipe", vacancies: 7 },
    { name: "Tocantins", vacancies: 6 }
  ];
  
  const filteredStates = searchTerm 
    ? states.filter(state => state.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : states;

  return (
    <section className="py-16 bg-gray-50" id="avaible-positions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vagas Disponíveis para Motoristas Parceiros</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Confira as vagas disponíveis nas diversas regiões do Brasil. A Shopee oferece oportunidades em todos os estados.
          </p>
        </div>
        
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por estado..."
              className="w-full py-3 px-5 pl-12 rounded-full border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStates.map((state) => (
            <div key={state.name} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                    <h3 className="text-lg font-semibold">{state.name}</h3>
                  </div>
                  <span className="bg-orange-100 text-orange-800 text-sm font-medium py-1 px-3 rounded-full">
                    {state.vacancies} vagas
                  </span>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-sm text-gray-500">Atualizadas hoje</span>
                  <button 
                    onClick={() => navigate('/cadastro')}
                    className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredStates.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">Nenhum resultado encontrado para "{searchTerm}"</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AvailablePositions;