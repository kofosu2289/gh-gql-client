import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";

const IssuesMain = () => <>Main</>;
const NewIssue = () => <>New Issue</>;
const ListIssues = () => <>ListIssues</>;

export const Issues = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.path} component={IssuesMain} />
      <Route path={`${match.path}/new`} component={NewIssue} />
      <Route path={`${match.path}/list`} component={ListIssues} />
    </Switch>
  );
};
