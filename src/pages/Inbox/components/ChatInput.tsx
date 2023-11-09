import React from "react";
import { styled } from "@mui/system";
import InputUnstyled from "@mui/base/InputUnstyled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { experimentalStyled, useTheme } from "@mui/material/styles";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import { alpha } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../Firebase/FirebaseConfig";
import { useRef } from "react";
import { FirebaseStorage, ref } from "firebase/storage";
// import { ChatroomUsers } from "../../../store/services/ChatroomService";
import { useSelector } from "react-redux";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useParams } from "react-router-dom";
// import Loader from "../../../component/molecules/loader/Loader";

export default function ChatInput() {
  const user = useSelector((state) => state?.auth?.user);
  const error = useSelector((state) => state?.auth?.error);
  const [content, setContent] = useState("");
  const [chatRoom, setChatRoom] = useState();
  const { id: chatRoomId } = useParams();

  const sendMessage = ({ chatId, payload }: any) => {
    console.log(payload, "payload");
    try {
      console.log("triggered");
      addDoc(collection(db, "chatrooms", chatId, "messages"), payload);
    } catch (err) {
      console.log("send message err!", err);
    }
  };
  const handleSendMessage = async (e: any) => {
    // e.preventDefault();
    if (user && chatRoomId) {
      await sendMessage({
        chatId: chatRoomId,
        payload: {
          content,
          author: {
            id: user?.userId,
            username: user.displayName,
            photoUrl: user.photoUrl || "",
          },
          created: serverTimestamp(),
          isDeleted: false,
          modified: serverTimestamp(),
        },
      });
    }

    setContent("");
  };
  console.log(content);
  const Search = experimentalStyled("div")(({ theme }: any) => ({
    position: "relative",
    borderRadius: 45,
    backgroundColor: alpha(theme.palette.common.white, 0.55),

    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.55),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const StyledInputBase = styled(TextField)(({ theme }: any) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon,
      paddingLeft: `calc(1em + ${theme.spacing(0.5)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <Box sx={{ backgroundColor: "#dce5ed" }}>
      <Box
        ml={2}
        mr={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <SentimentVerySatisfiedIcon
          sx={{ color: "#919191", marginLeft: "16px", paddingBottom: "5px" }}
        />
        <AttachFileIcon sx={{ color: "#919191", marginLeft: "16px" }} />
        <Search
          sx={{ flexGrow: 1, width: "100%", padding: "5px", border: "none" }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Type a message"
            value={content}
            onChange={(e) => {
              console.log(e.target.value, "e.target.value");
              setContent(e.target.value);
            }}
            style={{ width: "200px" }}
          />

          {/* <TextareaAutosize
            // inputProps={{ "aria-label": "search" } as any}
            aria-label="empty textarea"
           
          /> */}
        </Search>
        <SendIcon
          onClick={handleSendMessage}
          type="submit"
          sx={{ color: "#919191", marginLeft: "16px", cursor: "pointer" }}
        />
        <MicIcon
          sx={{ color: "#919191", marginLeft: "16px", cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
}
