<p align="center">
  <img src=".github/ct-logo-200x77-w.png" width="200" height="77" alt="ChumTech logo">
</p>

<h3 align="center">The site chum9625.com is deployed with this source.</h3>

<p align="center">chum9625.com は Bootstrap npm starter template を活用して作成しました。</p>

## About

- Bootstrap v4で構築されたHTMLシングルページです。
- ~~`npm start` に `Browser-sync` を組み込み更に効率化を図りました。~~ (Fix according to the alert.)
- Actions CI は、mainブランチにpushすることでFTP自動デプロイを実現しています。
- 以下、使い方など原本をGoogle翻訳し、私なりに解釈したものを記載しています。

## Usage

1. [Node.js](https://nodejs.org/) インストール必須。
2. 2つのターミナルタブを開いて、 `npm run server` と `npm run watch` を同時に実行する。
3. 上記 2 に代わり、 ```npm start``` としてもOK。```start``` は ```server``` ```watch``` ```sync``` 同時に実行する。
4. ブラウザのURL欄に <http://localhost:3000> を指定し、動作中のローカルページを確認する。

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

## Scripts

- ```npm run scriptName``` 

| ScriptName | 説明 |
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

1. develop ブランチで開発しpush
2. main ブランチにプルリクを投げる
3. main ブランチを手動でマージするとアクション発動
4. サーバーへFTPアップロード
### Reference

- [GitHub Actionsを使ってFTP自動デプロイ（Webサイト公開）を実現！ソフトを使った手動アップロードを卒業する](https://arrown-blog.com/githubactions-ftp-deploy/)
- [Learn more about GitHub Actions](https://github.com/features/actions)
- [read the Actions docs](https://help.github.com/en/actions)
- [browse the Actions Marketplace](https://github.com/marketplace/actions).

---

## セキュリティアラート対応手順

1. ``` npm install -g npm-check-updates ```
   1. 初回のみグローバルにインストール。ncuコマンドが使えるようになる。
   2. その後は対象のpackage.jsonのあるディレクトリでncuを実行。
2. ``` ncu ```
   1. 変更前と変更後のリスト表示。
3. ``` ncu -u ```
   1. package.jsonの書き換え。
4. ``` rm package-lock.json ```
   1. 現存のpackage-lock.jsonを削除  
5. ``` npm i ```
   1. package-lock.jsonの生成。
6. アップデートがまだ入手できない場合、脆弱性を解決するプルリクエストを作成。
   1. [リポジトリ内の脆弱な依存関係を表示・更新する](https://docs.github.com/ja/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository)

## Copyright

© 2021 chum9625
