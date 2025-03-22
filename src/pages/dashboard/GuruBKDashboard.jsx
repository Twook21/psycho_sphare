import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import TestDateManagement from "./TestDateManagement";
import StudentSelection from "./StudentSelection";
import TestGeneration from "./TestGeneration";

const GuruBKDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("tanggal");

  if (!user || user.level_id !== 4) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-200 flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <div className="mb-6 text-red-600 dark:text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">Akses Ditolak</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Anda tidak memiliki akses ke halaman ini. Halaman ini hanya dapat diakses oleh Guru BK.</p>
          <button 
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-200">
      <Helmet>
        <title>Dashboard Guru BK - Psycho-Sphare</title>
        <meta name="description" content="Dashboard untuk manajemen psikotes siswa oleh Guru BK" />
      </Helmet>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-2">
              Dashboard Guru BK
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Kelola jadwal tes, penetapan siswa, dan pengaturan psikotes
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
            <nav className="flex flex-wrap -mb-px">
              <button
                className={`py-4 px-6 font-medium text-sm rounded-t-lg border-b-2 focus:outline-none transition-colors duration-200 ${
                  activeTab === "tanggal"
                    ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600"
                }`}
                onClick={() => setActiveTab("tanggal")}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Penentuan Tanggal
                </div>
              </button>
              <button
                className={`py-4 px-6 font-medium text-sm rounded-t-lg border-b-2 focus:outline-none transition-colors duration-200 ${
                  activeTab === "siswa"
                    ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600"
                }`}
                onClick={() => setActiveTab("siswa")}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Penetapan Siswa
                </div>
              </button>
              <button
                className={`py-4 px-6 font-medium text-sm rounded-t-lg border-b-2 focus:outline-none transition-colors duration-200 ${
                  activeTab === "generate"
                    ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600"
                }`}
                onClick={() => setActiveTab("generate")}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Generate Test
                </div>
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="p-6">
              {activeTab === "tanggal" && <TestDateManagement />}
              {activeTab === "siswa" && <StudentSelection />}
              {activeTab === "generate" && <TestGeneration />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuruBKDashboard;