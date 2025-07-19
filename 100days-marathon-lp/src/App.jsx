import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* ヒーローセクション */}
      <section id="hero" className="section hero-section">
        <h1>100日でフルマラソン完走する裏技ガイド</h1>
        <p>40代の運動習慣のない初心者でも、最短で達成できるフルマラソン完走の攻略ガイド！</p>
        <button className="cta-button">今すぐ裏技をGET！</button>
      </section>

      {/* 特徴・メリット */}
      <section id="features" className="section features-section">
        <h2>このガイドで得られるもの</h2>
        <ul>
          <li>運動嫌いでも続けられる！</li>
          <li>無理なく楽しく走れる秘訣！</li>
          <li>怪我なく完走するための裏ワザ！</li>
        </ul>
      </section>

      {/* 課題提起 */}
      <section id="problems" className="section problems-section">
        <h2>こんなお悩みありませんか？</h2>
        <ul>
          <li>運動が苦手で何から始めていいか分からない</li>
          <li>フルマラソンなんて夢のまた夢だと思っている</li>
          <li>忙しくてトレーニングの時間が取れない</li>
        </ul>
      </section>

      {/* 解決策 */}
      <section id="solution" className="section solution-section">
        <h2>その悩み、このガイドが解決します！</h2>
        <p>独自のメソッドで、あなたのマラソン完走をサポートします。</p>
      </section>

      {/* お客様の声 */}
      <section id="testimonials" className="section testimonials-section">
        <h2>お客様の声</h2>
        <div className="testimonial-card">
          <p>"まさか自分がフルマラソンを完走できるなんて！このガイドのおかげです！"</p>
          <p>- 40代 男性</p>
        </div>
      </section>

      {/* 料金 */}
      <section id="pricing" className="section pricing-section">
        <h2>料金プラン</h2>
        <div className="price-card">
          <h3>ベーシックプラン</h3>
          <p>月額 9,800円</p>
          <button className="cta-button">申し込む</button>
        </div>
      </section>

      {/* CTA (最終的なジョークのトリガー) */}
      <section id="cta" className="section cta-section">
        <h2>さあ、あなたもフルマラソン完走の夢を叶えよう！</h2>
        <button className="cta-button final-cta">今すぐ裏技をGET！</button>
      </section>

      {/* FAQ */}
      <section id="faq" className="section faq-section">
        <h2>よくある質問</h2>
        <div className="faq-item">
          <h3>Q. 本当に100日で完走できますか？</h3>
          <p>A. （ここにジョークの回答が入ります）</p>
        </div>
      </section>
    </div>
  );
}

export default App;