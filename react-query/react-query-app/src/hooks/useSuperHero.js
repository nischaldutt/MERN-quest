import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { request } from "../utils/requestInterceptor";

const fetchSuperHero = ({ queryKey }) => {
  const id = queryKey[1];
  // return axios.get(`http://localhost:4000/superheroes/${id}`);
  return request({ url: `/superheroes/${id}`, method: "get" });
};

const useSuperHero = (id) => {
  const queryClient = useQueryClient();

  return useQuery(["superhero", id], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("superheroes")
        ?.data.find((hero) => hero.id === id);

      return hero ? { data: hero } : undefined;
    },
  });
};

export default useSuperHero;
