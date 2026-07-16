// --- PORTFOLIO DATA ---
// Each entry needs these i18n keys in BOTH `translations.en` and `translations.tr`:
//   <id>_name   title
//   <id>_desc   what it is (2-3 sentences)
//   <id>_roles  comma-separated roles
//   <id>_notes  technical / development notes
// `image` is optional — entries without a real screenshot render text-only rather
// than falling back to stock photography.

const CATEGORIES = [
    { key: 'experience', page: 'work.html', i18n: 'cat_experience', blurb: 'cat_experience_blurb' },
    { key: 'gamejam', page: 'jams.html', i18n: 'cat_gamejam', blurb: 'cat_gamejam_blurb' },
    { key: 'games', page: 'games.html', i18n: 'cat_games', blurb: 'cat_games_blurb' },
    { key: 'engineering', page: 'software.html', i18n: 'cat_engineering', blurb: 'cat_engineering_blurb' }
];

const projectsData = [
    // --- Professional Experience ---
    {
        id: "exp_gordian",
        category: "experience",
        links: [{ text: "LinkedIn", url: "https://www.linkedin.com/in/fikret-kutluay-/" }]
    },
    {
        id: "exp_yuppy",
        category: "experience",
        links: [{ text: "LinkedIn", url: "https://www.linkedin.com/in/fikret-kutluay-/" }]
    },
    {
        id: "exp_genarion",
        category: "experience",
        links: []
    },
    {
        id: "exp_scasocial",
        category: "experience",
        links: []
    },

    // --- Game Jams ---
    {
        id: "jam_ageofmasks",
        category: "gamejam",
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

    // --- Games & Prototypes ---
    {
        id: "game_mobilecore",
        category: "games",
        links: [{ text: "GitHub", url: "https://github.com/fikretkutluay/Mobile_Core" }]
    },
    {
        id: "game_ringbreaker",
        category: "games",
        links: [{ text: "GitHub", url: "https://github.com/fikretkutluay/RingBreaker" }]
    },
    {
        id: "game_vikingsurvivors",
        category: "games",
        links: [
            { text: "GitHub", url: "https://github.com/fikretkutluay/VikingSurvivors" },
            { text: "Build (Drive)", url: "https://drive.google.com/drive/folders/1YkVzVhvLo_vjawtuEA0cZ30M1YbZ6BZz?usp=sharing" }
        ]
    },

    // --- Engineering / Software ---
    {
        id: "eng_limiteddrop",
        category: "engineering",
        links: [
            { text: "GitHub", url: "https://github.com/fikretkutluay/limited-drop-system" },
            { text: "Live demo", url: "https://limited-drop-frontend.pxxl.click" }
        ]
    },
    {
        id: "eng_dns",
        category: "engineering",
        links: [{ text: "GitHub", url: "https://github.com/fikretkutluay/DNS-Attacking-Recognition-System" }]
    },
    {
        id: "eng_bookclassifier",
        category: "engineering",
        links: [{ text: "GitHub", url: "https://github.com/fikretkutluay/Book-Classifier-ORB" }]
    },
    {
        id: "eng_pointcafe",
        category: "engineering",
        links: [{ text: "GitHub", url: "https://github.com/fikretkutluay/POINTCAFE" }]
    }
];

// --- TRANSLATIONS ---
const translations = {
    en: {
        title: "Fikret Kutluay — Game Developer",
        nav_portfolio: "Portfolio",
        nav_about: "About",
        back_home: "← Portfolio",

        hero_title: "Fikret Kutluay",
        hero_subtitle: "Game Developer",

        portfolio_title: "Portfolio",
        portfolio_sub: "Professional work, game jams, and everything I've built on my own time.",
        label_roles: "Roles",
        count_one: "1 project",
        count_many: "{n} projects",

        cat_experience: "Professional Work",
        cat_experience_blurb: "Where I've worked, and what I actually did there.",
        cat_gamejam: "Game Jams",
        cat_gamejam_blurb: "Games built under a weekend deadline, with the constraints that come with it.",
        cat_games: "Games & Prototypes",
        cat_games_blurb: "Longer-running Unity work — arcade games, roguelikes, and the framework underneath them.",
        cat_engineering: "Software Projects",
        cat_engineering_blurb: "Backends, computer vision, and network security — the work away from the game engine.",

        // --- Experience ---
        exp_gordian_name: "Gordian Analytics — Growth Marketer",
        exp_gordian_desc: "Freelance work building a system of AI automation agents that runs marketing end to end. The goal is for campaign research, content production, and outreach to operate without manual hand-offs between steps.",
        exp_gordian_roles: "Growth Marketer, AI Automation",
        exp_gordian_notes: "Designing the agent workflows and the tooling around them — how tasks get routed between agents, where a human stays in the loop, and how output quality gets checked before anything ships.",

        exp_yuppy_name: "Yuppy Games — Game Developer Intern",
        exp_yuppy_desc: "Developing mobile games with Unity and C# at a mobile game studio, working inside a real production pipeline rather than on solo prototypes.",
        exp_yuppy_roles: "Game Developer",
        exp_yuppy_notes: "Gameplay systems and performance work on real devices, where the frame budget and memory limits are set by the low end of the install base rather than by my own machine.",

        exp_genarion_name: "Genarion — VFX Artist Intern",
        exp_genarion_desc: "Designed and optimized visual effects for a Unity game, working fully remotely from February to March 2026.",
        exp_genarion_roles: "VFX Artist",
        exp_genarion_notes: "Built real-time particle systems and customized shaders, then worked with the development team to integrate the effects into the game. The constraint was raising visual fidelity without spending frame budget the game didn't have.",

        exp_scasocial_name: "Sca Social — Project Management Intern",
        exp_scasocial_desc: "An intensive program in AI, data science, and SAP PS integration, alongside strategic project management and organizational leadership methodologies. March to April 2026.",
        exp_scasocial_roles: "Project Management",
        exp_scasocial_notes: "Combined theoretical and hands-on training. The project management side is what I've carried back into how I scope and sequence my own work.",

        // --- Game Jams ---
        jam_ageofmasks_name: "Age of Masks",
        jam_ageofmasks_desc: "An Age of Empires-style real-time strategy game built for GGJ 2026 Dottopus. It reads the jam's 'mask' theme through the logic of Photoshop masking rather than the literal object.",
        jam_ageofmasks_roles: "Programmer, Tools",
        jam_ageofmasks_notes: "Used a custom level design editor and Scriptable Objects so levels could be assembled and changed quickly — which matters when an RTS has to ship inside a jam weekend.",

        jam_powerandregret_name: "Power and Regret",
        jam_powerandregret_desc: "A top-down action prototype built for StartGate Game Jam, centered on tactical movement and readable combat.",
        jam_powerandregret_roles: "Programmer",
        jam_powerandregret_notes: "State-driven character management underneath, with dash and roll as the tactical movement layer, and modular combat mechanics so abilities could be swapped without rewriting the character controller.",

        jam_bulletpunk_name: "Bullet Punk",
        jam_bulletpunk_desc: "A top-down action shooter for Sandwich Jam 2, built around a 'Control Decay' mechanic: as you take damage you progressively lose keyboard inputs. Losing health means losing options, not just numbers. Unity and URP.",
        jam_bulletpunk_roles: "Programmer, Gameplay",
        jam_bulletpunk_notes: "Programmed the bullet physics and enemy AI behaviours in C#. Also ran the team's Git branching and merging workflow, which is its own jam problem once more than one person is committing.",

        jam_parasite_name: "Parasite",
        jam_parasite_desc: "A stealth-action game for the Dottopus Halloween Jam, built around a possession mechanic — you play a parasite taking over human hosts to escape a lab. Took 2nd place. Unity and URP.",
        jam_parasite_roles: "Programmer",
        jam_parasite_notes: "The possession mechanic drove the architecture: control had to transfer cleanly between bodies while each host kept its own abilities and constraints.",

        jam_pigeon_name: "Pigeon Royale",
        jam_pigeon_desc: "A turn-based tactical strategy game for Can't Game Jam, where iconic pigeon breeds each bring their own combat skills. Pixel art done in Aseprite.",
        jam_pigeon_roles: "Programmer",
        jam_pigeon_notes: "Data-driven design and modular battle systems, so adding a new breed meant adding data rather than writing new special-case code.",

        // --- Games & Prototypes ---
        game_mobilecore_name: "Mobile Core Framework",
        game_mobilecore_desc: "A modular core architecture library for Unity mobile games — hybrid-casual, puzzle, merge, and similar. It provides the systems a project needs before anyone touches gameplay: messaging, UI, performance, save, and spatial matrix.",
        game_mobilecore_roles: "Programmer, Architecture",
        game_mobilecore_notes: "Built on SOLID throughout. An Action-based central event manager (Observer pattern) keeps classes from referencing each other, so UI, economy, and the game manager communicate through GameEvents without knowing one another. A generic GridManager<T> handles cellular structures and world-position math for puzzle and board games. The object pooler auto-expands when the pool drains — checking activeSelf on queued objects rather than throwing — which is what keeps the mobile garbage collector out of the frame budget. Game data lives in ScriptableObjects rather than in code.",

        game_ringbreaker_name: "Ring Breaker",
        game_ringbreaker_desc: "A fast-paced arcade-style mobile game built with Unity, with precision timing mechanics and progressive difficulty.",
        game_ringbreaker_roles: "Programmer",
        game_ringbreaker_notes: "Built on a scalable C# core framework with a custom Level Editor to speed up the content pipeline. Object pooling keeps it optimized, since a hyper-casual mobile game lives or dies on frame consistency rather than on peak performance.",

        game_vikingsurvivors_name: "Viking Survivors",
        game_vikingsurvivors_desc: "A high-performance top-down survivor roguelike in a Norse-inspired setting, built for the case where the screen fills with enemies and the frame rate still has to hold.",
        game_vikingsurvivors_roles: "Programmer",
        game_vikingsurvivors_notes: "Scalable AI swarm logic, a modular skill upgrade system, and optimized combat mechanics. The interesting constraint is that per-enemy cost has to stay near zero once the count climbs.",

        // --- Software ---
        eng_limiteddrop_name: "Limited Drop System",
        eng_limiteddrop_desc: "A limited-stock product drop system built to survive high concurrency without overselling, taking users from reservation through to checkout. Built as a full-stack technical assessment.",
        eng_limiteddrop_roles: "Full-Stack Developer",
        eng_limiteddrop_notes: "Node.js, Express, TypeScript, and Prisma on the back end; React, Vite, and Tailwind on the front. Race conditions are handled with optimistic concurrency control: every product row carries a version, and an update filters on both id and the version it read, so a competing write makes the update affect zero rows and the transaction aborts safely — no pessimistic locking, no overselling. Reservations hold stock for five minutes, and background cron jobs expire stale ones and release the stock. Zod validation, centralized error handling, request logging, and health and metrics endpoints.",

        eng_dns_name: "DNS Attacking Recognition System",
        eng_dns_desc: "A security system that detects two classes of DNS attack — phishing and tunneling — using machine learning, with a GUI dashboard for real-time threat analysis.",
        eng_dns_roles: "Programmer, Machine Learning",
        eng_dns_notes: "I built an attack simulation tool to run penetration tests against it, then used those results to tune detection accuracy. Building the attacker turned out to be the fastest way to improve the defender.",

        eng_bookclassifier_name: "Book Classifier (ORB)",
        eng_bookclassifier_desc: "A real-time book identification system using OpenCV and the ORB algorithm. It detects and classifies books held up to a live camera feed by matching visual features against a pre-defined image database.",
        eng_bookclassifier_roles: "Programmer, Computer Vision",
        eng_bookclassifier_notes: "Matrix-based image processing in Python and NumPy. The real work is doing feature detection and matching fast enough to feel instant on a live feed rather than on a still frame.",

        eng_pointcafe_name: "Point Cafe",
        eng_pointcafe_desc: "A full-stack web application built as an Ankara University course project: an admin panel for stock and order tracking, plus a customer panel for ordering, rating, and feedback.",
        eng_pointcafe_roles: "Full-Stack Developer",
        eng_pointcafe_notes: "Designed the whole architecture in React.js, Node.js, and MySQL — my first project where the database schema, not the UI, decided whether a feature was easy or painful.",

        about_title: "About",
        about_p1: "Hello there. I'm a Software Engineering student at Ankara University and a game developer working mainly in Unity and C#.",
        about_p2: "I approach software from a broad angle. Alongside gameplay programming I've built projects across computer vision, network security, and full-stack web — and right now I'm building AI automation agents at Gordian Analytics while developing mobile games at Yuppy Games. Clean Code principles and OOP architecture are what hold all of it together.",
        about_p3: "What I enjoy most is the plumbing: core frameworks, custom level editors, and tools that let non-programmers drive content. I care about scalable architecture and performance that holds up on real devices, not just in the editor.",

        btn_copy: "Copy",
        btn_copied: "Copied",
        btn_copy_failed: "Select & copy",
        footer_text: "© {year} Fikret Kutluay"
    },

    tr: {
        title: "Fikret Kutluay — Oyun Geliştirici",
        nav_portfolio: "Portfolyo",
        nav_about: "Hakkımda",
        back_home: "← Portfolyo",

        hero_title: "Fikret Kutluay",
        hero_subtitle: "Oyun Geliştirici",

        portfolio_title: "Portfolyo",
        portfolio_sub: "Profesyonel işler, game jam'ler ve kendi zamanımda inşa ettiğim her şey.",
        label_roles: "Rol",
        count_one: "1 proje",
        count_many: "{n} proje",

        cat_experience: "Profesyonel İşler",
        cat_experience_blurb: "Nerede çalıştım ve orada gerçekten ne yaptım.",
        cat_gamejam: "Game Jam Projeleri",
        cat_gamejam_blurb: "Bir hafta sonu deadline'ı altında ve onun getirdiği kısıtlarla yapılmış oyunlar.",
        cat_games: "Oyunlar & Prototipler",
        cat_games_blurb: "Uzun soluklu Unity işleri — arcade oyunlar, roguelike'lar ve altlarındaki framework.",
        cat_engineering: "Yazılım Projeleri",
        cat_engineering_blurb: "Backend, bilgisayarlı görü ve ağ güvenliği — oyun motorundan uzaktaki işler.",

        // --- Deneyim ---
        exp_gordian_name: "Gordian Analytics — Growth Marketer",
        exp_gordian_desc: "Pazarlamayı uçtan uca yürüten bir yapay zeka otomasyon agent sistemi geliştirdiğim freelance iş. Amaç; kampanya araştırması, içerik üretimi ve erişim çalışmalarının adımlar arasında manuel devir teslim olmadan işlemesi.",
        exp_gordian_roles: "Growth Marketer, Yapay Zeka Otomasyonu",
        exp_gordian_notes: "Agent akışlarını ve çevresindeki araçları tasarlıyorum — görevlerin agent'lar arasında nasıl yönlendirileceğini, insanın döngüde nerede kalacağını ve çıktının yayına gitmeden önce kalite açısından nasıl denetleneceğini.",

        exp_yuppy_name: "Yuppy Games — Game Developer Intern",
        exp_yuppy_desc: "Bir mobil oyun stüdyosunda Unity ve C# ile mobil oyunlar geliştiriyorum; tek başına prototip değil, gerçek bir üretim hattının içinde.",
        exp_yuppy_roles: "Oyun Geliştirici",
        exp_yuppy_notes: "Oynanış sistemleri ve gerçek cihaz performansı üzerine çalışıyorum; burada frame bütçesini ve bellek sınırını benim makinem değil, oyuncu kitlesinin en düşük donanımı belirliyor.",

        exp_genarion_name: "Genarion — VFX Artist Intern",
        exp_genarion_desc: "Bir Unity oyunu için görsel efektler tasarlayıp optimize ettim; Şubat–Mart 2026 arası tamamen uzaktan çalışma modeliyle.",
        exp_genarion_roles: "VFX Artist",
        exp_genarion_notes: "Gerçek zamanlı partikül sistemleri kurdum, shader'ları özelleştirdim ve efektleri oyuna entegre etmek için geliştirme ekibiyle çalıştım. Kısıt şuydu: görsel kaliteyi, oyunun sahip olmadığı frame bütçesini harcamadan yükseltmek.",

        exp_scasocial_name: "Sca Social — Proje Yönetimi Stajyeri",
        exp_scasocial_desc: "Yapay zeka, veri bilimi ve SAP PS entegrasyonunun yanı sıra stratejik proje yönetimi ve organizasyonel liderlik metodolojileri üzerine yoğun bir program. Mart–Nisan 2026.",
        exp_scasocial_roles: "Proje Yönetimi",
        exp_scasocial_notes: "Teorik ve uygulamalı eğitimin birleşimiydi. Proje yönetimi tarafını kendi işimi kapsamlandırma ve sıralama biçimime taşıdım.",

        // --- Game Jam ---
        jam_ageofmasks_name: "Age of Masks",
        jam_ageofmasks_desc: "GGJ 2026 Dottopus için geliştirilmiş, Age of Empires tarzı gerçek zamanlı strateji oyunu. Jam'in 'maske' temasını nesnenin kendisi üzerinden değil, Photoshop maskeleme mantığı üzerinden okuyor.",
        jam_ageofmasks_roles: "Programcı, Araçlar",
        jam_ageofmasks_notes: "Seviyelerin hızlıca kurulup değiştirilebilmesi için özel bir level design editor ve Scriptable Objects kullandım — bir RTS'in jam hafta sonuna sığması gerektiğinde bu fark yaratıyor.",

        jam_powerandregret_name: "Power and Regret",
        jam_powerandregret_desc: "StartGate Game Jam için geliştirilmiş, taktiksel hareket ve okunabilir savaş üzerine kurulu yukarıdan bakışlı bir aksiyon prototipi.",
        jam_powerandregret_roles: "Programcı",
        jam_powerandregret_notes: "Altında durum odaklı karakter yönetimi var; atılma ve yuvarlanma taktiksel hareket katmanını oluşturuyor, modüler savaş mekanikleri sayesinde yetenekler karakter kontrolcüsü yeniden yazılmadan değiştirilebiliyor.",

        jam_bulletpunk_name: "Bullet Punk",
        jam_bulletpunk_desc: "Sandwich Jam 2 için geliştirilmiş yukarıdan bakışlı aksiyon nişancı oyunu. Merkezinde bir 'kontrol kaybı' mekaniği var: hasar aldıkça klavye girişlerini aşamalı olarak kaybediyorsun. Can kaybetmek sadece sayı değil, seçenek kaybetmek demek. Unity ve URP.",
        jam_bulletpunk_roles: "Programcı, Oynanış",
        jam_bulletpunk_notes: "Mermi fiziğini ve düşman yapay zekası davranışlarını C# ile programladım. Ayrıca ekibin Git branch ve merge akışını yürüttüm — birden fazla kişi commit atmaya başladığında bu da kendi başına bir jam problemi.",

        jam_parasite_name: "Parasite",
        jam_parasite_desc: "Dottopus Halloween Jam için geliştirilmiş, ele geçirme mekaniği üzerine kurulu bir gizlilik-aksiyon oyunu — laboratuvardan kaçmak için insan konakları ele geçiren bir paraziti oynuyorsun. Jam'de 2.'lik kazandı. Unity ve URP.",
        jam_parasite_roles: "Programcı",
        jam_parasite_notes: "Ele geçirme mekaniği mimariyi belirledi: kontrolün bedenler arasında temiz biçimde aktarılması, her konağın kendi yetenek ve kısıtlarını koruyarak gerekiyordu.",

        jam_pigeon_name: "Pigeon Royale",
        jam_pigeon_desc: "Can't Game Jam için geliştirilmiş sıra tabanlı taktiksel strateji oyunu; ikonik güvercin ırklarının her biri kendi savaş yeteneğiyle geliyor. Pixel art Aseprite ile yapıldı.",
        jam_pigeon_roles: "Programcı",
        jam_pigeon_notes: "Veri odaklı tasarım ve modüler savaş sistemleri; böylece yeni bir ırk eklemek, özel durum kodu yazmak yerine veri eklemek anlamına geliyor.",

        // --- Oyunlar & Prototipler ---
        game_mobilecore_name: "Mobile Core Framework",
        game_mobilecore_desc: "Unity ile geliştirilen mobil oyunlar (hybrid-casual, puzzle, merge vb.) için modüler bir çekirdek mimari kütüphanesi. Oyun mekaniklerine dokunulmadan önce projenin ihtiyaç duyacağı tüm temel sistemleri sunuyor: haberleşme, UI, performans, kayıt ve uzamsal matris.",
        game_mobilecore_roles: "Programcı, Mimari",
        game_mobilecore_notes: "Baştan sona SOLID prensipleri üzerine kurulu. Action tabanlı merkezi bir olay yöneticisi (Observer pattern) sınıfların birbirine referans vermesini engelliyor; UI, ekonomi ve oyun yöneticisi birbirini bilmeden GameEvents üzerinden haberleşiyor. Generic bir GridManager<T>, puzzle ve board oyunları için hücresel yapıları ve dünya pozisyonu matematiğini yönetiyor. Object pooler havuz boşaldığında hata vermek yerine kuyruktaki objelerin activeSelf durumunu kontrol edip kendini otomatik genişletiyor — mobilde garbage collector'ı frame bütçesinin dışında tutan şey bu. Oyun verileri koda gömülmek yerine ScriptableObject olarak tutuluyor.",

        game_ringbreaker_name: "Ring Breaker",
        game_ringbreaker_desc: "Unity ile geliştirilmiş, hassas zamanlama mekaniklerine ve kademeli zorluk artışına sahip hızlı tempolu arcade tarzı bir mobil oyun.",
        game_ringbreaker_roles: "Programcı",
        game_ringbreaker_notes: "İçerik üretimini hızlandırmak için özel bir Level Editor barındıran, ölçeklenebilir bir C# core framework üzerine kuruldu. Object pooling ile optimize; çünkü hyper-casual bir mobil oyun zirve performansla değil, frame tutarlılığıyla ayakta kalır.",

        game_vikingsurvivors_name: "Viking Survivors",
        game_vikingsurvivors_desc: "İskandinav esintili bir dünyada geçen, yüksek performanslı yukarıdan bakışlı survivor roguelike; ekran düşmanla dolduğunda bile frame rate'in ayakta kalması gereken senaryo için kuruldu.",
        game_vikingsurvivors_roles: "Programcı",
        game_vikingsurvivors_notes: "Ölçeklenebilir yapay zeka sürüsü mantığı, modüler yetenek yükseltme sistemi ve optimize edilmiş savaş mekanikleri. İşin ilginç kısıtı, sayı arttıkça düşman başına maliyetin sıfıra yakın kalması gerekmesi.",

        // --- Yazılım ---
        eng_limiteddrop_name: "Limited Drop System",
        eng_limiteddrop_desc: "Yüksek eşzamanlılık altında overselling'e düşmeden ayakta kalacak şekilde tasarlanmış, kullanıcıyı rezervasyondan ödemeye taşıyan sınırlı stoklu ürün drop sistemi. Full-stack teknik değerlendirme projesi olarak geliştirildi.",
        eng_limiteddrop_roles: "Full-Stack Geliştirici",
        eng_limiteddrop_notes: "Backend'de Node.js, Express, TypeScript ve Prisma; frontend'de React, Vite ve Tailwind. Race condition'lar optimistic concurrency control ile çözülüyor: her ürün satırı bir version taşıyor ve güncelleme hem id hem de okuduğu version üzerinden filtreleniyor; araya başka bir yazma girerse güncelleme sıfır satırı etkiliyor ve işlem güvenle iptal oluyor — pessimistic locking yok, overselling yok. Rezervasyonlar stoğu beş dakika kilitliyor, arka plandaki cron job'ları süresi geçenleri iptal edip stoğu serbest bırakıyor. Zod ile doğrulama, merkezi hata yönetimi, request logging, health ve metrics endpoint'leri.",

        eng_dns_name: "DNS Attacking Recognition System",
        eng_dns_desc: "Makine öğrenmesi kullanarak iki tür DNS saldırısını — phishing ve tunneling — tespit eden bir güvenlik sistemi; gerçek zamanlı tehdit analizi için bir GUI panosu içeriyor.",
        eng_dns_roles: "Programcı, Makine Öğrenmesi",
        eng_dns_notes: "Sisteme karşı sızma testi yapmak için bir saldırı simülasyon aracı geliştirdim ve sonuçlarıyla tespit doğruluğunu iyileştirdim. Saldıranı inşa etmek, savunanı geliştirmenin en hızlı yolu çıktı.",

        eng_bookclassifier_name: "Book Classifier (ORB)",
        eng_bookclassifier_desc: "OpenCV ve ORB algoritması kullanan gerçek zamanlı kitap tanıma sistemi. Canlı kamera görüntüsüne tutulan kitapları, görsel öznitelikleri önceden tanımlı bir görüntü veritabanıyla eşleştirerek tespit edip sınıflandırıyor.",
        eng_bookclassifier_roles: "Programcı, Bilgisayarlı Görü",
        eng_bookclassifier_notes: "Python ve NumPy ile matris tabanlı görüntü işleme. Asıl iş, öznitelik tespitini ve eşleştirmeyi sabit bir karede değil canlı akışta anlık hissettirecek kadar hızlı yapabilmek.",

        eng_pointcafe_name: "Point Cafe",
        eng_pointcafe_desc: "Ankara Üniversitesi ders projesi olarak geliştirilmiş full-stack web uygulaması: stok ve sipariş takibi için yönetici paneli, sipariş verme, puanlama ve geri bildirim için müşteri paneli.",
        eng_pointcafe_roles: "Full-Stack Geliştirici",
        eng_pointcafe_notes: "Mimarinin tamamını React.js, Node.js ve MySQL ile tasarladım — bir özelliğin kolay mı yoksa acı verici mi olacağına arayüzün değil veritabanı şemasının karar verdiği ilk projemdi.",

        about_title: "Hakkımda",
        about_p1: "Merhaba. Ankara Üniversitesi Yazılım Mühendisliği öğrencisiyim ve ağırlıklı olarak Unity ve C# ile çalışan bir oyun geliştiricisiyim.",
        about_p2: "Yazılıma geniş bir açıdan yaklaşıyorum. Oynanış programlamanın yanı sıra bilgisayarlı görü, ağ güvenliği ve full-stack web alanlarında projeler geliştirdim; şu anda Gordian Analytics'te yapay zeka otomasyon agent'ları kuruyor, Yuppy Games'te mobil oyunlar geliştiriyorum. Hepsini bir arada tutan şey Clean Code prensipleri ve OOP mimarisi.",
        about_p3: "En çok altyapı işinden keyif alıyorum: core framework'ler, özel seviye editörleri ve programcı olmayanların içerik üretmesini sağlayan araçlar. Ölçeklenebilir mimariyi ve sadece editörde değil gerçek cihazlarda da ayakta kalan performansı önemsiyorum.",

        btn_copy: "Kopyala",
        btn_copied: "Kopyalandı",
        btn_copy_failed: "Seç & kopyala",
        footer_text: "© {year} Fikret Kutluay"
    }
};

let currentLang = 'tr';

document.addEventListener('DOMContentLoaded', () => {

    const t = (key) => (translations[currentLang] && translations[currentLang][key]) || '';

    // --- Home: clickable category cards ---
    const cardsContainer = document.getElementById('category-cards');
    if (cardsContainer) {
        cardsContainer.innerHTML = CATEGORIES.map(cat => {
            const n = projectsData.filter(p => p.category === cat.key).length;
            return `
                <a class="cat-card" href="${cat.page}">
                    <h3 class="cat-card-title" data-i18n="${cat.i18n}"></h3>
                    <p class="cat-card-blurb" data-i18n="${cat.blurb}"></p>
                    <span class="cat-card-count" data-count="${n}"></span>
                </a>`;
        }).join('');
    }

    // --- Category page: one entry per project ---
    const listContainer = document.getElementById('portfolio-container');
    if (listContainer) {
        const key = listContainer.dataset.category;
        const items = projectsData.filter(p => p.category === key);

        listContainer.innerHTML = items.map(proj => {
            const links = proj.links
                .map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.text}</a>`)
                .join('');

            const media = proj.image
                ? `<div class="entry-media" style="background-image: url('${proj.image}');"></div>`
                : '';

            // Two columns on desktop: prose on the left, media/links/roles on the right.
            return `
                <article class="entry">
                    <h3 class="entry-title" data-i18n="${proj.id}_name"></h3>
                    <div class="entry-body">
                        <div class="entry-main">
                            <p class="entry-desc" data-i18n="${proj.id}_desc"></p>
                            <p class="entry-notes" data-i18n="${proj.id}_notes"></p>
                        </div>
                        <aside class="entry-side">
                            ${media}
                            ${links ? `<div class="entry-links">${links}</div>` : ''}
                            <p class="entry-roles">
                                <b data-i18n="label_roles"></b>: <span data-i18n="${proj.id}_roles"></span>
                            </p>
                        </aside>
                    </div>
                </article>`;
        }).join('');
    }

    // --- Language ---
    function applyTranslations() {
        document.documentElement.lang = currentLang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = t(key);
            if (!value) return;

            el.textContent = key === 'footer_text'
                ? value.replace('{year}', new Date().getFullYear())
                : value;
        });

        // Project counts pluralise separately from the plain i18n keys
        document.querySelectorAll('[data-count]').forEach(el => {
            const n = Number(el.dataset.count);
            el.textContent = n === 1 ? t('count_one') : t('count_many').replace('{n}', n);
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

    // --- Copy email (mailto: silently does nothing without a registered mail client) ---
    const copyBtn = document.getElementById('copy-mail');
    const mailLink = document.getElementById('mail-link');

    async function copyText(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            // Clipboard API can be blocked (no user activation, insecure context).
            // Fall back to a temporary selection; execCommand reports its own success.
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.top = '-1000px';
            document.body.appendChild(ta);
            ta.select();
            let ok = false;
            try {
                ok = document.execCommand('copy');
            } catch {
                ok = false;
            }
            ta.remove();
            return ok;
        }
    }

    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            const ok = await copyText(copyBtn.dataset.mail);

            // Never claim success we didn't get — if both paths failed, select the
            // address so it can still be copied by hand.
            copyBtn.textContent = ok ? t('btn_copied') : t('btn_copy_failed');
            copyBtn.classList.toggle('copied', ok);
            copyBtn.classList.toggle('failed', !ok);

            if (!ok && mailLink) {
                const range = document.createRange();
                range.selectNodeContents(mailLink);
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }

            setTimeout(() => {
                copyBtn.textContent = t('btn_copy');
                copyBtn.classList.remove('copied', 'failed');
            }, 2000);
        });
    }

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
});
