// Google AdSense統合
export function setupGoogleAdsense() {
  // Google AdSenseスクリプトをヘッドに追加する関数
  const addAdsenseScript = () => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_ADSENSE_ID) {
      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  };

  // 自動広告を有効化する関数
  const enableAutoAds = () => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_ADSENSE_ID) {
      const meta = document.createElement('meta');
      meta.name = 'google-adsense-account';
      meta.content = process.env.NEXT_PUBLIC_ADSENSE_ID;
      document.head.appendChild(meta);
    }
  };

  return {
    addAdsenseScript,
    enableAutoAds
  };
}

// 広告ユニットコンポーネント
export function AdUnit({ slot, format = 'auto', responsive = true, style = {} }) {
  // 広告ユニットを表示する関数
  const displayAd = () => {
    if (typeof window !== 'undefined') {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  };

  // コンポーネントがマウントされたときに広告を表示
  useEffect(() => {
    displayAd();
  }, []);

  return (
    <div className="ad-container" style={{ textAlign: 'center', margin: '20px 0', ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}

// Amazon アフィリエイト統合
export function AmazonAffiliateLink({ productId, linkText, imageUrl, category = 'books' }) {
  const affiliateTag = 'narusensei-22'; // Amazonアソシエイトタグ
  const baseUrl = 'https://www.amazon.co.jp';
  
  // 商品カテゴリに基づいてURLを生成
  const generateUrl = () => {
    if (category === 'books') {
      return `${baseUrl}/dp/${productId}?tag=${affiliateTag}&linkCode=li2&camp=247&creative=1211`;
    } else {
      return `${baseUrl}/dp/${productId}?tag=${affiliateTag}`;
    }
  };

  return (
    <div className="affiliate-link">
      <a href={generateUrl()} target="_blank" rel="noopener noreferrer">
        {imageUrl && <img src={imageUrl} alt={linkText} className="affiliate-image" />}
        <span className="affiliate-text">{linkText}</span>
      </a>
      <style jsx>{`
        .affiliate-link {
          display: inline-block;
          margin: 10px 0;
          padding: 10px;
          border: 1px solid #eaeaea;
          border-radius: 5px;
          transition: all 0.3s ease;
        }
        .affiliate-link:hover {
          border-color: #ff6b81;
          box-shadow: 0 2px 8px rgba(255, 107, 129, 0.2);
        }
        .affiliate-image {
          max-width: 150px;
          height: auto;
          display: block;
          margin-bottom: 10px;
        }
        .affiliate-text {
          display: block;
          color: #333;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}

// 楽天アフィリエイト統合
export function RakutenAffiliateLink({ productId, linkText, imageUrl }) {
  const affiliateId = 'narusensei'; // 楽天アフィリエイトID
  const baseUrl = 'https://hb.afl.rakuten.co.jp/hgc/';
  
  // 楽天アフィリエイトリンクを生成
  const generateUrl = () => {
    return `${baseUrl}${affiliateId}/?pc=${productId}`;
  };

  return (
    <div className="affiliate-link rakuten">
      <a href={generateUrl()} target="_blank" rel="noopener noreferrer">
        {imageUrl && <img src={imageUrl} alt={linkText} className="affiliate-image" />}
        <span className="affiliate-text">{linkText}</span>
      </a>
      <style jsx>{`
        .affiliate-link.rakuten {
          background-color: #f9f9f9;
        }
        .affiliate-link.rakuten:hover {
          border-color: #bf0000;
          box-shadow: 0 2px 8px rgba(191, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

// 収益分析ダッシュボード用データ取得関数
export function getRevenueData() {
  // 実際のアプリケーションでは、APIからデータを取得する
  // ここではサンプルデータを返す
  return {
    adsense: {
      daily: [
        { date: '2025-04-01', revenue: 3200 },
        { date: '2025-04-02', revenue: 3500 },
        { date: '2025-04-03', revenue: 3100 },
        { date: '2025-04-04', revenue: 3800 },
        { date: '2025-04-05', revenue: 4200 },
        { date: '2025-04-06', revenue: 3900 },
      ],
      monthly: [
        { month: '2025-01', revenue: 85000 },
        { month: '2025-02', revenue: 92000 },
        { month: '2025-03', revenue: 98000 },
        { month: '2025-04', revenue: 105000 },
      ],
      total: 380000
    },
    affiliate: {
      amazon: {
        daily: [
          { date: '2025-04-01', revenue: 1200 },
          { date: '2025-04-02', revenue: 1500 },
          { date: '2025-04-03', revenue: 1100 },
          { date: '2025-04-04', revenue: 1800 },
          { date: '2025-04-05', revenue: 2200 },
          { date: '2025-04-06', revenue: 1900 },
        ],
        monthly: [
          { month: '2025-01', revenue: 35000 },
          { month: '2025-02', revenue: 42000 },
          { month: '2025-03', revenue: 48000 },
          { month: '2025-04', revenue: 55000 },
        ],
        total: 180000
      },
      rakuten: {
        daily: [
          { date: '2025-04-01', revenue: 800 },
          { date: '2025-04-02', revenue: 1200 },
          { date: '2025-04-03', revenue: 900 },
          { date: '2025-04-04', revenue: 1500 },
          { date: '2025-04-05', revenue: 1800 },
          { date: '2025-04-06', revenue: 1600 },
        ],
        monthly: [
          { month: '2025-01', revenue: 25000 },
          { month: '2025-02', revenue: 32000 },
          { month: '2025-03', revenue: 38000 },
          { month: '2025-04', revenue: 45000 },
        ],
        total: 140000
      }
    },
    membership: {
      premium: {
        count: 120,
        revenue: 117600 // 120人 × 980円
      },
      vip: {
        count: 45,
        revenue: 134100 // 45人 × 2980円
      },
      total: 251700
    },
    ecommerce: {
      products: [
        { name: 'ナル先生の数学ノート', sales: 35, revenue: 52500 },
        { name: 'ナル先生フィギュア', sales: 12, revenue: 105600 },
        { name: 'ナル先生Tシャツ', sales: 28, revenue: 98000 },
      ],
      total: 256100
    },
    totalRevenue: 1127800 // 約113万円
  };
}

// 会員システム関連の関数
export function getMembershipPlans() {
  return [
    {
      id: 'free',
      name: '無料会員',
      price: 0,
      features: [
        '基本的な数学講座へのアクセス',
        'ナル先生カードの基本コレクション',
        '月1回のライブ配信視聴'
      ],
      cta: '今すぐ登録',
      popular: false
    },
    {
      id: 'premium',
      name: 'プレミアム会員',
      price: 980,
      features: [
        '全ての数学講座へのアクセス',
        'ナル先生カードの完全コレクション',
        '週1回のライブ配信視聴',
        '質問への優先回答',
        'PDF教材のダウンロード'
      ],
      cta: 'プレミアムに登録',
      popular: true
    },
    {
      id: 'vip',
      name: 'VIP会員',
      price: 2980,
      features: [
        'プレミアム会員の全特典',
        '月1回の個別オンライン指導（30分）',
        '限定グッズの割引購入',
        'リクエスト講座の優先制作'
      ],
      cta: 'VIPに登録',
      popular: false
    }
  ];
}

export default {
  setupGoogleAdsense,
  AdUnit,
  AmazonAffiliateLink,
  RakutenAffiliateLink,
  getRevenueData,
  getMembershipPlans
};
