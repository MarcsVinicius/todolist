import axios from 'axios';
import url from '../utils/index';

export default async function filterTask(type) {
  const result = await axios.get(`${url.api}?order=${type}`)
    .then((response) => response.data);

  return result;
}
