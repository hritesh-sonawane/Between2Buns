import axios from "axios";

const instance = axios.create({
  baseURL: "https://what-the-scoop-default-rtdb.firebaseio.com/",
});

export default instance;
