import axios from 'axios';

const API_URL = 'localhost:3001/task';

export default async function fetchAll() {
  const result = await axios.get(API_URL)
    .then((data) => data);
  console.log(result);

  return result;
}
