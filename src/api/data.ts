import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data.users;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
