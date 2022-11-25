import { SET_ERROR } from "./resetPasswordAction";

const initialState = {
  error: {
    isError: false,
    errorMessage: null,
  },
};

export const resetPasswordReducer = (state = initialState, action) => {
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
