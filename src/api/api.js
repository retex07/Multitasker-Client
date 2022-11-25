import axios from "axios";

import { colors } from "../configs/colors";

const apiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  headers: {
    "Content-Type": "application/json"
  }
});

apiInstance.interceptors.request.use(function(config) {
  const tokenStr = localStorage.getItem("accessToken");
  config.url = `${config.url}`;
  config.headers = { "Authorization": `Bearer ${tokenStr}` };

  return config;
});


const api = {
  privacyPolicy: async () => {
    return apiInstance.get("attachment/privacy-policy");
  },

  termOfUse: async () => {
    return apiInstance.get("attachment/terms-of-use");
  },

  login: async (email, password) => {
    return apiInstance.post("login", {
      email,
      password
    });
  },

  registration: async (email, password, password2) => {
    return apiInstance.post("registration", {
      email,
      password,
      password2
    });
  },
  send: async (email) => {
    return apiInstance.post("password/send", {
      email
    });
  },
  confirm: async (key, code) => {
    return apiInstance.post("password/confirm", {
      key,
      code
    });
  },
  reset: async (key, password, password2) => {
    return apiInstance.post("password/reset", {
      key,
      password,
      password2
    });
  },

  userListEmail: async () => {
    return apiInstance.get("user")
  },

  categoryList: async () => {
    return apiInstance.get("category");
  },

  categoryCreate: async (title, description = null, color = `${colors.categoryGreen}`) => {
    return apiInstance.post("category", {
      title,
      color,
      description
    });
  },

  taskCreate: async (projectId, title, performerId, deadline, importance, description, color) => {
    return apiInstance.post("task", {
      title,
      description,
      deadline,
      color,
      importance,
      projectId,
      performerId
    })
  },

  getProjectList: async (id) => {
    return apiInstance.get(`category/${id}/projects`);
  },

  getListTasks: async () => {
    return apiInstance.get("user/me/tasks");
  },

  getTaskId: async (id) => {
    return apiInstance.get(`task/${id}`);
  },

  subTaskList: async (id) => {
    return apiInstance.get(`task/${id}/sub-tasks`);
  },

  removeTask: async (id) => {
    return apiInstance.delete(`task/${id}`);
  }

};

export default api;
