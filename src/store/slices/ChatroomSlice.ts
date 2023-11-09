import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { usersPostsById } from "../services/PostServivce";
import { ChatroomUsers, userChatRoom } from "../services/ChatroomService";

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

// post messages
const ChatMessages: any = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userChatRoom.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(userChatRoom.fulfilled, (state, action) => {
        console.log(action.payload, "payload");
        state.loading = false;
        state.chatRoomId = action.payload;
      })
      .addCase(userChatRoom.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default ChatMessages.reducer;
