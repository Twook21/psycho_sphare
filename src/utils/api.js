// API utility functions
import { dummyQuestions, dummyResults } from '../data/dummyData';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Login API
export const loginApi = async (email, password) => {
  await delay(800);
  
  if (email === 'user@example.com' && password === 'password123') {
    const user = {
      id: '1',
      name: 'User Demo',
      email: 'user@example.com',
      role: 'user'
    };
    
    return { success: true, user };
  }
  
  return { success: false, error: 'Email atau password salah' };
};

// Register API
export const registerApi = async (name, email, password) => {
  await delay(800);
  
  // Simulate validation
  if (!name || !email || !password) {
    return { success: false, error: 'Semua field harus diisi' };
  }
  
  if (password.length < 8) {
    return { success: false, error: 'Password harus minimal 8 karakter' };
  }
  
  if (email === 'user@example.com') {
    return { success: false, error: 'Email sudah terdaftar' };
  }
  
  const user = {
    id: Date.now().toString(),
    name,
    email,
    role: 'user'
  };
  
  return { success: true, user };
};

// Get Questions API
export const getQuestionsApi = async (testType) => {
  await delay(500);
  
  switch (testType) {
    case 'personality':
      return { success: true, questions: dummyQuestions.personality };
    case 'interest':
      return { success: true, questions: dummyQuestions.interest };
    case 'aptitude':
      return { success: true, questions: dummyQuestions.aptitude };
    default:
      return { success: false, error: 'Jenis test tidak valid' };
  }
};

// Submit Test API
export const submitTestApi = async (testType, answers) => {
  await delay(1000);
  
  if (!answers || answers.length === 0) {
    return { success: false, error: 'Jawaban tidak valid' };
  }
  
  switch (testType) {
    case 'personality':
      return { success: true, result: dummyResults.personality };
    case 'interest':
      return { success: true, result: dummyResults.interest };
    case 'aptitude':
      return { success: true, result: dummyResults.aptitude };
    default:
      return { success: false, error: 'Jenis test tidak valid' };
  }
};

// Get Results API
export const getResultsApi = async (testType) => {
  await delay(700);
  
  switch (testType) {
    case 'personality':
      return { success: true, result: dummyResults.personality };
    case 'interest':
      return { success: true, result: dummyResults.interest };
    case 'aptitude':
      return { success: true, result: dummyResults.aptitude };
    default:
      return { success: false, error: 'Jenis test tidak valid' };
  }
};

// Get Combined Recommendations
export const getCombinedRecommendationsApi = async () => {
  await delay(800);
  
  return { 
    success: true, 
    recommendations: {
      personalityType: "ENFJ",
      interestCode: "SAE",
      careers: [
        "Konselor Pendidikan",
        "Trainer Pengembangan Diri",
        "Koordinator Program Non-profit",
        "HR Development Manager",
        "Terapis Seni",
        "Guru Kehidupan (Life Coach)",
        "Public Relations Manager"
      ],
      description: "Berdasarkan tipe kepribadian ENFJ dan kode minat SAE (Social-Artistic-Enterprising) Anda, Anda memiliki kecenderungan untuk memimpin dan menginspirasi orang lain, dengan fokus pada pengembangan personal dan kreativitas. Anda mungkin menemukan kepuasan dalam karier yang melibatkan pembimbingan, pengajaran, atau pengarahan orang lain, sementara juga memberikan ruang untuk ekspresi kreatif Anda."
    }
  };
};