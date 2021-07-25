import DialogTitleWithCloseIcon from "@ctm-multi-stage-wizard/common/components/dialog-title-with-close-icon";
import { CompareForm } from "@ctm-multi-stage-wizard/common/data-type/compare-form";
import {
  Box,
  Button,
  Dialog,
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { createContext, useEffect, useRef, useState } from "react";
import SwipeableViews, { OnSwitchingCallbackTypeDescriptor } from "react-swipeable-views";
import anime from "animejs";
import { useDrag, useMove } from "react-use-gesture";
import { useSpring, animated } from "@react-spring/web";
import { useSwipeable } from "react-swipeable";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    minHeight: "60vh",
    maxHeight: "60vh",
  },
}));

export default function TestByReackSwipeable() {
  const classes = useStyles();

  const handlers = useSwipeable({
    // onSwipedLeft: () => slide(NEXT),
    // onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={true}
        disableBackdropClick
        classes={{
          paper: classes.dialogPaper,
        }}
        keepMounted={false}
      >
        <div {...handlers}>
          <Page1 />
          <Page2 />
        </div>
      </Dialog>
    </>
  );
}

function Page1() {
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Page - 1
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

function Page2() {
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Page - 2
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
