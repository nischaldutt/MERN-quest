import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: `Blog #${state.length + 1}`,
        },
      ];
    case "delete":
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

const addBlog = (dispatch) => {
  return () => {
    dispatch({ type: "add" });
  };
};

const deleteBlog = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete", payload: id });
  };
};

export const { Context: BlogContext, Provider: BlogProvider } =
  createDataContext(blogReducer, { addBlog, deleteBlog }, []);
