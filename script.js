(function () {
  const VIDEO_SOURCE = '';
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

  if (VIDEO_SOURCE) {
    loadVideo(VIDEO_SOURCE);
  } else {
    // Show placeholder state when no official video is configured yet
    placeholder?.setAttribute('aria-live', 'polite');
  }

  previewButton?.addEventListener('click', () => {
    loadVideo(SAMPLE_VIDEO);
  });
})();
