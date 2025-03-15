import React from 'react';
import { CheckCircle2, XCircle, Clock, GitCommit } from 'lucide-react';

const BuildsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Build History</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-6">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {index === 0 && <Clock className="h-5 w-5 text-yellow-500" />}
                  {index === 1 && <XCircle className="h-5 w-5 text-red-500" />}
                  {index > 1 && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Build #{124 - index}</h3>
                    <p className="text-sm text-gray-500">{index === 0 ? 'In Progress' : index === 1 ? 'Failed' : 'Successful'}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{index === 0 ? '2m ago' : `${index * 2}h ago`}</span>
              </div>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="text-sm font-medium text-gray-700">Commit</h4>
                  <div className="mt-2 flex items-start space-x-2">
                    <GitCommit className="h-4 w-4 text-gray-500 mt-1" />
                    <div>
                      <p className="text-sm">feat: Add new CI pipeline configuration</p>
                      <p className="text-xs text-gray-500">by John Doe</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="text-sm font-medium text-gray-700">Duration</h4>
                  <p className="mt-2 text-sm">{index === 0 ? '2m (running)' : '2m 34s'}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="text-sm font-medium text-gray-700">Tests</h4>
                  <p className="mt-2 text-sm">{index === 1 ? '23/25 passed' : '25/25 passed'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildsPage;