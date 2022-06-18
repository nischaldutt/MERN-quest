import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useQueries, useQueryClient } from "react-query";

const fetchCompany = ({ queryKey }) => {
  const id = queryKey[1];
  return fetch(`http://localhost:4000/companies/${id}`).then((response) =>
    response.json()
  );
};

const fetchCompanyDetails = ({ queryKey }) => {
  const id = queryKey[1];
  return fetch(`http://localhost:4000/companyDetails/${id}`).then((response) =>
    response.json()
  );
};

// const componyIds = [1, 2, 3];

const Company = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: companyData,
    isError,
    error,
  } = useQuery(["company-details", id], fetchCompanyDetails, {
    initialData: () => {
      const cachedCompanyData = queryClient
        .getQueryData("companies")
        .find((cachedCompany) => cachedCompany.id === parseInt(id));
      console.log({ cachedCompanyData });
      return cachedCompanyData ? cachedCompanyData : undefined;
    },
  });

  // const response = useQueries(
  //   componyIds.map((id) => {
  //     return {
  //       queryKey: ["company", id],
  //       queryFn: fetchCompany,
  //     };
  //   })
  // );

  // console.log({ response });

  if (isLoading) {
    return <h1>loading</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h2>name: {companyData.name}</h2>
      <h2>ceo: {companyData.ceo}</h2>
      <h2>founder: {companyData.founder}</h2>
      <h2>headquarters: {companyData.headQuarters}</h2>
    </div>
  );
};

export default Company;
