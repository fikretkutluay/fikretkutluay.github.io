// Translations Dictionary
const translations = {
    en: {
        title: "Game Developer Portfolio",
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",
        hero_title: "Fikret Kutluay",
        hero_subtitle: "Game Developer",
        hero_desc: "Forging worlds from darkness and code.",
        btn_view_work: "View My Work",
        about_title: "About Me",
        about_p1: "Welcome, traveler. I am a game developer passionate about creating immersive, atmospheric experiences.",
        about_p2: "With a strong background in game engines and programming, I specialize in crafting mechanics that challenge the player and worlds that tell a story without words.",
        projects_title: "Grimoire of Works",
        proj1_name: "Abyssal Descent",
        proj1_desc: "A dark fantasy metroidvania where you explore the ruins of a fallen kingdom.",
        proj2_name: "Ember's Fade",
        proj2_desc: "A challenging soulslike action RPG with precise combat mechanics.",
        proj3_name: "Hollow Knight Clone",
        proj3_desc: "A technical showcase of 2D platforming mechanics and boss AI.",
        skills_title: "Arsenal",
        skill_engine: "Engines & Tools",
        skill_lang: "Languages",
        contact_title: "Send a Messenger",
        contact_name: "Your Name",
        contact_email: "Your Email",
        contact_message: "Your Message",
        btn_send: "Send Message",
        footer_text: "© {year} Fikret Kutluay. All rights reserved in the Abyss."
    },
    tr: {
        title: "Oyun Geliştirici Portfolyosu",
        nav_about: "Hakkımda",
        nav_projects: "Projeler",
        nav_skills: "Beceriler",
        nav_contact: "İletişim",
        hero_title: "Fikret Kutluay",
        hero_subtitle: "Oyun Geliştiricisi",
        hero_desc: "Karanlıktan ve kodlardan dünyalar dövüyorum.",
        btn_view_work: "Çalışmalarımı Gör",
        about_title: "Hakkımda",
        about_p1: "Hoş geldin gezgin. Ben, sürükleyici ve atmosferik deneyimler yaratma tutkusu olan bir oyun geliştiricisiyim.",
        about_p2: "Oyun motorları ve programlama konusundaki güçlü geçmişimle, oyuncuyu zorlayan mekanikler ve kelimelere ihtiyaç duymadan hikayesini anlatan dünyalar inşa etmede uzmanlaşıyorum.",
        projects_title: "Eserler Kitabı",
        proj1_name: "Abyssal Descent (Gidilmiş Uçurum)",
        proj1_desc: "Düşmüş bir krallığın kalıntılarını keşfettiğiniz, karanlık fantastik bir metroidvania.",
        proj2_name: "Ember's Fade (Közün Soluşu)",
        proj2_desc: "Hassas dövüş mekaniklerine sahip zorlu bir soulslike aksiyon RYO.",
        proj3_name: "Hollow Knight Klonu",
        proj3_desc: "2D platform mekanikleri ve boss yapay zekasının teknik bir gösterimi.",
        skills_title: "Cephanelik",
        skill_engine: "Motorlar ve Araçlar",
        skill_lang: "Diller",
        contact_title: "Bir Haberci Gönder",
        contact_name: "Adınız",
        contact_email: "E-postanız",
        contact_message: "Mesajınız",
        btn_send: "Mesajı Gönder",
        footer_text: "© {year} Fikret Kutluay. Hiçlikte tüm hakları saklıdır."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Current Year for Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Language Initialization
    let currentLang = localStorage.getItem('portfolio_lang') || 'tr';
    setLanguage(currentLang);

    // Language Switch Buttons
    const btnTr = document.getElementById('lang-tr');
    const btnEn = document.getElementById('lang-en');

    if (btnTr && btnEn) {
        btnTr.addEventListener('click', () => setLanguage('tr'));
        btnEn.addEventListener('click', () => setLanguage('en'));
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio_lang', lang);
        
        // Update active class on buttons
        if(btnTr && btnEn) {
            btnTr.classList.toggle('active', lang === 'tr');
            btnEn.classList.toggle('active', lang === 'en');
        }

        // Translate all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (key === 'footer_text') {
                    const currentYear = new Date().getFullYear();
                    el.innerHTML = translations[lang][key].replace('{year}', `<span id="year">${currentYear}</span>`);
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Embers Particle Effect
    const embersContainer = document.getElementById('embers');
    if (embersContainer) {
        setInterval(createEmber, 300);
    }

    function createEmber() {
        const ember = document.createElement('div');
        ember.classList.add('ember');
        
        // Random horizontal position
        ember.style.left = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 5 + 2; // 2px to 7px
        ember.style.width = size + 'px';
        ember.style.height = size + 'px';
        
        // Random animation duration
        const duration = Math.random() * 3 + 3; // 3s to 6s
        ember.style.animationDuration = duration + 's';
        
        // Random opacity
        ember.style.opacity = Math.random() * 0.5 + 0.3;

        embersContainer.appendChild(ember);

        // Remove ember after animation
        setTimeout(() => {
            ember.remove();
        }, duration * 1000);
    }
});
