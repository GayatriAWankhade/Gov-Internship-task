import React from 'react';
import { THEMES, DASHBOARD_LAYOUTS } from '../../utils/constants';

const PreferencesStep = ({ formData, updateFormData }) => {
  const PreferenceCard = ({ 
    option, 
    isSelected, 
    onClick, 
    children, 
    ariaLabel 
  }) => (
    <div
      onClick={onClick}
      className={`
        group relative p-6 border-2 rounded-xl cursor-pointer 
        transition-all duration-300 ease-in-out transform hover:scale-[1.02]
        ${isSelected 
          ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg ring-2 ring-blue-200' 
          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
        }
      `}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
      
      {children}
      
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
          {option.label}
        </h3>
        {option.description && (
          <p className="text-xs text-gray-500 mt-1">{option.description}</p>
        )}
      </div>
    </div>
  );

  const ThemePreview = ({ theme }) => (
    <div className="w-full h-20 rounded-lg overflow-hidden shadow-inner border">
      <div className={`w-full h-full ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-gray-50 to-white' 
          : theme === 'dark'
          ? 'bg-gradient-to-br from-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900'
      }`}>
        <div className="p-3 space-y-2">
          <div className={`h-2 w-16 rounded ${
            theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'
          }`} />
          <div className={`h-1.5 w-12 rounded ${
            theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
          }`} />
          <div className={`h-1.5 w-8 rounded ${
            theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
          }`} />
        </div>
      </div>
    </div>
  );

  const LayoutPreview = ({ layout }) => {
    const gridCols = layout === 'compact' ? 'grid-cols-3' : layout === 'wide' ? 'grid-cols-2' : 'grid-cols-1';
    const itemCount = layout === 'compact' ? 6 : layout === 'wide' ? 4 : 3;
    
    return (
      <div className="w-full h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 border shadow-inner">
        <div className={`grid gap-2 h-full ${gridCols}`}>
          {Array.from({ length: itemCount }).map((_, i) => (
            <div 
              key={i} 
              className="bg-white rounded border shadow-sm flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-blue-300 rounded-full opacity-60" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Theme Selection */}
      <section>
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            Choose Your Theme
          </h2>
          <p className="text-sm text-gray-600">
            Select the visual appearance that best suits your preference
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {THEMES.map((theme) => (
            <PreferenceCard
              key={theme.value}
              option={theme}
              isSelected={formData.theme === theme.value}
              onClick={() => updateFormData('theme', theme.value)}
              ariaLabel={`Select ${theme.label} theme`}
            >
              <ThemePreview theme={theme.value} />
            </PreferenceCard>
          ))}
        </div>
      </section>

      {/* Dashboard Layout Selection */}
      <section>
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            Dashboard Layout
          </h2>
          <p className="text-sm text-gray-600">
            Choose how you want your dashboard information to be organized
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DASHBOARD_LAYOUTS.map((layout) => (
            <PreferenceCard
              key={layout.value}
              option={layout}
              isSelected={formData.dashboardLayout === layout.value}
              onClick={() => updateFormData('dashboardLayout', layout.value)}
              ariaLabel={`Select ${layout.label} dashboard layout`}
            >
              <LayoutPreview layout={layout.value} />
            </PreferenceCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PreferencesStep;