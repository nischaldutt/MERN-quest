import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHero = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${id}`);
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
