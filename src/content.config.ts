import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({
  name: z.string(),
  url: z.string(),
});

const image = z.looseObject({
  caption: z.string().optional(),
}).optional();

const publications = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './content/publication' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).default([]),
    date: z.coerce.date(),
    publishDate: z.coerce.date().optional(),
    publication_types: z.array(z.string()).default([]),
    publication: z.string().optional(),
    featured: z.boolean().default(false),
    summary: z.string().default(''),
    links: z.array(link).default([]),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './content/post' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().default(''),
    date: z.coerce.date(),
    authors: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    math: z.boolean().default(false),
    draft: z.boolean().default(false),
    image,
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './content/project' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().default(''),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    links: z.array(link).default([]),
    draft: z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './content/event' }),
  schema: z.object({
    title: z.string(),
    event: z.string().optional(),
    summary: z.string().default(''),
    date: z.coerce.date(),
    date_end: z.coerce.date().optional(),
    publishDate: z.coerce.date().optional(),
    authors: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    url_pdf: z.string().optional(),
    slides: z.string().optional(),
    content: z.object({
      button: z.object({ text: z.string(), url: z.string() }).optional(),
    }).optional(),
  }),
});

export const collections = { publications, posts, projects, events };
