# Components Lab

Components Lab is a component library and showcase application built with React 19, TypeScript, Vite, and Tailwind CSS v4.

Muhammad Awais. Month 3 monthly project, Frontend Engineering Internship.

## Overview

- Stack: React 19, TypeScript 6, Vite 8, Tailwind CSS 4, and Storybook 10.
- Component count: 18 components across primitives, composites, and interactive tiers.
- Themes: light and dark color schemes defined in src/index.css and controlled via ThemeProvider.
- Type safety: strict TypeScript with zero any in component props.
- Storybook: isolated component stories with accessibility and documentation addons, featuring instant zero-flicker theme synchronization.

## Deployments

- [Live Application](https://awais-bscss.github.io/components-lab/): Interactive showcase and documentation for all components.
- [Storybook Documentation](https://awais-bscss.github.io/components-lab/storybook/): Component workshop with isolated stories, documentation, and controls.
- [GitHub Actions Workflow](.github/workflows/deploy.yml): Automated CI/CD pipeline building and publishing both the application and Storybook to GitHub Pages on every push to main.

## Tech stack

| Tool | Purpose | Version |
| --- | --- | --- |
| React | UI library | ^19.2.8 |
| TypeScript | Type checking | ~6.0.2 |
| Vite | Build tool and dev server | ^8.3.0 |
| Tailwind CSS | Utility CSS styling | ^4.3.3 |
| Storybook | Component workshop | ^10.6.2 |
| Oxlint | JavaScript and TypeScript linter | ^1.81.0 |
| Lucide React | Icon set | ^1.57.0 |
| Class Variance Authority | Variant styling management | ^0.7.1 |

## Getting started

Node.js 18 or higher is required.

```bash
npm install
npm run dev
npm run storybook
```

## Scripts

| Script | Command | Purpose |
| --- | --- | --- |
| dev | vite | Starts the Vite development server |
| build | tsc -b && vite build | Compiles TypeScript and builds production bundle |
| lint | oxlint | Runs Oxlint linter |
| preview | vite preview | Previews the production build locally |
| storybook | storybook dev -p 6006 | Starts Storybook dev server on port 6006 |
| build-storybook | storybook build | Builds static Storybook output |

## Components

### Primitives

| Component | Description |
| --- | --- |
| [Avatar](src/components/primitives/Avatar/README.md) | User profile image with initials fallback |
| [Badge](src/components/primitives/Badge/README.md) | Status indicator with optional dot |
| [Button](src/components/primitives/Button/README.md) | Clickable control with variants, sizes, and loading state |
| [Chip](src/components/primitives/Chip/README.md) | Interactive compact tag with click and remove actions |
| [Divider](src/components/primitives/Divider/README.md) | Separator line with optional center label |
| [Input](src/components/primitives/Input/README.md) | Text field with label, error, hint, and icon slots |
| [Skeleton](src/components/primitives/Skeleton/README.md) | Placeholder element with pulse and wave shimmer animations |
| [Spinner](src/components/primitives/Spinner/README.md) | Rotating loading indicator with status role |
| [Typography](src/components/primitives/Typography/README.md) | Heading and Text components with density scale |

### Composites

| Component | Description |
| --- | --- |
| [Alert](src/components/composites/Alert/README.md) | Feedback box with status roles and dismiss button |
| [Card](src/components/composites/Card/README.md) | Compound container with Header, Body, and Footer |
| [EmptyState](src/components/composites/EmptyState/README.md) | Placeholder view for zero-data states, cleared filters, or onboarding guidance |
| [Modal](src/components/composites/Modal/README.md) | Dialog rendered in portal with focus trap and scroll lock |
| [Progress](src/components/composites/Progress/README.md) | Progressbar with determinate and indeterminate modes |
| [Tooltip](src/components/composites/Tooltip/README.md) | Hover and focus popup positioned around an element |

### Interactive

| Component | Description |
| --- | --- |
| [Accordion](src/components/interactive/Accordion/README.md) | Collapsible disclosure panels with arrow key navigation |
| [DataTable](src/components/interactive/DataTable/README.md) | Typed table with column sorting and search filter |
| [Tabs](src/components/interactive/Tabs/README.md) | Tabbed interface with WAI-ARIA roving tabindex |

## Project structure

- src/assets: Static graphics and logos.
- src/components: UI components organized into primitives, composites, interactive, and showcase.
- src/context: ThemeContext and ThemeProvider for light and dark modes.
- src/hooks: Custom hooks for hash routing and theme access.
- src/icons: Icon components re-exported from lucide-react.
- src/layouts: App layout, sidebar navigation, header, and theme toggle.
- src/lib: Shared utilities including cn class merger.
- src/navigation: Navigation items and PageId types.
- src/pages: Documentation and live demo pages for each component.

## Architecture summaries

Theming uses CSS variables in src/index.css under :root and .dark, exposed through Tailwind @theme inline. The palette uses neutral dark and light surfaces with indigo primary accents, maintaining minimum 4.5:1 contrast ratios across all states.

Storybook documentation theme synchronizes with the document root class via useSyncExternalStore in .storybook/DocsContainer.tsx, ensuring instantaneous theme switching without render lag or background flicker.

Composites demonstrate compound patterns integrating multiple primitives, such as Card variants (default, elevated, outlined, ghost) with embedded Avatars, Badges, Chips, and Progress indicators.

Typography scale uses Inter font with base size text-sm (14px) and secondary text-xs (12px) for high density.

Accessibility follows WAI-ARIA patterns with skip links, visible focus rings, aria-describedby for errors, and roving tabindex for tabs.

## Key technical decisions

- Tailwind CSS v4 @theme inline: Centralizes semantic tokens in CSS variables without a JavaScript configuration file.
- Relative asset paths (base: './'): Configured in vite.config.ts to support static hosting in repository subpaths like GitHub Pages.
- GitHub Actions CI/CD: Automated deployment workflow in .github/workflows/deploy.yml building both the showcase app and static Storybook docs.
- Hash routing: Keeps the showcase navigable without server routing configuration on static hosts.
- Centralized icon module: Re-exports icons from lucide-react with default w-4 h-4 sizing to keep components consistent.
- Compound components for Card: Separates header, body, and footer so consumers can customize layout without extra props.
- Portal rendering for Modal: Renders dialogs at document.body to prevent parent overflow and z-index clipping.

## Known limitations

- Tooltip uses absolute positioning and can clip inside containers with overflow hidden.
- DataTable supports client-side sorting and filtering only; server pagination is not implemented.
- Avatar does not handle image load errors with automatic fallback to initials.
- Modal requires a title prop for aria-labelledby binding.

## Adding a component

1. Create the component directory under src/components/(primitives|composites|interactive)/ComponentName/.
2. Implement ComponentName.tsx using cva for variants and cn for class names.
3. Export the component and its types in index.ts and the tier index.ts.
4. Create ComponentName.stories.tsx and README.md in the component directory.
5. Create a demo page under src/pages/ and register its PageId in src/navigation/index.ts.
