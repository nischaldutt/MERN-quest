import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { request } from "../utils/requestInterceptor";

const fetchColors = async (props) => {
  console.log({ props });
  // return fetch(`/colors?_limit=2&_page=${1}`).then((response) =>
  //   response.json()
  // );
  // return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
  return request({ url: `/colors?_limit=2&_page=${1}`, method: "get" });
};

const useColors = () => {
  return useInfiniteQuery(["games"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      return pages.length < 5 ? pages.length + 1 : undefined;
    },
  });
};

export default useColors;
