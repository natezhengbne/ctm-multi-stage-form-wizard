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

export default function TestByReackSwipeableViews() {
  const classes = useStyles();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [action, setAction] = useState({
    position: 0,
    type: "end",
  });

  const handleChangeIndex = (index: number, indexLatest: number) => {
    setCurrentPageIndex(index);
  };

  const handleSwitch = (index: number, type: "move" | "end") => {
    setAction({
      position: parseFloat(index.toFixed(4)),
      type,
    });
  };

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
            <Typography variant="h5">
              {currentPageIndex} - {action.type} - {action.position}
            </Typography>
          </Box>
        </DialogTitle>

        <SwipeableViews
          index={currentPageIndex}
          enableMouseEvents
          resistance
          onChangeIndex={handleChangeIndex}
          onSwitching={handleSwitch}
          hysteresis={0.5} // 0-1
          springConfig={{ duration: "3s", easeFunction: "linear", delay: "2s" }}
        >
          <Page1></Page1>
          <Page2></Page2>
        </SwipeableViews>
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

function Page2() {
  return (
    <>
      <Card>
        <CardContent style={{ backgroundColor: "green" }}>
          <Typography gutterBottom variant="h5" component="h2">
            Page - 2 - TestByReackSwipeableViews
          </Typography>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
