import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Button = ({ variant = "primary", size = "medium", children }) => {
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

const Approach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeSection, setActiveSection] = useState("framework");

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["framework", "personality", "interest", "aptitude", "methodology", "validation"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-200">
      <Helmet>
        <title>Pendekatan Kami - Psycho-Sphare</title>
        <meta name="description" content="Pelajari pendekatan yang kami gunakan dalam mengembangkan test psikometrik untuk mengenal kepribadian, minat, dan bakat Anda." />
        <meta name="keywords" content="pendekatan mbti, metodologi psikometrik, mbti, kepribadian, psikotes, minat, bakat" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Pendekatan Ilmiah Kami
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Memahami metodologi dan prinsip di balik test psikometrik yang kami kembangkan.
          </p>
        </div>
      </section>
      
      {/* Main Section with Sidebar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Fixed on desktop, hidden or top on mobile */}
            <div className="lg:w-1/4">
              <div className="lg:sticky lg:top-8 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm mb-8 lg:mb-0">
                <h3 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Navigasi Cepat</h3>
                <ul className="space-y-2">
                  {[
                    { id: "framework", label: "Kerangka Teori" },
                    { id: "personality", label: "Test Kepribadian" },
                    { id: "interest", label: "Analisis Minat" },
                    { id: "aptitude", label: "Evaluasi Bakat" },
                    { id: "methodology", label: "Metodologi" },
                    { id: "validation", label: "Validasi & Reliabilitas" }
                  ].map(item => (
                    <li key={item.id}>
                      <a 
                        href={`#${item.id}`}
                        className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                          activeSection === item.id
                            ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-medium"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Framework Section */}
              <section id="framework" className="mb-20 scroll-mt-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Kerangka Teori</h2>
                <p className="mb-8 text-gray-600 dark:text-gray-300">
                Psycho-Sphare didasarkan pada beberapa kerangka teoritis yang telah terbukti secara ilmiah dan diakui dalam bidang psikologi. Pendekatan kami mengintegrasikan teori-teori berikut:
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Myers-Briggs Type Indicator (MBTI)</h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      Dikembangkan oleh Isabel Briggs Myers dan Katharine Briggs berdasarkan teori tipe psikologis Carl Jung. MBTI mengidentifikasi preferensi individu dalam empat dimensi utama:
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
                      <li><span className="font-medium">Extraversion (E) vs. Introversion (I)</span> - Bagaimana seseorang mendapatkan energi</li>
                      <li><span className="font-medium">Sensing (S) vs. Intuition (N)</span> - Bagaimana seseorang memperoleh informasi</li>
                      <li><span className="font-medium">Thinking (T) vs. Feeling (F)</span> - Bagaimana seseorang membuat keputusan</li>
                      <li><span className="font-medium">Judging (J) vs. Perceiving (P)</span> - Bagaimana seseorang berinteraksi dengan dunia luar</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Holland Code (RIASEC)</h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      Teori yang dikembangkan oleh John L. Holland yang mengkategorikan minat dan preferensi karir ke dalam enam tipe dasar:
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
                      <li><span className="font-medium">Realistic (R)</span> - Praktis, menyukai aktivitas fisik dan bekerja dengan alat</li>
                      <li><span className="font-medium">Investigative (I)</span> - Analitis, intelektual, menyukai pemecahan masalah</li>
                      <li><span className="font-medium">Artistic (A)</span> - Kreatif, ekspresif, tidak konvensional</li>
                      <li><span className="font-medium">Social (S)</span> - Kooperatif, supportif, membantu orang lain</li>
                      <li><span className="font-medium">Enterprising (E)</span> - Persuasif, kepemimpinan, manajemen</li>
                      <li><span className="font-medium">Conventional (C)</span> - Terorganisir, teliti, sistematis</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Multiple Intelligence</h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      Teori dari Howard Gardner yang menyatakan bahwa kecerdasan manusia tidak hanya terdiri dari satu kemampuan, tetapi beragam kemampuan yang berbeda, termasuk:
                    </p>
                    <ul className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-300 list-disc pl-5 sm:grid-cols-4">
                      <li>Linguistik</li>
                      <li>Logis-matematis</li>
                      <li>Visual-spasial</li>
                      <li>Musikal</li>
                      <li>Kinestetik-jasmani</li>
                      <li>Interpersonal</li>
                      <li>Intrapersonal</li>
                      <li>Naturalistik</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              {/* Personality Section */}
              <section id="personality" className="mb-20 scroll-mt-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Test Kepribadian</h2>
                <p className="mb-8 text-gray-600 dark:text-gray-300">
                  Test kepribadian kami didasarkan pada teori MBTI klasik yang telah kami perkuat dengan penelitian terbaru dalam psikologi kepribadian. Berikut adalah pendekatan kami:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Instrumen yang Dikalibrasi</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Kami menggunakan 70 pertanyaan yang telah dikalibrasi secara cermat untuk mengevaluasi kecenderungan Anda terhadap delapan preferensi utama.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Sistem Scoring Adaptif</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Jawaban Anda tidak hanya diklasifikasikan ke dalam preferensi biner, tetapi juga mengukur kekuatan relatif preferensi Anda.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Analisis Kognitif</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Kami menganalisis fungsi kognitif dominan dan tambahan untuk memberikan pemahaman yang lebih mendalam tentang proses berpikir Anda.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Konteks Situasional</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Pertanyaan kami dirancang untuk meminimalkan bias situasional dan mengukur preferensi yang lebih stabil dari waktu ke waktu.
                    </p>
                  </div>
                </div>
              </section>
              
              {/* Interest Section */}
              <section id="interest" className="mb-20 scroll-mt-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Analisis Minat</h2>
                <p className="mb-8 text-gray-600 dark:text-gray-300">
                  Analisis minat kami didasarkan pada teori Holland Code (RIASEC) dengan pendekatan modern:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Pemetaan Minat Komprehensif</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      60 pertanyaan yang mencakup spektrum luas aktivitas dan preferensi untuk mengidentifikasi pola minat Anda.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Kode 3-Huruf</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Kami mengidentifikasi tiga area minat tertinggi Anda dan menggabungkannya untuk memberikan profil minat yang lebih spesifik.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Rekomendasi Karier</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Berdasarkan profil minat Anda, kami menyarankan karier yang sesuai dengan preferensi dan potensi kepuasan karier Anda.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Analisis Lingkungan</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Kami juga menganalisis jenis lingkungan kerja yang paling cocok dengan minat dan temperamen Anda.
                    </p>
                  </div>
                </div>
              </section>
              
              {/* Aptitude Section */}
              <section id="aptitude" className="mb-20 scroll-mt-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Evaluasi Bakat</h2>
                <p className="mb-8 text-gray-600 dark:text-gray-300">
                  Evaluasi bakat kami menggunakan berbagai tugas kognitif dan kreatif untuk mengidentifikasi kekuatan alami Anda:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Asesmen Multi-Domain</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Kami mengevaluasi kemampuan dalam berbagai domain seperti verbal, numerik, spasial, kreativitas, dan berpikir kritis.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Penskalaan Adaptif</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Tingkat kesulitan pertanyaan menyesuaikan respons Anda sebelumnya untuk mengukur kemampuan Anda secara akurat.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Indeks Potensi</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Kami tidak hanya mengukur kemampuan saat ini tetapi juga mengestimasi potensi pengembangan di berbagai bidang.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Rekomendasi Pengembangan</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Berdasarkan profil bakat Anda, kami menyarankan strategi untuk mengembangkan kekuatan dan meningkatkan area yang perlu ditingkatkan.
                    </p>
                  </div>
                </div>
              </section>
              
              {/* Methodology Section */}
              <section id="methodology" className="mb-20 scroll-mt-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Metodologi</h2>
                <p className="mb-8 text-gray-600 dark:text-gray-300">
                Psycho-Sphare menggunakan metodologi ilmiah yang ketat dalam pengembangan dan penyempurnaan instrumen pengujian kami:
                </p>
                
                <div className="relative flex flex-col space-y-6 border-l-2 border-indigo-200 dark:border-indigo-800 pl-6 ml-3">
                  {[
                    {
                      title: "Penelitian & Desain",
                      content: "Mengkaji literatur ilmiah terkini dan mengembangkan model konseptual untuk setiap instrumen."
                    },
                    {
                      title: "Pengembangan Item",
                      content: "Merancang pertanyaan yang optimal untuk mengukur konstruk yang ditargetkan dengan bias minimal."
                    },
                    {
                      title: "Pengujian Pilot",
                      content: "Menguji instrumen dengan sampel kecil dan mengumpulkan umpan balik untuk penyempurnaan."
                    },
                    {
                      title: "Validasi Psikometrik",
                      content: "Menganalisis reliabilitas, validitas, dan properti psikometrik lainnya menggunakan sampel besar."
                    },
                    {
                      title: "Kalibrasi & Normalisasi",
                      content: "Mengkalibrasi instrumen dan mengembangkan norma perbandingan yang representatif."
                    },
                    {
                      title: "Implementasi & Pemantauan",
                      content: "Menerapkan instrumen dan terus memantau kinerjanya untuk peningkatan berkelanjutan."
                    }
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-8 w-4 h-4 rounded-full bg-indigo-500 dark:bg-indigo-600 border-4 border-white dark:border-gray-900"></div>
                      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                        <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Validation Section */}
              <section id="validation" className="mb-12 scroll-mt-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Validasi & Reliabilitas</h2>
                <p className="mb-8 text-gray-600 dark:text-gray-300">
                  Kami berkomitmen pada standar psikometrik tertinggi untuk memastikan hasil test kami akurat dan konsisten:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  {[
                    {
                      title: "Konsistensi Internal",
                      value: "0.85",
                      description: "Semua skala kami memiliki koefisien alpha Cronbach di atas 0.85, menunjukkan reliabilitas yang tinggi."
                    },
                    {
                      title: "Test-Retest",
                      value: "r 0.80",
                      description: "Hasil test kami sangat konsisten dari waktu ke waktu, dengan koefisien korelasi di atas 0.80."
                    },
                    {
                      title: "Validitas Konstruk",
                      value: "r = 0.78",
                      description: "Instrumen kami berkorelasi kuat dengan instrumen tervalidasi lainnya yang mengukur konstruk serupa."
                    },
                    {
                      title: "Validitas Prediktif",
                      value: "r = 0.72",
                      description: "Hasil test kami memiliki korelasi yang signifikan dengan kriteria seperti kepuasan karier dan kinerja akademik."
                    }
                  ].map((metric, index) => (
                    <div key={index} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center">
                      <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{metric.title}</h3>
                      <div className="text-3xl font-bold my-3 text-gray-800 dark:text-gray-100">{metric.value}</div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{metric.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">Catatan Penting</h3>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    Meskipun kami berusaha untuk memberikan pengukuran yang akurat, penting untuk diingat bahwa:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
                    <li>Hasil test psikometrik adalah deskriptif, bukan preskriptif</li>
                    <li>Preferensi dan kemampuan dapat berubah dan berkembang seiring waktu</li>
                    <li>Test ini paling baik digunakan sebagai alat introspeksi dan eksplorasi, bukan sebagai penentu tunggal untuk keputusan besar</li>
                    <li>Konteks situasional dan budaya dapat mempengaruhi ekspresi preferensi dan kemampuan</li>
                  </ul>
                </div>
              </section>
              
              {/* CTA Section */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Siap Untuk Memulai Perjalanan Penemuan Diri?</h3>
                <p className="mb-6 text-indigo-100">Rasakan pendekatan ilmiah kami secara langsung dengan mengambil test kami sekarang.</p>
                <Link to="/register">
                  <Button variant="primary" size="large">Mulai Test Sekarang</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Approach;