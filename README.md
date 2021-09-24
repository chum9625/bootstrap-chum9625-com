<p align="center">
  <img src=".github/logo-ct-375x130.png" width="375" height="130" alt="ChumTech logo">
</p>

<h3 align="center">This source is for chum9625.com.</h3>

<p align="center">サイト chum9625.com は Bootstrap npm starter template を利用して作りました。</p>

## About

- `bootstrap-npm-starter` は、Bootstrapの共著者である@mdoによって管理されている、Bootstrapを利用した新しいnpmプロジェクトを作成するためのGitHubテンプレートリポジトリです。
- Bootstrap v4で構築されており、v5用に更新する予定です。
- `npm start` はオリジナルと異なり、 `Browser-sync` を組み込んでいます。
- Actions CI はオリジナルと異なり、FTP自動デプロイを実現しています。
- 以下、主要説明部分について、Google翻訳したものを記載しています。

<!-- [![Build Status](https://github.com/twbs/bootstrap-npm-starter/workflows/CI/badge.svg)](https://github.com/twbs/bootstrap-npm-starter/actions) -->

## What's included

- Single HTML page (`index.html`) to demonstrate how to include Bootstrap.
- Includes [Bootstrap](https://getbootstrap.com) (currently using v4.6.0) source files via npm.
- Includes [Bootstrap Icons](https://icons.getbootstrap.com) (v1.4.0), which includes over 1,200 icons available as SVGs and web fonts.
- npm scripts (see `package.json`) for compiling and autoprefixing Sass, watching for changes, and starting a basic local server.
- Example stylesheet (`scss/starter.scss`) highlighting two ways to include and customize Bootstrap.
- Example JavaScript file (`assets/js/starter.js`) showing how to import all of Bootstrap, or just the parts you need.

## Usage

- [Node.js](https://nodejs.org/) がインストールされている必要があります。

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

最も簡単な開発を行うには、2つのターミナルタブを開いて、 `npm run server` と `npm run watch` を同時に実行します。

<http://localhost:3000> を開いて、動作中のページを確認してください。

## Scripts

このリポジトリでは、次のnpmスクリプトを使用できます。 ```npm start``` と ```npm test``` を除いて、残りのスクリプトは ```npm run scriptName``` を使用してコマンドラインから実行できます。 

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

このリポジトリを、有効化およびカスタマイズできる組み込みのアドオンを使用して、別のレベルに引き上げます。

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
3. main ブランチに手動でマージ
4. FTPアップロード
### Reference

- [GitHub Actionsを使ってFTP自動デプロイ（Webサイト公開）を実現！ソフトを使った手動アップロードを卒業する](https://arrown-blog.com/githubactions-ftp-deploy/)
- [Learn more about GitHub Actions](https://github.com/features/actions)
- [read the Actions docs](https://help.github.com/en/actions)
- [browse the Actions Marketplace](https://github.com/marketplace/actions).

## Copyright

@mdo 2020-2021 and licensed MIT.

2021 @chum9625
