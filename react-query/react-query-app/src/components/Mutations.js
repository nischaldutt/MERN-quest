import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { request } from "../utils/requestInterceptor";
import Companies from "./Companies";

const addCompany = (newCompany) => {
  return axios.post("http://localhost:4000/companies", newCompany);
  // return request({ url: "/superheroes", method: "post", data: hero });
};

const Mutations = () => {
  const queryClient = useQueryClient();
  const [name, setName] = React.useState("");
  const [ceo, setCeo] = React.useState("");
  const { mutate, isLoading, isError, error } = useMutation(addCompany, {
    onSuccess: () => queryClient.invalidateQueries("companies"),
  });

  const addCompanyData = () => {
    mutate({ name, ceo });
    setName("");
    setCeo("");
  };

  return (
    <div>
      <h1>enter company details</h1>
      <h2>name</h2>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <h2>ceo</h2>
      <input type="text" onChange={(e) => setCeo(e.target.value)} value={ceo} />
      <br /> <br />
      <button type="submit" onClick={addCompanyData}>
        save
      </button>
      <br /> <br />
      <Companies />
    </div>
  );
};

export default Mutations;
