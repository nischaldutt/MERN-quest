import React from "react";
import { useQuery } from "react-query";

const fetchGithubUser = ({ queryKey }) => {
  const userEmail = queryKey[1];
  return fetch(`http://localhost:4000/githubUsers/${userEmail}`).then(
    (response) => response.json()
  );
};

const fetchRepositories = ({ queryKey }) => {
  const userId = queryKey[1];
  return fetch(`http://localhost:4000/githubRepositories/${userId}`).then(
    (response) => response.json()
  );
};

const DependantQueries = () => {
  const userEmail = "jack@gmail.com";

  const { data: user } = useQuery(["github-user", userEmail], fetchGithubUser);

  const githubUserId = user?.githubId;

  const { data: userData } = useQuery(
    ["github-user-data", githubUserId],
    fetchRepositories,
    {
      enabled: !!githubUserId,
    }
  );

  const userRepos = userData?.repositories;
  console.log({ userRepos });

  // const {
  //   isLoading,
  //   data: companyData
  // } = useQuery(["github-user-data", id], fetchCompany);

  // if (isLoading) {
  //   return <h1>loading</h1>;
  // }

  // if (isError) {
  //   return <h1>{error.message}</h1>;
  // }

  return (
    <div>
      {/* <h2>{companyData.name}</h2>
      <h2>{companyData.ceo}</h2> */}
    </div>
  );
};

export default DependantQueries;
