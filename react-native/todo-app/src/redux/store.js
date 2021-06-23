import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import { quoteReducer } from "./reducers/quoteReducer";
import {
  todosReducer,
  currentTodoStatusReducer,
} from "./reducers/todoReducers";

const rootReducer = combineReducers({
  todos: todosReducer,
  currentTodosStatus: currentTodoStatusReducer,
  quote: quoteReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
