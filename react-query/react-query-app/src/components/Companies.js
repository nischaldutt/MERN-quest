import React from "react";
import { useQuery } from "react-query";

async function fetchCompanies() {
  return await fetch(`http://localhost:4000/companies`).then((response) =>
    response.json()
  );
}

const Companies = () => {
  const {
    isLoading,
    data: companies,
    isError,
    error,
  } = useQuery("companies", fetchCompanies);

  console.log({ res: useQuery("companies", fetchCompanies) });

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {companies.map((company) => {
        return <h1 key={company.id}>{company.name}</h1>;
      })}
    </div>
  );
};

export default Companies;
