import { getCollection } from 'astro:content';
import { rssResponse } from '../../lib/rss';
import { slugFromId, sortNewest } from '../../lib/content';

export async function GET() {
  const items = sortNewest(await getCollection('publications')).map((entry) => ({ ...entry.data, url: `/publication/${slugFromId(entry.id)}/`, description: entry.data.summary }));
  return rssResponse('Publications · Ivan Ovinnikov', 'Papers and preprints.', items);
}
