// --- PORTFOLIO DATA ---
// To add an entry: copy an object, give it a unique `id`, then add
// `<id>_name` / `<id>_desc` / `<id>_meta` keys to BOTH `translations.en` and `translations.tr`.
// Categories are rendered in the order defined by RENDER_ORDER below.
// The first entry of each category renders as a wide "featured" card.

const projectsData = [
    // --- Professional Experience ---
    {
        id: "exp_gordian",
        category: "experience",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "LinkedIn", url: "https://www.linkedin.com/in/fikret-kutluay-/" }
        ]
    },
    {
        id: "exp_yuppy",
        category: "experience",
        image: "https://images.unsplash.com/photo-1601972602237-8c79241e468b?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "LinkedIn", url: "https://www.linkedin.com/in/fikret-kutluay-/" }
        ]
    },
    {
        id: "exp_genarion",
        category: "experience",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "LinkedIn", url: "https://www.linkedin.com/in/fikret-kutluay-/" }
        ]
    },
    {
        id: "exp_scasocial",
        category: "experience",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
        links: []
    },

    // --- Game Jams ---
    {
        id: "jam_ageofmasks",
        category: "gamejam",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
        links: []
    },
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

    // --- Games & Prototypes ---
    {
        id: "game_ringbreaker",
        category: "games",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "GitHub", url: "https://github.com/fikretkutluay/RingBreaker" }
        ]
    },
    {
        id: "game_vikingsurvivors",
        category: "games",
        image: "https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "GitHub", url: "https://github.com/fikretkutluay/VikingSurvivors" }
        ]
    },
    {
        id: "game_vampiresurvivors",
        category: "games",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "GitHub", url: "https://github.com/fikretkutluay/VampireSurvivorsClone" }
        ]
    },

    // --- Engineering Projects ---
    {
        id: "eng_dns",
        category: "engineering",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "GitHub", url: "https://github.com/fikretkutluay/DNS-Attacking-Recognition-System" }
        ]
    },
    {
        id: "eng_imageclassifier",
        category: "engineering",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
        links: []
    },
    {
        id: "eng_pointcafe",
        category: "engineering",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "GitHub", url: "https://github.com/fikretkutluay/POINTCAFE" }
        ]
    },
    {
        id: "eng_cell",
        category: "engineering",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
        links: [
            { text: "GitHub", url: "https://github.com/fikretkutluay/Cell" }
        ]
    }
];

const RENDER_ORDER = [
    { key: 'experience', i18n: 'cat_experience' },
    { key: 'gamejam', i18n: 'cat_gamejam' },
    { key: 'games', i18n: 'cat_games' },
    { key: 'engineering', i18n: 'cat_engineering' }
];

// --- SKILL GROUPS ---
// `title` is an i18n key; `tags` are rendered as-is (technology names stay untranslated).
const skillGroups = [
    {
        title: 'skill_game',
        tags: ['Unity 2D/3D', 'C#', 'Shader Graph', 'Particle Systems', 'UI Toolkit',
            'Physics Engine', 'Object Pooling', 'Mobile Optimization']
    },
    {
        title: 'skill_eng',
        tags: ['C++', 'Python', 'Java', 'JavaScript', 'MySQL', 'React.js', 'Node.js',
            'OOP', 'SOLID', 'Data Structures & Algorithms', 'Git / GitHub']
    },
    {
        title: 'skill_ai',
        tags: ['AI Agents', 'Marketing Automation', 'Data Science', 'Machine Learning',
            'OpenCV', 'NumPy']
    },
    {
        title: 'skill_tools',
        tags: ['Jira', 'Cursor AI', 'Visual Studio', 'Project Management', 'Agile / Scrum']
    }
];

// --- TRANSLATIONS ---
const translations = {
    en: {
        title: "Fikret Kutluay — Game Developer",
        nav_portfolio: "Portfolio",
        nav_about: "About",
        nav_skills: "Skills",
        nav_contact: "Contact",

        hero_title: "Fikret Kutluay",
        hero_subtitle: "Game Developer / Software Engineer",
        hero_desc: "Building structured architectures, immersive gameplay, and AI systems that do the tedious work.",
        btn_view_work: "View Portfolio",

        portfolio_title: "Portfolio",
        cat_experience: "Professional Experience",
        cat_gamejam: "Game Jams",
        cat_games: "Games & Prototypes",
        cat_engineering: "Engineering Projects",

        // Experience
        exp_gordian_meta: "Freelance · Present",
        exp_gordian_name: "Gordian Analytics — Growth Marketer",
        exp_gordian_desc: "Building a system of AI automation agents that runs marketing work end to end. I design the agent workflows and the tooling around them, so campaign research, content production, and outreach can operate without manual hand-offs.",
        exp_yuppy_meta: "Internship · Present",
        exp_yuppy_name: "Yuppy Games — Game Developer Intern",
        exp_yuppy_desc: "Developing mobile games with Unity and C# at a mobile game studio. Working inside a production pipeline on gameplay systems and performance on real devices.",
        exp_genarion_meta: "Remote Internship · Feb 2026 – Mar 2026",
        exp_genarion_name: "Genarion — VFX Artist Intern",
        exp_genarion_desc: "Designed and optimized visual effects in Unity, building real-time particle systems and custom shaders. Worked closely with the development team to integrate VFX and raise the game's visual fidelity, delivering fully remotely.",
        exp_scasocial_meta: "Internship · Mar 2026 – Apr 2026",
        exp_scasocial_name: "Sca Social — Project Management Intern",
        exp_scasocial_desc: "Completed intensive training in AI, data science, and SAP PS integration, alongside strategic project management and organizational leadership methodologies.",

        // Game Jams
        jam_ageofmasks_meta: "GGJ 2026 Dottopus",
        jam_ageofmasks_name: "Age of Masks",
        jam_ageofmasks_desc: "An Age of Empires-style RTS interpreting the GGJ 2026 'mask' theme through the logic of Photoshop masking. Built on a custom level design editor and Scriptable Objects for rapid level creation.",
        jam_powerandregret_meta: "StartGate Game Jam",
        jam_powerandregret_name: "Power and Regret",
        jam_powerandregret_desc: "A top-down action prototype with state-driven character management, tactical movement (dash / roll), and modular combat mechanics.",
        jam_bulletpunk_meta: "Sandwich Jam 2",
        jam_bulletpunk_name: "Bullet Punk",
        jam_bulletpunk_desc: "A fast-paced top-down shooter built around a 'Control Decay' mechanic: players progressively lose keyboard inputs as they take damage. Complex bullet physics and enemy AI in C#.",
        jam_parasite_meta: "Dottopus Halloween Jam · 2nd Place",
        jam_parasite_name: "Parasite",
        jam_parasite_desc: "A stealth-action game built around a possession mechanic — players control a parasite taking over human hosts to escape a lab. Took 2nd place at the jam.",
        jam_pigeon_meta: "Can't Game Jam",
        jam_pigeon_name: "Pigeon Royale",
        jam_pigeon_desc: "A tactical strategy game of iconic pigeon breeds with unique combat skills, focused on data-driven design and modular battle systems.",
        jam_anneniz_meta: "Ayaz Jam",
        jam_anneniz_name: "Anneniz ile Nasıl Tanıştım?",
        jam_anneniz_desc: "A narrative-driven platformer tracing memories. Windows compatible.",

        // Games & Prototypes
        game_ringbreaker_meta: "Mobile Game Prototype",
        game_ringbreaker_name: "Ring Breaker",
        game_ringbreaker_desc: "A scalable C# core framework built from scratch for mobile gameplay, with a custom Level Editor to accelerate the content pipeline. Object pooling and memory management keep it smooth on real devices.",
        game_vikingsurvivors_meta: "Unity · Roguelike",
        game_vikingsurvivors_name: "Viking Survivors",
        game_vikingsurvivors_desc: "A high-performance top-down survivor roguelike with scalable AI swarm logic and a modular skill system.",
        game_vampiresurvivors_meta: "Unity · Study Project",
        game_vampiresurvivors_name: "Vampire Survivors Clone",
        game_vampiresurvivors_desc: "A functional clone of Vampire Survivors, rebuilding its core mechanics and foundational logic in Unity.",

        // Engineering
        eng_dns_meta: "Network Security & AI",
        eng_dns_name: "DNS Attacking Recognition System",
        eng_dns_desc: "A security system that detects cyber attacks and data exfiltration over the DNS protocol using machine learning, with a GUI dashboard for real-time threat analysis. Tuned against a custom-built attack simulation tool.",
        eng_imageclassifier_meta: "Computer Vision",
        eng_imageclassifier_name: "Feature Detection Image Classifier",
        eng_imageclassifier_desc: "Real-time object recognition and feature matching with OpenCV and the ORB algorithm. Analyzes books shown via live camera feed and matches them against a dataset, using matrix-based image processing in Python and NumPy.",
        eng_pointcafe_meta: "Full-Stack Web",
        eng_pointcafe_name: "Point Cafe",
        eng_pointcafe_desc: "A web application with an admin panel for stock and order tracking plus a customer panel for ordering, rating, and feedback. Full architecture in React.js, Node.js, and MySQL.",
        eng_cell_meta: "Experimental",
        eng_cell_name: "Cell",
        eng_cell_desc: "An experimental project exploring simulation logic and system design.",

        about_title: "About",
        about_p1: "Hello there. I'm a Software Engineering student at Ankara University and a game developer working mainly in Unity and C#.",
        about_p2: "I approach software from a broad angle. Alongside gameplay programming, I've built projects across computer vision, network security, and full-stack web — and right now I'm building AI automation agents at Gordian Analytics while developing mobile games at Yuppy Games. Clean Code principles and OOP architecture hold all of it together.",
        about_p3: "What I enjoy most is the plumbing: core frameworks, custom level editors, and tools that let non-programmers drive content. I care about scalable architecture and performance that holds up on real devices.",

        skills_title: "Skills",
        skill_game: "Game Development",
        skill_eng: "Engineering",
        skill_ai: "AI & Data",
        skill_tools: "Tools & Process",

        contact_title: "Contact",
        contact_blurb: "Open to game development roles, freelance work, and jam teams. The fastest way to reach me is email — or send a message straight from here.",
        contact_name: "Your Name",
        contact_email: "Your Email",
        contact_message: "Your Message",
        btn_send: "Send Message",
        footer_text: "© {year} Fikret Kutluay"
    },

    tr: {
        title: "Fikret Kutluay — Oyun Geliştirici",
        nav_portfolio: "Portfolyo",
        nav_about: "Hakkımda",
        nav_skills: "Yetkinlikler",
        nav_contact: "İletişim",

        hero_title: "Fikret Kutluay",
        hero_subtitle: "Oyun Geliştirici / Yazılım Mühendisi",
        hero_desc: "Ölçeklenebilir mimariler, sürükleyici oyun deneyimleri ve zahmetli işi devralan yapay zeka sistemleri kuruyorum.",
        btn_view_work: "Projeleri İncele",

        portfolio_title: "Portfolyo",
        cat_experience: "İş Deneyimi",
        cat_gamejam: "Game Jam Projeleri",
        cat_games: "Oyunlar & Prototipler",
        cat_engineering: "Mühendislik Projeleri",

        // Deneyim
        exp_gordian_meta: "Freelance · Devam ediyor",
        exp_gordian_name: "Gordian Analytics — Growth Marketer",
        exp_gordian_desc: "Pazarlama işini uçtan uca yürüten bir yapay zeka otomasyon agent sistemi geliştiriyorum. Agent akışlarını ve çevresindeki araçları tasarlıyorum; böylece kampanya araştırması, içerik üretimi ve erişim çalışmaları manuel devir teslim olmadan işleyebiliyor.",
        exp_yuppy_meta: "Staj · Devam ediyor",
        exp_yuppy_name: "Yuppy Games — Game Developer Intern",
        exp_yuppy_desc: "Mobil oyun stüdyosunda Unity ve C# ile mobil oyunlar geliştiriyorum. Profesyonel bir üretim hattı içinde oynanış sistemleri ve gerçek cihaz performansı üzerine çalışıyorum.",
        exp_genarion_meta: "Uzaktan Staj · Şub 2026 – Mar 2026",
        exp_genarion_name: "Genarion — VFX Artist Intern",
        exp_genarion_desc: "Unity'de görsel efektler tasarlayıp optimize ettim; gerçek zamanlı partikül sistemleri ve özel shader'lar kurdum. Geliştirme ekibiyle yakın çalışarak VFX'i entegre ettim ve oyunun görsel kalitesini yükselttim; tamamı uzaktan çalışma modeliyle.",
        exp_scasocial_meta: "Staj · Mar 2026 – Nis 2026",
        exp_scasocial_name: "Sca Social — Proje Yönetimi Stajyeri",
        exp_scasocial_desc: "Yapay zeka, veri bilimi ve SAP PS entegrasyonu üzerine yoğun bir eğitim tamamladım; yanı sıra stratejik proje yönetimi ve organizasyonel liderlik metodolojileri üzerine uzmanlaştım.",

        // Game Jam
        jam_ageofmasks_meta: "GGJ 2026 Dottopus",
        jam_ageofmasks_name: "Age of Masks",
        jam_ageofmasks_desc: "GGJ 2026'nın 'maske' temasını Photoshop maskeleme mantığı üzerinden yorumlayan, Age of Empires tarzı bir RTS. Hızlı seviye üretimi için özel bir Level Design Editor ve Scriptable Objects üzerine kurulu.",
        jam_powerandregret_meta: "StartGate Game Jam",
        jam_powerandregret_name: "Power and Regret",
        jam_powerandregret_desc: "Durum odaklı karakter yönetimi, taktiksel hareket (atılma / yuvarlanma) ve modüler savaş mekanikleri içeren yukarıdan bakışlı bir aksiyon prototipi.",
        jam_bulletpunk_meta: "Sandwich Jam 2",
        jam_bulletpunk_name: "Bullet Punk",
        jam_bulletpunk_desc: "Bir 'kontrol kaybı' mekaniği üzerine kurulu hızlı tempolu top-down nişancı oyunu: oyuncu hasar aldıkça klavye girişlerini aşamalı olarak kaybediyor. C# ile karmaşık mermi fiziği ve düşman yapay zekası.",
        jam_parasite_meta: "Dottopus Halloween Jam · 2.'lik",
        jam_parasite_name: "Parasite",
        jam_parasite_desc: "Ele geçirme mekaniği üzerine kurulu bir gizlilik-aksiyon oyunu — oyuncu, laboratuvardan kaçmak için insan konakları ele geçiren bir paraziti kontrol ediyor. Jam'de 2.'lik kazandı.",
        jam_pigeon_meta: "Can't Game Jam",
        jam_pigeon_name: "Pigeon Royale",
        jam_pigeon_desc: "Veri odaklı tasarım ve modüler savaş sistemlerine odaklanan, benzersiz yeteneklere sahip ikonik güvercinlerin taktiksel strateji oyunu.",
        jam_anneniz_meta: "Ayaz Jam",
        jam_anneniz_name: "Anneniz ile Nasıl Tanıştım?",
        jam_anneniz_desc: "Anıların izini süren hikaye odaklı bir platform oyunu. Windows uyumlu.",

        // Oyunlar & Prototipler
        game_ringbreaker_meta: "Mobil Oyun Prototipi",
        game_ringbreaker_name: "Ring Breaker",
        game_ringbreaker_desc: "Mobil oynanış için sıfırdan kurulmuş ölçeklenebilir bir C# core framework ve içerik üretimini hızlandıran özel bir Level Editor. Object pooling ve bellek yönetimi ile gerçek cihazlarda akıcı çalışıyor.",
        game_vikingsurvivors_meta: "Unity · Roguelike",
        game_vikingsurvivors_name: "Viking Survivors",
        game_vikingsurvivors_desc: "Ölçeklenebilir yapay zeka sürüsü mantığı ve modüler yetenek sistemi içeren, yüksek performanslı yukarıdan bakışlı bir survivor roguelike.",
        game_vampiresurvivors_meta: "Unity · Çalışma Projesi",
        game_vampiresurvivors_name: "Vampire Survivors Clone",
        game_vampiresurvivors_desc: "Vampire Survivors'ın temel mekaniklerini ve kurgusunu Unity'de yeniden inşa eden işlevsel bir klon.",

        // Mühendislik
        eng_dns_meta: "Ağ Güvenliği & Yapay Zeka",
        eng_dns_name: "DNS Attacking Recognition System",
        eng_dns_desc: "Makine öğrenmesi kullanarak DNS protokolü üzerinden yapılan siber saldırıları ve veri sızdırmayı tespit eden bir güvenlik sistemi; gerçek zamanlı tehdit analizi için GUI panosu içeriyor. Özel geliştirilmiş bir saldırı simülasyon aracıyla test edilip optimize edildi.",
        eng_imageclassifier_meta: "Bilgisayarlı Görü",
        eng_imageclassifier_name: "Feature Detection Image Classifier",
        eng_imageclassifier_desc: "OpenCV ve ORB algoritması ile gerçek zamanlı nesne tanıma ve öznitelik eşleştirme. Canlı kamera görüntüsünde gösterilen kitapları analiz edip veri setiyle eşleştiriyor; Python ve NumPy ile matris tabanlı görüntü işleme kullanıyor.",
        eng_pointcafe_meta: "Full-Stack Web",
        eng_pointcafe_name: "Point Cafe",
        eng_pointcafe_desc: "Stok ve sipariş takibi için yönetici paneli, sipariş verme, puanlama ve geri bildirim için müşteri paneli içeren bir web uygulaması. Mimarinin tamamı React.js, Node.js ve MySQL ile kuruldu.",
        eng_cell_meta: "Deneysel",
        eng_cell_name: "Cell",
        eng_cell_desc: "Simülasyon mantığı ve sistem tasarımı üzerine deneysel bir proje.",

        about_title: "Hakkımda",
        about_p1: "Merhaba. Ankara Üniversitesi Yazılım Mühendisliği öğrencisiyim ve ağırlıklı olarak Unity ve C# ile çalışan bir oyun geliştiricisiyim.",
        about_p2: "Yazılıma geniş bir açıdan yaklaşıyorum. Oynanış programlamanın yanı sıra bilgisayarlı görü, ağ güvenliği ve full-stack web alanlarında projeler geliştirdim; şu anda Gordian Analytics'te yapay zeka otomasyon agent'ları kuruyor, Yuppy Games'te mobil oyunlar geliştiriyorum. Hepsini bir arada tutan şey Clean Code prensipleri ve OOP mimarisi.",
        about_p3: "En çok altyapı işinden keyif alıyorum: core framework'ler, özel seviye editörleri ve programcı olmayanların içerik üretmesini sağlayan araçlar. Ölçeklenebilir mimariyi ve gerçek cihazlarda ayakta kalan performansı önemsiyorum.",

        skills_title: "Yetkinlikler",
        skill_game: "Oyun Geliştirme",
        skill_eng: "Mühendislik",
        skill_ai: "Yapay Zeka & Veri",
        skill_tools: "Araçlar & Süreç",

        contact_title: "İletişim",
        contact_blurb: "Oyun geliştirme pozisyonlarına, freelance işlere ve jam ekiplerine açığım. Bana en hızlı e-posta ile ulaşabilirsiniz — ya da doğrudan buradan mesaj gönderin.",
        contact_name: "Adınız",
        contact_email: "E-postanız",
        contact_message: "Mesajınız",
        btn_send: "Mesajı Gönder",
        footer_text: "© {year} Fikret Kutluay"
    }
};

let currentLang = 'tr';

document.addEventListener('DOMContentLoaded', () => {

    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || '';

    // --- Render portfolio ---
    const portfolioContainer = document.getElementById('portfolio-container');
    if (portfolioContainer) {
        RENDER_ORDER.forEach(section => {
            const items = projectsData.filter(p => p.category === section.key);
            if (!items.length) return;

            const cards = items.map((proj, i) => {
                const links = proj.links
                    .map(l => `<a href="${l.url}" class="btn btn-sm" target="_blank" rel="noopener">${l.text}</a>`)
                    .join('');

                return `
                    <article class="card reveal${i === 0 ? ' featured' : ''}">
                        <div class="card-img" style="background-image: url('${proj.image}');"></div>
                        <div class="card-body">
                            <span class="card-meta" data-i18n="${proj.id}_meta"></span>
                            <h3 class="card-title" data-i18n="${proj.id}_name"></h3>
                            <p class="card-desc" data-i18n="${proj.id}_desc"></p>
                            ${links ? `<div class="card-links">${links}</div>` : ''}
                        </div>
                    </article>`;
            }).join('');

            const block = document.createElement('div');
            block.className = 'cat';
            block.innerHTML = `
                <div class="cat-head">
                    <h3 class="cat-title" data-i18n="${section.i18n}"></h3>
                </div>
                <div class="card-grid">${cards}</div>`;
            portfolioContainer.appendChild(block);
        });
    }

    // --- Render skills ---
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = skillGroups.map(group => `
            <div class="skill-group reveal">
                <h3 class="skill-title" data-i18n="${group.title}"></h3>
                <ul class="tags">${group.tags.map(tag => `<li>${tag}</li>`).join('')}</ul>
            </div>`).join('');
    }

    // --- Language ---
    function applyTranslations() {
        document.documentElement.lang = currentLang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const value = t(el.getAttribute('data-i18n'));
            if (!value) return;

            if (el.getAttribute('data-i18n') === 'footer_text') {
                el.textContent = value.replace('{year}', new Date().getFullYear());
            } else {
                el.textContent = value;
            }
        });
        document.title = t('title');
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolio_lang', lang);
        document.querySelectorAll('.lang-tr-btn').forEach(b => b.classList.toggle('active', lang === 'tr'));
        document.querySelectorAll('.lang-en-btn').forEach(b => b.classList.toggle('active', lang === 'en'));
        applyTranslations();
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.lang-tr-btn')) setLanguage('tr');
        else if (e.target.closest('.lang-en-btn')) setLanguage('en');
    });

    setLanguage(localStorage.getItem('portfolio_lang') || 'tr');

    // --- Mobile menu ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    function closeMenu() {
        menuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            const open = mobileNav.classList.toggle('active');
            menuBtn.classList.toggle('active', open);
            menuBtn.setAttribute('aria-expanded', String(open));
            document.body.style.overflow = open ? 'hidden' : '';
        });

        mobileNav.addEventListener('click', (e) => {
            if (e.target.closest('.mobile-link')) closeMenu();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNav.classList.contains('active')) closeMenu();
        });
    }

    // --- Active nav link on scroll ---
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = [...navLinks]
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if (sections.length) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });

        sections.forEach(s => spy.observe(s));
    }

    // --- Reveal on scroll ---
    const revealer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealer.observe(el));

    // --- Embers ---
    const embersContainer = document.getElementById('embers');
    if (embersContainer && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setInterval(() => {
            const ember = document.createElement('div');
            ember.className = 'ember';

            const size = Math.random() * 3 + 1.5;
            const duration = Math.random() * 5 + 6;

            ember.style.left = Math.random() * 100 + '%';
            ember.style.width = size + 'px';
            ember.style.height = size + 'px';
            ember.style.animationDuration = duration + 's';

            embersContainer.appendChild(ember);
            setTimeout(() => ember.remove(), duration * 1000);
        }, 420);
    }
});
