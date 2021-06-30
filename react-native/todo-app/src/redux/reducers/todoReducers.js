import { ALL_TODOS } from "../../properties/constants";

import {
  ADD_NEW_TODO_ITEM,
  REMOVE_TODO_ITEM,
  COMPLETE_TODO_ITEM,
  EDIT_TODO_ITEM,
  CHANGE_CURRENT_TODOS_STATUS,
  SIGNED_OUT,
} from "../actions/types";

const initialTodos = [
  {
    id: "1",
    description: "Hit the gym.",
    completed: false,
  },
  {
    id: "2",
    description: "Take groceries.",
    completed: false,
  },
];

export const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD_NEW_TODO_ITEM: {
      const newTodo = {
        id: new Date().getTime().toString(),
        description: action.payload,
        completed: false,
      };

      return [newTodo, ...state];
    }

    case REMOVE_TODO_ITEM: {
      return state.filter((todoItem) => todoItem.id !== action.payload);
    }

    case COMPLETE_TODO_ITEM: {
      return state.map((todoItem) => {
        if (todoItem.id === action.payload) {
          todoItem.completed = true;
        }
        return { ...todoItem };
      });
    }

    case EDIT_TODO_ITEM: {
      const { id: todoId, description, completed } = action.payload;
      return state.map((todoItem) => {
        if (todoItem.id === todoId) {
          todoItem.description = description;
          todoItem.completed = completed;
        }
        return { ...todoItem };
      });
    }

    default:
      return state;
  }
};

export const currentTodoStatusReducer = (state = ALL_TODOS, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_TODOS_STATUS: {
      return action.payload;
    }

    default:
      return state;
  }
};
