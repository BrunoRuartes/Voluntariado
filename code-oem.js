function toggleFullScreen(iframe) {
    if (!document.fullscreenElement) {
        iframe.requestFullscreen();
        iframe.classList.add('fullscreen');
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            iframe.classList.remove('fullscreen');
        }
    }
}