import { useState, useContext, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import ThemeContext from '@/contexts/ThemeContext';

// Placeholder ThemeToggle component - replace with your actual component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
};

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Dropdown state management
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef({});
  
  const handleLogout = () => {
    logout();
    navigate('/login');
    setMenuOpen(false);
  };
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Close any open dropdowns when toggling the main menu
    setActiveDropdown(null);
  };
  
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && 
          dropdownRefs.current[activeDropdown] && 
          !dropdownRefs.current[activeDropdown].contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);
  
  // Close menu and dropdowns on navigation
  const handleNavigation = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  // Check if user is Guru BK
  const isGuruBK = currentUser && currentUser.level_id === 4;

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Psycho-Sphare
              </h1>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            
            <button 
              onClick={toggleMenu}
              className="ml-2 p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={menuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-4">
            <Link 
              to="/about" 
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Tentang Aplikasi
            </Link>
            
            <Link 
              to="/approach" 
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Pendekatan
            </Link>
            
            {currentUser ? (
              <>
                {/* Dashboard link for Guru BK */}
                {isGuruBK && (
                  <Link 
                    to="/dashboard" 
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    Dashboard BK
                  </Link>
                )}

                {/* Psikotes Dropdown */}
                <div className="relative" ref={el => dropdownRefs.current['psikotes'] = el}>
                  <button 
                    onClick={() => toggleDropdown('psikotes')}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center"
                  >
                    Psikotest
                    <svg 
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'psikotes' ? 'transform rotate-180' : ''}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {activeDropdown === 'psikotes' && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 py-1 z-50 transition-all duration-200">
                      <Link 
                        to="/tests/personality" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={handleNavigation}
                      >
                        Kepribadian
                      </Link>
                      <Link 
                        to="/tests/interest" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={handleNavigation}
                      >
                        Minat
                      </Link>
                      <Link 
                        to="/tests/aptitude" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={handleNavigation}
                      >
                        Bakat
                      </Link>
                    </div>
                  )}
                </div>
                
                {/* Results Dropdown */}
                <div className="relative" ref={el => dropdownRefs.current['results'] = el}>
                  <button 
                    onClick={() => toggleDropdown('results')}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center"
                  >
                    Hasil Test
                    <svg 
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'results' ? 'transform rotate-180' : ''}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {activeDropdown === 'results' && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 py-1 z-50">
                      <Link 
                        to="/results/personality" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={handleNavigation}
                      >
                        Kepribadian
                      </Link>
                      <Link 
                        to="/results/interest" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={handleNavigation}
                      >
                        Minat
                      </Link>
                      <Link 
                        to="/results/aptitude" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={handleNavigation}
                      >
                        Bakat
                      </Link>
                      <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                      <Link 
                        to="/results/recommendations" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={handleNavigation}
                      >
                        Rekomendasi Karier
                      </Link>
                    </div>
                  )}
                </div>

                {/* User Profile Dropdown */}
                <div className="relative" ref={el => dropdownRefs.current['profile'] = el}>
                  <button 
                    onClick={() => toggleDropdown('profile')}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center"
                  >
                    <span className="flex items-center">
                      <span className="h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs mr-2">
                        {currentUser.nama ? currentUser.nama.charAt(0).toUpperCase() : "U"}
                      </span>
                      Profil
                    </span>
                    <svg 
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'profile' ? 'transform rotate-180' : ''}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {activeDropdown === 'profile' && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 py-1 z-50">
                      <Link 
                        to="/profile" 
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={handleNavigation}
                      >
                        Lihat Profil
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  Login
                </Link>
                
                <Link 
                  to="/register" 
                  className="ml-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </Link>
              </>
            )}
            
            <ThemeToggle />
          </nav>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <Link 
            to="/about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={handleNavigation}
          >
            Tentang Aplikasi
          </Link>
          
          <Link 
            to="/approach" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={handleNavigation}
          >
            Pendekatan
          </Link>
          
          {currentUser ? (
            <>
              {/* Dashboard link for Guru BK - Mobile */}
              {isGuruBK && (
                <Link 
                  to="/dashboard" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  onClick={handleNavigation}
                >
                  Dashboard BK
                </Link>
              )}
              
              {/* Mobile Psikotes Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobile-psikotes')}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <span>Psikotest</span>
                  <svg 
                    className={`ml-1 w-5 h-5 transition-transform duration-200 ${activeDropdown === 'mobile-psikotes' ? 'transform rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {activeDropdown === 'mobile-psikotes' && (
                  <div className="mt-1 pl-4 border-l-2 border-indigo-200 dark:border-indigo-800 ml-3">
                    <Link 
                      to="/tests/personality" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                      onClick={handleNavigation}
                    >
                      Kepribadian
                    </Link>
                    <Link 
                      to="/tests/interest" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                      onClick={handleNavigation}
                    >
                      Minat
                    </Link>
                    <Link 
                      to="/tests/aptitude" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                      onClick={handleNavigation}
                    >
                      Bakat
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Results Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('mobile-results')}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <span>Hasil Test</span>
                  <svg 
                    className={`ml-1 w-5 h-5 transition-transform duration-200 ${activeDropdown === 'mobile-results' ? 'transform rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {activeDropdown === 'mobile-results' && (
                  <div className="mt-1 pl-4 border-l-2 border-indigo-200 dark:border-indigo-800 ml-3">
                    <Link 
                      to="/results/personality" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                      onClick={handleNavigation}
                    >
                      Kepribadian
                    </Link>
                    <Link 
                      to="/results/interest" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                      onClick={handleNavigation}
                    >
                      Minat
                    </Link>
                    <Link 
                      to="/results/aptitude" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                      onClick={handleNavigation}
                    >
                      Bakat
                    </Link>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-1 mx-3"></div>
                    <Link 
                      to="/results/recommendations" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                      onClick={handleNavigation}
                    >
                      Rekomendasi Karier
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Profile */}
              <Link 
                to="/profile" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={handleNavigation}
              >
                Profil Saya
              </Link>
              
              <button 
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="pt-4 pb-3 space-y-2">
              <Link 
                to="/login" 
                className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={handleNavigation}
              >
                Login
              </Link>
              
              <Link 
                to="/register" 
                className="block w-full px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-200 text-center"
                onClick={handleNavigation}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;