import React from 'react';
import './TechnologyPage.css';
import './HomePage.css'; // 复用全局变量与字体设置

const TechnologyPage = () => {
  return (
    <div className="technology-page">
      {/* Header：与首页保持一致 */}
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

      {/* 中间内容留空 */}

      {/* Footer：与首页保持一致 */}
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

export default TechnologyPage;

