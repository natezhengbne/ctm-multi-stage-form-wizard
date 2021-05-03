import React from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { HashRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import NoFancyLibrariesPage from "./logged-out/components/no-fancy-libraries";
import LoggedOutComponent from "./logged-out/components/main";

export default function MultiStageFormWizard() {
  return (
    <HashRouter hashType="slash">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/">
            <LoggedOutComponent />
          </Route>
          <Route path="/noFancy">
            <NoFancyLibrariesPage />
          </Route>
          <Route>
            <LoggedOutComponent />
          </Route>
        </Switch>
      </MuiThemeProvider>
    </HashRouter>
  );
}
