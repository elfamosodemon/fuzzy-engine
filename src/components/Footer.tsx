import React from 'react';
import { Package, Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Package className="h-8 w-8 text-orange-500" />
              <span className="font-bold text-xl text-white">Shopee Motoristas</span>
            </div>
            <p className="text-gray-400 mb-6">
              Programa de motoristas parceiros da Shopee. Ganhe uma renda extra realizando entregas com flexibilidade de horário.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Navegação Rápida</h3>
            <ul className="space-y-3">
              {['Início', 'Como Funciona', 'Vantagens', 'Perguntas Frequentes', 'Cadastro'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Informações Legais</h3>
            <ul className="space-y-3">
              {['Termos de Serviço', 'Política de Privacidade', 'Regulamento do Programa', 'Código de Conduta', 'Segurança'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                <span className="text-gray-400">motoristas@shopee.com.br</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                <span className="text-gray-400">0800 123 4567</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Horário de Atendimento</h4>
              <p className="text-gray-400">Segunda a Sexta: 8h às 20h</p>
              <p className="text-gray-400">Sábados: 9h às 16h</p>
            </div>
          </div>
        </div>
        
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
    </footer>
  );
};

export default Footer;