import axios from "axios";

 const instance = axios.create({
  baseURL: "https://chatapp-stream-backend.onrender.com/",
  withCredentials: true
});
export default instance
