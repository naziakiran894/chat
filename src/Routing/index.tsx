import React, { useRef, useEffect } from "react";
import Login from "../pages/Auth/Login";
import Inbox from "../pages/Inbox/index";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../Firebase/FirebaseConfig";
import { auth } from "../Firebase/FirebaseConfig";
import { useDispatch } from "react-redux";
import { currentUser } from "../store/slices/Authslice";
import { getDoc, doc } from "firebase/firestore";
import { async } from "@firebase/util";
import Protected from "../Firebase/Protected";
import Signup from "../pages/Auth/Signup";

import { useSelector } from "react-redux";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.auth?.user);
  const error = useSelector((state) => state?.auth?.error);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await getDoc(doc(db, "users", user.uid)).then(
          async (documentSnapShot) => {
            if (documentSnapShot.exists()) {
              dispatch(currentUser(documentSnapShot.data()));
            }
          }
        );
      }
    });
    return () => {
      unsub;
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <Protected userId={user?.userId}>
              <Inbox />
            </Protected>
          }
        />

        <Route path="/:id" element={<Inbox />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
