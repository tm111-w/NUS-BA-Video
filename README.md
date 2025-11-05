
# NUS Business Analytics Video Landing Page

轻量、现代的静态网站，用于展示你对 NUS Business Analytics 项目视频问题的回答。将它托管在 GitHub Pages 等云端平台，让任何人都能随时访问。

## 快速部署到 GitHub Pages

1. **创建仓库**：在 GitHub 上建立一个新的公开仓库（例如 `nus-ba-video`），并将本项目代码推送到 `main` 分支。
2. **启用 GitHub Pages**：进入仓库的 **Settings → Pages**，在 “Build and deployment” 中选择 `GitHub Actions` 作为 Source。
3. **自动发布**：仓库中已经包含 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 工作流程。启用后，只要你向 `main` 分支推送内容，GitHub Actions 就会自动将整个站点部署到 Pages。
4. **查看网址**：部署完成后，GitHub 会在 Actions 日志与 Pages 设置页显示公开网址（通常形如 `https://<username>.github.io/<repo>/`）。

> 如果你想手动触发部署，可在仓库的 **Actions** 页面中选择 `Deploy static site to GitHub Pages` 工作流程并点击 “Run workflow”。

## 添加你的正式视频

你现在可以直接把官方回答的 MP4 放在仓库里，无需额外的托管服务：

1. 将文件命名为 `nus-ba-video.mp4`，并放入项目根目录下的 [`media/`](media/) 文件夹（若仓库里没有该文件夹，可自行创建）。
2. Git 建议：若视频超过 25 MB，请考虑使用 [Git LFS](https://git-lfs.com) 或发布到 GitHub Releases 以避免推送失败。
3. 文件上传后，无需修改任何脚本，页面会自动尝试加载 `media/nus-ba-video.mp4`。若文件尚未上传，网页会继续显示占位提示。
4. 推送更新后的代码即可触发 GitHub Pages 重新部署。

如果你暂时还没有准备好正式视频，可以点击页面上的 “预览示例视频” 按钮预览示例素材。

## 自定义页面内容

- 编辑 [`index.html`](index.html) 中的文字内容，讲述你的故事、亮点与联系方式。
- 在 [`styles.css`](styles.css) 中调整颜色、排版与动效，打造个人风格。
- 若需更换封面图，可更新 [`poster.svg`](poster.svg)。

## 本地预览（可选）

尽管无需本地部署即可直接通过 GitHub Pages 发布，你依然可以在提交前本地预览效果：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000` 预览。确认无误后推送到 GitHub，等待自动部署。

祝你申请顺利，早日收到好消息！
