import { SET_TOKEN, SET_ERROR } from "./loginAction";

const initialState = {
  error: {
    isError: false,
    errorMessage: null,
  },
  accessToken: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
