class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          background-color: #fff;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.25rem;
          font-weight: 700;
          color: #000;
          text-decoration: none;
          display: flex;
          align-items: center;
          letter-spacing: -0.5px;
        }
        .logo i {
          margin-left: 0.5rem;
        }
        .container[dir="rtl"] .logo i {
          margin-left: 0;
          margin-right: 0.5rem;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .language-switcher {
          display: flex;
          gap: 0.5rem;
          margin-right: 1rem;
        }
        .container[dir="rtl"] .language-switcher {
          margin-right: 0;
          margin-left: 1rem;
        }
        .language-switcher button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          transition: all 0.2s ease;
        }
        .language-switcher button:hover {
          background: #f0f0f0;
        }
        .language-switcher button.active {
          background: #000;
          color: white;
          font-weight: 600;
        }
        .nav-links a {
          color: #000;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          padding: 0.5rem 0;
        }
        .nav-links a:hover {
          color: var(--accent);
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #000;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <div class="container">
        <a href="index.html" class="logo">
          NAVAR
          <i data-feather="cpu" class="ml-2 w-5 h-5"></i>
        </a>
        <div class="nav-links">
          <div class="language-switcher">
            <button class="lang-btn" data-lang="en">EN</button>
            <button class="lang-btn" data-lang="fa">FA</button>
          </div>
          <a href="index.html" data-i18n="nav.home">Home</a>
          <a href="#products" data-i18n="nav.products">Products</a>
          <a href="#features" data-i18n="nav.features">Features</a>
          <a href="#contact" data-i18n="nav.contact">Contact</a>
        </div>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
      </div>
    `;
    
    // Setup language switcher after shadow DOM is attached
    this.setupLanguageSwitcher();
  }

  setupLanguageSwitcher() {
    const langBtns = this.shadowRoot.querySelectorAll('.lang-btn');
    const navLinks = this.shadowRoot.querySelectorAll('[data-i18n]');
    const container = this.shadowRoot.querySelector('.container');
    
    // Get current language
    const currentLang = localStorage.getItem('lang') || 'en';
    
    // Set RTL direction for navbar
    this.setNavbarDirection(currentLang, container);
    
    // Update active button
    langBtns.forEach(btn => {
      if (btn.dataset.lang === currentLang) {
        btn.classList.add('active');
      }
    });
    
    // Translate navbar
    this.translateNavbar(currentLang, navLinks);
    
    // Add click handlers
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        localStorage.setItem('lang', lang);
        
        // Set RTL direction for navbar
        this.setNavbarDirection(lang, container);
        
        // Update active button
        langBtns.forEach(b => {
          b.classList.toggle('active', b.dataset.lang === lang);
        });
        
        // Translate navbar
        this.translateNavbar(lang, navLinks);
        
        // Dispatch custom event to update main page
        this.dispatchEvent(new CustomEvent('lang-changed', { detail: { lang } }));
      });
    });
  }

  setNavbarDirection(lang, container) {
    if (lang === 'fa') {
      container.setAttribute('dir', 'rtl');
      this.style.direction = 'rtl';
    } else {
      container.setAttribute('dir', 'ltr');
      this.style.direction = 'ltr';
    }
  }

  translateNavbar(lang, navLinks) {
    const translations = {
      en: {
        home: 'Home',
        products: 'Products',
        features: 'Features',
        contact: 'Contact'
      },
      fa: {
        home: 'صفحه اصلی',
        products: 'محصولات',
        features: 'ویژگی‌ها',
        contact: 'تماس با ما'
      }
    };
    
    navLinks.forEach(link => {
      const key = link.dataset.i18n.split('.')[1];
      link.textContent = translations[lang][key];
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);