import React from 'react';
import Card from '../common/Card';

const StatsCard = ({ title, value, icon: Icon, color }) => {
  return (
    <Card hover className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
      </div>
      <div className={`${color} p-3 rounded-lg`}>
        <Icon className="text-white" size={24} />
      </div>
    </Card>
  );
};

export default StatsCard;