import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:4000" });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer my-token";
  const onSuccess = (response) => response;
  const onError = (error) => {
    // optionally catch errors and add additional logging here
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
