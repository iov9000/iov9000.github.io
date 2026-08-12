import { getCollection } from 'astro:content';
import { rssResponse } from '../../lib/rss';
import { slugFromId, sortNewest } from '../../lib/content';

export async function GET() {
  const items = sortNewest((await getCollection('events')).filter((entry) => !entry.data.draft)).map((entry) => ({ ...entry.data, url: `/event/${slugFromId(entry.id)}/`, description: entry.data.summary }));
  return rssResponse('Events · Ivan Ovinnikov', 'Talks and academic events.', items);
}
