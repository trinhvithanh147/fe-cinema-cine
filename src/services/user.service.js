import { http } from "./config";

export const userService = {
  getAll: () => {
    return http.get("/users/getAll");
  },
  login: (data) => {
    return http.post("/users/login", data);
  },
  create: (data) => {
    return http.post("/users/create", data);
  },
};
