# Tirth Bhatt - Personal Website

A modern personal website and portfolio built with Next.js, featuring an AI chat assistant, case studies showcase, and interactive artifacts.

## Features

- **Next.js App Router**
  - Advanced routing for seamless navigation and performance
  - React Server Components (RSCs) and Server Actions for server-side rendering
- **AI Chat Assistant**
  - Interactive chat interface powered by AI SDK
  - Supports multiple AI model providers
  - Chat history and persistence
- **Case Studies Portfolio**
  - Showcase of work and projects
  - Detailed case study pages with metrics and outcomes
- **Artifacts**
  - Interactive code editors
  - Document previews
  - Image editors
  - Spreadsheet editors
- **Authentication**
  - Secure user authentication with Auth.js
- **UI Components**
  - Built with [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - Accessible components from [Radix UI](https://radix-ui.com)

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [AI SDK](https://ai-sdk.dev) - AI model integration
- [Drizzle ORM](https://orm.drizzle.team) - Database ORM
- [Auth.js](https://authjs.dev) - Authentication
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (package manager)
- PostgreSQL database
- Environment variables configured (see `.env.example`)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tirthbhatt-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in all required environment variables

4. Set up the database:
```bash
pnpm db:migrate
```

5. Run the development server:
```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run linter
- `pnpm format` - Format code
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Drizzle Studio
- `pnpm test` - Run tests

## Project Structure

- `app/` - Next.js app router pages and routes
- `components/` - React components
- `lib/` - Utility functions and configurations
- `data/` - Static data (case studies, etc.)
- `hooks/` - Custom React hooks
- `artifacts/` - Artifact-related code (editors, previews)

## License

See [LICENSE](LICENSE) file for details.
