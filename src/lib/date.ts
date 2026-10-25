const formatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'Asia/Tokyo',
});

export function formatDate(date: Date): string {
  return formatter.format(date);
}

export function toIsoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
