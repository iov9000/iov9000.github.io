import { getCollection } from 'astro:content';
import { rssResponse } from '../../lib/rss';
import { slugFromId, sortNewest } from '../../lib/content';

export async function GET() {
  const entries = (await getCollection('posts')).filter((entry) => !entry.data.draft);
  const items = sortNewest(entries).map((entry) => ({ ...entry.data, url: `/post/${slugFromId(entry.id)}/`, description: entry.data.summary }));
  return rssResponse('Notes · Ivan Ovinnikov', 'Research notes and updates.', items);
}
