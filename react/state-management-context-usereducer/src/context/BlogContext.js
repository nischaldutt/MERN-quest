import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { title: `Blog #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlog = (dispatch) => {
  return () => {
    dispatch({ type: "add" });
  };
};

export const { Context: BlogContext, Provider: BlogProvider } =
  createDataContext(blogReducer, { addBlog }, []);
