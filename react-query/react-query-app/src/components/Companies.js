import React, { useEffect } from "react";

async function fetchCompanies() {
  return await fetch(`http://localhost:4000/companies`).then((response) =>
    response.json()
  );
}

const Companies = () => {
  const [companies, setCompanies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  useEffect(() => {
    fetchCompanies()
      .then((response) => {
        setCompanies(response);
        setIsLoading(false);
      })
      .catch((error) => setIsError(true));
  }, []);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>error occurred</div>;
  }

  return (
    <div>
      {companies.map((company) => {
        return <div key={company.id}>{company.name}</div>;
      })}
    </div>
  );
};

export default Companies;
