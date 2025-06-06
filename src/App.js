import React, { useState, useEffect } from 'react';
import OnboardingWizard from './components/onboarding/OnboardingWizard';
import Dashboard from './components/dashboard/Dashboard';
import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {
  const [userData, setUserData] = useLocalStorage('userData', null);
  const [currentView, setCurrentView] = useState('onboarding');

  useEffect(() => {
    if (userData) {
      setCurrentView('dashboard');
    }
  }, [userData]);

  const handleOnboardingComplete = (data) => {
    setUserData(data);
    setCurrentView('dashboard');
  };

  const resetOnboarding = () => {
    setUserData(null);
    setCurrentView('onboarding');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {currentView === 'onboarding' ? (
        <OnboardingWizard onComplete={handleOnboardingComplete} />
      ) : (
        <Dashboard userData={userData} onReset={resetOnboarding} />
      )}
    </div>
  );
};

export default App;