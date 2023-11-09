/* eslint-disable camelcase */
import { styled, Box } from "@mui/system";
import { Button, Typography, Card } from "@mui/material";
import Avatar from "@mui/material/Avatar";

// const MainBox = styled(Box)({
//
// });
const MainCard = styled(Card)({
  height: " 473px",
  width: "378px",
  Top: "0px",
  borderRadius: "6px",
});
// const Chat = styled("chat")({
//   display: "flex",
//   flexDirection: "end",
//   alignItems: "flex-end",
//   marginLeft: "200px",
// });
// eslint-disable-next-line camelcase
const ChatBtn = styled(Button)({
  height: "40px",
  width: "144px",
  display: "inline",
  marginLeft: "250px",
  borderRadius: "8px",
  backgroundColor: "#1D9BD6",
  // backgroundColor:
  //   "linear-gradient(100.22deg, #1D9BD6 -16.25%, #5AC3B8 148.05%)",

});
const SidebarCard = styled("Card")({
  display: "flex",
  height: "80px",
  width: "320",
  borderRadius: "0px",
  padding: "12px",
  border: " 1px solid #E4E5E7",
  backgroundColor: "#25A0D2",
});
const InnerContent = styled("CardContent")({
  margin: "8px",
  padding: "0",
});
const Read = styled("div")({
  height: "20px",
  width: "20px",
  left: "0px",
  top: "0px",
  borderRadius: "4px",
  color: "white",
});
const Boxes = styled(Box)({
  display: "flex",
  marginLeft: "30%",
  width: "20px",
});

const Sd_Avatar = styled(Avatar)({
  backgroundColor: "white",
});

const Typo = styled(Typography)({
  color: "white",
  fontFamily: " Poppins",
  fontSize: "18px",
  fontWeight: "500",
  lineHeight: "24px",
  letterSpacing: "-0.01em",
  textAlign: "left",
});
const Boxx = styled(Box)({
  height: "36px",
  width: "278px",
  borderRadius: " 8px",
  padding: " 8px 12px 8px 12px",
  backgroundColor: "#64C4BC",
  margin: "auto",
  marginTop: "20px",
});
const Tygraphy = styled(Typography)({
  width: "150%",
});
const Boxies = styled(Box)({
  height: "16px",
  width: " 278px",
  borderRadius: "0px",
  alignItems: "flex-end",
  display: "flex",
  justifyContent: "end",
  margin: "20px 40px",
  color: "#E4E5E7",
  Weight: "400",
  Size: "12px",
  LineHeight: "16px",
});
const Boxieses = styled(Box)({
  height: "36px",
  width: "292px",
  marginLeft: "11px",
  borderRadius: "8px",
  padding: " 8px",
  backgroundColor: "#FFFFFF",
});
const Bxxx = styled(Box)({
  height: " 40px",
  width: "350px",
  marginLeft: "11px",
  marginTop: "62px",
  borderRadius: "6px",
  backgroundColor: "#FFFFFF",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
});

const Btn = styled(Button)({
  background: "linear-gradient(102.81deg, #1D9BD6 -2.54%, #64C4BC 100%)",
  height: "28px",
  width: " 54px",
  color: "white",
  borderRadius: " 4px",
  margin: " 7px 17px 7px 7px ",
  padding: "4px 10px 4px 10px",
});
const PopupButton = styled("PopupButton")({
  display: "flex",
  justifyContent: "flex-end",

});

export {
  ChatBtn,
  MainCard,
  InnerContent,
  SidebarCard,
  Read,
  Boxes,
  Sd_Avatar,
  Typo,
  Boxx,
  Tygraphy,
  Boxies,
  Boxieses,
  Bxxx,
  Btn,
  PopupButton,

};
