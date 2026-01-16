# Nirvana Interiors

Experience the pinnacle of dark luxury. Nirvana Interiors offers bespoke architectural design and curated spaces for the uncompromising, featuring matte textures and metallic accents.

## Overview

Nirvana Interiors is a modern web application showcasing high-end interior design services. Built with cutting-edge web technologies, this platform provides an elegant user experience for discovering luxury interior design solutions, browsing portfolio work, and booking consultations.

## Features

- **Modern Design**: Responsive, elegant interface with dark luxury aesthetic
- **Portfolio Showcase**: Display of curated interior design projects
- **Consultation Booking**: Integrated consultation request system
- **SEO Optimized**: Built-in SEO support for search engine visibility
- **Performance Optimized**: Fast-loading pages with optimized assets
- **AI-Powered Features**: Smart consultation form handling with intelligent routing

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with PostCSS
- **Animations**: Framer Motion
- **Email Service**: Resend API
- **Icons**: Lucide React
- **Deployment**: Vercel-ready configuration

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nirvana-interiors
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env.local` file in the root directory
   - Add your API keys:
     ```
     VITE_RESEND_API_KEY=your_resend_api_key_here
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Scripts

- `npm run dev` - Start development server with hot module reloading
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally

## Project Structure

```
nirvana-interiors/
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── WoodSculptures.tsx
│   ├── BookingPage.tsx
│   ├── Contact.tsx
│   └── SEO.tsx
├── api/                # Backend API routes
│   └── send-consultation.js
├── lib/                # Utility functions
│   └── utils.ts
├── public/             # Static assets
├── index.tsx           # React entry point
├── App.tsx             # Root component
└── tailwind.config.js  # Tailwind configuration
```

## Configuration Files

- `vite.config.ts` - Vite bundler configuration
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration
- `vercel.json` - Vercel deployment configuration

## API Integration

### Consultation Form
The application uses the Resend email service for handling consultation requests. The API endpoint at `/api/send-consultation` processes form submissions and sends confirmations.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Performance

The application is optimized for:
- Fast initial load times
- Smooth animations and transitions
- Responsive design across all devices
- SEO compliance

## Deployment

The application is configured for deployment on Vercel. Simply push your code to your repository and Vercel will handle the build and deployment automatically.

## Development Guidelines

### Code Standards
- TypeScript for type safety
- React functional components with hooks
- Responsive design principles
- Accessible UI components

### Styling
- Utility-first CSS with Tailwind
- Mobile-first approach
- Consistent spacing and typography

## Troubleshooting

**Port already in use**: If port 5173 is already in use, Vite will automatically use the next available port.

**Missing dependencies**: Run `npm install` again to ensure all packages are properly installed.

**Build errors**: Clear the `.dist` folder and run `npm run build` again.

## License

This project is proprietary and confidential.

## Support

For questions or support regarding this project, please contact the development team.
