# docusaurus-portfolio

## 技術スタック

- node.js v22.4.0

  - `.node-version`で管理しているのでnodenvなどでバージョンを切り替えること

- typescript
- docusaurus（React）
- pnpm v9.6.0

## 環境構築

事前にpnpmをインストールしておくこと。
https://pnpm.io/ja/installation

```
pnpm install
```

### envファイルの設定

```
cp .env.example .env
```

```
BASE_URL=/ ## 基本/でOK
DOMAIN=http://localhost:3000 ## ページ表示のドメインに合わせる。ローカル環境の場合はこれでOK
```

## ページの追加

```
$ pnpm gen-blog ## ブログページの追加
$ pnpm gen-output ## ポートフォリオページの追加
$ pnpm gen-artifact ## アーティファクトページの追加
```
