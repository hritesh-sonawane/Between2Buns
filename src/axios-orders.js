import axios from 'axios';

// baseurl defines absolute path depending on your server. 
// You need not to change it manually if the server changes.

const insance = axios.create({
  baseURL: 'https://what-the-scoop-default-rtdb.firebaseio.com/'
});

export default insance;