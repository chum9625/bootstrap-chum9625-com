<p align="center">
  <img src=".github/logo-ct-375x130.png" width="375" height="130" alt="ChumTech logo">
</p>

<h3 align="center">This source is for chum9625.com.</h3>

<p align="center">サイト chum9625.com は Bootstrap npm starter template を利用して作りました。</p>

## About

- このリポジトリは、@mdo氏のGitHubテンプレートリポジトリ [`bootstrap-npm-starter`](https://github.com/twbs/bootstrap-npm-starter) を基に作成したものです。
- Bootstrap v4で構築。
- `npm start` はオリジナル仕様に加え、 `Browser-sync` を組み込んでいます。
- Actions CI は、mainブランチにpushすることでFTP自動デプロイを実現しています。
- 以下、使い方などGoogle翻訳し、私なりに解釈したものを記載しています。

<!-- [![Build Status](https://github.com/twbs/bootstrap-npm-starter/workflows/CI/badge.svg)](https://github.com/twbs/bootstrap-npm-starter/actions) -->

## Usage

1. [Node.js](https://nodejs.org/) インストール必須。
2. 2つのターミナルタブを開いて、 `npm run server` と `npm run watch` を同時に実行する。
3. ブラウザのURL欄に <http://localhost:3000> を指定し、動作中のローカルページを確認する。

```shell
# Clone the repo
git clone https://github.com/twbs/bootstrap-npm-starter
cd bootstrap-npm-starter

# Install dependencies
npm i

# Compile Sass
npm run css-compile

# Watch Sass for changes (uses nodemon)
npm run watch

# Start local server (uses sirv-cli)
npm run server

# Watches Sass for changes and starts a local server
npm start
```

### 主要コマンドライン

- ```npm start```
- ```npm test```
- ```npm run scriptName``` 

## Scripts

| Script | 説明 |
| --- | --- |
| `server` | 開発用の [local server](http://localhost:3000) を起動します。 |
| `watch` | `scss` ディレクトリの変更を監視しながらCSSを自動的に再コンパイルします。 |
| `css` | `css-compile` と ` css-prefix` を実行します。 |
| `css-compile` | ソースSassをCSSにコンパイルします。 |
| `css-lint` | コード品質のためにソースSassに対して [Stylelint](https://stylelint.io) を実行します。 |
| `css-prefix` | コンパイルされたCSSで [Autoprefixer](https://github.com/postcss/autoprefixer) を実行します。 |
| `css-purge` | [PurgeCSS](https://purgecss.com) を実行して、 `index.html` で使用されていないCSSを削除します。|
| `test` | `css-lint` と `css` を順番に実行します。 |

## Advanced usage

さらに便利に使うための使用方法。

### CSSの最適化

[PurgeCSS](#purgecss) のようなBootstrapスタイルを削除するツールの使用を開始する前に、必要と思われるスタイルシートのみを含めることで、いくつかの広範な最適化を行うことができます。

すべてのBootstrap、またはスタイルとコンポーネントのサブセットを含める2つのオプションについては、 `scss/starter.scss` ファイルを参照してください。 デフォルトでは、Bootstrapに必要なスタイルシートと、使用する予定のコンポーネントのスタイルシートのみをインポートしました。

必要に応じて特定の行のコメントを解除し、それらを使用するために再コンパイルします。

### JSの最適化

CSSの最適化と同様に、プラグインごとに個別のスクリプトを公開します。 これにより、バンドル全体と依存関係ではなく、必要なものだけをインポートできます。 たとえば、ドロップダウン、ツールチップ、またはポップオーバーを使用する予定がない場合は、Popper.jsの依存関係を安全に省略できます。 ただし、Bootstrap 4にはjQueryが必要なため、v5が起動するまでjQueryを安全に削除することはできません。

### PurgeCSS

[PurgeCSS](https://purgecss.com/) は、サイトのHTMLに基づいて未使用のCSSを削除する [PostCSS](https://postcss.org) プラグインです。HTMLで使用されていないルールセットを見つけて削除し、ファイルサイズとパフォーマンスを向上させながら、必要なものだけがサイトの訪問者に送信されるようにします。


単一の `index.html` ファイルに対して PurgeCSS を実行して、 `assets/css/starter.css` から未使用のスタイルを削除する単一のnpmスクリプトが含まれています。

CSSをパージするには、コマンドラインから `npm run css-purge` を実行します。 これにより、以下が実行されます。

```shell
npm purgecss --css assets/css/starter.css --content index.html --output assets/css/
```

PurgeCSSはPostCSSプラグインであり、追加の[コマンドラインオプション](https://purgecss.com/CLI.html)など、少しの追加作業で正確なニーズに合わせて[構成できます](https://purgecss.com/configuration.html) 。 

## Actions CI

1. develop ブランチで開発
2. push
3. main ブランチに手動でマージするとアクション発動
4. FTPアップロード
### Reference

- [GitHub Actionsを使ってFTP自動デプロイ（Webサイト公開）を実現！ソフトを使った手動アップロードを卒業する](https://arrown-blog.com/githubactions-ftp-deploy/)
- [Learn more about GitHub Actions](https://github.com/features/actions)
- [read the Actions docs](https://help.github.com/en/actions)
- [browse the Actions Marketplace](https://github.com/marketplace/actions).

## Copyright

@ 2021 chum9625

This software is released under the MIT License, see LICENSE.
