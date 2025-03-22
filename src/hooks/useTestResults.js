import { useState, useEffect } from 'react';
import { getResultsApi } from '../utils/api';

/**
 * Hook untuk mengambil dan mengelola hasil test
 * @param {string} testType - Tipe test ('personality', 'interest', 'aptitude')
 * @returns {Object} Result state dan methods
 */
const useTestResults = (testType) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const fetchResults = async () => {
    try {
      setLoading(true);
      setError('');
      
      const response = await getResultsApi(testType);
      
      if (response.success) {
        setResult(response.result);
      } else {
        setError(response.error || `Gagal memuat hasil test ${testType}`);
      }
    } catch (err) {
      setError('Terjadi kesalahan. Silakan coba lagi.');
      console.error(`Error fetching ${testType} results:`, err);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchResults();
  }, [testType]);
  
  const refreshResults = () => {
    fetchResults();
  };
  
  const hasCompleted = Boolean(result);
  
  return {
    result,
    loading,
    error,
    refreshResults,
    hasCompleted
  };
};

export default useTestResults;