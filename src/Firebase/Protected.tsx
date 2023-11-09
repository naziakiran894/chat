import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../pages/Auth/Login";

function Protected({ userId, children }: any) {
  // const navigate = useNavigate();
  const user = useSelector((state) => state?.auth?.user);
  console.log(userId, "protected for chat");
  if (!userId) {
    // console.log(user, "user");
    return <Navigate to="/Signup" replace />;
  }

  return children;
}
//   if (user?.userId) {
//     Navigate("/Login");
//   } else {
//     Navigate("/");
//   }

//   return children;
// }
export default Protected;
