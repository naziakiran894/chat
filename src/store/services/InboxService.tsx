import React from "react";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useAsyncWatcher } from "react-async-watcher";
import user from "../slices/user";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  loading: false,
  users: [] as any,
  error: "",
  message: "",
  currentChannel: null,
};
export const fetchUsers: any = createAsyncThunk("user/fetchUsers", async () => {
  try {
    return await axios
      .get("https://dummyjson.com/users?limit=15")
      .then((res) => {
        console.log(res.data, "dat");
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
});

export const fetchMoreUsers: any = createAsyncThunk(
  "user/fetchMore",
  async (data) => {
    try {
      return await axios
        .get(
          `https://dummyjson.com/users?limit=${data.limit}&skip=${data.skip}`
        )
        .then((res) => {
          console.log(res.data, "dat");
          return res.data;
        });
    } catch (error) {
      console.log(error);
    }
  }
);

export const searchUsers = createAsyncThunk(
  "user/searchUsers",
  async (query: string) => {
    try {
      return await axios
        .get(`https://dummyjson.com/users/search?q=${query}`)
        .then((res) => {
          console.log(res.data, "dat");
          return res.data;
        });
    } catch (error) {
      console.log(error);
    }
  }
);
