import { createSlice } from "@reduxjs/toolkit";
import {userSignin, editUserName } from "./reducers"



const initialState = {
    user: {
      email: "",
      token: "",
      firstName: "",
      lastName: "",
      userName: "",
    },
    status: "idle",
    error: "",
  };

  
const connectionSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(userSignin.fulfilled, (state, action) => {
          state.user = {
            email: action.payload.email,
            token: action.payload.token,
            firstName: action.payload.data.firstName,
            lastName: action.payload.data.lastName,
            userName: action.payload.data.userName,
          };
          state.status = "success";
          state.error = "";
        })
  
        .addCase(userSignin.rejected, (state, action) => {
          state.status = "error";
          state.error = action.payload;
        })
  
        .addCase(userSignin.pending, (state) => {
          state.status = "Connecting ... ";
          state.error = "";
        })
  
        .addCase("SIGNOUT", (state) => {
          state.user = { token: "" };          
          state.status = "idle";
          state.error = "";
        })
  
        .addCase(editUserName.fulfilled, (state, action) => {
          let user = state.user;
          user.userName = action.payload.body.userName;
          state.user = user;
        });
  
  
    },
  });
  
  export default connectionSlice.reducer;
  
  
  
  
  