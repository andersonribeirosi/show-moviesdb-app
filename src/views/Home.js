import React from 'react'
import Logo from '../assets/images/watching-tv.svg'
import { withRouter } from 'react-router-dom'

class Home extends React.Component {

  render() {
    return (
      <div>
        <div id="slider">
          <h2><img id="iconMovieHome" src={Logo} alt="" /><strong>Seja bem-vindo</strong> - Encontre seu filme favorito</h2>
          <div className="clearfix"></div>
          {/* <button className="btn btn-success btnSearch" type="button">Pesquisar</button> */}
        </div>
      </div>
    )
  }
}

export default withRouter(Home)