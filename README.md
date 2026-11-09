# Aditya Kumar — Portfolio Website

A premium, cinematic personal portfolio website built with React, GSAP, and Motion for React. Featuring a bold black, red, and yellow visual identity with sophisticated animations and scroll storytelling.

## 🚀 Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP + @gsap/react, Motion for React (Framer Motion)
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Typography**: Space Grotesk (display), Manrope (body), JetBrains Mono (code)

## 📦 Installation

```bash
# Clone the repository
git clone <repo-url>
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Development

```bash
npm run dev
```

Runs at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── assets/              # Static assets (images, fonts)
├── components/          # React components
│   ├── Navbar.jsx       # Navigation with mobile menu
│   ├── Hero.jsx         # Hero section with GSAP cinema intro
│   ├── About.jsx        # About section with editorial layout
│   ├── Projects.jsx     # Projects showcase with modal details
│   ├── Expertise.jsx    # Technical skills browser
│   ├── Journey.jsx      # Timeline of milestones
│   ├── Contact.jsx      # Contact section
│   ├── Footer.jsx       # Footer
│   └── CustomCursor.jsx # Custom cursor (desktop only)
├── data/                # Centralized content configuration
│   ├── profile.js       # Personal info, bio, education
│   ├── projects.js      # Project data and configuration
│   ├── skills.js        # Technical skills by category
│   ├── journey.js       # Timeline items
│   └── socialLinks.js   # Social links and navigation
├── styles/
│   └── globals.css      # Global styles and design tokens
├── App.jsx              # Root component with Lenis + GSAP setup
└── main.jsx             # React entry point
```

## ✏️ Updating Your Information

All content is centralized in `src/data/`. Edit these files to update the site:

### Personal Info (`src/data/profile.js`)
- Name, bio, education, location, availability status
- Email, GitHub, LinkedIn URLs
- Resume file path

### Adding/Editing Projects (`src/data/projects.js`)
- Edit existing project entries or add new ones
- Set `visible: true` to show a project, `visible: false` to hide it
- Future project slots (04, 05) are pre-configured as placeholders

### Skills (`src/data/skills.js`)
- Organized by category with proficiency level
- Add or remove skills from any category

### Journey Timeline (`src/data/journey.js`)
- Add new timeline events (education, projects, achievements, personal)
- Only include verified facts

## 🖼️ Adding Images

### Portrait
Place your photo at `public/portrait.jpg` and update `About.jsx` to uncomment the `<img>` tag.

### Project Screenshots
1. Place images at `public/projects/<project-id>.jpg` (e.g., `public/projects/devboard.jpg`)
2. Update the `image` field in `src/data/projects.js`:
   ```js
   image: '/projects/devboard.jpg',
   ```

### Resume
Place your resume PDF at `public/resume.pdf`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel auto-detects Vite — build settings are pre-configured
4. Deploy

Or use the Vercel CLI:
```bash
npm install -g vercel
vercel --prod
```

### Environment Variables
No environment variables required for the base portfolio.

## 🎨 Design System

**Colors**
- Background: `#090909` (Obsidian)
- Surface: `#111111`, `#1B1B1B`
- Accent Red: `#D71935` (Crimson)
- Accent Yellow: `#FFD43B` (Electric Yellow)
- Text: `#F3F0E8` (Warm White), `#A5A5A5` (Muted)
- Border: `#303030`

**Typography**
- Display: Space Grotesk (headlines, UI)
- Body: Manrope (prose, descriptions)
- Mono: JetBrains Mono (labels, code, metadata)

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Visible focus indicators
- `prefers-reduced-motion` respected
- Color contrast meets WCAG AA standards
- Custom cursor disabled on touch devices

## 📄 License

Personal portfolio — all rights reserved.
