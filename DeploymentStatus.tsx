import React from 'react';
import { CheckCircle2, Clock, GitBranch, ArrowUpCircle } from 'lucide-react';

interface DeploymentStatusProps {
  expanded?: boolean;
}

const DeploymentStatus: React.FC<DeploymentStatusProps> = ({ expanded = false }) => {
  return (
    <div className="mt-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="text-green-500 h-5 w-5" />
          <span className="text-sm font-medium text-gray-700">Production: v1.2.3</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="text-yellow-500 h-5 w-5" />
          <span className="text-sm font-medium text-gray-700">Staging: Deploying v1.2.4</span>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600">Last deployed: 2 hours ago</p>

      {expanded && (
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="font-medium text-gray-700">Deployment History</h3>
            <div className="mt-3 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-green-500 h-4 w-4" />
                  <span>v1.2.3</span>
                </div>
                <span className="text-sm text-gray-500">2h ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-green-500 h-4 w-4" />
                  <span>v1.2.2</span>
                </div>
                <span className="text-sm text-gray-500">1d ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-green-500 h-4 w-4" />
                  <span>v1.2.1</span>
                </div>
                <span className="text-sm text-gray-500">2d ago</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="font-medium text-gray-700">Environment Status</h3>
            <div className="mt-3 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GitBranch className="text-purple-500 h-4 w-4" />
                  <span>Production</span>
                </div>
                <span className="text-green-500 font-medium">Healthy</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GitBranch className="text-purple-500 h-4 w-4" />
                  <span>Staging</span>
                </div>
                <span className="text-yellow-500 font-medium">Deploying</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GitBranch className="text-purple-500 h-4 w-4" />
                  <span>Development</span>
                </div>
                <span className="text-green-500 font-medium">Healthy</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeploymentStatus;