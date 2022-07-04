import axios from 'axios';

const API_URL = 'http://localhost:3000/task';

export default async function fetchAll() {
  const result = await axios.get(API_URL)
    .then((response) => response.data);

  return result;
}
