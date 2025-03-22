import React, { useState, useEffect } from "react";
import { dummyTestConcepts, dummyTestDates } from "../../data/dummyData";

const TestDateManagement = () => {
  const [testConcepts, setTestConcepts] = useState([]);
  const [testDates, setTestDates] = useState([]);
  const [selectedConcept, setSelectedConcept] = useState("");
  const [testDate, setTestDate] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTestConcepts(dummyTestConcepts);
      setTestDates(dummyTestDates);
      setLoading(false);
    }, 500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate adding new test date
    const newTestDate = {
      assessment_date_id: Date.now().toString(),
      concept_psi_id: selectedConcept,
      assessment_date: testDate,
      description: description,
      concept_name: testConcepts.find(c => c.concept_code === selectedConcept)?.short_name || "",
      assessment_flag: 1
    };
    
    setTestDates([...testDates, newTestDate]);
    
    // Reset form
    setSelectedConcept("");
    setTestDate("");
    setDescription("");
    setShowForm(false);
  };

  const toggleActiveStatus = (id) => {
    setTestDates(testDates.map(date => 
      date.assessment_date_id === id 
        ? { ...date, assessment_flag: date.assessment_flag === 1 ? 0 : 1 } 
        : date
    ));
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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Penentuan Tanggal Test</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Atur jadwal pelaksanaan psikotes untuk siswa
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {showForm ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Batal
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Tambah Jadwal Test
            </>
          )}
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl mb-8 border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-200">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-4">Tambah Jadwal Test Baru</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Jenis Test
                </label>
                <select
                  value={selectedConcept}
                  onChange={(e) => setSelectedConcept(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  <option value="">Pilih Jenis Test</option>
                  {testConcepts.map((concept) => (
                    <option key={concept.concept_code} value={concept.concept_code}>
                      {concept.short_name} ({concept.concept})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tanggal Test
                </label>
                <input
                  type="date"
                  value={testDate}
                  onChange={(e) => setTestDate(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Deskripsi
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="3"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                  placeholder="Deskripsi jadwal test"
                ></textarea>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Simpan Jadwal
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Jenis Test
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Akronim
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Tanggal Test
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {testDates.length > 0 ? (
                testDates.map((date, index) => (
                  <tr key={date.assessment_date_id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {date.concept_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {testConcepts.find(c => c.concept_code == date.concept_psi_id)?.concept || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {new Date(date.assessment_date).toLocaleDateString("id-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          date.assessment_flag === 1
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {date.assessment_flag === 1 ? "Aktif" : "Non-aktif"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => toggleActiveStatus(date.assessment_date_id)}
                        className={`px-3 py-1 rounded-lg text-white text-xs font-medium transition-colors duration-200 ${
                          date.assessment_flag === 1
                            ? "bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
                            : "bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
                        }`}
                      >
                        {date.assessment_flag === 1 ? "Nonaktifkan" : "Aktifkan"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    Belum ada jadwal test yang ditambahkan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TestDateManagement;