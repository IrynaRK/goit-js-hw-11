import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({ message: 'Будь ласка, введіть запит!' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const images = await getImagesByQuery(query);
    if (images.hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      createGallery(images);
    }
  } catch (error) {
    iziToast.error({ message: 'Не вдалося завантажити зображення!' });
  }

  hideLoader();
});
