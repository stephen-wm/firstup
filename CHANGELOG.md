# Changelog

All notable changes to FirstUp will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and [Conventional Commits](https://www.conventionalcommits.org/). The formatting for this document is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

- Update `dependabot/fetch-metadata` to 3.1.0 (bug fixes and improved metadata handling for dependency updates)
- Update `lycheeverse/lychee-action` to v2.8.0 for improved link checking and reporting

## [0.1.3] - 2026-05-05

### Changed

- Modified the release workflow to only trigger in the main branch from merged pull requests

## [0.1.2] - 2026-05-04

### Added

- Missing lintstaged configuration file `.lintstagedrc.json` in project root

### Changed

- Re-initialized Husky + Git hooks in `.husky/` folder
- Formatted files with Prettier:
  - `.github/ISSUE_TEMPLATE/bug_report.yml`
  - `.github/ISSUE_TEMPLATE/config.yml`
  - `.github/ISSUE_TEMPLATE/feature_request.yml`

### Fixed

- Markdownlint's "no bare URLs" error in `CODE_OF_CONDUCT` file

## [0.1.1] - 2026-05-04

### Added

- Steps in `pre-commit` hook to lint preceding commit messages, lint, format, and spell check staged files

### Changed

- Pin GitHub Actions dependencies (Dependabot workflow) to specific versions/commit SHAs to improve CI security and prevent supply-chain risk
- Updated project name referencing in issue templates, `CODE_OF_CONDUCT`, and `CONTRIBUTING` files

## [0.1.0] - 2026-05-04

### Added

- Initial project setup using Next.js (App Router) with TypeScript
- TailwindCSS configuration with shadcn/ui themeing and components
- ESLint, Prettier, and formatting rules
- Commit linting and Git hooks via Husky + lint-staged
- Spell checking configuration with CSpell
- Markdown linting and link checking (`lychee.toml`)
- Release configuration (`release-it`)
- Vercel deployment configuration
- Initial `README.md` with project overview and setup instructions
- `LICENSE` file
- Contributor and agent documentation (`AGENTS.md`, `CLAUDE.md`)
- GitHub workflows in `.github/workflows`
- Dependabot configuration for dependency version management

[Unreleased]: https://github.com/stephen-wm/firstup/compare/v0.1.3...HEAD
[0.1.3]: https://github.com/stephen-wm/firstup/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/stephen-wm/firstup/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/stephen-wm/firstup/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/stephen-wm/firstup/releases/tag/v0.1.0
