import { Button, DialogActions, DialogContent, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { StepperContext } from ".";

export default function SummaryPage() {
  const stepper = useContext(StepperContext);

  function handleSave() {}

  function handleBack() {
    stepper.back();
  }

  return (
    <>
      <DialogContent>
        <Typography variant="h6" gutterBottom>
          Summary
        </Typography>

        <List disablePadding dense>
          <ListItem disableGutters>
            <Typography variant="body1">{"Personal"}</Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary={"First Name:"} />
            <Typography variant="body2">{stepper.compareForm.personal?.firstName}</Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary={"Last Name:"} />
            <Typography variant="body2">{stepper.compareForm.personal?.lastName}</Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary={"Email:"} />
            <Typography variant="body2">{stepper.compareForm.personal?.email}</Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary={"Phone:"} />
            <Typography variant="body2">{stepper.compareForm.personal?.phone}</Typography>
          </ListItem>
          <ListItem disableGutters>
            <Typography variant="body1">{"Address"}</Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary={"Street:"} />
            <Typography variant="body2">{`${stepper.compareForm.address?.streetNumber ?? ""} ${
              stepper.compareForm.address?.streetName ?? ""
            } ${stepper.compareForm.address?.streetType ?? ""}`}</Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary={"Suburb:"} />
            <Typography variant="body2">{`${stepper.compareForm.address?.suburb ?? ""}, ${
              stepper.compareForm.address?.postcode ?? ""
            }`}</Typography>
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleBack}>
          Back
        </Button>
        <Button color="primary" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </>
  );
}
