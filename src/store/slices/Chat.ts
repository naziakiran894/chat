import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { usersPostsById } from "../services/PostServivce";

const initialState = {
  loading: false,
  error: "",
  messages: [],
};

// post messages
const userChat: any = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(usersPostsById.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(usersPostsById.fulfilled, (state, action) => {
        console.log(action.payload, "payload");
        state.loading = false;
        state.messages = action.payload;
      })
      .addCase(usersPostsById.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userChat.reducer;
