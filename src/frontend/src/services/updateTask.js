import axios from 'axios';
import url from '../utils/index';

export default async function updateTask(newStatus, id, type) {
  if (newStatus === undefined) return undefined;
  await axios.put(`${url.api}/${id}?type=${type}`, {
    content: newStatus,
  });
  return 'successed update';
}
