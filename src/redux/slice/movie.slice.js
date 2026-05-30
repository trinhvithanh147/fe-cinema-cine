import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;
