// サイト全体で使うプロフィール情報。ここを書き換えればトップページに反映される。
export const profile = {
  name: 'moyac',
  nameKana: 'もやし',
  tagline: 'ここにキャッチコピーを入れる',
  bio: 'ここに自己紹介文を入れる。何をしている人なのか、2〜3文でまとめると一目で伝わる。',
  photo: '/images/profile-placeholder.svg',
  // 「やってること」を一目で伝えるための3〜4項目
  works: [
    { title: '活動その1', body: '何をしているかを一文で。' },
    { title: '活動その2', body: '何をしているかを一文で。' },
    { title: '活動その3', body: '何をしているかを一文で。' },
  ],
  links: [
    { label: 'X', url: 'https://x.com/' },
    { label: 'note', url: 'https://note.com/' },
  ],
  contactEmail: '',
} as const;
