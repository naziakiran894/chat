import { useTheme } from "@mui/material";

const pxToRem = (px: number) => {
  const theme = useTheme();
  return theme.typography.pxToRem(px);
};

export default pxToRem;
