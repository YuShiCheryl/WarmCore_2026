# 字体文件使用说明

## 📁 字体文件放置位置

请将客户提供的字体文件放在这个 `public/fonts/` 文件夹中。

## 🔤 字体文件命名

项目支持三种字体类型，请根据以下命名规则放置文件：

### 1. 主要字体 (Primary Font)
用于标题和重要文本：
- `primary-font.woff2` (推荐，文件最小)
- `primary-font.woff` (备选)
- `primary-font.ttf` (备选)
- `primary-font-bold.woff2` (粗体版本)
- `primary-font-bold.woff` (粗体备选)
- `primary-font-bold.ttf` (粗体备选)

### 2. 次要字体 (Secondary Font)
用于正文和普通文本：
- `secondary-font.woff2`
- `secondary-font.woff`
- `secondary-font.ttf`

### 3. 强调字体 (Accent Font)
用于品牌名称和特殊强调：
- `accent-font.woff2`
- `accent-font.woff`
- `accent-font.ttf`

## 📝 如何修改字体文件名

如果客户的字体文件名不同，请按以下步骤修改：

1. 将字体文件复制到 `public/fonts/` 文件夹
2. 打开 `src/index.css` 文件
3. 找到 `@font-face` 定义部分
4. 修改 `url('/fonts/...')` 中的文件名，使其匹配你的字体文件名

例如，如果客户提供的字体文件是 `WarmCore-Regular.ttf`，则修改为：
```css
@font-face {
  font-family: 'CustomPrimary';
  src: url('/fonts/WarmCore-Regular.ttf') format('truetype');
  ...
}
```

## 🎯 字体格式优先级

项目会按以下顺序尝试加载字体（优先使用文件更小的格式）：
1. `.woff2` - 最佳选择，文件最小，现代浏览器支持
2. `.woff` - 备选，兼容性好
3. `.ttf` 或 `.otf` - 最后备选

## ✅ 检查字体是否加载成功

1. 启动开发服务器：`npm run dev`
2. 打开浏览器开发者工具 (F12)
3. 查看 Console 是否有字体加载错误
4. 在 Elements 面板中检查元素，确认字体已应用

## 💡 提示

- 如果只有一种字体文件，可以只定义一种字体，然后在 CSS 变量中使用相同的字体名称
- 如果客户提供了多个字重（如 Light, Regular, Medium, Bold），可以为每个字重创建单独的 @font-face 定义
- 字体文件较大时，建议使用 `.woff2` 格式以优化加载速度

