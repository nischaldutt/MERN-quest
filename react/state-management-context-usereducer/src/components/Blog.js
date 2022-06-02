import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const Blog = () => {
  const { state: blogs, addBlog, deleteBlog } = useContext(BlogContext);

  return (
    <div>
      <button onClick={addBlog}>Add</button>
      {blogs.map((blog) => {
        return (
          <div onClick={() => deleteBlog(blog.id)} key={blog.id}>
            {blog.title}
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
