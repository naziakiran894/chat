import { ReactNode } from "react";
import React from "react";
import {
  Button as MUIButton,
  ButtonProps as MuiButtonProps,
  SxProps,
  Theme,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import pxToRem from "../molecules/pxToRem";

export type ButtonProps = {
  variant: "contained" | "outlined" | "text";
  id?: string;
  bgColor:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "grey"
    | "transparent";
  disabled?: boolean;
  size: "small" | "medium" | "large" | "full" | "fit-content";
  className?: string;
  tooltip?: string;
  icon?: ReactNode;
  sx?: SxProps<Theme>;
  type?: string;
} & Omit<MuiButtonProps, "size">;

/*
NOTES:
    - when using Icons with text pass Icon to Icon prop and text as children
    If just using Icons use IconButton component Instead

*/

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const {
    size,
    endIcon,
    className,
    bgColor,
    sx,
    id,
    disabled,
    onClick,
    tooltip,
    icon,
    variant,
    children,
  } = props;
  const theme = useTheme();

  const calcWidth = () => {
    switch (size) {
      case "small":
        return icon ? pxToRem(55) : pxToRem(81);
      case "medium":
        return icon ? pxToRem(85) : pxToRem(113);
      case "large":
        return icon ? pxToRem(85) : pxToRem(117);
      case "full":
        return "100%";
      case "fit-content":
        return "fit-content";
    }
  };

  const calcHeight = () => {
    switch (size) {
      case "small":
        return pxToRem(30);
      case "medium":
        return pxToRem(36);
      case "large":
        return pxToRem(48);
      case "fit-content":
        return "fit-content";
      default:
        return pxToRem(48);
    }
  };

  const calcBackgroundColor = () => {
    if (disabled) {
      return "rgba(145, 158, 171, 0.24)";
    } else if (bgColor === "grey") {
      return theme.palette.grey[300];
    } else if (bgColor === "transparent") {
      return "transparent";
    } else {
      return theme.palette[bgColor].main;
    }
  };

  const calcColor = () => {
    if (bgColor === "grey") {
      return theme.palette.grey[800];
    } else if (bgColor === "transparent") {
      return "inherit";
    } else {
      return theme.palette[bgColor].contrastText;
    }
  };

  return (
    <MUIButton
      className={className}
      sx={{
        backgroundColor: calcBackgroundColor(),
        width: calcWidth(),
        height: calcHeight(),
        borderRadius: pxToRem(8),
        ...sx,
      }}
      id={id}
      disabled={disabled}
      variant={variant}
      onClick={onClick}
      startIcon={icon}
      endIcon={endIcon}
      type={props.type}
    >
      {!!tooltip ? (
        <Tooltip title={tooltip}>
          <Typography
            sx={{
              textTransform: "capitalize",
              color: calcColor(),
            }}
            variant="subtitle2"
          >
            {children}
          </Typography>
        </Tooltip>
      ) : (
        <Typography
          sx={{
            textTransform: "capitalize",
            color: calcColor(),
          }}
          variant="subtitle2"
        >
          {children}
        </Typography>
      )}
    </MUIButton>
  );
};

export default Button;
