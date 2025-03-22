import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../../hooks/useAuth";
import { dummyUserProfile } from "../../data/dummyData";

const UserProfile = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProfileData(dummyUserProfile);
      setFormData({
        nama: dummyUserProfile.nama,
        email: dummyUserProfile.email,
        telepon: dummyUserProfile.telepon || "",
        password: "",
        passwordConfirm: "",
      });
      setLoading(false);
    }, 500);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (formData.password && formData.password !== formData.passwordConfirm) {
      alert("Password tidak cocok!");
      return;
    }

    // Simulate API call to update profile
    setLoading(true);
    setTimeout(() => {
      setProfileData({
        ...profileData,
        nama: formData.nama,
        email: formData.email,
        telepon: formData.telepon,
      });
      setLoading(false);
      setIsEditing(false);
      alert("Profil berhasil diperbarui!");
    }, 500);
  };

  if (loading && !profileData) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-200 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 dark:border-indigo-400"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-200">
      <Helmet>
        <title>Profil Pengguna - Psycho-Sphare</title>
        <meta name="description" content="Lihat dan ubah informasi profil akun Anda" />
      </Helmet>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-24 h-24 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-2xl shadow-lg">
                    {profileData.nama.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-2xl font-bold text-white mb-1">
                    {profileData.nama}
                  </h1>
                  <p className="text-indigo-100">
                    {profileData.level_id === 3 ? "Siswa" : "Guru BK"}
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-6">
              {isEditing ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Edit Profil</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          name="nama"
                          value={formData.nama}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Telepon
                        </label>
                        <input
                          type="text"
                          name="telepon"
                          value={formData.telepon}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Ubah Password</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Password Baru
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Biarkan kosong jika tidak ingin mengubah password
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Konfirmasi Password
                        </label>
                        <input
                          type="password"
                          name="passwordConfirm"
                          value={formData.passwordConfirm}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Simpan
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Informasi Profil</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Nama Lengkap</h3>
                        <p className="text-gray-800 dark:text-gray-100">{profileData.nama}</p>
                      </div>
                      {profileData.level_id === 3 && (
                        <>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">NISN</h3>
                            <p className="text-gray-800 dark:text-gray-100">{profileData.nisn || "-"}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Kelas</h3>
                            <p className="text-gray-800 dark:text-gray-100">{profileData.rombel || "-"}</p>
                          </div>
                        </>
                      )}
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</h3>
                        <p className="text-gray-800 dark:text-gray-100">{profileData.email}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Telepon</h3>
                        <p className="text-gray-800 dark:text-gray-100">{profileData.telepon || "-"}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Status</h3>
                        <p className="text-gray-800 dark:text-gray-100">{profileData.level_id === 3 ? "Siswa" : "Guru BK"}</p>
                      </div>
                    </div>
                  </div>

                  {profileData.level_id === 3 && (
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Status Test</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Kepribadian (MBTI)</h3>
                          <div className="flex items-center">
                            <div className={`h-3 w-3 rounded-full mr-2 ${
                              profileData.test_status?.mbti ? "bg-green-500" : "bg-red-500"
                            }`}></div>
                            <p className={`font-semibold ${
                              profileData.test_status?.mbti ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                            }`}>
                              {profileData.test_status?.mbti ? "Selesai" : "Belum Selesai"}
                            </p>
                          </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Minat (RIASEC)</h3>
                          <div className="flex items-center">
                            <div className={`h-3 w-3 rounded-full mr-2 ${
                              profileData.test_status?.riasec ? "bg-green-500" : "bg-red-500"
                            }`}></div>
                            <p className={`font-semibold ${
                              profileData.test_status?.riasec ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                            }`}>
                              {profileData.test_status?.riasec ? "Selesai" : "Belum Selesai"}
                            </p>
                          </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Bakat (MI)</h3>
                          <div className="flex items-center">
                            <div className={`h-3 w-3 rounded-full mr-2 ${
                              profileData.test_status?.mi ? "bg-green-500" : "bg-red-500"
                            }`}></div>
                            <p className={`font-semibold ${
                              profileData.test_status?.mi ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                            }`}>
                              {profileData.test_status?.mi ? "Selesai" : "Belum Selesai"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Edit Profil
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;