import React from 'react';
import { CheckCircle2, XCircle, BarChart2 } from 'lucide-react';

interface TestResultsProps {
  expanded?: boolean;
}

const TestResults: React.FC<TestResultsProps> = ({ expanded = false }) => {
  return (
    <div className="mt-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="text-green-500 h-5 w-5" />
          <span className="text-sm font-medium text-gray-700">Unit Tests: 98% passing</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="text-green-500 h-5 w-5" />
          <span className="text-sm font-medium text-gray-700">Integration Tests: 95% passing</span>
        </div>
        <div className="flex items-center space-x-2">
          <XCircle className="text-red-500 h-5 w-5" />
          <span className="text-sm font-medium text-gray-700">E2E Tests: 2 failing</span>
        </div>
      </div>

      {expanded && (
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="font-medium text-gray-700">Test Coverage Details</h3>
            <div className="mt-3 space-y-3">
              <div>
                <div className="flex justify-between text-sm">
                  <span>Lines</span>
                  <span className="font-medium">98%</span>
                </div>
                <div className="mt-1 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span>Functions</span>
                  <span className="font-medium">95%</span>
                </div>
                <div className="mt-1 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span>Branches</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="mt-1 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="font-medium text-gray-700">Failed Tests</h3>
            <div className="mt-3 space-y-2">
              <div className="flex items-start space-x-2">
                <XCircle className="h-4 w-4 text-red-500 mt-1" />
                <div>
                  <p className="text-sm font-medium">User Authentication Flow</p>
                  <p className="text-xs text-gray-500">Expected token to be defined, received undefined</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <XCircle className="h-4 w-4 text-red-500 mt-1" />
                <div>
                  <p className="text-sm font-medium">Payment Processing</p>
                  <p className="text-xs text-gray-500">Timeout waiting for payment confirmation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestResults;