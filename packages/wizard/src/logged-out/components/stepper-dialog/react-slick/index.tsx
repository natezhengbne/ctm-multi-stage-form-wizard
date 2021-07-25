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
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    minHeight: "60vh",
    maxHeight: "60vh",
  },
}));

export default function TestByReactSlick() {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </Dialog>
    </>
  );
}
