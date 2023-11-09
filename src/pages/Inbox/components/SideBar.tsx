import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SideBarSearch from "./SideBarSearch";
import ConversationList from "./ConversationList";
import SideBarHeader from "../components/SideBarHeader";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import theme from "../../../theme";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TabScrollButton from "@mui/material/TabScrollButton";

export default function SideBar() {
  const [isProfileOpen, setProfileOpen] = useState(false);

  // function useChatScroll<T>(dep: T): React.MutableRefObject<HTMLDivElement> {
  //   const ref = React.useRef<HTMLDivElement>();
  //   React.useEffect(() => {
  //     if (ref.current) {
  //       ref.current.scrollTop = ref.current.scrollHeight;
  //     }
  //   }, [dep]);
  //   return ref;
  // }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: theme.palette.primary.main,
          width: "400px",
        }}
      >
        <SideBarHeader openProfile={setProfileOpen} />
        <Divider />
        <SideBarSearch />
        <Divider />
        <ConversationList />
      </Box>

      {isProfileOpen && (
        <Box
          boxShadow={2}
          zIndex="tooltip"
          position="absolute"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "calc(100% - 38px)",
            backgroundColor: "#ededed",
            width: "400px",
          }}
        >
          <Box
            pt={7.6}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#00bfa5",
            }}
          >
            <Box
              sx={{
                ml: 2,
                marginTop: "auto",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <IconButton onClick={() => setProfileOpen(false)}>
                <ArrowBackIcon sx={{ color: "#ffffff" }} />
              </IconButton>
              <Typography
                component="h1"
                color="#ffffff"
                sx={{ fontSize: "19px", marginTop: "11px", marginLeft: "20px" }}
              >
                Profile
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

// const ColorButton: React.Component  = styled(Button) (({ theme }) => ({
//   color: theme.palette.getContrastText('#fff'),
//   backgroundColor: '#00535a',
//   '&:hover': {
//     backgroundColor: '#00535a',
//   },
// }));
