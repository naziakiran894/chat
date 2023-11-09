import React, { useEffect, useRef, useCallback, useState } from "react";
import { styled } from "@mui/system";
import experimentalStyled from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Loader from "../../../component/molecules/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { chatUsersList } from "../../../store/services/AllUserService";
// import AllUser from "../../../store/slices/AllUser";
// import {
//   fetchMoreUsers,
//   fetchUsers,
// } from "../../../store/services/InboxService";

import useIsInViewport from "use-is-in-viewport";
import { array } from "yup";
import { userChatRoom } from "../../../store/services/ChatroomService";
// import AllUser from "../../../store/slices/AllUser";

export default function ConversationList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const limit = 15;
  const [isInViewport, targetRef] = useIsInViewport();
  const [isPaginatedInViewport, paninationRef] = useIsInViewport();
  // const user = useSelector((state): any => state?.user?.users);
  const users = useSelector((state): any => state?.allUser?.allUser);
  const currentUser = useSelector((state): any => state.auth.user);
  const chatRoomId = useSelector((state): any => state.messages.chatRoomId?.id);
  // const skip = useSelector((state): any => state?.user?.users?.skip);
  // const isLoading = useSelector((state): any => state?.user?.loading);
  // const loading = useSelector((state) => state.user?.loading);
  // console.log(loading, "loading");
  // const skip = useSelector((state): any => state?.user?.users?.skip);
  // console.log(users, "users", offset);

  console.log(users, "user");
  useEffect(() => {
    dispatch(chatUsersList());
  }, []);

  const handleCreateChat = (participantId: string) => {
    if (currentUser?.userId && participantId) {
      console.log(currentUser?.userId, "currentUser?.userIds");
      dispatch(
        userChatRoom({ uid: currentUser?.userId, participants: participantId })
      );
    }
  };

  useEffect(() => {
    if (chatRoomId) {
      navigate(`/${chatRoomId}`);
    }
  }, [chatRoomId]);

  const observer = useRef();
  navigate;
  // const lastCardRef = useCallback((node: any) => {
  //   if (isLoading && users.length >= user.total) return;
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting) {
  //       dispatch(
  //         chatUsersList({
  //           limit: 15,
  //           skip: 15,
  //           // skip: skip !== 0 ? Number(skip + 15) : 15,
  //         })
  //       );
  //       return;
  //     }
  //   });
  //   if (node) observer?.current?.observe(node);
  // }, []);
  // if (loading) {
  //   return (
  //     <div>
  //       <Loader />;
  //     </div>
  //   );
  // }

  // if (loading) {
  //   return (
  //     <div>
  //       <Loader />;
  //     </div>
  //   );
  // }

  return (
    <List
      sx={{
        backgroundColor: "white",
        mb: 0,
        overflow: "auto",
        borderRight: "5px solid gainsboro",
        borderRightWidth: "thin",
      }}
    >
      <Box>
        {users?.map((c: any, index: number) => {
          if (users.length === index + 1) {
            return (
              <div
                key={index}
                onClick={() => handleCreateChat(c.userId)}
                // ref={lastCardRef}
                // onClick={() => navigate(`/${c.id}`)}
              >
                <React.Fragment key={c.phone}>
                  <ListItem button selected={index === 3}>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={c?.photoUrl} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={c?.displayName === "" ? c.phone : c?.displayName}
                      secondary={
                        <Tooltip
                          id={c.phone}
                          sx={{ maxWidth: "20rem" }}
                          placement="bottom"
                          enterDelay={1000}
                          title={c.displayName}
                        >
                          <div
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              width: "15rem",
                            }}
                          >
                            <Typography
                              noWrap
                              component="span"
                              variant="body2"
                              color="textPrimary"
                            >
                              {c.displayName}
                            </Typography>
                          </div>
                        </Tooltip>
                      }
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              </div>
            );
          } else {
            return (
              <React.Fragment key={index}>
                <ListItem
                  onClick={() => handleCreateChat(c.userId)}
                  button
                  selected={index === 3}
                >
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={c?.photoUrl} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={c?.displayName}
                    secondary={
                      <Tooltip
                        id={c.phone}
                        sx={{ maxWidth: "20rem" }}
                        placement="bottom"
                        enterDelay={1000}
                        title={c.university}
                      >
                        <div
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            width: "15rem",
                          }}
                        >
                          {/* <Typography
                            noWrap
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            {c.university}
                          </Typography> */}
                        </div>
                      </Tooltip>
                    }
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          }
        })}
      </Box>
    </List>
  );
}
