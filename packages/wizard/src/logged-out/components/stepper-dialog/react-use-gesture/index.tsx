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

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    minHeight: "60vh",
    maxHeight: "60vh",
  },
}));

export default function TestByReackUseGesture() {
  const classes = useStyles();

  const [{ x, scale, opacity }, api] = useSpring(() => ({ x: 0, scale: 1, opacity: 2  }));
  const bind = useDrag(({ down, movement: [mx] }) => api.start({ x: down ? mx : 0, scale: down ? 1.2 : 1 }));

  const [{ x1 }, api2] = useSpring(() => ({ x1: 0 }));
  const bind2 = useDrag(({ down, movement: [mx] }) => api2.start({ x1: down ? mx : 0 }));

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
        <animated.div {...bind()} style={{ x, scale, opacity }}>
          <Page1 />
        </animated.div>
        <animated.div {...bind2()} style={{ x: x1 }}>
          <Page2 />
        </animated.div>
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
