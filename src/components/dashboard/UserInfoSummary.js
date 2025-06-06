import React from "react";
import Card from '../common/Card';

const UserInfoSummary = ({ userData }) => {
  const InfoItem = ({ label, value, icon }) => (
    <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
      {icon && (
        <div className="flex-shrink-0 w-5 h-5 text-blue-600 mt-0.5">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <dt className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
          {label}
        </dt>
        <dd className="text-sm font-medium text-gray-900 break-words">
          {value || 'Not provided'}
        </dd>
      </div>
    </div>
  );

  // Simple SVG icons
  const UserIcon = () => (
    <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  );

  const EmailIcon = () => (
    <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );

  const BuildingIcon = () => (
    <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
    </svg>
  );

  const IndustryIcon = () => (
    <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
    </svg>
  );

  const UsersIcon = () => (
    <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
  );

  return (
    <Card hover={true} className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <UserIcon />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Account Information</h2>
            <p className="text-sm text-gray-500 mt-1">Your profile and business details</p>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Information */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <UserIcon />
            <h3 className="text-lg font-semibold text-gray-900">Personal Details</h3>
          </div>
          <div className="space-y-3">
            <InfoItem 
              label="Full Name" 
              value={userData?.name} 
              icon={<UserIcon />}
            />
            <InfoItem 
              label="Email Address" 
              value={userData?.email} 
              icon={<EmailIcon />}
            />
          </div>
        </div>

        {/* Business Information */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <BuildingIcon />
            <h3 className="text-lg font-semibold text-gray-900">Business Details</h3>
          </div>
          <div className="space-y-3">
            <InfoItem 
              label="Company Name" 
              value={userData?.companyName} 
              icon={<BuildingIcon />}
            />
            <InfoItem 
              label="Industry" 
              value={userData?.industry} 
              icon={<IndustryIcon />}
            />
            <InfoItem 
              label="Company Size" 
              value={userData?.companySize} 
              icon={<UsersIcon />}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default UserInfoSummary;