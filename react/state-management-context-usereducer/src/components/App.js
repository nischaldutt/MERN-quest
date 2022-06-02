import React from "react";
import Blog from "./Blog";
import { BlogProvider } from "../context/BlogContext";

const App = () => {
  return (
    <BlogProvider>
      <Blog />
    </BlogProvider>
  );
};

export default App;
