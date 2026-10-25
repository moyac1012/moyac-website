import type { CollectionEntry } from 'astro:content';

type DatedEntry = CollectionEntry<'media' | 'activities' | 'posts'>;

export function sortByDateDesc<T extends DatedEntry>(entries: T[]): T[] {
  return [...entries].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function isPublished(entry: CollectionEntry<'posts'>): boolean {
  return !entry.data.draft;
}
