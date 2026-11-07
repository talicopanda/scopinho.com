# Scopinho.com

Personal portfolio and resume site built with Gatsby, React, and TypeScript. Gatsby builds the files in `src/` into a static site in the ignored `public/` directory; GitHub Pages deploys that output.

## Work locally

Use the Node version specified in `.nvmrc`, then run:

```sh
npm ci
npm run develop
```

`npm run typecheck` checks the TypeScript source, and `npm run build` creates the deployable site. No automated test suite is configured; validate both the homepage and the 404 page when changing the UI.

The resume source is `resume.tex`. To refresh the downloadable PDF, compile it into `static/` (for example, `tectonic -o static resume.tex`). Gatsby copies that file to `/resume.pdf` when it builds.

## Repository files

### Project configuration

| File | Purpose |
| --- | --- |
| `.github/workflows/deploy.yml` | Typechecks and builds the site on pushes to `main` or `master`, then deploys it to GitHub Pages. |
| `.gitignore` | Excludes dependencies, local caches, generated Gatsby output, logs, and local machine files. |
| `.nvmrc` | Selects the Node.js version for local development. |
| `gatsby-config.ts` | Configures Gatsby plugins and site metadata used by the site and page queries. |
| `package.json` | Declares npm scripts, runtime packages, and development dependencies. |
| `package-lock.json` | Locks the npm dependency tree so installs and CI use consistent versions. |
| `tsconfig.json` | Configures strict TypeScript checking for `src/` and the Gatsby config. |

### Resume and static assets

| File | Purpose |
| --- | --- |
| `resume.tex` | Editable LaTeX source for the downloadable resume. |
| `static/CNAME` | Custom domain name used by GitHub Pages. |
| `static/favicon.ico` | Site icon copied to the root of the built site. |
| `static/resume.pdf` | Compiled resume served at `/resume.pdf`. Regenerate it from `resume.tex` after editing the source. |

### Site source

| File | Purpose |
| --- | --- |
| `src/pages/index.tsx` | Gatsby homepage: name, role, rotating interests, profile image, social links, and resume link. |
| `src/pages/404.tsx` | Gatsby not-found page with a link back to the homepage. |
| `src/constants/colors.ts` | Color values used by the homepage's React components. |
| `src/constants/content.ts` | Content list for the homepage's rotating interests. |
| `src/images/header_pic.jpg` | Portrait used on the homepage. |
| `src/styles/global.css` | Global styles, shared layout and typography, and shared color variables. |
| `src/styles/home.module.css` | Component-scoped styles for the homepage header and social links. |
| `src/styles/404.module.css` | Component-scoped styles for the not-found page. |
| `src/types/css-modules.d.ts` | TypeScript declaration that lets CSS Modules be imported with typed class names. |

## Generated files

`public/` is Gatsby's generated build output and `.cache/` is Gatsby's local cache. Both are ignored by Git; edit the tracked source and static assets instead.

`node_modules/` contains installed dependencies and is also ignored. Restore it with `npm ci` if needed. `npm run clean` clears Gatsby's cache and output.

## Removed portfolio features

Unused footer code, additional portraits, project thumbnails, and their styles have been removed from the active site. Earlier versions remain in Git history. There is no birthday app source or route in this repository.
