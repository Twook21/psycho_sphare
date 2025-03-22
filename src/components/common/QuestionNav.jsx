import React from 'react';
import Button from './Button';

const QuestionNav = ({ 
  currentQuestion, 
  totalQuestions, 
  onNext, 
  onPrev, 
  onSubmit, 
  disableNext,
  loading
}) => {
  const isFirstQuestion = currentQuestion === 1;
  const isLastQuestion = currentQuestion === totalQuestions;
  
  return (
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div>
        {!isFirstQuestion && (
          <Button 
            variant="outline" 
            onClick={onPrev}
            disabled={loading}
          >
            Sebelumnya
          </Button>
        )}
      </div>
      
      <div className="flex items-center">
        <div className="text-sm text-gray-500 dark:text-gray-400 mr-4">
          <span className="font-medium text-indigo-600 dark:text-indigo-400">{currentQuestion}</span> dari {totalQuestions}
        </div>
        
        {!isLastQuestion ? (
          <Button 
            variant="primary" 
            onClick={onNext}
            disabled={disableNext || loading}
          >
            Selanjutnya
          </Button>
        ) : (
          <Button 
            variant="primary" 
            onClick={onSubmit}
            disabled={disableNext || loading}
            loading={loading}
          >
            Selesai & Lihat Hasil
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuestionNav;