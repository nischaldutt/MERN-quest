import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";

import List from "./List";

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};

const Home = () => {
  const queryClient = useQueryClient();
  const [name, setName] = React.useState("");
  const [alterEgo, setAlterEgo] = React.useState("");
  const { mutate, isLoading, isError, error } = useMutation(addSuperHero, {
    onSuccess: () => queryClient.invalidateQueries("superheroes"),
  });

  const addHero = () => {
    mutate({ name, alterEgo });
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
      <input
        type="text"
        onChange={(e) => setAlterEgo(e.target.value)}
        value={alterEgo}
      />
      <button type="submit" onClick={addHero}>
        add
      </button>

      <List />
    </div>
  );
};

export default Home;
