import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface SafetyKitProps {
  data: {
    agreed: boolean;
    deliveryAddress: {
      cep: string;
      street: string;
      number: string;
      complement?: string;
      neighborhood: string;
      city: string;
      state: string;
    };
    vestSize: string;
    gloveSize: string;
    shoeSize: string;
  };
  onNext: (data: SafetyKitProps['data']) => void;
}

const SafetyKit: React.FC<SafetyKitProps> = ({ data, onNext }) => {
  const [localData, setLocalData] = useState(data);

  // Manter os dados locais atualizados no estado
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setLocalData({
        ...localData,
        agreed: checked,
      });
    } else {
      setLocalData({
        ...localData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Não navega até que o botão seja clicado
    onNext(localData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 flex flex-col min-h-screen">
      {/* Logo da Shopee no topo */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png"
          alt="Shopee Logo"
          className="h-8 w-auto mr-2" // Ajuste para o tamanho correto do logo
        />
        <h2 className="text-2xl font-bold text-gray-900">Kit de Segurança</h2>
      </div>

      {/* Descrição do Kit de Segurança */}
      <div className="bg-orange-50 p-6 rounded-lg border border-gray-200 mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Equipamento de Proteção Individual (EPI)</h3>
        <p className="text-sm text-gray-600 mt-2">
          Kit Completo de Segurança da Shopee. Para garantir sua segurança durante as entregas, a Shopee exige que todos os entregadores utilizem equipamentos de proteção individual. O kit inclui:
        </p>
        <ul className="list-disc ml-6 mt-2 text-sm text-gray-600">
          <li>2 Coletes refletivos com identificação Shopee (laranja e amarelo)</li>
          <li>Par de luvas de proteção</li>
          <li>Botas de segurança antiderrapantes</li>
        </ul>
        <p className="text-sm text-red-600 mt-2">
          Importante: O uso do kit completo é obrigatório durante todas as entregas. O não uso pode resultar em suspensão temporária.
        </p>
      </div>

      {/* Exibição da Imagem do Kit de Segurança */}
      <div className="flex justify-center mb-6">
        <img
          src="https://shopeeparceiro.com/assets/kit-epi-new-Du3wJUxp.webp"
          alt="Kit de Segurança Shopee"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>

      {/* Tamanhos de Coletes, Luvas e Calçados */}
      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Escolha os Tamanhos</h3>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tamanho do Colete</label>
          <select
            name="vestSize"
            value={localData.vestSize}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          >
            <option value="M">M</option>
            <option value="G">G</option>
            <option value="GG">GG</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tamanho da Luva</label>
          <select
            name="gloveSize"
            value={localData.gloveSize}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          >
            <option value="M">M</option>
            <option value="G">G</option>
            <option value="GG">GG</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Número do Calçado</label>
          <select
            name="shoeSize"
            value={localData.shoeSize}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          >
            {[35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45].map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Aceite dos Termos de Uso */}
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="agreement"
            type="checkbox"
            checked={localData.agreed}
            onChange={handleChange}
            className="w-4 h-4 border-gray-300 rounded text-orange-600 focus:ring-orange-500"
            required
          />
        </div>
        <label htmlFor="agreement" className="ml-3 text-sm text-gray-700">
          Concordo com os termos de uso e política de segurança da Shopee. Declaro que usarei os equipamentos de proteção durante todas as entregas.
        </label>
      </div>

      {/* Botão de Solicitação do Kit */}
      <div className="flex justify-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          disabled={!localData.agreed}
        >
          <Check className="w-5 h-5 mr-2" />
          Solicitar Kit e Finalizar
        </button>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 pt-8 mt-8">
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

export default SafetyKit;
