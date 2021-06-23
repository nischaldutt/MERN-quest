import {
  FETCH_NEW_QUOTE_SUCCESS,
  FETCH_NEW_QUOTE_ERROR,
} from "../actions/types";

const initialQuote = {
  data: null,
  error: null,
};

export const quoteReducer = (state = initialQuote, action) => {
  switch (action.type) {
    case FETCH_NEW_QUOTE_SUCCESS: {
      return action.payload;
    }
    case FETCH_NEW_QUOTE_ERROR: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
