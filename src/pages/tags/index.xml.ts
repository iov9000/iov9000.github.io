import { getCollection } from 'astro:content';
import { rssResponse } from '../../lib/rss';
import { slugFromId } from '../../lib/content';

export async function GET() {
  const [posts, projects] = await Promise.all([getCollection('posts'), getCollection('projects')]);
  const items = [
    ...posts.filter((entry) => !entry.data.draft).map((entry) => ({ ...entry.data, description: entry.data.summary, url: `/post/${slugFromId(entry.id)}/` })),
    ...projects.filter((entry) => !entry.data.draft).map((entry) => ({ ...entry.data, description: entry.data.summary, url: `/project/${slugFromId(entry.id)}/` })),
  ].sort((a, b) => b.date.valueOf() - a.date.valueOf());
  return rssResponse('Topics · Ivan Ovinnikov', 'Research projects and notes by topic.', items);
}
