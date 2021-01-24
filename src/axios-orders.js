import axios from 'axios';

const insance = axios.create({
  baseURL: 'https://what-the-scoop-default-rtdb.firebaseio.com/'
});

export default insance;