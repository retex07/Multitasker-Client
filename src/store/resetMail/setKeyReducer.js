const defaultState = {
  key: "",
};

const SET_KEY = "SET_KEY";

export const setKeyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_KEY:
      return { ...state, key: action.payload };

    default:
      return state;
  }
};

export const setKeyAction = (payload) => ({ type: SET_KEY, payload });
