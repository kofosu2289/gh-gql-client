import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";

const PullRequestsMain = () => <>Main</>;
const NewPullRequest = () => <>New PullRequest</>;
const ListPullRequests = () => <>List</>;

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
