import { http } from "./config";

export const movieService = {
  getAll: () => {
    return http.get("/movies/getAll");
  },
};
