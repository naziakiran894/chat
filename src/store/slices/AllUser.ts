import { FamilyRestroomOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import { chatUsersList } from "../services/AllUserService";

interface IUser {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoUrl: string;
  userId: string;
  error: string;
}

const initialState = {
  allUser: [],
  isLoading: false,
  error: "",
};
const allUserSlice = createSlice({
  name: "alluser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(chatUsersList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(chatUsersList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allUser = action.payload;
      })
      .addCase(chatUsersList.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export default allUserSlice.reducer;
