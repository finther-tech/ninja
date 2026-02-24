# Finther.my - Folder Structure Reference

Visual reference for the complete project structure.

```
finther/                          # Project root
│
├── 📁 src/                       # Source code
│   ├── 📁 routes/                # SvelteKit file-based routing
│   │   ├── +layout.svelte        # Root layout (header, footer wrapper)
│   │   ├── +layout.server.ts     # Server-side data for all pages
│   │   ├── +page.svelte          # Home page component
│   │   ├── +page.server.ts       # Home page data loader
│   │   │
│   │   ├── 📁 about/             # About page
│   │   │   ├── +page.svelte
│   │   │   └── +page.server.ts
│   │   │
│   │   ├── 📁 services/          # Services page
│   │   │   ├── +page.svelte
│   │   │   └── +page.server.ts
│   │   │
│   │   ├── 📁 aws/               # AWS solutions page
│   │   │   ├── +page.svelte
│   │   │   └── +page.server.ts
│   │   │
│   │   ├── 📁 knowledge-base/    # Knowledge base/case studies
│   │   │   ├── +page.svelte
│   │   │   └── +page.server.ts
│   │   │
│   │   ├── 📁 career/            # Careers page
│   │   │   ├── +page.svelte
│   │   │   └── +page.server.ts
│   │   │
│   │   ├── 📁 contact/           # Contact page
│   │   │   ├── +page.svelte
│   │   │   └── +page.server.ts
│   │   │
│   │   └── 📁 api/               # API routes
│   │       └── 📁 contact/       # Contact form endpoint
│   │           └── +server.ts
│   │
│   ├── 📁 lib/                   # Library code (reusable)
│   │   │
│   │   ├── 📁 components/        # Svelte components
│   │   │   │
│   │   │   ├── 📁 layout/        # Layout components
│   │   │   │   ├── Header.svelte         # Site header
│   │   │   │   ├── Footer.svelte         # Site footer
│   │   │   │   ├── Navigation.svelte     # Desktop nav
│   │   │   │   ├── MobileMenu.svelte     # Mobile menu
│   │   │   │   └── SEO.svelte            # Meta tags
│   │   │   │
│   │   │   ├── 📁 sections/      # Page section components
│   │   │   │   ├── Hero.svelte           # Hero/hero section
│   │   │   │   ├── TwoColumn.svelte      # Image + content
│   │   │   │   ├── FeatureGrid.svelte    # Feature cards grid
│   │   │   │   ├── FlipCard.svelte       # Interactive flip cards
│   │   │   │   ├── Tabs.svelte           # Tabbed content
│   │   │   │   ├── Accordion.svelte      # Expandable items
│   │   │   │   ├── Banner.svelte         # Full-width CTA
│   │   │   │   └── PartnerGrid.svelte    # Partner logos
│   │   │   │
│   │   │   ├── 📁 ui/            # Base UI components
│   │   │   │   ├── Button.svelte         # Button with variants
│   │   │   │   ├── Container.svelte      # Max-width wrapper
│   │   │   │   ├── Section.svelte        # Spacing wrapper
│   │   │   │   ├── Grid.svelte           # Responsive grid
│   │   │   │   ├── Heading.svelte        # H1-H6 with sizes
│   │   │   │   ├── Text.svelte           # Body text
│   │   │   │   ├── Label.svelte          # Section labels
│   │   │   │   ├── Icon.svelte           # SVG icon wrapper
│   │   │   │   └── Link.svelte           # Styled link
│   │   │   │
│   │   │   └── index.ts         # Component exports
│   │   │
│   │   ├── 📁 content/           # Content management
│   │   │   ├── loaders.ts               # Content loading utilities
│   │   │   ├── transformers.ts          # WordPress → JSON conversion
│   │   │   ├── validators.ts            # Schema validation
│   │   │   └── sanitizers.ts            # HTML sanitization
│   │   │
│   │   ├── 📁 stores/            # Svelte stores
│   │   │   ├── navigation.ts            # Nav state
│   │   │   ├── contact.ts               # Form state
│   │   │   └── theme.ts                 # Theme state (future)
│   │   │
│   │   ├── 📁 utils/            # Utility functions
│   │   │   ├── seo.ts                   # Meta tag generation
│   │   │   ├── images.ts                # Image helpers
│   │   │   ├── format.ts                # Text formatting
│   │   │   └── validation.ts            # Form validation
│   │   │
│   │   └── 📁 types/            # TypeScript types
│   │       └── content.ts               # Content interfaces
│   │
│   ├── 📁 styles/                # Styles
│   │   ├── global.css            # Global styles + Tailwind imports
│   │   └── components.css        # Component-specific styles (optional)
│   │
│   └── hooks.server.ts           # Server hooks
│
├── 📁 content/                   # Content files (JSON)
│   ├── pages.json                # All page content
│   │   # OR individual files:
│   ├── 📁 pages/
│   │   ├── home.json
│   │   ├── about.json
│   │   ├── services.json
│   │   ├── aws.json
│   │   ├── knowledge-base.json
│   │   ├── career.json
│   │   └── contact.json
│   │
│   ├── navigation.json           # Site navigation structure
│   ├── company.json              # Company info, values, mission
│   ├── partners.json             # Partner logo references
│   └── 📁 schema/                # JSON schemas for validation
│
├── 📁 public/                    # Static assets (served at root)
│   ├── 📁 images/                # Optimized images
│   │   ├── 📁 heroes/            # Hero/background images
│   │   │   ├── observability.jpg
│   │   │   └── ...
│   │   ├── 📁 about/             # About page images
│   │   │   ├── info.png
│   │   │   ├── image1-about.png
│   │   │   └── ...
│   │   ├── 📁 services/          # Services page images
│   │   │   ├── First_Image.jpg
│   │   │   ├── Second_Image.png
│   │   │   └── ...
│   │   ├── 📁 aws/               # AWS page images
│   │   │   ├── Draft-Architecture-CW.png
│   │   │   └── ...
│   │   ├── 📁 knowledge-base/    # Knowledge base images
│   │   │   ├── sda.png
│   │   │   ├── bg1-service1.jpg
│   │   │   └── ...
│   │   ├── 📁 logos/             # Partner & value logos
│   │   │   ├── accedian.png
│   │   │   ├── datadog.png
│   │   │   ├── kentik.png
│   │   │   ├── New_Relic.png
│   │   │   ├── F.png              # Flexibility
│   │   │   ├── I.png              # Integrity
│   │   │   ├── N.png              # Neatness
│   │   │   ├── T.png              # Timeliness
│   │   │   └── ...
│   │   └── 📁 team/              # Team member photos
│   │
│   ├── 📁 fonts/                 # Custom fonts (optional)
│   ├── 📁 icons/                 # SVG icons
│   ├── favicon.ico
│   └── robots.txt
│
├── 📁 static/                    # Additional static files
│   └── sitemap.xml               # Generated sitemap
│
├── 📁 extract/                   # Original WordPress extraction (reference)
│   ├── pages-clean-array.json
│   ├── image-links.txt
│   └── [original images...]
│
├── svelte.config.js              # SvelteKit configuration
├── vite.config.ts                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies
├── netlify.toml                  # Netlify deployment config
├── .gitignore
│
└── 📄 BUILD ARCHITECTURE DOCS
    ├── ARCHITECTURE.md           # Complete architecture blueprint
    ├── CLAUDE.md                 # Implementation guide for AI assistant
    └── FOLDER_STRUCTURE.md       # This file
```

---

## File Purposes Quick Reference

| File | Purpose |
|------|---------|
| `+layout.svelte` | Wraps all pages, adds header/footer |
| `+layout.server.ts` | Loads data shared across all pages |
| `+page.svelte` | Page component |
| `+page.server.ts` | Loads page-specific data |
| `+server.ts` | API endpoint |
| `svelte.config.js` | SvelteKit adapter and config |
| `vite.config.ts` | Vite build config |
| `tailwind.config.js` | Tailwind theme and design tokens |

---

## Import Patterns

### Component imports (preferred):
```typescript
import { Button, Container, Heading } from '$lib/components';
```

### Content imports:
```typescript
import { getPage, getNavigation } from '$lib/content/loaders';
import type { PageContent } from '$lib/types/content';
```

### Store imports:
```typescript
import { mobileMenuOpen } from '$lib/stores/navigation';
```

---

**This structure supports:**
- Static site generation (SSG)
- Server-side data loading
- Type-safe content management
- Easy content updates
- Scalable component library
- Future CMS integration
