import { getCollection } from 'astro:content';
import { rssResponse } from '../../lib/rss';
import { slugFromId, sortNewest } from '../../lib/content';

export async function GET() {
  const entries = (await getCollection('projects')).filter((entry) => !entry.data.draft);
  const items = sortNewest(entries).map((entry) => ({ ...entry.data, url: `/project/${slugFromId(entry.id)}/`, description: entry.data.summary }));
  return rssResponse('Projects · Ivan Ovinnikov', 'Selected applied research projects.', items);
}
