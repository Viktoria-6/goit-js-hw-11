import { getImages } from './pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      title: 'увага',
      message: 'Будь ласка, заповніть поле для пошуку',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImages(query)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        iziToast.error({
          title: 'увага',
          message: 'Вибачте, картинку не знайдено. Спробуйте ще раз!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      console.error('Помилка', error);
      iziToast.error({
        title: 'Помилка',
        message: 'Щось пішло не так. Спробуйте ще раз!',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
