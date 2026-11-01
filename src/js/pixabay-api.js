import axios from 'axios';


const API_KEY = '58356222-807f47e5b0c6de8e7572d2af6';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImages(query) {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
