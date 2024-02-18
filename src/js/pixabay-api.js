import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { perPage } from '../main.js';

export async function fetchImages(currentQuery, page) {
  axios.defaults.baseURL = `https://pixabay.com`;
  const response = await axios.get('/api/', {
    params: {
      key: '42411294-725222da594329eba51636ded',
      q: currentQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: perPage,
    },
  });
  if (response.status !== 200) {
    throw new Error('Failed to fetch images');
  } else if (response.data.hits.length === 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageSize: 10.5,
      position: 'topRight',
    });
  }
  return response.data;
}