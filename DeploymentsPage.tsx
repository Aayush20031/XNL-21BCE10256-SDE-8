import React from 'react';
import { CheckCircle2, Clock, GitBranch, ArrowUpCircle } from 'lucide-react';

const DeploymentsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Deployments</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Production</h2>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">Healthy</span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">Current Version: v1.2.3</p>
            <p className="text-sm text-gray-600">Last Deploy: 2h ago</p>
            <div className="mt-2 flex items-center space-x-2">
              <CheckCircle2 className="text-green-500 h-4 w-4" />
              <span className="text-sm text-gray-700">All systems operational</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Staging</h2>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Deploying</span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">Current Version: v1.2.4</p>
            <p className="text-sm text-gray-600">Deploy Started: 5m ago</p>
            <div className="mt-2 flex items-center space-x-2">
              <Clock className="text-yellow-500 h-4 w-4" />
              <span className="text-sm text-gray-700">Deployment in progress</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Development</h2>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">Healthy</span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">Current Version: v1.2.4-dev</p>
            <p className="text-sm text-gray-600">Last Deploy: 30m ago</p>
            <div className="mt-2 flex items-center space-x-2">
              <CheckCircle2 className="text-green-500 h-4 w-4" />
              <span className="text-sm text-gray-700">All systems operational</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Deployment History</h2>
          <div className="space-y-6">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-start space-x-4 pb-6 border-b last:border-b-0 last:pb-0">
                <div className="flex-shrink-0">
                  {index === 0 ? (
                    <Clock className="h-6 w-6 text-yellow-500" />
                  ) : (
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Version {1.2 + index/10}</h3>
                    <span className="text-sm text-gray-500">{index === 0 ? '5m ago' : `${index * 2}h ago`}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Deployed to {index === 0 ? 'staging' : 'production'}
                  </p>
                  <div className="mt-2 flex items-center space-x-2">
                    <GitBranch className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">main</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  {index === 0 ? (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">In Progress</span>
                  ) : (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">Success</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentsPage;