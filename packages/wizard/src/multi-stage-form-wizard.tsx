import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { HashRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";

const LoggedOutComponent = lazy(() => import("./logged-out/components/main"));


export default function MultiStageFormWizard() {
  return (
      <HashRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense fallback={<Fragment />}>
            <Switch>
              <Route>
                <LoggedOutComponent />
              </Route>
            </Switch>
          </Suspense>
        </MuiThemeProvider>
      </HashRouter>
  );
}
