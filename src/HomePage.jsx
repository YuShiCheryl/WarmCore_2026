import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/516757032e8d6f6fb2833c8797fc30923b4fc086?width=500" 
          alt="Warmcore Logo" 
          className="header-logo"
        />
        <nav className="header-nav">
          <a href="#gmet" className="nav-link">
            <span className="nav-link-bold gmet-trademark">GMET</span>®技术
          </a>
          <a href="#solutions" className="nav-link">解决方案与产品</a>
          <a href="#about" className="nav-link">关于我们</a>
        </nav>
        <div className="language-selector">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/b5713774f00b3eb06583559e2886eddbd5835929?width=24" 
            alt="Language" 
            className="language-icon"
          />
          <span className="language-text">ENG</span>
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/cfc9047dc43436e605a5762b2ab61e04ed7c4aa9?width=16" 
            alt="Dropdown" 
            className="language-arrow"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-title">
              专注微气候控制，<br />给用户恰到好处的温度。
            </h1>
            <p className="hero-subtitle">2022北京冬季奥运会指定供应商</p>
          </div>
          <button className="hero-button">了解智能深睡毯Pro3.0</button>
          <button className="hero-button hero-button-secondary">
            了解 <span className="button-bold gmet-trademark">GMET</span>®专利技术
          </button>
          <svg className="scroll-indicator" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 24L24 32M24 32L32 24M24 32V16M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" stroke="#B3B3B3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* Section 1 - Product Showcase */}
      <section className="section-product-showcase">
        <h2 className="section-title">智能深睡毯Pro3.0</h2>
        <div className="product-grid">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/e91a8dd5219358d384d52934869cb3da834d35d1?width=1348" 
            alt="Product main" 
            className="product-image-main"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/3d8275ffb61e126c4128d182c73770d95b74811b?width=416" 
            alt="Product detail 1" 
            className="product-image-secondary"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/b839d7df956f24bc1bd5921216d612e11829102a?width=416" 
            alt="Product detail 2" 
            className="product-image-secondary"
          />
        </div>
        <p className="section-overlay-text">前所未有的舒适体感，<br />睡眠新科技。</p>
        <button className="navigation-button">
          <span className="navigation-symbol">&gt;</span>
        </button>
      </section>

      {/* Section 2 - Comfort Experience */}
      <section className="section-comfort">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/dec1fcb8d8023fa59af7174fb362bbd95312ecbc?width=1612" 
          alt="Comfort experience" 
          className="comfort-image"
        />
        <p className="comfort-text">前所未有的舒适体感，<br />睡眠新科技。</p>
      </section>

      {/* Section 3 - Temperature Control */}
      <section className="section-temperature">
        <h2 className="section-heading">所设即所得，<br />温度从未如此精准。</h2>
        <p className="section-description">
          恒温并非静止，而是主动对环境做出响应的动态平衡。夜晚的舒适，不应因为被褥的厚薄或环境的冷暖而改变。<span className="text-bold gmet-trademark">GMET</span>®技术，如同一位细心的守护者时刻感受温度的细微变化。这一切，只为让您更好的进入深睡眠。
        </p>
        <div className="temperature-visual-container">
          <div className="temperature-visual-background"></div>
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/e2909526adb5c9f6d915b08c837a3b9e9cf2414c?width=1122" 
            alt="Temperature visualization 1" 
            className="temperature-image-left"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/75bc846046eda948f1a0351b88ad8d08c28008ce?width=1124" 
            alt="Temperature visualization 2" 
            className="temperature-image-right"
          />
        </div>
        <div className="section-navigation">
          <svg className="nav-arrow nav-arrow-left" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 16L16 24M16 24L24 32M16 24L32 24M24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44Z" stroke="#B3B3B3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg className="nav-arrow nav-arrow-right" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 32L32 24M32 24L24 16M32 24L16 24M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4Z" stroke="#B3B3B3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* Section 4 - Even Temperature */}
      <section className="section-even-temperature">
        <h2 className="section-heading">均匀温场,温润不燥。</h2>
        <p className="section-description">
          这一切，得益于我们独立研发的<span className="text-bold gmet-trademark">GMET</span>®技术。它采用先进的低温发热非晶材料，发热面积高达传统电热丝的25倍，而厚度仅为20微米。这种"广而薄"的突破性结构，使得热量能够被瞬间、均匀地传导至整个毯面，从物理根源上避免了传统发热材料难以解决的局部过热与冷暖不均现象，为您构建一个真正稳定、均衡的睡眠热环境。
        </p>
        <div className="material-showcase">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9b83c50ca7b77623aec68e33abd39fd9a952f6ec?width=938" 
            alt="Material technology 1" 
            className="material-image material-image-1"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/54d6464e0ddd64d913171c725c21ea7e69ef2cf1?width=686" 
            alt="Material technology 2" 
            className="material-image material-image-2"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/83bd98debebc356a17a1a5aaba5bf6b3476d9c6d?width=564" 
            alt="Material technology 3" 
            className="material-image material-image-3"
          />
        </div>
      </section>

      {/* Section 5 - Dual Zone Control */}
      <section className="section-dual-zone">
        <h2 className="section-heading">独立分区控温：两个人各睡各的"恰好"，<br />舒适和而不同。</h2>
        <p className="section-description">
          双人深睡毯搭载DualAdjust左右分区控温，让相拥的亲密与相异的体温偏好，从此无需妥协。无论是怕冷或怕热。系统为左右两侧构建独立的温度闭环，确保每一侧的设定、传感与调节互不干扰。
        </p>
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/787d6575854d3c80124dfa0743765363e475ac09?width=1574" 
          alt="Dual zone temperature control" 
          className="dual-zone-image"
        />
      </section>

      {/* Section 6 - Smart Algorithm Hero */}
      <section className="section-smart-hero">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/5dd57be0e466f2b8beeff4577e0c787b791b94e3?width=2880" 
          alt="Smart algorithm background" 
          className="smart-hero-background"
        />
        <h2 className="smart-hero-title">智能算法，<br />深睡更容易。</h2>
      </section>

      {/* Section 7 - Sleep Rhythm */}
      <section className="section-sleep-rhythm">
        <h2 className="section-heading">根据睡眠节律与状态智能调温，睡得更好，只属于你的私人深睡眠助手。</h2>
        <p className="section-description section-description-center">
          安睡，是身体在夜间律动的旅程。在这条由4-6个睡眠周期构成的波浪线上，从入睡、深睡到快速眼动期，身体对温度的需求时刻变化。智能深睡毯Pro，正是为此而生的深眠助手。它凭借精密算法，懂得"何时该暖，何时该
凉"。您夜间的每一次翻身、起夜、短暂的微觉醒，都能被它敏锐察觉，并通过对温度的
细腻调节，助您更平稳地过渡到下一个睡眠周期。
        </p>
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b3ad728a071fecb6143bc4369644b83d693e616a?width=2880" 
          alt="Sleep rhythm visualization" 
          className="sleep-rhythm-image"
        />
      </section>

      {/* Section 8 - Zero Noise */}
      <section className="section-zero-noise">
        <h2 className="section-heading">0噪音：我们为安睡做减法<br />无感唤醒：清晨轻微降温，像从云里慢慢醒来</h2>
        <div className="feature-grid">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/0e0c04bd4bfc9fa39cd653dc7c981fffaf89389b?width=754" 
            alt="Feature 1" 
            className="feature-image"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/315b92246346324c22705b5eb487b311da3ab70e?width=754" 
            alt="Feature 2" 
            className="feature-image"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/403a52b6d2286d469fef87c0950eae789fd0346f?width=754" 
            alt="Feature 3" 
            className="feature-image"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/9a340560d88925f4575c498384992d0a81dc38fe?width=754" 
            alt="Feature 4" 
            className="feature-image"
          />
        </div>
      </section>

      {/* Section 9 - Safety Hero */}
      <section className="section-safety-hero">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/6b3a2d5f61e8c466fd874bdd4532ccea26314dae?width=1470" 
          alt="Safety background" 
          className="safety-hero-background"
        />
        <h2 className="safety-hero-title">贴身级安全与耐久，<br />科学验证更安心。</h2>
      </section>

      {/* Section 10 - Safety Features */}
      <section className="section-safety-features">
        <h2 className="section-heading">重新定义卧室睡眠安全，<br />每晚8小时享绝对安全区。</h2>
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/2425f5f8f19b4a421be0c3c58fa853954e885ee8?width=1956" 
          alt="Safety features" 
          className="safety-features-image"
        />
      </section>

      {/* Section 11 - Product Comparison */}
      <section className="section-product-comparison">
        <h2 className="section-heading">重新定义卧室睡眠安全，<br />每晚8小时享绝对安全区。</h2>
        <div className="product-comparison-grid">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/965877888cc36164f1ef6e4c75739ceb02cd1659?width=502" 
            alt="Product 1" 
            className="comparison-image"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/126d73be35535cb21112a399342b1fceb01e51c8?width=502" 
            alt="Product 2" 
            className="comparison-image"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/1bd14e8208909a594aa18d636b1fc0fa9e86bb78?width=502" 
            alt="Product 3" 
            className="comparison-image"
          />
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/6dcfbc2dbc174d4d8db81dc6404f270120659c8d?width=502" 
            alt="Product 4" 
            className="comparison-image"
          />
        </div>
        <p className="comparison-subtitle">内部产品功能比对：不用做复杂攻略，<br />把觉睡好的事情就交给我们了</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-divider"></div>
        
        <div className="footer-content">
          <div className="footer-newsletter">
            <svg width="193" height="112" viewBox="0 0 193 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text fill="white" style={{ whiteSpace: 'pre', fontFamily: 'Font1', fontSize: '13px', fontWeight: 'bold' }}>
                <tspan x="0" y="35.627">希望获取更多咨询？</tspan>
                <tspan x="0" y="60.627">留下您的邮箱</tspan>
              </text>
              <text fill="#AEAEB2" style={{ whiteSpace: 'pre', fontFamily: 'Font1', fontSize: '10px' }}>
                <tspan x="0" y="102.418">输入电子邮件</tspan>
              </text>
              <rect x="0.25" y="111.25" width="149.5" height="0.5" stroke="white" strokeWidth="0.5"/>
            </svg>
            
            <div className="footer-language-selector">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/b5713774f00b3eb06583559e2886eddbd5835929?width=24" 
                alt="Language" 
                className="footer-language-icon"
              />
              <span className="footer-language-text">ENG</span>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/cfc9047dc43436e605a5762b2ab61e04ed7c4aa9?width=16" 
                alt="Dropdown" 
                className="footer-language-arrow"
              />
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-column-title">关于公司</h3>
              <ul className="footer-column-links">
                <li><a href="#innovation">技术创新</a></li>
                <li><a href="#about">关于我们</a></li>
                <li><a href="#contact">联系我们</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">服务支持</h3>
              <ul className="footer-column-links">
                <li><a href="#partnership">企业合作</a></li>
                <li><a href="#app">APP下载</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">产品</h3>
              <ul className="footer-column-links">
                <li><a href="#solutions">解决方案与产品</a></li>
                <li><a href="#news">更多产品资讯</a></li>
              </ul>
            </div>
          </div>
        </div>

        <p className="footer-copyright">北京暖芯科技有限公司</p>
      </footer>
    </div>
  );
};

export default HomePage;
