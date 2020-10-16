import React, { useRef } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Panel } from "../Panel";

export const RepositoriesMain = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const ref = useRef<any>()

  React.useEffect(() => {
    ref.current.key("c", () => history.push(`${match.url}/new`))
    ref.current.key("l", () => history.push(`${match.url}/list`))
  }, [])
  
  return (
    <Panel ref={ref} height={10} top="25%" left="center">
      <blessed-text
        left="center"
        bg="white"
        fg="black"
        content="Repositories Home"
      />
      <blessed-button
        left="center"
        top={3}
        bg="white"
        fg="black"
        content="l:List Repositories"
      />
      <blessed-text
        left="center"
        top={5}
        bg="white"
        fg="black"
        content="c:Create New Repository"
      />
    </Panel>
  )
}