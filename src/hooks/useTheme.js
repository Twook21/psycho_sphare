import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

/**
 * Custom hook untuk mengakses dan menggunakan ThemeContext
 * @returns {Object} Theme context values dan methods
 */
const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

export default useTheme;