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
  DialogTitle,
} from "@material-ui/core";
import React, { createContext, useEffect, useRef, useState } from "react";
import SwipeableViews, { OnSwitchingCallbackTypeDescriptor } from "react-swipeable-views";
import anime from "animejs";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    minHeight: "60vh",
    maxHeight: "60vh",
  },
}));

const useDrag = () => {
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (!dragging) return;

    function handleMouseMove(e) {
      if (dragging) console.log("I'm Dragging");
    }

    function handleMouseUp(e) {
      e.stopPropagation();
      e.preventDefault();
      setDragging(false);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  function handleMouseDown(e) {
    e.stopPropagation();
    e.preventDefault();
    setDragging(true);
  }

  const bindTrigger = {
    onMouseDown: handleMouseDown,
  };

  return [bindTrigger];
};

export default function TestByMySelf() {
  const classes = useStyles();
  const [position, setPosition] = useState(0);

  let mouseDown = false;

  const [bindTrigger] = useDrag();

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
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5">{position}</Typography>
          </Box>
        </DialogTitle>

        <div
          {...bindTrigger}
          // onMouseUp={(event) => {
          //   event.stopPropagation();
          //   event.preventDefault();
          //   console.log("onMouseUp-> ", event);
          //   mouseDown = false;
          // }}
          // onMouseDown={(event) => {
          //   event.stopPropagation();
          //   event.preventDefault();
          //   console.log("onMouseDown-> ", event);
          //   mouseDown = true;
          // }}
          // onMouseMove={(event) => {
          //   if (mouseDown) {
          //     console.log(
          //       "onMouseMove-> ",
          //       JSON.stringify({
          //         screenX: event.screenX,
          //         pageX: event.pageX,
          //         clientX: event.clientX,
          //         movementX: event.movementX,
          //       })
          //     );
          //   }
          // }}
        >
          <Card>
            <CardContent style={{ backgroundColor: "red" }}>
              <Typography gutterBottom variant="h5" component="h2">
                Page - 1 - Element 1
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Page - 1 - Element 2
              </Typography>
              <Button variant="contained" color="primary">
                Primary
              </Button>
            </CardContent>
          </Card>
        </div>
      </Dialog>
    </>
  );
}

function Page1() {
  return (
    <>
      <Card>
        <CardContent style={{ backgroundColor: "red" }}>
          <Typography gutterBottom variant="h5" component="h2">
            Page - 1 - TestByReackSwipeableViews
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Page - 1 - TestByReackSwipeableViews
          </Typography>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
