import React from "react";
import useSuperHeroes from "../hooks/useSuperHeroes";

const List = () => {
  const { isLoading, data, isError, error } = useSuperHeroes();

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
