// --- DYNAMIC PROJECTS LIST ---
// You can easily add new projects here. Just copy an existing object and modify it.
// Categories: "core", "gamejam", "experience"
const projectsData = [
    // --- Experience ---
    {
        id: "exp_genarion",
        category: "experience",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "LinkedIn", url: "https://www.linkedin.com/in/fikret-kutluay-/" }
        ]
    },

    // --- Game Jams ---
    {
        id: "jam_powerandregret",
        category: "gamejam",
        image: "https://img.itch.zone/aW1nLzI0NzAzNjU3LnBuZw==/315x250%23c/w%2BKztZ.png",
        links: [
            { text: "itch.io", url: "https://fikretkutluay.itch.io/power-and-regret" },
            { text: "GitHub", url: "https://github.com/fikretkutluay/Power-and-Regret" }
        ]
    },
    {
        id: "jam_bulletpunk",
        category: "gamejam",
        image: "https://img.itch.zone/aW1nLzI0NjU3OTUxLnBuZw==/315x250%23c/ksIT52.png",
        links: [
            { text: "itch.io", url: "https://fikretkutluay.itch.io/bullet-punk" },
            { text: "GitHub", url: "https://github.com/fikretkutluay/BulletPunk" }
        ]
    },
    {
        id: "jam_parasite",
        category: "gamejam",
        image: "https://img.itch.zone/aW1nLzIzOTYzMTUwLmpwZw==/315x250%23c/otOCtA.jpg",
        links: [
            { text: "itch.io", url: "https://nolofinwe35.itch.io/parasite" },
            { text: "GitHub", url: "https://github.com/fikretkutluay/Parasite-Dottopus-Halloween-Game-Jam" }
        ]
    },
    {
        id: "jam_pigeon",
        category: "gamejam",
        image: "https://img.itch.zone/aW1nLzIxMzU0NTk5LnBuZw==/315x250%23c/vuU56k.png",
        links: [
            { text: "itch.io", url: "https://fikretkutluay.itch.io/pigeonroyale" },
            { text: "GitHub", url: "https://github.com/fikretkutluay/project_guvercin" }
        ]
    },
    {
        id: "jam_anneniz",
        category: "gamejam",
        image: "https://img.itch.zone/aW1nLzI0NDM1NDQ0LnBuZw==/315x250%23c/WVgZ9G.png",
        links: [
            { text: "itch.io", url: "https://fikretkutluay.itch.io/anneniz-ile-nasl-tantm" },
            { text: "GitHub", url: "https://github.com/fikretkutluay/Project_Butterfly" }
        ]
    },

    // --- Other Projects ---
    {
        id: "other_ringbreaker",
        category: "other",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "GitHub", url: "https://github.com/fikretkutluay/RingBreaker" }
        ]
    },
    {
        id: "other_cell",
        category: "other",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "GitHub", url: "https://github.com/fikretkutluay/Cell" }
        ]
    },
    {
        id: "other_dns",
        category: "other",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "GitHub", url: "https://github.com/fikretkutluay/DNS-Attacking-Recognition-System" }
        ]
    },
    {
        id: "other_pointcafe",
        category: "other",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "GitHub", url: "https://github.com/fikretkutluay/POINTCAFE" }
        ]
    },
    {
        id: "other_vampiresurvivors",
        category: "other",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "GitHub", url: "https://github.com/fikretkutluay/VampireSurvivorsClone" }
        ]
    },
    {
        id: "other_vikingsurvivors",
        category: "other",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "GitHub", url: "https://github.com/fikretkutluay/VikingSurvivors" }
        ]
    }
];

// --- TRANSLATIONS DICTIONARY ---
const translations = {
    en: {
        title: "Fikret Kutluay - Portfolio",
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",
        hero_title: "Fikret Kutluay",
        hero_subtitle: "Software Engineering Student & Game Developer",
        hero_desc: "Developing structured architectures and immersive gameplay experiences.",
        btn_view_work: "View Work",
        about_title: "About Me",
        about_p1: "Welcome. I am a 3rd-year Software Engineering student at Ankara University, specializing in game development with Unity and C#.",
        about_p2: "I utilize object-oriented principles and clean code methodologies to build robust core game frameworks, custom level editors, and rapid prototypes. My focus lies in constructing scalable architectures and optimizing performance for mobile and PC platforms.",
        projects_title: "Portfolio Projects",
        // Categories
        category_exp: "Professional Experience",
        category_jam: "Game Jams",
        category_core: "Core Projects",
        category_other: "Other Projects",
        // Projects
        exp_genarion_name: "Genarion - Volunteer VFX Artist",
        exp_genarion_desc: "Creating visual effects using Unity and C#. Collaborating remotely to enhance visual fidelity and game feel within professional production pipelines.",
        jam_pigeon_name: "Pigeon Royale (Can't Game Jam)",
        jam_pigeon_desc: "A tactical strategy game featuring iconic pigeon breeds with unique combat skills. Built with Unity, focusing on data-driven design and modular battle systems.",
        jam_parasite_name: "Parasite (Dottopus Halloween Jam)",
        jam_parasite_desc: "A stealth-action game developed for Halloween Game Jam. Features a unique possession mechanic where players control a parasite taking over human hosts to escape a lab.",
        jam_anneniz_name: "Anneniz ile Nasıl Tanıştım? (Ayaz Jam)",
        jam_anneniz_desc: "A narrative-driven platformer tracing memories. Windows compatible.",
        jam_powerandregret_name: "Power and Regret (Startgate Game Jam)",
        jam_powerandregret_desc: "A dynamic top-down action prototype built with Unity, featuring advanced state-driven character management, tactical movement systems (dash/roll), and modular combat mechanics.",
        jam_bulletpunk_name: "Bullet Punk (Sandwich Jam 2)",
        jam_bulletpunk_desc: "A top-down action shooter built for Sandwich Jam 2. Features a unique 'Control Decay' mechanic where players progressively lose keyboard inputs as they take damage.",
        other_ringbreaker_name: "Ring Breaker",
        other_ringbreaker_desc: "Engineered a scalable C# Core Framework for mobile gameplay from scratch. Wields a custom Level Editor and masterfully utilizes Object Pooling for robust performance.",
        other_cell_name: "Cell",
        other_cell_desc: "A unique project showcasing advanced programming skills.",
        other_dns_name: "DNS Attacking Recognition System",
        other_dns_desc: "It is a system based on recognition of two types of DNS attacks: Phishing and tunneling.",
        other_pointcafe_name: "POINTCAFE",
        other_pointcafe_desc: "A JavaScript-based application repository.",
        other_vampiresurvivors_name: "Vampire Survivors Clone",
        other_vampiresurvivors_desc: "A functional clone of Vampire Survivors with basic mechanics and solid foundational logic in Unity.",
        other_vikingsurvivors_name: "Viking Survivors",
        other_vikingsurvivors_desc: "A high-performance top-down 'Survivor' roguelike built with Unity. Features scalable AI swarm logic and modular skills.",
        // Other sections
        skills_title: "Skills & Tools",
        skill_engine: "Game Engines & Tools: Unity (2D/3D), Physics Engine, UI Toolkit, Cursor AI, VS, Jira",
        skill_lang: "Programming & Concepts: C#, SQL, Java. Core Gameplay Systems, SOLID, OOP, Data Structures.",
        contact_title: "Get In Touch",
        contact_name: "Your Name",
        contact_email: "Your Email",
        contact_message: "Your Message",
        btn_send: "Send Message",
        footer_text: "© {year} Fikret Kutluay. All rights reserved."
    },
    tr: {
        title: "Fikret Kutluay - Portfolyo",
        nav_about: "Hakkımda",
        nav_projects: "Projeler",
        nav_skills: "Beceriler",
        nav_contact: "İletişim",
        hero_title: "Fikret Kutluay",
        hero_subtitle: "Yazılım Mühendisliği Öğrencisi & Oyun Geliştirici",
        hero_desc: "Ölçeklenebilir mimariler ve sürükleyici oyun deneyimleri tasarlıyorum.",
        btn_view_work: "Projeleri İncele",
        about_title: "Hakkımda",
        about_p1: "Merhaba. Ankara Üniversitesi 3. sınıf Yazılım Mühendisliği öğrencisiyim ve Unity ile C# kullanarak oyun geliştirme alanında uzmanlaşıyorum.",
        about_p2: "Nesne yönelimli programlama (OOP) ve temiz kod (clean code) prensiplerini uygulayarak; temel oyun iskeletleri (core framework), özel seviye editörleri ve hızlı prototipler inşa ediyorum. Amacım mobil ve PC platformları için ölçeklenebilir mimariler kurmak ve performansı optimize etmektir.",
        projects_title: "Portfolyo Projeleri",
        // Categories
        category_exp: "İş Deneyimi",
        category_jam: "Game Jam Projeleri",
        category_core: "Ana Projeler",
        category_other: "Diğer Projeler",
        // Projects
        exp_genarion_name: "Genarion - Gönüllü VFX Artist",
        exp_genarion_desc: "Unity ve C# kullanarak görsel efektler (VFX) üretiyorum. Profesyonel üretim hattında, görsel kaliteyi ve oyun hissini artırmak için uzaktan ekip çalışması yürütüyorum.",
        jam_pigeon_name: "Pigeon Royale (Can't Game Jam)",
        jam_pigeon_desc: "Veri odaklı tasarım ve modüler savaş sistemlerine odaklanan, benzersiz yeteneklere sahip ikonik güvercinlerin taktiksel strateji oyunu. Unity ile geliştirildi.",
        jam_parasite_name: "Parasite (Dottopus Halloween Jam)",
        jam_parasite_desc: "Halloween Game Jam için geliştirilen gizlilik-aksiyon oyunu. Oyuncuların laboratuvardan kaçmak için insan konakları ele geçirdiği parazit kontrol mekaniğine sahiptir.",
        jam_anneniz_name: "Anneniz ile Nasıl Tanıştım? (Ayaz Jam)",
        jam_anneniz_desc: "Anıların izini süren hikaye odaklı platform oyunu. Windows uyumlu.",
        jam_powerandregret_name: "Power and Regret (Startgate Game Jam)",
        jam_powerandregret_desc: "Gelişmiş durum odaklı karakter yönetimi, taktiksel hareket sistemleri (atılma/yuvarlanma) ve modüler savaş mekanikleri içeren dinamik, yukarıdan aşağıya aksiyon prototipi.",
        jam_bulletpunk_name: "Bullet Punk (Sandwich Jam 2)",
        jam_bulletpunk_desc: "Sandwich Jam 2 için üretilmiş hızlı tempolu yukarıdan aşağıya (top-down) bir aksiyon nişancı türü oyunu. Oyuncuların hasar aldıkça klavye girişlerini aşamalı olarak kaybettikleri benzersiz bir kontrol kaybetme mekaniğine sahiptir.",
        other_ringbreaker_name: "Ring Breaker",
        other_ringbreaker_desc: "Mobil oyun mekanikleri için sıfırdan ölçeklenebilir bir C# Core Framework inşa ettim. İçerik üretimini hızlandıran özel bir Level Editor barındırır ve Object Pooling ile optimize edilmiştir.",
        other_cell_name: "Cell",
        other_cell_desc: "Gelişmiş programlama becerilerimi sergilediğim eşsiz bir proje.",
        other_dns_name: "DNS Attacking Recognition System",
        other_dns_desc: "İki tür DNS saldırısının (Phishing ve Tunneling) tanınmasına dayalı bir güvenlik sistemi.",
        other_pointcafe_name: "POINTCAFE",
        other_pointcafe_desc: "JavaScript tabanlı bir uygulama reposu.",
        other_vampiresurvivors_name: "Vampire Survivors Clone",
        other_vampiresurvivors_desc: "Vampire Survivors'ın temel mekaniklerini ve sağlam kurgusunu Unity üzerinden klonlayan işlevsel bir proje.",
        other_vikingsurvivors_name: "Viking Survivors",
        other_vikingsurvivors_desc: "Unity ile geliştirilmiş, yüksek performanslı yukarıdan aşağıya roguelike bir 'Survivor' oyunu. Ölçeklenebilir yapay zeka sürüsü mantığı ve modüler yetenek sistemi içerir.",
        // Other sections
        skills_title: "Yetkinlikler & Araçlar",
        skill_engine: "Oyun Motorları & Araçlar: Unity (2D/3D), Fizik Motoru, UI Toolkit, Cursor AI, VS, Jira",
        skill_lang: "Programlama & Konseptler: C#, SQL, Java. Core Gameplay Sistemleri, SOLID, OOP, Veri Yapıları.",
        contact_title: "İletişime Geçin",
        contact_name: "Adınız",
        contact_email: "E-postanız",
        contact_message: "Mesajınız",
        btn_send: "Mesajı Gönder",
        footer_text: "© {year} Fikret Kutluay. Tüm hakları saklıdır."
    }
};

let currentLang = 'tr'; // Global reference for rendering

document.addEventListener('DOMContentLoaded', () => {
    // Current Year for Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Initialize Projects Array
    renderProjects();

    // Language Initialization
    currentLang = localStorage.getItem('portfolio_lang') || 'tr';

    // Language Switch Buttons via Event Delegation (fixes mobile & layout z-index issues)
    document.addEventListener('click', (e) => {
        if (e.target.closest('.lang-tr-btn')) {
            setLanguage('tr');
        } else if (e.target.closest('.lang-en-btn')) {
            setLanguage('en');
        }
    });

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio_lang', lang);

        // Update active class on all buttons
        document.querySelectorAll('.lang-tr-btn').forEach(btn => btn.classList.toggle('active', lang === 'tr'));
        document.querySelectorAll('.lang-en-btn').forEach(btn => btn.classList.toggle('active', lang === 'en'));

        // Translate all elements with data-i18n attribute
        updateTranslations(lang);
    }

    // Call it initially after setup
    setLanguage(currentLang);

    // Split translation logic so we can call it when filtering projects too
    function updateTranslations(lang) {
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

    // --- DYNAMIC SEQUENTIAL PROJECTS RENDERING ---
    function renderProjects() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        container.innerHTML = ''; // Clear current

        // Render order: Experience, Gamezam, Core, Other
        const renderOrder = [
            { key: 'experience', i18n: 'category_exp' },
            { key: 'gamejam', i18n: 'category_jam' },
            { key: 'core', i18n: 'category_core' },
            { key: 'other', i18n: 'category_other' }
        ];

        renderOrder.forEach(section => {
            const secProjects = projectsData.filter(p => p.category === section.key);

            if (secProjects.length > 0) {
                // Outer Category Div
                const sectionDiv = document.createElement('div');
                sectionDiv.classList.add('project-category-section');

                // Category Title
                const titleHtml = `<h3 class="category-header" data-i18n="${section.i18n}">...</h3>`;

                // Grid Container -> Carousel Container
                let cardsHtml = '';

                secProjects.forEach(proj => {
                    let linksHTML = '';
                    proj.links.forEach(link => {
                        linksHTML += `<a href="${link.url}" class="btn btn-sm" target="_blank">${link.text}</a>\n`;
                    });

                    cardsHtml += `
                        <div class="project-card show" data-category="${proj.category}">
                            <div class="project-image" style="background-image: url('${proj.image}');"></div>
                            <div class="project-info">
                                <h3 class="project-name" data-i18n="${proj.id}_name">...</h3>
                                <p class="project-desc" data-i18n="${proj.id}_desc">...</p>
                                <div class="project-links">
                                    ${linksHTML}
                                </div>
                            </div>
                        </div>
                    `;
                });

                const carouselHtml = `
                    <div class="carousel-container">
                        <button class="carousel-btn prev" aria-label="Previous">❮</button>
                        <div class="projects-slider">
                            ${cardsHtml}
                        </div>
                        <button class="carousel-btn next" aria-label="Next">❯</button>
                    </div>
                `;

                sectionDiv.innerHTML = titleHtml + carouselHtml;
                container.appendChild(sectionDiv);
            }
        });

        setupCarousels();

        // Retranslate newly injected data-i18n elements
        if (currentLang) {
            updateTranslations(currentLang);
        }
    }

    // --- CAROUSEL NAVIGATION LOGIC ---
    function setupCarousels() {
        const carouselContainers = document.querySelectorAll('.carousel-container');

        carouselContainers.forEach(container => {
            const slider = container.querySelector('.projects-slider');
            const prevBtn = container.querySelector('.prev');
            const nextBtn = container.querySelector('.next');

            if (!slider || !prevBtn || !nextBtn) return;

            // Amount to scroll (approx width of one card + gap)
            const scrollAmount = 330;

            prevBtn.addEventListener('click', () => {
                slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', () => {
                slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        });
    }

    // Mobile Menu Toggle via Event Delegation
    document.addEventListener('click', (e) => {
        const menuBtn = e.target.closest('#mobile-menu-btn');
        const navLink = e.target.closest('.mobile-nav-link');
        const mobileNav = document.getElementById('mobile-nav');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');

        if (menuBtn && mobileNav && mobileMenuBtn) {
            mobileMenuBtn.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        } else if (navLink && mobileNav && mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Since we no longer use a top navbar, we can remove the old scroll effect
    // Or attach it to something else if needed. For now, it's removed.

    // Embers Particle Effect
    const embersContainer = document.getElementById('embers');
    if (embersContainer) {
        setInterval(createEmber, 300);
    }

    function createEmber() {
        const ember = document.createElement('div');
        ember.classList.add('ember');

        ember.style.left = Math.random() * 100 + '%';
        ember.style.bottom = Math.random() * 20 + '%'; // Start slightly varied

        const size = Math.random() * 4 + 1; // Slightly smaller dots
        ember.style.width = size + 'px';
        ember.style.height = size + 'px';

        const duration = Math.random() * 4 + 4; // Slower, lingering effect
        ember.style.animationDuration = duration + 's';

        ember.style.opacity = Math.random() * 0.6 + 0.2;

        embersContainer.appendChild(ember);

        setTimeout(() => {
            ember.remove();
        }, duration * 1000);
    }
});
