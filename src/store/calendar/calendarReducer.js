import {
  GET_CATEGORY_LIST,
  GET_LIST_TASKS,
  GET_PROJECT_LIST,
  GET_SUBTASKS,
  GET_TASK,
  USER_FILTER_EMAIL
} from "./calendarAction";

const initialState = {
  listTasks: null,
  categoryList: null,
  projectList: null,
  taskInfo: null,
  userList: null,
  subTasks: null
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload
      };

    case GET_LIST_TASKS:
      return {
        ...state,
        listTasks: action.payload
      };

    case GET_TASK:
      return {
        ...state,
        taskInfo: action.payload
      };

    case GET_PROJECT_LIST:
      return {
        ...state,
        projectList: action.payload
      };

    case USER_FILTER_EMAIL:
      return {
        ...state,
        userList: action.payload
      };

    case GET_SUBTASKS:
      return {
        ...state,
        subTasks: action.payload
      };

    default:
      return state;
  }
};