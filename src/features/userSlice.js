import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // actions, can be dispatched
    // login can accept payload (argument)
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// defining our actions
export const { login, logout } = userSlice.actions;

// selector - retrives the value and gives us back
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
