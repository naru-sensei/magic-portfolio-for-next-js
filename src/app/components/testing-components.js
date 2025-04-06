// テスト結果表示コンポーネント
import React, { useState } from 'react';
import {
  runBrowserCompatibilityTest,
  runPerformanceTest,
  runSecurityCheck,
  runSeoCheck,
  runAccessibilityCheck,
  getPreLaunchChecklist,
  getPromotionPlan
} from '../resources/testing';

export function TestResultsDashboard() {
  const [activeTab, setActiveTab] = useState('compatibility');
  
  // テストデータの取得
  const compatibilityResults = runBrowserCompatibilityTest();
  const performanceResults = runPerformanceTest();
  const securityResults = runSecurityCheck();
  const seoResults = runSeoCheck();
  const accessibilityResults = runAccessibilityCheck();
  const preLaunchChecklist = getPreLaunchChecklist();
  
  // タブ切り替え関数
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div className="test-results-dashboard">
      <h2>ウェブサイトテスト結果</h2>
      
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'compatibility' ? 'active' : ''}`}
          onClick={() => handleTabChange('compatibility')}
        >
          ブラウザ互換性
        </button>
        <button 
          className={`tab ${activeTab === 'performance' ? 'active' : ''}`}
          onClick={() => handleTabChange('performance')}
        >
          パフォーマンス
        </button>
        <button 
          className={`tab ${activeTab === 'security' ? 'active' : ''}`}
          onClick={() => handleTabChange('security')}
        >
          セキュリティ
        </button>
        <button 
          className={`tab ${activeTab === 'seo' ? 'active' : ''}`}
          onClick={() => handleTabChange('seo')}
        >
          SEO
        </button>
        <button 
          className={`tab ${activeTab === 'accessibility' ? 'active' : ''}`}
          onClick={() => handleTabChange('accessibility')}
        >
          アクセシビリティ
        </button>
        <button 
          className={`tab ${activeTab === 'checklist' ? 'active' : ''}`}
          onClick={() => handleTabChange('checklist')}
        >
          公開前チェック
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'compatibility' && (
          <div className="compatibility-results">
            <h3>ブラウザ互換性テスト結果</h3>
            <table>
              <thead>
                <tr>
                  <th>ブラウザ</th>
                  <th>バージョン</th>
                  <th>結果</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {compatibilityResults.map((browser, index) => (
                  <tr key={index} className={browser.status === 'PASS' ? 'pass' : 'fail'}>
                    <td>{browser.name}</td>
                    <td>{browser.version}</td>
                    <td>{browser.status}</td>
                    <td>{browser.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {activeTab === 'performance' && (
          <div className="performance-results">
            <h3>パフォーマンステスト結果</h3>
            
            <div className="lighthouse-scores">
              <h4>Lighthouse スコア</h4>
              <div className="score-cards">
                <div className="score-card">
                  <div className="score" style={{ color: getScoreColor(performanceResults.lighthouse.performance) }}>
                    {performanceResults.lighthouse.performance}
                  </div>
                  <div className="label">パフォーマンス</div>
                </div>
                <div className="score-card">
                  <div className="score" style={{ color: getScoreColor(performanceResults.lighthouse.accessibility) }}>
                    {performanceResults.lighthouse.accessibility}
                  </div>
                  <div className="label">アクセシビリティ</div>
                </div>
                <div className="score-card">
                  <div className="score" style={{ color: getScoreColor(performanceResults.lighthouse.bestPractices) }}>
                    {performanceResults.lighthouse.bestPractices}
                  </div>
                  <div className="label">ベストプラクティス</div>
                </div>
                <div className="score-card">
                  <div className="score" style={{ color: getScoreColor(performanceResults.lighthouse.seo) }}>
                    {performanceResults.lighthouse.seo}
                  </div>
                  <div className="label">SEO</div>
                </div>
                <div className="score-card">
                  <div className="score" style={{ color: getScoreColor(performanceResults.lighthouse.pwa) }}>
                    {performanceResults.lighthouse.pwa}
                  </div>
                  <div className="label">PWA</div>
                </div>
              </div>
            </div>
            
            <div className="load-times">
              <h4>読み込み時間</h4>
              <table>
                <tbody>
                  <tr>
                    <td>First Contentful Paint</td>
                    <td>{performanceResults.loadTimes.firstContentfulPaint}</td>
                  </tr>
                  <tr>
                    <td>Largest Contentful Paint</td>
                    <td>{performanceResults.loadTimes.largestContentfulPaint}</td>
                  </tr>
                  <tr>
                    <td>Time to Interactive</td>
                    <td>{performanceResults.loadTimes.timeToInteractive}</td>
                  </tr>
                  <tr>
                    <td>Total Blocking Time</td>
                    <td>{performanceResults.loadTimes.totalBlockingTime}</td>
                  </tr>
                  <tr>
                    <td>Cumulative Layout Shift</td>
                    <td>{performanceResults.loadTimes.cumulativeLayoutShift}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="resource-sizes">
              <h4>リソースサイズ</h4>
              <table>
                <tbody>
                  <tr>
                    <td>HTML</td>
                    <td>{performanceResults.resourceSizes.html}</td>
                  </tr>
                  <tr>
                    <td>CSS</td>
                    <td>{performanceResults.resourceSizes.css}</td>
                  </tr>
                  <tr>
                    <td>JavaScript</td>
                    <td>{performanceResults.resourceSizes.javascript}</td>
                  </tr>
                  <tr>
                    <td>画像</td>
                    <td>{performanceResults.resourceSizes.images}</td>
                  </tr>
                  <tr>
                    <td>フォント</td>
                    <td>{performanceResults.resourceSizes.fonts}</td>
                  </tr>
                  <tr className="total">
                    <td>合計</td>
                    <td>{performanceResults.resourceSizes.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === 'security' && (
          <div className="security-results">
            <h3>セキュリティチェック結果</h3>
            
            <div className="security-headers">
              <h4>セキュリティヘッダー</h4>
              <table>
                <thead>
                  <tr>
                    <th>ヘッダー名</th>
                    <th>結果</th>
                    <th>値</th>
                  </tr>
                </thead>
                <tbody>
                  {securityResults.headers.map((header, index) => (
                    <tr key={index} className={header.status === 'PASS' ? 'pass' : 'fail'}>
                      <td>{header.name}</td>
                      <td>{header.status}</td>
                      <td><code>{header.value}</code></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="vulnerabilities">
              <h4>脆弱性チェック</h4>
              <table>
                <thead>
                  <tr>
                    <th>脆弱性タイプ</th>
                    <th>結果</th>
                    <th>備考</th>
                  </tr>
                </thead>
                <tbody>
                  {securityResults.vulnerabilities.map((vuln, index) => (
                    <tr key={index} className={vuln.status === 'PASS' ? 'pass' : vuln.status === 'N/A' ? 'na' : 'fail'}>
                      <td>{vuln.name}</td>
                      <td>{vuln.status}</td>
                      <td>{vuln.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="ssl-info">
              <h4>SSL/TLS設定</h4>
              <div className="ssl-card">
                <div className="ssl-grade">{securityResults.ssl.grade}</div>
                <div className="ssl-details">
                  <p><strong>ステータス:</strong> {securityResults.ssl.status}</p>
                  <p><strong>プロトコル:</strong> {securityResults.ssl.protocol}</p>
                  <p><strong>暗号スイート:</strong> {securityResults.ssl.cipher}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'seo' && (
          <div className="seo-results">
            <h3>SEO最適化チェック結果</h3>
            
            <div className="meta-tags">
              <h4>メタタグ</h4>
              <table>
                <thead>
                  <tr>
                    <th>タグ</th>
                    <th>結果</th>
                    <th>備考</th>
                  </tr>
                </thead>
                <tbody>
                  {seoResults.metaTags.map((tag, index) => (
                    <tr key={index} className={tag.status === 'PASS' ? 'pass' : 'fail'}>
                      <td>{tag.name}</td>
                      <td>{tag.status}</td>
                      <td>{tag.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="structure">
              <h4>構造</h4>
              <table>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>結果</th>
                    <th>備考</th>
                  </tr>
                </thead>
                <tbody>
                  {seoResults.structure.map((item, index) => (
                    <tr key={index} className={item.status === 'PASS' ? 'pass' : 'fail'}>
                      <td>{item.name}</td>
                      <td>{item.status}</td>
                      <td>{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="performance-seo">
              <h4>パフォーマンス</h4>
              <table>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>結果</th>
                    <th>備考</th>
                  </tr>
                </thead>
                <tbody>
                  {seoResults.performance.map((item, index) => (
                    <tr key={index} className={item.status === 'PASS' ? 'pass' : 'fail'}>
                      <td>{item.name}</td>
                      <td>{item.status}</td>
                      <td>{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="content-seo">
              <h4>コンテンツ</h4>
              <table>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>結果</th>
                    <th>備考</th>
                  </tr>
                </thead>
                <tbody>
                  {seoResults.content.map((item, index) => (
                    <tr key={index} className={item.status === 'PASS' ? 'pass' : 'fail'}>
                      <td>{item.name}</td>
                      <td>{item.status}</td>
                      <td>{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === 'accessibility' && (
          <div className="accessibility-results">
            <h3>アクセシビリティチェック結果</h3>
            
            <div className="wcag">
              <h4>WCAG 2.1準拠状況</h4>
              <table>
                <thead>
                  <tr>
                    <th>ガイドライン</th>
                    <th>結果</th>
                    <th>備考</th>
                  </tr>
                </thead>
                <tbody>
                  {accessibilityResults.wcag.map((guideline, index) => (
                    <tr key={index} className={guideline.status === 'PASS' ? 'pass' : 'fail'}>
                      <td>{guideline.guideline}</td>
                      <td>{guideline.status}</td>
                      <td>{guideline.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="other-accessibility">
              <h4>その他のアクセシビリティ機能</h4>
              <table>
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>結果</th>
                    <th>備考</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={accessibilityResults.aria.status === 'PASS' ? 'pass' : 'fail'}>
                    <td>ARIA属性</td>
                    <td>{accessibilityResults.aria.status}</td>
                    <td>{accessibilityResults.aria.notes}</td>
                  </tr>
                  <tr className={accessibilityResults.keyboard.status === 'PASS' ? 'pass' : 'fail'}>
                    <td>キーボード操作</td>
                    <td>{accessibilityResults.keyboard.status}</td>
                    <td>{accessibilityResults.keyboard.notes}</td>
                  </tr>
                  <tr className={accessibilityResults.screenReader.status === 'PASS' ? 'pass' : 'fail'}>
                    <td>スクリーンリーダー</td>
                    <td>{accessibilityResults.screenReader.status}</td>
                    <td>{accessibilityResults.screenReader.notes}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === 'checklist' && (
          <div className="checklist-results">
            <h3>公開前チェックリスト</h3>
            
            <div className="checklist-categories">
              {['コンテンツ', '技術', '分析', '収益化', 'マーケティング'].map(category => (
                <div key={category} className="checklist-category">
                  <h4>{category}</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>項目</th>
                        <th>状態</th>
                      </tr>
                    </thead>
                    <tbody>
                      {preLaunchChecklist
                        .filter(item => item.category === category)
                        .map((item, index) => (
                          <tr key={index} className={item.status === 'PASS' ? 'pass' : 'fail'}>
                            <td>{item.item}</td>
                            <td>{item.status}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .test-results-dashboard {
          background-color: white;
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
        h3 {
          color: #444;
          margin-bottom: 15px;
        }
        h4 {
          color: #555;
          margin: 20px 0 10px;
        }
        .tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 20px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
        }
        .tab {
          padding: 8px 16px;
          background-color: #f5f5f5;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .tab:hover {
          background-color: #eee;
        }
        .tab.active {
          background-color: #ff6b81;
          color: white;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th, td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }
        th {
          background-color: #f9f9f9;
          font-weight: 600;
        }
        tr.pass td {
          background-color: rgba(76, 175, 80, 0.1);
        }
        tr.fail td {
          background-color: rgba(244, 67, 54, 0.1);
        }
        tr.na td {
          background-color: rgba(158, 158, 158, 0.1);
        }
        .score-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 20px;
        }
        .score-card {
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 15px;
          text-align: center;
          width: 100px;
        }
        .score {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .label {
          font-size: 0.8rem;
          color: #666;
        }
        .ssl-card {
          display: flex;
          align-items: center;
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 20px;
        }
        .ssl-grade {
          font-size: 2.5rem;
          font-weight: bold;
          color: #4CAF50;
          margin-right: 20px;
          min-width: 60px;
          text-align: center;
        }
        .ssl-details {
          flex: 1;
        }
        .ssl-details p {
          margin: 5px 0;
        }
        .checklist-categories {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        @media (max-width: 768px) {
          .tabs {
            justify-content: center;
          }
          .score-cards {
            justify-content: center;
          }
          .checklist-categories {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

// スコアに応じた色を返す関数
function getScoreColor(score) {
  if (score >= 90) return '#4CAF50'; // 緑
  if (score >= 70) return '#FFC107'; // 黄色
  return '#F44336'; // 赤
}

// プロモーション計画表示コンポーネント
export function PromotionPlanDisplay() {
  const promotionPlan = getPromotionPlan();
  
  return (
    <div className="promotion-plan">
      <h2>プロモーション計画</h2>
      
      <div className="plan-section">
        <h3>SNSマーケティング</h3>
        <table>
          <thead>
            <tr>
              <th>プラットフォーム</th>
              <th>アクション</th>
              <th>頻度</th>
              <th>ターゲット</th>
            </tr>
          </thead>
          <tbody>
            {promotionPlan.socialMedia.map((item, index) => (
              <tr key={index}>
                <td>{item.platform}</td>
                <td>{item.action}</td>
                <td>{item.frequency}</td>
                <td>{item.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="plan-section">
        <h3>コンテンツマーケティング</h3>
        <table>
          <thead>
            <tr>
              <th>タイプ</th>
              <th>トピック</th>
              <th>頻度</th>
              <th>配信方法</th>
            </tr>
          </thead>
          <tbody>
            {promotionPlan.contentMarketing.map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.topic}</td>
                <td>{item.frequency}</td>
                <td>{item.distribution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="plan-section">
        <h3>コラボレーション</h3>
        <table>
          <thead>
            <tr>
              <th>パートナー</th>
              <th>アクション</th>
              <th>メリット</th>
            </tr>
          </thead>
          <tbody>
            {promotionPlan.collaborations.map((item, index) => (
              <tr key={index}>
                <td>{item.partner}</td>
                <td>{item.action}</td>
                <td>{item.benefit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="plan-section">
        <h3>広告</h3>
        <table>
          <thead>
            <tr>
              <th>プラットフォーム</th>
              <th>ターゲット</th>
              <th>予算</th>
            </tr>
          </thead>
          <tbody>
            {promotionPlan.advertising.map((item, index) => (
              <tr key={index}>
                <td>{item.platform}</td>
                <td>{item.target}</td>
                <td>{item.budget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="plan-section">
        <h3>メールマーケティング</h3>
        <div className="email-marketing">
          <div className="email-item">
            <h4>ウェルカムシリーズ</h4>
            <p>{promotionPlan.emailMarketing.welcomeSeries}</p>
          </div>
          <div className="email-item">
            <h4>定期ニュースレター</h4>
            <p>{promotionPlan.emailMarketing.regularNewsletter}</p>
          </div>
          <div className="email-item">
            <h4>プロモーションキャンペーン</h4>
            <p>{promotionPlan.emailMarketing.promotionalCampaigns}</p>
          </div>
        </div>
      </div>
      
      <div className="plan-section">
        <h3>オフラインプロモーション</h3>
        <table>
          <thead>
            <tr>
              <th>タイプ</th>
              <th>頻度</th>
              <th>場所/アイテム</th>
            </tr>
          </thead>
          <tbody>
            {promotionPlan.offlinePromotion.map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.frequency || '-'}</td>
                <td>{item.location || item.items || item.distribution || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <style jsx>{`
        .promotion-plan {
          background-color: white;
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
        h3 {
          color: #444;
          margin: 25px 0 15px;
          padding-bottom: 5px;
          border-bottom: 1px solid #eee;
        }
        h4 {
          color: #555;
          margin: 15px 0 5px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th, td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }
        th {
          background-color: #f9f9f9;
          font-weight: 600;
        }
        tr:hover td {
          background-color: #f9f9f9;
        }
        .email-marketing {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }
        .email-item {
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 15px;
        }
        .email-item p {
          margin: 5px 0 0;
          color: #666;
        }
        @media (max-width: 768px) {
          .email-marketing {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default {
  TestResultsDashboard,
  PromotionPlanDisplay
};
