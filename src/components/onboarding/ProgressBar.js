import React from 'react';
import { User, Building, Settings, Check } from 'lucide-react';

const iconMap = {
  User,
  Building,
  Settings
};

const ProgressBar = ({ currentStep, steps }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon];
          return (
            <div key={index} className="flex items-center">
              <div className={`rounded-full p-3 ${
                index <= currentStep 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-400'
              } transition-all duration-300`}>
                {index < currentStep ? <Check size={20} /> : <Icon size={20} />}
              </div>
              {index < steps.length - 1 && (
                <div className={`h-1 w-16 mx-4 ${
                  index < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                } transition-all duration-300`} />
              )}
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">{steps[currentStep].title}</h2>
        <p className="text-gray-600 mt-1">Step {currentStep + 1} of {steps.length}</p>
      </div>
    </div>
  );
};

export default ProgressBar;