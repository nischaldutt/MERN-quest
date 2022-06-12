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
    isFetching,
    refetch,
  } = useQuery("companies", fetchCompanies, {
    cacheTime: 20000,
    staleTime: 10000,
  });

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h1>loading</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      {companies.map((company) => {
        return <h1 key={company.id}>{company.name}</h1>;
      })}
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default Companies;

// import React, { useEffect } from "react";

// async function fetchCompanies() {
//   return await fetch(`http://localhost:4000/companies`).then((response) =>
//     response.json()
//   );
// }

// const Companies = () => {
//   const [companies, setCompanies] = React.useState([]);
//   const [isLoading, setIsLoading] = React.useState(true);
//   const [isError, setIsError] = React.useState(false);

//   useEffect(() => {
//     fetchCompanies()
//       .then((response) => {
//         setCompanies(response);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setIsError(true);
//         setIsLoading(false);
//       });
//   }, []);

//   if (isLoading) {
//     return <h1>loading</h1>;
//   }

//   if (isError) {
//     return <h1>error occurred</h1>;
//   }

//   const refetch = () => {
//     setIsLoading(true);
//     fetchCompanies()
//       .then((response) => {
//         setCompanies(response);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setIsError(true);
//         setIsLoading(false);
//       });
//   };

//   return (
//     <div>
//       {companies.map((company) => {
//         return <h1 key={company.id}>{company.name}</h1>;
//       })}
//       <button onClick={refetch}>refetch</button>
//     </div>
//   );
// };

// export default Companies;
