import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const fetchCompany = ({ queryKey }) => {
  const id = queryKey[1];
  return fetch(`http://localhost:4000/companies/${id}`).then((response) =>
    response.json()
  );
};

const Company = () => {
  const { id } = useParams();
  const {
    isLoading,
    data: companyData,
    isError,
    error,
  } = useQuery(["company", id], fetchCompany);

  if (isLoading) {
    return <h1>loading</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h2>{companyData.name}</h2>
      <h2>{companyData.ceo}</h2>
    </div>
  );
};

export default Company;
