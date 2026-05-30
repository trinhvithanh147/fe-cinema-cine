import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slice/movie.slice.js";
import userReducer from "./slice/user.slice.js";
export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
  },
});
