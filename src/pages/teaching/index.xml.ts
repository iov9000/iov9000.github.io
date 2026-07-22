import { rssResponse } from '../../lib/rss';

export function GET() {
  return rssResponse('Teaching · Ivan Ovinnikov', 'Teaching and supervision.', []);
}
