import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { PullRequestsMain } from "./PullRequestsMain";
import { NewPullRequest } from "./NewPullRequest";
import { ListPullRequests } from "./ListPullRequests";

export const PullRequests = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.path} component={PullRequestsMain} />
      <Route path={`${match.path}/new`} component={NewPullRequest} />
      <Route path={`${match.path}/list`} component={ListPullRequests} />
    </Switch>
  );
};
