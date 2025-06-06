import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import PersonalInfoStep from './PersonalInfoStep';
import BusinessInfoStep from './BusinessInfoStep';
import PreferencesStep from './PreferencesStep';
import { useFormValidation } from '../../hooks/useFormValidation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ONBOARDING_STEPS } from '../../utils/constants';

const OnboardingWizard = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    industry: '',
    companySize: '',
    theme: 'light',
    dashboardLayout: 'default'
  });

  const { errors, validate, clearError } = useFormValidation();

  const handleNext = () => {
    if (validate(currentStep, formData)) {
      if (currentStep < ONBOARDING_STEPS.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        onComplete(formData);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    clearError(field);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 1:
        return <BusinessInfoStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 2:
        return <PreferencesStep formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl">
        <ProgressBar currentStep={currentStep} steps={ONBOARDING_STEPS} />
        
        <div className="mb-8">
          {renderCurrentStep()}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              currentStep === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md'
            }`}
          >
            <ChevronLeft size={20} className="mr-2" />
            Back
          </button>
          
          <button
            onClick={handleNext}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            {currentStep === ONBOARDING_STEPS.length - 1 ? 'Complete' : 'Next'}
            {currentStep !== ONBOARDING_STEPS.length - 1 && <ChevronRight size={20} className="ml-2" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;