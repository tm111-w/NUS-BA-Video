# NUS Business Analytics Video Landing Page

轻量、现代的静态网站，用于展示你对 NUS Business Analytics 项目视频问题的回答。将它托管在 GitHub Pages 等云端平台，让任何人都能随时访问。

## 快速部署到 GitHub Pages

1. **创建仓库**：在 GitHub 上建立一个新的公开仓库（例如 `nus-ba-video`），并将本项目代码推送到 `main` 分支。
2. **启用 GitHub Pages**：进入仓库的 **Settings → Pages**，在 “Build and deployment” 中选择 `GitHub Actions` 作为 Source。
3. **自动发布**：仓库中已经包含 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 工作流程。启用后，只要你向 `main` 分支推送内容，GitHub Actions 就会自动将整个站点部署到 Pages。
4. **查看网址**：部署完成后，GitHub 会在 Actions 日志与 Pages 设置页显示公开网址（通常形如 `https://<username>.github.io/<repo>/`）。

> 如果你想手动触发部署，可在仓库的 **Actions** 页面中选择 `Deploy static site to GitHub Pages` 工作流程并点击 “Run workflow”。

## 添加你的正式视频

1. 将视频文件上传到任意可公开访问的存储位置（可以是 GitHub Releases、云存储或现成的视频 CDN）。
2. 打开 [`script.js`](script.js)，将 `VIDEO_SOURCE` 常量替换为视频的真实 URL：
   ```js
   const VIDEO_SOURCE = 'https://your-hosted-file.mp4';
   ```
3. 推送更新后的代码，GitHub Pages 会自动重新部署。重新加载网页即可看到你的正式视频。

如果你暂时还没有准备好正式视频，可以点击页面上的 “Preview with Sample Video” 按钮预览示例素材。

## 自定义页面内容

- 编辑 [`index.html`](index.html) 中的文字内容，讲述你的故事、亮点与联系方式。
- 在 [`styles.css`](styles.css) 中调整颜色、排版与动效，打造个人风格。
- 若需更换封面图，可更新 [`poster.svg`](poster.svg)。

## 本地预览（可选）

尽管无需本地部署即可直接通过 GitHub Pages 发布，你依然可以在提交前本地预览效果：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000` 即可。预览完成后记得推送到 GitHub，等待自动发布。

---

部署成功后，你就拥有了一个随时可访问的在线展示页，适合在申请材料、邮件或简历中直接分享链接。祝你申请顺利！
