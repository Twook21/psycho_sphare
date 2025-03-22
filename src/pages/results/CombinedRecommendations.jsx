import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import useTestResults from '../../hooks/useTestResults';
import { getCombinedRecommendationsApi } from '../../utils/api';

const CombinedRecommendations = () => {
  const personalityResults = useTestResults('personality');
  const interestResults = useTestResults('interest');
  const aptitudeResults = useTestResults('aptitude');
  
  const [combinedRecommendations, setCombinedRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Mengecek status apakah semua test sudah dikerjakan
  const allTestsCompleted = personalityResults.hasCompleted && 
                            interestResults.hasCompleted && 
                            aptitudeResults.hasCompleted;
  
  // Mengambil rekomendasi kombinasi jika semua test sudah selesai
  useEffect(() => {
    const fetchCombinedRecommendations = async () => {
      if (!allTestsCompleted) return;
      
      try {
        setLoading(true);
        setError('');
        
        const response = await getCombinedRecommendationsApi();
        
        if (response.success) {
          setCombinedRecommendations(response.recommendations);
        } else {
          setError(response.error || 'Gagal memuat rekomendasi');
        }
      } catch (err) {
        setError('Terjadi kesalahan. Silakan coba lagi.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchCombinedRecommendations();
  }, [allTestsCompleted]);
  
  // Status loading ketika sedang memuat data
  if (personalityResults.loading || interestResults.loading || aptitudeResults.loading || loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
          <div className="flex justify-center items-center py-16">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 dark:border-indigo-400 mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">Memuat rekomendasi...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Status error jika ada kesalahan
  if (personalityResults.error || interestResults.error || aptitudeResults.error || error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Terjadi Kesalahan</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {personalityResults.error || interestResults.error || aptitudeResults.error || error}
            </p>
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
  
  // Jika belum semua test dikerjakan
  if (!allTestsCompleted) {
    const incompleteTests = [];
    if (!personalityResults.hasCompleted) incompleteTests.push('Kepribadian');
    if (!interestResults.hasCompleted) incompleteTests.push('Minat');
    if (!aptitudeResults.hasCompleted) incompleteTests.push('Bakat');
    
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Test Belum Lengkap</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
              Untuk mendapatkan rekomendasi karier yang komprehensif, Anda perlu menyelesaikan semua test berikut:
            </p>
            
            <ul className="space-y-3 mb-8">
              {incompleteTests.map(test => (
                <li key={test} className="inline-block">
                  <Link 
                    to={`/tests/${test.toLowerCase()}`}
                    className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/50 dark:text-indigo-300 dark:hover:bg-indigo-800/70 px-4 py-2 rounded-lg font-medium transition-colors duration-200 mx-2"
                  >
                    Test {test}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  // Jika tidak ada rekomendasi yang ditemukan
  if (!combinedRecommendations) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Rekomendasi Tidak Ditemukan</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Tidak dapat memuat rekomendasi. Silakan coba lagi.</p>
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
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Helmet>
        <title>Rekomendasi Karier - MBTI App</title>
        <meta name="description" content="Rekomendasi karier komprehensif berdasarkan kombinasi hasil test kepribadian, minat, dan bakat Anda." />
        <meta name="keywords" content="rekomendasi karier, mbti, holland code, bakat, kepribadian, minat, kombinasi" />
      </Helmet>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Rekomendasi Karier Komprehensif</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Berdasarkan kombinasi hasil test Anda, berikut adalah rekomendasi karier yang paling sesuai dengan profil Anda.
          </p>
        </div>
        
        {/* Combined Summary */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-6 mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 px-6 py-4 rounded-lg shadow-sm">
              <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-medium">Kepribadian</div>
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{combinedRecommendations.personalityType}</div>
            </div>
            
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-500">+</div>
            
            <div className="bg-white dark:bg-gray-800 px-6 py-4 rounded-lg shadow-sm">
              <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-medium">Minat</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{combinedRecommendations.interestCode}</div>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-200 text-center max-w-3xl mx-auto">
            {combinedRecommendations.description}
          </p>
        </div>
        
        {/* Recommended Careers */}
        <div className="mb-12">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Karier yang Direkomendasikan</h2>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Berdasarkan kombinasi tipe kepribadian <span className="font-medium text-indigo-600 dark:text-indigo-400">{combinedRecommendations.personalityType}</span> dan 
            kode minat <span className="font-medium text-purple-600 dark:text-purple-400">{combinedRecommendations.interestCode}</span> Anda, berikut adalah pilihan karier 
            yang paling sesuai dengan profil Anda:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {combinedRecommendations.careers.map((career, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-800/80 rounded-lg border border-gray-100 dark:border-gray-700 transition-colors duration-200">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mr-4 font-bold">
                  {index + 1}
                </div>
                <div className="font-medium text-gray-800 dark:text-gray-200">{career}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Profile Summary */}
        <div className="mb-12">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Ringkasan Profil Anda</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Personality Card */}
            <div className="bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-lg p-6 shadow-sm transition-colors duration-200">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Kepribadian</h3>
              <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">{combinedRecommendations.personalityType}</div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
                {personalityResults.result?.description?.substring(0, 150)}...
              </p>
              <Link to="/results/personality" className="inline-block mt-2">
                <Button variant="text">Lihat Detail Kepribadian</Button>
              </Link>
            </div>
            
            {/* Interest Card */}
            <div className="bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-lg p-6 shadow-sm transition-colors duration-200">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Minat</h3>
              <div className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">{combinedRecommendations.interestCode}</div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
                {interestResults.result?.description?.substring(0, 150)}...
              </p>
              <Link to="/results/interest" className="inline-block mt-2">
                <Button variant="text">Lihat Detail Minat</Button>
              </Link>
            </div>
            
            {/* Aptitude Card */}
            <div className="bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-lg p-6 shadow-sm transition-colors duration-200">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Bakat</h3>
              <div className="text-xl font-bold text-green-600 dark:text-green-400 mb-3">
                Skor: {aptitudeResults.result?.overallScore}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
                {aptitudeResults.result?.summary?.substring(0, 150)}...
              </p>
              <Link to="/results/aptitude" className="inline-block mt-2">
                <Button variant="text">Lihat Detail Bakat</Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-wrap justify-center gap-4">
          <Button variant="primary">
            Download Rekomendasi PDF
          </Button>
          
          <Link to="/">
            <Button variant="secondary">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CombinedRecommendations;