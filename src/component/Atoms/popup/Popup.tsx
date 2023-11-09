/* eslint-disable react/jsx-pascal-case */
/* eslint-disable linebreak-style */
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import MessageIcon from "@mui/icons-material/Message";
import CloseIcon from "@mui/icons-material/Close";
// import { margin } from "@mui/system";
import * as SC from "./Popup.styled";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <SC.PopupButton>
        <SC.ChatBtn
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <MessageIcon />
        </SC.ChatBtn>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <SC.MainCard>
            <p>heading</p>
          </SC.MainCard>
        </Popover>
      </SC.PopupButton>
    </div>
  );
}
