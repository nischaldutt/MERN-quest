import React from "react";
import { Link } from "react-router-dom";
import useSuperHeroes from "../hooks/useSuperHeroes";

const List = () => {
  const { isLoading, data, isError, error } = useSuperHeroes();

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {data?.data.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/superhero/${item.id}`}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default List;
