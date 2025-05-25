import axios from 'axios';

const API_KEY = '47540419-36cc7af233202b3a7b66af182';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Помилка отримання зображень:', error);
    return { hits: [] };
  }
}
