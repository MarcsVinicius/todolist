import axios from 'axios';
import url from '../utils/index';

export default async function fetchAll() {
  const result = await axios.get(url.api)
    .then((response) => response.data);

  return result;
}
