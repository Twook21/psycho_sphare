// Helper functions

/**
 * Format tanggal dalam format Indonesia
 * @param {Date|string} date - Tanggal yang akan diformat
 * @returns {string} Tanggal dalam format Indonesia
 */
export const formatDate = (date) => {
    const options = { 
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    
    return new Date(date).toLocaleDateString('id-ID', options);
  };
  
  /**
   * Truncate teks yang terlalu panjang dan tambahkan ellipsis
   * @param {string} text - Teks yang akan dipotong
   * @param {number} length - Panjang maksimal
   * @returns {string} Teks yang sudah dipotong
   */
  export const truncateText = (text, length = 100) => {
    if (!text) return '';
    if (text.length <= length) return text;
    return text.substring(0, length).trim() + '...';
  };
  
  /**
   * Konversi nilai ke range persentase (0-100)
   * @param {number} value - Nilai yang akan dikonversi
   * @param {number} min - Nilai minimum
   * @param {number} max - Nilai maksimum
   * @returns {number} Nilai dalam persentase
   */
  export const toPercentage = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
  };
  
  /**
   * Validasi email
   * @param {string} email - Email yang akan divalidasi
   * @returns {boolean} Hasil validasi
   */
  export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Validasi kekuatan password
   * @param {string} password - Password yang akan divalidasi
   * @returns {object} Hasil validasi
   */
  export const validatePassword = (password) => {
    const results = {
      isValid: false,
      hasMinLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumbers: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    
    results.isValid = results.hasMinLength && 
                      results.hasUpperCase && 
                      results.hasLowerCase && 
                      results.hasNumbers;
    
    return results;
  };
  
  /**
   * Shuffle array menggunakan algoritma Fisher-Yates
   * @param {Array} array - Array yang akan diacak
   * @returns {Array} Array yang sudah diacak
   */
  export const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  /**
   * Generate ID unik
   * @returns {string} ID unik
   */
  export const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };
  
  /**
   * Get warna dari nilai persentase
   * @param {number} percentage - Nilai persentase (0-100)
   * @param {string} colorScheme - Skema warna ('blue', 'green', 'red', 'purple')
   * @returns {string} Warna dalam format hex
   */
  export const getColorFromPercentage = (percentage, colorScheme = 'blue') => {
    const colorSchemes = {
      blue: ['#EBF8FF', '#BEE3F8', '#90CDF4', '#63B3ED', '#4299E1', '#3182CE', '#2B6CB0', '#2C5282', '#2A4365'],
      green: ['#F0FFF4', '#C6F6D5', '#9AE6B4', '#68D391', '#48BB78', '#38A169', '#2F855A', '#276749', '#22543D'],
      red: ['#FFF5F5', '#FED7D7', '#FEB2B2', '#FC8181', '#F56565', '#E53E3E', '#C53030', '#9B2C2C', '#742A2A'],
      purple: ['#FAF5FF', '#E9D8FD', '#D6BCFA', '#B794F4', '#9F7AEA', '#805AD5', '#6B46C1', '#553C9A', '#44337A'],
    };
    
    const colors = colorSchemes[colorScheme] || colorSchemes.blue;
    const index = Math.min(Math.floor(percentage / 12.5), colors.length - 1);
    
    return colors[index];
  };
  
  /**
   * Format angka dengan pemisah ribuan
   * @param {number} number - Angka yang akan diformat
   * @returns {string} Angka yang sudah diformat
   */
  export const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  
  /**
   * Ubah huruf pertama menjadi kapital
   * @param {string} string - String yang akan diubah
   * @returns {string} String dengan huruf pertama kapital
   */
  export const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  };