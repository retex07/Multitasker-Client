export const SET_ERROR = "SET_ERROR";

export const setError = (payload) => {
  return {
    type: SET_ERROR,
    payload,
  };
};
