import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Home from '../views/Home'

function Routes(props) {
  return (
    <HashRouter>
      <Switch>
        {/* {/* <Route path="/home" component={Home}></Route> */}
        <Route path="/**" component={Home} /> */}
      </Switch>
    </HashRouter>
  )
}

export default Routes