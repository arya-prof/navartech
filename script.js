
// Translation dictionary
const translations = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      features: "Features",
      contact: "Contact"
    },
    hero: {
      title: "Smart Living with Navar Technology",
      subtitle: "Advanced IoT solutions for buildings, homes and green spaces"
    },
    sections: {
      why: "Why Navar?",
      products: "Our Products",
      contact: "Ready to Go Smart?"
    },
    features: {
      home: {
        title: "Smart Home",
        desc: "Control all home devices via mobile with high security"
      },
      building: {
        title: "Smart Building",
        desc: "Intelligent energy and security management for commercial buildings"
      },
      irrigation: {
        title: "Smart Irrigation",
        desc: "Optimal water management for green spaces with modern technology"
      }
    },
    buttons: {
      ourProducts: "Our Products",
      contactUs: "Contact Us",
      learnMore: "Learn More",
      submitRequest: "Submit Request"
    },
    products: {
      home: {
        title: "Smart Home System",
        desc: "Control lighting, curtains, HVAC and home security via mobile app"
      },
      building: {
        title: "Smart Building System",
        desc: "Intelligent management of energy, elevators, parking and security"
      },
      irrigation: {
        title: "Smart Irrigation System",
        desc: "Optimal irrigation management based on weather conditions"
      }
    },
    form: {
      title: "Ready to Go Smart?",
      subtitle: "Our expert team is ready to provide customized solutions for your needs.",
      fullName: "Full Name",
      email: "Email",
      phone: "Phone Number",
      serviceType: "Service Type",
      selectService: "Select Service",
      smartHome: "Smart Home",
      smartBuilding: "Smart Building",
      smartIrrigation: "Smart Irrigation",
      other: "Other",
      message: "Message"
    }
  },
  fa: {
    nav: {
      home: "صفحه اصلی",
      products: "محصولات",
      features: "ویژگی‌ها",
      contact: "تماس با ما"
    },
    hero: {
      title: "هوشمند سازی زندگی با ناوار تکنولوژی",
      subtitle: "راهکارهای آی‌او‌تی پیشرفته برای ساختمان‌ها، خانه‌ها و فضای سبز"
    },
    sections: {
      why: "چرا تکنولوژی؟",
      products: "محصولات ما",
      contact: "آماده هوشمند سازی هستید؟"
    },
    features: {
      home: {
        title: "خانه هوشمند",
        desc: "کنترل تمام تجهیزات خانه از طریق تلفن همراه با امنیت بالا"
      },
      building: {
        title: "ساختمان هوشمند",
        desc: "مدیریت هوشمند انرژی و امنیت برای ساختمان‌های اداری و تجاری"
      },
      irrigation: {
        title: "آبیاری هوشمند",
        desc: "مدیریت بهینه مصرف آب در فضای سبز با فناوری‌های روز"
      }
    },
    buttons: {
      ourProducts: "محصولات ما",
      contactUs: "تماس با ما",
      learnMore: "اطلاعات بیشتر",
      submitRequest: "ارسال درخواست"
    },
    products: {
      home: {
        title: "سیستم خانه هوشمند",
        desc: "کنترل روشنایی، پرده‌ها، سرمایش و گرمایش و امنیت خانه از طریق اپلیکیشن موبایل"
      },
      building: {
        title: "سیستم ساختمان هوشمند",
        desc: "مدیریت هوشمند انرژی، آسانسور، پارکینگ و امنیت"
      },
      irrigation: {
        title: "سیستم آبیاری هوشمند",
        desc: "مدیریت بهینه آبیاری بر اساس شرایط آب و هوایی"
      }
    },
    form: {
      title: "آماده هوشمند سازی هستید؟",
      subtitle: "تیم متخصص ما آماده ارائه راهکارهای سفارشی برای نیازهای شماست.",
      fullName: "نام و نام خانوادگی",
      email: "ایمیل",
      phone: "شماره تماس",
      serviceType: "نوع خدمات",
      selectService: "انتخاب خدمات",
      smartHome: "خانه هوشمند",
      smartBuilding: "ساختمان هوشمند",
      smartIrrigation: "آبیاری هوشمند",
      other: "سایر",
      message: "پیام"
    }
  }
};

// Language switching functionality
function setupLanguageSwitcher() {
  const html = document.documentElement;
  
  // Set initial language from localStorage or default to English
  const currentLang = localStorage.getItem('lang') || 'en';
  html.lang = currentLang;
  html.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('data-lang', currentLang);

  // Translate page content
  translatePage(currentLang);

  // Listen for language change events from navbar
  const navbar = document.querySelector('custom-navbar');
  if (navbar) {
    navbar.addEventListener('lang-changed', (e) => {
      const lang = e.detail.lang;
      html.lang = lang;
      html.dir = lang === 'fa' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('data-lang', lang);
      translatePage(lang);
    });
  }
}

// Translate page content
function translatePage(lang) {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('data-lang', lang);

  // Translate hero section
  const heroTitle = document.querySelector('section.relative h1');
  const heroSubtitle = document.querySelector('section.relative p');
  if (heroTitle) heroTitle.textContent = translations[lang].hero.title;
  if (heroSubtitle) heroSubtitle.textContent = translations[lang].hero.subtitle;

  // Translate hero buttons
  const heroButtons = document.querySelectorAll('section.relative .btn');
  if (heroButtons.length >= 2) {
    heroButtons[0].textContent = translations[lang].buttons.ourProducts;
    heroButtons[1].textContent = translations[lang].buttons.contactUs;
  }

  // Translate section titles
  const sectionTitles = document.querySelectorAll('section h2');
  sectionTitles.forEach((title, index) => {
    if (index === 0) title.textContent = translations[lang].sections.why;
    if (index === 1) title.textContent = translations[lang].sections.products;
    if (index === 2) title.textContent = translations[lang].form.title;
  });

  // Translate feature cards (in #features section)
  const featureTitles = document.querySelectorAll('#features .card h3');
  const featureCards = document.querySelectorAll('#features .card');
  
  if (featureTitles.length >= 3) {
    featureTitles[0].textContent = translations[lang].features.home.title;
    featureTitles[1].textContent = translations[lang].features.building.title;
    featureTitles[2].textContent = translations[lang].features.irrigation.title;
    
    featureCards.forEach((card, index) => {
      const desc = card.querySelector('p');
      if (desc) {
        if (index === 0) desc.textContent = translations[lang].features.home.desc;
        if (index === 1) desc.textContent = translations[lang].features.building.desc;
        if (index === 2) desc.textContent = translations[lang].features.irrigation.desc;
      }
    });
  }

  // Translate products section
  const productCards = document.querySelectorAll('#products .card');
  const productTitles = document.querySelectorAll('#products .card h3');
  const productDescs = document.querySelectorAll('#products .card-body p');
  const productLinks = document.querySelectorAll('#products .card-body a');
  
  if (productTitles.length >= 3) {
    productTitles[0].textContent = translations[lang].products.home.title;
    productTitles[1].textContent = translations[lang].products.building.title;
    productTitles[2].textContent = translations[lang].products.irrigation.title;
  }
  
  if (productDescs.length >= 3) {
    productDescs[0].textContent = translations[lang].products.home.desc;
    productDescs[1].textContent = translations[lang].products.building.desc;
    productDescs[2].textContent = translations[lang].products.irrigation.desc;
  }

  // Translate "Learn More" links
  productLinks.forEach((link, index) => {
    const text = translations[lang].buttons.learnMore;
    const icon = link.querySelector('i');
    if (icon) {
      link.innerHTML = text + ' ' + icon.outerHTML;
    } else {
      link.textContent = text;
    }
  });

  // Translate contact form
  const contactTitle = document.querySelector('#contact h2');
  const contactSubtitle = document.querySelector('#contact p');
  const formLabels = document.querySelectorAll('#contact form label');
  const formSelect = document.querySelector('#contact select');
  const formOptions = document.querySelectorAll('#contact select option');
  const submitBtn = document.querySelector('#contact button[type="submit"]');
  
  if (contactTitle) contactTitle.textContent = translations[lang].form.title;
  if (contactSubtitle) contactSubtitle.textContent = translations[lang].form.subtitle;
  
  if (formLabels.length >= 5) {
    formLabels[0].textContent = translations[lang].form.fullName;
    formLabels[1].textContent = translations[lang].form.email;
    formLabels[2].textContent = translations[lang].form.phone;
    formLabels[3].textContent = translations[lang].form.serviceType;
    formLabels[4].textContent = translations[lang].form.message;
  }
  
  if (formOptions.length >= 5) {
    formOptions[0].textContent = translations[lang].form.selectService;
    formOptions[1].textContent = translations[lang].form.smartHome;
    formOptions[2].textContent = translations[lang].form.smartBuilding;
    formOptions[3].textContent = translations[lang].form.smartIrrigation;
    formOptions[4].textContent = translations[lang].form.other;
  }
  
  if (submitBtn) submitBtn.textContent = translations[lang].buttons.submitRequest;
}
// Enhanced smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
// Form submission with better UX
document.addEventListener('DOMContentLoaded', function() {
    setupLanguageSwitcher();
const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i data-feather="loader" class="animate-spin mr-2 w-4 h-4"></i> Processing...';
            submitBtn.disabled = true;
            feather.replace();
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            submitBtn.innerHTML = '<i data-feather="check" class="mr-2 w-4 h-4"></i> Success!';
            feather.replace();
            
            // Reset form after delay
            setTimeout(() => {
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    // Initialize feather icons with animation
    if (typeof feather !== 'undefined') {
        feather.replace();
        setInterval(() => feather.replace(), 1000);
    }

    // Add scroll reveal animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.card, section');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('animate-fadeIn');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});
