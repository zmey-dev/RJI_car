# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CarVista is a premium auto marketplace application built with React, TypeScript, and Vite. It features a modern UI with multi-language support (English, Portuguese, and Brazilian Portuguese) and includes user authentication with role-based access.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Architecture

### Core Technologies
- **React 18** with TypeScript for the frontend framework
- **Vite** as the build tool and dev server
- **Tailwind CSS** for styling with **shadcn/ui** components library
- **React Router DOM** for client-side routing
- **Tanstack Query** for server state management
- **i18next** for internationalization support
- **React Hook Form** with Zod for form handling and validation

### Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui primitives (button, dialog, etc.)
│   └── auth/        # Authentication-related components
├── contexts/        # React contexts (AuthContext for user state)
├── hooks/           # Custom React hooks
├── lib/            # Utilities and core configurations
│   ├── i18n.ts     # i18next configuration
│   └── utils.ts    # Utility functions and cn() helper
├── locales/        # Translation JSON files for each language
├── pages/          # Route-level components
└── assets/         # Static assets (images)
```

### Key Patterns

1. **Component Architecture**: The app uses shadcn/ui components built on Radix UI primitives. All UI components are in `src/components/ui/` and follow the shadcn/ui pattern.

2. **Routing**: React Router DOM handles client-side routing. Main routes are defined in `App.tsx`. The catch-all route (`*`) must remain at the bottom of the route list.

3. **State Management**: 
   - Tanstack Query for server state
   - Context API for authentication state (`AuthContext`)
   - Local component state with React hooks

4. **Internationalization**: i18next is configured with automatic language detection. Translation files are in `src/locales/[lang]/translation.json`.

5. **Styling**: Tailwind CSS with custom configuration. The `cn()` utility from `lib/utils.ts` is used for conditional class names.

6. **Path Aliases**: TypeScript is configured with `@/*` alias pointing to `src/*` directory.

## Important Configuration

- **Vite Config**: Development server runs on port 8080 with IPv6 support (`::`).
- **TypeScript**: Relaxed strictness settings (no implicit any, unused parameters, and null checks are disabled).
- **Deployment**: Configured for Vercel deployment with `vercel.json`.

## Component Dependencies

When creating new components:
1. Import UI primitives from `@/components/ui/`
2. Use the `cn()` utility for className composition
3. Follow existing component patterns in the codebase
4. Add translations to all locale files when adding new text