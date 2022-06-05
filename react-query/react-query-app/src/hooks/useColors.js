import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { request } from "../utils/requestInterceptor";

const fetchColors = ({ pageParam = 1 }) => {
  // return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
  return request({ url: `/colors?_limit=2&_page=${pageParam}`, method: "get" });
};

const useColors = () => {
  return useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      return pages.length < 5 ? pages.length + 1 : undefined;
    },
  });
};

export default useColors;
