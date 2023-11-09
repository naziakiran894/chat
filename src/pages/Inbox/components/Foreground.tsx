import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";

export default function Foreground(props: any) {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "17px", marginBottom: "20px" }}>
      <Box
        boxShadow={3}
        component="div"
        sx={{
          display: "flex",
          overflow: "hidden",
          backgroundColor: "red",
          height: "100vh",
        }}
      >
        {props.children}
      </Box>
    </Container>
  );
}
