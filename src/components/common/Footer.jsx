import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Psycho-Sphare</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Aplikasi untuk mengenal diri lebih baik melalui pendekatan psikometrik.
            </p>
            
            {/* Social Media Section */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="Facebook"
                className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Tentang Aplikasi
                </Link>
              </li>
              <li>
                <Link 
                  to="/approach" 
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Pendekatan
                </Link>
              </li>
              <li>
                <Link 
                  to="/login" 
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link 
                  to="/register" 
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Tests Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Jenis Test</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/tests/personality" 
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Kepribadian
                </Link>
              </li>
              <li>
                <Link 
                  to="/tests/interest" 
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Minat
                </Link>
              </li>
              <li>
                <Link 
                  to="/tests/aptitude" 
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  Bakat
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-indigo-500 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a 
                  href="mailto:info@mbtiapp.example.com" 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  info@Psycho-Sphare.example.com
                </a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-indigo-500 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a 
                  href="tel:+6281234567890" 
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  +62 812-34236-7890
                </a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <svg className="w-5 h-5 mr-2 text-indigo-500 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Bandung</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section with Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Psycho-Sphare. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/privacy-policy" 
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 text-sm transition-colors duration-200"
            >
              Kebijakan Privasi
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 text-sm transition-colors duration-200"
            >
              Syarat dan Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;