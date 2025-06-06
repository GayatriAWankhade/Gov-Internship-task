import React from 'react';
import Header from './Header';
import StatsCard from './StatsCard';
import WeeklyChart from './WeeklyChart';
import UserInfoSummary from './UserInfoSummary';
import { Users, FolderOpen, Bell } from 'lucide-react';

const Dashboard = ({ userData, onReset }) => {
  const stats = [
    { title: 'Team Members', value: '12', icon: Users, color: 'bg-blue-500' },
    { title: 'Active Projects', value: '8', icon: FolderOpen, color: 'bg-green-500' },
    { title: 'Notifications', value: '5', icon: Bell, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userData={userData} onReset={onReset} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className={`grid gap-6 mb-8 ${
          userData?.dashboardLayout === 'compact' 
            ? 'grid-cols-1 md:grid-cols-3' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <WeeklyChart />
        <UserInfoSummary userData={userData} />
      </main>
    </div>
  );
};

export default Dashboard;