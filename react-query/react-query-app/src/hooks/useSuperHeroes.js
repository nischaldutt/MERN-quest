import { useQuery } from "react-query";
import axios from "axios";
import { request } from "../utils/requestInterceptor";

const fetchSuperHeroes = () => {
  // return axios.get("http://localhost:4000/superheroes");
  return request({ url: "/superheroes", method: "get" });
};

const useSuperHeroes = () => {
  return useQuery("superheroes", fetchSuperHeroes, {
    cacheTime: 10000,
    // staleTime: 10000,
    // select: () => {},
  });
};

export default useSuperHeroes;
