import axios from 'axios';

const pixabayKEY = '48935513-8997d7f633aa985d826258f4d';
const pixabayURL = 'https://pixabay.com/api/';

export const fetchImages = query =>
  axios
    .get(pixabayURL, {
      params: {
        key: pixabayKEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.error(error);
    });
