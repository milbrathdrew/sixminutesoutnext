# Project Documentation System

A comprehensive documentation and development workflow system for modern software projects.

## Overview

This project implements a robust documentation system and development workflow that ensures:
- Clear project documentation
- Efficient development processes
- Quality code standards
- Maintainable codebase

## Project Structure

```
.
├── .cursor/
│   └── rules              # Project-specific rules and patterns
├── memory-bank/
│   ├── projectbrief.md    # Project foundation and goals
│   ├── productContext.md  # Product vision and context
│   ├── activeContext.md   # Current work and decisions
│   ├── systemPatterns.md  # Technical architecture
│   ├── techContext.md     # Technology stack
│   └── progress.md        # Project status
├── .gitignore
└── README.md
```

## Getting Started

1. Clone the repository
   ```bash
   git clone [repository-url]
   ```

2. Review documentation
   - Start with `memory-bank/projectbrief.md`
   - Review `memory-bank/productContext.md`
   - Check `memory-bank/activeContext.md` for current work

3. Set up development environment
   ```bash
   # Install dependencies
   npm install

   # Set up environment variables
   cp .env.example .env

   # Start development server
   npm run dev
   ```

## Development Workflow

1. Branch Strategy
   - `main`: Production-ready code
   - `develop`: Integration branch
   - `feature/*`: New features
   - `bugfix/*`: Bug fixes
   - `hotfix/*`: Urgent fixes

2. Commit Messages
   ```
   type(scope): description
   ```
   Types: feat, fix, docs, style, refactor, test, chore

3. Code Review
   - Minimum 1 reviewer
   - All tests must pass
   - No linting errors
   - Documentation updated

## Documentation

### Memory Bank
The memory bank contains all project documentation:
- `projectbrief.md`: Project foundation
- `productContext.md`: Product vision
- `activeContext.md`: Current work
- `systemPatterns.md`: Architecture
- `techContext.md`: Technology stack
- `progress.md`: Project status

### Update Schedule
- Daily: activeContext.md
- Weekly: progress.md
- Per Sprint: All memory bank files
- Per Release: systemPatterns.md and techContext.md

## Contributing

1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature
   ```

2. Make your changes
   - Follow coding standards
   - Update documentation
   - Add tests

3. Submit a pull request
   - Use the PR template
   - Include tests
   - Update documentation

## License

[License Type] - See LICENSE file for details 