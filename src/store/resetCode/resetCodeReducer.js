import { SET_ERROR } from "./resetCodeAction";

const initialState = {
  error: {
    isError: false,
    errorMessage: null,
  },
};

export const resetCodeReducer = (state = initialState, action) => {
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
