import { useState } from 'react';
import { validateStep } from '../utils/validation';

export const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validate = (step, formData) => {
    const newErrors = validateStep(step, formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearError = (field) => {
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const clearAllErrors = () => {
    setErrors({});
  };

  return { errors, validate, clearError, clearAllErrors };
};