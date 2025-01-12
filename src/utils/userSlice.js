import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null, // Start with no user data
  reducers: {
    addUser: (state, action) => {
      return action.payload; // Replace state with the new user data
    },
    removeUser: () => {
      return null; // Clear user data
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
