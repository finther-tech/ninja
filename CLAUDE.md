# Finther.my - Implementation Guide for Claude

This guide provides the structured approach for rebuilding Finther.my using SvelteKit based on the architecture blueprint.

## Quick Reference

**Project Status:** Planning → Setup → Content Migration → Components → Pages → Deploy

**Current Context:**
- Company: FINTEC (IT Observability & Network Performance Monitoring)
- Original Site: WordPress with Elementor
- Content: Extracted to `/extract/` folder
- Goal: Static SSG with SvelteKit

---

## Phase 1: Project Initialization

### 1.1 Create SvelteKit Project

```bash
npm create svelte@latest finther-site -- --template skeleton --types typescript --no-prettier --no-eslint --no-playwright --no-vitest
cd finther-site
npm install
```

### 1.2 Install Dependencies

```bash
# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Additional utilities
npm install -D @sveltejs/adapter-static

# Icons (optional, can use inline SVGs)
npm install lucide-svelte

# Form validation (for contact form)
npm install zod
```

### 1.3 Configure Files

**svelte.config.js:**
```js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    })
  }
};
```

**tailwind.config.js:**
```js
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e64f18',
          dark: '#c44012',
          light: '#ff6b32'
        },
        secondary: {
          DEFAULT: '#4054b2'
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Nunito Sans', 'sans-serif']
      }
    }
  }
};
```

---

## Phase 2: Content Structure & Types

### 2.1 Create Content Types

**`src/lib/types/content.ts`:**
```typescript
export interface PageContent {
  slug: string;
  title: string;
  description?: string;
  hero: HeroSection;
  sections: Section[];
  seo?: SEO;
}

export interface HeroSection {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

export type Section =
  | TwoColumnSection
  | FeatureGridSection
  | FlipCardSection
  | TabsSection
  | AccordionSection
  | BannerSection;

export interface TwoColumnSection {
  type: 'two-column';
  label?: string;
  title?: string;
  image: string;
  imagePosition: 'left' | 'right';
  content: string;
  backgroundImage?: string;
}

export interface FeatureGridSection {
  type: 'feature-grid';
  label?: string;
  title?: string;
  features: Feature[];
}

export interface Feature {
  icon?: string;
  title: string;
  description: string;
}

// ... more types as needed
```

### 2.2 Content Loading Utilities

**`src/lib/content/loaders.ts`:**
```typescript
import type { PageContent } from '$lib/types/content';

const pages = import.meta.glob('/content/pages/*.json', { eager: true });

export async function getPage(slug: string): Promise<PageContent | null> {
  const key = `/content/pages/${slug}.json`;
  const page = pages[key];
  return page?.default || null;
}

export async function getAllPages(): Promise<PageContent[]> {
  return Object.values(pages).map((mod: any) => mod.default);
}

export async function getNavigation() {
  return [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/aws', label: 'AWS' },
    { href: '/knowledge-base', label: 'Knowledge Base' },
    { href: '/career', label: 'Career' },
    { href: '/contact', label: 'Contact' }
  ];
}
```

---

## Phase 3: Component Library Build Order

Build components in this order:

### 3.1 Base UI Components (Priority 1)
```
src/lib/components/ui/
├── Button.svelte           # Primary, secondary, outline variants
├── Container.svelte        # Max-width wrapper
├── Section.svelte          # Spacing wrapper
├── Grid.svelte             # Responsive grid
├── Heading.svelte          # H1-H6 with size variants
├── Text.svelte             # Body text with variants
└── Label.svelte            # Section labels (// About Us)
```

### 3.2 Layout Components (Priority 2)
```
src/lib/components/layout/
├── Header.svelte           # Logo + Navigation
├── Footer.svelte           # Footer links + copyright
├── Navigation.svelte       # Desktop nav
├── MobileMenu.svelte       # Mobile hamburger menu
└── SEO.svelte             # Meta tags
```

### 3.3 Section Components (Priority 3)
```
src/lib/components/sections/
├── Hero.svelte            # Page hero with background
├── TwoColumn.svelte       # Image + content side by side
├── FeatureGrid.svelte     # 3-column feature cards
├── FlipCard.svelte        # Interactive flip cards
├── Tabs.svelte            # Tabbed content
├── Accordion.svelte       # Expandable content
└── Banner.svelte          # Full-width CTA
```

---

## Phase 4: Page Implementation Order

Implement pages in this order (most important first):

### Page 1: Home (`/`)
**Components needed:**
- Hero section
- Two-column sections (2-3)
- Feature grid
- Partner logo grid
- CTA banner

### Page 2: About (`/about`)
**Components needed:**
- Hero section
- Two-column sections
- Flip cards (Vision, Mission, Philosophy, Strategy)
- Team section (future)

### Page 3: Services (`/services`)
**Components needed:**
- Hero section
- Two-column with service overview
- Feature grid (job scopes)
- Three-column section

### Page 4: Contact (`/contact`)
**Components needed:**
- Hero section
- Contact form
- Contact info
- Map embed

### Page 5: AWS (`/aws`)
**Components needed:**
- Hero section
- Two-column sections
- Accordion (use cases)

### Page 6: Knowledge Base (`/knowledge-base`)
**Components needed:**
- Hero section
- Two-column with case study intro
- Tabs (SLO vs SLI content)
- Table component

### Page 7: Career (`/career`)
**Components needed:**
- Hero section
- Two-column sections
- Company values carousel (or grid)

---

## Phase 5: Content Migration Tasks

### 5.1 Image Processing

```bash
# Create organized image structure
mkdir -p public/images/{heroes,about,services,logos,team,aws,knowledge-base}

# Images to extract and rename from extract folder:
# - Hero images: observability-1024x512.jpg, etc.
# - About images: info-1024x1024.png, image1-about.png
# - Service images: First_Image-1024x638.jpg, Second_Image.png
# - Logos: accedian-1.png, datadog-1.png, kentik.png, New_Relic-5.png
# - Value icons: F.png, I.png, N.png, T.png, E-2.png, c-.png
```

### 5.2 Content Transformation

For each page in `extract/pages-clean-array.json`:

1. Parse HTML content from WordPress/Elementor
2. Extract section structure
3. Transform to clean JSON schema
4. Sanitize and clean text content
5. Map image URLs to new paths

### 5.3 Company Info Extraction

Extract to `content/company.json`:
- Company values (F, I, N, T, E, C icons)
- Vision statement
- Mission statement
- Philosophy
- Strategy

---

## Phase 6: Styling Implementation

### 6.1 Global Styles (`src/styles/global.css`)

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@layer base {
  :root {
    --color-primary: #e64f18;
    --color-secondary: #4054b2;
    --font-heading: 'Montserrat', sans-serif;
    --font-body: 'Nunito Sans', sans-serif;
  }

  html {
    font-family: var(--font-body);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
  }
}
```

### 6.2 Component-specific styles

Keep component styles within each Svelte file using `<style>` blocks with Tailwind classes.

---

## Phase 7: Interactive Features

### 7.1 Contact Form

**`src/routes/contact/+page.server.ts`:**
```typescript
import { fail } from '@sveltejs/kit';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10)
});

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      return fail(400, { errors: result.error.flatten() });
    }

    // Send email or store in database
    // TODO: Implement email sending

    return { success: true };
  }
};
```

### 7.2 Mobile Menu

Use Svelte stores for menu state:
```typescript
// src/lib/stores/navigation.ts
import { writable } from 'svelte/store';

export const mobileMenuOpen = writable(false);
```

---

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Type checking
npm run check

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Testing Checklist

Before each deployment:

- [ ] All pages render without errors
- [ ] All images load correctly
- [ ] Navigation works on all pages
- [ ] Mobile menu functions
- [ ] Contact form submits (check validation)
- [ ] No console errors
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] Meta tags present (view source)
- [ ] Accessibility basics (alt tags, aria-labels)

---

## File Reference When Coding

### Component Pattern

```svelte
<script lang="ts">
  interface Props {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
  }

  let { variant = 'primary', size = 'md' }: Props = $props();
</script>

<button class="btn btn-{variant} btn-{size}">
  <slot />
</button>

<style>
  /* Scoped styles if needed beyond Tailwind */
</style>
```

### Page Load Pattern

```svelte
<!-- +page.svelte -->
<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;

  // Destructure for cleaner templates
  const { page } = data;
</script>

<Hero {...page.hero} />

{#each page.sections as section}
  <svelte:component this={getComponent(section.type)} {...section} />
{/each}
```

```typescript
// +page.server.ts
export async function load({ params }) {
  const page = await getPage(params.slug || 'home');
  const navigation = await getNavigation();

  if (!page) {
    throw error(404, 'Page not found');
  }

  return { page, navigation };
}
```

---

## Common Tasks Reference

### Add a new page:
1. Create `src/routes/{slug}/+page.svelte`
2. Create `src/routes/{slug}/+page.server.ts`
3. Add content to `content/pages/{slug}.json`
4. Add to navigation array in `loaders.ts`

### Add a new section component:
1. Create `src/lib/components/sections/NewSection.svelte`
2. Add TypeScript interface to `types/content.ts`
3. Import and export from `components/index.ts`
4. Add to component mapping in page templates

### Update site-wide styles:
1. Edit `src/styles/global.css`
2. Or update `tailwind.config.js` for design tokens
3. Or update CSS custom properties in `:root`

---

**Last Updated:** 2024
**Next Step:** Initialize SvelteKit project and set up basic folder structure
