import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import { getResultsApi } from '../../utils/api';

const PersonalityResult = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  
  // Fetch hasil dari API
  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setError('');
        
        const response = await getResultsApi('personality');
        
        if (response.success) {
          setResult(response.result);
        } else {
          setError(response.error || 'Gagal memuat hasil');
        }
      } catch (err) {
        setError('Terjadi kesalahan. Silakan coba lagi.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchResults();
  }, []);
  
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
          <div className="flex justify-center items-center py-16">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 dark:border-indigo-400 mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">Memuat hasil...</p>
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
  
  if (!result) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Hasil Tidak Ditemukan</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Anda belum menyelesaikan test kepribadian.</p>
            <Link to="/tests/personality">
              <Button variant="primary">
                Ambil Test Kepribadian
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>Hasil Test Kepribadian - MBTI App</title>
        <meta name="description" content={`Hasil test kepribadian Anda adalah ${result.type}. Temukan kekuatan, kelemahan, dan rekomendasi karier berdasarkan tipe kepribadian Anda.`} />
        <meta name="keywords" content={`hasil test mbti, ${result.type}, kepribadian, psikotes, strengths, weaknesses, karier, pengembangan diri`} />
      </Helmet>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Hasil Test Kepribadian</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Berdasarkan jawaban Anda, berikut adalah hasil analisis tipe kepribadian Anda.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-xl p-6 mb-12 text-center">
          <div className="inline-block bg-white dark:bg-gray-800 px-8 py-4 rounded-lg shadow-sm mb-6">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              {result.type}
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
            {result.description}
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Dimensions Section */}
          <div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Dimensi Kepribadian</h2>
            </div>
            
            <div className="space-y-6">
              {result.chartData.dimensions.map((dimension, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800/80 rounded-lg p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-200">
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="text-left">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{dimension.name}</span>
                      <span className="ml-2 font-bold text-indigo-600 dark:text-indigo-400">{dimension.value}%</span>
                    </div>
                    <div className="text-right">
                      <span className="mr-2 font-bold text-gray-500 dark:text-gray-400">{dimension.oppositeValue}%</span>
                      <span className="font-medium text-gray-800 dark:text-gray-200">{dimension.opposite}</span>
                    </div>
                  </div>
                  <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-indigo-500 dark:bg-indigo-400 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${dimension.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Strengths and Weaknesses Section */}
          <div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Kekuatan dan Kelemahan</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-100 dark:border-green-900/50 transition-colors duration-200">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                  <svg className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Kekuatan
                </h3>
                <ul className="space-y-2">
                  {result.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 dark:text-gray-200">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-100 dark:border-red-900/50 transition-colors duration-200">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                  <svg className="h-5 w-5 text-red-500 dark:text-red-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Kelemahan
                </h3>
                <ul className="space-y-2">
                  {result.weaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 dark:text-red-400 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-800 dark:text-gray-200">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Career Recommendations Section */}
          <div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Rekomendasi Karier</h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Berdasarkan tipe kepribadian Anda, berikut adalah beberapa pilihan karier yang mungkin sesuai dengan preferensi dan kekuatan Anda:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {result.careerSuggestions.map((career, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50 dark:bg-indigo-900/20 text-gray-800 dark:text-gray-200 transition-colors duration-200"
                >
                  {career}
                </div>
              ))}
            </div>
          </div>
          
          {/* Personal Development Section */}
          <div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Saran Pengembangan Diri</h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Berikut adalah beberapa saran untuk pengembangan diri berdasarkan tipe kepribadian Anda:
            </p>
            
            <ul className="space-y-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-100 dark:border-blue-900/50">
              {result.personalDevelopment.map((suggestion, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-800 dark:text-gray-200">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Actions */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-wrap justify-center gap-4">
          <Button variant="primary">
            Download Hasil PDF
          </Button>
          
          <Link to="/tests/interest">
            <Button variant="secondary">
              Lanjut ke Test Minat
            </Button>
          </Link>
          
          <Link to="/results/recommendations">
            <Button variant="outline">
              Lihat Rekomendasi Karier
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalityResult;