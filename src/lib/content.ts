export function slugFromId(id: string) {
  return id.replace(/\\/g, '/').replace(/\/index$/, '');
}

export function formatDate(date: Date, options: Intl.DateTimeFormatOptions = {}) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    ...options,
  }).format(date);
}

export function formatMonth(date: Date) {
  return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(date);
}

export function sortNewest<T extends { data: { date: Date } }>(entries: T[]) {
  return [...entries].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function publicationType(type?: string) {
  if (type === 'article-journal') return 'Journal article';
  if (type === 'manuscript') return 'Preprint / manuscript';
  return type ?? 'Publication';
}
