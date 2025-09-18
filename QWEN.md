# Hollow Knight - Hallownest Explorer (Astro Version) - Context for Qwen Code

This document provides context for Qwen Code to understand and assist with the "Hollow Knight - Hallownest Explorer" project, an Astro-based remake of a previous Vanilla JS project.

## Project Overview

This is a static website built with Astro, recreating a previous project originally made with Vanilla JavaScript, HTML, and CSS. The site is a fan tribute to the game "Hollow Knight", offering an immersive experience into its world, Hallownest. It features responsive design, smooth navigation, and interactive elements themed around the game.

Key technologies used are:
- **Astro**: Core framework for building the static site.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Used for type checking (strict mode).

## Project Structure

```
hollowKnight-astro/
├── src/
│   ├── assets/         # Static assets (images, etc.)
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Layout components (e.g., main page structure)
│   ├── pages/          # Page components (e.g., index.astro)
│   └── styles/         # Global styles (global.css)
├── public/             # Publicly accessible files (favicon, images)
├── astro.config.mjs    # Astro configuration file
├── package.json        # Project scripts and dependencies (used by Bun)
├── tsconfig.json       # TypeScript configuration
└── biome.json          # Biome (linter/formatter) configuration
```

## Building and Running

### Development

To start the development server with hot reloading:
```bash
bun run dev
```
This command uses `astro dev`.

### Building for Production

To create a production build:
```bash
bun run build
```
This command uses `astro build`.

### Previewing the Build

To preview the production build locally:
```bash
bun run preview
```
This command uses `astro preview`.

## Development Conventions

- **Styling**: Uses Tailwind CSS extensively for styling components and layouts. Custom animations are defined in `src/styles/global.css`.
- **Component Structure**: Follows a component-based architecture with Astro components (`.astro` files) for UI elements, layouts, and pages.
- **Routing**: File-based routing in the `src/pages/` directory.
- **Code Quality**: Uses Biome for linting and formatting, configured via `biome.json`. Single quotes are preferred for JavaScript.
- **Type Checking**: TypeScript is used with a strict configuration (`tsconfig.json`).
- **Asset Management**: Images and other static assets are placed in the `public/` directory for direct access or in `src/assets/` for import.
