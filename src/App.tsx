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
import ExplorePage from "./pages/explore/ExplorePage";
import HomePage from "./pages/home/HomePage";
import LandingPage from "./pages/landing/LandingPage";
import MessagesPage from "./pages/messages/MessagesPage";
import NotificationsPage from "./pages/notifications/NotificationsPage";
import UserProfilePage from "./pages/user-profile/UserProfilePage";

function App() {
  useEffect(() => {
    document.title = "SupaTwitter";
  }, []);

  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />

          <AppMainLayout>
            <Route path="/home" component={HomePage} />
            <Route path="/notifications" exact component={NotificationsPage} />
            <Route path="/explore" exact component={ExplorePage} />
            <Route path="/messages" exact component={MessagesPage} />
            <Route path="/:username" component={UserProfilePage} />
          </AppMainLayout>

          {/* Error Routes */}
          <Route
            path="/error"
            render={(props) => {
              console.log(`path: /error, props: `, props);
              const path = props.match.path;

              return (
                <AppErrorLayout>
                  <Route path={`${path}/not-found`} component={NotFoundPage} />
                  <Route
                    path={`${path}/not-authenticated`}
                    component={NotAuthenticatedPage}
                  />
                  <Route
                    path={`${path}/not-authorized`}
                    component={NotAuthenticatedPage}
                  />

                  <Redirect from={`${path}/**`} to={`${path}/not-found`} />
                </AppErrorLayout>
              );
            }}
          />

          <Redirect from="**" to="/error" />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
