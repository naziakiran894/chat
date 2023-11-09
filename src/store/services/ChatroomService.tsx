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
import { getUser, subscribeUserToChatroom } from "../lib/chatroom";

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
  users: [] as any,
  error: "",
  message: [] as any,
  currentChannel: null,
};
export const ChatroomUsers: any = createAsyncThunk(
  "ChatroomUsers",
  async () => {
    try {
      const unsub = onSnapshot(doc(db, " users", "SF"), (snapshot) => {
        console.log("messsages: ", unsub());
      });
      return unsub;
    } catch (err) {
      console.error(err, "chatUser [err!]");
    }
  }
);

export const userChatRoom: any = createAsyncThunk(
  "user/ChatRoom",
  async ({ uid, participants }: any) => {
    const created = serverTimestamp();
    try {
      if (participants) {
        // Direct. Check for an existing chatroom
        const docRef = collection(db, "userChatrooms", uid, "chatrooms");
        const q = query(
          docRef,
          where("participants", "array-contains", participants)
        );
        const participant = await getUser(participants);
        if (participant && participant.id) {
          return await getDocs(q)
            .then(async (querySnapshot) => {
              if (!querySnapshot.empty) {
                // Existing chatroom. Return ID.
                return { id: querySnapshot.docs[0].id };
              }

              // No chatroom. Create one.
              const chatroomName = `@${participant.displayName}`;
              let chatroomImage = null;

              if (participant.photoUrl) {
                chatroomImage = participant.photoUrl;
              }

              const allParticipants = [uid, participant.id];

              const chatroomData = {
                chatroomType: "direct",
                chatroomName,
                chatroomImage,
                created,
                participants: allParticipants,
                initiatorUid: uid,
              };

              return await addDoc(collection(db, "chatrooms"), chatroomData)
                .then(async (chatroomDoc) => {
                  await subscribeUserToChatroom(
                    uid,
                    chatroomDoc.id,
                    chatroomData
                  );
                  console.log(chatroomDoc.id, "chatroomDoc.id");
                  return { id: chatroomDoc.id };
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    } catch (err) {
      console.error(err, "chatUser [err!]");
    }
  }
);
