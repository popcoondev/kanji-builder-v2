# 漢字ビルダー v2

部首を組み合わせてオリジナル漢字を作成・共有できるWebアプリケーション

## 🎯 プロジェクト概要

漢字ビルダーは、小中学校で習う部首を組み合わせて、オリジナルの漢字を創作できるインタラクティブなWebアプリケーションです。

### 主要機能

- 🔍 **部首選択**: 検索・フィルター機能付き
- 🎨 **キャンバス編集**: ドラッグ&ドロップで自由に配置
- ✏️ **メタデータ設定**: 音読み、訓読み、意味を追加
- 📤 **出力・共有**: SVG/PNG/JPG出力、QRコード生成

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UI**: Lucide React Icons
- **状態管理**: React Hooks
- **デプロイ**: Vercel

## 📁 プロジェクト構造

```
kanji-builder-v2/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # ルートレイアウト
│   │   ├── page.tsx            # メインページ
│   │   └── globals.css         # グローバルスタイル
│   ├── components/
│   │   ├── ui/                 # 基本UIコンポーネント
│   │   ├── canvas/             # キャンバス関連
│   │   ├── sidebar/            # サイドバー関連
│   │   ├── metadata/           # メタデータ入力
│   │   ├── export/             # エクスポート機能
│   │   └── layout/             # レイアウトコンポーネント
│   ├── lib/
│   │   ├── types/              # TypeScript型定義
│   │   ├── utils/              # ユーティリティ関数
│   │   ├── hooks/              # カスタムフック
│   │   └── constants/          # 定数
│   └── data/
│       └── radicals.json       # 部首データ
├── public/                     # 静的ファイル
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🚀 セットアップ

### 前提条件

- Node.js 20.x以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/your-username/kanji-builder-v2.git
cd kanji-builder-v2

# 依存関係をインストール
npm install

# 開発サーバー起動
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

## 📝 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm start

# リント
npm run lint
```

## 🎨 現在の実装状況

### ✅ Phase 0: セットアップ完了
- [x] Next.jsプロジェクト作成
- [x] TypeScript設定
- [x] Tailwind CSS設定
- [x] 基本ディレクトリ構造
- [x] 型定義（Radical, Canvas）
- [x] サンプル部首データ（10個）

### ✅ Phase 1: 基本UI完了
- [x] Headerコンポーネント
- [x] Buttonコンポーネント
- [x] PartsListコンポーネント
- [x] PartsSearchコンポーネント
- [x] メインページレイアウト
- [x] レスポンシブ対応（タブ切り替え）

### 🔄 Phase 2: 進行中
- [ ] 部首検索機能の実装
- [ ] フィルター機能の実装
- [ ] 部首詳細モーダル

### 📋 Phase 3-6: 未実装
- [ ] キャンバス機能
- [ ] ドラッグ&ドロップ
- [ ] メタデータ機能
- [ ] エクスポート機能
- [ ] 共有機能

## 🎯 次のステップ

1. **部首検索機能の実装**
   - インクリメンタルサーチ
   - キーワードマッチング

2. **フィルター機能の追加**
   - 学年別フィルター
   - カテゴリー別フィルター

3. **キャンバス機能の実装**
   - @dnd-kit導入
   - ドラッグ&ドロップ実装

## 📚 ドキュメント

- [要件定義書](./REQUIREMENTS.md)
- [技術設計書](./ARCHITECTURE.md)
- [開発ロードマップ](./ROADMAP.md)
- [クイックスタート](./QUICKSTART.md)

## 🌐 デプロイ

### Vercelへのデプロイ

1. GitHubリポジトリをVercelにインポート
2. 自動的にビルド・デプロイが実行されます
3. デプロイURLが発行されます

```bash
# Vercel CLIを使用する場合
npx vercel
```

## 📄 ライセンス

MIT License

## 🙏 謝辞

- Google Fonts (Noto Sans JP, Noto Serif JP)
- Lucide Icons
- Next.js Team

---

**開発状況**: 🟢 Phase 1 完了、Phase 2 進行中

最終更新: 2025-11-01
