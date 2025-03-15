import React from 'react';
import { CheckCircle2, Clock, GitCommit } from 'lucide-react';

interface BuildStatusProps {
  expanded?: boolean;
}

const BuildStatus: React.FC<BuildStatusProps> = ({ expanded = false }) => {
  return (
    <div className="mt-4">
      <div className="flex items-center space-x-2">
        <CheckCircle2 className="text-green-500 h-5 w-5" />
        <span className="text-sm font-medium text-gray-700">Latest build successful</span>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <p>Build #124 completed 5 minutes ago</p>
        <p className="mt-1">Duration: 2m 34s</p>
      </div>
      
      {expanded && (
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="font-medium text-gray-700">Recent Builds</h3>
            <div className="mt-3 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-green-500 h-4 w-4" />
                  <span>Build #124</span>
                </div>
                <span className="text-sm text-gray-500">5m ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-green-500 h-4 w-4" />
                  <span>Build #123</span>
                </div>
                <span className="text-sm text-gray-500">1h ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="text-yellow-500 h-4 w-4" />
                  <span>Build #122</span>
                </div>
                <span className="text-sm text-gray-500">2h ago</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="font-medium text-gray-700">Latest Commit</h3>
            <div className="mt-3 flex items-start space-x-2">
              <GitCommit className="h-4 w-4 text-gray-500 mt-1" />
              <div>
                <p className="text-sm font-medium">feat: Add new CI pipeline configuration</p>
                <p className="text-xs text-gray-500">by John Doe • 5m ago</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuildStatus;