import React from "react";
import { createSlice } from "@reduxjs/toolkit";
// import { usersPostsById } from "../services/Post Servivce";
import {
  fetchUsers,
  searchUsers,
  // postUsers,
  fetchMoreUsers,
} from "../services/InboxService";

const initialState = {
  loading: false,
  users: {} as any,
  allUser: [] as any,
  error: "",
  message: "",
  currentChannel: null,
};
const usersSlice: any = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, _action) => {
        console.log("pending");
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.allUser = action.payload.users;
      })
      .addCase(fetchUsers.rejected, (_state, _action) => {
        console.log("action rejected");
      });

    builder
      .addCase(searchUsers.pending, (state, _action) => {
        console.log("pending");
        state.loading = true;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(searchUsers.rejected, (_state, _action) => {
        console.log("action rejected");
      });

    builder
      .addCase(fetchMoreUsers.pending, (state, _action) => {
        console.log("pending");
        state.loading = true;
      })
      .addCase(fetchMoreUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.allUser = [...state.allUser, ...action.payload.users];
      })
      .addCase(fetchMoreUsers.rejected, (_state, _action) => {
        console.log("action rejected");
      });
  },
});

export default usersSlice.reducer;
