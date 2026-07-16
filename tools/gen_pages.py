# Generates the four category subpages. They differ only by filename, the
# data-category the list renders from, and which i18n keys title the page.

import os

PAGES = [
    ("work.html", "experience", "cat_experience", "cat_experience_blurb"),
    ("jams.html", "gamejam", "cat_gamejam", "cat_gamejam_blurb"),
    ("games.html", "games", "cat_games", "cat_games_blurb"),
    ("software.html", "engineering", "cat_engineering", "cat_engineering_blurb"),
]

TEMPLATE = '''<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-i18n="title">Fikret Kutluay — Game Developer</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header class="topbar">
        <a href="index.html" class="brand">Fikret Kutluay</a>

        <nav class="nav-desktop">
            <ul class="nav-links">
                <li><a href="index.html#portfolio" data-i18n="nav_portfolio">Portfolio</a></li>
                <li><a href="index.html#about" data-i18n="nav_about">About</a></li>
            </ul>
            <div class="lang-switch">
                <button class="lang-btn lang-tr-btn">TR</button>
                <span class="lang-divider">/</span>
                <button class="lang-btn lang-en-btn">EN</button>
            </div>
        </nav>

        <button class="menu-btn" id="menu-btn" aria-label="Menu" aria-expanded="false">
            <span></span><span></span><span></span>
        </button>
    </header>

    <div class="mobile-nav" id="mobile-nav">
        <ul class="mobile-links">
            <li><a href="index.html#portfolio" data-i18n="nav_portfolio" class="mobile-link">Portfolio</a></li>
            <li><a href="index.html#about" data-i18n="nav_about" class="mobile-link">About</a></li>
        </ul>
        <div class="lang-switch">
            <button class="lang-btn lang-tr-btn">TR</button>
            <span class="lang-divider">/</span>
            <button class="lang-btn lang-en-btn">EN</button>
        </div>
    </div>

    <main>
        <section class="section section-top section-centred">
            <div class="col">
                <a href="index.html#portfolio" class="back-link" data-i18n="back_home">← Portfolio</a>

                <div class="page-head">
                    <h1 class="page-title" data-i18n="{title_key}"></h1>
                    <div class="rule"></div>
                    <p class="page-sub" data-i18n="{blurb_key}"></p>
                </div>

                <div class="entry-frame">
                    <div id="portfolio-container" data-category="{category}"></div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="col">
            <p data-i18n="footer_text">© Fikret Kutluay</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>

</html>
'''

if __name__ == '__main__':
    repo = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    for filename, category, title_key, blurb_key in PAGES:
        html = TEMPLATE.format(category=category, title_key=title_key, blurb_key=blurb_key)
        with open(os.path.join(repo, filename), 'w', encoding='utf-8') as f:
            f.write(html)
        print(f'wrote {filename}  (category={category})')
