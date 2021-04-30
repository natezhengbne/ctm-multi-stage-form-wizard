import React from "react";
import { createStyles, makeStyles, Theme, CircularProgress, Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    circularProgress: {
      color: theme.palette.secondary.main,
    },
  })
);

export default function ButtonCircularProgress() {
  const classes = useStyles();

  return (
    <Box color="secondary.main" pl={1.5} display="flex">
      <CircularProgress
        className={classes.circularProgress}
        size={24}
        thickness={5}
      />
    </Box>
  );
}
