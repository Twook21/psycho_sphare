// Data dummy untuk aplikasi MBTI

// Tipe kepribadian MBTI
export const personalityTypes = [
    {
      id: "ISTJ",
      name: "Inspektur",
      description: "Individu yang praktis, faktual, dan dapat diandalkan dengan fokus yang kuat pada detail dan tanggung jawab.",
      traits: ["Logis", "Teratur", "Dapat diandalkan", "Teliti"],
      strengths: ["Jujur dan langsung", "Memiliki etos kerja yang kuat", "Tenang dan stabil", "Praktis dan faktual"]
    },
    {
      id: "ISFJ",
      name: "Pelindung",
      description: "Individu yang perhatian, loyal, dan berpijak pada tradisi dengan daya observasi yang kuat dan perhatian pada detail.",
      traits: ["Peduli", "Teliti", "Loyal", "Tradisional"],
      strengths: ["Suportif dan perhatian", "Pekerja keras", "Detail-oriented", "Memiliki kecerdasan emosional yang baik"]
    },
    {
      id: "INFJ",
      name: "Konselor",
      description: "Individu yang visioner, empatik, dan idealis dengan kemampuan memahami orang lain secara mendalam.",
      traits: ["Intuitif", "Empatik", "Idealis", "Kreatif"],
      strengths: ["Kreatif dan imajinatif", "Insightful", "Memiliki prinsip yang kuat", "Menginspirasi dan membimbing"]
    },
    // ... dan seterusnya untuk 16 tipe kepribadian
  ];
  
  // Data untuk test minat (Holland Code / RIASEC)
  export const interestTypes = [
    {
      id: "R",
      name: "Realistic",
      description: "Preferensi untuk bekerja dengan benda, mesin, tanaman, atau hewan; umumnya menghindari kegiatan sosial.",
      careers: ["Mekanik", "Insinyur", "Teknisi", "Pekerja konstruksi", "Petani", "Montir"],
      traits: ["Praktis", "Mekanis", "Langsung", "Stabil"]
    },
    {
      id: "I",
      name: "Investigative",
      description: "Preferensi untuk aktivitas yang melibatkan berpikir, menyelidiki, dan memperluas pengetahuan.",
      careers: ["Ilmuwan", "Peneliti", "Dokter", "Profesor", "Matematikawan", "Analis data"],
      traits: ["Analitis", "Intelektual", "Presisi", "Teknis"]
    },
    {
      id: "A",
      name: "Artistic",
      description: "Preferensi untuk aktivitas yang kreatif, tidak terstruktur, dan mengekspresikan diri.",
      careers: ["Seniman", "Musisi", "Penulis", "Aktor", "Desainer", "Fotografer"],
      traits: ["Kreatif", "Ekspresif", "Independen", "Imajinatif"]
    },
    {
      id: "S",
      name: "Social",
      description: "Preferensi untuk bekerja dengan orang, membantu, mengajar, atau menyembuhkan.",
      careers: ["Guru", "Konselor", "Pekerja sosial", "Perawat", "Terapis", "HR Manager"],
      traits: ["Kooperatif", "Suportif", "Empatik", "Komunikatif"]
    },
    {
      id: "E",
      name: "Enterprising",
      description: "Preferensi untuk aktivitas yang melibatkan kepemimpinan, persuasi, dan manajemen.",
      careers: ["Manajer", "Sales", "Pengusaha", "Pengacara", "Politisi", "Agen real estate"],
      traits: ["Persuasif", "Bersemangat", "Asertif", "Ambisi"]
    },
    {
      id: "C",
      name: "Conventional",
      description: "Preferensi untuk aktivitas yang terstruktur, mengorganisir data dengan jelas, dan mengikuti prosedur.",
      careers: ["Akuntan", "Banker", "Admin", "Analis keuangan", "Sekretaris", "Auditor"],
      traits: ["Terorganisir", "Teliti", "Praktis", "Efisien"]
    }
  ];
  
  // Data untuk hasil test (dummy data)
  export const dummyResults = {
    personality: {
      type: "ENFJ",
      description: "ENFJ (Protagonis) adalah pemimpin karismatik dan inspiratif, mampu memotivasi orang lain dan memiliki kemampuan untuk melihat potensi dalam setiap orang.",
      strengths: [
        "Memiliki kecerdasan emosional yang kuat",
        "Inspiratif dan karismatik",
        "Suka membantu dan mengembangkan orang lain",
        "Komunikator yang baik",
        "Dapat diandalkan dan altruistik"
      ],
      weaknesses: [
        "Terlalu idealistik",
        "Terlalu sensitif terhadap kritik",
        "Sulit mengambil keputusan sulit",
        "Cenderung mengabaikan kebutuhan sendiri",
        "Kadang terlalu mengatur"
      ],
      careerSuggestions: [
        "Konselor atau Terapis",
        "HR Manager",
        "Public Relations",
        "Pekerjaan sosial",
        "Pendidikan",
        "Pelatihan dan pengembangan",
        "Pembicara motivasional"
      ],
      personalDevelopment: [
        "Belajar untuk menerima kritik sebagai kesempatan untuk bertumbuh",
        "Menyeimbangkan kebutuhan orang lain dengan kebutuhan pribadi",
        "Terlibat dalam aktivitas introspektif",
        "Berlatih untuk membuat keputusan dengan lebih objektif",
        "Memberikan ruang untuk diri sendiri"
      ],
      chartData: {
        dimensions: [
          { name: "Extraversion", value: 78, opposite: "Introversion", oppositeValue: 22 },
          { name: "Intuition", value: 65, opposite: "Sensing", oppositeValue: 35 },
          { name: "Feeling", value: 82, opposite: "Thinking", oppositeValue: 18 },
          { name: "Judging", value: 70, opposite: "Perceiving", oppositeValue: 30 }
        ]
      }
    },
    
    interest: {
      primaryCode: "SAE",
      description: "Kode Holland SAE (Social-Artistic-Enterprising) menunjukkan preferensi untuk bekerja dengan orang lain, menggunakan kreativitas, dan mengambil peran kepemimpinan. Anda cenderung menikmati lingkungan yang memungkinkan Anda untuk membantu, mengajar, dan menginspirasi orang lain, sambil juga mengekspresikan diri secara kreatif dan berperan dalam pengambilan keputusan.",
      topInterests: [
        {
          type: "Social",
          score: 85,
          description: "Anda memiliki kecenderungan yang kuat untuk bekerja dengan orang, membantu, mengajar, atau memberikan bimbingan."
        },
        {
          type: "Artistic",
          score: 72,
          description: "Anda menghargai kreativitas dan ekspresi diri, dan mungkin menikmati aktivitas yang memungkinkan inovasi dan pemikiran out-of-the-box."
        },
        {
          type: "Enterprising",
          score: 68,
          description: "Anda memiliki kecenderungan untuk memimpin, meyakinkan orang lain, dan mengambil inisiatif dalam situasi sosial atau profesional."
        }
      ],
      careerSuggestions: [
        "Guru seni atau musik",
        "Konselor pendidikan",
        "Direktur program komunitas",
        "Spesialis hubungan publik",
        "Pelatih atau fasilitator pengembangan",
        "Terapis seni",
        "Manajer program nonprofit",
        "Koordinator acara"
      ],
      workEnvironment: "Anda akan berkembang dalam lingkungan yang kolaboratif dan dinamis yang menghargai kontribusi individu dan kreativitas. Lingkungan yang ideal bagi Anda memungkinkan interaksi yang bermakna dengan orang lain, kesempatan untuk ekspresi kreatif, dan ruang untuk memimpin inisiatif atau proyek."
    },
    
    aptitude: {
      overallScore: 78,
      summary: "Hasil tes bakat Anda menunjukkan kemampuan yang sangat baik dalam kecerdasan verbal dan interpersonal, dengan kekuatan tambahan dalam pemikiran kreatif dan pemecahan masalah. Area yang dapat ditingkatkan termasuk kemampuan kuantitatif dan keterampilan teknis.",
      domains: [
        {
          name: "Verbal",
          score: 88,
          description: "Kemampuan verbal Anda yang tinggi menunjukkan keahlian dalam komunikasi, pemahaman bahasa, dan ekspresi ide."
        },
        {
          name: "Numerical",
          score: 65,
          description: "Kemampuan numerik Anda menunjukkan pemahaman dasar yang baik tentang konsep matematika, meskipun ini bukan area kekuatan utama Anda."
        },
        {
          name: "Spatial",
          score: 72,
          description: "Kemampuan spasial Anda baik, menunjukkan kemampuan untuk memvisualisasikan dan memanipulasi objek dalam pikiran Anda."
        },
        {
          name: "Creative",
          score: 84,
          description: "Skor kreativitas Anda yang tinggi menunjukkan kemampuan untuk berpikir secara original dan inovatif dalam berbagai situasi."
        },
        {
          name: "Interpersonal",
          score: 90,
          description: "Kecerdasan interpersonal Anda yang sangat tinggi menunjukkan pemahaman yang luar biasa tentang motivasi dan perasaan orang lain."
        },
        {
          name: "Analytical",
          score: 76,
          description: "Kemampuan analitis Anda yang baik menunjukkan kapasitas untuk memecah masalah kompleks menjadi komponen yang lebih kecil dan menemukan solusi."
        },
        {
          name: "Technical",
          score: 58,
          description: "Kemampuan teknis Anda menunjukkan pemahaman dasar tentang sistem dan proses, dengan ruang untuk pengembangan lebih lanjut."
        }
      ],
      developmentSuggestions: [
        "Pertimbangkan kursus matematika atau statistik untuk meningkatkan kemampuan kuantitatif",
        "Kembangkan keterampilan teknis melalui kursus online atau workshop dalam teknologi yang relevan",
        "Manfaatkan kekuatan verbal Anda dengan menulis atau berbicara di depan umum",
        "Lanjutkan mengembangkan kecerdasan interpersonal melalui pelatihan kepemimpinan atau fasilitasi",
        "Cari peluang yang menggabungkan kemampuan verbal, kreativitas, dan interpersonal Anda"
      ]
    }
  };
  
  // Data untuk pertanyaan test (contoh untuk demo)
  export const dummyQuestions = {
    personality: [
      {
        id: 1,
        question: "Saya lebih suka menghabiskan waktu dengan banyak orang daripada sendirian.",
        answerOptions: [
          { value: 1, label: "Sangat tidak setuju" },
          { value: 2, label: "Tidak setuju" },
          { value: 3, label: "Netral" },
          { value: 4, label: "Setuju" },
          { value: 5, label: "Sangat setuju" }
        ],
        dimension: "E/I"
      },
      {
        id: 2,
        question: "Saya lebih memperhatikan detail dan fakta daripada gambaran besar dan kemungkinan.",
        answerOptions: [
          { value: 1, label: "Sangat tidak setuju" },
          { value: 2, label: "Tidak setuju" },
          { value: 3, label: "Netral" },
          { value: 4, label: "Setuju" },
          { value: 5, label: "Sangat setuju" }
        ],
        dimension: "S/N"
      },
      {
        id: 3,
        question: "Saya lebih mengandalkan logika daripada perasaan ketika membuat keputusan.",
        answerOptions: [
          { value: 1, label: "Sangat tidak setuju" },
          { value: 2, label: "Tidak setuju" },
          { value: 3, label: "Netral" },
          { value: 4, label: "Setuju" },
          { value: 5, label: "Sangat setuju" }
        ],
        dimension: "T/F"
      },
      {
        id: 4,
        question: "Saya lebih suka rencana dan jadwal yang terstruktur daripada fleksibilitas dan spontanitas.",
        answerOptions: [
          { value: 1, label: "Sangat tidak setuju" },
          { value: 2, label: "Tidak setuju" },
          { value: 3, label: "Netral" },
          { value: 4, label: "Setuju" },
          { value: 5, label: "Sangat setuju" }
        ],
        dimension: "J/P"
      },
      {
        id: 5,
        question: "Saya mendapatkan energi dengan berinteraksi dengan orang lain.",
        answerOptions: [
          { value: 1, label: "Sangat tidak setuju" },
          { value: 2, label: "Tidak setuju" },
          { value: 3, label: "Netral" },
          { value: 4, label: "Setuju" },
          { value: 5, label: "Sangat setuju" }
        ],
        dimension: "E/I"
      },
      // Tambahkan lebih banyak pertanyaan sesuai kebutuhan
    ],
    
    interest: [
      {
        id: 1,
        question: "Saya menikmati memperbaiki atau bekerja dengan mesin.",
        answerOptions: [
          { value: 1, label: "Sangat tidak tertarik" },
          { value: 2, label: "Tidak tertarik" },
          { value: 3, label: "Netral" },
          { value: 4, label: "Tertarik" },
          { value: 5, label: "Sangat tertarik" }
        ],
        dimension: "R"
      },
      {
        id: 2,
        question: "Saya suka melakukan penelitian dan menyelidiki hal-hal baru.",
        answerOptions: [
          { value: 1, label: "Sangat tidak tertarik" },
          { value: 2, label: "Tidak tertarik" },
          { value: 3, label: "Netral" },
          { value: 4, label: "Tertarik" },
          { value: 5, label: "Sangat tertarik" }
        ],
        dimension: "I"
      },
      {
        id: 3,
        question: "Saya menikmati kegiatan seni seperti menggambar atau bermain musik.",
        answerOptions: [
          { value: 1, label: "Sangat tidak tertarik" },
          { value: 2, label: "Tidak tertarik" },
          { value: 3, label: "Netral" },
          { value: 4, label: "Tertarik" },
          { value: 5, label: "Sangat tertarik" }
        ],
        dimension: "A"
      },
      {
        id: 4,
        question: "Saya senang membantu dan bekerja dengan orang lain.",
        answerOptions: [
          { value: 1, label: "Sangat tidak tertarik" },
          { value: 2, label: "Tidak tertarik" },
          { value: 3, label: "Netral" },
          { value: 4, label: "Tertarik" },
          { value: 5, label: "Sangat tertarik" }
        ],
        dimension: "S"
      },
      {
        id: 5,
        question: "Saya suka memimpin diskusi atau proyek.",
        answerOptions: [
          { value: 1, label: "Sangat tidak tertarik" },
          { value: 2, label: "Tidak tertarik" },
          { value: 3, label: "Netral" },
          { value: 4, label: "Tertarik" },
          { value: 5, label: "Sangat tertarik" }
        ],
        dimension: "E"
      },
      // Tambahkan lebih banyak pertanyaan sesuai kebutuhan
    ],
    
    aptitude: [
      {
        id: 1,
        question: "Pada pagi hari, sebuah tiang menara menghasilkan bayangan sepanjang 8 meter. Pada saat yang sama, sebatang tongkat setinggi 1 meter menghasilkan bayangan sepanjang 40 cm. Berapa tinggi menara tersebut?",
        answerOptions: [
          { value: "A", label: "15 meter" },
          { value: "B", label: "18 meter" },
          { value: "C", label: "20 meter" },
          { value: "D", label: "25 meter" }
        ],
        correctAnswer: "C",
        domain: "Numerical"
      },
      {
        id: 2,
        question: "Pilih kata yang memiliki makna berlawanan dengan 'Frugal'.",
        answerOptions: [
          { value: "A", label: "Berhemat" },
          { value: "B", label: "Dermawan" },
          { value: "C", label: "Boros" },
          { value: "D", label: "Kikir" }
        ],
        correctAnswer: "C",
        domain: "Verbal"
      },
      {
        id: 3,
        question: "Jika gambar di bawah ini diputar 90 derajat searah jarum jam, bagaimana bentuknya?",
        answerOptions: [
          { value: "A", label: "Bentuk A" },
          { value: "B", label: "Bentuk B" },
          { value: "C", label: "Bentuk C" },
          { value: "D", label: "Bentuk D" }
        ],
        correctAnswer: "B",
        domain: "Spatial"
      },
      {
        id: 4,
        question: "Berikan solusi kreatif untuk masalah kemacetan lalu lintas di kota-kota besar.",
        type: "openEnded",
        domain: "Creative"
      },
      {
        id: 5,
        question: "Dalam situasi konflik tim, apa pendekatan terbaik untuk menyelesaikannya?",
        answerOptions: [
          { value: "A", label: "Meminta semua pihak untuk mengabaikan masalah" },
          { value: "B", label: "Menjadi penengah dan memfasilitasi diskusi terbuka" },
          { value: "C", label: "Memberi solusi tanpa mendengarkan pendapat semua pihak" },
          { value: "D", label: "Menyerahkan masalah kepada atasan" }
        ],
        correctAnswer: "B",
        domain: "Interpersonal"
      },
      // Tambahkan lebih banyak pertanyaan sesuai kebutuhan
    ]
  };
  
  // Data untuk rekomendasi karier berdasarkan kombinasi MBTI dan minat
  export const careerRecommendations = {
    "ENFJ-SAE": [
      "Konselor Pendidikan",
      "Trainer Pengembangan Diri",
      "Koordinator Program Non-profit",
      "HR Development Manager",
      "Terapis Seni",
      "Guru Kehidupan (Life Coach)",
      "Public Relations Manager"
    ],
    "INTJ-IRC": [
      "Ilmuwan Peneliti",
      "Arsitek Sistem",
      "Analis Strategis",
      "Peneliti Akademis",
      "Pengembang Software",
      "Insinyur AI",
      "Konsultan Manajemen"
    ],
    // Tambahkan lebih banyak kombinasi sesuai kebutuhan
  };

  // Data konsep psikologi
export const dummyTestConcepts = [
  {
    concept_code: "1",
    short_name: "Kepribadian",
    concept: "MBTI",
  },
  {
    concept_code: "2",
    short_name: "Minat",
    concept: "RIASEC",
  },
  {
    concept_code: "3",
    short_name: "Bakat",
    concept: "MI",
  },
];

// Data tanggal tes
export const dummyTestDates = [
  {
    assessment_date_id: "1",
    concept_psi_id: "1",
    assessment_date: "2025-04-01",
    description: "Tes Kepribadian MBTI Semester Genap",
    concept_name: "Kepribadian",
    assessment_flag: 1,
  },
  {
    assessment_date_id: "2",
    concept_psi_id: "2",
    assessment_date: "2025-04-08",
    description: "Tes Minat RIASEC Semester Genap",
    concept_name: "Minat",
    assessment_flag: 1,
  },
  {
    assessment_date_id: "3",
    concept_psi_id: "3",
    assessment_date: "2025-04-15",
    description: "Tes Bakat Multiple Intelligence Semester Genap",
    concept_name: "Bakat",
    assessment_flag: 0,
  },
];

// Data kelas/rombongan belajar
export const dummyClassGroups = [
  {
    rombongan_belajar_id: "1",
    nama: "X IPA 1",
  },
  {
    rombongan_belajar_id: "2",
    nama: "X IPA 2",
  },
  {
    rombongan_belajar_id: "3",
    nama: "X IPS 1",
  },
  {
    rombongan_belajar_id: "4",
    nama: "X IPS 2",
  },
  {
    rombongan_belajar_id: "5",
    nama: "XI IPA 1",
  },
  {
    rombongan_belajar_id: "6",
    nama: "XI IPA 2",
  },
];

// Data siswa
export const dummyStudents = [
  {
    peserta_didik_id: "1",
    nisn: "1001001001",
    nama: "Ahmad Rizky",
    jenis_kelamin: "L",
    rombongan_belajar_id: "1",
    rombel: "X IPA 1",
    kurikulum_anggota_rombel_flag: 1,
  },
  {
    peserta_didik_id: "2",
    nisn: "1001001002",
    nama: "Budi Santoso",
    jenis_kelamin: "L",
    rombongan_belajar_id: "1",
    rombel: "X IPA 1",
    kurikulum_anggota_rombel_flag: 1,
  },
  {
    peserta_didik_id: "3",
    nisn: "1001001003",
    nama: "Citra Dewi",
    jenis_kelamin: "P",
    rombongan_belajar_id: "1",
    rombel: "X IPA 1",
    kurikulum_anggota_rombel_flag: 1,
  },
  {
    peserta_didik_id: "4",
    nisn: "1001001004",
    nama: "Dian Purnama",
    jenis_kelamin: "P",
    rombongan_belajar_id: "1",
    rombel: "X IPA 1",
    kurikulum_anggota_rombel_flag: 1,
  },
  {
    peserta_didik_id: "5",
    nisn: "1001001005",
    nama: "Eko Prasetyo",
    jenis_kelamin: "L",
    rombongan_belajar_id: "2",
    rombel: "X IPA 2",
    kurikulum_anggota_rombel_flag: 1,
  },
  {
    peserta_didik_id: "6",
    nisn: "1001001006",
    nama: "Fitriani Sari",
    jenis_kelamin: "P",
    rombongan_belajar_id: "2",
    rombel: "X IPA 2",
    kurikulum_anggota_rombel_flag: 1,
  },
];

// Data user profile (contoh untuk siswa)
export const dummyUserProfile = {
  ptk_id: "101",
  nama: "Ahmad Rizky",
  nisn: "1001001001",
  email: "ahmad.rizky@student.example.com",
  telepon: "08123456789",
  level_id: 3, // 3 = Siswa, 4 = Guru BK
  rombel: "X IPA 1",
  test_status: {
    mbti: true,
    riasec: true,
    mi: false,
  },
};