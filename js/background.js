import { config } from './data.js';

const bodyEl = document.querySelector("body");
async function getPhotos() {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${config.unsplashKey}`);
    const images = await response.json();
    bodyEl.style.backgroundImage = `url('${images.urls.full}')`
}
getPhotos()
