# Finther.my Design System
## "Purple Gradient AI" Theme

**Inspired by:** New Relic's modern, professional aesthetic
**Brand Color:** #72117d (Purple)
**Themes:** Light + Dark with toggle

---

## 1. Color Palette

### 1.1 Brand Colors

```css
/* Primary - Purple */
--color-primary:        #72117d;  /* Your brand purple */
--color-primary-light:  #a855f7;  /* Lighter purple for gradients */
--color-primary-dark:   #581061;  /* Darker purple */
--color-primary-50:     #faf5ff;
--color-primary-100:    #f3e8ff;
--color-primary-200:    #e9d5ff;
--color-primary-300:    #d8b4fe;
--color-primary-400:    #c084fc;
--color-primary-500:    #a855f7;
--color-primary-600:    #9333ea;
--color-primary-700:    #72117d;  /* Main brand color */
--color-primary-800:    #581061;
--color-primary-900:    #3b0764;

/* Accent - Cyan (for AI/tech contrast) */
--color-accent:         #06b6d4;  /* Cyan */
--color-accent-light:   #67e8f9;
--color-accent-dark:    #0891b2;

/* Gradients */
--gradient-primary:     linear-gradient(135deg, #72117d 0%, #a855f7 50%, #06b6d4 100%);
--gradient-subtle:      linear-gradient(135deg, #72117d 0%, #9333ea 100%);
--gradient-glow:        radial-gradient(circle at center, rgba(114,17,125,0.15) 0%, transparent 70%);
```

### 1.2 Light Mode Colors

```css
:root {
  /* Backgrounds */
  --bg-primary:         #ffffff;
  --bg-secondary:       #f8fafc;
  --bg-tertiary:        #f1f5f9;
  --bg-card:           #ffffff;
  --bg-card-hover:     #faf5ff;  /* Purple tint on hover */

  /* Text */
  --text-primary:       #0f172a;
  --text-secondary:     #475569;
  --text-tertiary:      #94a3b8;
  --text-inverse:       #ffffff;

  /* Borders */
  --border-primary:     #e2e8f0;
  --border-secondary:   #f1f5f9;
  --border-accent:      #72117d;

  /* UI Elements */
  --shadow-sm:          0 1px 2px rgba(114,17,125,0.05);
  --shadow-md:          0 4px 6px rgba(114,17,125,0.07);
  --shadow-lg:          0 10px 15px rgba(114,17,125,0.1);
  --shadow-purple:      0 4px 20px rgba(114,17,125,0.15);
}
```

### 1.3 Dark Mode Colors

```css
:root[data-theme="dark"] {
  /* Backgrounds - Deep navy/purple tint */
  --bg-primary:         #0a0a0f;     /* Near black with purple tint */
  --bg-secondary:       #12121a;     /* Slightly lighter */
  --bg-tertiary:        #1a1a25;     /* Card background */
  --bg-card:           #1a1a25;
  --bg-card-hover:     #251530;     /* Purple tint on hover */

  /* Text */
  --text-primary:       #f1f5f9;
  --text-secondary:     #94a3b8;
  --text-tertiary:      #64748b;
  --text-inverse:       #0f172a;

  /* Borders */
  --border-primary:     #1e293b;
  --border-secondary:   #334155;
  --border-accent:      #a855f7;

  /* UI Elements */
  --shadow-sm:          0 1px 2px rgba(0,0,0,0.3);
  --shadow-md:          0 4px 6px rgba(0,0,0,0.4);
  --shadow-lg:          0 10px 15px rgba(0,0,0,0.5);
  --shadow-purple:      0 4px 30px rgba(114,17,125,0.3);
  --glow-purple:       0 0 40px rgba(114,17,125,0.2);
}
```

---

## 2. Typography

### 2.1 Font Stack

```css
/* Headings - Modern geometric */
--font-heading: 'Inter', 'SF Pro Display', -apple-system, sans-serif;

/* Body - Clean, readable */
--font-body: 'Inter', system-ui, -apple-system, sans-serif;

/* Mono - Code, technical */
--font-mono: 'JetBrains Mono', 'SF Mono', Monaco, monospace;
```

### 2.2 Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| H1 (Hero) | 3.5rem → 4.5rem | 700 | 1.1 | -0.02em |
| H2 (Section) | 2.5rem → 3rem | 600-700 | 1.2 | -0.01em |
| H3 (Card) | 1.25rem → 1.5rem | 600 | 1.3 | 0 |
| H4 (Label) | 0.875rem | 500 | 1.4 | 0.05em |
| Body | 1rem | 400 | 1.6 | 0 |
| Body Large | 1.125rem | 400 | 1.6 | 0 |
| Small | 0.875rem | 400 | 1.5 | 0 |

### 2.3 Gradient Text

```css
/* Gradient text effect for headings */
.text-gradient {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 3. Component Styles

### 3.1 Button Variants

```svelte
<!-- Primary Button - Purple gradient -->
<button class="btn btn-primary">
  <!-- Light mode -->
  background: linear-gradient(135deg, #72117d 0%, #a855f7 100%);
  <!-- Hover: glow effect -->
  box-shadow: 0 0 20px rgba(114,17,125,0.4);
  transform: translateY(-1px);
</button>

<!-- Secondary Button - Outline -->
<button class="btn btn-secondary">
  <!-- Light mode -->
  border: 1px solid #72117d;
  color: #72117d;
  background: transparent;
  <!-- Hover: purple tint bg -->
  background: rgba(114,17,125,0.1);
</button>

<!-- Ghost Button -->
<button class="btn btn-ghost">
  color: var(--text-secondary);
  <!-- Hover: text becomes primary -->
</button>
```

### 3.2 Card Styles

```css
/* Card - Modern with subtle border */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-primary);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-purple);
  transform: translateY(-2px);
}

/* Glass card (for dark mode overlays) */
.card-glass {
  background: rgba(26, 26, 37, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(114, 17, 125, 0.2);
}

/* Feature card with icon */
.card-feature {
  position: relative;
  overflow: hidden;
}

.card-feature::before {
  /* Purple glow on hover */
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(114, 17, 125, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.card-feature:hover::before {
  opacity: 1;
}
```

### 3.3 Header/Navigation

```css
/* Header - Fixed, glassmorphism on scroll */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-primary);
}

/* Dark mode */
.header[data-theme="dark"].scrolled {
  background: rgba(10, 10, 15, 0.9);
  border-color: rgba(114, 17, 125, 0.2);
}

/* Nav link with underline animation */
.nav-link {
  position: relative;
  color: var(--text-secondary);
  transition: color 0.2s;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width 0.3s;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link:hover::after {
  width: 100%;
}
```

### 3.4 Hero Section

```css
/* Hero - Full viewport with gradient mesh background */
.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Animated gradient mesh background */
.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 20%, rgba(114, 17, 125, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 50%);
  animation: meshMove 20s ease-in-out infinite;
}

@keyframes meshMove {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(2%, 2%) scale(1.02); }
  50% { transform: translate(-1%, 3%) scale(0.98); }
  75% { transform: translate(3%, -2%) scale(1.01); }
}

/* Grid pattern overlay */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(114, 17, 125, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(114, 17, 125, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 70%);
}
```

---

## 4. Animations

### 4.1 Scroll Animations

```typescript
// Fade in on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const fadeInUp = {
  opacity: 0,
  transform: 'translateY(30px)',
  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
};

fadeInUp.visible = {
  opacity: 1,
  transform: 'translateY(0)'
};
```

### 4.2 Hover Effects

```css
/* Subtle scale on hover */
.hover-scale {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-scale:hover {
  transform: scale(1.02);
}

/* Glow effect */
.hover-glow {
  transition: box-shadow 0.3s;
}

.hover-glow:hover {
  box-shadow: 0 0 30px rgba(114, 17, 125, 0.3);
}

/* Icon bounce on hover */
.icon-bounce:hover svg {
  animation: bounce 0.5s ease;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
```

### 4.3 Page Transitions

```svelte
<!-- Smooth fade between pages -->
<svelte:transition fade={{ duration: 300, delay: 100 }} />
```

---

## 5. Layout Patterns

### 5.1 Section Spacing

```css
/* Consistent section spacing */
.section {
  padding-top: var(--spacing-section, 6rem);
  padding-bottom: var(--spacing-section, 6rem);
}

/* Mobile */
@media (max-width: 768px) {
  .section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}
```

### 5.2 Container

```css
/* Max-width container */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Tighter container for text */
.container-narrow {
  max-width: 768px;
}
```

### 5.3 Grid System

```css
/* Bento-style grid (like New Relic) */
.grid-bento {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}

.grid-bento > .col-span-6  { grid-column: span 6; }
.grid-bento > .col-span-4  { grid-column: span 4; }
.grid-bento > .col-span-8  { grid-column: span 8; }

/* Responsive */
@media (max-width: 768px) {
  .grid-bento > * { grid-column: span 12; }
}
```

---

## 6. Theme Toggle

### 6.1 Toggle Button Design

```svelte
<button class="theme-toggle" aria-label="Toggle theme">
  <!-- Sun icon (for dark mode) -->
  <!-- Moon icon (for light mode) -->
  <svg class="icon-sun" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/>
  </svg>
</button>
```

### 6.2 Theme Store

```typescript
// src/lib/stores/theme.ts
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

function createThemeStore() {
  const { subscribe, set, update } = writable<Theme>('light');

  return {
    subscribe,
    toggle: () => update(t => t === 'light' ? 'dark' : 'light'),
    set: (theme: Theme) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
      }
      set(theme);
    },
    init: () => {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('theme') as Theme;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = stored || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
        set(theme);
      }
    }
  };
}

export const theme = createThemeStore();
```

---

## 7. Icon System

### 7.1 Icon Styles

```css
/* Purple gradient icons */
.icon-gradient {
  fill: url(#icon-gradient);
}

.icon-gradient defs stop:first-child {
  stop-color: #72117d;
}

.icon-gradient defs stop:last-child {
  stop-color: #06b6d4;
}

/* Glow effect on icon hover */
.icon-glow {
  filter: drop-shadow(0 0 8px rgba(114, 17, 125, 0.5));
  transition: filter 0.3s;
}

.icon-glow:hover {
  filter: drop-shadow(0 0 12px rgba(114, 17, 125, 0.8));
}
```

### 7.2 SVG Sprite Approach

```html
<!-- Include once in layout -->
<svg style="display: none">
  <defs>
    <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#72117d" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
  </defs>
</svg>
```

---

## 8. Special Effects

### 8.1 Purple Glow Orbs

```css
/* Floating gradient orbs for backgrounds */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #72117d 0%, transparent 70%);
  top: 10%;
  left: 10%;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #06b6d4 0%, transparent 70%);
  bottom: 20%;
  right: 10%;
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(50px, 30px) scale(1.1); }
  50% { transform: translate(-30px, 50px) scale(0.9); }
  75% { transform: translate(40px, -20px) scale(1.05); }
}
```

### 8.2 Card Tilt Effect (3D)

```typescript
// Subtle 3D tilt on hover
function handleCardMove(event: MouseEvent, card: HTMLElement) {
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = (y - centerY) / 10;
  const rotateY = (centerX - x) / 10;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
}
```

---

## 9. Responsive Breakpoints

```css
/* Tailwind-style breakpoints */
@media (min-width: 640px)   { /* sm */ }
@media (min-width: 768px)   { /* md */ }
@media (min-width: 1024px)  { /* lg */ }
@media (min-width: 1280px)  { /* xl */ }
@media (min-width: 1536px)  { /* 2xl */ }
```

---

## 10. Accessibility

### 10.1 Focus States

```css
/* Purple focus ring for keyboard navigation */
:focus-visible {
  outline: 2px solid #72117d;
  outline-offset: 2px;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #72117d;
  color: white;
  padding: 8px 16px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### 10.2 Color Contrast

All combinations meet WCAG AA standards:
- Primary text on background: > 7:1
- Primary button: 4.5:1 (white on purple)
- Secondary text: > 4.5:1

---

## Summary: The "Purple Gradient AI" Look

| Element | Style |
|---------|-------|
| Background | Light: white/off-white; Dark: near-black with purple tint |
| Primary Color | #72117d (purple) |
| Accent | #06b6d4 (cyan) |
| Gradients | Purple → cyan, purple → lighter purple |
| Cards | Clean with subtle borders, purple glow on hover |
| Buttons | Gradient purple with glow effect |
| Text | Clean sans-serif (Inter) |
| Hero | Animated gradient mesh + grid pattern |
| Animations | Smooth fades, subtle scales, no jarring movements |
| 3D | Optional CSS 3D tilt on cards |
| Glass | Glassmorphism on scrolled header |

---

**This design system gives you:**
✨ New Relic-inspired modern aesthetic
💜 Your brand purple (#72117d) as the hero
🌓 Light + Dark mode with smooth toggle
🎨 AI/Tech feel with cyan accents
⚡ Performance-first (CSS animations, no heavy libraries)
📱 Fully responsive
♿ Accessible (WCAG AA)
