import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import 'css-loader';

let lightbox;

export function createGallery(images) {
  const galleryContainer = document.querySelector('.gallery');
  if (!galleryContainer) {
    console.error('Елемент .gallery не знайдено!');
    return;
  }

  const markup = images.hits
    .map(
      image => `
        <a href="${image.largeImageURL}" class="gallery-item">
            <img src="${image.webformatURL}" alt="${image.tags}">
        </a>
    `
    )
    .join('');

  galleryContainer.innerHTML = markup;

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a');
  }
}
const gallery = document.querySelector('.gallery');
if (gallery) {
  const images = gallery.querySelectorAll('.gallery-item');
  images.forEach(img => img.remove());
} else {
  console.error('Елемент .gallery не знайдено!');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('visible');
  } else {
    console.error('Елемент .loader не знайдено!');
  }
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('visible');
  } else {
    console.error('Елемент .loader не знайдено!');
  }
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    const images = gallery.querySelectorAll('.gallery-item');
    images.forEach(img => img.remove());
  } else {
    console.error('Елемент .gallery не знайдено!');
  }
}

export default {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
};
