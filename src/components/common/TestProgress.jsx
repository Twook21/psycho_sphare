import React from 'react';

const TestProgress = ({ current, total }) => {
  const percentage = Math.floor((current / total) * 100);
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Pertanyaan {current} dari {total}
        </span>
        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden transition-colors duration-200">
        <div 
          className="bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 h-2.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TestProgress;