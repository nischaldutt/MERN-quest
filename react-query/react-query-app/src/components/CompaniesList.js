import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const CompaniesList = () => {
  const { isLoading, data, isError, error } = useQuery();

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

export default CompaniesList;
