import React, { useState, useEffect } from 'react';
import { checkEmailConfiguration } from '../services/testUtils';

export default function ConfigStatus() {
  const [config, setConfig] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Only show in development mode
    if (import.meta.env.DEV) {
      const configStatus = checkEmailConfiguration();
      setConfig(configStatus);
    }
  }, []);

  // Don't render in production
  if (!import.meta.env.DEV || !config) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setShowDetails(!showDetails)}
        className={`px-4 py-2 rounded-lg shadow-lg text-white font-medium transition-all ${
          config.anyConfigured 
            ? 'bg-green-500 hover:bg-green-600' 
            : 'bg-red-500 hover:bg-red-600 animate-pulse'
        }`}
      >
        📧 {config.anyConfigured ? 'Email Configured' : 'Email Not Configured'}
      </button>
      
      {showDetails && (
        <div className="absolute bottom-12 right-0 bg-white rounded-lg shadow-xl p-4 w-80 border">
          <h3 className="font-bold text-gray-800 mb-3">Email Service Status</h3>
          <div className="space-y-2 text-sm">
            <div className={`flex items-center gap-2 ${config.emailjs ? 'text-green-600' : 'text-gray-500'}`}>
              <span>{config.emailjs ? '✅' : '❌'}</span>
              <span>EmailJS</span>
            </div>
            <div className={`flex items-center gap-2 ${config.formspree ? 'text-green-600' : 'text-gray-500'}`}>
              <span>{config.formspree ? '✅' : '❌'}</span>
              <span>Formspree</span>
            </div>
            <div className={`flex items-center gap-2 ${config.customApi ? 'text-green-600' : 'text-gray-500'}`}>
              <span>{config.customApi ? '✅' : '❌'}</span>
              <span>Custom API</span>
            </div>
          </div>
          
          {!config.anyConfigured && (
            <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
              <p><strong>Forms won't send emails!</strong></p>
              <p>Check BACKEND_SETUP.md for configuration instructions.</p>
            </div>
          )}
          
          <div className="mt-3 pt-3 border-t text-xs text-gray-600">
            <p><strong>Console Commands:</strong></p>
            <code className="block bg-gray-100 p-1 rounded mt-1">
              automaaniTest.checkConfiguration()
            </code>
            <code className="block bg-gray-100 p-1 rounded mt-1">
              automaaniTest.testContact()
            </code>
          </div>
        </div>
      )}
    </div>
  );
}
