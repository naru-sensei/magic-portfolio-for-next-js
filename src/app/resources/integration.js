// SNS連携機能の設定
const socialIntegration = {
  // Instagram連携設定
  instagram: {
    enabled: true,
    username: "lovely.naru.sensei",
    displayFeed: true,
    postsCount: 6,
    apiEndpoint: "/api/instagram-feed", // 実際のAPIエンドポイント
  },
  
  // Twitter/X連携設定
  twitter: {
    enabled: false,
    username: "",
    displayFeed: false,
    postsCount: 3,
    apiEndpoint: "/api/twitter-feed",
  },
  
  // Note連携設定
  note: {
    enabled: true,
    username: "naru.sensei",
    displayLatestArticles: true,
    articlesCount: 3,
    apiEndpoint: "/api/note-articles",
  },
  
  // シェア機能設定
  sharing: {
    enabled: true,
    platforms: ["twitter", "facebook", "line", "instagram"],
    defaultMessage: "ナル先生の数学講座をチェックしてみてね！ #ナル先生 #数学講座",
  },
  
  // コメント機能設定
  comments: {
    enabled: true,
    provider: "disqus", // disqus, facebook, custom
    moderationRequired: true,
  }
};

// 収益化機能の設定
const monetization = {
  // 広告設定
  advertising: {
    enabled: true,
    provider: "google-adsense",
    adUnits: {
      sidebar: "ca-pub-XXXXXXXXXXXXXXXX",
      inContent: "ca-pub-XXXXXXXXXXXXXXXX",
      footer: "ca-pub-XXXXXXXXXXXXXXXX",
    },
    autoAds: true,
  },
  
  // 会員システム設定
  membership: {
    enabled: true,
    tiers: [
      {
        id: "free",
        name: "無料会員",
        price: 0,
        benefits: [
          "基本的な数学講座へのアクセス",
          "ナル先生カードの基本コレクション",
          "月1回のライブ配信視聴"
        ]
      },
      {
        id: "premium",
        name: "プレミアム会員",
        price: 980, // 月額980円
        benefits: [
          "全ての数学講座へのアクセス",
          "ナル先生カードの完全コレクション",
          "週1回のライブ配信視聴",
          "質問への優先回答",
          "PDF教材のダウンロード"
        ]
      },
      {
        id: "vip",
        name: "VIP会員",
        price: 2980, // 月額2980円
        benefits: [
          "プレミアム会員の全特典",
          "月1回の個別オンライン指導（30分）",
          "限定グッズの割引購入",
          "リクエスト講座の優先制作"
        ]
      }
    ],
    paymentProviders: ["stripe", "paypal"],
    subscriptionManagement: "/account/subscription",
  },
  
  // ECサイト連携設定
  ecommerce: {
    enabled: true,
    platform: "booth",
    shopUrl: "https://booth.pm/ja/naru-sensei",
    featuredProducts: [
      {
        id: "product-001",
        name: "ナル先生の数学ノート",
        price: 1500,
        image: "/images/products/notebook.jpg",
        description: "ナル先生監修の数学ノート。美しい定理と公式が散りばめられています。"
      },
      {
        id: "product-002",
        name: "ナル先生フィギュア",
        price: 8800,
        image: "/images/products/figure.jpg",
        description: "「あっ…やばい…楽しくなってきちゃった…❤️」ポーズのナル先生フィギュア。"
      },
      {
        id: "product-003",
        name: "数学公式Tシャツ",
        price: 3500,
        image: "/images/products/tshirt.jpg",
        description: "美しい数学公式がデザインされたTシャツ。ナル先生監修。"
      }
    ]
  },
  
  // アフィリエイト設定
  affiliate: {
    enabled: true,
    programs: [
      {
        name: "Amazon",
        id: "amazon",
        tag: "narusensei-22"
      },
      {
        name: "楽天",
        id: "rakuten",
        tag: "narusensei"
      }
    ]
  }
};

export { socialIntegration, monetization };
