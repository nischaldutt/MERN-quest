import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const Blog = () => {
  const { state: blogs, addBlog } = useContext(BlogContext);

  return (
    <div>
      <button onClick={addBlog}>Add</button>
      {blogs.map((blog) => {
        return <div key={blog.title}>{blog.title}</div>;
      })}
    </div>
  );
};

export default Blog;
