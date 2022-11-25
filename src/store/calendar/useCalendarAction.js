import { useDispatch } from "react-redux";

import Api from "api";

import { getCategoryList, getListTasks, getProjectList, getSubTasks, getTask, setUserFilter } from "./calendarAction";


export const useCalendarAction = () => {
  const dispatch = useDispatch();

  const getSubTasksData = (id) => {
    Api.subTaskList(id)
      .then((res) => {
        dispatch(getSubTasks(res.data));
      });
  };

  const getTaskData = (id) => {
    Api.getTaskId(id)
      .then((res) => {
        dispatch(getTask(res.data));
      });
  };

  const getCategoryListData = () => {
    Api.categoryList()
      .then((res) => {
        dispatch(getCategoryList(res.data));
      });
  };

  const getListTasksData = () => {
    Api.getListTasks()
      .then((res) => {
        dispatch(getListTasks(res.data));
      });
  };

  const getProjectListData = (id) => {
    Api.getProjectList(id)
      .then((res) => {
        dispatch(getProjectList(res.data));
      });
  };

  const setUserFilterData = () => {
    Api.userListEmail()
      .then((res) => {
        dispatch(setUserFilter(res.data));
      });
  };

  const createTaskData = (projectId, title, performerId, deadline, importance, description = null, color) => {
    Api.taskCreate(projectId, title, performerId, deadline, importance, description, color)
      .then(() => {
        window.location.reload();
      });
  };

  return {
    getCategoryListData, getListTasksData, createTaskData,
    getTaskData, getProjectListData, setUserFilterData, getSubTasksData
  };
};