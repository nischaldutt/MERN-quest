import React from "react";
import { useParams } from "react-router-dom";
import useSuperHero from "../hooks/useSuperHero";

const Details = () => {
  const { id } = useParams();
  const { isLoading, data, isError, error } = useSuperHero(id);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return <div>{data?.data?.alterEgo}</div>;
};

export default Details;
