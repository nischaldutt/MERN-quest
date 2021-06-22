import { combineReducers } from "redux";

import {
  todosReducer,
  currentTodoStatusReducer,
} from "./reducers/todoReducers";

const rootReducer = combineReducers({
  todos: todosReducer,
  currentTodosStatus: currentTodoStatusReducer,
});

export default rootReducer;
