import axios from 'axios';
import url from '../utils';

export default async function deleteTask(id) {
  await axios.delete(`${url.api}/${id}`);
}
