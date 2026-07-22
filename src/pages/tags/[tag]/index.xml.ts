import { getCollection } from 'astro:content';
import { rssResponse } from '../../../lib/rss';
import { slugFromId, slugify } from '../../../lib/content';

export async function getStaticPaths() {
  const posts = (await getCollection('posts')).filter((entry) => !entry.data.draft);
  const projects = (await getCollection('projects')).filter((entry) => !entry.data.draft);
  const tags = new Map<string, { label: string; items: Array<{ title: string; description: string; date: Date; url: string }> }>();
  for (const entry of posts) for (const label of entry.data.tags) {
    const tag = slugify(label); const bucket = tags.get(tag) ?? { label, items: [] };
    bucket.items.push({ ...entry.data, description: entry.data.summary, url: `/post/${slugFromId(entry.id)}/` }); tags.set(tag, bucket);
  }
  for (const entry of projects) for (const label of entry.data.tags) {
    const tag = slugify(label); const bucket = tags.get(tag) ?? { label, items: [] };
    bucket.items.push({ ...entry.data, description: entry.data.summary, url: `/project/${slugFromId(entry.id)}/` }); tags.set(tag, bucket);
  }
  return [...tags].map(([tag, props]) => ({ params: { tag }, props }));
}

export function GET({ props }: { props: { label: string; items: Array<{ title: string; description: string; date: Date; url: string }> } }) {
  props.items.sort((a, b) => b.date.valueOf() - a.date.valueOf());
  return rssResponse(`${props.label} · Ivan Ovinnikov`, `Research related to ${props.label}.`, props.items);
}
