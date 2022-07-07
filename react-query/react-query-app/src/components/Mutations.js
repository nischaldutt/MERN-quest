import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { request } from "../utils/requestInterceptor";

const addCompany = (newCompany) => {
  return axios.post("http://localhost:4000/companies", newCompany);
  // return request({ url: "/superheroes", method: "post", data: hero });
};

const Mutations = () => {
  const queryClient = useQueryClient();
  const [name, setName] = React.useState("");
  const [ceo, setCeo] = React.useState("");
  const { mutate, isLoading, isError, error } = useMutation(addCompany, {
    // onSuccess: () => queryClient.invalidateQueries("superheroes"),
  });

  const addCompanyData = () => {
    mutate({ name, ceo });
  };

  return (
    <div>
      <div>enter company details</div>
      <label>name</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>ceo</label>
      <input type="text" onChange={(e) => setCeo(e.target.value)} value={ceo} />

      <button type="submit" onClick={addCompanyData}>
        save
      </button>

      <Link to="/companies">view</Link>
    </div>
  );
};

export default Mutations;
