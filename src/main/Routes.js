import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import MainPage from '../components/MainPage'

function Routes(props) {
  return (
    <HashRouter>
      <Switch>
        {/* <Route path="/movie-info" component={MovieInfo} /> */}
        <Route path="/**" component={MainPage} />
      </Switch>
    </HashRouter>
  )
}

export default Routes