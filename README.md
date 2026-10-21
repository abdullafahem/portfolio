# Abdulla Fahem · Portfolio

Personal portfolio built with [Astro](https://astro.build). It has a light/dark mode toggle and deploys to GitHub Pages automatically.

## Editing your content

**All text lives in one file: `src/data/portfolio.json`.** You never need to touch the HTML to update the site.

| To change…            | Edit this key in `portfolio.json` |
|-----------------------|-----------------------------------|
| Name, title, bio      | `profile`                         |
| Email, phone, links   | `contact` (add your GitHub URL)   |
| Jobs                  | `experience` (newest first)       |
| Projects              | `projects` (leave `url` as `""` to show a card without a link) |
| Teaching topics       | `teaching`                        |
| Skills                | `skills`                          |
| Degrees               | `education`                       |
| Languages             | `languages` (`level` is 0–100)    |

**Adding a photo:** put `photo.jpg` in the `public/` folder and set `"photo": "photo.jpg"` in `profile`.

**Changing colors:** edit the tokens at the top of `src/styles/global.css`. The light theme is in `:root`, the dark theme in `:root[data-theme="dark"]` and the media query above it.

## Project structure

```
src/
  data/portfolio.json     ← your content
  pages/index.astro       ← page layout (puts the sections in order)
  layouts/Base.astro      ← <head>, theme toggle and copy-button scripts
  components/             ← one file per section
  styles/global.css       ← all styles and color tokens
public/                   ← static files (favicon, photo)
.github/workflows/deploy.yml ← automatic GitHub Pages deployment
```

## Running it on your computer

Needs [Node.js](https://nodejs.org) 18.20 or newer (22 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:4321. The page reloads as you edit.

## Deploying

Every push to `main` builds and publishes the site through GitHub Actions. See the setup steps in the chat, or the short version:

1. Create a GitHub repo (name it `YOUR-USERNAME.github.io` for the address `https://YOUR-USERNAME.github.io`).
2. Push this folder to it.
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Wait for the green check in the **Actions** tab. Your site is live.
