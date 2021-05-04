import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./navigation/nav-bar";
import StepperDialog from "./stepper-dialog";

export default function Main() {
  let history = useHistory();

  return (
    <>
      <NavBar />
      <Box paddingTop={8} paddingBottom={6}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Multi Stage Form Wizard
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            There are two difference wizards implemention.
          </Typography>
        </Container>
      </Box>
      <Box paddingTop={8} paddingBottom={8}>
        <Container maxWidth="md">
          <Grid container spacing={4} justify="space-evenly">
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Stepper
                  </Typography>
                  <Typography>It display progress through a sequence of numbered. Used material-ui</Typography>
                </CardContent>
                <CardActions>
                  <StepperDialog />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    No fancy libraries
                  </Typography>
                  <Typography>
                    It provides a wizard-like workflow by html tag and parts of styles uses Bootstrap.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      history.push("/noFancy");
                    }}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
