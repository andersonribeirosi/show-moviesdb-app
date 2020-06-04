import React from 'react'
import Logo from '../assets/images/watching-tv.svg'
import { withRouter } from 'react-router-dom'

class MainPage extends React.Component {

  render() {
    return (
      <div id="slider">
        <h2><img id="iconMovie" src={Logo} alt="" /><strong>Seja bem-vindo</strong> - Encontre seu filme favorito </h2>
        <div className="clearfix"></div>
      </div>
    )
  }
}

export default withRouter(MainPage)