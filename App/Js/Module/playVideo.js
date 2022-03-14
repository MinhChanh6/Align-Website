export default function playVideo() {
    const videos = document.querySelectorAll('.play-video');

    videos.forEach((video) => {
        function handlePlayVideo(e) {
            if (e.type === 'mouseenter') {
                video.play();
            } if (e.type === 'mouseleave') {
                video.pause();
            }
        }

        video.addEventListener('mouseenter', handlePlayVideo);
        video.addEventListener('mouseleave', handlePlayVideo);
    })
}