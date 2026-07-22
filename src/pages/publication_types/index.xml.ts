import { getCollection } from 'astro:content';
import { rssResponse } from '../../lib/rss';
import { slugFromId, sortNewest } from '../../lib/content';

export async function GET() {
  const items = sortNewest(await getCollection('publications')).map((entry) => ({ ...entry.data, description: entry.data.summary, url: `/publication/${slugFromId(entry.id)}/` }));
  return rssResponse('Publication types · Ivan Ovinnikov', 'Publications by type.', items);
}
