import React, { useState } from 'react';
import { CheckCircle, Clock } from 'lucide-react';
import type { RegistrationData } from '../RegistrationFlow';

interface RegistrationStatusProps {
  data: RegistrationData;
}

const RegistrationStatus: React.FC<RegistrationStatusProps> = ({ data }) => {
  const [formCompleted, setFormCompleted] = useState(false); // Controla quando o formulário foi completado

  const handleSubmit = () => {
    // Ao submeter, redireciona para o link de checkout
    window.location.href = "https://pay.pixpagamentoseguro.store/DPXw3Xe581LZzmp"; // Redirecionamento para o link de checkout
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
      {/* Logo da Shopee no topo */}
      <div className="flex items-center gap-3 mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png"
          alt="Shopee Logo"
          className="h-8 w-auto mr-2"
        />
        <h2 className="text-2xl font-bold text-orange-600">Kit de Segurança Oficial</h2>
      </div>

      <div className="text-center mb-8">
        <p className="mt-2 text-gray-600">
          Adquira o kit para se tornar um entregador Shopee.
        </p>
        <div className="mt-4">
          <img
            src="https://shopeeparceiro.com/assets/kit-epi-new-Du3wJUxp.webp"
            alt="Kit de Segurança"
            className="w-full rounded-lg"
          />
        </div>

        {/* Texto explicativo sobre o kit */}
        <div className="text-center mt-6 text-gray-600">
          <p className="text-lg font-medium">
            <strong>Informação importante:</strong> Para ativar seu cadastro e se tornar um entregador Shopee, é obrigatório a aquisição do kit oficial de entrega da Shopee. O kit é entregue a preço de custo por
          </p>
        </div>

        <p className="mt-2 text-xl font-semibold text-orange-600">R$ 79,90</p>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Informações do Cliente</h3>
          <dl className="space-y-3">
            <div>
              <dt className="text-sm font-medium text-gray-500">Nome Completo</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.personalInfo.fullName}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.personalInfo.email}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Telefone</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.personalInfo.phone}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Região de Trabalho</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.workRegion.state} - {data.workRegion.cities.join(', ')}</dd>
            </div>
          </dl>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Endereço para Entrega</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500">CEP</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md" placeholder="CEP" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Número</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md" placeholder="Número" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Logradouro</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md" placeholder="Logradouro" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Bairro</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md" placeholder="Bairro" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Cidade</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md" placeholder="Cidade" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Estado</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md" placeholder="Estado" />
            </div>
          </form>
        </div>

        <div className="text-center mt-6">
          <button
            className="bg-orange-600 text-white px-4 py-2 rounded-lg text-lg font-semibold"
            onClick={handleSubmit} // Aqui chamamos o handleSubmit para redirecionar
          >
            Comprar e Ativar Cadastro
          </button>
        </div>
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

export default RegistrationStatus;
