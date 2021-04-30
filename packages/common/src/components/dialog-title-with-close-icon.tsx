import { Box, DialogTitle, IconButton, Typography, useTheme } from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";

type Props = {
  title: string;
  handleClose: () => void;
};

export default function DialogTitleWithCloseIcon(props: Props) {
  return (
    <>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{props.title}</Typography>
          <IconButton onClick={props.handleClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
    </>
  );
}
