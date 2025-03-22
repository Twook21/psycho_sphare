import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear field-specific error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear general login error
    if (loginError) {
      setLoginError('');
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email diperlukan';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password diperlukan';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setLoginError('');
    
    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        navigate('/tests/personality');
      } else {
        setLoginError(result.error || 'Gagal login. Silakan coba lagi.');
      }
    } catch (error) {
      setLoginError('Terjadi kesalahan. Silakan coba lagi nanti.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">Selamat Datang Kembali</h2>
        <p className="text-gray-600 dark:text-gray-300">Masuk ke akun Anda untuk melanjutkan perjalanan penemuan diri</p>
      </div>
      
      {loginError && (
        <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 border border-red-200">
          {loginError}
        </div>
      )}
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-200`}
            placeholder="email@example.com" 
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
              Lupa password?
            </Link>
          </div>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-200`}
              placeholder="••••••••" 
            />
            <button 
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 dark:text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
        </div>
        
        <div className="flex items-center">
          <input 
            id="remember-me" 
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" 
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            Ingat saya
          </label>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 flex justify-center items-center"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Memproses...
            </>
          ) : "Masuk"}
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Belum memiliki akun?{' '}
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
            Daftar sekarang
          </Link>
        </p>
      </div>
      
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">Atau masuk dengan</span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.545 10.239V13.75h4.844c-.196 1.218-.975 2.251-2.081 2.938l1.661 1.288c1.225-1.125 1.934-2.793 1.934-4.775 0-.34-.035-.712-.101-1.058h-6.257v.096z" />
              <path d="M12 7.958c-1.466 0-2.793.574-3.826 1.646l1.631 1.261c.438-.45 1.179-.731 2.195-.731.879 0 1.797.237 2.389.779.457.394.754.95.866 1.676h3.089c-.148-1.147-.673-2.291-1.537-3.123-.861-.832-2.015-1.508-3.604-1.508H12z" />
              <path d="M12 17.25c2.615 0 4.817-.895 6.412-2.537l-1.661-1.288c-.862.682-1.946 1.075-3.138 1.075-2.299 0-4.256-1.555-4.955-3.645H5.145v1.332c1.146 2.755 3.814 5.063 6.855 5.063z" />
              <path d="M7.658 12.144c-.177-.511-.275-1.057-.275-1.619 0-.563.098-1.109.275-1.619V7.574H4.145c-.49.962-.757 2.044-.757 3.176 0 1.132.267 2.214.757 3.176l3.513-1.782z" />
              <path d="M12 4.5c1.469 0 2.773.538 3.813 1.61l1.453-1.453C15.695 3.021 13.938 2.25 12 2.25 9.059 2.25 6.381 3.554 4.9 5.633l1.613 1.245C7.226 5.781 9.318 4.5 12 4.5z" />
            </svg>
            Google
          </button>
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            Facebook
          </button>
        </div>
      </div>
      
      {/* Demo user info */}
      <div className="mt-8 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <p className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">Demo Info:</p>
        <p className="text-sm text-blue-700 dark:text-blue-400">Email: user@example.com</p>
        <p className="text-sm text-blue-700 dark:text-blue-400">Password: password123</p>
      </div>
    </div>
  );
};

export default LoginForm;