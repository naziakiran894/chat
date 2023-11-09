import React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
// import { usersPostsById } from "../../../store/services/PostServivce";
import { ChatroomUsers } from "../../../store/services/ChatroomService";
import { ChatMessagesService } from "../../../store/services/MessagesServices";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../../component/molecules/loader/Loader";
import { db } from "../../../Firebase/FirebaseConfig";
// import Loader from "../../../component/molecules/loader/Loader";

import {
  collection,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";

export default function ChatMain({ messages }: any) {
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat?.messages?.posts);
  const user = useSelector((state) => state?.auth?.user);
  // const loading = useSelector((state) => state.chat?.loading);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      dispatch(ChatroomUsers(params.id));
    }
  }, [params.id]);

  useEffect(() => {
    if (params.id) {
      dispatch(ChatMessagesService(params.id));
    }
  }, [params.id]);

  // if (loading) {
  //   return <Loader />;
  // }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          backgroundImage: `url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)`,
        }}
      >
        <Box
          mt={5}
          px={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "2rem",
            width: "100%",
          }}
        >
          {messages?.map((msg: any, i: number) => (
            <Box
              display="flex"
              justifyContent={
                !(messages?.author?.id == user?.userId)
                  ? "flex-end"
                  : "flex-start"
              }
            >
              <Box
                key={i}
                sx={{
                  background: !(messages?.author?.id == user?.userId)
                    ? "white"
                    : "green",
                  borderRadius: "30px",
                  width: "fit-content",
                  padding: "5px 15px",
                }}
              >
                <p>{msg?.content}</p>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
