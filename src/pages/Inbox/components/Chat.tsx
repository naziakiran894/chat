import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { db } from "../../../Firebase/FirebaseConfig";
import ChatHeader from "./ChatHeader";
import ChatMain from "./ChatMain";
import ChatInput from "./ChatInput";

export default function Chat(props: any) {
  const { converation } = props;
  const { id: chatRoomId } = useParams();
  const [chatRoom, setChatRoom] = useState();
  const [message, setMessages] = useState<any[]>([]);
  const [content, setContent] = useState();

  useEffect(() => {
    let mounted = true;
    if (chatRoomId && mounted) {
      onSnapshot(
        query(
          collection(db, "chatrooms", chatRoomId, "messages"),
          orderBy("created")
        ),
        (querySnapshot) => {
          const newItems: ((prevState: never[]) => never[]) | { id: string }[] =
            [];
          querySnapshot.docs.forEach((change) => {
            const obj = {
              ...change.data(),
              id: change.id,
            };
            newItems.push(obj);
          });
          setMessages(newItems);
        }
      );
    }

    return () => {
      mounted = false;
    };
  }, [chatRoomId]);

  console.log(message, "mess");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#ededed",
        flexGrow: 1,
      }}
    >
      <ChatHeader />
      <Divider />
      <ChatMain messages={message} />
      <ChatInput />
    </Box>
  );
}
