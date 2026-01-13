# 网页字号分析报告

## 📊 字号统计

网页中共有 **9种不同的字号**（已缩小85%后的值）

---

## 📝 字号分类

### 1. **超大标题 (Extra Large Heading)**
- **54.4px** - `.section-title` (章节主标题)
  - 用途：产品展示区域的标题
  - 示例：`智能深睡毯Pro3.0`

### 2. **大标题 (Large Heading)**
- **51px** - `.hero-title` (首页主标题)
  - 用途：Hero区域的主标题
  - 示例：`专注微气候控制，给用户恰到好处的温度。`

### 3. **中标题 (Medium Heading)**
- **40.8px** - 多个元素共用
  - `.section-overlay-text` (章节覆盖文字)
  - `.comfort-text` (舒适体验文字)
  - `.smart-hero-title` (智能算法标题)
  - `.safety-hero-title` (安全特性标题)
  - 用途：重要区域的标题或强调文字

- **30.6px** - `.section-heading` (章节标题)
  - 用途：各section的标题
  - 示例：`所设即所得，温度从未如此精准。`

### 4. **副标题 (Subtitle)**
- **20.4px** - 多个元素共用
  - `.hero-subtitle` (Hero副标题)
  - `.comparison-subtitle` (产品对比副标题)
  - 用途：补充说明文字

### 5. **正文 (Body Text)**
- **13.6px** - 多个元素共用
  - `.nav-link` (导航链接)
  - `.hero-button` (按钮文字)
  - `.section-description` (章节描述)
  - 用途：主要正文内容、按钮文字、导航文字

### 6. **小标题 (Small Heading)**
- **12.75px** - 多个元素共用
  - `.navigation-symbol` (导航符号)
  - `.footer-column-title` (Footer列标题)
  - Footer newsletter text (内联样式)
  - 用途：Footer小标题、导航符号

### 7. **辅助文字 (Auxiliary Text)**
- **10.2px** - 多个元素共用
  - `.language-text` (语言选择器文字)
  - `.footer-language-text` (Footer语言文字)
  - `.footer-column-links a` (Footer链接)
  - `.footer-copyright` (版权信息)
  - 用途：Footer辅助信息、链接、版权

### 8. **极小文字 (Extra Small Text)**
- **8.5px** - Footer input placeholder (内联样式)
  - 用途：输入框占位符文字

---

## 📋 字号层级总结

| 层级 | 字号 | 用途 | 使用场景 |
|------|------|------|----------|
| 超大标题 | 54.4px | 章节主标题 | 产品展示区 |
| 大标题 | 51px | 首页主标题 | Hero区域 |
| 中标题 | 40.8px | 重要标题 | 各section强调文字 |
| 中标题 | 30.6px | 章节标题 | 各section标题 |
| 副标题 | 20.4px | 补充说明 | Hero副标题、对比说明 |
| 正文 | 13.6px | 主要内容 | 导航、按钮、描述文字 |
| 小标题 | 12.75px | Footer标题 | Footer列标题 |
| 辅助文字 | 10.2px | 辅助信息 | Footer链接、版权 |
| 极小文字 | 8.5px | 占位符 | 输入框提示 |

---

## 💡 建议

当前字号层级清晰，但可以考虑：
1. 统一相同用途的字号（如所有section标题使用同一字号）
2. 建立CSS变量管理字号系统，便于维护
3. 考虑响应式设计，在不同屏幕尺寸下调整字号

