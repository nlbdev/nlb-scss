# NLB Stylesheets

> A project to standardize and normalize stylesheets used in digital books, following guidelines on usability and accessibility for the visually impaired and dyslexics.

[Documentation (in Norwegian)](https://nlbdev.github.io/nlb-scss/)

## Overview

This repository contains SCSS stylesheets designed for digital books with a focus on accessibility and usability for users with visual impairments and dyslexia. The project includes comprehensive styling for various content types including braille, e-books, EPUB, and HTML formats.

## Features

- **Accessibility-focused**: Designed with guidelines for visually impaired and dyslexic users
- **Multiple formats**: Support for braille, e-books, EPUB, and HTML
- **Modern tooling**: Built with Vite for fast development and optimized builds
- **Bootstrap integration**: Includes Bootstrap 5 components and utilities
- **Comprehensive styling**: Covers book structure, typography, tables, lists, and more

## Prerequisites

- [Node.js](https://nodejs.org/en/) (version 18 or higher recommended)
- [pnpm](https://pnpm.io/) (package manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nlbdev/nlb-scss.git
   cd nlb-scss
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

## Development

### Build Commands

- **Development build**: `pnpm run build:css`
- **Production build (minified)**: `pnpm run build:css:min`
- **Full build**: `pnpm run build` (builds both development and production versions)
- **Watch mode**: `pnpm run dev` (automatically rebuilds on file changes)
- **Preview**: `pnpm run preview` (serves the built files locally)

### Project Structure

```text
src/scss/
├── braille/          # Braille-specific styles
├── includes/         # Shared mixins and utilities
│   ├── bootstrap/    # Bootstrap components
│   └── _*.scss       # Core utilities
├── *.scss           # Main entry points for different formats
└── variables.scss   # Global variables
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes with `pnpm run dev`
5. Submit a pull request

## Build Automation

This repository automatically builds when pull requests are merged to the main branch.

## License

MIT License - see [LICENSE](LICENSE) file for details.
