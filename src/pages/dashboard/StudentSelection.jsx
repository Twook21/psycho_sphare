import React, { useState, useEffect } from "react";
import { dummyClassGroups, dummyStudents } from "../../data/dummyData";

const StudentSelection = () => {
  const [classGroups, setClassGroups] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [loading, setLoading] = useState(true);
  const [studentsLoading, setStudentsLoading] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setClassGroups(dummyClassGroups);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    // Reset selections when class changes
    setSelectedStudents([]);
    setSelectAll(false);
    
    if (selectedClass) {
      setStudentsLoading(true);
      // Simulate API call to fetch students from a class
      setTimeout(() => {
        const filteredStudents = dummyStudents.filter(
          student => student.rombongan_belajar_id === selectedClass
        );
        setStudents(filteredStudents);
        setStudentsLoading(false);
      }, 500);
    } else {
      setStudents([]);
    }
  }, [selectedClass]);

  const handleSelectAll = () => {
    if (selectAll) {
      // Unselect all
      setSelectedStudents([]);
    } else {
      // Select all
      setSelectedStudents(students.map(student => student.peserta_didik_id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectStudent = (studentId) => {
    if (selectedStudents.includes(studentId)) {
      // Remove from selection
      setSelectedStudents(selectedStudents.filter(id => id !== studentId));
      setSelectAll(false);
    } else {
      // Add to selection
      setSelectedStudents([...selectedStudents, studentId]);
      // Check if all students are now selected
      if (selectedStudents.length + 1 === students.length) {
        setSelectAll(true);
      }
    }
  };

  const handleSaveSelection = () => {
    // Here you would typically make an API call to save the selected students
    alert(`${selectedStudents.length} siswa berhasil ditambahkan ke peserta psikotest`);
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
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Penetapan Siswa Peserta Psikotest</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Pilih kelas dan siswa yang akan mengikuti psikotes
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 mb-8">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Pilih Kelas/Rombel
        </label>
        <div className="w-full md:w-1/3">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            <option value="">Pilih Kelas/Rombel</option>
            {classGroups.map((group) => (
              <option key={group.rombongan_belajar_id} value={group.rombongan_belajar_id}>
                {group.nama}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedClass && studentsLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-500 dark:border-indigo-400"></div>
        </div>
      ) : selectedClass && students.length > 0 ? (
        <>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 mb-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 flex flex-col md:flex-row justify-between md:items-center">
              <div className="flex items-center mb-2 md:mb-0">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  id="select-all"
                  className="h-4 w-4 text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-600 rounded focus:ring-indigo-500 transition-colors duration-200"
                />
                <label htmlFor="select-all" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Pilih Semua Siswa
                </label>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">
                  {selectedStudents.length} dari {students.length} siswa dipilih
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Pilih
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      NISN
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Nama
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Jenis Kelamin
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Kelas
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {students.map((student) => (
                    <tr key={student.peserta_didik_id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedStudents.includes(student.peserta_didik_id)}
                          onChange={() => handleSelectStudent(student.peserta_didik_id)}
                          id={`student-${student.peserta_didik_id}`}
                          className="h-4 w-4 text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-600 rounded focus:ring-indigo-500 transition-colors duration-200"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {student.nisn}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        {student.nama}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {student.jenis_kelamin === "L" ? "Laki-laki" : "Perempuan"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {student.rombel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {selectedStudents.length > 0 && (
            <div className="flex justify-end">
              <button
                onClick={handleSaveSelection}
                className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
                Tambahkan ke Peserta Psikotest
              </button>
            </div>
          )}
        </>
      ) : selectedClass ? (
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>Tidak ada siswa dalam kelas ini.</span>
        </div>
      ) : (
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span>Pilih kelas terlebih dahulu untuk menampilkan daftar siswa.</span>
        </div>
      )}
    </div>
  );
};

export default StudentSelection;