<div align="center">

# Abdulla Fahem — Portfolio

**Software Engineer & AI Lecturer · Founder of [AILinkedPost](https://ailinkedpost.com)**

[![Live site](https://img.shields.io/badge/live-abdullafahem.github.io%2Fportfolio-2448D8?style=flat-square)](https://abdullafahem.github.io/portfolio/)
[![Deploy](https://img.shields.io/github/actions/workflow/status/abdullafahem/portfolio/deploy.yml?branch=main&style=flat-square&label=deploy)](https://github.com/abdullafahem/portfolio/actions/workflows/deploy.yml)
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)

[View the site](https://abdullafahem.github.io/portfolio/) · [Download CV](https://abdullafahem.github.io/portfolio/cv.pdf) · [LinkedIn](https://www.linkedin.com/in/abdulla-fahem/)

<img src="public/og.jpg" alt="Preview of the portfolio" width="720" />

</div>

## About

This repository contains the source code of my personal portfolio: a fast, static, single-page site that presents my experience, selected work, teaching and skills. It is built with [Astro](https://astro.build), ships almost no JavaScript, and is deployed to GitHub Pages on every push to `main`.

## Features

- **Data-driven content.** Every piece of text comes from one file, [`src/data/portfolio.json`](src/data/portfolio.json). The page, the CV and the SEO metadata are all generated from it.
- **Light and dark themes.** Follows the system setting, remembers the visitor's choice and loads without a flash of the wrong theme.
- **Animated background.** A canvas network with travelling light pulses, soft aurora gradients and a cursor spotlight, all drawn with no libraries.
- **Motion that respects the visitor.** Sections reveal on scroll and the stats count up. With *reduced motion* turned on, everything is shown static.
- **Generated CV.** `npm run cv` renders a print-ready A4 CV from the same data to `public/cv.pdf`.
- **SEO and sharing.** Open Graph and Twitter cards with a custom preview image, `schema.org/Person` structured data, a canonical URL and favicons.
- **Accessible and responsive.** Semantic markup, visible focus states and keyboard navigation. Layouts work from phone width up.

## Tech stack

| Area      | Choice                                                          |
| --------- | --------------------------------------------------------------- |
| Framework | [Astro 7](https://astro.build) (static output)                  |
| Styling   | Plain CSS with design tokens, no framework                      |
| Scripts   | TypeScript, Canvas 2D, IntersectionObserver                     |
| Fonts     | Plus Jakarta Sans, Inter, JetBrains Mono (Google Fonts)         |
| Hosting   | GitHub Pages via GitHub Actions                                 |

## Getting started

**Requirements:** [Node.js](https://nodejs.org) 22.23 or newer.

```bash
git clone https://github.com/abdullafahem/portfolio.git
cd portfolio
npm install
npm run dev
```

The site runs at <http://localhost:4321> and reloads as you edit.

### Scripts

| Command           | What it does                                                    |
| ----------------- | --------------------------------------------------------------- |
| `npm run dev`     | Start the local development server                              |
| `npm run build`   | Build the production site into `dist/`                          |
| `npm run preview` | Serve the production build locally                              |
| `npm run cv`      | Regenerate `public/cv.pdf` from the data (needs Edge or Chrome) |

## Project structure

```text
src/
├── data/portfolio.json     # all content: profile, experience, projects, skills…
├── pages/
│   ├── index.astro         # the portfolio page
│   └── cv.astro            # print-ready CV used to generate cv.pdf
├── layouts/Base.astro      # <head>, SEO metadata, theme, animations
├── components/             # one component per section
└── styles/global.css       # styles and color tokens
public/                     # images, favicons, preview image, cv.pdf
scripts/make-cv.mjs         # renders the CV page to PDF with a headless browser
.github/workflows/          # build and deploy to GitHub Pages
```

## Updating content

1. Edit [`src/data/portfolio.json`](src/data/portfolio.json). Each section of the site maps to one key: `profile`, `contact`, `stats`, `experience`, `projects`, `teaching`, `skills`, `education` and `languages`.
2. Project images go in `public/work/` and are referenced with the `image` field. A project without an image gets a generated cover.
3. Run `npm run cv` so the downloadable CV matches the new content.
4. Commit and push to `main`. The site redeploys automatically.

Colors are defined as tokens at the top of [`src/styles/global.css`](src/styles/global.css), with separate values for the light and dark themes.

## Deployment

The [deploy workflow](.github/workflows/deploy.yml) builds the site and publishes it to GitHub Pages on every push to `main`. It also works out the correct base path from the repository name, so the same code works for `username.github.io` and for project repositories like this one.

To enable it on a fork, open **Settings → Pages** and set **Source** to **GitHub Actions**.

## Contact

I'm open to engineering and AI collaborations.

- **Email:** [abdullaf2019@outlook.com](mailto:abdullaf2019@outlook.com)
- **LinkedIn:** [linkedin.com/in/abdulla-fahem](https://www.linkedin.com/in/abdulla-fahem/)
- **GitHub:** [@abdullafahem](https://github.com/abdullafahem)

## License

© Abdulla Fahem. All rights reserved.

The source code is public for reference. The personal content, including text, photos, the CV and project screenshots, may not be reused without permission.
