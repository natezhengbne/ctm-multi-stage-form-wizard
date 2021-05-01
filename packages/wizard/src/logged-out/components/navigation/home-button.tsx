import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    noDecoration: {
      textDecoration: "none !important",
    },
    menuButtonText: {
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.h6.fontWeight,
    },
  })
);

export default function HomeButton() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <>
      {history.location.pathname === "/" ? null : (
        <Link to={"/"} className={classes.noDecoration}>
          <Button color="secondary" size="large" className={classes.menuButtonText}>
            Home
          </Button>
        </Link>
      )}
    </>
  );
}
