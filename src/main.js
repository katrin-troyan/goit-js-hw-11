import { fetchImages } from './js/pixabay-api.js';
import { renderImages, cleanGallery } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('.form-input');
const loader = document.querySelector('.loader');

function showLoader() {
  loader.classList.add('active');
}
function hideLoader() {
  loader.classList.remove('active');
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();

  cleanGallery();
  showLoader();

  fetchImages(query)
    .then(images => {
      hideLoader();
      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        form.reset();
        return;
      }

      renderImages(images);
      form.reset();
    })
    .catch(error => {
      console.error(error);
    });
});
