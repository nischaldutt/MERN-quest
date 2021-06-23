const axios = require("axios");

const api = axios.create({
  baseURL:
    "https://goquotes-api.herokuapp.com",
});

export default api;
