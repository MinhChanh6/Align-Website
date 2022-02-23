export default function createLightGallarey() {
    const lightGallarey = document.querySelector('.lightgallarey')

    if (lightGallarey) {
        lightGallery(lightGallarey, {
            selector: '.lightgallarey-item',
            plugins: [lgZoom, lgFullscreen, lgVideo],
        })
    }
}