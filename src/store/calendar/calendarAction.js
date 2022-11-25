export const GET_CATEGORY_LIST = "GET_CATEGORY_LIST";
export const GET_PROJECT_LIST = "GET_PROJECT_LIST";
export const GET_LIST_TASKS = "GET_LIST_TASKS";
export const GET_TASK = "GET_TASK";
export const GET_SUBTASKS = "GET_SUBTASKS";
export const USER_FILTER_EMAIL = "USER_FILTER_EMAIL";

export const getCategoryList = (payload) => {
  return {
    type: GET_CATEGORY_LIST,
    payload
  };
};

export const setUserFilter = (payload) => {
  return {
    type: USER_FILTER_EMAIL,
    payload
  };
};

export const getProjectList = (payload) => {
  return {
    type: GET_PROJECT_LIST,
    payload
  };
};

export const getListTasks = (payload) => {
  return {
    type: GET_LIST_TASKS,
    payload
  };
};

export const getTask = (payload) => {
  return {
    type: GET_TASK,
    payload
  };
};

export const getSubTasks = (payload) => {
  return {
    type: GET_SUBTASKS,
    payload
  };
};
