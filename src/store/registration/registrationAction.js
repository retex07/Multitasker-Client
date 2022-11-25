export const SET_TOKEN = "SET_TOKEN";
export const SET_ERROR = "SET_ERROR";

export const setToken = (payload) => {
  return {
    type: SET_TOKEN,
    payload,
  };
};

export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload,
  };
};
