import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.info = action.payload;
    },
  },
});
export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
