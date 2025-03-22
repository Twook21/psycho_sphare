import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Button = ({ variant, size, children }) => {
  const baseClasses = "font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600",
    outline: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900/30"
  };
  
  const sizeClasses = {
    large: "px-6 py-3 text-base",
    medium: "px-4 py-2 text-sm",
    small: "px-3 py-1 text-xs"
  };
  
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {children}
    </button>
  );
};

const AboutApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-200">
      <Helmet>
        <title>Tentang Aplikasi - Psycho-Sphare</title>
        <meta name="description" content="Pelajari tentang MBTI App dan bagaimana aplikasi ini dapat membantu Anda menemukan kepribadian, minat, dan bakat Anda." />
        <meta name="keywords" content="tentang mbti app, mbti, kepribadian, psikotes, minat, bakat, pengembangan diri" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Kenali Diri Lebih Baik dengan Psycho-Sphare
            </h1>
            <p className="text-xl mb-10 text-gray-600 dark:text-gray-300">
              Aplikasi psikometrik komprehensif untuk membantu Anda mengenal kepribadian, mengidentifikasi minat, dan menemukan bakat tersembunyi Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="primary" size="large">Mulai Sekarang</Button>
              </Link>
              <Link to="/approach">
                <Button variant="outline" size="large">Pelajari Pendekatan Kami</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Fitur Utama</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Psycho-Sphare menawarkan berbagai fitur untuk membantu Anda dalam perjalanan penemuan diri.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Card 1 */}
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="mb-4 text-indigo-600 dark:text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Test Kepribadian MBTI</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Temukan tipe kepribadian Anda dari 16 tipe MBTI yang ada. Pahami preferensi alami, kekuatan, dan area potensial untuk pengembangan diri.
              </p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="mb-4 text-indigo-600 dark:text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analisis Minat</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Identifikasi area minat Anda berdasarkan teori Holland Code. Temukan bidang karier yang selaras dengan preferensi dan minat Anda.
              </p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="mb-4 text-indigo-600 dark:text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Evaluasi Bakat</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ukur kemampuan kognitif, kreativitas, dan potensi tersembunyi Anda. Temukan dan kembangkan bakat alami yang mungkin belum Anda sadari.
              </p>
            </div>
            
            {/* Feature Card 4 */}
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="mb-4 text-indigo-600 dark:text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Laporan Komprehensif</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dapatkan analisis mendalam dan rekomendasi personal berdasarkan hasil test Anda. Laporan dapat diunduh dan dilihat kapan saja.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Tentang Psycho-Sphare</h2>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                Psycho-Sphare dikembangkan oleh tim ahli psikometri dan pengembang perangkat lunak yang berdedikasi untuk membantu individu memahami diri mereka lebih baik melalui pendekatan ilmiah.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Aplikasi ini menggabungkan teori psikologi modern dengan teknologi terkini untuk memberikan pengalaman pengujian yang akurat, mudah digunakan, dan bermanfaat bagi pengembangan pribadi dan karier.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Kami percaya bahwa pemahaman diri yang lebih baik adalah langkah pertama menuju kehidupan yang lebih bermakna dan memuaskan. Setiap orang memiliki potensi unik, dan tugas kami adalah membantu Anda menemukannya.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-10">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-indigo-600 dark:text-indigo-400">1000+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Pengguna Aktif</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-indigo-600 dark:text-indigo-400">16</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Tipe Kepribadian</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-indigo-600 dark:text-indigo-400">98%</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Tingkat Kepuasan</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              {/* Placeholder for image */}
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl h-full min-h-80 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-indigo-400 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-600 dark:bg-indigo-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Untuk Mengenal Diri Lebih Baik?</h2>
          <p className="mb-8 text-indigo-100">Mulai perjalanan penemuan diri Anda sekarang dengan Psycho-Sphare.</p>
          <Link to="/register">
            <button className="px-8 py-3 bg-white text-indigo-600 hover:bg-indigo-50 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200 focus:ring-offset-indigo-600">
              Daftar Sekarang
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutApp;