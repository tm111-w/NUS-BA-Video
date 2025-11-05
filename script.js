(function () {
  const VIDEO_SOURCE = 'media/nus-ba-video.mp4';
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
    if (!url) return;
    currentSource = url;
    source.src = url;
    video.load();
  }

  function resetVideo() {
    currentSource = '';
    source.removeAttribute('src');
    video.load();
  }

  async function probeWithRange(url) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Range: 'bytes=0-0',
        },
        cache: 'no-store',
      });
      return response.ok;
    } catch (error) {
      console.warn('请求视频失败：', error);
      return false;
    }
  }

  async function videoExists(url) {
    try {
      const response = await fetch(url, {
        method: 'HEAD',
        cache: 'no-store',
      });

      if (response.ok) {
        return true;
      }

      if (response.status === 405 || response.status === 403) {
        return probeWithRange(url);
      }

      return false;
    } catch (error) {
      console.warn('HEAD 请求失败，尝试 Range 请求：', error);
      return probeWithRange(url);
    }
  }

  async function tryLoadOfficialVideo() {
    markPending();

    const exists = await videoExists(VIDEO_SOURCE);
    if (!exists) {
      console.warn('未检测到正式视频，将继续显示占位内容。');
      return;
    }

    attachVideo(VIDEO_SOURCE);
    officialLoaded = true;
  }

  video.addEventListener('loadeddata', () => {
    if (currentSource && (currentSource !== VIDEO_SOURCE || officialLoaded)) {
      markReady();
    }
  });

  video.addEventListener('error', () => {
    if (currentSource === VIDEO_SOURCE) {
      console.error('无法加载正式视频，已恢复占位状态。');
      resetVideo();
      markPending();
      officialLoaded = false;
    }
  });

  previewButton?.addEventListener('click', () => {
    attachVideo(SAMPLE_VIDEO);
    officialLoaded = false;
    markReady();
    video.play().catch(() => {
      /* ignore autoplay restrictions */
    });
  });

  tryLoadOfficialVideo();
})();
