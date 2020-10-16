import React from "react";
import { Switch, Route, useHistory } from "react-router";
import { WelcomeWindow } from "./WelcomeWindow";
import { Issues } from "./Issues/index";
import { Repositories } from "./Repositories/index";
import { PullRequests } from "./PullRequests/index";

export const App = () => {
  const history = useHistory();
  return (
    <blessed-box
      style={{
        bg: "#0000ff",
      }}
    >
      <blessed-listbar
        height={1}
        items={{
          Quit: {
            keys: "q",
          },
          Issues: {
            keys: "i",
            callback: () => history.push("/issues"),
          },
          Repositories: {
            keys: "r",
            callback: () => history.push("/repositories"),
          },
          "Pull Requests": {
            keys: "p",
            callback: () => history.push("/pull-requests"),
          },
        }}
        style={{
          bg: "grey",
          height: 1,
        }}
      />
      <Switch>
        <Route exact path="/" component={WelcomeWindow} />
        <Route path="/issues" component={Issues} />
        <Route path="/repositories" component={Repositories} />
        <Route path="/pull-requests" component={PullRequests} />
      </Switch>
    </blessed-box>
  );
};
