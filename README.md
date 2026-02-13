# Defense AI/ML Systems Engineer Portfolio

A production-grade personal website built for Sumukh Chhabra, showcasing defense AI/ML systems engineering work with a tactical, mission-critical aesthetic.

## 🎯 Overview

This portfolio represents a Computer Science student focused on applied AI for defense applications, featuring real experience across:
- **DRDO CAIR** - AI Development for GPS-denied navigation
- **Indian Navy** - ML for underwater mine detection & combat systems  
- **WESEE (Ministry of Defence)** - Facial detection & AIS analytics

## 🚀 Features

### Core Functionality
- **Tactical Design System** - Defense-grade dark theme with cyan/teal accents inspired by radar/sonar displays
- **Command Palette** - Press `⌘K` or `/` for quick navigation and actions
- **Console Mode** - Toggle between normal and enhanced tactical UI with grid animations
- **Mission Logs** - Interactive timeline of defense internships with detailed drawers
- **Project Systems** - Expandable cards showing AI system pipelines and engineering decisions
- **Responsive Design** - Mobile-first approach with tactical aesthetics maintained across devices

### Interactive Elements
- **Smart Navigation** - Smooth scroll to sections, keyboard shortcuts
- **Animated Components** - Radar sweeps, scan lines, data streams (respects prefers-reduced-motion)
- **Tactical Frame** - Custom image overlay with corner brackets and status indicators
- **Copy-to-Clipboard** - One-click contact info copying with fallback support
- **Download Resume** - Direct access to PDF resume

## 🛠️ Tech Stack

### Frontend
- **React** - Component-based UI framework
- **Tailwind CSS** - Utility-first styling with custom design tokens
- **Shadcn UI** - Accessible, customizable component primitives
- **Lucide React** - Clean, consistent icon set

### Typography
- **Space Grotesk** - Primary sans-serif for headings and body
- **IBM Plex Mono** - Monospace for tactical/console elements

### Color System
- **Primary**: `hsl(185 100% 45%)` - Cyan for tactical accents
- **Background**: `hsl(0 0% 3%)` - Near-black base
- **Foreground**: `hsl(180 5% 90%)` - Light gray text
- All colors in HSL format for consistent theming

## 📁 Project Structure

```
/app/frontend/
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI primitives
│   │   ├── Header.js        # Navigation header
│   │   ├── Hero.js          # Hero section with tactical frame
│   │   ├── OriginStory.js   # Journey narrative
│   │   ├── Capabilities.js  # Tech stack display
│   │   ├── Experience.js    # Mission logs timeline
│   │   ├── Projects.js      # System modules showcase
│   │   ├── Contact.js       # Contact information
│   │   ├── Footer.js        # Site footer
│   │   ├── CommandPalette.js # ⌘K command menu
│   │   └── ConsoleToggle.js # Mode switcher
│   ├── data/
│   │   └── portfolio.js     # All content data
│   ├── index.css            # Design system tokens & animations
│   ├── App.js               # Main application component
│   └── index.js             # React entry point
├── public/
└── package.json
```

## 🎨 Design System

### Color Tokens (HSL format)
```css
--primary: 185 100% 45%        /* Cyan tactical accent */
--background: 0 0% 3%           /* Near-black */
--foreground: 180 5% 90%        /* Light gray text */
--card: 180 10% 6%              /* Card background */
--border: 180 20% 20%           /* Border color */
```

### Custom Animations
- **Tactical Grid** - Animated grid overlay for console mode
- **Radar Sweep** - Rotating conic gradient effect
- **Scan Line** - Vertical scanning animation
- **Data Stream** - Binary code flow effect
- **Pulse Tactical** - Status indicator animation

### Typography Scale
- **H1**: `text-4xl sm:text-5xl lg:text-6xl` (36-60px)
- **H2**: `text-3xl sm:text-4xl` (30-36px)
- **Body**: `text-base` (16px)
- **Small**: `text-sm` (14px)
- **Monospace**: IBM Plex Mono for technical elements

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and Yarn
- Modern browser with ES6+ support

### Installation

1. **Clone the repository**
```bash
cd /app/frontend
```

2. **Install dependencies**
```bash
yarn install
```

3. **Start development server**
```bash
yarn start
```

4. **Build for production**
```bash
yarn build
```

The app will be available at `http://localhost:3000`

## 📝 Content Management

All content is centralized in `/app/frontend/src/data/portfolio.js`:

### Update Personal Info
```javascript
export const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  // ... other fields
};
```

### Add New Experience
```javascript
experiences.push({
  id: "unique-id",
  organization: "Company Name",
  role: "Your Role",
  dates: "Start – End",
  // ... other fields
});
```

### Add New Project
```javascript
projects.push({
  id: "project-id",
  title: "Project Name",
  pipeline: {
    inputs: ["Input 1", "Input 2"],
    model: "Model Name",
    outputs: ["Output 1", "Output 2"]
  },
  // ... other fields
});
```

## 🎮 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `⌘K` / `Ctrl+K` | Open command palette |
| `/` | Open command palette |
| `↑` / `↓` | Navigate commands |
| `Enter` | Execute command |
| `Esc` | Close palette |

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /app/frontend
vercel
```

### Netlify
```bash
# Build the project
yarn build

# Drag & drop the 'build' folder to Netlify
```

### Docker
```bash
# Build image
docker build -t defense-portfolio .

# Run container
docker run -p 3000:3000 defense-portfolio
```

## 🔧 Customization Guide

### Change Accent Color
Update `/app/frontend/src/index.css`:
```css
:root {
  --primary: [your-hsl-values];  /* e.g., 185 100% 45% */
  --primary-glow: [lighter-variant];
  --primary-dim: [darker-variant];
}
```

### Add New Section
1. Create component in `src/components/YourSection.js`
2. Import in `src/App.js`
3. Add to main component tree
4. Update navigation in `Header.js`

### Modify Animations
Edit animation keyframes in `/app/frontend/src/index.css`:
```css
@keyframes yourAnimation {
  from { /* start state */ }
  to { /* end state */ }
}
```

## 🐛 Known Issues & Solutions

### Clipboard Permission Errors
The app includes fallback clipboard methods for non-secure contexts. If issues persist:
- Serve over HTTPS
- Use fallback text selection method
- Check browser clipboard permissions

### Grid Animation Performance
On lower-end devices, disable console mode or reduce animation intensity:
```css
@media (prefers-reduced-motion: reduce) {
  /* Animations are automatically disabled */
}
```

## 📄 License

This is a personal portfolio project. Feel free to use the code structure and design system as inspiration, but please don't copy content or present it as your own work.

## 🤝 Credits

- **Design System**: Custom tactical theme inspired by military HUD interfaces
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Typography**: Google Fonts (Space Grotesk, IBM Plex Mono)

## 📧 Contact

**Sumukh Chhabra**  
- Email: sumukhchhabra10@gmail.com
- GitHub: [@sumukhx](https://github.com/sumukhx)
- LinkedIn: [Sumukh Chhabra](https://www.linkedin.com/in/sumukh-chhabra-23829428a/)

---

**Built with precision for mission-critical presentation** | Status: ✅ Operational
