import React from "react";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import user from "../slices/user";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(usersPostsById());
// }, []);
export const usersPostsById = createAsyncThunk(
  "user/postUser",
  async (id: string) => {
    try {
      return await axios
        .get(`https://dummyjson.com/posts/user/${id}`)
        .then((res) => {
          // setMyData(res.data);
          console.log(res.data, "post data");
          return res.data;
        });
    } catch (error) {
      console.log(error);
    }
  }
);
