# ovinnikov.com

Personal research portfolio built with [Astro](https://astro.build/). The site is statically generated and deployed to GitHub Pages.

## Run locally

Requires Node.js 22 or newer.

```sh
npm install
npm run dev
```

Open `http://localhost:4321`.

The development server uses low-frequency polling so it also works on Linux systems with small inotify quotas. The explicit polling command is equivalent:

```sh
npm run dev:poll
```

## Production build

```sh
npm run check
npm run build
npm run preview
```

`npm run build` writes the site to `dist/` and generates its Pagefind search index.

## Content

Astro reads its Markdown content from:

- `content/post/`
- `content/publication/`
- `content/project/`
- `content/event/`
