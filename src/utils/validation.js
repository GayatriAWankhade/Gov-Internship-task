export const validateStep = (step, formData) => {
  const errors = {};
  
  if (step === 0) {
    if (!formData.name?.trim()) errors.name = 'Name is required';
    if (!formData.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
  } else if (step === 1) {
    if (!formData.companyName?.trim()) errors.companyName = 'Company name is required';
    if (!formData.industry) errors.industry = 'Industry is required';
    if (!formData.companySize) errors.companySize = 'Company size is required';
  }
  
  return errors;
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};