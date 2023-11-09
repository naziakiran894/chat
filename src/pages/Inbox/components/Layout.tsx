// import { experimentalStyled } from '@material-ui/core'
import React from "react";
import { styled } from "@mui/system";
import { experimentalStyled, useTheme } from "@mui/material/styles";

const MultiColoredDiv = experimentalStyled("div")(({ theme }) => ({
  background:
    "linear-gradient(to bottom, darkcyan 0%, darkcyan 13%, gainsboro 13%, gainsboro 100%)",
  display: "flex",
  maxHeight: "100vh",
  height: "100%",
  width: "100%",
}));

export default function Background(props: any) {
  return <MultiColoredDiv>{props.children}</MultiColoredDiv>;
}
