import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./slices/user";
// import userChat from "./slices/Chat";
import authSlice from "./slices/Authslice";
import allUserSlice from "./slices/AllUser";
import ChatMessages from "./slices/ChatroomSlice";
import ChatroomSlice from "./slices/ChatroomSlice";

export const store = configureStore({
  reducer: {
    // user: userSlice,
    // chat: userChat,
    auth: authSlice,
    allUser: allUserSlice,
    messages: ChatMessages,
    ChatroomSlice: ChatroomSlice,

    // counter: counterReducer,ss
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
