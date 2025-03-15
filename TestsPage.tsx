import React from 'react';
import { CheckCircle2, XCircle, BarChart2 } from 'lucide-react';

const TestsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Test Results</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-900">Coverage Summary</h2>
          <div className="mt-4 space-y-4">
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

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-900">Test Suites</h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Unit Tests</span>
              <span className="text-sm font-medium text-green-500">48/50 passing</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Integration Tests</span>
              <span className="text-sm font-medium text-green-500">24/25 passing</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">E2E Tests</span>
              <span className="text-sm font-medium text-red-500">8/10 passing</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-900">Latest Run</h2>
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="text-green-500 h-5 w-5" />
              <span className="text-sm">Completed 5 minutes ago</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p>Duration: 1m 45s</p>
              <p>Total Tests: 85</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Failed Tests</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <XCircle className="h-5 w-5 text-red-500 mt-1" />
              <div>
                <h3 className="text-sm font-medium">User Authentication Flow</h3>
                <p className="text-sm text-gray-500 mt-1">Expected token to be defined, received undefined</p>
                <p className="text-xs text-gray-400 mt-1">src/tests/auth.test.ts:24</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <XCircle className="h-5 w-5 text-red-500 mt-1" />
              <div>
                <h3 className="text-sm font-medium">Payment Processing</h3>
                <p className="text-sm text-gray-500 mt-1">Timeout waiting for payment confirmation</p>
                <p className="text-xs text-gray-400 mt-1">src/tests/payment.test.ts:56</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestsPage;