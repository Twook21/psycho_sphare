import React from 'react';

const QuestionItem = ({ 
  question, 
  currentAnswer, 
  onAnswerChange 
}) => {
  // Handler untuk pilihan jawaban
  const handleSelect = (value) => {
    onAnswerChange(question.id, value);
  };
  
  // Jika pertanyaan tipe pilihan ganda (multiple choice)
  if (question.answerOptions) {
    return (
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-6 transition-colors duration-200">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">{question.question}</h3>
        
        <div className="space-y-3">
          {question.answerOptions.map((option) => (
            <div 
              key={option.value} 
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 
                ${currentAnswer === option.value 
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700' 
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700/50 border border-transparent'
                }`}
              onClick={() => handleSelect(option.value)}
            >
              <div className="mr-3 relative flex items-center justify-center">
                <div className={`w-5 h-5 rounded-full border-2 ${
                  currentAnswer === option.value 
                    ? 'border-indigo-600 dark:border-indigo-400' 
                    : 'border-gray-400 dark:border-gray-500'
                  }`}>
                  {currentAnswer === option.value && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                    </div>
                  )}
                </div>
              </div>
              <span className={`text-gray-700 dark:text-gray-200 ${
                currentAnswer === option.value ? 'font-medium' : ''
              }`}>
                {option.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  // Jika pertanyaan tipe open-ended (jawaban terbuka)
  if (question.type === 'openEnded') {
    return (
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-6 transition-colors duration-200">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">{question.question}</h3>
        
        <div className="mt-3">
          <textarea
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200 resize-none"
            value={currentAnswer || ''}
            onChange={(e) => handleSelect(e.target.value)}
            placeholder="Tuliskan jawaban Anda di sini..."
            rows={5}
          />
        </div>
      </div>
    );
  }
  
  // Jika ada tipe pertanyaan lain yang belum di-handle
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-6 transition-colors duration-200">
      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">{question.question}</h3>
      <p className="text-red-500 dark:text-red-400 italic">Tipe pertanyaan tidak didukung</p>
    </div>
  );
};

export default QuestionItem;