import { SIGNED_IN, SIGNED_OUT } from "../actions/types";

export const isSignedInReducer = (state = false, action) => {
  switch (action.type) {
    case SIGNED_IN: {
      return true;
    }
    case SIGNED_OUT: {
      return false;
    }
    default: {
      return state;
    }
  }
};
