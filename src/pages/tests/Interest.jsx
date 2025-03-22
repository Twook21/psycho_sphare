import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import TestProgress from '../../components/common/TestProgress';
import QuestionItem from '../../components/common/QuestionItem';
import QuestionNav from '../../components/common/QuestionNav';
import { getQuestionsApi, submitTestApi } from '../../utils/api';

const Interest = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  
  const [testStarted, setTestStarted] = useState(false);
  
  // Mengambil data pertanyaan dari API
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError('');
        
        const result = await getQuestionsApi('interest');
        
        if (result.success) {
          setQuestions(result.questions);
        } else {
          setError(result.error || 'Gagal memuat pertanyaan');
        }
      } catch (err) {
        setError('Terjadi kesalahan. Silakan coba lagi.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchQuestions();
  }, []);
  
  // Handler ketika user memilih jawaban
  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };
  
  // Handler untuk navigasi ke pertanyaan berikutnya
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Handler untuk navigasi ke pertanyaan sebelumnya
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Handler untuk submit test
  const handleSubmitTest = async () => {
    try {
      setSubmitting(true);
      setError('');
      
      // Konversi jawaban dari objek menjadi array
      const answersArray = Object.keys(answers).map(questionId => ({
        questionId: parseInt(questionId),
        answer: answers[questionId]
      }));
      
      const result = await submitTestApi('interest', answersArray);
      
      if (result.success) {
        // Redirect ke halaman hasil
        navigate('/results/interest');
      } else {
        setError(result.error || 'Gagal mengirim jawaban');
      }
    } catch (err) {
      setError('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setSubmitting(false);
    }
  };
  
  // Cek apakah pertanyaan saat ini sudah dijawab
  const isCurrentQuestionAnswered = () => {
    if (!questions.length) return false;
    
    const currentQuestion = questions[currentQuestionIndex];
    return answers[currentQuestion.id] !== undefined;
  };
  
  // Memulai test
  const startTest = () => {
    setTestStarted(true);
    window.scrollTo(0, 0);
  };
  
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
          <div className="flex justify-center items-center py-16">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 dark:border-purple-400 mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">Memuat pertanyaan...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Terjadi Kesalahan</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
            <Button 
              onClick={() => window.location.reload()}
              variant="primary"
            >
              Coba Lagi
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  // Tampilkan instruksi test jika belum dimulai
  if (!testStarted) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Helmet>
          <title>Test Minat - MBTI App</title>
          <meta name="description" content="Ambil test minat untuk mengetahui kecenderungan minat dan preferensi karier Anda berdasarkan Holland Code (RIASEC)." />
          <meta name="keywords" content="test minat, holland code, riasec, karier, pekerjaan, preferensi, psikotes" />
        </Helmet>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transition-colors duration-200">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-700 dark:to-indigo-700 px-8 py-6 text-white">
            <h1 className="text-3xl font-bold">Test Minat</h1>
            <p className="mt-2 text-purple-100">
              Temukan preferensi minat dan kecenderungan karier Anda melalui test berbasis Holland Code (RIASEC).
            </p>
          </div>
          
          <div className="p-8">
            <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-6 mb-8 border border-purple-100 dark:border-purple-800/50 transition-colors duration-200">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500 dark:text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Petunjuk Pengerjaan:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Test ini terdiri dari <strong>{questions.length}</strong> pernyataan tentang aktivitas yang mungkin Anda minati.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Untuk setiap pernyataan, indikasikan seberapa besar minat Anda pada skala 1-5.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Jawablah berdasarkan seberapa menarik aktivitas tersebut bagi Anda, bukan berdasarkan kemampuan atau pengalaman Anda.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Waktu pengerjaan sekitar <strong className="text-purple-600 dark:text-purple-400">10-15 menit</strong>.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Anda dapat kembali ke pernyataan sebelumnya untuk mengubah jawaban.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Pastikan Anda menjawab semua pernyataan untuk mendapatkan hasil yang akurat.</span>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center pt-4">
              <Button 
                variant="primary" 
                size="large" 
                onClick={startTest}
              >
                Mulai Test
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  const currentQuestionNumber = currentQuestionIndex + 1;
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>Test Minat - MBTI App</title>
        <meta name="description" content="Ambil test minat untuk mengetahui kecenderungan minat dan preferensi karier Anda berdasarkan Holland Code (RIASEC)." />
        <meta name="keywords" content="test minat, holland code, riasec, karier, pekerjaan, preferensi, psikotes" />
      </Helmet>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
        <div className="mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Test Minat</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Indikasikan seberapa tertarik Anda pada aktivitas berikut.
          </p>
        </div>
        
        <TestProgress 
          current={currentQuestionNumber} 
          total={questions.length} 
        />
        
        {currentQuestion && (
          <QuestionItem 
            question={currentQuestion}
            currentAnswer={answers[currentQuestion.id]}
            onAnswerChange={handleAnswerChange}
          />
        )}
        
        {error && (
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-lg text-red-600 dark:text-red-400">
            {error}
          </div>
        )}
        
        <QuestionNav 
          currentQuestion={currentQuestionNumber}
          totalQuestions={questions.length}
          onNext={handleNextQuestion}
          onPrev={handlePrevQuestion}
          onSubmit={handleSubmitTest}
          disableNext={!isCurrentQuestionAnswered()}
          loading={submitting}
        />
      </div>
    </div>
  );
};

export default Interest;