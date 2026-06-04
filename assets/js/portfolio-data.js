// 🚀 PORTFOLIO DATA — Edit file ini untuk update semua konten portfolio

const portfolioData = {

  // 👤 PERSONAL INFO
  personal: {
    name: "Chris Jericho",
    title: "Full Stack Developer & UI/UX Enthusiast",
    tagline: "🚀 Full Stack Developer yang menciptakan pengalaman digital yang memukau dengan teknologi cutting-edge. Spesialisasi dalam React, Laravel, dan desain UI/UX yang inovatif.",
    email: "meliala366m12@gmail.com",
    phone: "+62 89623348644",
    website: "https://chrisjericho.my.id/",
    profileImage: "assets/img/aku.JPG",
    aboutImage: "assets/img/me.JPG",
  },

  // 📊 STATISTICS
  stats: {
    projects: 10,
    experience: 3,
    satisfaction: 100,
    coffees: 500,
    technologies: 12,
  },

  // 🎯 TYPED ANIMATION TEXTS
  typedTexts: [
    "🚀 next-gen web apps",
    "✨ stunning UI/UX designs",
    "⚡ lightning-fast websites",
    "🎨 immersive experiences",
    "🔥 cutting-edge solutions",
    "💎 pixel-perfect interfaces",
    "📱 mobile applications",
    "🤖 IoT & AI solutions"
  ],

  // 🚀 PROJECTS — dari GitHub ssnhrii
  projects: [
    {
      id: 1,
      title: "SUSEMON — IoT Server Monitor",
      description: "Rancang Bangun Node Sensor Nirkabel Berbasis LoRa untuk Monitoring Anomali Suhu Ruang Server menggunakan Analisis Data Berbasis AI. Project TA dengan Flutter & Dart.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80",
      technologies: ["Dart", "Flutter", "IoT", "LoRa", "AI"],
      githubUrl: "https://github.com/ssnhrii/susemon",
      liveUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "MBKM Application System v2",
      description: "Versi terbaru sistem manajemen pengajuan MBKM dengan fitur lengkap — dashboard admin, tracking real-time, dan sistem pelaporan. Dibangun dengan Laravel & PHP.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
      githubUrl: "https://github.com/ssnhrii/mbkm-vers2",
      liveUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "GBIS Anugerah",
      description: "Website gereja modern dengan sistem informasi lengkap — jadwal ibadah, berita jemaat, dan manajemen konten berbasis PHP.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      githubUrl: "https://github.com/ssnhrii/GBIS-Anugerah",
      liveUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Math-room",
      description: "Aplikasi flashcard interaktif untuk belajar rumus matematika dasar dengan cara yang menyenangkan. Ada live demo yang bisa dicoba langsung!",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/ssnhrii/Maths-room",
      liveUrl: "https://ssnhrii.github.io/Maths-room",
      featured: true
    },
    {
      id: 5,
      title: "KuasPay",
      description: "Sistem pembayaran digital berbasis PHP dengan manajemen transaksi, laporan keuangan, dan dashboard admin.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      githubUrl: "https://github.com/ssnhrii/KuasPay",
      liveUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Forum App",
      description: "Platform diskusi berbasis web dengan fitur thread, reply, dan manajemen pengguna.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      githubUrl: "https://github.com/ssnhrii/forum-app",
      liveUrl: "#",
      featured: false
    },
    {
      id: 7,
      title: "Reservasi Hotel",
      description: "Sistem pemesanan kamar hotel online dengan fitur booking, manajemen kamar, dan konfirmasi reservasi.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      githubUrl: "https://github.com/ssnhrii/reservasi-hotel",
      liveUrl: "#",
      featured: false
    }
  ],

  // 💼 SKILLS
  skills: [
    { name: "HTML5",      level: 90, icon: "fab fa-html5",    category: "frontend" },
    { name: "CSS3",       level: 85, icon: "fab fa-css3-alt", category: "frontend" },
    { name: "JavaScript", level: 75, icon: "fab fa-js",       category: "frontend" },
    { name: "React.js",   level: 50, icon: "fab fa-react",    category: "frontend" },
    { name: "Tailwind",   level: 80, icon: "fas fa-wind",     category: "frontend" },
    { name: "PHP",        level: 80, icon: "fab fa-php",      category: "backend"  },
    { name: "Laravel",    level: 75, icon: "fas fa-code",     category: "backend"  },
    { name: "Node.js",    level: 40, icon: "fab fa-node-js",  category: "backend"  },
    { name: "Python",     level: 60, icon: "fab fa-python",   category: "backend"  },
    { name: "Dart/Flutter",level: 55,icon: "fas fa-mobile-alt",category: "backend" },
    { name: "MySQL",      level: 80, icon: "fas fa-database", category: "database" },
    { name: "Git",        level: 85, icon: "fab fa-git-alt",  category: "tools"    },
    { name: "Docker",     level: 40, icon: "fab fa-docker",   category: "tools"    },
  ],

  // 🏆 ACHIEVEMENTS
  achievements: [
    {
      id: 1,
      title: "Best Student Project",
      organization: "Politeknik Negeri Batam",
      description: "Meraih penghargaan proyek terbaik untuk aplikasi MBKM dengan inovasi teknologi terdepan.",
      icon: "fas fa-trophy",
      color: "yellow"
    },
    {
      id: 2,
      title: "IoT & AI Research",
      organization: "Politeknik Negeri Batam",
      description: "Mengembangkan sistem monitoring suhu server berbasis LoRa dengan analisis AI untuk Tugas Akhir.",
      icon: "fas fa-microchip",
      color: "blue"
    },
    {
      id: 3,
      title: "Open Source Contributor",
      organization: "GitHub — ssnhrii",
      description: "Aktif mengembangkan proyek open source dengan 10+ repository publik dan 126 contributions.",
      icon: "fab fa-github",
      color: "green"
    }
  ],

  // 💬 TESTIMONIALS
  testimonials: [
    {
      id: 1,
      name: "Dosen Pembimbing",
      position: "Politeknik Negeri Batam",
      avatar: "DS",
      rating: 5,
      text: "Chris menunjukkan dedikasi yang luar biasa dalam mengembangkan aplikasi MBKM. Kemampuan problem-solving dan attention to detail-nya sangat mengesankan."
    },
    {
      id: 2,
      name: "Team Member",
      position: "Project Collaboration",
      avatar: "TM",
      rating: 5,
      text: "Bekerja dengan Chris sangat menyenangkan. Code yang dia tulis selalu clean dan well-documented. Komunikasinya juga bagus."
    },
    {
      id: 3,
      name: "User",
      position: "Math-room App",
      avatar: "US",
      rating: 5,
      text: "Aplikasi Math-room sangat membantu belajar matematika. Interface-nya user-friendly dan fitur flashcard-nya sangat interaktif!"
    }
  ],

  // 🔗 SOCIAL MEDIA
  social: {
    github:    "https://github.com/ssnhrii",
    instagram: "https://www.instagram.com/12ssnhrii_/",
    linkedin:  "https://www.linkedin.com/in/chris-jericho-sembiring/",
    tiktok:    "https://www.tiktok.com/@ssnchrii_/",
    whatsapp:  "https://wa.me/6289623348644",
    email:     "mailto:meliala366m12@gmail.com"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
} else {
  window.portfolioData = portfolioData;
}
