# セットアップ
```bash
mise install
```
https://mise.jdx.dev/getting-started.html
pckage manager と nodejs がインストールされます。

# nextjs-lab
## 依存関係をインストールする
```bash
bun install
```

## 開発サーバーを立ち上げる
```bash
bun run dev
```

## 本番に近い環境を Docker で再現する
まずはビルドする
```bash
bun run build
```

次にDockerイメージを作成
```bash
docker build -t myapp .
```

コンテナを立ち上げて localhost:3000 にアクセス！