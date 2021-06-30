import { combineReducers } from "redux";

import { isSignedInReducer } from "./authReducers";
import { quoteReducer } from "./quoteReducer";
import { todosReducer, currentTodoStatusReducer } from "./todoReducers";

const rootReducer = combineReducers({
  todos: todosReducer,
  currentTodosStatus: currentTodoStatusReducer,
  quote: quoteReducer,
  isSignedIn: isSignedInReducer,
});

export default rootReducer;
