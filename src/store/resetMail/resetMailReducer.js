import { SET_ERROR } from "./resetMailAction";

const initialState = {
  error: {
    isError: false,
    errorMessage: null,
  },
};

export const resetMailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
