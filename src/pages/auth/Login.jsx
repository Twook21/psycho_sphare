import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import LoginForm from '../../components/auth/LoginForm';

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center transition-colors duration-200">
      <Helmet>
        <title>Login - Psycho-Sphare</title>
        <meta name="description" content="Login ke akun Psycho-Sphare Anda untuk mengakses test kepribadian, minat, dan bakat." />
        <meta name="keywords" content="login, masuk, akun, mbti, kepribadian, psikotes, minat, bakat" />
      </Helmet>
      
      <div className="max-w-7xl w-full">
        <div className="rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-gray-800 transition-colors duration-200">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Image & Overlay */}
            <div className="relative md:w-1/2 h-60 md:h-auto bg-indigo-600 dark:bg-indigo-800">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')",
                  opacity: 0.7
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-700/80 dark:from-indigo-800/90 dark:to-purple-900/90"></div>
              <div className="relative flex flex-col justify-center px-8 py-12 h-full text-white z-10">
                <h2 className="text-3xl font-bold mb-4">Kenali Potensi Diri Anda</h2>
                <p className="text-lg text-indigo-100">Temukan kepribadian, minat, dan bakat Anda melalui test psikometrik kami.</p>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white dark:text-gray-800 opacity-20">
                    <path fill="currentColor" fillOpacity="1" d="M0,224L60,229.3C120,235,240,245,360,234.7C480,224,600,192,720,181.3C840,171,960,181,1080,181.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div className="md:w-1/2 p-8 md:p-12">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;