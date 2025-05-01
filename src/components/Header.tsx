import React, { useState, useEffect } from 'react';
import { Package, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'cadastro') {
      navigate('/cadastro');
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
  <div className="container mx-auto px-4 flex justify-between items-center">
    <div className="flex items-center space-x-2">
  
      {/* Substituindo o span por um ícone de imagem */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png" 
        alt="Shopee Logo" 
        className={`h-8 ${isScrolled ? 'text-orange-500' : 'text-white'}`}
      />
    </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['inicio', 'como-funciona', 'vantagens', 'perguntas-frequentes', 'contato'].map((item) => (
            <button 
              key={item} 
              onClick={() => handleNavigation(item)}
              className={`font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
          <button 
            onClick={() => navigate('/cadastro')}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full transition-all transform hover:scale-105"
          >
            Cadastre-se
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute top-full left-0 right-0">
          <nav className="flex flex-col space-y-4">
            {['inicio', 'como-funciona', 'vantagens', 'perguntas-frequentes', 'contato'].map((item) => (
              <button 
                key={item} 
                onClick={() => handleNavigation(item)}
                className="font-medium text-gray-700 hover:text-orange-500"
              >
                {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
            <button 
              onClick={() => {
                navigate('/cadastro');
                setIsMobileMenuOpen(false);
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full transition-all transform hover:scale-105 w-full"
            >
              Cadastre-se
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;