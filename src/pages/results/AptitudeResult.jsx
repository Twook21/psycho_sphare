import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import { getResultsApi } from '../../utils/api';

const AptitudeResult = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  
  // Fetch hasil dari API
  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setError('');
        
        const response = await getResultsApi('aptitude');
        
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
            <p className="text-gray-600 dark:text-gray-300 mb-6">Anda belum menyelesaikan test bakat.</p>
            <Link to="/tests/aptitude">
              <Button variant="primary">
                Ambil Test Bakat
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
        <title>Hasil Test Bakat - MBTI App</title>
        <meta name="description" content="Hasil test bakat Anda. Temukan kekuatan kognitif, kemampuan, dan potensi Anda di berbagai domain." />
        <meta name="keywords" content="hasil test bakat, kemampuan kognitif, kecerdasan, aptitude, potensi, pengembangan diri" />
      </Helmet>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Hasil Test Bakat</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Berdasarkan jawaban Anda, berikut adalah hasil analisis bakat dan kemampuan Anda.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6 mb-12">
          {/* Score Circle */}
          <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-8">
            <div className="relative flex items-center justify-center rounded-full h-32 w-32 border-4 border-indigo-200 dark:border-indigo-800">
              <div 
                className="absolute inset-2 rounded-full border-8 border-indigo-500 dark:border-indigo-400"
                style={{ 
                  clipPath: `inset(0 0 ${100 - result.overallScore}% 0)` 
                }}
              ></div>
              <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 z-10">{result.overallScore}</span>
            </div>
            <div className="mt-3 font-medium text-gray-600 dark:text-gray-300">Skor Total</div>
          </div>
          
          {/* Summary */}
          <div className="flex-1">
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{result.summary}</p>
          </div>
        </div>
        
        <div className="space-y-12">
          {/* Profil Kemampuan Section */}
          <div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Profil Kemampuan</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {result.domains.map((domain, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800/80 rounded-lg p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-200">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{domain.name}</h3>
                    <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{domain.score}%</div>
                  </div>
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
                    <div 
                      className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out"
                      style={{ 
                        width: `${domain.score}%`,
                        backgroundColor: getDomainColor(domain.score, true)
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {domain.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Saran Pengembangan Section */}
          <div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Saran Pengembangan</h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Berdasarkan profil bakat Anda, berikut adalah beberapa saran untuk mengembangkan kemampuan Anda:
            </p>
            
            <ul className="space-y-3 pl-6">
              {result.developmentSuggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200">{suggestion}</span>
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
          
          <Link to="/">
            <Button variant="secondary">
              Kembali ke Beranda
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

// Helper function untuk menentukan warna berdasarkan skor
const getDomainColor = (score, isDarkMode = false) => {
  if (score >= 85) return isDarkMode ? '#10b981' : '#10b981'; // Green for high scores
  if (score >= 70) return isDarkMode ? '#3b82f6' : '#3b82f6'; // Blue for good scores
  if (score >= 50) return isDarkMode ? '#f59e0b' : '#f59e0b'; // Orange for average scores
  return isDarkMode ? '#ef4444' : '#ef4444'; // Red for low scores
};

export default AptitudeResult;