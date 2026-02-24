# Finther.my SvelteKit Architecture Blueprint

**Project:** Corporate Website Rebuild
**Company:** FINTEC (Finther)
**Domain:** IT Observability & Network Performance Monitoring Services
**Target:** Static marketing site, SSG preferred

**Design:**
- Brand Color: #72117d (Purple)
- Theme: Light + Dark mode toggle
- Style: "Purple Gradient AI" - inspired by New Relic
- See `DESIGN_SYSTEM.md` for complete design specifications

---

## 1. Information Architecture

### 1.1 Site Structure

```
finther.my/
├── /                          # Home (landing page)
├── /about                     # About Us
├── /services                  # Services overview
├── /aws                       # AWS CloudWatch solutions
├── /knowledge-base            # Case studies & resources
├── /career                    # Careers & job openings
└── /contact                   # Contact form & location
```

### 1.2 Content Types

| Type | Purpose | Format |
|------|---------|--------|
| Page Content | Main page content | JSON |
| Hero Sections | Page headers | JSON |
| Feature Cards | Services/features | JSON |
| Case Studies | Knowledge base items | JSON |
| Job Listings | Career openings | JSON |
| Company Info | About, values, mission | JSON |
| Partner Logos | Technology partners | JSON array |
| Testimonials | Customer quotes | JSON (future) |

### 1.3 Content Hierarchy

```
Page
├── hero (title, subtitle, cta, background)
├── sections []
│   ├── two-column (image + content)
│   ├── three-column (feature cards)
│   ├── flip-cards (interactive)
│   ├── tabs (content switching)
│   ├── accordion (expandable)
│   └── banner (full-width CTA)
└── metadata (SEO, social)
```

---

## 2. Route Structure

### 2.1 File-Based Routing (SvelteKit)

```
src/routes/
├── +layout.svelte              # Root layout (header, footer, seo)
├── +layout.server.ts           # Server layout (data fetching)
├── +page.svelte                # Home page
├── +page.server.ts             # Home data
├── about/
│   ├── +page.svelte
│   └── +page.server.ts
├── services/
│   ├── +page.svelte
│   └── +page.server.ts
├── aws/
│   ├── +page.svelte
│   └── +page.server.ts
├── knowledge-base/
│   ├── +page.svelte
│   └── +page.server.ts
├── career/
│   ├── +page.svelte
│   └── +page.server.ts
└── contact/
    ├── +page.svelte
    └── +page.server.ts
```

### 2.2 Dynamic Routes (Future Consideration)

```
src/routes/
├── knowledge-base/
│   └── [slug]/
│       ├── +page.svelte          # Individual case study
│       └── +page.server.ts
└── career/
    └── [slug]/
        ├── +page.svelte          # Individual job posting
        └── +page.server.ts
```

---

## 3. Folder Structure

```
finther/
├── src/
│   ├── routes/                  # SvelteKit routes
│   │   ├── (marketing)/         # Route group for marketing pages
│   │   └── api/                 # API routes (contact form)
│   ├── lib/
│   │   ├── components/
│   │   │   ├── layout/          # Header, Footer, Nav
│   │   │   ├── sections/        # Hero, TwoColumn, Cards
│   │   │   ├── ui/              # Buttons, Inputs, Modals
│   │   │   └── index.ts         # Component exports
│   │   ├── content/
│   │   │   ├── loaders.ts       # Content loading utilities
│   │   │   ├── transformers.ts  # WordPress → JSON conversion
│   │   │   └── validators.ts    # Content schema validation
│   │   ├── stores/
│   │   │   ├── navigation.ts    # Nav state
│   │   │   ├── contact.ts       # Form state
│   │   │   └── theme.ts         # Theme/dark mode (future)
│   │   ├── utils/
│   │   │   ├── seo.ts           # Meta tag generation
│   │   │   ├── images.ts        # Image optimization
│   │   │   └── format.ts        # Text formatting
│   │   └── types/
│   │       └── content.ts       # TypeScript interfaces
│   ├── styles/
│   │   ├── global.css           # Global styles
│   │   ├── components.css       # Component-specific
│   │   └── themes.css           # CSS variables (theming)
│   └── hooks.server.ts          # Server hooks
├── static/
│   ├── fonts/                   # Custom fonts
│   ├── icons/                   # SVG icons
│   └── robots.txt
├── public/
│   └── images/                  # Optimized images
│       ├── heroes/
│       ├── about/
│       ├── services/
│       ├── logos/
│       └── team/
├── content/
│   ├── pages.json               # Main page content
│   ├── navigation.json          # Nav structure
│   ├── company.json             # Company info (values, mission)
│   ├── partners.json            # Partner logos
│   └── schema/                  # Content validation schemas
├── svelte.config.js
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## 4. Component Hierarchy

```
RootLayout
├── SEOHead
├── SiteHeader
│   ├── Logo
│   ├── Navigation (desktop)
│   └── MobileMenu
└── main
    └── PageContent
        ├── HeroSection
        │   ├── HeroTitle
        │   ├── HeroSubtitle
        │   └── CallToAction
        ├── ContentSection
        │   ├── SectionLabel
        │   ├── SectionTitle
        │   └── RichContent
        ├── TwoColumnSection
        │   ├── ImageColumn
        │   └── TextColumn
        ├── FeatureGrid
        │   └── FeatureCard (repeated)
        │       ├── Icon
        │       ├── Title
        │       └── Description
        ├── FlipCard
        │   ├── CardFront
        │   └── CardBack
        ├── Tabs
        │   └── TabPanel (repeated)
        ├── Accordion
        │   └── AccordionItem (repeated)
        ├── PartnerLogoGrid
        │   └── PartnerLogo (repeated)
        └── ContactSection
            ├── ContactForm
            │   ├── FormField
            │   ├── TextArea
            │   └── SubmitButton
            └── ContactInfo
                ├── Address
                ├── Email
                └── Phone
└── SiteFooter
    ├── FooterLinks
    ├── SocialLinks
    └── Copyright
```

---

## 5. Layout Strategy

### 5.1 Layout Hierarchy

```
+layout.svelte (root)
├── <SEOHead /> (dynamic meta tags)
├── <SiteHeader />
│   ├── Fixed position on scroll
│   ├── Desktop: horizontal nav
│   └── Mobile: hamburger menu
├── <slot /> (page content)
└── <SiteFooter />
```

### 5.2 Page Layout Pattern

All pages follow consistent structure:
1. **Hero Section** - Full viewport height or min-height with background
2. **Content Sections** - Alternating two-column layouts
3. **Feature/Grid Sections** - 3-column card layouts
4. **CTA Section** - Full-width call-to-action before footer

### 5.3 Responsive Breakpoints

| Breakpoint | Width | Columns | Container |
|------------|-------|---------|-----------|
| Mobile | < 640px | 1 | 100% - 32px |
| Tablet | 640px - 1024px | 2 | 640px |
| Desktop | > 1024px | 3 | 1024px |
| Wide | > 1280px | 3 | 1280px |

---

## 6. Content Loading Strategy

### 6.1 Content Format Decision: JSON

**Rationale:**
- Content already extracted as JSON from WordPress
- Type-safe content access
- Easy validation and transformation
- Compatible with SSG prerendering
- No build-time markdown parsing overhead

### 6.2 Content Schema

```typescript
// content/pages.json structure
interface PageContent {
  slug: string;
  title: string;
  description?: string; // For SEO
  hero: {
    title: string;
    subtitle?: string;
    background?: string; // Image or color
    overlay?: boolean;
  };
  sections: Section[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
  };
}

type Section =
  | TwoColumnSection
  | FeatureGridSection
  | FlipCardSection
  | TabsSection
  | AccordionSection
  | BannerSection;
```

### 6.3 Loading Pattern

```typescript
// +page.server.ts
export async function load({ params }) {
  const page = await loadPageContent(params.slug || 'home');
  const navigation = await loadNavigation();

  return {
    page,
    navigation,
    seo: generateSEO(page)
  };
}
```

### 6.4 Content Utilities

```typescript
// lib/content/loaders.ts
export async function loadPageContent(slug: string): Promise<PageContent>
export async function loadNavigation(): Promise<NavItem[]>
export async function loadCompanyInfo(): Promise<CompanyInfo>
export async function loadPartners(): Promise<Partner[]>

// lib/content/transformers.ts
export function transformWordPressContent(wpData: any): PageContent
export function sanitizeHTML(html: string): string
export function extractImagePaths(content: any): string[]
```

---

## 7. SEO Strategy

### 7.1 Meta Tag Strategy

```typescript
// Each page gets dynamic meta tags
interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  canonical?: string;
  noindex?: boolean;
}
```

### 7.2 Sitemap Generation

```typescript
// hooks.server.ts or sitemap.xml.ts
export async function GET() {
  const pages = ['/', '/about', '/services', '/aws', '/knowledge-base', '/career', '/contact'];
  return sitemapResponse(pages);
}
```

### 7.3 Structured Data

```json
// Organization schema
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FINTEC",
  "url": "https://finther.my",
  "logo": "https://finther.my/logo.png",
  "sameAs": [],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+60-...",
    "contactType": "sales"
  }
}
```

### 7.4 Performance Metrics Target

| Metric | Target | Measurement |
|--------|--------|-------------|
| LCP | < 2.5s | Largest contentful paint |
| FID | < 100ms | First input delay |
| CLS | < 0.1 | Cumulative layout shift |
| TTI | < 3.5s | Time to interactive |

---

## 8. Performance Strategy

### 8.1 Build Strategy

**SvelteKit Adapter:** `@sveltejs/adapter-static`

```javascript
// svelte.config.js
export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    })
  }
}
```

### 8.2 Image Optimization

```typescript
// Image component using Vite's image handling
<img src={image?.src} alt={image?.alt} loading="lazy" decoding="async" />

// Responsive images
<picture>
  <source srcset={image.webp} type="image/webp" />
  <img src={image.fallback} alt={alt} />
</picture>
```

### 8.3 Code Splitting

- Route-based automatic splitting
- Lazy load heavy components:
```svelte
<script>
  import { onMount } from 'svelte';
  let FlipCard;
  onMount(async () => {
    FlipCard = (await import('$lib/components/sections/FlipCard.svelte')).default;
  });
</script>
```

### 8.4 Critical CSS

- Inline critical CSS for above-the-fold content
- Defer non-critical styles
- Use Tailwind's purge to remove unused styles

### 8.5 Caching Strategy

```
# Static assets (1 year)
/images/*, /fonts/*, /icons/*

# HTML pages (1 hour with revalidation)
/*.html

# Service worker for offline support (optional)
```

---

## 9. Reusability Principles

### 9.1 Component Design Rules

1. **Single Responsibility**: Each component has one clear purpose
2. **Composition over Configuration**: Build complex UIs from simple components
3. **Props Interface**: Define TypeScript interfaces for all props
4. **Slot Pattern**: Use slots for flexible content injection

### 9.2 Reusable Component Categories

**Layout Components:**
- `Container` - Max-width wrapper
- `Section` - Vertical spacing wrapper
- `Grid` - Responsive grid layout
- `Flex` - Flexbox wrapper

**UI Components:**
- `Button` - With variants (primary, secondary, outline)
- `Link` - Styled anchor/router link
- `Icon` - SVG icon wrapper
- `Badge` - Small labels
- `Tag` - Category labels

**Content Components:**
- `Heading` - With size variants
- `Text` - With style variants
- `RichText` - Sanitized HTML content
- `Label` - Section labels (e.g., "// About Us")

### 9.3 Content-driven Components

Components accept configuration via JSON:

```typescript
// Feature cards driven by data
const features = [
  { icon: 'star', title: 'Monitoring', description: '...' },
  { icon: 'star', title: 'Reports', description: '...' },
  // ...
];

// In component
{#each features as feature}
  <FeatureCard {...feature} />
{/each}
```

---

## 10. Styling System Rules

### 10.1 CSS Framework: Tailwind CSS

**Rationale:**
- Utility-first approach
- Small bundle size (purged)
- Easy customization
- Responsive utilities built-in
- Dark mode support (future)

### 10.2 Design Tokens (CSS Variables)

> **Note:** See `DESIGN_SYSTEM.md` for complete color palette and theme specifications.

**Brand Color:** #72117d (Purple)
**Theme:** Light + Dark mode with toggle
**Accent:** #06b6d4 (Cyan - for AI/tech contrast)

```css
:root {
  /* Colors - Primary (Purple Brand) */
  --color-primary: #72117d;       /* Main brand purple */
  --color-primary-light: #a855f7; /* Lighter purple */
  --color-primary-dark: #581061;  /* Darker purple */
  --color-accent: #06b6d4;        /* Cyan accent for AI feel */

  /* Colors - Neutral (Light Mode) */
  --color-text: #0f172a;
  --color-text-muted: #475569;
  --color-bg: #ffffff;
  --color-bg-alt: #f8fafc;
  --color-bg-card: #ffffff;
  --color-border: #e2e8f0;

  /* Typography */
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing */
  --spacing-section: 6rem;
  --spacing-section-mobile: 4rem;

  /* Container */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
}

/* Dark Mode */
[data-theme="dark"] {
  --color-text: #f1f5f9;
  --color-text-muted: #94a3b8;
  --color-bg: #0a0a0f;
  --color-bg-alt: #12121a;
  --color-bg-card: #1a1a25;
  --color-border: #1e293b;
}
```

### 10.3 Typography Scale

| Size | Mobile | Desktop | Usage |
|------|--------|---------|-------|
| H1 | 2rem (32px) | 3rem (48px) | Page titles |
| H2 | 1.5rem (24px) | 2.25rem (36px) | Section titles |
| H3 | 1.25rem (20px) | 1.5rem (24px) | Card titles |
| Body | 1rem (16px) | 1rem (16px) | Body text |
| Small | 0.875rem (14px) | 0.875rem (14px) | Labels, captions |

### 10.4 Color Usage

| Role | Usage | Value |
|------|-------|-------|
| Primary | CTAs, links, accents | #72117d (purple) |
| Accent | AI/tech highlights | #06b6d4 (cyan) |
| Gradient | Hero text, buttons | Purple → Cyan |
| Secondary | Secondary actions | Outline with purple |
| Success | Success states | #22c55e |
| Warning | Warning states | #eab308 |
| Error | Error states | #ef4444 |
| Neutral | Text, backgrounds | #0f172a - #ffffff (light), #f1f5f9 - #0a0a0f (dark) |

### 10.5 Visual Effects

**Gradient Text:** For hero headings and key CTAs
```css
background: linear-gradient(135deg, #72117d 0%, #a855f7 50%, #06b6d4 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**Purple Glow:** On hover for cards and buttons
```css
box-shadow: 0 4px 30px rgba(114, 17, 125, 0.3);
```

**Glassmorphism:** For header and overlays (dark mode)
```css
background: rgba(26, 26, 37, 0.8);
backdrop-filter: blur(12px);
```

### 10.6 Component Styling Pattern

```svelte
<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';

  interface Props extends HTMLButtonAttributes {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
  }

  let {
    variant = 'primary',
    size = 'md',
    class: className = '',
    ...rest
  }: Props = $props();
</script>

<button
  class="btn btn-{variant} btn-{size} {className}"
  {...rest}
>
  <slot />
</button>
```

---

## 11. Deployment Flow

### 11.1 CI/CD Pipeline

```
git push
    ↓
GitHub Actions / GitLab CI
    ↓
1. Install dependencies
2. Run tests (if any)
3. Type check (tsc --noEmit)
4. Build SvelteKit (npm run build)
5. Optimize images (if needed)
    ↓
Deploy to:
├── Netlify (recommended)
├── Vercel
├── Cloudflare Pages
└── AWS S3 + CloudFront
```

### 11.2 Netlify Configuration

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "build"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=3600"
```

### 11.3 Environment Variables

```
# .env.production
VITE_SITE_URL=https://finther.my
VITE_API_URL=/api/contact
VITE_GA_ID=G-XXXXXXXXXX
```

### 11.4 Pre-deploy Checklist

- [ ] All pages accessible at correct routes
- [ ] Images optimized and loading correctly
- [ ] Meta tags present on all pages
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Contact form working
- [ ] Forms have spam protection
- [ ] External links open in new tab with rel="noopener"
- [ ] No console errors
- [ ] Mobile responsive test passed
- [ ] Accessibility audit passed (WCAG AA)

---

## 12. Risks and Tradeoffs

### 12.1 Content Format

| Decision | Tradeoff | Mitigation |
|----------|----------|------------|
| JSON over Markdown | Less editable by non-devs | Build simple CMS admin UI later |
| Static JSON | Requires rebuild to update | Consider headless CMS for future |

### 12.2 Image Management

| Decision | Tradeoff | Mitigation |
|----------|----------|------------|
| Local images | Manual optimization required | Build script to optimize images |
| No CDN initially | Slower image loads globally | Use image hosting service later |

### 12.3 Form Handling

| Decision | Tradeoff | Mitigation |
|----------|----------|------------|
| Server action for contact | No static cache for contact page | Use separate API route, cache GET |
| No form service | Manual spam protection needed | Add honeypot + rate limiting |

### 12.4 Component Complexity

| Decision | Tradeoff | Mitigation |
|----------|----------|------------|
| Reusable components | More upfront code | Library of components for reuse |
| TypeScript | More verbose | Better DX, catch errors early |

### 12.5 Known Limitations

1. **Content Updates**: Currently requires JSON file edit + rebuild
   - Future: Consider TinaCMS, Sanity, or Contentful

2. **Search**: No built-in search
   - Future: Add Pagefind or Algolia

3. **Blog/Resources**: Not in current scope
   - Structure allows easy addition via `/blog/` routes

4. **Multi-language**: English only initially
   - Future: Use `sveltekit-i18n` if needed

5. **Animations**: Limited to CSS transitions
   - Future: Add Motion One or Framer Motion

### 12.6 Migration Checklist

- [ ] Extract and clean all content from WordPress JSON
- [ ] Transform content to schema-compliant JSON
- [ ] Optimize and organize all images
- [ ] Create partner logo SVGs where possible
- [ ] Define CSS custom properties
- [ ] Set up Tailwind config
- [ ] Create base component library
- [ ] Build layout components (Header, Footer)
- [ ] Implement page templates
- [ ] Migrate content page by page
- [ ] Test responsive breakpoints
- [ ] Run accessibility audit
- [ ] Configure SEO meta tags
- [ ] Set up analytics
- [ ] Deploy to staging
- [ ] Final testing and QA

---

## Appendix A: Content Migration Priority

### Phase 1 (MVP)
1. Home page
2. About Us
3. Services
4. Contact

### Phase 2
5. AWS solutions page
6. Knowledge Base (case studies)

### Phase 3
7. Career page
8. Additional resources

---

## Appendix B: Technology Stack Summary

| Category | Technology |
|----------|------------|
| Framework | SvelteKit 2.x |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS 3.x |
| Deployment | Netlify / Vercel |
| Analytics | Google Analytics 4 |
| Forms | Server actions |
| Fonts | Inter (headings + body), JetBrains Mono (code) |
| Icons | Lucide Svelte / Heroicons |
| Theme | Light + Dark mode with toggle |
| Animations | CSS + Svelte transitions |

---

**Document Version:** 1.1
**Last Updated:** 2024
**Status:** Ready for Implementation
