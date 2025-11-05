# NUS Business Analytics 视频展示页

这是一个极简的静态网页，只负责在云端展示你对 NUS Business Analytics 视频题目的回答。代码已经配置好 GitHub Pages 工作流，只要推送到 `main` 分支，最新版本就会自动上线，方便评审或导师随时观看。

## 部署到 GitHub Pages

1. **创建仓库**：在 GitHub 上建立新的公开仓库（例如 `nus-ba-video`），并将本项目代码推送到 `main`。
2. **启用 GitHub Pages**：进入 **Settings → Pages**，在 “Build and deployment” 中选择 `GitHub Actions` 作为 Source。
3. **等待工作流完成**：仓库已包含 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)。只要向 `main` 推送，GitHub Actions 就会自动构建并发布网页。
4. **获取访问链接**：部署结束后，可在 Actions 日志或 Pages 设置页面找到公开网址（通常为 `https://<username>.github.io/<repo>/`）。

> 你也可以在仓库 **Actions** 页面手动运行 `Deploy static site to GitHub Pages`，立即触发一次部署。

## 上传正式视频

1. 将最终版本命名为 `nus-ba-video.mp4`，放在 [`media/`](media/) 文件夹。
2. 若文件超过 25 MB，建议使用 [Git LFS](https://git-lfs.com) 或上传到 GitHub Releases 后再引用，避免推送失败。
3. 提交并推送后，网页会自动尝试加载 `media/nus-ba-video.mp4`。若文件暂时缺失，页面会保留占位提示，并支持预览示例素材。

## 页面结构与自定义

- 网页主体只有一个视频卡片，文件位于 [`index.html`](index.html)。如需修改标题或提示文字，直接编辑其中的文案即可。
- 视觉样式集中在 [`styles.css`](styles.css)。可以调整背景、边框或按钮颜色，打造符合个人风格的展示区。
- 封面图使用 [`poster.svg`](poster.svg)，上传自己的首帧或静态封面即可替换。

## 本地预览（可选）

无需本地部署也能使用 GitHub Pages，但若想提前确认效果，可在项目目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000` 预览。确认无误后推送到 GitHub，等待自动部署。

祝你申请顺利，早日收到好消息！
