import React, { useState } from 'react';
import { cpf } from 'cpf-cnpj-validator'; // Importando as funções para CNPJ e CPF
import { Package } from 'lucide-react';

interface PersonalInfoData {
  cpf: string;
  fullName: string;
  phone: string;
  email: string;
  vehicleType: 'moto' | 'carro';
  isRentedVehicle: boolean;
  licensePlate?: string;
}

interface PersonalInfoProps {
  data: PersonalInfoData;
  onNext: (data: PersonalInfoData) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ data, onNext }) => {
  const [formData, setFormData] = useState<PersonalInfoData>(data);
  const [errors, setErrors] = useState<string[]>([]); // Para armazenar erros de validação

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errorList: string[] = [];

    // Validação de CPF usando a função isValid
    if (!cpf.isValid(formData.cpf)) {
      errorList.push('CPF inválido');
    }

    // Validação de telefone (número de telefone brasileiro)
    const phonePattern = /^[0-9]{10,11}$/;
    if (!phonePattern.test(formData.phone)) {
      errorList.push('Telefone inválido');
    }

    // Validação de email (formato de email)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(formData.email)) {
      errorList.push('Email inválido');
    }

    // Validação da placa do veículo (caso o checkbox "Veículo alugado" não esteja marcado)
    if (!formData.isRentedVehicle && !formData.licensePlate) {
      errorList.push('A placa do veículo é obrigatória');
    }

    // Se houver erros, exibe na tela
    if (errorList.length > 0) {
      setErrors(errorList);
    } else {
      setErrors([]); // Limpa os erros se tudo estiver correto
      onNext(formData); // Chama a função onNext para prosseguir
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Shopee Logo no topo */}
      <div className="flex items-center mb-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png"
          alt="Shopee Logo"
          className="h-8 w-auto mr-2"
        />
        <h1 className="text-2xl font-bold">Cadastro de Motorista Parceiro</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Informações Pessoais</h2>

        {/* Exibe os erros de validação, se houver */}
        {errors.length > 0 && (
          <div className="mb-4 text-red-500">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={formData.cpf}
              onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="000.000.000-00" // Placeholder para CPF
              required
            />
          </div>

          <div>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Digite seu nome completo" // Placeholder para Nome Completo
              required
            />
          </div>

          <div>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="(00) 00000-0000" // Placeholder para Telefone
              required
            />
          </div>

          <div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="seu@email.com" // Placeholder para E-mail
              required
            />
          </div>

          {/* Escolha do Tipo de Veículo */}
          <div>
            <div className="text-sm font-medium text-gray-700 mb-2">Qual veículo você utiliza?</div>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="carro"
                  checked={formData.vehicleType === 'carro'}
                  onChange={(e) => setFormData({ ...formData, vehicleType: 'carro' })}
                  className="mr-2"
                />
                <img
                  src="https://shopeeparceiro.com/assets/shopee-cars-BEd8cnmS.webp"
                  alt="Carro"
                  className="w-20 h-20"
                />
                Carro
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="moto"
                  checked={formData.vehicleType === 'moto'}
                  onChange={(e) => setFormData({ ...formData, vehicleType: 'moto' })}
                  className="mr-2"
                />
                <img
                  src="https://shopeeparceiro.com/assets/shopee-moto-g9ZTW-iH.webp"
                  alt="Moto"
                  className="w-20 h-20"
                />
                Moto
              </label>
            </div>
          </div>

          {/* Opção de Veículo Alugado */}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.isRentedVehicle}
                onChange={(e) => setFormData({ ...formData, isRentedVehicle: e.target.checked })}
                className="mr-2"
              />
              Estou utilizando um veículo alugado ou emprestado
            </label>
            {!formData.isRentedVehicle && (
              <div className="mt-4">
                <input
                  type="text"
                  value={formData.licensePlate}
                  onChange={(e) => setFormData({ ...formData, licensePlate: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="ABC-1234 ou ABC1D23" // Placeholder para a Placa do Veículo
                  required={!formData.isRentedVehicle} // Torna a placa obrigatória se o veículo não for alugado
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
          >
            Prosseguir
          </button>
        </form>
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

export default PersonalInfo;
