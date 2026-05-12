# Default Studio

一个中文科技风、深色主题的静态 AI 官网示例项目，带有黑蓝配色、国际米兰元素和动态背景切换。

## 文件结构

- `index.html`：页面结构
- `styles.css`：全部视觉样式和动画
- `script.js`：动态背景切换和进入动画控制

## 使用方式

直接用浏览器打开 `index.html` 即可。

如果你想部署到服务器，可以把这三个文件一起上传。

## 部署方式

### GitHub Pages

1. 把 `index.html`、`styles.css`、`script.js`、`vercel.json` 放到一个新的 GitHub 仓库根目录。
2. 推送到 GitHub。
3. 进入仓库 `Settings` -> `Pages`。
4. 在 `Build and deployment` 里选择 `Deploy from a branch`。
5. `Branch` 选 `main`，`Folder` 选 `/ (root)`。
6. 保存后等待几分钟，GitHub 会给你一个 Pages 地址。

### Vercel

1. 登录 [Vercel](https://vercel.com)。
2. 点击 `Add New...` -> `Project`。
3. 导入你的 GitHub 仓库。
4. 保持默认设置即可，Vercel 会自动识别这是静态站点。
5. 点击 `Deploy`。
6. 部署完成后，Vercel 会生成一个可访问的线上地址。
