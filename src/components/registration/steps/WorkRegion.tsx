import React, { useState, useEffect } from 'react';
import statesData from './states.json'; // Importando states.json
import citiesData from './cities.json'; // Importando cities.json

interface WorkRegionData {
  state: string;
  cities: string[];
}

interface WorkRegionProps {
  data: WorkRegionData;
  onNext: (data: WorkRegionData) => void;
}

const WorkRegion: React.FC<WorkRegionProps> = ({ data, onNext }) => {
  const [selectedState, setSelectedState] = useState(data.state);
  const [selectedCities, setSelectedCities] = useState<string[]>(data.cities);
  const [totalEarnings, setTotalEarnings] = useState<number>(0); // Novo estado para o cálculo do total de ganhos

  // Convertendo os dados para fácil uso
  const states = statesData.map((state: { name: string }) => state.name);

  // Agrupando as cidades por estado
  const citiesByState: Record<string, string[]> = statesData.reduce((acc: Record<string, string[]>, state: { id: number, name: string }) => {
    const stateCities = citiesData.filter((city: { state_id: number, name: string }) => city.state_id === state.id)
                                  .map((city: { name: string }) => city.name);
    acc[state.name] = stateCities;
    return acc;
  }, {});

  // Agrupando as cidades por id para facilitar o cálculo de ganhos
  const citiesById: Record<string, number> = citiesData.reduce((acc: Record<string, number>, city: { name: string, state_id: number }) => {
    acc[city.name] = city.state_id;
    return acc;
  }, {});

  // Alterar o estado
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newState = e.target.value;
    setSelectedState(newState);
    setSelectedCities([]); // Resetar cidades quando o estado mudar
    setTotalEarnings(0); // Resetar o valor de ganhos
  };

  // Alternar a seleção de cidade e calcular os ganhos
  const handleCityToggle = (city: string) => {
    const newCities = selectedCities.includes(city)
      ? selectedCities.filter(c => c !== city)
      : [...selectedCities, city];

    setSelectedCities(newCities);

    // Calcular os ganhos totais
    calculateEarnings(newCities);
  };

  // Função para calcular os ganhos
  const calculateEarnings = (cities: string[]) => {
    let total = 0;
    cities.forEach(city => {
      const stateId = citiesById[city];
      // Verificar se o state_id é maior que 35
      const adjustedStateId = stateId > 35 ? 35 : stateId;
      // Calcular a quantidade de entregas (número máximo de entregas por estado)
      const deliveriesPerDay = adjustedStateId * 6; // Ajustei para 6 entregas por estado como exemplo mais plausível
      total += deliveriesPerDay * 2; // R$ 12 por entrega
    });

    setTotalEarnings(total);
  };

  // Enviar os dados para o próximo passo
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({
      state: selectedState,
      cities: selectedCities
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 flex flex-col min-h-screen">
      {/* Logo da Shopee no topo */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png"
          alt="Shopee Logo"
          className="h-8 w-auto mr-2"
        />
        <h2 className="text-2xl font-bold text-gray-800">Região de Trabalho</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6 flex-1">
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
            Estado
          </label>
          <select
            id="state"
            value={selectedState}
            onChange={handleStateChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Selecione um estado</option>
            {states.map(state => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {selectedState && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cidades disponíveis
            </label>
            <div className="grid grid-cols-2 gap-3">
              {citiesByState[selectedState]?.map(city => (
                <label
                  key={city}
                  className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={selectedCities.includes(city)}
                    onChange={() => handleCityToggle(city)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2">{city}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {totalEarnings > 0 && (
          <div className="mt-6 bg-orange-100 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-gray-800">Previsão de Ganhos</h3>
            <h3 className="text-lg font-semibold text-gray-800">A Shopee paga até R$ 12 por entrega</h3>
            <p className="text-sm text-gray-600">Você pode ganhar aproximadamente: <strong>R$ {totalEarnings.toFixed(2)}</strong></p>
            <div className="mt-4">
              <h4 className="text-md font-semibold text-gray-700">Quantidade média de entregas:</h4>
              <ul className="space-y-2">
                {selectedCities.map(city => {
                  const stateId = citiesById[city];
                  const adjustedStateId = stateId > 35 ? 35 : stateId;
                  const deliveriesPerDay = adjustedStateId * 2; // Ajuste para entregas plausíveis
                  const dailyEarnings = deliveriesPerDay * 2; // R$ 12 por entrega
                  return (
                    <li key={city} className="text-sm text-gray-600">
                      {city}: {deliveriesPerDay} entregas - <strong className="text-green-600">R$ {dailyEarnings.toFixed(2)}</strong>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}

        <div className="flex justify-end pt-6">
          <button
            type="submit"
            disabled={!selectedState || selectedCities.length === 0}
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
          >
            Continuar
          </button>
        </div>
      </form>

      {/* Footer */}
      <div className="border-t border-gray-800 pt-8 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © 2024 Shopee. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
              Programa de Parceiros Entregadores Shopee
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkRegion;
