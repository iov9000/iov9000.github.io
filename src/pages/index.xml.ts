import { getCollection } from 'astro:content';
import { rssResponse } from '../lib/rss';
import { slugFromId } from '../lib/content';

export async function GET() {
  const [posts, projects, publications, events] = await Promise.all([
    getCollection('posts'), getCollection('projects'), getCollection('publications'), getCollection('events'),
  ]);
  const items = [
    ...posts.filter((entry) => !entry.data.draft).map((entry) => ({ ...entry.data, description: entry.data.summary, url: `/post/${slugFromId(entry.id)}/` })),
    ...projects.filter((entry) => !entry.data.draft).map((entry) => ({ ...entry.data, description: entry.data.summary, url: `/project/${slugFromId(entry.id)}/` })),
    ...publications.map((entry) => ({ ...entry.data, description: entry.data.summary, url: `/publication/${slugFromId(entry.id)}/` })),
    ...events.map((entry) => ({ ...entry.data, description: entry.data.summary, url: `/event/${slugFromId(entry.id)}/` })),
  ];
  items.sort((a, b) => b.date.valueOf() - a.date.valueOf());
  return rssResponse('Ivan Ovinnikov', 'Research, publications, projects, and notes.', items);
}
