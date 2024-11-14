const a = 10;
console.log(a);
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

let lightbox = new SimpleLightbox('#gallery a');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = input.value.trim();

    if (!query) {
        iziToast.error({ message: 'Please enter a search term!' });
        return;
    }

    clearGallery();
    showLoadingMessage(); // Показуємо повідомлення перед завантаженням

    try {
        const images = await fetchImages(query);
        if (images.length === 0) {
            iziToast.info({ message: 'Sorry, there are no images matching your search query. Please try again!' });
        } else {
            renderImages(images);
            lightbox.refresh();
        }
    } catch (error) {
        iziToast.error({ message: 'An error occurred while fetching images. Please try again!' });
    } finally {
        hideLoadingMessage(); // Ховаємо повідомлення після завершення завантаження
    }
});

function showLoader() {
    loader.classList.remove('hidden');
}

function hideLoader() {
    loader.classList.add('hidden');
}
const loadingMessage = document.getElementById('loading-message');

function showLoadingMessage() {
  loadingMessage.classList.remove('hidden');
}

function hideLoadingMessage() {
  loadingMessage.classList.add('hidden');
}