import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Slider from '../components/Slider'

function Routes(props) {
  return (
    <HashRouter>
      <Switch>
        <Route path="/**" component={Slider} /> */}
      </Switch>
    </HashRouter>
  )
}

export default Routes