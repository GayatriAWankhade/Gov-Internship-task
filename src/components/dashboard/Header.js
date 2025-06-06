import React from 'react';

const Header = ({ userData, onReset }) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, {userData?.name}! 👋
            </h1>
            <p className="text-gray-600 mt-1">
              {userData?.companyName} • {userData?.industry}
            </p>
          </div>
          <button
            onClick={onReset}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Reset Onboarding
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
