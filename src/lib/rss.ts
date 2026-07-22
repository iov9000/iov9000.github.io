interface RssItem {
  title: string;
  description: string;
  url: string;
  date: Date;
}

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export function rssResponse(title: string, description: string, items: RssItem[]) {
  const site = 'https://ovinnikov.com';
  const entries = items.map((item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${site}${escapeXml(item.url)}</link>
      <guid>${site}${escapeXml(item.url)}</guid>
      <pubDate>${item.date.toUTCString()}</pubDate>
      <description>${escapeXml(item.description)}</description>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${site}/</link>
    <description>${escapeXml(description)}</description>${entries}
  </channel>
</rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
