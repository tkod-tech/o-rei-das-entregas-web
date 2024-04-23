import { MapPin, Mail, User, Check  } from 'lucide-react'

const ProgressIndicator = ({ currentStep }: { currentStep: number }) => {
  const icons = [
    { icon: <User />, label: 'Pessoal' },
    { icon: <MapPin />, label: 'Localização' },
    { icon: <Mail />, label: 'Acesso' },
  ];
  
  return (
    <div className="flex space-x-8">
      {icons.map((step, index) => (
        <div key={index} className="relative"> 
          {index !== 0 && (
            <div className={`absolute top-4 -left-10 h-0.5 w-6 ml-3 ${index <= currentStep ? 'bg-red-500' : 'bg-gray-300'}`}></div>
          )}

          <div className="flex items-center flex-col">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${index === currentStep ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-500'} && ${index < currentStep ? 'bg-red-500 text-white': ''}`}>
              {index < currentStep ? <Check /> : step.icon }

            </div>
            <div className={`ml-2 ${index === currentStep ? 'text-red-500' : 'text-gray-500'}`}>{step.label}</div>
          </div>

        </div>
      ))}
    </div>
  );
};


export default ProgressIndicator;