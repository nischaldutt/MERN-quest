import {
  ADD_NEW_TODO_ITEM,
  REMOVE_TODO_ITEM,
  COMPLETE_TODO_ITEM,
  EDIT_TODO_ITEM,
  CHANGE_CURRENT_TODOS_STATUS,
  FETCH_NEW_QUOTE,
} from "./types";

export const addNewTodoItem = (description) => {
  return {
    type: ADD_NEW_TODO_ITEM,
    payload: description,
  };
};

export const removeTodoItem = (todoId) => {
  return {
    type: REMOVE_TODO_ITEM,
    payload: todoId,
  };
};

export const completeTodoItem = (todoId) => {
  return {
    type: COMPLETE_TODO_ITEM,
    payload: todoId,
  };
};

export const editTodoItem = (updatedTodoItem) => {
  return {
    type: EDIT_TODO_ITEM,
    payload: updatedTodoItem,
  };
};

export const changeCurrentTodosStatus = (selectedStatus) => {
  return {
    type: CHANGE_CURRENT_TODOS_STATUS,
    payload: selectedStatus,
  };
};

export const fetchNewQuote = () => {
  return {
    type: FETCH_NEW_QUOTE,
  };
};
