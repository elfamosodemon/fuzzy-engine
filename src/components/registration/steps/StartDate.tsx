import React, { useState } from 'react';
import { Package, Calendar } from 'lucide-react';

interface StartDateProps {
  data: string;
  onNext: (data: string) => void;
}

const StartDate: React.FC<StartDateProps> = ({ data, onNext }) => {
  const [selectedDate, setSelectedDate] = useState<string>(data || '');

  // Get next 7 days
  const getNextDays = () => {
    const days = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('pt-BR', {
          weekday: 'long',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        })
      });
    }
    return days;
  };

  const availableDates = getNextDays();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(selectedDate);
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col min-h-screen">
      {/* Logo da Shopee no topo */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png"
          alt="Shopee Logo"
          className="h-8 w-auto mr-2"
        />
        <h2 className="text-2xl font-bold text-gray-800">Data de Início</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 flex-1">
        <div className="mb-6">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <Calendar className="h-5 w-5 text-orange-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-orange-800">
                  Precisamos de motoristas urgentemente!
                </h3>
                <p className="mt-2 text-sm text-orange-700">
                  Há uma alta demanda de entregas em sua região. Quanto antes você começar, maiores serão suas oportunidades de ganhos.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-4">
                Selecione a data que você deseja começar:
              </label>
              <div className="space-y-3">
                {availableDates.map((date) => (
                  <label
                    key={date.value}
                    className={`block relative rounded-lg border-2 p-4 cursor-pointer transition-all ${
                      selectedDate === date.value
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="start-date"
                      value={date.value}
                      checked={selectedDate === date.value}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 capitalize">{date.label}</span>
                      {selectedDate === date.value && (
                        <span className="text-orange-500">✓</span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={!selectedDate}
              className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${
                selectedDate
                  ? 'bg-orange-500 hover:bg-orange-600'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Prosseguir
            </button>
          </form>
        </div>
      </div>

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

export default StartDate;
