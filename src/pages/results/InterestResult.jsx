import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import { getResultsApi } from '../../utils/api';

const InterestResult = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  
  // Fetch hasil dari API
  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setError('');
        
        const response = await getResultsApi('interest');
        
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
            <p className="text-gray-600 dark:text-gray-300 mb-6">Anda belum menyelesaikan test minat.</p>
            <Link to="/tests/interest">
              <Button variant="primary">
                Ambil Test Minat
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
        <title>Hasil Test Minat - MBTI App</title>
        <meta name="description" content={`Hasil test minat Anda adalah ${result.primaryCode}. Temukan minat, kecenderungan karier, dan lingkungan kerja yang sesuai untuk Anda.`} />
        <meta name="keywords" content={`hasil test minat, holland code, riasec, ${result.primaryCode}, karier, pekerjaan, preferensi, minat`} />
      </Helmet>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Hasil Test Minat</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Berdasarkan jawaban Anda, berikut adalah hasil analisis minat dan preferensi karier Anda.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl p-6 mb-12 text-center">
          <div className="inline-block bg-white dark:bg-gray-800 px-8 py-4 rounded-lg shadow-sm mb-6">
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              {result.primaryCode}
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
            {result.description}
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Interest Types Section */}
          <div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Tipe Minat Dominan</h2>
            </div>
            
            <div className="space-y-6">
              {result.topInterests.map((interest, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800/80 rounded-lg p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-200">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{interest.type}</h3>
                    <div className="text-lg font-bold" style={{ color: getInterestColor(interest.type, true) }}>{interest.score}%</div>
                  </div>
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
                    <div 
                      className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out"
                      style={{ 
                        width: `${interest.score}%`,
                        backgroundColor: getInterestColor(interest.type, true)
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Career Recommendations Section */}
          <div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Rekomendasi Karier</h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Berdasarkan profil minat Anda, berikut adalah beberapa pilihan karier yang mungkin sesuai dengan preferensi dan minat Anda:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {result.careerSuggestions.map((career, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg border border-purple-100 dark:border-purple-900/50 bg-purple-50 dark:bg-purple-900/20 text-gray-800 dark:text-gray-200 transition-colors duration-200"
                >
                  {career}
                </div>
              ))}
            </div>
          </div>
          
          {/* Work Environment Section */}
          <div>
            <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Lingkungan Kerja yang Sesuai</h2>
            </div>
            
            <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-900/50 text-gray-700 dark:text-gray-200">
              {result.workEnvironment}
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-wrap justify-center gap-4">
          <Button variant="primary">
            Download Hasil PDF
          </Button>
          
          <Link to="/tests/aptitude">
            <Button variant="secondary">
              Lanjut ke Test Bakat
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

// Helper function untuk warna minat
const getInterestColor = (interestType, darkMode = false) => {
  const colors = {
    'Realistic': darkMode ? '#60a5fa' : '#3b82f6', // Blue
    'Investigative': darkMode ? '#34d399' : '#10b981', // Green
    'Artistic': darkMode ? '#a78bfa' : '#8b5cf6', // Purple
    'Social': darkMode ? '#fbbf24' : '#f59e0b', // Orange
    'Enterprising': darkMode ? '#f87171' : '#ef4444', // Red
    'Conventional': darkMode ? '#818cf8' : '#6366f1', // Indigo
  };
  
  return colors[interestType] || (darkMode ? '#60a5fa' : '#3b82f6');
};

export default InterestResult;