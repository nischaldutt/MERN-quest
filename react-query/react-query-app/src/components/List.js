import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const List = () => {
  const { isLoading, data, isError, error } = useQuery(
    "superheroes",
    fetchSuperHeroes
  );

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  console.log({ data });

  return (
    <div>
      {data?.data.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default List;
