import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { slugFromId } from '../../../lib/content';

export const getStaticPaths = (async () => {
  const publications = await getCollection('publications');
  return publications.map((publication) => ({ params: { slug: slugFromId(publication.id) } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const bib = await readFile(join(process.cwd(), 'content', 'publication', params.slug!, 'cite.bib'), 'utf8');
  return new Response(bib, { headers: { 'Content-Type': 'application/x-bibtex; charset=utf-8' } });
};
