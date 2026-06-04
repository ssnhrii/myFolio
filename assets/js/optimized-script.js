// =====================================================
// PORTFOLIO MAIN SCRIPT — Optimized
// =====================================================

// --- PRELOADER ---
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  const progress = document.getElementById('loading-progress');
  const loadingText = document.getElementById('loading-text');
  if (!preloader) return;

  const steps = [
    { text: 'Initializing...', val: 20 },
    { text: 'Loading assets...', val: 50 },
    { text: 'Almost ready...', val: 80 },
    { text: 'Welcome!', val: 100 },
  ];
  let i = 0;
  const run = () => {
    if (i < steps.length) {
      if (progress) progress.style.width = steps[i].val + '%';
      if (loadingText) loadingText.textContent = steps[i].text;
      i++;
      setTimeout(run, 250);
    } else {
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => { preloader.style.display = 'none'; }, 500);
      }, 200);
    }
  };
  run();
});

// --- THEME TOGGLE ---
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  });
}
if (localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}

// --- MOBILE MENU ---
const mobileBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      const icon = mobileBtn.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    });
  });
}

// --- NAVBAR SCROLL ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.pageYOffset > 100);
});

// --- SCROLL PROGRESS BAR ---
const scrollBar = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
  if (!scrollBar) return;
  const pct = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
  scrollBar.style.transform = `scaleX(${pct})`;
}, { passive: true });

// --- BACK TO TOP ---
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (!backToTop) return;
  if (window.pageYOffset > 300) {
    backToTop.classList.remove('opacity-0', 'invisible');
    backToTop.classList.add('opacity-100', 'visible');
  } else {
    backToTop.classList.add('opacity-0', 'invisible');
    backToTop.classList.remove('opacity-100', 'visible');
  }
}, { passive: true });

// --- AOS INIT ---
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }

  // Set current year
  const yr = document.getElementById('current-year');
  if (yr) yr.textContent = new Date().getFullYear();

  // --- TYPED.JS ---
  const initTyped = () => {
    if (typeof Typed === 'undefined') return;
    const strings = window.portfolioTypedTexts || [
      '🚀 next-gen web apps',
      '✨ stunning UI/UX designs',
      '⚡ lightning-fast websites',
    ];
    new Typed('#typed', {
      strings,
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 1500,
      startDelay: 800,
      loop: true,
      showCursor: true,
      cursorChar: '▋',
      smartBackspace: true,
    });
  };
  setTimeout(initTyped, 350);

  // --- SKILL CATEGORY FILTER ---
  const skillCatBtns = document.querySelectorAll('.skill-category-btn');
  skillCatBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      skillCatBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.dataset.category;
      document.querySelectorAll('.skill-card').forEach(card => {
        const show = cat === 'all' || card.dataset.category === cat;
        card.style.display = show ? 'block' : 'none';
      });
    });
  });

  // --- SKILL PROGRESS BARS (IntersectionObserver) ---
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.transition = 'width 1s ease';
        bar.style.width = bar.dataset.width + '%';
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skill-progress-modern').forEach(bar => skillObserver.observe(bar));

  // --- COUNTER ANIMATION ---
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target) || 0;
      if (!target) return;
      let current = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current);
        if (current >= target) clearInterval(timer);
      }, 16);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-number, .counter').forEach(el => counterObserver.observe(el));

  // --- TESTIMONIALS SLIDER ---
  let slide = 0;
  const slider = document.getElementById('testimonials-slider');
  const dots = document.querySelectorAll('.testimonial-dot');
  const slides = document.querySelectorAll('.testimonial-slide');

  const goTo = (n) => {
    if (!slider || !slides.length) return;
    slide = (n + slides.length) % slides.length;
    slider.style.transform = `translateX(-${slide * 100}%)`;
    dots.forEach((d, i) => {
      d.classList.toggle('bg-primary-500', i === slide);
      d.classList.toggle('bg-gray-300', i !== slide);
    });
  };

  const prev = document.querySelector('.testimonial-prev');
  const next = document.querySelector('.testimonial-next');
  if (prev) prev.addEventListener('click', () => goTo(slide - 1));
  if (next) next.addEventListener('click', () => goTo(slide + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  setInterval(() => goTo(slide + 1), 5000);

  // --- BLOG FILTER ---
  const blogSearch = document.getElementById('blog-search');
  const filterBtns = document.querySelectorAll('.blog-filter-btn');

  const filterBlogs = () => {
    const q = blogSearch ? blogSearch.value.toLowerCase() : '';
    const activeFilter = document.querySelector('.blog-filter-btn.active');
    const f = activeFilter ? activeFilter.dataset.filter : 'all';
    document.querySelectorAll('.blog-card').forEach(card => {
      const title = (card.dataset.title || '').toLowerCase();
      const cat = card.dataset.category || '';
      card.style.display = (title.includes(q) && (f === 'all' || cat === f)) ? '' : 'none';
    });
  };
  if (blogSearch) blogSearch.addEventListener('input', filterBlogs);
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      filterBlogs();
    });
  });

  // --- CONTACT FORM ---
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.disabled = false;
        const msg = document.createElement('div');
        msg.className = 'mt-4 p-3 bg-green-500 text-white rounded-lg text-center';
        msg.textContent = '✅ Pesan terkirim! Akan dibalas segera.';
        this.appendChild(msg);
        this.reset();
        setTimeout(() => msg.remove(), 4000);
      }, 1500);
    });
  }

  // --- VIEW ALL PROJECTS ---
  const viewAllBtn = document.getElementById('view-all-projects-btn');
  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
      const container = document.querySelector('.projects-container');
      if (!container) return;

      window._showingAll = !window._showingAll;
      const span = viewAllBtn.querySelector('span');
      const icon = viewAllBtn.querySelector('i');

      if (window._allRepos) {
        // Use live GitHub data
        const toShow = window._showingAll ? window._allRepos : window._allRepos.slice(0, 3);

        const imgMap = {
          'susemon':'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80',
          'mbkm-vers2':'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
          'PBL117-PengajuanUsulanMBKM':'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
          'GBIS-Anugerah':'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
          'Maths-room':'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
          'KuasPay':'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
          'forum-app':'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
          'reservasi-hotel':'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
          'gereja':'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=800&q=80',
          'tugasku':'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
          'velentine':'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80',
        };
        const langMap = { 'PHP':['PHP','MySQL'], 'JavaScript':['JavaScript','HTML','CSS'], 'Dart':['Dart','Flutter'], 'CSS':['HTML','CSS'], 'HTML':['HTML','CSS','JavaScript'], null:['Web'] };
        const defaultImg = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';

        container.innerHTML = toShow.map((repo, i) => {
          const tags = langMap[repo.language] || langMap[null];
          const img = imgMap[repo.name] || defaultImg;
          const liveUrl = repo.homepage && repo.homepage.startsWith('http') ? repo.homepage : null;
          return `
            <div class="project-card group" data-aos="fade-up" data-aos-delay="${i * 60}">
              <div class="relative overflow-hidden">
                <img src="${img}" alt="${repo.name}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy"/>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                ${repo.stargazers_count > 0 ? `<div class="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1"><i class="fas fa-star text-xs"></i>${repo.stargazers_count}</div>` : ''}
              </div>
              <div class="p-4 sm:p-6">
                <h3 class="text-lg font-bold mb-2">${repo.name.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">${repo.description || 'Project dari GitHub @ssnhrii'}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  ${tags.map(t=>`<span class="tech-tag text-xs">${t}</span>`).join('')}
                  ${repo.language ? `<span class="tech-tag text-xs">${repo.language}</span>` : ''}
                </div>
                <div class="flex flex-wrap gap-3">
                  <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center">
                    <i class="fab fa-github mr-1"></i> Code
                  </a>
                  ${liveUrl ? `<a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"><i class="fas fa-external-link-alt mr-1"></i> Live Demo</a>` : ''}
                </div>
              </div>
            </div>`;
        }).join('');
      } else if (window.portfolioData) {
        // Fallback to static data
        const projects = window.portfolioData.projects;
        const toShow = window._showingAll ? projects : projects.filter(p => p.featured).slice(0, 3);
        container.innerHTML = toShow.map((p, i) => `
          <div class="project-card group" data-aos="fade-up" data-aos-delay="${i * 80}">
            <div class="relative overflow-hidden">
              <img src="${p.image}" alt="${p.title}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy"/>
            </div>
            <div class="p-4 sm:p-6">
              <h3 class="text-lg font-bold mb-2">${p.title}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">${p.description}</p>
              <div class="flex flex-wrap gap-2 mb-4">${p.technologies.map(t=>`<span class="tech-tag text-xs">${t}</span>`).join('')}</div>
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-sm text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center">
                <i class="fab fa-github mr-1"></i> Code
              </a>
            </div>
          </div>`).join('');
      }

      span.textContent = window._showingAll ? 'Show Less' : 'View All Projects';
      icon.style.transform = window._showingAll ? 'rotate(90deg)' : '';
      if (typeof AOS !== 'undefined') AOS.refresh();
    });
  }

  // --- SMOOTH SCROLL ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- COPY EMAIL ---
  const emailDisplay = document.querySelector('[data-copy-email]');
  if (emailDisplay) {
    emailDisplay.style.cursor = 'pointer';
    emailDisplay.title = 'Klik untuk copy';
    emailDisplay.addEventListener('click', () => {
      navigator.clipboard.writeText(emailDisplay.textContent.trim()).then(() => {
        const orig = emailDisplay.textContent;
        emailDisplay.textContent = '✅ Copied!';
        setTimeout(() => emailDisplay.textContent = orig, 2000);
      });
    });
  }
});
