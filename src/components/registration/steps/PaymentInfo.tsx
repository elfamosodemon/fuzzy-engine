import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PaymentInfoProps {
  data: {
    pixKey: string;
  };
  onNext: (data: { pixKey: string }) => void;
}

const PaymentInfo: React.FC<PaymentInfoProps> = ({ data, onNext }) => {
  const navigate = useNavigate();
  const [pixKey, setPixKey] = useState(data.pixKey);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!pixKey.trim()) {
      setError('Por favor, insira sua chave PIX');
      return;
    }

    onNext({ pixKey });
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
        <h2 className="text-2xl font-bold text-gray-800">Informações de Pagamento</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label 
            htmlFor="pixKey" 
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Chave PIX
          </label>
          <input
            type="text"
            id="pixKey"
            value={pixKey}
            onChange={(e) => {
              setPixKey(e.target.value);
              setError('');
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Digite sua chave PIX"
          />
          {error && (
            <p className="mt-2 text-sm text-red-600">
              {error}
            </p>
          )}
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-sm text-gray-600">
            Sua chave PIX será utilizada para receber os pagamentos pelos serviços prestados.
            Certifique-se de fornecer uma chave válida e que você tenha acesso.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
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

export default PaymentInfo;
