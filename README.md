# Harishwa S — Premium Personal Portfolio Website

A modern, high-performance personal portfolio website built for **Harishwa S**, First-Year Computer Science and Engineering Student at **KPR Institute of Engineering and Technology (KPRIET), Coimbatore**.

---

## 🌟 Highlights & Features

- **Cyber-Luxury Minimalist Design**: Dark obsidian default with electric cyan, purple, and emerald neon accents, glassmorphic card panels, and smooth backdrop blurs.
- **Light & Dark Theme Toggle**: Instant transition with `localStorage` persistence and system preference detection.
- **Hero Interactive Particle Canvas**: Dynamic particle network with mouse proximity connections and interactive repulsion.
- **Typing Subtitle Effect**: Smooth automated typing animation displaying Harishwa's roles and technical interests.
- **Profile Card with Glow**: Extracted high-resolution portrait of Harishwa with subtle breathing glow and status badge.
- **Anti-Sleep Alarm System Interactive Simulator**:
  - Live virtual simulation of the college Arduino hardware prototype.
  - Interactive "Simulate Eye Closure (Drowsy)" control with timer threshold detection.
  - Real-time buzzer alert visualizer, status LED toggle, and audio tone synthesis via Web Audio API.
- **FarmConnect AgTech Flow Visualizer**:
  - Interactive comparison tool illustrating the Smart India Hackathon (SIH) concept.
  - Side-by-side contrast between the traditional 4-broker supply chain vs FarmConnect direct micro-hub model.
- **Categorized Skills**: Interactive filter tabs (Programming & Core, AI & Web, Hardware & IoT, Strengths & Languages).
- **Education & Credentials Timeline**:
  - B.E. Computer Science & Engineering at KPRIET (2026–2030, First Year).
  - Class XII State Board: 92.17% (553/600) at Sree Saravana Nikethan Hr. Sec. School.
  - Class X Matriculation: 96.6% (483/500) at Sri Nachiyar Matriculation School.
- **Python Certification Card**: 40-hour CUBE Technologies training with full syllabus breakdown modal.
- **Clubs, Sports & Extracurriculars**: Ignitron Club member, College Technical activities, Kho Kho sports team, and multilingual proficiencies (Tamil, English).
- **Functional Contact Section**:
  - Direct mailto form generator with client-side validation.
  - One-click copy email button with animated toast confirmation.
  - Verified phone number (+91 93843 92613) and LinkedIn profile link.
- **Resume Actions**:
  - Direct download button for `Harishwa_S_Resume.pdf`.
  - Built-in PDF preview modal.
- **Back-to-Top Control**: Floating circular SVG progress ring indicating page scroll depth.

---

## 📁 Project Structure

```text
harishwa-portfolio/
├── index.html                   # Semantic HTML5 entry point with Tailwind & Lucide
├── css/
│   └── custom.css               # Design system tokens, glassmorphism, animations
├── js/
│   └── app.js                   # Particle canvas, simulations, theme toggle, form logic
├── src/
│   ├── types/
│   │   └── portfolio.ts         # TypeScript data type definitions
│   └── data/
│       └── portfolioData.ts     # Verified structured resume data
├── assets/
│   ├── images/
│   │   └── harishwa-profile.jpg # Profile photo extracted directly from resume
│   └── docs/
│       └── Harishwa_S_Resume.pdf# Real resume PDF document for instant download
├── server.py                    # Standalone development server (Python 3)
└── README.md                    # Project documentation
```

---

## 🚀 How to Run Locally

### Option 1: Using the Built-in Python Server (Recommended)
Run the included `server.py` script from terminal:
```bash
python server.py
```
Open your browser and visit: **`http://localhost:5173`**

### Option 2: Direct Browser Launch
Double click `index.html` or open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Brave.

---

## 🌐 Deploy to GitHub Pages / Vercel

### GitHub Pages:
1. Create a GitHub repository named `portfolio` or `harishwa-portfolio`.
2. Push this folder's contents to the `main` branch.
3. In repository **Settings > Pages**, set the source to `main` branch root `/`.
4. Your website will be live at `https://<your-username>.github.io/<repo-name>/`.

### Vercel:
1. Run `npx vercel` or connect your GitHub repository in [vercel.com](https://vercel.com).
2. Set root directory to `./`.
3. Deploy in one click.

---

## 🛡️ Authenticity Guarantee
All academic scores, project descriptions, contact numbers, email addresses, club memberships, and athletic activities are strictly derived from the official resume of Harishwa S without fabrication.
