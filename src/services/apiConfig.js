import axios from "axios";

const ApiConfig = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default ApiConfig;
