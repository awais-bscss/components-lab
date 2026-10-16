# Components Lab

Components Lab is a production-grade UI design system and component laboratory built with React 19, TypeScript (strict mode), Vite, Tailwind CSS v4, and Lucide React. The project contains 17 fully accessible, strongly-typed components configured for high-density, modern dashboard applications inspired by tools like Linear and Jira.

## Setup and Commands

Install project dependencies:
```bash
npm install
```

Start the development server with HMR:
```bash
npm run dev
```

Run Storybook component workshop:
```bash
npm run storybook
```

Build the production bundle with strict TypeScript validation:
```bash
npm run build
```

Build static Storybook documentation:
```bash
npm run build-storybook
```

Run Oxlint for fast code quality checks:
```bash
npm run lint
```

## Component Catalog (17 Components)

The design system is organized into three atomic tiers:

### 1. Primitives (9 Components)
Fundamental building blocks that handle single visual or structural jobs:
- **Button**: Accessible interactive button with variants, sizes, icon slots, and loading spinner state.
- **Input**: Form input with floating labels, error/hint descriptions, icon slots, and full ARIA wiring.
- **Badge**: Small status labels for tagging content with semantic colors and optional status dots.
- **Chip**: Interactive tag with selection, click handlers, and keyboard-friendly removable actions.
- **Avatar**: User avatar with image loading, deterministic initials fallback, and status dot indicators.
- **Skeleton**: Placeholder loading preview with text, circular, and rectangular shapes plus shimmer wave animation.
- **Spinner**: Accessible circular progress indicator with role="status" and screen-reader fallback.
- **Divider**: Horizontal and vertical content separators with optional text labels.
- **Typography**: Strongly-typed Heading and Text primitives built on compact Inter font scales.

### 2. Composites (5 Components)
Multi-element components assembled from primitives to solve common user flows:
- **Card**: Compound container with Card.Header, Card.Body, and Card.Footer sub-components.
- **Alert**: Feedback banner with semantic color themes, urgent alert roles, and dismiss actions.
- **Modal**: Accessible dialog rendered in a React portal with focus trap, body scroll lock, and Escape key dismissal.
- **Tooltip**: Hover and focus contextual popups linked via aria-describedby with Escape dismissal.
- **Progress**: Determinate and indeterminate progress bar with custom styling and ARIA attributes.

### 3. Interactive (3 Components)
Data-heavy and complex stateful components:
- **DataTable**: Generic typed table supporting search filtering, multi-type column sorting, and row keyboard triggers.
- **Accordion**: Collapsible disclosure panel with keyboard navigation (Arrows, Home, End) and single or multi-expand modes.
- **Tabs**: Tabbed interface adhering to WAI-ARIA tablist pattern with roving tabindex and Arrow key navigation.

## Folder Structure

```
src/
  components/
    primitives/    (Avatar, Badge, Button, Chip, Divider, Input, Skeleton, Spinner, Typography)
    composites/    (Alert, Card, Modal, Progress, Tooltip)
    interactive/   (Accordion, DataTable, Tabs)
    showcase/      (PageHeader, Section documentation helpers)
  context/         (ThemeContext.ts, ThemeProvider.tsx)
  hooks/           (useTheme.ts, useHashRoute.ts)
  icons/           (Centralized icon module powered by lucide-react)
  layouts/         (AppLayout, Header, Sidebar, SidebarItem, SidebarSection, ThemeToggle)
  lib/             (cn.ts utility merging clsx and tailwind-merge)
  navigation/      (NAV structure and PageId types)
  pages/           (Live showcase and documentation pages)
  index.css        (Semantic CSS variable design tokens and Tailwind theme configuration)
  main.tsx         (Application entry point)
  App.tsx          (Root component hosting layout and active page)
```

## Theming Architecture

Theming is built on semantic CSS variables declared on `:root` and `.dark` in `src/index.css`:
- Tailwind CSS v4 exposes these tokens via `@theme inline`, enabling utilities such as `bg-surface`, `text-foreground`, `border-border`, and `bg-primary-soft`.
- Components and layouts never check `theme === 'dark'` directly in code. They style themselves using semantic utility classes that adapt automatically to both themes.
- Light mode uses a clean slate/white palette with indigo accents. Dark mode retains deep slate/zinc tones with high-contrast text.
- Contrast ratios exceed WCAG AA requirements (minimum 4.5:1 for body and secondary text in both themes).
- Theme preferences are saved to `localStorage` under `cl_theme`. A pre-paint inline script in `index.html` applies the saved theme class to `document.documentElement` to prevent flash of unstyled content (FOUC).

## Typography Scale

The system implements a compact density scale:
- Base body text and table cells: `text-sm` (14px).
- Secondary, helper, and caption text: `text-xs` (12px).
- Section labels: `text-xs font-semibold uppercase tracking-wide text-muted-foreground`.
- Page title (`PageHeader`): `text-2xl font-semibold tracking-tight`.
- Card, Modal, and Accordion titles: `text-sm` or `text-base font-semibold`.
- Table header: `text-xs font-semibold uppercase text-muted-foreground`. Table row padding: `px-4 py-3`.
- Interactive control heights:
  - Small (`sm`): `h-8` (`text-xs`)
  - Medium (`md`): `h-9` (`text-sm`)
  - Large (`lg`): `h-10` (`text-sm`)

## Accessibility (a11y) Standards

- **Skip Link**: A dedicated skip link (`Skip to main content`) is the first focusable element on every page.
- **Focus Indicators**: Interactive elements implement visible `focus-visible` rings with `ring-offset-background`.
- **Keyboard Navigation**:
  - Tabs: roving tabindex with Arrow, Home, and End keys.
  - Accordion: Arrow, Home, and End keys between headers.
  - DataTable: Enter and Space keys trigger clickable row actions.
  - Modal & Mobile Drawer: Tab and Shift+Tab focus trap, Escape key dismissal, and focus restoration to the trigger element upon closing.
  - Tooltip: Dismisses on Escape, triggers on focus as well as hover.
- **ARIA Roles & Attributes**:
  - `role="status"` on Spinner and Skeleton.
  - `role="alert"` for warning/error alerts, and `role="status"` for info/success alerts.
  - `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.
  - `role="separator"` on horizontal and vertical Divider elements.
  - `aria-invalid` and `aria-describedby` dynamically linking input errors and hints.
  - Sortable table headers contain native button elements with dynamic `aria-sort`.
- **Clean DOM Hierarchy**: Chip components never nest `<button>` elements inside `<button>`, avoiding invalid HTML and screen reader conflicts.
