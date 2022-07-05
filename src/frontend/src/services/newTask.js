import axios from 'axios';
import url from '../utils';

export default async function newTask(content) {
  await axios.post(`${url.api}`, {
    task: content,
  });
}
