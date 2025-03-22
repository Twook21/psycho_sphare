import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

/**
 * Custom hook untuk mengakses dan menggunakan AuthContext
 * @returns {Object} Auth context values dan methods
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  // Menyediakan alias untuk kompatibilitas dengan kode yang ada
  const currentUser = context.currentUser;
  
  return {
    ...context,
    user: currentUser, // Alias untuk memastikan kompatibilitas dengan komponen Anda
  };
};

// Juga menyediakan default export untuk kompatibilitas
export default useAuth;