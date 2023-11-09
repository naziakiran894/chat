import { FamilyRestroomOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmail,
  loginWithGoogle,
  signOutUser,
} from "../services/AuthService";

interface IUser {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoUrl: string;
  userId: string;
  error: string;
}

const initialState = {
  user: null,
  isLoading: false,
  error: "",
};
const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    currentUser(state, action) {
      state.user = action.payload;
    },
    userRemoved(state, action) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserWithEmail.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createUserWithEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(createUserWithEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(loginWithGoogle.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action;
      });
    builder
      .addCase(signOutUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signOutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.isLoading = true;
      });
    // builder
    //   .addCase(chatUsers.pending, (state, action) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(chatUsers.fulfilled, (state, action) => {
    //     console.log(action, "action payload");
    //     state.isLoading = false;
    //     state.user = action.payload;
    //   })
    //   .addCase(chatUsers.rejected, (state, action) => {
    //     state.isLoading = true;
    //   });
  },
});

export const { currentUser, userRemoved } = authSlice.actions;

export default authSlice.reducer;
