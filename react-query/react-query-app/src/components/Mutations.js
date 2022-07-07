import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { request } from "../utils/requestInterceptor";

import List from "./List";

const addCompany = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
  // return request({ url: "/superheroes", method: "post", data: hero });
};

const Mutations = () => {
  const queryClient = useQueryClient();
  const [name, setName] = React.useState("");
  const [ceo, setCeo] = React.useState("");
  const { mutate, isLoading, isError, error } = useMutation(addCompany, {
    onSuccess: () => queryClient.invalidateQueries("superheroes"),
  });

  const addHero = () => {
    mutate({ name, ceo });
  };

  return (
    <div>
      <div>hello world!</div>
      <Link to="/superheroes">view</Link>
      <br />
      <Link to="/colors">infinite queries</Link>
      <br />

      <label>name</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label>alterEgo</label>
      <input type="text" onChange={(e) => setCeo(e.target.value)} value={ceo} />
      <button type="submit" onClick={addHero}>
        add
      </button>

      <List />
    </div>
  );
};

export default Mutations;
