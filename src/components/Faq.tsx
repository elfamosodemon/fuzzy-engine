import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq = () => {
  const faqs = [
    {
      question: "Quais documentos são necessários para o cadastro?",
      answer: "Para se cadastrar como Motorista Parceiro Shopee, você precisará de: documento de identidade com foto (RG ou CNH), comprovante de residência atualizado, dados bancários para recebimento, documentação do veículo (CRLV) e, para motos, licença para atividade remunerada. Todos os documentos podem ser enviados digitalmente através da plataforma."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Os pagamentos são realizados de forma instantânea após a conclusão de cada rota, diretamente na conta bancária cadastrada. O valor é calculado com base na distância percorrida, número de entregas realizadas e outros fatores. Você pode acompanhar seus ganhos em tempo real através do aplicativo."
    },
    {
      question: "Posso escolher minha área de atuação?",
      answer: "Sim, você tem a liberdade de escolher em quais regiões deseja trabalhar. Ao acessar o aplicativo, você verá as rotas disponíveis próximas à sua localização atual, mas pode navegar e selecionar outras áreas de sua preferência, desde que haja demanda nessas regiões."
    },
    {
      question: "Qual é a jornada mínima de trabalho?",
      answer: "Não há jornada mínima obrigatória. Você tem total flexibilidade para definir seus horários e dias de trabalho. Pode trabalhar apenas algumas horas por semana ou em período integral, dependendo da sua disponibilidade e objetivos financeiros."
    },
    {
      question: "A Shopee fornece algum tipo de seguro?",
      answer: "Sim, todos os Motoristas Parceiros Shopee contam com seguro contra acidentes durante o período de atividade na plataforma. Além disso, as mercadorias transportadas também são seguradas, garantindo tranquilidade durante as entregas."
    },
    {
      question: "Preciso ter experiência prévia com entregas?",
      answer: "Não é necessário ter experiência prévia como entregador. Oferecemos treinamento online para todos os novos parceiros, com dicas práticas sobre uso do aplicativo, atendimento ao cliente e melhores práticas de entrega. O mais importante é ter disposição e comprometimento."
    }
  ];

  const [openFaqs, setOpenFaqs] = useState(new Set([0]));

  const toggleFaq = (index: number) => {
    const newOpenFaqs = new Set(openFaqs);
    if (newOpenFaqs.has(index)) {
      newOpenFaqs.delete(index);
    } else {
      newOpenFaqs.add(index);
    }
    setOpenFaqs(newOpenFaqs);
  };

  return (
    <section id="perguntas-frequentes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o Programa de Motoristas Parceiros Shopee.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {openFaqs.has(index) ? (
                  <ChevronUp className="h-5 w-5 text-orange-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`px-6 pb-4 transition-all duration-300 ease-in-out ${
                  openFaqs.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 hidden'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="text-orange-500 font-medium hover:text-orange-600 flex items-center mx-auto transition-colors">
            <span>Veja mais perguntas frequentes</span>
            <ChevronDown className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;