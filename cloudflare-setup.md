# Cloudflare設定ガイド

## DNSレコード設定

Cloudflareでnarusensei.comとnaru-sensei.comのDNSレコードを以下のように設定します：

### narusensei.com

| Type | Name | Content | TTL | Proxy status |
|------|------|---------|-----|--------------|
| A | @ | 76.76.21.21 | Auto | Proxied |
| CNAME | www | narusensei.com | Auto | Proxied |
| CNAME | * | narusensei.com | Auto | Proxied |

### naru-sensei.com

| Type | Name | Content | TTL | Proxy status |
|------|------|---------|-----|--------------|
| A | @ | 76.76.21.21 | Auto | Proxied |
| CNAME | www | naru-sensei.com | Auto | Proxied |
| CNAME | * | naru-sensei.com | Auto | Proxied |

## Cloudflare Pages設定

1. Cloudflareダッシュボードから「Pages」を選択
2. 「Create a project」をクリック
3. GitHubリポジトリ「naru-sensei/magic-portfolio-for-next-js」を選択
4. 以下の設定を行う：
   - Project name: narusensei
   - Production branch: main
   - Build command: npm run build
   - Build output directory: .next
   - Root directory: /
   - Environment variables: Vercelと同じ環境変数を設定

## Cloudflare Workers設定

カスタムドメインのリダイレクト処理用のWorkerを作成します：

```js
// redirect-worker.js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // www.narusensei.com -> narusensei.com へのリダイレクト
  if (url.hostname === 'www.narusensei.com') {
    return Response.redirect(`https://narusensei.com${url.pathname}${url.search}`, 301)
  }
  
  // www.naru-sensei.com -> narusensei.com へのリダイレクト
  if (url.hostname === 'www.naru-sensei.com') {
    return Response.redirect(`https://narusensei.com${url.pathname}${url.search}`, 301)
  }
  
  // naru-sensei.com -> narusensei.com へのリダイレクト
  if (url.hostname === 'naru-sensei.com') {
    return Response.redirect(`https://narusensei.com${url.pathname}${url.search}`, 301)
  }
  
  // 他のリクエストはそのまま通す
  return fetch(request)
}
```

## Cloudflare設定の最適化

1. **Page Rules**:
   - narusensei.com/* に対してCache Level: Cache Everythingを設定
   - *.narusensei.com/* に対してAlways Use HTTPSを設定

2. **Caching**:
   - Browser Cache TTL: 4時間
   - Edge Cache TTL: 2日間

3. **Speed**:
   - Auto Minify: HTML, CSS, JavaScriptすべて有効化
   - Brotli圧縮: 有効化

4. **Security**:
   - Always Use HTTPS: 有効化
   - Automatic HTTPS Rewrites: 有効化
   - SSL/TLS暗号化モード: Full

## Cloudflare Analyticsの設定

1. Cloudflareダッシュボードから「Analytics」を選択
2. Web Analyticsを有効化
3. narusensei.comドメインを追加
4. JavaScriptスニペットをNext.jsプロジェクトに追加

## 注意事項

- Vercelでデプロイした後、CloudflareのDNS設定を行う
- Cloudflare PagesとVercelの両方でデプロイする場合は、どちらかを主要なホスティングとして選択する
- 本番環境では、APIキーなどの機密情報はVercelとCloudflareの環境変数で設定し、リポジトリには含めない
