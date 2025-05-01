import React, { useEffect, useRef } from 'react';
import { MapPin, Users, Clock } from 'lucide-react';

const Statistics = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  const stats = [
    {
      icon: <MapPin className="h-8 w-8 text-orange-500" />,
      value: 27,
      label: "Estados Atendidos",
      suffix: ""
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      value: 5000,
      label: "Parceiros Ativos",
      suffix: "+"
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      value: 24,
      label: "Suporte Disponível",
      suffix: "h"
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element is in view
            const counters = document.querySelectorAll('.stat-counter');
            counters.forEach((counter: Element) => {
              if (counter instanceof HTMLElement) {
                const target = parseInt(counter.getAttribute('data-target') || '0', 10);
                const duration = 2000; // Animation duration in milliseconds
                const step = Math.ceil(target / (duration / 16)); // 60fps is ~16ms per frame
                
                let current = 0;
                const updateCounter = () => {
                  current += step;
                  if (current > target) {
                    counter.innerText = target.toString();
                  } else {
                    counter.innerText = current.toString();
                    requestAnimationFrame(updateCounter);
                  }
                };
                
                updateCounter();
              }
            });
            
            // Unobserve after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4" ref={statsRef}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Junte-se a milhares de motoristas parceiros</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            A Shopee está em constante crescimento e busca parceiros comprometidos em todas as regiões do Brasil.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center transform transition-transform hover:scale-105"
            >
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                {stat.icon}
              </div>
              <div className="flex items-center justify-center">
                <span 
                  className="stat-counter text-4xl md:text-5xl font-bold" 
                  data-target={stat.value}
                >
                  0
                </span>
                <span className="text-4xl md:text-5xl font-bold">{stat.suffix}</span>
              </div>
              <p className="text-lg font-medium mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;