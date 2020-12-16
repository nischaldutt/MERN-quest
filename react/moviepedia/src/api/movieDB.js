import axios from "axios";

const API_KEY = "eedc3db69e62514d0a0ecdad9cd04e4f";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: API_KEY,
    language: "en-US",
    page: 1,
  },
});
