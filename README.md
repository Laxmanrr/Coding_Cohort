<div align="center">

# 🚀 Coding Cohort — Web Development Projects

**A complete collection of web development projects built during my coding journey.**  
From HTML basics to full JavaScript DOM projects — all live and deployed!

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

[![Live Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-Visit_Now-2ea44f?style=for-the-badge)](https://laxmanrr.github.io/Coding_Cohort/)

</div>

---

## 📁 Projects

---

### 1. 🧠 Productivity Dashboard
> **DOM Project** — All-in-one productivity web app

A feature-rich, fully responsive productivity dashboard built with **pure HTML, CSS & JavaScript** — no frameworks, no libraries. Everything from live weather to a Pomodoro timer, all in one clean interface with 3 switchable themes.

**✨ Features:**

| Feature | Description |
|---------|-------------|
| ⏰ Live Clock & Date | Real-time updating clock with day, date, month, year and AM/PM |
| 🌤️ Live Weather | Current temp, condition, humidity, wind & precipitation for Bhopal via Open-Meteo API |
| ✅ To-Do List | Add tasks with details, mark as ⭐ Important, complete & remove — saved to localStorage |
| 📅 Daily Planner | Hour-by-hour schedule from 6 AM–11 PM, auto-saves every keystroke |
| 💬 Motivation Quotes | Random inspirational quotes on load + refresh button, with offline fallback |
| ⏱️ Pomodoro Timer | 25-min work session → 5-min break, with Start / Pause / Reset controls |
| 🎯 Daily Goals | Add goals, tick them off as done, delete — persisted in localStorage |
| 🎨 Theme Switcher | 3 beautiful color themes — Teal (default), Dark Charcoal, Warm Rose |
| 📱 Fully Responsive | Works on all devices — mobile (320px), tablet, laptop, desktop |

**🐛 Bugs Fixed (from original code):**
- `new date()` → `new Date()` (capital D was missing)
- `date.getTarik()` → `date.getDate()` (method didn't exist)
- `date.getyear()` → `date.getFullYear()` (method didn't exist)
- AM/PM logic was inverted — `hours > 12` was wrongly showing "AM"
- Time element was never updated — both lines were setting the date element
- `fetchQuote()` was defined but **never called**
- Weather API used `"${apikey}"` as a plain string, not a variable
- `localStorage` key mismatch — saving as `"dayplanData"`, reading as `"dayPlanData"`
- Feature pages not opening — CSS `z-index` and `display` conflict fixed
- `fullElem` pages blocked by nav — fixed with correct `top: 80px` and `z-index: 100`

**🌐 APIs Used:**

| API | Purpose | Key Required |
|-----|---------|-------------|
| [Open-Meteo](https://open-meteo.com/) | Live weather for Bhopal | ❌ Free, no key |
| [DummyJSON Quotes](https://dummyjson.com/quotes) | Random motivational quotes | ❌ Free, no key |

**💾 localStorage Keys:**

| Key | Data |
|-----|------|
| `currentTask` | To-Do tasks array |
| `dayPlanData` | Daily planner hour entries |
| `dailyGoals` | Goals with done/undone status |

**📱 Responsive Breakpoints:**

| Device | Breakpoint | Behavior |
|--------|-----------|----------|
| Desktop | > 1024px | Full layout, large fonts |
| Laptop | ≤ 1024px | Slightly reduced sizing |
| Tablet | ≤ 768px | Header stacks vertically, 2-col cards |
| Mobile | ≤ 480px | Full single-column layout |
| Mobile S | ≤ 375px | Minimum readable sizes |
| Landscape | height ≤ 500px | Adjusted for horizontal phones |

**🗂 File Structure:**
```
Dom_Project_Theme_Changer/
├── index.html      → Full HTML structure, all 6 sections
├── style.css       → All styles + complete responsive CSS
├── script.js       → 9 JS modules, all bugs fixed
└── fav/            → Favicon + custom Aeonik font files
```

**🛠 Tech Stack:** HTML5 · CSS3 (Custom Properties, Flexbox) · Vanilla JavaScript (DOM, Fetch API, localStorage, setInterval) · Remix Icons CDN

🔗 [**Live Demo**](https://laxmanrr.github.io/Coding_Cohort/Dom_Project_Theme_Changer/) &nbsp;|&nbsp; 📂 [**Source Code**](https://github.com/Laxmanrr/Coding_Cohort/tree/main/Dom_Project_Theme_Changer)

---

### 2. 🌐 FYLLA Website
> **Responsive Modern Website**

A dynamic and interactive platform built with modern web technologies, featuring responsive design for all screen sizes and engaging interactive elements.

**✨ Features:**
- 📱 Fully responsive — desktop & mobile
- 🎨 Modern UI/UX design
- ⚡ Interactive elements for better usability

**🛠 Tech:** HTML · CSS · JavaScript

🔗 [**Live Demo**](https://laxmanrr.github.io/Coding_Cohort/FYLLA/) &nbsp;|&nbsp; 📂 [**Source Code**](https://github.com/Laxmanrr/Coding_Cohort/tree/main/FYLLA)

---

### 3. 💻 Web Design & Development Services (9\_Web\_Developer)
> **Portfolio / Services Website**

A professional website showcasing web design and development services including custom design, development, and SEO strategies.

**✨ Features:**
- 🎨 Web Design services section
- ⚙️ Web Development services section
- 📈 SEO strategies section
- Clean, professional layout

**🛠 Tech:** HTML · CSS · JavaScript

🔗 [**Live Demo**](https://laxmanrr.github.io/Coding_Cohort/9_Web_Developer/) &nbsp;|&nbsp; 📂 [**Source Code**](https://github.com/Laxmanrr/Coding_Cohort/tree/main/9_Web_Developer)

---

### 4. 🛒 Product Showcase Website (7\_Product\_Showcase\_Website)
> **E-Commerce Style Product Listing**

A product showcase website where users can browse a variety of products — from gadgets to apparel — with detailed descriptions and pricing.

**✨ Features:**
- 🛍️ Product listings with descriptions & prices
- 🖼️ Clean, easy-to-browse layout
- 📦 Great for e-commerce or personal portfolios

**🛠 Tech:** HTML · CSS

🔗 [**Live Demo**](https://laxmanrr.github.io/Coding_Cohort/7_Product_Showcase_Website/) &nbsp;|&nbsp; 📂 [**Source Code**](https://github.com/Laxmanrr/Coding_Cohort/tree/main/7_Product_Showcase_Website)

---

### 5. 📐 Two-Column Flexbox Layout (5\_Flex)
> **Flexbox Practice — Coffee Product Site**

A two-column layout website about coffee products, built using CSS Flexbox for a clean and responsive design.

**✨ Features:**
- 📐 Two-column Flexbox layout
- ☕ Sections: About, Products, Contact
- 📱 Responsive on all screen sizes

**🛠 Tech:** HTML · CSS · Flexbox

🔗 [**Live Demo**](https://laxmanrr.github.io/Coding_Cohort/5_Flex/) &nbsp;|&nbsp; 📂 [**Source Code**](https://github.com/Laxmanrr/Coding_Cohort/tree/main/5_Flex)

---

### 6. 🎨 Styled Blog Website with CSS (4\_Blog\_Web\_Site\_CSS)
> **Blog with Full CSS Styling**

A sleek and stylish blog website demonstrating clean CSS styling, typography, and a smooth user-friendly design.

**✨ Features:**
- ✍️ Styled blog posts
- 🖼️ Embedded images with clean layout
- 🧭 Smooth navigation

**🛠 Tech:** HTML · CSS

🔗 [**Live Demo**](https://laxmanrr.github.io/Coding_Cohort/4_Blog_web_site_CSS/) &nbsp;|&nbsp; 📂 [**Source Code**](https://github.com/Laxmanrr/Coding_Cohort/tree/main/4_Blog_web_site_CSS)

---

### 7. 📩 CSS Contact Us Form (6\_Form\_in\_CSS)
> **Styled Contact Form**

A clean, styled "Contact Us" form with CSS that collects Name, Email, and Message from visitors.

**✨ Features:**
- 📝 Name, Email & Message fields
- 🎨 Clean CSS styling
- ✅ User-friendly experience

**🛠 Tech:** HTML · CSS

🔗 [**Live Demo**](https://laxmanrr.github.io/Coding_Cohort/6_Form_in_CSS/) &nbsp;|&nbsp; 📂 [**Source Code**](https://github.com/Laxmanrr/Coding_Cohort/tree/main/6_Form_in_CSS)

---

### 8. 📝 Blog Website (3-2\_Blog\_Web\_Site)
> **My First Blog — HTML Only**

My first blog website built during the early days of my coding journey. Covers personal reflections, lists, and nature — a milestone project!

**✨ Features:**
- 🗒️ Blog posts with personal content
- 📋 Favorite foods and nature reflections
- 🏗️ Built entirely with HTML

**🛠 Tech:** HTML

🔗 [**Live Demo**](https://laxmanrr.github.io/Coding_Cohort/3-2_Blog_web_site/) &nbsp;|&nbsp; 📂 [**Source Code**](https://github.com/Laxmanrr/Coding_Cohort/tree/main/3-2_Blog_web_site)

---

### 9. 📩 Contact Us Form (3-3\_Form)
> **My First HTML Form**

A simple and effective Contact Us form — one of my early projects where I learned how HTML forms work.

**✨ Features:**
- 👤 Name, Email, Phone & Message fields
- 📬 Great starting point for any website

**🛠 Tech:** HTML

🔗 [**Live Demo**](https://laxmanrr.github.io/Coding_Cohort/3-3_Form/) &nbsp;|&nbsp; 📂 [**Source Code**](https://github.com/Laxmanrr/Coding_Cohort/tree/main/3-3_Form)

---

### 10. 🌬️ Tailwind CSS Practice (10\_Tailwindcss)
> **Tailwind CSS Learning Project**

Hands-on practice with Tailwind CSS utility classes — building layouts and components with the popular CSS framework.

**🛠 Tech:** HTML · Tailwind CSS

📂 [**Source Code**](https://github.com/Laxmanrr/Coding_Cohort/tree/main/10_Tailwindcss)

---

### 11. 📖 Responsive Project (Responsive-Project-3)
> **Responsive Design Practice**

A responsive website project focused on making layouts work beautifully across all screen sizes.

**🛠 Tech:** HTML · CSS

🔗 [**Live Demo**](https://laxmanrr.github.io/Coding_Cohort/Responsive-Project-3/) &nbsp;|&nbsp; 📂 [**Source Code**](https://github.com/Laxmanrr/Coding_Cohort/tree/main/Responsive-Project-3)

---

## 📊 Repository Stats

| Language | Usage |
|----------|-------|
| CSS / SCSS | 64.5% |
| HTML | 27.0% |
| JavaScript | 8.5% |

---

## 🗺️ My Learning Journey

```
HTML Basics ──► CSS Styling ──► Flexbox ──► Responsive Design
     │
     ▼
Forms & Layouts ──► CSS Frameworks (Tailwind) ──► JavaScript DOM
     │
     ▼
API Integration ──► localStorage ──► Full Projects 🎯
```

---

## 👤 Author

**Laxman Rathod (Laxmanrr)**

> *"Every expert was once a beginner. Keep building, keep learning!"*

[![GitHub](https://img.shields.io/badge/GitHub-Laxmanrr-181717?style=for-the-badge&logo=github)](https://github.com/Laxmanrr)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-2ea44f?style=for-the-badge&logo=github-pages)](https://laxmanrr.github.io/Coding_Cohort/)

---

## 📄 License

This repository is open source under the [MIT License](LICENSE).

---

<div align="center">

⭐ **If you find these projects helpful, please give this repo a star!** ⭐

</div>
