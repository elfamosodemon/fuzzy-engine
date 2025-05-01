import React from 'react';
import { CreditCard, Zap, Wallet } from 'lucide-react';

const EarningsSection = () => {
  return (
    <section className="py-16 bg-orange-50" id="earning-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ganhos como Motorista Parceiro Shopee</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Além da flexibilidade, oferecemos pagamentos instantâneos e outras vantagens para aumentar seus ganhos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow mb-6">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <CreditCard className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pagamentos Instantâneos</h3>
                  <p className="text-gray-600">
                    Os pagamentos são realizados diretamente na sua conta assim que você concluir a rota, proporcionando maior agilidade financeira.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow mb-6">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Zap className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Bônus por Produtividade</h3>
                  <p className="text-gray-600">
                    Ganhe bonificações extras por entregas realizadas em datas especiais, feriados ou por alto volume de entregas concluídas.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Wallet className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ganhos Previsíveis</h3>
                  <p className="text-gray-600">
                    Nosso sistema mostra antecipadamente o valor que você receberá por cada rota, para que possa planejar melhor seus ganhos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Motorista verificando pagamento" 
              className="rounded-lg shadow-xl max-w-full h-auto transform rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsSection;