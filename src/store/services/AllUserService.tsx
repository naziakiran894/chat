import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../Firebase/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const chatUsersList: any = createAsyncThunk("chatUserlist", async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data: any[] = [];
    querySnapshot.forEach((element) => {
      data.push({
        ...element.data(),
      });
    });
    return data;
  } catch (err) {
    console.error(err, "chatUser [err!]");
  }
});
