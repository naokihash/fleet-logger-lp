# Fleet Logger LP

Fleet Logger のランディングページ（Next.js + Tailwind CSS）。

## Getting Started

```bash
npm install
npm run dev
```

## CI/CD

GitHub Actions により、push / PR 時に以下が自動実行されます：

| ジョブ | 内容 |
|--------|------|
| `lint-and-build` | ESLint + TypeScript 型チェック + Next.js ビルド |

### Vercel 自動デプロイとの関係

- `main` ブランチへのマージ → Vercel が自動デプロイ（本番）
- PR 作成時 → Vercel が Preview デプロイを自動発火
- GitHub Actions は「マージ前のチェック」として機能（デプロイは行わない）

### ブランチ保護ルール（GitHub で手動設定が必要）

Settings > Branches > Add rule > `main` ブランチに以下を設定：

- [x] Require status checks to pass before merging
  - `lint-and-build`
- [x] Require branches to be up to date before merging
- [x] Do not allow bypassing the above settings
