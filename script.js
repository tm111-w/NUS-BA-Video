(function () {
  const VIDEO_SOURCE = 'media/nus-ba-video.mp4';
  const VIDEO_SOURCE = 'media/nus-ba-video1.mp4';
  const SAMPLE_VIDEO = 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4';

  const wrapper = document.querySelector('.video-wrapper');
  const video = document.getElementById('questionVideo');
  const source = document.getElementById('videoSource');
  const placeholder = document.querySelector('.video-placeholder');
  const previewButton = document.getElementById('previewButton');

  function markReady() {
    wrapper?.setAttribute('data-video-ready', '');
    wrapper?.removeAttribute('data-video-pending');
  }

  function loadVideo(url) {
    if (!url) return;
    source.src = url;
    video.load();
    markReady();
  }

  async function tryLoadOfficialVideo() {
    if (!VIDEO_SOURCE) {
      placeholder?.setAttribute('aria-live', 'polite');
      return;
    }

    try {
      const response = await fetch(VIDEO_SOURCE, { method: 'HEAD' });
      if (!response.ok) throw new Error('Video not found');
      loadVideo(VIDEO_SOURCE);
    } catch (error) {
      console.warn('Official video not found yet. Showing placeholder instead.', error);
      placeholder?.setAttribute('aria-live', 'polite');
    }
  }

  tryLoadOfficialVideo();

  previewButton?.addEventListener('click', () => {
    loadVideo(SAMPLE_VIDEO);
  });
})();
