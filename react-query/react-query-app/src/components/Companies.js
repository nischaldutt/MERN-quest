import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

async function fetchCompanies() {
  return await fetch(`http://localhost:4000/companies`).then((response) =>
    response.json()
  );
}

const Companies = () => {
  const onSuccess = (data) => {
    console.log(
      "performing the side-effect after successful fetch with response ==> ",
      data
    );
  };

  const onError = (error) => {
    console.log("encounter an error during fetching ==> ", error);
  };

  const {
    isLoading,
    data: companies,
    isError,
    error,
    isFetching,
    refetch,
  } = useQuery("companies", fetchCompanies, {
    // cacheTime: 20000,
    // staleTime: 10000,
    // refetchOnMount: true,
    // refetchOnWindow: true,
    // refetchInterval: 5000,
    // refetchIntervalInBackground: true,
    // enabled: false,
    // onSuccess,
    // onError,
    // select: (data) => {
    //   const founders = data.map((company) => company.founder);
    //   return founders;
    // },
  });

  // console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h1>loading</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h3>top companies list</h3>
      {companies?.map((company) => {
        return (
          <h3 key={company.id}>
            <Link to={`/companies/${company.id}`}>{company.name}</Link>
          </h3>
        );
      })}
      <button onClick={refetch}>fetch</button>
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
