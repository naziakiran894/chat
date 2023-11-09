import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { ChatMessagesService } from "../services/MessagesServices";
// import { usersPostsById } from "../services/PostServivce";

interface IUser {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoUrl: string;
  userId: string;
  error: string;
}

const initialState = {
  loading: false,
  error: "",
  messages: [] as any,
  chatRoom: "",
  content: "",
  fireChat: [] as any,
  chatRoomId: "",
};

const ChatMessageSlice: any = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ChatMessagesService.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(ChatMessagesService.fulfilled, (state, action) => {
        console.log(action.payload, "usersssss messages");
        state.loading = false;
        state.chatRoomId = action.payload;
      })
      .addCase(ChatMessagesService.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default ChatMessageSlice.reducer;
