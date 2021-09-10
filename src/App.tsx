import { ChakraProvider, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";

import AppErrorLayout from "./layouts/AppErrorLayout";
import AppMainLayout from "./layouts/AppMainLayout";
import NotAuthenticatedPage from "./pages/error/NotAuthenticatedPage";
import NotFoundPage from "./pages/error/NotFoundPage";
import HomePage from "./pages/home/HomePage";
import LandingPage from "./pages/landing/LandingPage";

function App() {
  useEffect(() => {
    document.title = "SupaTwitter";
  }, []);

  return (
    <ChakraProvider>
      <Text>SupaTwitter</Text>

      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />

          <Route path="/home">
            <AppMainLayout>
              <HomePage />
            </AppMainLayout>
          </Route>

          <Route path="/error">
            <AppErrorLayout>
              <Route path="/error/not-found" component={NotFoundPage} />
              <Route
                path="/error/not-authenticated"
                component={NotAuthenticatedPage}
              />
              <Route
                path="/error/not-authorized"
                component={NotAuthenticatedPage}
              />
            </AppErrorLayout>
          </Route>

          <Redirect from="**" to="/error" />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
