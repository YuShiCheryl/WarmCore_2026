import React from 'react';
import './GMETPage.css';
import './HomePage.css';

const GMETPage = () => {
  return (
    <div className="gmet-page">
      {/* Header */}
      <header className="header">
        <a href="/" className="header-logo-link">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/516757032e8d6f6fb2833c8797fc30923b4fc086?width=500" 
            alt="Warmcore Logo" 
            className="header-logo"
          />
        </a>
        <nav className="header-nav">
          <a href="/gmet-tech" className="nav-link">
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

      {/* S1 - Hero Section */}
      <section className="gmet-hero">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/c5f343bf0ee588b87b636d69c14388ebf483aefc?width=2882" 
          alt="GMET Technology Background" 
          className="gmet-hero-bg"
        />
        <h1 className="gmet-hero-title">
          <span className="gmet-hero-title-bold gmet-trademark">GMET</span>® 玻璃态金属材料控温技术
        </h1>
      </section>

      <div className="gmet-sections-2-5">
      {/* S2 - Introduction Section */}
      <section className="gmet-intro">
        <div className="gmet-intro-text-card">
          <p className="gmet-intro-text">
            <span className="gmet-intro-bold gmet-trademark">GMET</span>® 是北京暖芯科技自主研发的新一代电热发热材料，基于玻璃态非晶金属带材。相比传统电热丝、碳涂层等方案，<span className="gmet-trademark">GMET</span> 兼顾了发热效率、耐久性与安全性，可作为多种发热产品与系统的底层技术平台。
          </p>
          <p className="gmet-intro-text">
            在制造过程中，我们将熔融合金浇注到高速旋转的特制冷却轮上，以约每秒一百万度的极高冷却速度快速凝固。由于结晶时间被大幅压缩，金属内部无法形成规则晶格，从而得到原子无序排列的玻璃态非晶结构。这种结构使 <span className="gmet-trademark">GMET</span> 具备更高的电阻率、更好的力学强度和优异的疲劳性能，为稳定可控的电热输出提供了技术基础。
          </p>
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/477132c996e38c0b75942252e0b75c145e31fdef?width=1220" 
            alt="GMET Material Structure" 
            className="gmet-intro-structure"
          />
        </div>
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/eb82e0fff701a72f3099673e3809e03454496a72?width=1238" 
          alt="GMET Material" 
          className="gmet-intro-image"
        />
      </section>

      {/* S3 - Specifications Grid */}
      <section className="gmet-specs">
        <div className="gmet-spec-item">
          <div className="gmet-spec-value">0.02mm</div>
          <div className="gmet-spec-label">金属材料厚度</div>
        </div>
        <div className="gmet-spec-item">
          <div className="gmet-spec-value">30万次</div>
          <div className="gmet-spec-label">30万次弯折无裂纹，耐疲劳性远超同类材料</div>
        </div>
        <div className="gmet-spec-item">
          <div className="gmet-spec-value">快速响应</div>
        </div>
        <div className="gmet-spec-item">
          <div className="gmet-spec-value">3倍强度</div>
          <div className="gmet-spec-label">抗拉强度为不锈钢的3倍</div>
        </div>
        <div className="gmet-spec-item">
          <div className="gmet-spec-value">74%</div>
          <div className="gmet-spec-label">平均能耗仅为传统发热材料的74%</div>
        </div>
        <div className="gmet-spec-item">
          <div className="gmet-spec-value">精准控温</div>
        </div>
      </section>

      {/* S4 - Comparison Section */}
      <section className="gmet-comparison">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/4bc9707b4a683afd802ffebd5cd83eac3b42a992?width=830" 
          alt="GMET Material Close-up" 
          className="gmet-comparison-image"
        />
        <div className="gmet-comparison-text">
          <p>
            传统电热丝由于发热面积有限，工作时容易形成局部高温区：一方面表面温度分布不均，很难在合适位置布置温度传感器实现真正的闭环控温，只能依靠功率档位粗调；另一方面局部过热带来温度波动大、干燥、烫伤甚至起火等风险。碳基涂层、蚀刻金属等方案虽然一定程度上改善均匀性，但涂层老化、局部脱落导致性能衰减的问题仍然存在。
          </p>
          <p>
            <span className="gmet-comparison-bold gmet-trademark">GMET</span> 采用超薄、超宽、均质金属带材作为发热体，有更大的有效发热面积，使温度分布更均匀，便于在系统层面实现精确控温。均质金属材料避免涂层体系常见的界面老化与脱落，长期稳定性更佳。优异的抗拉与弯折疲劳性能，使其能够适应床上用品、座椅、可穿戴护具等需要反复压覆、弯折、踩踏等应用场景。
          </p>
        </div>
      </section>

      {/* S5 - Features Grid */}
      <section className="gmet-features">
        <div className="gmet-feature-card">
          <div className="gmet-feature-title">温度更精准</div>
        </div>
        <div className="gmet-feature-card">
          <div className="gmet-feature-title">低压更安全</div>
        </div>
        <div className="gmet-feature-card">
          <div className="gmet-feature-title">一体金属更耐久</div>
        </div>
        <div className="gmet-feature-card">
          <div className="gmet-feature-title">更节能高效</div>
        </div>
        <div className="gmet-feature-card">
          <div className="gmet-feature-title">更智能</div>
        </div>
        <div className="gmet-feature-card">
          <div className="gmet-feature-title">响应更快</div>
        </div>
      </section>
      </div>

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

        <p className="footer-copyright">北京暖芯科技有限公司</p>
      </footer>
    </div>
  );
};

export default GMETPage;



