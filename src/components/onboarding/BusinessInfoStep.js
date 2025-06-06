import React from 'react';
import { Building2, Users, Briefcase } from 'lucide-react';

// Mock Input component for demo
const Input = ({ label, value, onChange, placeholder, error, required, icon: Icon }) => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
      {Icon && <Icon size={16} className="text-blue-600" />}
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3.5 border-2 rounded-xl bg-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 hover:border-gray-400 ${
          error ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-gray-200'
        }`}
      />
    </div>
    {error && (
      <p className="text-sm text-red-600 flex items-center gap-1 mt-2">
        <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-xs">!</span>
        {error}
      </p>
    )}
  </div>
);

// Mock constants for demo
const INDUSTRIES = [
  { value: 'technology', label: 'Technology' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'finance', label: 'Finance' },
  { value: 'education', label: 'Education' },
  { value: 'retail', label: 'Retail' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'other', label: 'Other' }
];

const COMPANY_SIZES = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '501-1000', label: '501-1000 employees' },
  { value: '1000+', label: '1000+ employees' }
];

const BusinessInfoStep = ({ 
  formData = { companyName: '', industry: '', companySize: '' }, 
  updateFormData = () => {}, 
  errors = {} 
}) => {
  const SelectField = ({ label, value, onChange, options, error, placeholder, icon: Icon }) => (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
        {Icon && <Icon size={16} className="text-blue-600" />}
        {label}
        <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3.5 border-2 rounded-xl bg-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 hover:border-gray-400 appearance-none cursor-pointer ${
            error ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-gray-200'
          }`}
        >
          <option value="" disabled className="text-gray-400">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-gray-900">
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1 mt-2">
          <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-xs">!</span>
          {error}
        </p>
      )}
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Business Information</h2>
        <p className="text-gray-600">Tell us about your company to personalize your experience</p>
      </div>

      {/* Form Fields */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="space-y-6">
          {/* Company Name */}
          <Input
            label="Company Name"
            value={formData.companyName}
            onChange={(e) => updateFormData('companyName', e.target.value)}
            placeholder="Enter your company name"
            error={errors.companyName}
            required
            icon={Building2}
          />

          {/* Industry Selection */}
          <SelectField
            label="Industry"
            value={formData.industry}
            onChange={(e) => updateFormData('industry', e.target.value)}
            options={INDUSTRIES}
            error={errors.industry}
            placeholder="Select your industry"
            icon={Briefcase}
          />

          {/* Company Size Selection */}
          <SelectField
            label="Company Size"
            value={formData.companySize}
            onChange={(e) => updateFormData('companySize', e.target.value)}
            options={COMPANY_SIZES}
            error={errors.companySize}
            placeholder="Select company size"
            icon={Users}
          />
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Step 2 of 4</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Text */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          This information helps us customize features and recommendations for your business
        </p>
      </div>
    </div>
  );
};

export default BusinessInfoStep;