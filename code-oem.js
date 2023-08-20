function toggleFullScreen(iframe) {
    if (!document.fullscreenElement) {
        iframe.style.display = 'block';
        iframe.requestFullscreen();
        iframe.classList.add('fullscreen');
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            iframe.classList.remove('fullscreen');
            iframe.style.display = 'none';
        }
    }
}