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

## CV builds

The CV sources require XeLaTeX. Build the public CV and all private role-specific
artifacts with:

```sh
npm run build:cv
```

The default CV is written to `static/uploads/resume.pdf`. Employer-specific PDFs
are written to `artifacts/cv/`. The `artifacts/` directory is gitignored and sits
outside both `static/` and the deployed `dist/` directory, so tailored CVs never
become website links automatically.

Build either output independently with:

```sh
npm run build:cv:default
npm run build:cv:targets
npm run build:cv:openai
npm run build:cv:meta
```

The Makefile also exposes one deterministic target per role: `cv-openai`,
`cv-apple-posttraining`, `cv-apple-posttraining-rs`, `cv-anthropic`,
`cv-odyssey-diffusion-robotics`, `cv-odyssey-applied`, `cv-odyssey-research`,
`cv-odyssey-foundation-models`, `cv-normal`, and `cv-meta`. The previous public
default remains reproducible with `cv-default-legacy`.

Run the repeatable one-page and ATS text-extraction checks with:

```sh
make cv-validate
```

## Content

Astro reads its Markdown content from:

- `content/post/`
- `content/publication/`
- `content/project/`
- `content/event/`
