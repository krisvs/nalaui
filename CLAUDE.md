# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **NalaUI** (package name: nalaui), a Vue 3 UI library and design system based on Nightshade UI. It provides a collection of Vue components with an integrated theming system and dependency injection architecture using mesh-ioc.

## Development Commands

```bash
# Development server (runs on port 8881)
npm run dev

# Build library for production
npm run build

# Lint code
npm run lint
```

## Architecture

### Core Structure
- **`lib/`** - Library source code
  - `app.ts` - BaseApp class with mesh-ioc integration
  - `plugin.ts` - Vue plugin for component registration
  - `index.ts` - Main library exports
- **`lib/components/`** - Vue components (Btn, VGroup, HGroup, etc.)
- **`lib/utils/`** - Utilities including ThemeManager
- **`lib/managers/`** - Application managers
- **`dev/`** - Development environment and demo pages
- **`stylesheets/`** - CSS design system files

### Dependency Injection
The library uses mesh-ioc for dependency injection. The BaseApp class:
- Creates a reactive Mesh instance
- Auto-registers all components globally
- Provides services through Vue's provide/inject system
- Manages ThemeManager as a service

### Component System
Components are Vue 3 SFC files exported from `lib/components/index.ts`. Available components include:
- Layout: VGroup, HGroup, HStack, Sizer
- Typography: Title, Subtitle, Text, Link
- Form: InputText, InputBase
- UI: Btn, Tab, TabCap, Icon, Image, Circle, Divider

### Theming
ThemeManager handles light/dark/auto theme switching:
- Persists theme preference to localStorage
- Applies CSS classes (`theme-light`, `theme-dark`) to document
- Listens for system theme changes
- Dispatches `themeChanged` events

### Build Configuration
- Uses Vite with Vue plugin and TypeScript
- Builds as ES modules with multiple entry points (bundle, components, utils)
- Generates TypeScript declarations via vite-plugin-dts
- External dependencies: vue, vue-router, mesh-ioc, nanoevent

### Styling
CSS architecture uses:
- `stylesheets/variables.css` - Design tokens
- `stylesheets/baseline.css` - Base styles and resets
- `stylesheets/full.css` - Complete stylesheet
- Component-specific styles in Vue SFCs

## Development Notes

When adding new components:
1. Create Vue SFC in `lib/components/`
2. Export from `lib/components/index.ts`
3. Component will auto-register via BaseApp or nalauiPlugin

When modifying build:
- Entry points defined in `vite.config.ts`
- External dependencies must be declared in rollupOptions
- TypeScript declarations generated for `lib/**` files