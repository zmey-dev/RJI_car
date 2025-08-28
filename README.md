# CarVista - Premium Auto Marketplace

A modern car showroom application built with React, TypeScript, and Vite.

## Features

- **Multi-language Support**: English, Brazilian Portuguese, and Portuguese
- **Premium UI**: Modern design with shadcn/ui components and Tailwind CSS
- **User Authentication**: Sign-up/Sign-in with account type selection
- **Professional Header**: Smart navigation with user menus and notifications
- **Responsive Design**: Optimized for all devices

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd car-kickstart-showroom-main

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the application
npm run build

# Preview the build
npm run preview
```

### Linting

```bash
npm run lint
```

## Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS
- **Internationalization**: i18next with react-i18next
- **State Management**: Tanstack Query
- **Routing**: React Router DOM

## Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (Auth, etc.)
├── lib/               # Utilities and configurations
├── locales/           # Translation files
└── pages/             # Route components
```

## Deployment

This project is configured for Vercel deployment with the included `vercel.json` configuration file.

## License

Private project - All rights reserved