// 広告管理コンポーネント
import React, { useEffect } from 'react';
import { setupGoogleAdsense, AdUnit } from '../resources/monetization';

export function AdsManager({ pageType = 'default' }) {
  const { addAdsenseScript, enableAutoAds } = setupGoogleAdsense();
  
  useEffect(() => {
    // Google AdSenseスクリプトを追加
    addAdsenseScript();
    // 自動広告を有効化
    enableAutoAds();
  }, []);

  // ページタイプに基づいて広告スロットを決定
  const getAdSlots = () => {
    switch(pageType) {
      case 'home':
        return {
          header: 'xxxxxxxx', // トップページヘッダー広告
          sidebar: 'xxxxxxxx', // サイドバー広告
          footer: 'xxxxxxxx'   // フッター広告
        };
      case 'blog':
        return {
          header: 'xxxxxxxx',  // ブログページヘッダー広告
          inContent: 'xxxxxxxx', // 記事内広告
          relatedContent: 'xxxxxxxx', // 関連コンテンツ広告
          footer: 'xxxxxxxx'    // フッター広告
        };
      case 'course':
        return {
          header: 'xxxxxxxx',  // 講座ページヘッダー広告
          sidebar: 'xxxxxxxx', // サイドバー広告
          footer: 'xxxxxxxx'   // フッター広告
        };
      default:
        return {
          sidebar: 'xxxxxxxx', // デフォルトサイドバー広告
          footer: 'xxxxxxxx'   // デフォルトフッター広告
        };
    }
  };

  const adSlots = getAdSlots();

  return (
    <>
      {/* ヘッダー広告 */}
      {adSlots.header && (
        <div className="header-ad">
          <AdUnit slot={adSlots.header} format="horizontal" />
        </div>
      )}
      
      {/* サイドバー広告 */}
      {adSlots.sidebar && (
        <div className="sidebar-ad">
          <AdUnit slot={adSlots.sidebar} format="vertical" />
        </div>
      )}
      
      {/* 記事内広告 */}
      {adSlots.inContent && (
        <div className="in-content-ad">
          <AdUnit slot={adSlots.inContent} format="horizontal" />
        </div>
      )}
      
      {/* 関連コンテンツ広告 */}
      {adSlots.relatedContent && (
        <div className="related-content-ad">
          <AdUnit slot={adSlots.relatedContent} format="rectangle" />
        </div>
      )}
      
      {/* フッター広告 */}
      {adSlots.footer && (
        <div className="footer-ad">
          <AdUnit slot={adSlots.footer} format="horizontal" />
        </div>
      )}
      
      <style jsx>{`
        .header-ad, .footer-ad, .in-content-ad {
          width: 100%;
          margin: 20px 0;
          text-align: center;
        }
        .sidebar-ad {
          width: 300px;
          margin: 0 auto 20px;
        }
        .related-content-ad {
          width: 100%;
          margin: 30px 0;
          text-align: center;
        }
        @media (max-width: 768px) {
          .sidebar-ad {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

// 収益ダッシュボードコンポーネント
export function RevenueDashboard() {
  const { getRevenueData } = require('../resources/monetization');
  const revenueData = getRevenueData();
  
  return (
    <div className="revenue-dashboard">
      <h2>収益ダッシュボード</h2>
      
      <div className="total-revenue">
        <h3>総収益</h3>
        <p className="amount">¥{revenueData.totalRevenue.toLocaleString()}</p>
        <p className="period">今月の収益</p>
      </div>
      
      <div className="revenue-breakdown">
        <h3>収益内訳</h3>
        <div className="revenue-cards">
          <div className="revenue-card">
            <h4>Google AdSense</h4>
            <p className="amount">¥{revenueData.adsense.total.toLocaleString()}</p>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${(revenueData.adsense.total / revenueData.totalRevenue) * 100}%` }}
              ></div>
            </div>
            <p className="percentage">{Math.round((revenueData.adsense.total / revenueData.totalRevenue) * 100)}%</p>
          </div>
          
          <div className="revenue-card">
            <h4>アフィリエイト</h4>
            <p className="amount">¥{(revenueData.affiliate.amazon.total + revenueData.affiliate.rakuten.total).toLocaleString()}</p>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${((revenueData.affiliate.amazon.total + revenueData.affiliate.rakuten.total) / revenueData.totalRevenue) * 100}%` }}
              ></div>
            </div>
            <p className="percentage">{Math.round(((revenueData.affiliate.amazon.total + revenueData.affiliate.rakuten.total) / revenueData.totalRevenue) * 100)}%</p>
          </div>
          
          <div className="revenue-card">
            <h4>会員収入</h4>
            <p className="amount">¥{revenueData.membership.total.toLocaleString()}</p>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${(revenueData.membership.total / revenueData.totalRevenue) * 100}%` }}
              ></div>
            </div>
            <p className="percentage">{Math.round((revenueData.membership.total / revenueData.totalRevenue) * 100)}%</p>
          </div>
          
          <div className="revenue-card">
            <h4>物販収入</h4>
            <p className="amount">¥{revenueData.ecommerce.total.toLocaleString()}</p>
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${(revenueData.ecommerce.total / revenueData.totalRevenue) * 100}%` }}
              ></div>
            </div>
            <p className="percentage">{Math.round((revenueData.ecommerce.total / revenueData.totalRevenue) * 100)}%</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .revenue-dashboard {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin-bottom: 30px;
        }
        h2 {
          color: #333;
          margin-bottom: 20px;
          border-bottom: 2px solid #ff6b81;
          padding-bottom: 10px;
        }
        .total-revenue {
          background: linear-gradient(135deg, #ff6b81, #ff8e9e);
          color: white;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
          text-align: center;
        }
        .total-revenue .amount {
          font-size: 2.5rem;
          font-weight: bold;
          margin: 10px 0;
        }
        .total-revenue .period {
          font-size: 0.9rem;
          opacity: 0.8;
        }
        .revenue-breakdown h3 {
          margin-bottom: 15px;
        }
        .revenue-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 15px;
        }
        .revenue-card {
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 15px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .revenue-card h4 {
          margin-bottom: 10px;
          color: #555;
        }
        .revenue-card .amount {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }
        .progress-bar {
          height: 8px;
          background-color: #eee;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 5px;
        }
        .progress {
          height: 100%;
          background: linear-gradient(90deg, #ff6b81, #ff8e9e);
        }
        .percentage {
          text-align: right;
          font-size: 0.9rem;
          color: #666;
        }
        @media (max-width: 768px) {
          .revenue-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

// 会員プラン表示コンポーネント
export function MembershipPlans() {
  const { getMembershipPlans } = require('../resources/monetization');
  const plans = getMembershipPlans();
  
  return (
    <div className="membership-plans">
      <h2>会員プラン</h2>
      <p className="description">ナル先生の数学講座をより深く楽しむための会員プランです。あなたに合ったプランをお選びください。</p>
      
      <div className="plans-container">
        {plans.map(plan => (
          <div 
            key={plan.id} 
            className={`plan-card ${plan.popular ? 'popular' : ''}`}
          >
            {plan.popular && <div className="popular-badge">人気</div>}
            <h3>{plan.name}</h3>
            <div className="price">
              <span className="amount">¥{plan.price}</span>
              <span className="period">/月</span>
            </div>
            
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <button className="cta-button">{plan.cta}</button>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .membership-plans {
          padding: 40px 0;
        }
        h2 {
          text-align: center;
          margin-bottom: 10px;
          color: #333;
        }
        .description {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 30px;
          color: #666;
        }
        .plans-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
        }
        .plan-card {
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 30px;
          width: 300px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .plan-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }
        .plan-card.popular {
          border: 2px solid #ff6b81;
          transform: scale(1.05);
        }
        .plan-card.popular:hover {
          transform: scale(1.05) translateY(-5px);
        }
        .popular-badge {
          position: absolute;
          top: -10px;
          right: 20px;
          background: #ff6b81;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        h3 {
          text-align: center;
          margin-bottom: 15px;
          color: #333;
        }
        .price {
          text-align: center;
          margin-bottom: 20px;
        }
        .price .amount {
          font-size: 2rem;
          font-weight: bold;
          color: #ff6b81;
        }
        .price .period {
          font-size: 1rem;
          color: #888;
        }
        .features {
          list-style-type: none;
          padding: 0;
          margin-bottom: 30px;
        }
        .features li {
          padding: 8px 0;
          border-bottom: 1px solid #eee;
          position: relative;
          padding-left: 25px;
        }
        .features li:before {
          content: "✓";
          color: #ff6b81;
          position: absolute;
          left: 0;
        }
        .cta-button {
          display: block;
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #ff6b81, #ff8e9e);
          color: white;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }
        .cta-button:hover {
          opacity: 0.9;
        }
        @media (max-width: 768px) {
          .plans-container {
            flex-direction: column;
            align-items: center;
          }
          .plan-card {
            width: 100%;
            max-width: 350px;
          }
          .plan-card.popular {
            transform: none;
            order: -1;
          }
          .plan-card.popular:hover {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
}

export default {
  AdsManager,
  RevenueDashboard,
  MembershipPlans
};
