import React, { useState, useEffect } from "react";
import { dummyTestDates, dummyTestConcepts } from "../../data/dummyData";

const TestCard = ({ title, description, acronym, onGenerate, isActive, isGenerating }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 relative overflow-hidden">
      {/* Icon background */}
      <div className="absolute -right-4 -top-4 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      </div>
      
      {/* Card Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
        <div className="mb-4">
          <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 px-2 py-1 rounded text-xs font-semibold mr-2">
            {acronym}
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        </div>
        <button
          onClick={onGenerate}
          disabled={!isActive || isGenerating}
          className={`w-full py-2 px-4 rounded-lg flex items-center justify-center text-sm font-medium transition-colors duration-200 ${
            isActive && !isGenerating
              ? "bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
          }`}
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : isActive ? (
            "Generate Test"
          ) : (
            "Tidak Aktif"
          )}
        </button>
      </div>
      
      {/* Loading Overlay */}
      {isGenerating && (
        <div className="absolute inset-0 bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-60 flex items-center justify-center z-20 rounded-xl">
          <div className="animate-pulse flex flex-col items-center">
            <svg className="animate-spin h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Memproses...</span>
          </div>
        </div>
      )}
    </div>
  );
};

const TestGeneration = () => {
  const [testDates, setTestDates] = useState([]);
  const [mbtiTests, setMbtiTests] = useState([]);
  const [riasecTests, setRiasecTests] = useState([]);
  const [miTests, setMiTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [generatingType, setGeneratingType] = useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const filteredTestDates = dummyTestDates.filter(
        (date) => date.assessment_flag === 1
      );
      setTestDates(filteredTestDates);

      // Filter tests by concept type
      setMbtiTests(
        filteredTestDates.filter((date) => date.concept_psi_id === "1")
      );
      setRiasecTests(
        filteredTestDates.filter((date) => date.concept_psi_id === "2")
      );
      setMiTests(
        filteredTestDates.filter((date) => date.concept_psi_id === "3")
      );

      setLoading(false);
    }, 500);
  }, []);

  const handleGenerateTest = (conceptCode) => {
    setGeneratingType(conceptCode);
    
    // Simulate API call
    setTimeout(() => {
      setGeneratingType(null);
      
      // Show success message
      alert(`Test berhasil digenerate untuk ${
        conceptCode === "1" ? "Kepribadian (MBTI)" : 
        conceptCode === "2" ? "Minat (RIASEC)" : 
        "Bakat (Multiple Intelligence)"
      }`);
    }, 1500);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-500 dark:border-indigo-400"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Generate Test Psikologi</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Buat soal test psikologi dan atur akses untuk siswa
        </p>
      </div>
      
      {testDates.length === 0 ? (
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>Tidak ada tanggal test yang aktif. Silakan aktifkan tanggal test di menu Penentuan Tanggal Test.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* MBTI Test Card */}
          <TestCard
            title="Test Kepribadian (MBTI)"
            description="Test untuk mengidentifikasi tipe kepribadian berdasarkan teori Myers-Briggs"
            acronym={dummyTestConcepts.find(c => c.concept_code === "1")?.concept || "MBTI"}
            onGenerate={() => handleGenerateTest("1")}
            isActive={mbtiTests.length > 0}
            isGenerating={generatingType === "1"}
          />

          {/* RIASEC Test Card */}
          <TestCard
            title="Test Minat (RIASEC)"
            description="Test untuk mengidentifikasi minat karir berdasarkan teori Holland"
            acronym={dummyTestConcepts.find(c => c.concept_code === "2")?.concept || "RIASEC"}
            onGenerate={() => handleGenerateTest("2")}
            isActive={riasecTests.length > 0}
            isGenerating={generatingType === "2"}
          />

          {/* Multiple Intelligence Test Card */}
          <TestCard
            title="Test Bakat (Multiple Intelligence)"
            description="Test untuk mengidentifikasi kecerdasan majemuk berdasarkan teori Gardner"
            acronym={dummyTestConcepts.find(c => c.concept_code === "3")?.concept || "MI"}
            onGenerate={() => handleGenerateTest("3")}
            isActive={miTests.length > 0}
            isGenerating={generatingType === "3"}
          />
        </div>
      )}

      {/* Information Card */}
      <div className="mt-8 bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-md font-semibold text-blue-800 dark:text-blue-300 mb-2">Informasi</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <li>
                Test hanya dapat digenerate jika ada tanggal test yang aktif untuk jenis test tersebut.
              </li>
              <li>
                Pastikan Anda telah menetapkan siswa peserta psikotest sebelum melakukan generate test.
              </li>
              <li>
                Siswa dapat mengakses test setelah proses generate selesai.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestGeneration;