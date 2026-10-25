import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// メディア出演（TV・ラジオ・Web・雑誌など）
const media = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/media' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    outlet: z.string(),
    kind: z.enum(['TV', 'ラジオ', 'Web', '雑誌', '新聞', 'イベント', 'その他']),
    url: z.string().url().optional(),
  }),
});

// 活動記録（プロジェクト・制作・登壇など）
const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

// 記事（将来：日記アプリ連携・note 自動出力の起点）
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    draft: z.boolean().default(false),
    noteUrl: z.string().url().optional(),
  }),
});

export const collections = { media, activities, posts };
