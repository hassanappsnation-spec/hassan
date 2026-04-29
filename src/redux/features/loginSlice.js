import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: ""
};

const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    startLogin: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.message = "";
    },

    successLogin: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload; // ✅ correct
    },

    faildLogin: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.isSuccess = false;
    },
  },
});

export const { faildLogin, logout, startLogin, successLogin } = loginSlice.actions;

export default loginSlice.reducer;