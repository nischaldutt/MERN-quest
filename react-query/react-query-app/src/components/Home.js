import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>hello world!</div>
      <Link to="/superheroes">view</Link>
      <br />
      <Link to="/colors">infinite queries</Link>
    </div>
  );
};

export default Home;
