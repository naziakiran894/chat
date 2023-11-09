import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../Firebase/FirebaseConfig";
import {
  setDoc,
  doc,
  serverTimestamp,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, subscribeUserToChatroom } from "../lib/chatroom";

interface IUser {
  displayName: string;
  email: string;
  phoneNumber: string;
  photoUrl: string;
  userId: string;
  error: string;
  chatRoomId: string;
}

const initialState = {
  loading: false,
  users: [] as any,
  error: "",
  message: [] as any,
  currentChannel: null,
  chatRoomId: "",
};

export const ChatMessagesService: any = createAsyncThunk(
  "ChatroomUsers",
  async () => {
    try {
      const unsub = onSnapshot(
        doc(db, " chatrooms", chatRoomId, "messages"),
        (snapshot) => {
          console.log("messsages: ", users);
        }
      );
      return unsub;
    } catch (err) {
      console.error(err, "chatUser [err!]");
    }
  }
);

// useEffect(async () => {
//   const mounted = true;
//   if (chatRoomId && mounted) {
//     const chatRoomData = await getChatRoom(user.id, chatRoomId);
//     setChatRoom(chatRoomData);

//     onSnapshot(
//       query(
//         collection(database, "chatrooms", chatRoomId, "messages"),
//         orderBy("created")
//       ),
//       (querySnapshot) => {
//         const newItems = [];
//         querySnapshot.docs.forEach((change) => {
//           const obj = {
//             ...change.data(),
//             id: change.id,
//           };
//           newItems.push(obj);
//         });
//         setMessages(newItems);
//         querySnapshot;
//       }
//     );
//   }

//   return () => {
//     mounted = false;
//   };
// }, []);
