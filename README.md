# IDSOL 2026 — Static Website

Multi-page static website for the **International Data Science Olympiad 2026**, converted from embedded Google Sites code into self-hosted HTML/CSS/JS files.

## File Structure

```
idsol-site/
├── index.html          ← Home (hero, countdown, stats, testimonials)
├── about.html          ← About Us (KBI story, organizing committee)
├── competition.html    ← The Competition (overview, categories)
├── eligibility.html    ← Eligibility (streams, validity parameters)
├── timeline.html       ← Timeline (Phase 0 → 2 roadmap)
├── submission.html     ← Submission Materials & Evaluation Criteria
├── accolades.html      ← Accolades & Achievements (medals, awards)
├── registration.html   ← Registration (interest form, fees, countries)
├── contact.html        ← Contact Us (emails, social links, FAQ)
├── css/
│   └── shared.css      ← Shared styles (nav, footer, utilities)
└── js/
    └── shared.js       ← Shared JS (nav, footer, nodal background)
```

## Navigation Structure

```
Home
About Us
Competition ▾
  ├── Eligibility
  ├── Timeline
  ├── Submission
  └── Accolades
Registration
Contact
```

## Hosting on GitHub Pages

1. Create a new GitHub repository
2. Upload all files (preserve the `css/` and `js/` subdirectories)
3. Go to **Settings → Pages**
4. Set source to `main` branch, root folder
5. Your site will be live at `https://yourusername.github.io/repo-name/`

## Dependencies (CDN — no install needed)

- [Lucide Icons](https://unpkg.com/lucide@latest) — icon library
- [Google Fonts](https://fonts.google.com) — Roboto Mono (home page only)
- All images served from `cdn.kb.institute` (no local assets required)

## Features

- ✅ Fully responsive (mobile-first)
- ✅ Shared nav with dropdown (Competition submenu)
- ✅ Animated nodal background canvas on all pages
- ✅ Scroll-reveal animations
- ✅ Active page highlighting in nav
- ✅ Hamburger menu for mobile
- ✅ Countdown timer (home page)
- ✅ Animated stat counters (home page)
- ✅ Auto-advancing testimonial carousel (home page)
- ✅ Collapsible accordions (registration page)
- ✅ FAQ accordion (contact page)
- ✅ Consistent footer with social links on all pages
