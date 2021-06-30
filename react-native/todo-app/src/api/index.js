const axios = require("axios");

const api = axios.create({
  baseURL: "https://free-quotes-api.herokuapp.com",
});

export default api;
