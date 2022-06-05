import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const useSuperHeroes = () => {
  return useQuery("superheroes", fetchSuperHeroes, {
    cacheTime: 10000,
    // staleTime: 10000,
    // select: () => {},
  });
};

export default useSuperHeroes;
