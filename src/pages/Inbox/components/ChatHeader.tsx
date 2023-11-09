import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import { Dispatch } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { signOutUser } from "../../../store/services/AuthService";
import { useDispatch } from "react-redux";
import { currentUser } from "../../../store/slices/Authslice";
import { chatUsersList } from "../../../store/services/AllUserService";
import { getDisplayName } from "@mui/utils";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// { users }: any
export default function ChatHeader() {
  // const user = useSelector((state) => state?.auth?.user);
  const [isOpen, setIsOpen] = useState(false);
  const user = useParams;
  const avtharNumber = 3;
  const dispatch = useDispatch();
  return (
    <AppBar
      elevation={0}
      position="static"
      color="default"
      sx={{
        backgroundColor: "#ededed",
        borderLeft: "5px solid gainsboro",
        borderLeftWidth: "thin",
      }}
    >
      <Toolbar style={{ minWidth: "100px" }}>
        <IconButton>
          <Avatar
            alt="Srikanth Polineni"
            src={`https://material-ui.com/static/images/avatar/${avtharNumber}.jpg`}
          />
        </IconButton>
        <Box>
          <Typography noWrap component="h1" color="textPrimary">
            {/* nazia */}
            {user.displayName}
          </Typography>
          <Typography noWrap component="span" variant="body2" color="#919191">
            last seen today at 7:33 PM
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ height: "20px", position: "relative" }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton sx={{ marginBottom: "" }}>
            <MoreVertIcon
              onClick={() => setIsOpen(true)}
              sx={{ paddingTop: "10px" }}
            />
          </IconButton>
          {isOpen && (
            <Box
              sx={{
                backgroundColor: "lightgrey",
                padding: "6px",
                position: "absolute",
                right: "20px",
                top: "70px",
                height: "90px",
              }}
            >
              <Box>
                <CloseIcon
                  onClick={() => setIsOpen(false)}
                  sx={{
                    marginLeft: "30px",
                    fontSize: " 1em",
                    cursor: "pointer",
                  }}
                />
                                      
              </Box>
                      
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "end",
                  padding: "5px",
                  marginTop: "20px",
                  cursor: "pointer",
                }}
                onClick={() => dispatch(signOutUser())}
              >
                {/* {currentUser() ? "signOut" : "Login"} */}
                  signout         
              </Box>
                      
            </Box>
          )}
              
        </Box>
      </Toolbar>
    </AppBar>
  );
}
