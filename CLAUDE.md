# Seek Strive Thrive Ecosystem - Instructions

> **Last Updated**: 2025-10-24
> **Version**: 1.0.0
> **Status**: Active Development - Mental Health & Wellness Platform

## What is Seek Strive Thrive?

**Seek Strive Thrive** is a mental health and wellness platform ecosystem within the GROWSZ biosphere. This ecosystem provides tools, resources, and community support for mental health awareness, personal development, and wellness tracking.

## Directory Structure

```
seek_strive_thrive_website/
├── nextjs_space/                    # Main Next.js application
│   ├── app/                         # Next.js App Router
│   ├── components/                  # React components
│   ├── hooks/                       # Custom React hooks
│   ├── lib/                         # Utility functions
│   ├── prisma/                      # Database schema & migrations
│   ├── public/                      # Static assets
│   ├── package.json                 # App dependencies
│   ├── next.config.js               # Next.js configuration
│   ├── tsconfig.json                # TypeScript configuration
│   └── .env                         # Environment variables
│
├── .claude/                         # Claude Code configuration
├── .deploy/                         # Deployment scripts
├── .logs/                           # Application logs
├── package.json                     # Ecosystem-level scripts
└── CLAUDE.md                        # This file

```

## Tech Stack

- **Framework**: Next.js 14.2.28
- **React**: 18.2.0
- **Language**: TypeScript 5.2.2
- **Database**: Prisma 6.7.0 (ORM)
- **Auth**: NextAuth 4.24.11
- **Styling**: Tailwind CSS 3.3.3
- **UI Components**: Radix UI, shadcn/ui
- **Package Manager**: Yarn (v1)
- **State Management**: Zustand 5.0.3, Jotai 2.6.0
- **Forms**: React Hook Form 7.53.0, Formik 2.4.5
- **Data Fetching**: TanStack Query 5.0.0, SWR 2.2.4

## Development Setup

### Prerequisites

```bash
# Ensure you have Node.js and Yarn installed
node --version  # Should be v18 or higher
yarn --version  # Should be v1.x
```

### Installation

```bash
# From ecosystem root
cd ecosystems/seek_strive_thrive_website

# Install application dependencies
yarn install:app

# Or navigate to nextjs_space
cd nextjs_space
yarn install
```

### Environment Variables

```bash
# Copy environment template
cd nextjs_space
cp .env.example .env  # If example exists, otherwise create .env

# Required environment variables:
# - DATABASE_URL: PostgreSQL connection string
# - NEXTAUTH_URL: Application URL (http://localhost:3000 for dev)
# - NEXTAUTH_SECRET: Random secret for NextAuth
# - Any other API keys required
```

### Database Setup

```bash
# Generate Prisma client
yarn db:generate

# Run migrations
yarn db:migrate

# Seed database (optional)
yarn db:seed

# Open Prisma Studio (database GUI)
yarn db:studio
```

### Running the Application

```bash
# From ecosystem root (seek_strive_thrive_website/)
yarn dev

# Or from nextjs_space/
cd nextjs_space
yarn dev
```

The application will run on **http://localhost:3000**

## Ecosystem-Specific Commands

### From Ecosystem Root (`ecosystems/seek_strive_thrive_website/`)

```bash
# Development
yarn dev                 # Start development server
yarn build              # Build for production
yarn start              # Start production server
yarn lint               # Run ESLint

# Application setup
yarn install:app        # Install app dependencies

# Database operations
yarn db:generate        # Generate Prisma client
yarn db:migrate         # Run database migrations
yarn db:seed            # Seed database with initial data
yarn db:studio          # Open Prisma Studio GUI
```

### From Application Directory (`nextjs_space/`)

```bash
# Development
yarn dev                # Start Next.js dev server
yarn build              # Build production bundle
yarn start              # Start production server
yarn lint               # Lint codebase

# Database (Prisma)
npx prisma migrate dev  # Create and apply migration
npx prisma generate     # Generate Prisma client
npx prisma studio       # Open database GUI
npx prisma db push      # Push schema without migration
npx prisma db seed      # Run seed script
```

### From GROWSZ Root

Add these to root `package.json`:

```json
{
  "scripts": {
    "seekstrivetrive:dev": "cd ecosystems/seek_strive_thrive_website && yarn dev",
    "seekstrivetrive:build": "cd ecosystems/seek_strive_thrive_website && yarn build",
    "seekstrivetrive:install": "cd ecosystems/seek_strive_thrive_website && yarn install:app"
  }
}
```

## Project Architecture

### Application Structure (Next.js App Router)

```
app/
├── (auth)/              # Authentication routes
├── (dashboard)/         # Protected dashboard routes
├── api/                 # API routes
├── layout.tsx           # Root layout
└── page.tsx             # Home page
```

### Key Features

- **Mental Health Resources**: Articles, guides, and tools
- **Wellness Tracking**: Mood tracking, journaling, habit formation
- **Community Support**: Forums, groups, peer support
- **Professional Directory**: Find therapists and counselors
- **Authentication**: Secure user authentication with NextAuth
- **Responsive Design**: Mobile-first design with Tailwind CSS

## Development Guidelines

### Code Style

- Follow TypeScript strict mode
- Use functional components with hooks
- Implement proper error boundaries
- Use shadcn/ui components for consistency
- Follow Next.js App Router conventions

### Component Organization

```
components/
├── ui/                  # shadcn/ui components
├── forms/               # Form components
├── layouts/             # Layout components
└── [feature]/           # Feature-specific components
```

### State Management

- **Zustand**: Global application state
- **Jotai**: Atomic state management
- **TanStack Query**: Server state & caching
- **SWR**: Alternative data fetching (where used)

### Database (Prisma)

- All schema changes require migrations
- Run `yarn db:generate` after schema changes
- Use Prisma Studio for database inspection
- Seed scripts located in `prisma/seed.ts`

## Key Dependencies

### UI & Styling
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Framer Motion for animations
- Lucide React for icons

### Data Visualization
- Chart.js & react-chartjs-2
- Recharts
- Plotly.js (for advanced charts)

### Forms & Validation
- React Hook Form (preferred)
- Formik (legacy forms)
- Zod for schema validation
- Yup for Formik validation

### Utilities
- date-fns & dayjs for date manipulation
- lodash for utility functions
- clsx & class-variance-authority for className management

## Testing

```bash
# Add test scripts as needed
# Example:
yarn test              # Run tests
yarn test:e2e          # Run E2E tests
```

## Deployment

```bash
# Build production bundle
yarn build

# Start production server
yarn start

# Deployment scripts in .deploy/ directory
```

## Environment Configuration

### Development (.env)

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/seek_strive_thrive"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-here"

# Optional: External APIs
# Add any API keys needed for integrations
```

## Integration with GROWSZ Biosphere

This ecosystem follows the GROWSZ biosphere architecture:

- ✅ Complete independence from other ecosystems
- ✅ Own package.json and dependencies
- ✅ Own deployment pipeline
- ✅ Own documentation (this file)
- ❌ No cross-ecosystem imports

### Multi-Agent Development

Available orchestration agents:
- **Claude Code 2.0**: Primary development orchestrator
- **Researcher**: Codebase analysis and context gathering
- **Frontend**: UI/UX implementation
- **Backend**: API and database operations
- **Reviewer**: Code quality and testing

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Prisma Issues

```bash
# Reset database (WARNING: Deletes all data)
cd nextjs_space
npx prisma migrate reset

# Force regenerate client
npx prisma generate --force
```

### Yarn Lock Issues

```bash
cd nextjs_space
rm -rf node_modules yarn.lock
yarn install
```

## Support & Resources

- **Ecosystem Issues**: Create issue in GROWSZ repository
- **Next.js Docs**: https://nextjs.org/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **Radix UI**: https://www.radix-ui.com/
- **shadcn/ui**: https://ui.shadcn.com/

## Roadmap

- [ ] Complete mental health resource library
- [ ] Implement mood tracking features
- [ ] Add community forums
- [ ] Professional directory integration
- [ ] Mobile app (React Native)
- [ ] Telehealth integration
- [ ] AI-powered wellness recommendations

## Contributing

Follow GROWSZ contribution guidelines:
1. Create feature branch
2. Implement changes with tests
3. Submit PR with detailed description
4. Pass all quality gates
5. Request review from team

---

**Built with ❤️ for mental health awareness**
**Part of the GROWSZ Biosphere**
