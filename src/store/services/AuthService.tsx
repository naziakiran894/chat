import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { auth } from "../../Firebase/FirebaseConfig";
import { db } from "../../Firebase/FirebaseConfig";
import { getAuth } from "firebase/auth";

import { doc, setDoc, getDoc } from "firebase/firestore";

import {
  signOut,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const createUserWithEmail: any = createAsyncThunk(
  "auth/CreateUser",

  async (
    { email, password, displayName, phoneNumber }: any,
    { rejectWithValue }
  ) => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        const userData = {
          displayName: displayName,
          email: email,
          phoneNumber: phoneNumber,
          photoUrl: "",
          userId: user.uid,
        };
        console.log(userData, "userdataaaaaaaa");
        await setDoc(doc(db, "users", user.uid), userData);

        return userData;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        return rejectWithValue(errorCode);
      });
  }
);

//

export const loginWithGoogle: any = createAsyncThunk(
  "users/loginWithGoogle",
  async (test, { rejectWithValue }): Promise<any> => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider)
      .then(async (data) => {
        const userData = {
          displayName: data.user.displayName,
          email: data.user.email,
          phoneNumber: data.user.phoneNumber,
          photoUrl: data.user.photoURL,
          userId: data.user.uid,
        };
        console.log(data, "dataaa");

        return await getDoc(doc(db, "users", data.user.uid)).then(
          async (documentSnapShot: any) => {
            if (!documentSnapShot.exists()) {
              await setDoc(doc(db, "users", data.user.uid), userData);
            }
            return userData;
          }
        );
      })
      .catch((error) => {
        return rejectWithValue(error);
      });
  }
);

export const signOutUser = createAsyncThunk("users/signOutUser", async () => {
  const auth = getAuth();

  await signOut(auth);
  signOut(auth)
    .then(() => {
      console.log(signOutUser, "signOut");
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error, "errors");
      // An error happened.
    });
});
