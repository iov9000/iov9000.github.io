import { getCollection } from 'astro:content';
import { rssResponse } from '../../../lib/rss';
import { publicationType, slugFromId, sortNewest } from '../../../lib/content';

export async function getStaticPaths() {
  const publications = await getCollection('publications');
  const types = [...new Set(publications.flatMap((entry) => entry.data.publication_types))];
  return types.map((type) => ({ params: { type }, props: { type, entries: publications.filter((entry) => entry.data.publication_types.includes(type)) } }));
}

export function GET({ props }: { props: { type: string; entries: Awaited<ReturnType<typeof getCollection<'publications'>>> } }) {
  const items = sortNewest(props.entries).map((entry) => ({ ...entry.data, description: entry.data.summary, url: `/publication/${slugFromId(entry.id)}/` }));
  const label = publicationType(props.type);
  return rssResponse(`${label} · Ivan Ovinnikov`, `${label} publications.`, items);
}
