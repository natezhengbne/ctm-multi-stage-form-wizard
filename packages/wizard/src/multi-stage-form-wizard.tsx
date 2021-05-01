import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { HashRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import NoFancyLibrariesPage from "./logged-out/components/no-fancy-libraries";

const LoggedOutComponent = lazy(() => import("./logged-out/components/main"));

export default function MultiStageFormWizard() {
  return (
    <HashRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route exact path="/">
              <LoggedOutComponent />
            </Route>
            <Route path="/noFancy">
              <NoFancyLibrariesPage />
            </Route>
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </HashRouter>
  );
}
