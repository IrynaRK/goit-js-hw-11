window.global = window;
import SimpleLightbox from 'https://cdn.jsdelivr.net/npm/simplelightbox/dist/simple-lightbox.esm.jsx';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const galleryContainer = document.querySelector('.gallery-container');

fetch('https://pixabay.com/api/', {
  headers: {
    key: '47540419-36cc7af233202b3a7b66af182',
    q: 'yellow+flower',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },

})
  .then(response => response.json()) {
    // ...
  })
  .catch(error => {
    return 'Sorry, there are no images matching your search query. Please try again!';
  });
