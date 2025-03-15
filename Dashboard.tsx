import React, { useState, useEffect } from 'react';
import { Activity, GitBranch, Check, AlertCircle } from 'lucide-react';
import BuildStatus from './BuildStatus';
import TestResults from './TestResults';
import DeploymentStatus from './DeploymentStatus';

const Dashboard: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="space-y-6">
      <h1 className={`text-4xl font-bold gradient-text mb-8 ${isLoaded ? 'slide-in' : ''}`}>
        CI/CD Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl card-hover glass-effect
            ${expandedCard === 'build' ? 'col-span-2 row-span-2' : ''}
            ${isLoaded ? 'slide-in' : 'opacity-0'}`}
          style={{ animationDelay: '100ms' }}
          onClick={() => toggleCard('build')}
        >
          <div className="flex items-center space-x-3">
            <Activity className="text-blue-500 animate-pulse-slow" />
            <h2 className="text-xl font-semibold">Build Status</h2>
          </div>
          <BuildStatus expanded={expandedCard === 'build'} />
        </div>

        <div 
          className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl card-hover glass-effect
            ${expandedCard === 'test' ? 'col-span-2 row-span-2' : ''}
            ${isLoaded ? 'slide-in' : 'opacity-0'}`}
          style={{ animationDelay: '200ms' }}
          onClick={() => toggleCard('test')}
        >
          <div className="flex items-center space-x-3">
            <Check className="text-green-500 animate-pulse-slow" />
            <h2 className="text-xl font-semibold">Test Results</h2>
          </div>
          <TestResults expanded={expandedCard === 'test'} />
        </div>

        <div 
          className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl card-hover glass-effect
            ${expandedCard === 'deploy' ? 'col-span-2 row-span-2' : ''}
            ${isLoaded ? 'slide-in' : 'opacity-0'}`}
          style={{ animationDelay: '300ms' }}
          onClick={() => toggleCard('deploy')}
        >
          <div className="flex items-center space-x-3">
            <GitBranch className="text-purple-500 animate-pulse-slow" />
            <h2 className="text-xl font-semibold">Deployments</h2>
          </div>
          <DeploymentStatus expanded={expandedCard === 'deploy'} />
        </div>

        <div 
          className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-500 cursor-pointer hover:shadow-2xl card-hover glass-effect
            ${expandedCard === 'alerts' ? 'col-span-2 row-span-2' : ''}
            ${isLoaded ? 'slide-in' : 'opacity-0'}`}
          style={{ animationDelay: '400ms' }}
          onClick={() => toggleCard('alerts')}
        >
          <div className="flex items-center space-x-3">
            <AlertCircle className="text-red-500 animate-pulse-slow" />
            <h2 className="text-xl font-semibold">Alerts</h2>
          </div>
          {expandedCard === 'alerts' ? (
            <div className="mt-4 space-y-4 slide-in">
              <p className="text-sm text-gray-600">No active alerts</p>
              <div className="p-4 bg-gray-50 rounded-md hover-scale">
                <h3 className="font-medium text-gray-700">Alert History</h3>
                <p className="mt-2 text-sm text-gray-600">No recent alerts in the last 24 hours</p>
              </div>
            </div>
          ) : (
            <p className="mt-2 text-sm text-gray-600">No active alerts</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;