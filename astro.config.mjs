import { defineConfig } from 'astro/config';

// 独自ドメイン取得後に site を差し替える（OGP・canonical URL に使われる）
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
});
