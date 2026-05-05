# <img src="./assets/logo-primary.svg#gh-light-mode-only" alt="FirstUp logo" height="40" /><img src="./assets/logo-secondary.svg#gh-dark-mode-only" alt="FirstUp logo" height="40" />

![License](https://img.shields.io/github/license/stephen-wm/firstup?color=blue)
![Version](https://img.shields.io/github/v/tag/stephen-wm/firstup?label=version)
![Build](https://img.shields.io/github/actions/workflow/status/stephen-wm/firstup/ci.yml)
![Last Commit](https://img.shields.io/github/last-commit/stephen-wm/firstup?color=yellow)
![Contributors](https://img.shields.io/github/contributors/stephen-wm/firstup?color=5d00ff)
![Open Issues](https://img.shields.io/github/issues/stephen-wm/firstup?color=ff0000)
![GitHub Repo stars](https://img.shields.io/github/stars/stephen-wm/firstup)

**FirstUp** is a modern link-in-bio platform that gives you one beautiful, customizable page to share everything you are. Add your links, personalize your profile, and share a single URL across every bio, email, and business card.

Built on Next.js App Router, Better Auth, Drizzle ORM, and Neon PostgreSQL.

## Quick Start

You can view the live application at [firstup.me](https://firstup.vercel.app/).

## Project Structure

```ASCII
firstup/
├─ .cspell/                       # Spell-check dictionaries
├─ .github/                       # GitHub configuration (Actions workflows, issue/PR templates, labels, etc.)
│  ├─ ISSUE_TEMPLATE/             # Structured templates for bug reports and feature requests
│  ├─ workflows/                  # GitHub Actions CI, release, and Dependabot auto-merge workflows
│  └─ ...                         # CODEOWNERS, dependabot.yml, pull_request_template.md, SECURITY.md, stale.yml
├─ .husky/                        # Git hooks for enforcing code quality and commit standards
├─ .vscode/                       # VS Code workspace settings
├─ assets/                        # Repository-level assets (branding, logos, social preview images)
├─ public/                        # Static assets served directly by Next.js (favicon, images, etc.)
├─ src/                           # Application source code
│  ├─ app/                        # Next.js App Router (routes, layouts, pages, API routes)
│  │  ├─ (marketing)/             # Public-facing marketing pages (landing, pricing, about, etc.)
│  │  ├─ (dashboard)/             # Authenticated dashboard (link management, appearance, analytics)
│  │  └─ [username]/              # Dynamic public profile pages (firstup.me/username)
│  ├─ components/                 # Reusable UI components
│  │  ├─ marketing/               # Marketing-specific components (Navbar, Footer, etc.)
│  │  └─ ui/                      # shadcn/ui component library
│  ├─ config/                     # App configuration (metadata defaults, nav items, plan features)
│  ├─ lib/                        # Shared utilities and configurations (auth, db, utils)
│  └─ styles/                     # Global styles
├─ .editorconfig                  # Editor-agnostic coding style rules
├─ .env.example                   # Example .env file for contributors
├─ .gitattributes                 # Git behavior settings (line endings, diff rules, etc.)
├─ .gitignore                     # Files and directories excluded from version control
├─ .lintstagedrc.json             # Pre-commit staged files configuration
├─ .markdownlint.json             # Markdown linting configuration
├─ .npmrc                         # npm configuration (dependency behavior, install settings)
├─ .nvmrc                         # Node.js version for local development consistency
├─ .prettierignore                # Files ignored by Prettier
├─ .release-it.json               # Release-it configuration for versioning and changelog
├─ AGENTS.md                      # Guidelines for AI agents/tools interacting with the codebase
├─ CHANGELOG.md                   # Project changelog (Keep a Changelog format)
├─ CLAUDE.md                      # Project-specific instructions and context for Claude AI
├─ CODE_OF_CONDUCT.md             # Community standards and enforcement guidelines
├─ commitlint.config.mjs          # Commit message linting rules (Conventional Commits)
├─ components.json                # shadcn/ui component registry
├─ CONTRIBUTING.md                # Contribution guidelines, workflow, and coding standards
├─ cspell.json                    # Spell checking configuration for code and docs
├─ eslint.config.mjs              # ESLint flat config
├─ LICENSE                        # Project license (MIT)
├─ lychee.toml                    # Dead link checker configuration
├─ next.config.ts                 # Next.js configuration
├─ package-lock.json              # Locked dependency versions for reproducible installs
├─ package.json                   # Project metadata, scripts, and dependencies
├─ plopfile.mjs                   # Code generators (scaffolding components, pages, etc.)
├─ postcss.config.mjs             # PostCSS configuration
├─ prettier.config.mjs            # Prettier formatting rules
├─ README.md                      # Project overview, setup, and usage instructions
├─ tsconfig.json                  # TypeScript configuration
└─ vercel.json                    # Vercel deployment configuration
```

## Development Setup

### Prerequisites

- Node.js >= 20.x ([nvm](https://github.com/nvm-sh/nvm) recommended)
- npm >= 10.x
- A [Neon](https://neon.tech) database (free tier works)

### Installation

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/stephen-wm/firstup.git
   cd firstup
   npm install
   ```

2. Configure environment variables:

   ```bash
   copy .env.example .env.local
   ```

   Fill in the required values — see `.env.example` for descriptions of each variable.

3. Push the database schema:

   ```bash
   npx drizzle-kit push
   ```

4. (Optional) Seed the database with sample data:

   ```bash
   npx tsx src/scripts/seed.ts
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

### Verify your setup

```bash
npm run typecheck   # TypeScript type checking
npm run lint        # ESLint
npm run build       # Production build
```

## Versioning

This project is currently in pre-1.0 development. Breaking changes may occur at any time.

Releases follow [Semantic Versioning](https://semver.org/) and are documented in [CHANGELOG.md](./CHANGELOG.md).

## Author

Created and maintained by [@stephen-wm](https://github.com/stephen-wm/).

## Contributors

- [@stephen-wm](https://github.com/stephen-wm/)

## License

MIT © 2025 FirstUp. See [LICENSE](./LICENSE) for details.

## Contact

For questions or support, open an issue or email [hello@firstup.me](mailto:hello@firstup.me).

---

Badges generated by [shields.io](https://shields.io/).
