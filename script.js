(function () {
  // 如果用 GitHub Pages，自动补上仓库前缀 /<repo>/
  const repoBase =
    location.hostname.endsWith('github.io')
      ? '/' + location.pathname.split('/')[1] + '/'
      : '/';

  const VIDEO_SOURCE = repoBase + 'media/nus-ba-video.mp4';
  const SAMPLE_VIDEO = 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4';

  const wrapper = document.querySelector('.video-wrapper');
  const video = document.getElementById('questionVideo');
  const source = document.getElementById('videoSource');
  const placeholder = document.querySelector('.video-placeholder');
  const previewButton = document.getElementById('previewButton');

  if (!video || !source) return;

  let currentSource = '';
  let officialLoaded = false;

  function markPending() {
    wrapper?.setAttribute('data-video-pending', '');
    wrapper?.removeAttribute('data-video-ready');
    placeholder?.setAttribute('aria-live', 'polite');
  }
  function markReady() {
    wrapper?.setAttribute('data-video-ready', '');
    wrapper?.removeAttribute('data-video-pending');
    placeholder?.removeAttribute('aria-live');
  }
  function attachVideo(url) {
    currentSource = url;
    source.src = url;
    video.load();
  }
  function resetVideo() {
    currentSource = '';
    source.removeAttribute('src');
    video.load();
  }

  // 直接尝试加载正式视频，不做 HEAD/Range 预探测
  function tryLoadOfficialVideo() {
    markPending();
    attachVideo(VIDEO_SOURCE);
    officialLoaded = true;
    // 可选：在控制台打印最终解析路径，快速排查 404
    console.log('Loading video from:', new URL(VIDEO_SOURCE, location.href).toString());
  }

  video.addEventListener('loadeddata', () => {
    if (currentSource && (currentSource !== VIDEO_SOURCE || officialLoaded)) {
      markReady();
    }
  });
  video.addEventListener('error', () => {
    if (currentSource === VIDEO_SOURCE) {
      console.error('无法加载正式视频（多半是 404 或编码不兼容）。');
      resetVideo();
      markPending();
      officialLoaded = false;
    }
  });

  previewButton?.addEventListener('click', () => {
    attachVideo(SAMPLE_VIDEO);
    officialLoaded = false;
    markReady();
    video.play().catch(() => {});
  });

  tryLoadOfficialVideo();
})();
