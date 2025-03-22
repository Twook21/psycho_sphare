import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function (using dummy data for now)
  const login = async (email, password) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo users - in real app, this would be validated by the backend
      if (email === 'siswa@example.com' && password === 'password123') {
        const user = {
          ptk_id: '101',
          email: 'siswa@example.com',
          nama: 'Ahmad Rizky',
          level_id: 3, // Siswa
          nisn: '1001001001',
          rombel: 'X IPA 1'
        };
        
        setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        return { success: true, user };
      } 
      else if (email === 'gurubk@example.com' && password === 'password123') {
        const user = {
          ptk_id: '201',
          email: 'gurubk@example.com',
          nama: 'Budi Santoso',
          level_id: 4, // Guru BK
        };
        
        setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        return { success: true, user };
      }
      else {
        throw new Error('Email atau password salah');
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Register function (using dummy data for now)
  const register = async (name, email, password) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo validation (in real app, this would check if email exists, etc.)
      const user = {
        ptk_id: Date.now().toString(),
        nama: name,
        email,
        level_id: 3, // Default to student
        nisn: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
        rombel: 'X IPA 1'
      };
      
      setCurrentUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true, user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  // Update user profile
  const updateUserProfile = (userData) => {
    const updatedUser = { ...currentUser, ...userData };
    setCurrentUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    return { success: true, user: updatedUser };
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    updateUserProfile,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;