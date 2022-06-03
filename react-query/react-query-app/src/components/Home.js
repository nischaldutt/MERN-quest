import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>hello world!</div>
      <Link to="/superheroes">View</Link>
    </div>
  );
};

export default Home;
