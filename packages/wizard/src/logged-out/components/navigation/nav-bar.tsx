import React, { memo } from "react";
import { AppBar, createStyles, Hidden, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import HomeButton from "./home-button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <Typography variant="h6" color="primary">
              CTM test
            </Typography>
          </div>
          <div>
            <Hidden smDown>
              <HomeButton />
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default memo(NavBar);
