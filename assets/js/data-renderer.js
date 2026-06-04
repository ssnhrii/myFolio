// 🚀 PORTFOLIO DATA RENDERER

class PortfolioRenderer {
  constructor(data) {
    this.data = data;
    this.init();
  }

  init() {
    console.log('🎨 Rendering portfolio data...');
    this.renderPersonalInfo();
    this.renderStats();
    this.renderTypedTexts();
    this.renderProjects();
    this.renderSkills();
    this.renderAchievements();
    this.renderSocialLinks();
    console.log('✅ Done!');
  }

  renderPersonalInfo() {
    const { personal } = this.data;
    document.title = `${personal.name} | ${personal.title}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = personal.tagline;

    // Hero name & tagline
    const heroName = document.querySelector('.hero-name');
    if (heroName) heroName.textContent = personal.name;
    const heroTagline = document.querySelector('.hero-tagline');
    if (heroTagline) heroTagline.textContent = personal.tagline;

    // Contact links
    document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
      el.href = `mailto:${personal.email}`;
      if (el.dataset.showText) el.textContent = personal.email;
    });
    document.querySelectorAll('a[href^="tel:"]').forEach(el => {
      el.href = `tel:${personal.phone}`;
      if (el.dataset.showText) el.textContent = personal.phone;
    });
  }

  renderStats() {
    const { stats } = this.data;
    Object.keys(stats).forEach(key => {
      document.querySelectorAll(`[data-stat="${key}"]`).forEach(el => {
        el.textContent = stats[key];
        el.dataset.target = stats[key];
      });
    });
  }

  renderTypedTexts() {
    window.portfolioTypedTexts = this.data.typedTexts;
  }

  renderProjects() {
    const container = document.querySelector('.projects-container');
    if (!container) return;

    // Fetch live from GitHub API
    fetch('https://api.github.com/users/ssnhrii/repos?per_page=100&sort=updated')
      .then(res => res.json())
      .then(repos => {
        // Filter out profile/config repos
        const skip = ['lchrii', 'myFolio', 'susemon-maintenance', 'biodata_mobile'];
        const filtered = repos.filter(r => !skip.includes(r.name) && !r.fork);

        // Map language to tech tags
        const langMap = {
          'PHP': ['PHP', 'MySQL'],
          'JavaScript': ['JavaScript', 'HTML', 'CSS'],
          'Dart': ['Dart', 'Flutter'],
          'CSS': ['HTML', 'CSS'],
          'HTML': ['HTML', 'CSS', 'JavaScript'],
          null: ['Web']
        };

        // Image per repo
        const imgMap = {
          'susemon':                   'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80',
          'mbkm-vers2':                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
          'PBL117-PengajuanUsulanMBKM':'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
          'GBIS-Anugerah':             'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
          'Maths-room':                'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
          'KuasPay':                   'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
          'forum-app':                 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
          'reservasi-hotel':           'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
          'gereja':                    'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=800&q=80',
          'tugasku':                   'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
          'velentine':                 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80',
        };
        const defaultImg = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';

        // Priority featured repos shown first
        const featured = ['susemon', 'mbkm-vers2', 'GBIS-Anugerah', 'Maths-room'];
        filtered.sort((a, b) => {
          const ai = featured.indexOf(a.name), bi = featured.indexOf(b.name);
          if (ai !== -1 && bi !== -1) return ai - bi;
          if (ai !== -1) return -1;
          if (bi !== -1) return 1;
          return new Date(b.updated_at) - new Date(a.updated_at);
        });

        // Store for View All toggle
        window._allRepos = filtered;
        window._showingAll = false;

        this._renderRepoCards(container, filtered.slice(0, 3), imgMap, langMap, defaultImg);
      })
      .catch(() => {
        // Fallback to static data if API fails
        const featured = this.data.projects.filter(p => p.featured).slice(0, 3);
        this._renderProjectCards(container, featured);
      });
  }

  _renderRepoCards(container, repos, imgMap, langMap, defaultImg) {
    container.innerHTML = repos.map((repo, i) => {
      const tags = langMap[repo.language] || langMap[null];
      const img = imgMap[repo.name] || defaultImg;
      const liveUrl = repo.homepage && repo.homepage.startsWith('http') ? repo.homepage : null;

      return `
        <div class="project-card group" data-aos="fade-up" data-aos-delay="${i * 80}">
          <div class="relative overflow-hidden">
            <img src="${img}" alt="${repo.name}"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy"/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            ${repo.stargazers_count > 0 ? `<div class="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1"><i class="fas fa-star text-xs"></i>${repo.stargazers_count}</div>` : ''}
          </div>
          <div class="p-4 sm:p-6">
            <h3 class="text-lg font-bold mb-2">${repo.name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              ${repo.description || 'Project dari GitHub @ssnhrii'}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              ${tags.map(t => `<span class="tech-tag text-xs">${t}</span>`).join('')}
              ${repo.language ? `<span class="tech-tag text-xs">${repo.language}</span>` : ''}
            </div>
            <div class="flex flex-wrap gap-3">
              <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer"
                class="text-sm text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center">
                <i class="fab fa-github mr-1"></i> Code
              </a>
              ${liveUrl ? `<a href="${liveUrl}" target="_blank" rel="noopener noreferrer"
                class="text-sm text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center">
                <i class="fas fa-external-link-alt mr-1"></i> Live Demo
              </a>` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderSkills() {
    const container = document.querySelector('.skills-container');
    if (!container) return;
    const { skills } = this.data;

    container.innerHTML = skills.map(s => `
      <div class="skill-card group" data-category="${s.category}" data-aos="zoom-in">
        <div class="skill-card-inner">
          <div class="skill-icon-container">
            <i class="${s.icon} text-3xl group-hover:animate-bounce"></i>
          </div>
          <h3 class="skill-title">${s.name}</h3>
          <div class="skill-level">
            <div class="skill-progress-modern" data-width="${s.level}" style="width:0%"></div>
          </div>
          <span class="skill-percentage">${s.level}%</span>
        </div>
      </div>
    `).join('');

    // Trigger progress bar animations after render
    setTimeout(() => {
      document.querySelectorAll('.skill-progress-modern').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }, 300);
  }

  renderAchievements() {
    const container = document.querySelector('.achievements-container');
    if (!container) return;
    const colorMap = { yellow: 'from-yellow-400 to-orange-500', blue: 'from-blue-400 to-purple-500', green: 'from-green-400 to-blue-500', red: 'from-red-400 to-pink-500' };

    container.innerHTML = this.data.achievements.map((a, i) => `
      <div class="bg-white dark:bg-dark-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 group"
        data-aos="fade-up" data-aos-delay="${(i+1)*100}">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-gradient-to-r ${colorMap[a.color] || colorMap.blue} rounded-full flex items-center justify-center mr-4 group-hover:animate-bounce">
            <i class="${a.icon} text-white text-xl"></i>
          </div>
          <div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">${a.title}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">${a.organization}</p>
          </div>
        </div>
        <p class="text-gray-600 dark:text-gray-300">${a.description}</p>
      </div>
    `).join('');
  }

  renderSocialLinks() {
    const { social } = this.data;
    Object.keys(social).forEach(platform => {
      document.querySelectorAll(`[data-social="${platform}"]`).forEach(el => {
        el.href = social[platform];
      });
    });
    // Also update hardcoded social links by domain
    const map = {
      'github.com': social.github,
      'instagram.com': social.instagram,
      'linkedin.com': social.linkedin,
      'tiktok.com': social.tiktok,
      'wa.me': social.whatsapp,
    };
    document.querySelectorAll('a[href]').forEach(el => {
      const href = el.getAttribute('href');
      for (const [domain, url] of Object.entries(map)) {
        if (href && href.includes(domain)) {
          el.href = url;
          break;
        }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const tryRender = () => {
    if (window.portfolioData) {
      new PortfolioRenderer(window.portfolioData);
    } else {
      setTimeout(tryRender, 100);
    }
  };
  tryRender();
});
