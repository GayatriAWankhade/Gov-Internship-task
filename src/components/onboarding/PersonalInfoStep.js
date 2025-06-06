import React from 'react';
import { User, Mail, Shield, ArrowRight } from 'lucide-react';
import Input from '../common/Input';

const PersonalInfoStep = ({ formData, updateFormData, errors }) => {
  // Validation helpers
  const isValidEmail = (email) => {
    return email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const isValidName = (name) => {
    return name && name.trim().length >= 2;
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl mb-6 shadow-2xl shadow-blue-500/25 relative">
          <User className="w-10 h-10 text-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl animate-pulse opacity-75" />
        </div>
        
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
          Personal Information
        </h1>
        
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Let's get to know you better. Your information is encrypted and secure with us.
        </p>
        
        {/* Security Badge */}
        <div className="inline-flex items-center space-x-2 mt-6 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm font-medium">
          <Shield size={16} />
          <span>256-bit SSL Encrypted</span>
        </div>
      </div>

      {/* Main Form Card */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
        {/* Gradient Background */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500" />
        
        <div className="p-8 md:p-12">
          <div className="space-y-8">
            {/* Full Name Input */}
            <Input
              label="Full Name"
              type="text"
              value={formData.name || ''}
              onChange={(e) => updateFormData('name', e.target.value)}
              placeholder="Enter your full name"
              error={errors.name}
              success={isValidName(formData.name) ? "Looks good!" : null}
              required
              icon={User}
              hint="This will be displayed on your profile"
            />
            
            {/* Email Address Input */}
            <Input
              label="Email Address"
              type="email"
              value={formData.email || ''}
              onChange={(e) => updateFormData('email', e.target.value)}
              placeholder="Enter your email address"
              error={errors.email}
              success={isValidEmail(formData.email) ? "Valid email address" : null}
              required
              icon={Mail}
              hint="We'll use this to send you important updates"
            />
          </div>
          
          {/* Form Footer */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Your data is secure and private</span>
              </div>
              
              <div className="flex items-center space-x-2 text-blue-600 font-medium">
                <span>Continue</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-12 flex justify-center">
        <div className="flex items-center space-x-3">
          {/* Step 1 - Active */}
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full shadow-lg shadow-blue-600/50 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-sm font-medium text-blue-600">Personal Info</span>
          </div>
          
          {/* Connection Line */}
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-gray-200" />
          
          {/* Step 2 - Inactive */}
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-200 rounded-full" />
            <span className="text-sm text-gray-400">Next Step</span>
          </div>
          
          {/* Connection Line */}
          <div className="w-20 h-0.5 bg-gray-200" />
          
          {/* Step 3 - Inactive */}
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-200 rounded-full" />
            <span className="text-sm text-gray-400">Complete</span>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
          <p className="text-sm text-gray-600">Your information is protected with enterprise-grade security</p>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
          <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <User className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Private</h3>
          <p className="text-sm text-gray-600">We never share your personal data with third parties</p>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Verified</h3>
          <p className="text-sm text-gray-600">Email verification ensures account security</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoStep;