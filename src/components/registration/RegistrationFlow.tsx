import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PersonalInfo from './steps/PersonalInfo';
import AddressInfo from './steps/AddressInfo';
import WorkRegion from './steps/WorkRegion';
import StartDate from './steps/StartDate';
import PaymentInfo from './steps/PaymentInfo';
import SafetyKit from './steps/SafetyKit';
import RegistrationStatus from './steps/RegistrationStatus';

export interface RegistrationData {
  personalInfo: {
    cpf: string;
    fullName: string;
    phone: string;
    email: string;
    vehicleType: 'moto' | 'carro';
    isRentedVehicle: boolean;
    licensePlate?: string;
  };
  addressInfo: {
    cep: string;
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  workRegion: {
    state: string;
    cities: string[];
  };
  startDate: string;
  paymentInfo: {
    pixKey: string;
  };
  safetyKit: {
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
  };
}

const RegistrationFlow = () => {
  const navigate = useNavigate();
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    personalInfo: {
      cpf: '',
      fullName: '',
      phone: '',
      email: '',
      vehicleType: 'moto',
      isRentedVehicle: false,
      licensePlate: '',
    },
    addressInfo: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
    workRegion: {
      state: '',
      cities: [],
    },
    startDate: '',
    paymentInfo: {
      pixKey: '',
    },
    safetyKit: {
      agreed: false,
      deliveryAddress: {
        cep: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
      },
    },
  });

  const updateRegistrationData = (step: keyof RegistrationData, data: any) => {
    setRegistrationData(prev => ({
      ...prev,
      [step]: data,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route 
            path="/" 
            element={
              <PersonalInfo 
                data={registrationData.personalInfo}
                onNext={(data) => {
                  updateRegistrationData('personalInfo', data);
                  navigate('/cadastro/endereco');
                }}
              />
            }
          />
          <Route 
            path="/endereco" 
            element={
              <AddressInfo 
                data={registrationData.addressInfo}
                onNext={(data) => {
                  updateRegistrationData('addressInfo', data);
                  navigate('/cadastro/regiao-trabalho');
                }}
              />
            }
          />
          <Route 
            path="/regiao-trabalho" 
            element={
              <WorkRegion 
                data={registrationData.workRegion}
                onNext={(data) => {
                  updateRegistrationData('workRegion', data);
                  navigate('/cadastro/data-inicio');
                }}
              />
            }
          />
          <Route 
            path="/data-inicio" 
            element={
              <StartDate 
                data={registrationData.startDate}
                onNext={(data) => {
                  updateRegistrationData('startDate', data);
                  navigate('/cadastro/pagamento');
                }}
              />
            }
          />
          <Route 
            path="/pagamento" 
            element={
              <PaymentInfo 
                data={registrationData.paymentInfo}
                onNext={(data) => {
                  updateRegistrationData('paymentInfo', data);
                  navigate('/cadastro/kit-seguranca');
                }}
              />
            }
          />
          <Route 
            path="/kit-seguranca" 
            element={
              <SafetyKit 
                data={registrationData.safetyKit}
                onNext={(data) => {
                  updateRegistrationData('safetyKit', data);
                  navigate('/cadastro/status');
                }}
              />
            }
          />
          <Route 
            path="/status" 
            element={<RegistrationStatus data={registrationData} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default RegistrationFlow;