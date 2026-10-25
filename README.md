# moyac-website

Astro で作った個人ポートフォリオサイト。Cloudflare で配信する想定。

## 開発

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的ファイルを出力
```

## どこを編集すればいいか

| やりたいこと | 編集するファイル |
| --- | --- |
| 名前・キャッチコピー・自己紹介・SNSリンク | `src/data/profile.ts` |
| プロフィール写真 | `public/images/` に画像を置き、`profile.ts` の `photo` を変更 |
| 配色・フォント・余白 | `src/styles/tokens.css`（デザインはここに集約。朱・金・黄は参考サイトのスクリーンショットから抽出） |
| メディア出演を追加 | `src/content/media/` に Markdown を追加 |
| 活動を追加 | `src/content/activities/` に Markdown を追加 |
| 記事を追加 | `src/content/posts/` に Markdown を追加（`draft: true` で非公開） |

各 Markdown の項目（frontmatter）は `src/content.config.ts` で定義している。

## Cloudflare へのデプロイ

GitHub リポジトリを Cloudflare に接続し、ビルド設定を以下にする。

- ビルドコマンド: `npm run build`
- 出力ディレクトリ: `dist`

Workers（静的アセット）でデプロイする場合は `wrangler.jsonc` を使う（`npx wrangler deploy`）。

独自ドメインを取得したら `astro.config.mjs` の `site` を書き換える。

## 今後の拡張予定

- 日記アプリとの連携で `src/content/posts/` に記事を自動生成
- 記事を note へ出力（公開後の URL を `noteUrl` に記録）
