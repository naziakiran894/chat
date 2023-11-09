import { db } from "../../Firebase/FirebaseConfig";
import {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  query,
  collection,
  addDoc,
} from "firebase/firestore";

export const subscribeUserToChatroom = async (
  userId: string,
  chatroomId: string,
  chatroomData: any
) => {
  const docRef = doc(db, "userChatrooms", userId, "chatrooms", chatroomId);

  return await setDoc(docRef, {
    ...chatroomData,
    lastMessageId: null,
    lastMessageContent: "",
    lastMessageDate: chatroomData.created,
    isRead: true,
  });
};

export const getUser = async (uid: string) => {
  console.log(uid, "uid");
  const userRef = doc(db, "users", uid);
  return await getDoc(userRef)
    .then((doc) => {
      if (doc.exists()) {
        const data = doc.data();
        console.log(data, "data");
        return {
          id: doc.id,
          ...doc.data(),
        };
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
